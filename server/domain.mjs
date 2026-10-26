export const classIds=['artifice','arcanista','sentinela','ladino','explorador','bardo','monge','clerigo','paladino'];
export const documentKinds=['answers','notes','drafts','projectNotes','tools'];
const toolKeys=new Set(['final-overview','final-implementation','final-tests','final-decisions','final-rubric','project-checks','concept-lesson','clue-combo','explain-concept','explain-example','explain-limit','focus-goal','focus-end','focus-remaining','practice-result']);
const record=x=>x&&typeof x==='object'&&!Array.isArray(x);
export function complete(state,lesson){return state?.read?.[lesson.id]===true&&lesson.exercises.every(e=>state?.exercises?.[`${lesson.id}-${e.id}`]===true)&&state?.quiz?.[lesson.id]?.answer===lesson.quiz.answer;}
export function cleanState(input,course,user){
  const s=record(input)?input:{};const today=new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  const validDate=v=>typeof v==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(v)&&!Number.isNaN(Date.parse(v))&&new Date(v+'T12:00:00Z').toISOString().slice(0,10)===v;
  const out={schema:1,courseId:course.id,start:validDate(s.start)?s.start:today,hours:[4,6,8,10,12,16].includes(s.hours)?s.hours:8,lastLesson:Number.isInteger(s.lastLesson)&&s.lastLesson>=1&&s.lastLesson<=36?s.lastLesson:1,read:{},exercises:{},quiz:{},projects:{},activity:[],rpg:{version:1,name:user.display_name,classId:user.class_id,onboarded:true,rewarded:[],bosses:{},battle:null,equipped:null}};
  const allowed=new Set();
  for(const l of course.lessons){
    if(s.read?.[l.id]===true)out.read[l.id]=true;
    for(const e of l.exercises){const k=`${l.id}-${e.id}`;if(s.exercises?.[k]===true)out.exercises[k]=true;allowed.add('exercise:'+k);}
    const q=s.quiz?.[l.id];if(q&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<l.quiz.options.length)out.quiz[l.id]={answer:q.answer,attempts:Math.min(10000,Math.max(1,Math.trunc(q.attempts)||1))};
    for(const k of ['read:','quiz:','lesson:'])allowed.add(k+l.id);
  }
  for(const l of course.levels){if(s.projects?.[l.id]===true&&course.lessons.filter(x=>x.level===l.id).every(x=>complete(out,x)))out.projects[l.id]=true;allowed.add('project:'+l.id);allowed.add('boss:'+l.id);if(s.rpg?.bosses?.[l.id]===true)out.rpg.bosses[l.id]=true;}
  if(Array.isArray(s.rpg?.rewarded))out.rpg.rewarded=[...new Set(s.rpg.rewarded.filter(k=>typeof k==='string'&&allowed.has(k)))];
  if(Number.isInteger(s.rpg?.equipped)&&out.rpg.bosses[s.rpg.equipped])out.rpg.equipped=s.rpg.equipped;
  const b=s.rpg?.battle;
  if(record(b)&&Number.isInteger(b.id)&&b.id>=1&&b.id<=12&&!out.rpg.bosses[b.id]&&Number.isInteger(b.index)&&b.index>=0&&b.index<3&&Number.isInteger(b.hp)&&b.hp>=0&&b.hp<=4){
    const maxHp=b.maxHp===4&&user.class_id==='sentinela'?4:3;
    out.rpg.battle={id:b.id,index:b.index,hp:Math.min(b.hp,maxHp),maxHp,feedback:typeof b.feedback?.correct==='boolean'?{correct:b.feedback.correct}:null};
    if(Array.isArray(b.options)&&b.options.length===3&&b.options.every(row=>Array.isArray(row)&&row.length===4&&new Set(row).size===4&&row.every(n=>Number.isInteger(n)&&n>=0&&n<4)))out.rpg.battle.options=b.options;
  }
  if(Array.isArray(s.activity))out.activity=[...new Set(s.activity.filter(validDate))].sort().slice(-400);
  return out;
}
export function attachResults(state,results){
  const result={...state,rpg:{...state.rpg,rewarded:[...(state.rpg?.rewarded||[])]}};
  for(const [id,r]of Object.entries(results)){if(r.passed){const key=id==='final'?'final':'combo:'+id;if(!result.rpg.rewarded.includes(key))result.rpg.rewarded.push(key);}}
  return result;
}
export function eligibility(course,state,definition,results){
  const required=definition.id==='final'?course.lessons.map(l=>l.id):definition.requiredLessons;
  const missing=required.filter(id=>!complete(state,course.lessons[id-1]));
  const missingCombos=definition.id==='final'?['combo-1','combo-2','combo-3','combo-4'].filter(id=>!results[id]?.passed):[];
  return{ok:missing.length===0&&missingCombos.length===0,missingLessons:missing,missingCombos};
}
export function grade(questions,answers){
  if(!record(answers))throw new Error('Responda às perguntas antes de conferir.');
  const feedback=questions.map(q=>{const answer=answers[q.id];if(!Number.isInteger(answer)||answer<0||answer>=q.options.length)throw new Error('Escolha uma alternativa em cada pergunta.');return{questionId:q.id,correct:answer===q.answer,explanation:q.explanation,reviewLessons:answer===q.answer?[]:q.reviewLessons};});
  const correct=feedback.filter(x=>x.correct).length;
  return{score:Math.round(correct/questions.length*100),correct,total:questions.length,passed:correct===questions.length,feedback,reviewLessons:[...new Set(feedback.flatMap(x=>x.reviewLessons))].sort((a,b)=>a-b)};
}
export function cleanDocuments(documents,course){
  if(!Array.isArray(documents)||documents.length>200)throw new Error('Lote de rascunhos inválido.');
  return documents.map(d=>{
    if(!record(d)||!documentKinds.includes(d.kind)||typeof d.id!=='string'||typeof d.content!=='string'||d.content.length>50000)throw new Error('Rascunho inválido ou maior que 50 mil caracteres.');
    const lesson=/^([1-9]|[12]\d|3[0-6])$/.test(d.id);
    const valid=d.kind==='answers'?/^(?:[1-9]|[12]\d|3[0-6])-[1-3]$/.test(d.id):d.kind==='projectNotes'?/^(?:[1-9]|1[0-2])$/.test(d.id):d.kind==='tools'?toolKeys.has(d.id):lesson;
    if(!valid)throw new Error('Identificador de rascunho inválido.');
    return{kind:d.kind,id:d.id,content:d.content,deleted:d.deleted===true};
  });
}
