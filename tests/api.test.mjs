import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {DatabaseSync} from 'node:sqlite';
import {createApi} from '../server/api.mjs';

const courses=JSON.parse(fs.readFileSync(new URL('../server/course-index.json',import.meta.url)));
const assessments=JSON.parse(fs.readFileSync(new URL('../server/assessments.json',import.meta.url)));
const migration=fs.readdirSync(new URL('../drizzle',import.meta.url)).filter(x=>x.endsWith('.sql')).sort().map(x=>fs.readFileSync(new URL('../drizzle/'+x,import.meta.url),'utf8')).join('\n');
const password='Estudo8!';
function setup({dev=false}={}){
 const sql=new DatabaseSync(':memory:');sql.exec('PRAGMA foreign_keys=ON;');sql.exec(migration);
 const prepare=statement=>({bind(...params){
  const stmt=sql.prepare(statement);
  const execute=()=>{const hasRows=stmt.columns().length>0;const results=hasRows?stmt.all(...params):[];const changed=hasRows?sql.prepare('SELECT changes() AS n').get().n:stmt.run(...params).changes;return{results,meta:{changes:Number(changed)}};};
  return{first:async()=>stmt.get(...params)||null,all:async()=>execute(),run:async()=>execute(),execute};
 }});
 const db={prepare,batch:async statements=>{sql.exec('BEGIN');try{const result=statements.map(s=>s.execute());sql.exec('COMMIT');return result;}catch(e){sql.exec('ROLLBACK');throw e;}}};
 let time=Date.now();const handle=createApi({db,courses,assessments,dev,now:()=>time});
 async function request(path,{method='GET',data,cookie,origin='https://academy.test',expectedUser}={}){
  const response=await handle(new Request('https://academy.test/api/'+path,{method,headers:{...(method==='GET'?{}:{'Content-Type':'application/json',Origin:origin}),...(cookie?{Cookie:cookie}:{}),...(expectedUser?{'X-Forge-Account':expectedUser}:{})},...(data!==undefined?{body:JSON.stringify(data)}:{})}));
  return{status:response.status,data:await response.json().catch(()=>null),cookie:response.headers.get('set-cookie')?.split(';')[0],headers:response.headers};
 }
 async function register(login='aluno_a'){const r=await request('auth/register',{method:'POST',data:{login,displayName:login,password}});assert.equal(r.status,201,JSON.stringify(r.data));return r;}
 return{sql,request,register,advance:ms=>{time+=ms;},close:()=>sql.close()};
}
function learned(course,ids){const s={schema:1,courseId:course.id,read:{},quiz:{},exercises:{},projects:{},rpg:{rewarded:[],bosses:{}}};for(const id of ids){const l=course.lessons[id-1];s.read[id]=true;s.quiz[id]={answer:l.quiz.answer,attempts:1};for(const e of l.exercises)s.exercises[`${id}-${e.id}`]=true;}return s;}

test('cadastro, hash lento, cookie seguro e login não expõem credenciais',async()=>{
 const t=setup();try{
  const tooShort=await t.request('auth/register',{method:'POST',data:{login:'aluno_a',displayName:'Aluno',password:'1234567'}});assert.equal(tooShort.status,400);assert.match(tooShort.data.error,/8 a 128/);
  const a=await t.register();const stored=t.sql.prepare('SELECT * FROM users').get();
  assert.notEqual(stored.password,password);assert.equal(JSON.parse(stored.password).algorithm,'scrypt');assert.equal(JSON.parse(stored.password).N,32768);
  assert.notEqual(stored.recovery_hash,a.data.recoveryCode);assert.match(a.headers.get('set-cookie'),/__Host-forge_session=.*HttpOnly.*Secure/);
  assert.equal(a.data.user.password,undefined);assert.equal(a.data.user.recoveryHash,undefined);
  assert.equal((await t.request('progress/go')).status,401);
  const wrong=await t.request('auth/login',{method:'POST',data:{login:'aluno_a',password:'Uma senha errada e longa'}});assert.equal(wrong.status,401);
  const login=await t.request('auth/login',{method:'POST',data:{login:'aluno_a',password}});assert.equal(login.status,200);
  assert.equal((await t.request('auth/me',{cookie:login.cookie})).data.user.id,a.data.user.id);
  assert.equal((await t.request('dev/session')).status,401);
 }finally{t.close();}
});
test('dois alunos têm progresso e rascunhos separados; revisão velha não sobrescreve',async()=>{
 const t=setup();try{
  const a=await t.register('aluno_a'),b=await t.register('aluno_b'),c=courses.go;
  const state=learned(c,[1]);
  assert.equal((await t.request('progress/go',{cookie:b.cookie,expectedUser:a.data.user.id})).status,401);
  const save=await t.request('progress/go',{method:'PUT',cookie:a.cookie,data:{revision:0,userId:b.data.user.id,state,documents:[{kind:'notes',id:'1',content:'Anotação privada do aluno A'}]}});assert.equal(save.status,200);assert.equal(save.data.revision,1);
  const own=await t.request('progress/go?userId='+b.data.user.id,{cookie:a.cookie});assert.equal(own.data.state.notes[1],'Anotação privada do aluno A');
  const other=await t.request('progress/go?userId='+a.data.user.id,{cookie:b.cookie});assert.deepEqual(other.data.state.notes,{});assert.equal(other.data.revision,0);
  const stale=await t.request('progress/go',{method:'PUT',cookie:a.cookie,data:{revision:0,state,documents:[{kind:'notes',id:'1',content:'Conteúdo atrasado'}]}});assert.equal(stale.status,409);
  assert.equal((await t.request('progress/go',{cookie:a.cookie})).data.state.notes[1],'Anotação privada do aluno A');
  const erased=await t.request('progress/go',{method:'PUT',cookie:a.cookie,data:{revision:1,state,documents:[{kind:'notes',id:'1',content:'',deleted:true}]}});assert.equal(erased.status,200);
  assert.equal((await t.request('progress/go',{cookie:a.cookie})).data.state.notes[1],undefined);
 }finally{t.close();}
});
test('combos verificam requisitos no servidor e apontam aulas específicas após erro',async()=>{
 const t=setup();try{
  const a=await t.register(),d=assessments.go.combos[0],c=courses.go,answers=Object.fromEntries(d.questions.map(q=>[q.id,q.answer]));
  assert.equal((await t.request('assessments/go/'+d.id,{method:'POST',cookie:a.cookie,data:{answers}})).status,403);
  const s=learned(c,d.requiredLessons);assert.equal((await t.request('progress/go',{method:'PUT',cookie:a.cookie,data:{state:s,revision:0}})).status,200);
  const wrong={...answers,[d.questions[0].id]:(d.questions[0].answer+1)%4};
  const result=await t.request('assessments/go/'+d.id,{method:'POST',cookie:a.cookie,data:{answers:wrong}});assert.equal(result.status,200);assert.equal(result.data.result.passed,false);assert.equal(result.data.result.correct,2);assert.deepEqual(result.data.result.reviewLessons,[...d.questions[0].reviewLessons].sort((a,b)=>a-b));
  const passed=await t.request('assessments/go/'+d.id,{method:'POST',cookie:a.cookie,data:{answers}});assert.equal(passed.data.result.passed,true);assert.equal(passed.data.result.bestScore,100);
  const repeated=await t.request('assessments/go/'+d.id,{method:'POST',cookie:a.cookie,data:{answers:wrong}});assert.equal(repeated.data.result.passed,true);assert.equal(repeated.data.result.latestPassed,false);
  const p=(await t.request('progress/go',{cookie:a.cookie})).data;assert.equal(p.state.rpg.rewarded.filter(x=>x==='combo:'+d.id).length,1);
 }finally{t.close();}
});
test('projeto final exige todas as aulas e combos; feedback diferencia evidência e execução',async()=>{
 const t=setup();try{
  const a=await t.register(),d=assessments.bancos,c=courses.bancos;
  assert.equal((await t.request('assessments/bancos/final',{method:'POST',cookie:a.cookie,data:{answers:{}}})).status,403);
  await t.request('progress/bancos',{method:'PUT',cookie:a.cookie,data:{state:learned(c,c.lessons.map(x=>x.id)),revision:0}});
  for(const combo of d.combos){const r=await t.request('assessments/bancos/'+combo.id,{method:'POST',cookie:a.cookie,data:{answers:Object.fromEntries(combo.questions.map(q=>[q.id,q.answer]))}});assert.equal(r.status,200);assert.equal(r.data.result.passed,true);}
  const answers=Object.fromEntries(d.finalProject.questions.map(q=>[q.id,q.answer]));
  const incomplete=await t.request('assessments/bancos/final',{method:'POST',cookie:a.cookie,data:{answers,submission:{}}});assert.equal(incomplete.status,200);assert.equal(incomplete.data.result.passed,false);assert.equal(incomplete.data.result.missingFields.length,4);assert.equal(incomplete.data.result.missingRubric.length,6);
  const text='Evidência de teste local: entrada conhecida, saída observada, diagnóstico e limites explicitados.';
  const final=await t.request('assessments/bancos/final',{method:'POST',cookie:a.cookie,data:{answers,submissionVersion:incomplete.data.submissionVersion,submission:{overview:text,implementation:text,tests:text,decisions:text,rubric:d.finalProject.rubric.map(x=>x.id)}}});
  assert.equal(final.data.result.passed,true);assert.match(final.data.result.notice,/não são executados/);assert.equal(final.data.result.mode,'checklist-and-concepts');
  const stale=await t.request('assessments/bancos/final',{method:'POST',cookie:a.cookie,data:{answers,submissionVersion:incomplete.data.submissionVersion,submission:{}}});assert.equal(stale.status,409);assert.equal((await t.request('progress/bancos',{cookie:a.cookie})).data.submission.overview,text);
  const histories=t.sql.prepare("SELECT result FROM assessment_attempts WHERE assessment_id='final'").all();assert.equal(histories.length,2);assert.ok(histories.every(x=>JSON.parse(x.result).submission.version));
  const b=await t.register('aluno_b');assert.equal((await t.request('progress/bancos',{cookie:b.cookie})).data.submission,null);
 }finally{t.close();}
});
test('recuperação usa código uma vez, rotaciona credenciais e encerra sessões anteriores',async()=>{
 const t=setup();try{
  const a=await t.register();const next='Rever8!!';
  const recovered=await t.request('auth/recover',{method:'POST',data:{login:'aluno_a',recoveryCode:a.data.recoveryCode,newPassword:next}});assert.equal(recovered.status,200);assert.notEqual(recovered.data.recoveryCode,a.data.recoveryCode);
  assert.equal((await t.request('progress/go',{cookie:a.cookie})).status,401);
  assert.equal((await t.request('auth/recover',{method:'POST',data:{login:'aluno_a',recoveryCode:a.data.recoveryCode,newPassword:password}})).status,401);
  assert.equal((await t.request('auth/login',{method:'POST',data:{login:'aluno_a',password}})).status,401);
  const login=await t.request('auth/login',{method:'POST',data:{login:'aluno_a',password:next}});assert.equal(login.status,200);
  assert.equal((await t.request('auth/logout',{method:'POST',cookie:login.cookie,data:{}})).status,200);
  assert.equal((await t.request('progress/go',{cookie:login.cookie})).status,401);
 }finally{t.close();}
});
test('troca de senha verifica a atual e invalida outras sessões',async()=>{
 const t=setup();try{
  const a=await t.register();const other=await t.request('auth/login',{method:'POST',data:{login:'aluno_a',password}});
  const invalid=await t.request('auth/password',{method:'POST',cookie:a.cookie,data:{currentPassword:'errada',newPassword:'Nova8!!!'}});assert.equal(invalid.status,401);
  const changed=await t.request('auth/password',{method:'POST',cookie:a.cookie,data:{currentPassword:password,newPassword:'Nova8!!!'}});assert.equal(changed.status,200);
  assert.equal((await t.request('progress/go',{cookie:other.cookie})).status,401);assert.equal((await t.request('progress/go',{cookie:changed.cookie})).status,200);
 }finally{t.close();}
});
test('origem, entradas inválidas, limite de tentativas e endpoint de desenvolvimento são protegidos',async()=>{
 const t=setup();try{
  const blocked=await t.request('auth/register',{method:'POST',data:{},origin:'https://outro.test'});assert.equal(blocked.status,403);
  assert.equal((await t.request('auth/login',{method:'POST',data:null})).status,400);
  const a=await t.register();assert.equal((await t.request('progress/go',{method:'PUT',cookie:a.cookie,data:{state:null,revision:0}})).status,400);
  assert.equal((await t.request('progress/go',{method:'PUT',cookie:a.cookie,data:{state:{},revision:0,documents:[{kind:'drafts',id:'999',content:'x'}]}})).status,400);
  assert.equal((await t.request('dev/session',{cookie:a.cookie})).status,404);
  for(let i=0;i<12;i++)await t.request('auth/login',{method:'POST',data:{login:'inexistente',password}});
  assert.equal((await t.request('auth/login',{method:'POST',data:{login:'inexistente',password}})).status,429);
 }finally{t.close();}
});
