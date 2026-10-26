const test=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const path=require('node:path');
const x={Intl,Date,Math};vm.createContext(x);
for(const file of ['course.js','learning.js','rpg-data.js','classes.js','rpg.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'../public/learn',file),'utf8').replace('window.COURSE','COURSE'),x);
const C=x.COURSE,L=x.Learning,R=x.RPG,D=x.RPG_DATA;
function finish(s,id){const l=C.lessons[id-1];s.read[id]=true;for(const e of l.exercises)s.exercises[`${id}-${e.id}`]=true;s.quiz[id]={answer:l.quiz.answer,attempts:1};}
function prepare(s,id=1){for(const l of C.lessons.filter(l=>l.level===id))finish(s,l.id);s.projects[id]=true;}
function win(s,id=1){R.startBattle(s,C,id,()=>0.5);for(const q of D.chapters[id-1].questions){R.answerBattle(s,C,id,q.answer);R.continueBattle(s);}R.reconcile(s,C);}

test('a trilha tem 12 níveis e 36 perguntas novas com respostas válidas',()=>{
  assert.equal(D.chapters.length,12);assert.equal(D.classes.length,9);
  for(const c of D.chapters){assert.equal(c.questions.length,3);for(const q of c.questions){assert.ok(q.explanation.length>20);assert.ok(q.answer>=0&&q.answer<q.options.length);}}
});
test('uma missão rende 200 XP e repetição não gera XP extra',()=>{
  const s=L.fresh();finish(s,1);assert.equal(R.reconcile(s,C).xp,200);assert.equal(R.profile(s,C).level,2);
  assert.equal(R.reconcile(s,C).xp,0);s.exercises['1-1']=false;R.reconcile(s,C);s.exercises['1-1']=true;
  assert.equal(R.reconcile(s,C).xp,0);assert.equal(R.profile(s,C).xp,200);
});
test('a importação do backup antigo conserva aprendizado e reconhece XP',()=>{
  const s=L.fresh();finish(s,1);delete s.rpg;s.answers['1-1']='minha resposta';
  const restored=L.sanitize(JSON.parse(JSON.stringify(s)),C);R.reconcile(restored,C);
  assert.equal(restored.answers['1-1'],'minha resposta');assert.equal(L.complete(restored,C.lessons[0]),true);
  assert.equal(R.profile(restored,C).xp,200);assert.equal(restored.rpg.classId,'artifice');
});
test('chefes exigem missões, projeto e selo anterior',()=>{
  const s=L.fresh();assert.equal(R.startBattle(s,C,1).ok,false);prepare(s,1);s.projects[1]=false;
  assert.equal(R.eligibility(s,C,1).ok,false);s.projects[1]=true;assert.equal(R.eligibility(s,C,1).ok,true);
  prepare(s,2);assert.equal(R.eligibility(s,C,2).ok,false);win(s,1);assert.equal(R.eligibility(s,C,2).ok,true);
});
test('a defesa só cai em acerto e o feedback exige avançar o turno',()=>{
  const s=L.fresh();prepare(s);R.startBattle(s,C,1);const answer=D.chapters[0].questions[0].answer;
  const wrong=R.answerBattle(s,C,1,(answer+1)%4);assert.equal(wrong.correct,false);assert.equal(s.rpg.battle.hp,2);assert.equal(s.rpg.battle.index,0);
  assert.equal(R.answerBattle(s,C,1,answer).ok,false);R.continueBattle(s);
  assert.equal(R.answerBattle(s,C,1,answer).correct,true);assert.equal(s.rpg.battle.index,1);
});
test('três erros encerram o confronto sem remover XP e nova tentativa é possível',()=>{
  const s=L.fresh();prepare(s);R.reconcile(s,C);const xp=R.profile(s,C).xp;R.startBattle(s,C,1);
  const wrong=(D.chapters[0].questions[0].answer+1)%4;for(let i=0;i<3;i++){R.answerBattle(s,C,1,wrong);if(i<2)R.continueBattle(s);}
  assert.equal(s.rpg.battle.hp,0);assert.equal(R.profile(s,C).xp,xp);assert.equal(s.rpg.bosses[1],undefined);
  assert.equal(R.startBattle(s,C,1).ok,true);assert.equal(s.rpg.battle.hp,3);
});
test('vitória concede uma relíquia e 250 XP uma única vez',()=>{
  const s=L.fresh();prepare(s);R.reconcile(s,C);const xp=R.profile(s,C).xp;win(s);
  assert.equal(s.rpg.bosses[1],true);assert.equal(s.rpg.equipped,1);assert.equal(R.profile(s,C).xp,xp+250);
  assert.equal(R.startBattle(s,C,1).ok,false);assert.equal(R.reconcile(s,C).xp,0);
});
test('backup mantém personagem, opções de combate e relíquia equipada',()=>{
  const s=L.fresh();prepare(s);win(s);s.rpg.name='Oleg';s.rpg.classId='sentinela';s.rpg.onboarded=true;
  prepare(s,2);R.startBattle(s,C,2,()=>0.25);const restored=L.sanitize(JSON.parse(JSON.stringify(s)),C);
  assert.equal(restored.rpg.name,'Oleg');assert.equal(restored.rpg.classId,'sentinela');assert.equal(restored.rpg.equipped,1);
  assert.equal(JSON.stringify(restored.rpg.battle.options),JSON.stringify(s.rpg.battle.options));
});
test('dados inválidos de RPG não injetam recompensas, classes ou estado impossível',()=>{
  const s=L.fresh();s.rpg={name:' ',classId:'admin',rewarded:['boss:999','lesson:1','lesson:1','toString'],bosses:{999:true},equipped:999,battle:{id:1,index:99,hp:999}};
  const restored=L.sanitize(s,C);assert.equal(restored.rpg.name,'Aluno');assert.equal(restored.rpg.classId,'artifice');
  assert.equal(restored.rpg.rewarded.length,1);assert.equal(R.profile(restored,C).xp,50);assert.equal(restored.rpg.equipped,null);assert.equal(restored.rpg.battle,null);
});
test('trocar de classe preserva XP e conquistas; a campanha completa soma 12.000 XP',()=>{
  const s=L.fresh();for(let i=1;i<=12;i++){prepare(s,i);win(s,i);}const p=R.profile(s,C);
  assert.equal(p.xp,12000);assert.equal(p.bosses,12);assert.equal(p.rank,'Níveis concluídos');
  s.rpg.classId='arcanista';assert.equal(R.profile(s,C).xp,12000);assert.equal(R.achievements(s,C).find(a=>a.id==='forge').earned,false); x.Account={results:{go:{'combo-1':{passed:true},'combo-2':{passed:true},'combo-3':{passed:true},'combo-4':{passed:true},final:{passed:true}}}}; R.reconcile(s,C); assert.equal(R.profile(s,C).xp,13300); assert.ok(R.achievements(s,C).every(a=>a.earned)); delete x.Account;
});

test('Sentinela tem quatro tentativas e as demais classes mantêm três, sem trocar o objetivo',()=>{const a=L.fresh();prepare(a);a.rpg.classId='sentinela';assert.equal(R.startBattle(a,C,1).ok,true);assert.equal(a.rpg.battle.hp,4);assert.equal(a.rpg.battle.maxHp,4);const restored=L.sanitize(a,C);assert.equal(restored.rpg.battle.hp,4);const b=L.fresh();prepare(b);b.rpg.classId='arcanista';R.startBattle(b,C,1);assert.equal(b.rpg.battle.hp,3);assert.equal(D.chapters[0].questions.length,3);});
