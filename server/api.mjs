import {ApiError,digest,token,recoveryCode,hashPassword,verifyPassword,loginName,displayName,sessionCookie,readCookie} from './auth.mjs';
import {classIds,documentKinds,cleanState,cleanDocuments,attachResults,eligibility,grade} from './domain.mjs';

const json=(data,status=200,headers={})=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff',...headers}});
const parse=(text,fallback={})=>{try{return JSON.parse(text);}catch{return fallback;}};
const publicUser=u=>({id:u.id,login:u.login,displayName:u.display_name,classId:u.class_id});
async function body(request){
 if(!(request.headers.get('content-type')||'').toLowerCase().startsWith('application/json'))throw new ApiError(415,'Envie os dados no formato JSON.');
 const reader=request.body?.getReader();if(!reader)return{};
 let length=0;const chunks=[];
 while(true){const {value,done}=await reader.read();if(done)break;length+=value.byteLength;if(length>700000){await reader.cancel();throw new ApiError(413,'A alteração ultrapassa 700 KB. Salve os rascunhos em lotes menores.');}chunks.push(value);}
 const bytes=new Uint8Array(length);let p=0;for(const chunk of chunks){bytes.set(chunk,p);p+=chunk.length;}
 let value;try{value=JSON.parse(new TextDecoder().decode(bytes));}catch{throw new ApiError(400,'Os dados enviados não são JSON válido.');}
 if(!value||typeof value!=='object'||Array.isArray(value))throw new ApiError(400,'Envie um objeto com os campos da solicitação.');return value;
}
export function createApi({db,courses,assessments,dev=false,now=()=>Date.now()}){
 const first=(sql,...values)=>db.prepare(sql).bind(...values).first();
 const all=async(sql,...values)=>(await db.prepare(sql).bind(...values).all()).results||[];
 const run=(sql,...values)=>db.prepare(sql).bind(...values).run();
 async function limit(key,max,seconds){
  const window=Math.floor(now()/(seconds*1000));
  const rows=await all('INSERT INTO rate_limits(key,window,count) VALUES(?,?,1) ON CONFLICT(key) DO UPDATE SET count=CASE WHEN window=excluded.window THEN count+1 ELSE 1 END,window=excluded.window RETURNING count',digest(key),window);
  if(rows[0]?.count>max)throw new ApiError(429,'Muitas tentativas. Aguarde alguns minutos e tente novamente.');
 }
 async function userFor(request,required=true){
  const value=readCookie(request);let user=null;
  if(/^[a-zA-Z0-9_-]{43}$/.test(value))user=await first('SELECT u.id,u.login,u.display_name,u.class_id FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=? AND s.expires_at>?',digest(value),now());
  const expected=request.headers.get('x-forge-account');if(user&&expected&&expected!==user.id)throw new ApiError(401,'A conta foi alterada em outra aba. Entre novamente para continuar.','AUTH_SESSION');
  if(!user&&required)throw new ApiError(401,'Entre na sua conta para acessar seus estudos.','AUTH_SESSION');return user;
 }
 async function newSession(request,user,remember=false,expectedPassword=user.password){
  const value=token(),duration=(remember?14:1)*86400000;
  const insert=expectedPassword?db.prepare('INSERT INTO sessions(token_hash,user_id,expires_at,created_at) SELECT ?,id,?,? FROM users WHERE id=? AND password=?').bind(digest(value),now()+duration,now(),user.id,expectedPassword):db.prepare('INSERT INTO sessions(token_hash,user_id,expires_at,created_at) VALUES(?,?,?,?)').bind(digest(value),user.id,now()+duration,now());
  const saved=await db.batch([db.prepare('DELETE FROM sessions WHERE expires_at<?').bind(now()),insert]);
  if(!saved[1]?.meta?.changes)throw new ApiError(401,'As credenciais foram alteradas. Entre novamente.');
  return sessionCookie(request,value,remember?duration/1000:undefined);
 }
 async function resultsFor(userId,courseId){return Object.fromEntries((await all('SELECT assessment_id,result FROM assessment_results WHERE user_id=? AND course_id=?',userId,courseId)).map(r=>[r.assessment_id,parse(r.result)]));}
 async function progressFor(user,course){
  const [row,documents,results,submission]=await Promise.all([
   first('SELECT state,revision FROM course_progress WHERE user_id=? AND course_id=?',user.id,course.id),
   all('SELECT kind,document_id,content FROM course_documents WHERE user_id=? AND course_id=?',user.id,course.id),
   resultsFor(user.id,course.id),
   first('SELECT submission,updated_at FROM project_submissions WHERE user_id=? AND course_id=?',user.id,course.id),
  ]);
  const state=attachResults(cleanState(parse(row?.state),course,user),results);
  for(const kind of documentKinds)state[kind]={};
  for(const d of documents)if(documentKinds.includes(d.kind))state[d.kind][d.document_id]=d.content;
  return{state,revision:row?.revision||0,results,submission:submission?{...parse(submission.submission),updatedAt:submission.updated_at}:null};
 }
 async function summary(user){
  const rows=await all('SELECT course_id,state,revision FROM course_progress WHERE user_id=?',user.id);
  const results=await all('SELECT course_id,assessment_id,result FROM assessment_results WHERE user_id=?',user.id);
  const resultMap={};for(const r of results){resultMap[r.course_id]??={};resultMap[r.course_id][r.assessment_id]=parse(r.result);}
  return{user:publicUser(user),dev,progress:Object.fromEntries(rows.filter(r=>courses[r.course_id]).map(r=>[r.course_id,{state:attachResults(cleanState(parse(r.state),courses[r.course_id],user),resultMap[r.course_id]||{}),revision:r.revision}])),results:resultMap};
 }
 async function saveResult(user,course,definition,graded,submission,expectedVersion=null){
  const id=crypto.randomUUID(),date=now(),result={...graded,latestPassed:graded.passed,bestScore:graded.score,updatedAt:date,mode:definition.id==='final'?'checklist-and-concepts':'concepts'};
  const statements=[],version=submission?crypto.randomUUID():null;
  if(submission){
   submission={...submission,version};
   statements.push(expectedVersion===null?
    db.prepare('INSERT INTO project_submissions(user_id,course_id,submission,updated_at) VALUES(?,?,?,?) ON CONFLICT(user_id,course_id) DO NOTHING').bind(user.id,course.id,JSON.stringify(submission),date):
    db.prepare("UPDATE project_submissions SET submission=?,updated_at=? WHERE user_id=? AND course_id=? AND json_extract(submission,'$.version')=?").bind(JSON.stringify(submission),date,user.id,course.id,expectedVersion));
  }
  const condition=submission?" WHERE EXISTS(SELECT 1 FROM project_submissions WHERE user_id=? AND course_id=? AND json_extract(submission,'$.version')=?)":'';
  const guard=submission?[user.id,course.id,version]:[];
  statements.push(db.prepare('INSERT INTO assessment_attempts(id,user_id,course_id,assessment_id,result,created_at) SELECT ?,?,?,?,?,?'+condition).bind(id,user.id,course.id,definition.id,JSON.stringify(submission?{...result,submission}:result),date,...guard));
  statements.push(db.prepare(`INSERT INTO assessment_results(user_id,course_id,assessment_id,result,updated_at) SELECT ?,?,?,?,? ${condition||'WHERE true'}
    ON CONFLICT(user_id,course_id,assessment_id) DO UPDATE SET result=json_set(excluded.result,'$.passed',json(CASE WHEN json_extract(assessment_results.result,'$.passed')=1 OR json_extract(excluded.result,'$.passed')=1 THEN 'true' ELSE 'false' END),'$.bestScore',max(coalesce(json_extract(assessment_results.result,'$.bestScore'),0),json_extract(excluded.result,'$.bestScore'))),updated_at=excluded.updated_at`).bind(user.id,course.id,definition.id,JSON.stringify(result),date,...guard));
  const savedBatch=await db.batch(statements);
  if(submission&&!savedBatch[0]?.meta?.changes)throw new ApiError(409,'Existe uma entrega mais recente deste projeto em outra aba ou dispositivo. Seus rascunhos foram preservados; recarregue antes de conferir outra versão.');
  const saved=await first('SELECT result FROM assessment_results WHERE user_id=? AND course_id=? AND assessment_id=?',user.id,course.id,definition.id);
  return{result:parse(saved.result),version};
 }
 return async function handle(request){
  try{
   if(!db)return json({error:'O banco da plataforma ainda não está conectado.'},503);
   const url=new URL(request.url),parts=url.pathname.split('/').filter(Boolean).slice(1),method=request.method;
   if(method==='OPTIONS')return new Response(null,{status:405});
   if(!['GET','POST','PUT'].includes(method))throw new ApiError(405,'Método não permitido.');
   if(method!=='GET'){
    if(request.headers.get('origin')!==url.origin)throw new ApiError(403,'Origem da solicitação inválida. Atualize a página e tente novamente.');
   }
   if(parts[0]==='health'&&method==='GET'){await first('SELECT 1 AS ready');return json({ok:true});}
   if(parts[0]==='dev'&&parts[1]==='session'&&dev&&method==='GET'){
    const login='preview-aluno',existing=await first('SELECT * FROM users WHERE login=?',login);
    const user=existing||{id:crypto.randomUUID(),login,display_name:'Aluno de teste',class_id:'artifice'};
    if(!existing)await run('INSERT INTO users(id,login,display_name,password,recovery_hash,class_id,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?)',user.id,login,user.display_name,'disabled',digest(token()),user.class_id,now(),now());
    const cookie=await newSession(request,user);return new Response(null,{status:302,headers:{Location:'/', 'Set-Cookie':cookie,'Cache-Control':'no-store'}});
   }
   if(parts[0]==='auth'){
    const action=parts[1];
    if(action==='me'&&method==='GET'){const user=await userFor(request,false);return json(user?await summary(user):{user:null,dev});}
    if(action==='logout'&&method==='POST'){if(request.headers.has('x-forge-account'))await userFor(request,false);const value=readCookie(request);if(value)await run('DELETE FROM sessions WHERE token_hash=?',digest(value));return json({ok:true},200,{'Set-Cookie':sessionCookie(request,'',0)});}
    if(!['register','login','recover','password'].includes(action)||method!=='POST')throw new ApiError(404,'Rota não encontrada.');
    const data=await body(request),ip=request.headers.get('cf-connecting-ip')||'local';
    await limit('auth-ip:'+ip,50,300);
    if(action==='password'){
     const user=await userFor(request);await limit('password:'+user.id,8,900);
     const stored=await first('SELECT password FROM users WHERE id=?',user.id);
     if(!await verifyPassword(data.currentPassword,stored.password))throw new ApiError(401,'A senha atual não confere.');
     const encoded=await hashPassword(data.newPassword);
     const changed=await db.batch([db.prepare('UPDATE users SET password=?,updated_at=? WHERE id=? AND password=?').bind(encoded,now(),user.id,stored.password),db.prepare('DELETE FROM sessions WHERE user_id=? AND EXISTS(SELECT 1 FROM users WHERE id=? AND password=?)').bind(user.id,user.id,encoded)]);
     if(!changed[0]?.meta?.changes)throw new ApiError(409,'As credenciais já foram alteradas em outra sessão. Entre novamente.');
     return json({ok:true},200,{'Set-Cookie':await newSession(request,user,false,encoded)});
    }
    const login=loginName(data.login);await limit('auth-account:'+login,12,900);
    if(action==='register'){
     await limit('register-ip:'+ip,40,3600);
     const name=displayName(data.displayName),password=await hashPassword(data.password),code=recoveryCode();
     const user={id:crypto.randomUUID(),login,display_name:name,class_id:'artifice'};
     try{await run('INSERT INTO users(id,login,display_name,password,recovery_hash,class_id,created_at,updated_at) VALUES(?,?,?,?,?,?,?,?)',user.id,login,name,password,digest(login+':'+code),'artifice',now(),now());}
     catch(error){if(/unique/i.test(String(error)))throw new ApiError(409,'Esse usuário já está cadastrado. Escolha outro.');throw error;}
     return json({user:publicUser(user),recoveryCode:code},201,{'Set-Cookie':await newSession(request,user,data.remember===true,password)});
    }
    const stored=await first('SELECT * FROM users WHERE login=?',login);
    if(action==='login'){
     const valid=await verifyPassword(data.password,stored?.password||'');if(!valid||!stored)throw new ApiError(401,'Usuário ou senha inválidos.');
     return json({user:publicUser(stored)},200,{'Set-Cookie':await newSession(request,stored,data.remember===true)});
    }
    await limit('recover:'+login,5,3600);
    const code=typeof data.recoveryCode==='string'?data.recoveryCode.trim().toLowerCase():'';
    if(!stored||!code||digest(login+':'+code)!==stored.recovery_hash)throw new ApiError(401,'Usuário ou código de recuperação inválidos.');
    const password=await hashPassword(data.newPassword),replacement=recoveryCode();
    const replacementHash=digest(login+':'+replacement);
    const changed=await db.batch([db.prepare('UPDATE users SET password=?,recovery_hash=?,updated_at=? WHERE id=? AND recovery_hash=?').bind(password,replacementHash,now(),stored.id,stored.recovery_hash),db.prepare('DELETE FROM sessions WHERE user_id=? AND EXISTS(SELECT 1 FROM users WHERE id=? AND recovery_hash=?)').bind(stored.id,stored.id,replacementHash)]);
    if(!changed[0]?.meta?.changes)throw new ApiError(409,'Esse código de recuperação já foi utilizado. Use o código mais recente.');
    return json({user:publicUser(stored),recoveryCode:replacement},200,{'Set-Cookie':await newSession(request,stored,false,password)});
   }
   const user=await userFor(request);
   if(parts[0]==='profile'&&method==='PUT'){
    const data=await body(request),name=displayName(data.displayName);
    if(!classIds.includes(data.classId))throw new ApiError(400,'Escolha uma classe disponível.');
    if(data.classId!==user.class_id){const states=await all('SELECT course_id,state FROM course_progress WHERE user_id=?',user.id);const active=states.find(r=>{const s=parse(r.state),b=s.rpg?.battle;return b&&b.hp>0&&!s.rpg.bosses?.[b.id];});if(active)throw new ApiError(409,'Termine ou encerre a tentativa de desafio em '+(courses[active.course_id]?.name||active.course_id)+' antes de trocar de classe.');}
    await run('UPDATE users SET display_name=?,class_id=?,updated_at=? WHERE id=?',name,data.classId,now(),user.id);
    return json({user:{...publicUser(user),displayName:name,classId:data.classId}});
   }
   const course=courses[parts[1]];
   if(!course)throw new ApiError(404,'Curso não encontrado.');
   if(parts[0]==='progress'){
    if(method==='GET')return json(await progressFor(user,course));
    if(method!=='PUT')throw new ApiError(405,'Método não permitido.');
    const data=await body(request);
    if(!Number.isSafeInteger(data.revision)||data.revision<0)throw new ApiError(400,'Revisão do progresso inválida.');
    if(!data.state||typeof data.state!=='object'||Array.isArray(data.state))throw new ApiError(400,'O progresso enviado é inválido.');
    let documents;try{documents=cleanDocuments(data.documents||[],course);}catch(error){throw new ApiError(400,error.message);}
    const state=cleanState(data.state,course,user),writeToken=crypto.randomUUID(),date=now();
    const statements=[db.prepare(`INSERT INTO course_progress(user_id,course_id,state,revision,write_token,updated_at) SELECT ?,?,?,1,?,? WHERE ?=0
     ON CONFLICT(user_id,course_id) DO UPDATE SET state=excluded.state,revision=course_progress.revision+1,write_token=excluded.write_token,updated_at=excluded.updated_at WHERE course_progress.revision=?`).bind(user.id,course.id,JSON.stringify(state),writeToken,date,data.revision,data.revision)];
    // Existing rows need an UPDATE path even when the expected revision is not zero.
    if(data.revision>0)statements[0]=db.prepare('UPDATE course_progress SET state=?,revision=revision+1,write_token=?,updated_at=? WHERE user_id=? AND course_id=? AND revision=?').bind(JSON.stringify(state),writeToken,date,user.id,course.id,data.revision);
    for(const d of documents){if(d.deleted){statements.push(db.prepare('DELETE FROM course_documents WHERE user_id=? AND course_id=? AND kind=? AND document_id=? AND EXISTS(SELECT 1 FROM course_progress WHERE user_id=? AND course_id=? AND write_token=?)').bind(user.id,course.id,d.kind,d.id,user.id,course.id,writeToken));continue;}statements.push(db.prepare(`INSERT INTO course_documents(user_id,course_id,kind,document_id,content,updated_at)
     SELECT ?,?,?,?,?,? WHERE EXISTS(SELECT 1 FROM course_progress WHERE user_id=? AND course_id=? AND write_token=?)
     ON CONFLICT(user_id,course_id,kind,document_id) DO UPDATE SET content=excluded.content,updated_at=excluded.updated_at`).bind(user.id,course.id,d.kind,d.id,d.content,date,user.id,course.id,writeToken));}
    const saved=await db.batch(statements);
    if(!saved[0]?.meta?.changes)throw new ApiError(409,'Há uma versão mais recente em outra aba ou dispositivo. Exporte seu rascunho antes de recarregar; nada foi sobrescrito.');
    return json({ok:true,revision:data.revision+1,updatedAt:date});
   }
   if(parts[0]==='assessments'){
    if(method==='GET')return json({results:await resultsFor(user.id,course.id)});
    if(method!=='POST')throw new ApiError(405,'Método não permitido.');
    await limit('assessment:'+user.id,120,3600);
    const definitions=assessments[course.id],id=parts[2],definition=id==='final'?definitions?.finalProject:definitions?.combos.find(x=>x.id===id);
    if(!definition)throw new ApiError(404,'Desafio não encontrado.');
    const progress=await progressFor(user,course),access=eligibility(course,progress.state,definition,progress.results);
    if(!access.ok)return json({error:'Conclua os pré-requisitos para realizar esta atividade.',requirements:access},403);
    const data=await body(request);let evaluated;try{evaluated=grade(definition.questions,data.answers);}catch(error){throw new ApiError(400,error.message);}
    let submission=null;
    if(id==='final'){
     const fields=['overview','implementation','tests','decisions'];submission={};const missingFields=[];
     for(const field of fields){const value=typeof data.submission?.[field]==='string'?data.submission[field].trim():'';if(value.length<40)missingFields.push(field);if(value.length>50000)throw new ApiError(413,'Uma seção da entrega ultrapassa 50 mil caracteres.');submission[field]=value;}
     const checks=Array.isArray(data.submission?.rubric)?data.submission.rubric.filter(x=>definition.rubric.some(r=>r.id===x)):[];submission.rubric=[...new Set(checks)];
     const missingRubric=definition.rubric.filter(x=>!checks.includes(x.id));
     evaluated={...evaluated,passed:evaluated.passed&&missingFields.length===0&&missingRubric.length===0,missingFields,missingRubric:missingRubric.map(x=>x.id),reviewLessons:[...new Set([...evaluated.reviewLessons,...missingRubric.flatMap(x=>x.reviewLessons)])].sort((a,b)=>a-b),notice:'A correção automática cobre as respostas conceituais e a completude da entrega. Os critérios práticos são autoavaliados; o código e os testes locais não são executados pelo servidor.'};
    }
    if(data.submissionVersion!==undefined&&data.submissionVersion!==null&&(typeof data.submissionVersion!=='string'||data.submissionVersion.length>60))throw new ApiError(400,'Versão da entrega inválida.');
    const saved=await saveResult(user,course,definition,evaluated,submission,data.submissionVersion??null);
    return json({result:saved.result,submissionVersion:saved.version,results:await resultsFor(user.id,course.id)});
   }
   throw new ApiError(404,'Rota não encontrada.');
  }catch(error){
   if(error instanceof ApiError)return json({error:error.message,...(error.code?{code:error.code}:{})},error.status,error.status===429?{'Retry-After':'5'}:{});
   console.error('Forge API failure',error instanceof Error?error.name:'UnknownError');
   return json({error:'Não foi possível concluir a operação agora. Seus dados anteriores permanecem salvos. Tente novamente.'},500);
  }
 };
}
