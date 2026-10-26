(function(root){
 'use strict';
 const A={user:null,progress:null,results:{},summary:{},revision:0,tools:{},status:'checking',conflict:false,authLost:false,leaving:false};
 const kinds=['answers','notes','drafts','projectNotes','tools'];
 let pending=null,timer=null,saving=null,generation=0,knownDocs={};
 const channel=typeof BroadcastChannel!=='undefined'?new BroadcastChannel('forge-academy-account'):null;
 function maskAccount(){document.body.classList.add('account-checking');const surface=document.getElementById('auth-surface');if(surface)surface.hidden=true;}
 if(channel)channel.onmessage=event=>{if(A.user&&(event.data?.type==='logout'||event.data?.type==='active'&&event.data.userId!==A.user.id)){maskAccount();pending=null;clearTimeout(timer);clearCache();location.assign('/');}};
 const selected=()=>root.Academy.selected;
 const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
 function setStatus(status,message){A.status=status;A.message=message;const e=document.getElementById('cloud-status');if(e){e.textContent=message;e.dataset.state=status;}for(const hint of document.querySelectorAll('[data-save-hint]'))hint.textContent=message;root.dispatchEvent(new CustomEvent('forge-sync',{detail:{status,message}}));}
 async function api(path,options={}){
  const response=await fetch('/api/'+path,{credentials:'same-origin',...options,headers:{...(options.body?{'Content-Type':'application/json'}:{}),...(A.user?{'X-Forge-Account':A.user.id}:{}),...options.headers}});
  const data=await response.json().catch(()=>({error:'O servidor respondeu em um formato inesperado.'}));
  if(!response.ok){if(response.status===401&&A.user&&(data.code==='AUTH_SESSION'||!path.startsWith('auth/'))){A.authLost=true;maskAccount();pending=null;clearTimeout(timer);location.assign('/');}const error=new Error(data.error||'Não foi possível concluir a solicitação.');error.status=response.status;error.data=data;throw error;}return data;
 }
 function cache(courseId,state){if(!A.user)return;try{localStorage.setItem(root.Academy.storageKey(courseId),JSON.stringify(state));}catch{}}
 function docsOf(state){const result={};for(const kind of kinds)for(const[id,content]of Object.entries(state[kind]||{}))result[kind+':'+id]={kind,id,content:String(content)};return result;}
 function clearCache(){if(!A.user)return;try{const prefix='forge-academy:'+A.user.id+':';for(const key of Object.keys(localStorage))if(key.startsWith(prefix))localStorage.removeItem(key);}catch{}}
 A.api=api;A.cache=cache;A.hasPending=()=>!A.authLost&&!A.leaving&&(!!pending||!!saving);
 A.reloadSaved=()=>{A.leaving=true;pending=null;clearTimeout(timer);maskAccount();location.reload();};
 A.schedule=function(course,state){
  if(!A.user)return;
  const snapshot=JSON.parse(JSON.stringify(state));snapshot.tools={...A.tools};pending={courseId:course.id,state:snapshot,generation:++generation};
  setStatus(A.conflict?'conflict':'pending',A.conflict?'Conflito: exporte seu rascunho e recarregue a versão salva.':'Alterações aguardando sincronização…');
  clearTimeout(timer);if(!A.conflict)timer=setTimeout(()=>A.flush().catch(()=>{}),800);
 };
 A.flush=async function(){
  clearTimeout(timer);if(A.conflict)throw new Error(A.message);if(saving){await saving;if(pending)return A.flush();return true;}if(!pending)return true;
  saving=(async()=>{
   while(pending&&!A.conflict){
    const job=pending;pending=null;setStatus('saving','Salvando na sua conta…');
    const docs=docsOf(job.state),changes=Object.values(docs).filter(d=>knownDocs[d.kind+':'+d.id]?.content!==d.content);
    for(const[key,d]of Object.entries(knownDocs))if(!Object.hasOwn(docs,key))changes.push({kind:d.kind,id:d.id,content:'',deleted:true});
    const batches=[];let batch=[],size=0;
    for(const d of changes){const bytes=new TextEncoder().encode(JSON.stringify(d)).length;if(batch.length>=40||size+bytes>420000){batches.push(batch);batch=[];size=0;}batch.push(d);size+=bytes;}batches.push(batch);
    const state={...job.state};for(const kind of kinds)delete state[kind];
    try{
     for(const documents of batches){const response=await api('progress/'+job.courseId,{method:'PUT',body:JSON.stringify({state,documents,revision:A.revision})});A.revision=response.revision;for(const d of documents){if(d.deleted)delete knownDocs[d.kind+':'+d.id];else knownDocs[d.kind+':'+d.id]=d;}}
     A.progress={state:job.state,revision:A.revision};A.summary[job.courseId]=A.progress;cache(job.courseId,job.state);
     setStatus(pending?'pending':'saved',pending?'Há novas alterações para salvar…':'Progresso salvo na sua conta.');
    }catch(error){if(!pending&&!A.authLost)pending=job;if(error.status===409)A.conflict=true;setStatus(A.conflict?'conflict':'error',error.message);throw error;}
   }
  })();
  try{await saving;}finally{saving=null;}return true;
 };
 A.saveProfile=async function(name,classId){await A.flush();const response=await api('profile',{method:'PUT',body:JSON.stringify({displayName:name,classId})});A.user=response.user;return response.user;};
 A.grade=async function(id,answers,submission){await A.flush();const response=await api('assessments/'+selected()+'/'+id,{method:'POST',body:JSON.stringify({answers,submission,submissionVersion:A.submission?.version??null})});A.results[selected()]=response.results;return response;};
 A.saveTool=function(key,content){A.tools[key]=String(content).slice(0,50000);};
 function authView(mode='login',message='',dev=false){
  const register=mode==='register',recover=mode==='recover';document.body.classList.add('signed-out');
  let surface=document.getElementById('auth-surface');if(!surface){surface=document.createElement('main');surface.id='auth-surface';document.body.append(surface);}
  surface.innerHTML=`<div class="auth-layout"><section class="auth-story"><a href="/" class="auth-brand"><span>✧</span> Forge Academy</a><span class="eyebrow">CONHECIMENTO QUE EVOLUI COM VOCÊ</span><h1>Seu próximo nível começa com uma descoberta.</h1><p>Programação, infraestrutura e bancos de dados. Vinte cursos, projetos e desafios que conectam o que você aprende.</p><div class="auth-stats"><span><b>20</b> cursos</span><span><b>9</b> classes</span><span><b>1</b> jornada sua</span></div><div class="auth-story-note">Cada aluno tem sua conta, seus rascunhos e seu progresso. Escolha uma classe de estudo e transforme prática em evolução.</div></section><section class="auth-card"><span class="eyebrow">FORGE ACADEMY</span><h2>${recover?'Recuperar acesso':register?'Crie sua conta':'Entre para continuar'}</h2><p>${recover?'Use o código de recuperação entregue no cadastro.':register?'Escolha um usuário e o nome que aparecerá no seu perfil.':'Retome suas aulas, desafios e projetos de onde parou.'}</p><form id="account-auth-form" data-mode="${mode}">${register?'<label for="register-name">Nome de exibição</label><input id="register-name" name="displayName" autocomplete="nickname" maxlength="32" required>':''}<label for="login-user">Usuário</label><input id="login-user" name="login" autocomplete="username" pattern="[a-zA-Z0-9][a-zA-Z0-9_.-]{2,31}" minlength="3" maxlength="32" required autocapitalize="none" spellcheck="false">${recover?'<label for="recovery-code">Código de recuperação</label><input id="recovery-code" name="recoveryCode" autocomplete="off" required>':''}<label for="login-password">${recover?'Nova senha':'Senha'}</label><input id="login-password" name="${recover?'newPassword':'password'}" type="password" autocomplete="${register||recover?'new-password':'current-password'}" ${register||recover?'minlength="8"':''} maxlength="128" required>${register||recover?'<small>De 8 a 128 caracteres. Frases-senha e espaços são aceitos.</small>':''}${!recover?'<label class="check-label"><input type="checkbox" name="remember">Manter conectado por 14 dias neste dispositivo</label>':''}<div class="auth-message" role="status">${esc(message)}</div><button type="submit" class="button primary">${recover?'Redefinir senha':register?'Criar conta':'Entrar'} ↗</button></form><div class="auth-links"><button data-auth-mode="${register||recover?'login':'register'}">${register||recover?'Já tenho uma conta':'Criar uma conta'}</button>${!recover?'<button data-auth-mode="recover">Esqueci minha senha</button>':''}</div>${dev?'<a class="dev-preview-link" href="/api/dev/session">Abrir conta de teste local</a>':''}<p class="auth-privacy">Seu código de recuperação é exibido uma vez. Guarde-o em local seguro; esta versão não envia recuperação por e-mail.</p></section></div>`;
 }
 function showRecovery(code){const surface=document.getElementById('auth-surface');surface.innerHTML=`<section class="auth-card recovery-card"><span class="eyebrow">CONTA PRONTA</span><h1>Guarde seu código de recuperação.</h1><p>Ele permite redefinir sua senha. Será exibido apenas agora; mantenha-o em um local seguro e não o compartilhe.</p><code class="recovery-code">${esc(code)}</code><button class="button secondary" id="copy-recovery-code">Copiar código</button><button class="button primary" id="finish-registration">Guardei o código. Começar a estudar ↗</button><span role="status" id="recovery-status"></span></section>`;document.getElementById('copy-recovery-code').onclick=async()=>{try{await navigator.clipboard.writeText(code);document.getElementById('recovery-status').textContent='Código copiado.';}catch{document.getElementById('recovery-status').textContent='Selecione o código e copie manualmente.';}};document.getElementById('finish-registration').onclick=()=>location.reload();}
 document.addEventListener('click',event=>{const button=event.target.closest('[data-auth-mode]');if(button)authView(button.dataset.authMode,'',A.dev);});
 document.addEventListener('submit',async event=>{
  if(event.target.id!=='account-auth-form')return;event.preventDefault();const form=event.target,mode=form.dataset.mode,data=Object.fromEntries(new FormData(form));data.remember=data.remember==='on';const button=form.querySelector('button[type=submit]'),message=form.querySelector('[role=status]');button.disabled=true;message.textContent='Processando…';
  try{const response=await api('auth/'+mode,{method:'POST',body:JSON.stringify(data)});form.reset();if(response.recoveryCode)showRecovery(response.recoveryCode);else location.reload();}catch(error){message.textContent=error.message;button.disabled=false;}
 });
 A.logout=async(discard=false)=>{if(!discard)await A.flush();await api('auth/logout',{method:'POST',body:'{}'});pending=null;clearTimeout(timer);maskAccount();channel?.postMessage({type:'logout'});clearCache();location.assign('/');};
 root.addEventListener('pagehide',maskAccount);
 root.addEventListener('pageshow',event=>{if(event.persisted){maskAccount();location.reload();}});
 root.addEventListener('beforeunload',event=>{if(A.hasPending()){event.preventDefault();event.returnValue='';}});
 A.ready=(async()=>{
  try{
   const me=await api('auth/me');A.dev=me.dev;
   if(!me.user){authView('login','',me.dev);return false;}
   A.user=me.user;A.summary=me.progress||{};A.results=me.results||{};channel?.postMessage({type:'active',userId:A.user.id});
   for(const[id,p]of Object.entries(A.summary))cache(id,p.state);
   const current=await api('progress/'+selected());A.progress=current;A.revision=current.revision;A.tools=current.state.tools||{};knownDocs=docsOf(current.state);A.submission=current.submission;A.results[selected()]=current.results;
   document.body.classList.remove('signed-out','account-checking');document.body.classList.add('signed-in');document.getElementById('auth-surface')?.remove();
   if(me.dev&&A.user.login==='preview-aluno'){const banner=document.createElement('div');banner.className='dev-account-banner';banner.textContent='Conta de teste local · dados de demonstração, separados das contas publicadas.';document.querySelector('.app-shell').prepend(banner);}
   setStatus('saved','Progresso salvo na sua conta.');return true;
  }catch(error){authView('login',error.message,false);return false;}
 })();
 root.Account=A;
})(window);
