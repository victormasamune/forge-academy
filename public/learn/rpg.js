(function(root){
  'use strict';
  const D=root.RPG_DATA;
  const fresh=()=>({version:1,name:'Aluno',classId:'artifice',onboarded:false,rewarded:[],bosses:{},battle:null,equipped:null});
  function catalog(course){
    const rewards={};
    for(const l of course.lessons){rewards['read:'+l.id]=20;rewards['quiz:'+l.id]=40;rewards['lesson:'+l.id]=50;for(const e of l.exercises)rewards[`exercise:${l.id}-${e.id}`]=30;}
    for(const l of course.levels){rewards['project:'+l.id]=150;rewards['boss:'+l.id]=250;}
    for(let i=1;i<=4;i++)rewards['combo:combo-'+i]=200; rewards.final=500;
    return rewards;
  }
  function sanitize(input,course){
    const r=fresh();if(!input||typeof input!=='object')return r;
    if(typeof input.name==='string'&&input.name.trim())r.name=input.name.trim().slice(0,32);
    if(D.classes.some(c=>c.id===input.classId))r.classId=input.classId;
    r.onboarded=input.onboarded===true;
    const rewards=catalog(course);
    if(Array.isArray(input.rewarded))r.rewarded=[...new Set(input.rewarded.filter(x=>typeof x==='string'&&Object.hasOwn(rewards,x)))];
    for(const l of course.levels)if(input.bosses?.[l.id]===true)r.bosses[l.id]=true;
    if(Number.isInteger(input.equipped)&&r.bosses[input.equipped])r.equipped=input.equipped;
    const b=input.battle;
    if(b&&Number.isInteger(b.id)&&D.chapters.some(c=>c.id===b.id)&&Number.isInteger(b.index)&&b.index>=0&&b.index<3&&Number.isInteger(b.hp)&&b.hp>=0&&b.hp<=4){
      const maxHp=b.maxHp===4&&r.classId==='sentinela'?4:3; r.battle={id:b.id,index:b.index,hp:Math.min(b.hp,maxHp),maxHp,feedback:null,options:choices(b.id)};
      if(Array.isArray(b.options)&&b.options.length===3&&b.options.every((row,i)=>Array.isArray(row)&&row.length===D.chapters[b.id-1].questions[i].options.length&&new Set(row).size===row.length&&row.every(v=>Number.isInteger(v)&&v>=0&&v<row.length)))r.battle.options=b.options.map(row=>[...row]);
      if(b.feedback&&typeof b.feedback.correct==='boolean')r.battle.feedback={correct:b.feedback.correct};
      if(r.bosses[b.id])r.battle=null;
    }
    return r;
  }
  function threshold(level){const n=Math.max(0,level-1);return n*200+n*(n-1)*25;}
  function profile(state,course){
    const rewards=catalog(course),r=state.rpg||fresh();
    const xp=[...new Set(r.rewarded)].reduce((n,id)=>n+(rewards[id]||0),0);
    let level=1;while(xp>=threshold(level+1)&&level<50)level++;
    const from=threshold(level),to=threshold(level+1),bosses=D.chapters.filter(c=>r.bosses[c.id]).length;
    return {xp,level,from,to,progress:Math.round((xp-from)/(to-from)*100),needed:to-xp,bosses,classInfo:D.classes.find(c=>c.id===r.classId)||D.classes[0],rank:r.rewarded.includes('final')?'Projeto final concluído':bosses===12?'Níveis concluídos':bosses>=8?'Avançado':bosses>=4?'Intermediário':bosses>=1?'Em evolução':'Iniciante'};
  }
  function reconcile(state,course){
    if(!state.rpg)state.rpg=fresh();const r=state.rpg,known=new Set(r.rewarded),added=[];const L=root.Learning;
    const grant=(id,condition)=>{if(condition&&!known.has(id)){known.add(id);r.rewarded.push(id);added.push(id);}};
    for(const l of course.lessons){grant('read:'+l.id,state.read[l.id]===true);grant('quiz:'+l.id,L.quizPassed(state,l));for(const e of l.exercises)grant(`exercise:${l.id}-${e.id}`,state.exercises[`${l.id}-${e.id}`]===true);grant('lesson:'+l.id,L.complete(state,l));}
    for(const l of course.levels){grant('project:'+l.id,state.projects[l.id]&&L.levelComplete(state,course,l.id));grant('boss:'+l.id,r.bosses[l.id]);}
    const extra=root.Account?.results?.[course.id||'go']||{}; for(let i=1;i<=4;i++)grant('combo:combo-'+i,extra['combo-'+i]?.passed===true); grant('final',extra.final?.passed===true);
    const rewards=catalog(course);return {ids:added,xp:added.reduce((n,id)=>n+rewards[id],0)};
  }
  function eligibility(state,course,id){
    if(!D.chapters.some(c=>c.id===id))return {ok:false,reason:'Nível inexistente.'};
    if(state.rpg.bosses[id])return {ok:false,reason:'Este desafio já foi concluído. A medalha permanece nas suas recompensas.'};
    if(id>1&&!state.rpg.bosses[id-1])return {ok:false,reason:'Conclua primeiro o desafio final do nível anterior.'};
    if(!root.Learning.levelComplete(state,course,id))return {ok:false,reason:'Conclua as três aulas deste nível.'};
    if(!state.projects[id])return {ok:false,reason:'Entregue e autoavalie o projeto deste nível antes do desafio final.'};
    return {ok:true,reason:'As aulas e o projeto estão concluídos. Você pode iniciar o desafio final.'};
  }
  function choices(id,rng=()=>0.999){return D.chapters[id-1].questions.map(q=>{const a=q.options.map((_,i)=>i);for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;});}
  function startBattle(state,course,id,rng=Math.random){
    const e=eligibility(state,course,id);if(!e.ok)return e;
    const maxHp=state.rpg.classId==='sentinela'?4:3; state.rpg.battle={id,index:0,hp:maxHp,maxHp,feedback:null,options:choices(id,rng)};return {ok:true};
  }
  function answerBattle(state,course,id,answer){
    const b=state.rpg.battle,e=eligibility(state,course,id);
    if(!e.ok||!b||b.id!==id||b.hp<=0||b.feedback||b.index>=3)return {ok:false,reason:e.ok?'Esta pergunta não está disponível.':e.reason};
    const question=D.chapters[id-1].questions[b.index];
    if(!Number.isInteger(answer)||answer<0||answer>=question.options.length)return {ok:false,reason:'Escolha uma resposta válida.'};
    const correct=answer===question.answer;b.feedback={correct};
    if(correct)b.index++;else b.hp--;
    if(b.index===3){state.rpg.bosses[id]=true;if(!state.rpg.equipped)state.rpg.equipped=id;}
    return {ok:true,correct,victory:b.index===3,defeat:b.hp===0};
  }
  function continueBattle(state){if(state.rpg.battle)state.rpg.battle.feedback=null;}
  function achievements(state,course){
    const L=root.Learning,s=L.stats(state,course),p=profile(state,course);
    return [
      {id:'first',name:'Primeira aula',description:'Conclua sua primeira aula.',earned:s.done>=1,symbol:'✧'},
      {id:'practice',name:'Prática constante',description:'Resolva 12 exercícios.',earned:s.exercises>=12,symbol:'⚒'},
      {id:'boss',name:'Primeiro desafio',description:'Conclua seu primeiro desafio final de nível.',earned:p.bosses>=1,symbol:'◇'},
      {id:'builder',name:'Quatro projetos',description:'Entregue quatro projetos.',earned:s.projects>=4,symbol:'▣'},
      {id:'pilgrim',name:'Metade do caminho',description:'Conclua 18 aulas.',earned:s.done>=18,symbol:'✦'},
      {id:'forge',name:'Trilha completa',description:'Conclua os doze desafios de nível e a entrega final.',earned:p.bosses===12&&state.rpg.rewarded.includes('final'),symbol:'♜'}
    ];
  }
  root.RPG={fresh,sanitize,catalog,threshold,profile,reconcile,eligibility,startBattle,answerBattle,continueBattle,achievements};
})(typeof window==='undefined'?globalThis:window);
