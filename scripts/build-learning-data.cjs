const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),asset=path.join(root,'public/learn');
const box={};box.window=box;vm.createContext(box);vm.runInContext(fs.readFileSync(path.join(asset,'course.js'),'utf8'),box);
const all={go:{...box.COURSE,id:'go',name:'Go',hours:288}};
for(const file of fs.readdirSync(path.join(root,'curricula')).filter(x=>x.endsWith('.json'))){const c=JSON.parse(fs.readFileSync(path.join(root,'curricula',file),'utf8'));all[c.id]=c;}
const index=Object.fromEntries(Object.entries(all).map(([id,c])=>[id,{id,name:c.name,hours:c.hours,levels:c.levels.map(l=>({id:l.id})),lessons:c.lessons.map(l=>({id:l.id,level:l.level,title:l.title,quiz:l.quiz,exercises:l.exercises.map(e=>({id:e.id}))}))}]));
fs.mkdirSync(path.join(root,'server'),{recursive:true});fs.writeFileSync(path.join(root,'server/course-index.json'),JSON.stringify(index));
const assessments={};const folder=path.join(root,'assessments');
if(fs.existsSync(folder))for(const file of fs.readdirSync(folder).filter(x=>x.endsWith('.json'))){const c=JSON.parse(fs.readFileSync(path.join(folder,file),'utf8'));assessments[c.courseId]=c;}
fs.writeFileSync(path.join(root,'server/assessments.json'),JSON.stringify(assessments));
fs.writeFileSync(path.join(asset,'assessments.js'),'window.COURSE_ASSESSMENTS='+JSON.stringify(assessments)+';\n');
const marker='<!-- forge-integrated-assessments -->';
for(const [id,d] of Object.entries(assessments)){
 const file=path.join(asset,id==='go'?'cronograma-go-forge.md':'cronograma-'+id+'.md');
 const c=index[id],lesson=n=>'Aula '+String(n).padStart(2,'0')+' — '+c.lessons.find(l=>l.id===n).title;
 const lines=[marker,'','## Desafios integradores e projeto final','',
  'Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.','',
  'As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.',''];
 for(const [i,draft] of d.combos.entries())lines.push('### Combo '+(i+1)+' — '+draft.title,'',draft.scenario,'','**Aulas necessárias**','',...draft.requiredLessons.map(n=>'- '+lesson(n)),'','**Conceitos combinados:** '+draft.skills.join('; ')+'.','');
 const p=d.finalProject;
 lines.push('### Projeto final — '+p.title,'',p.scenario,'','**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.','',
  '**Requisitos**','',...p.requirements.map(x=>'- '+x),'','**Entregáveis**','',...p.deliverables.map(x=>'- '+x),'','**Critérios práticos**','',...p.rubric.map(r=>'- **'+r.title+':** '+r.description),'','**Testes de aceitação para executar localmente**','');
 for(const a of p.acceptance)lines.push('#### '+a.title,'','- Preparação: '+a.setup,'- Entrada/ação: '+a.input,'- Resultado esperado: '+a.expected,'');
 lines.push('A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.','');
 fs.writeFileSync(file,fs.readFileSync(file,'utf8').split(marker)[0].trimEnd()+'\n\n'+lines.join('\n'));
}
console.log(Object.keys(index).length+' cursos; '+Object.keys(assessments).length+' roteiros integradores.');
