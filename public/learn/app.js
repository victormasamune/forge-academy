(async function () {
  await window.Account.ready;
  if (!window.Account.user) return;
  'use strict';
  const C = window.COURSE, L = window.Learning, R = window.RPG, A = window.Academy, KEY = A.storageKey(C.id);
  const main = document.getElementById('conteudo');
  let state = L.fresh(C), storageError = false, lastSaveOk = true, filter = 'Todos', toastTimer, pendingImport;
  const mobileScreen = window.matchMedia('(max-width: 780px)');
  try { state = L.sanitize(window.Account.progress.state, C); state.rpg.name = window.Account.user.displayName; state.rpg.classId = window.Account.user.classId; } catch { storageError = true; }
  const esc = x => String(x ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const num = n => String(n).padStart(2, '0');
  const normalize = s => String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const date = (s, year = false) => new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', ...(year ? { year: 'numeric' } : {}), timeZone: 'UTC' }).format(new Date(s + 'T12:00:00Z'));
  const icons = {
    home: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    path: '<path d="M5 4h14v16H5zM9 4v16M12 8h4M12 12h4M12 16h3"/>',
    code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>',
    project: '<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12h18M10 12v3h4v-3"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-13 5h1m4 0h1"/>',
    book: '<path d="M12 5C9 3 5 3 2 4v16c3-1 7-1 10 1 3-2 7-2 10-1V4c-3-1-7-1-10 1v16"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>',
    external: '<path d="M14 3h7v7m0-7L11 13M10 4H4v16h16v-6"/>',
    flag: '<path d="M5 22V3m0 1c5-4 9 4 15 0v10c-6 4-10-4-15 0"/>',
    spark: '<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z"/>'
  };
  const icon = n => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[n] || icons.book}</svg>`;
  const color = l => l.id < 3 ? '' : l.id < 6 ? 'blue' : l.id < 10 ? 'purple' : 'orange';
  const go = hash => { if (location.hash === '#' + hash) render(); else location.hash = hash; };
  function toast(message) { const t = document.getElementById('toast'); t.textContent = message; t.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 4500); }
  function save(activity = true) {
    const before = R.profile(state, C).level;
    const earned = R.reconcile(state, C);
    if (activity && !state.activity.includes(L.today())) state.activity = [...state.activity, L.today()].slice(-400);
    try { localStorage.setItem(KEY, JSON.stringify(state)); lastSaveOk = true; } catch { lastSaveOk = false; warnStorage(); }
    window.Account.schedule(C, state);
    updateChrome();
    if (earned.xp > 0) {
      toast(`✧ +${earned.xp} XP · experiência registrada no seu perfil.`);
      const after = R.profile(state, C);
      if (after.level > before) {
        document.getElementById('levelup-number').textContent = after.level;
        document.getElementById('levelup-message').textContent = `${state.rpg.name}, você alcançou ${after.xp} XP. Continue praticando para avançar.`;
        const dialog = document.getElementById('levelup-dialog'); if (!dialog.open) dialog.showModal();
      }
    }
  }
  function warnStorage() {
    if (document.querySelector('.storage-warning')) return;
    const warning = document.createElement('div'); warning.className = 'storage-warning'; warning.setAttribute('role', 'alert');
    warning.textContent = 'A cópia local não está disponível. Confira o indicador de sincronização e exporte um backup para preservar alterações ainda não enviadas.';
    document.querySelector('.app-shell').prepend(warning);
  }
  function updateChrome() {
    const s = L.stats(state, C);
    document.getElementById('side-percent').textContent = s.percent + '%';
    document.getElementById('side-count').textContent = `${s.done} de ${C.lessons.length} aulas concluídas`;
    document.getElementById('side-bar').style.width = s.percent + '%';
    document.getElementById('pace').textContent = `${state.hours} h / semana`;
    game.decorateChrome();
    const sync=document.getElementById('cloud-status'); if(sync){sync.textContent=window.Account.message||'Progresso salvo na sua conta.';sync.dataset.state=window.Account.status;}
  }
  const menu = [['cursos', 'home', 'Todos os cursos'], ['inicio', 'home', 'Visão geral'], ['mapa', 'path', 'Trilha de aprendizado'], ['trilha', 'book', 'Aulas'], ['arena', 'flag', 'Desafios de nível'], ['combos', 'spark', 'Desafios integradores'], ['projetofinal', 'project', 'Projeto final'], ['revisao', 'book', 'Revisão'], ['habilidade', 'spark', 'Habilidade da classe'], ['personagem', 'spark', 'Meu perfil'], ['inventario', 'project', 'Recompensas'], ['laboratorio', 'code', 'Editor ' + C.name], ['projetos', 'project', 'Projetos'], ['cronograma', 'calendar', 'Cronograma'], ['referencias', 'book', 'Referências'], ['conta', 'home', 'Minha conta']];
  function nav(active) { document.getElementById('nav').innerHTML = menu.map(([href, ic, title]) => `<a href="#${href}" class="${active === href ? 'active' : ''}" ${active === href ? 'aria-current="page"' : ''}>${icon(ic)}${title}${href === 'trilha' ? '<span class="nav-badge">' + C.lessons.length + '</span>' : ''}</a>`).join(''); }
  function heading(eyebrow, title, desc, extra = '') { return `<div class="page-heading"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${desc}</p></div>${extra}</div>`; }
  function levelCard(l) {
    const list = C.lessons.filter(x => x.level === l.id), done = list.filter(x => L.complete(state, x)).length;
    const current = L.next(state, C).level === l.id;
    return `<a class="panel level-card ${current ? 'current' : ''}" href="#aula/${(l.id - 1) * 3 + 1}/aula"><div class="flex between"><span class="level-number">${num(l.id)}</span><span class="pill ${color(l)}">${l.tag}</span></div><h3>${l.title}</h3><p>${l.summary}</p><div class="progress-track"><span style="width:${done / 3 * 100}%"></span></div><div class="card-meta"><span>${done}/3 aulas · ${l.hours || 24} h de prática</span><span class="arrow" aria-hidden="true">↗</span></div></a>`;
  }
  function task(done, title, caption, href) { return `<a href="${href}" class="task"><span class="task-circle ${done ? 'done' : ''}">${done ? '✓' : ''}</span><div>${title}<small>${caption}</small></div></a>`; }
  function lessonRow(l, current = false) {
    return `<a href="#aula/${l.id}/aula" class="lesson-row ${current ? 'current' : ''}"><span class="lesson-idx">${num(l.id)}</span><div><h3>${esc(l.title)}</h3><p>${esc(l.goal)}</p></div><span class="lesson-time">${l.hours || 8} h de estudo e prática</span><span class="circle ${L.complete(state, l) ? 'checked' : ''}">${L.complete(state, l) ? '✓' : ''}</span></a>`;
  }
  function curriculum() {
    const levels = C.levels.filter(l => filter === 'Todos' || l.tag === filter);
    return heading('TRILHA DE APRENDIZADO', `Aprenda ${C.name}, nível a nível.`, `${C.lessons.length} aulas · ${C.lessons.reduce((n,l)=>n+l.exercises.length,0)} exercícios · ${C.levels.length} projetos · ${C.hours} horas de estudo e prática`, `<a class="button secondary" href="${A.planFile(C.id)}" download>Baixar cronograma ↓</a>`) + prerequisites() + `<div class="filter-row" aria-label="Filtrar por estágio">${['Todos', 'Fundamentos', 'Intermediário', 'Avançado', 'Especialista'].map(f => `<button data-action="filter" data-filter="${f}" class="filter-button ${filter === f ? 'active' : ''}" aria-pressed="${filter === f}">${f}</button>`).join('')}</div><p class="muted" style="font-size:11px;margin-bottom:22px">Todas as aulas estão disponíveis. Siga a sequência para construir os pré-requisitos; avance ao explicar, praticar e verificar cada ideia.</p>` + levels.map(l => `<section class="panel curriculum-level"><header><span class="level-number">${num(l.id)}</span><div><span class="eyebrow">NÍVEL ${num(l.id)} · ${l.hours || 24} HORAS</span><h2>${l.title}</h2><span class="muted">${l.skills.join(' · ')}</span></div><span class="pill ${color(l)}">${l.tag}</span></header>${C.lessons.filter(x => x.level === l.id).map(x => lessonRow(x)).join('')}<div class="level-project">${icon('project')}<span>Projeto: ${esc(l.project)}</span><a href="#projetos/${l.id}">Ver entrega ↗</a></div></section>`).join('');
  }
  function highlight(code, language) {
    if (['html', 'css', 'markdown'].includes(language)) return esc(code);
    const re = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`[^`]*`|\/\/[^\n]*|\#[^\n]*|\b(?:package|import|export|default|from|as|func|function|def|class|type|struct|interface|var|const|let|return|throw|if|elif|else|for|while|in|of|switch|break|range|select|case|match|defer|go|chan|map|nil|null|undefined|None|True|False|true|false|public|private|protected|namespace|using|record|sealed|override|readonly|ref|out|bool|int|double|float|char|string|long|short|unsigned|auto|template|typename|concept|requires|constexpr|noexcept|delete|explicit|virtual|operator|sizeof|nullptr|static|void|new|throws|try|except|catch|finally|with|async|await|yield|FROM|RUN|COPY|WORKDIR|USER|CMD|ENTRYPOINT)\b|\b\d+\b)/g;
    let out = '', last = 0;
    for (const match of code.matchAll(re)) { out += esc(code.slice(last, match.index)); const token = match[0]; const cls = token.startsWith('//') || token.startsWith('#') ? 'tok-comment' : /^["'`]/.test(token) ? 'tok-string' : /^\d/.test(token) ? 'tok-number' : 'tok-keyword'; out += `<span class="${cls}">${esc(token)}</span>`; last = match.index + token.length; }
    return out + esc(code.slice(last));
  }
  const isTest = l => C.id === 'go' && !/func main\s*\(/.test(l.code);
  const filename = l => l.filename || (isTest(l) ? 'main_test.go' : 'main.' + C.extension);
  function codeBlock(l) { return `<div class="code-block"><div class="code-head"><span>${esc(filename(l))} <span class="muted">/</span> Exemplo da aula</span><button data-action="copy-example" data-id="${l.id}">Copiar código</button></div><pre><code>${highlight(l.code, l.language || C.codeLanguage)}</code></pre></div><div class="editor-run"><h3>COMO EXECUTAR OU VERIFICAR</h3><pre>${esc(l.run)}</pre></div><div class="output"><h3>Saída ou resultado esperado · referência do exemplo</h3><pre>${esc(l.expected)}</pre></div>`; }
  function completion(l) { return game.missionComplete(l); }
  function lessonPage(l, tab) {
    const lv = C.levels[l.level - 1];
    let body;
    if (tab === 'exercicios') {
      body = `<p class="muted" style="font-size:12px">Resolva antes de abrir a solução. A marcação é sua autoavaliação; os exemplos não são executados por esta página. Execute ou verifique a proposta no ambiente indicado e traga dúvidas para a revisão no chat.</p>` + l.exercises.map(ex => {
        const k = `${l.id}-${ex.id}`;
        return `<article class="panel exercise-card"><header><span class="exercise-index">0${ex.id}</span><h2>${esc(ex.title)}</h2><span class="pill ${ex.id === 1 ? '' : 'blue'}" style="margin-left:auto">+30 XP · ${['Praticar', 'Investigar', 'Explicar'][ex.id - 1]}</span></header><p>${esc(ex.prompt)}</p><label class="sr-only" for="answer-${k}">Sua resposta para ${esc(ex.title)}</label><textarea id="answer-${k}" data-answer="${k}" maxlength="50000" spellcheck="false" placeholder="Escreva seu código, resultados e raciocínio aqui...">${esc(state.answers[k] || '')}</textarea><small class="save-status" data-save-hint>Seu rascunho é sincronizado com sua conta. Confira o indicador de salvamento.</small><details><summary>Preciso de uma dica</summary><p>${esc(ex.hint)}</p></details><details><summary>Comparar com a solução comentada</summary><p>${esc(ex.solution)}</p></details><ul>${ex.criteria.map(x => '<li>' + esc(x) + '</li>').join('')}</ul><label class="check-label"><input type="checkbox" data-exercise="${k}" ${state.exercises[k] ? 'checked' : ''}>Resolvi, executei ou verifiquei conforme a proposta e conferi os critérios.</label></article>`;
      }).join('') + `<div class="button-row"><a class="button primary" href="#aula/${l.id}/checagem">Conferir meu entendimento ${icon('arrow')}</a><a href="#laboratorio/${l.id}" class="button secondary">Abrir editor</a></div><div id="completion">${completion(l)}</div>`;
    } else if (tab === 'checagem') {
      const q = state.quiz[l.id], passed = L.quizPassed(state, l);
      body = `<form class="panel quiz-card" id="quiz-form" data-id="${l.id}"><span class="eyebrow">CHECAGEM DE COMPREENSÃO · CORREÇÃO AUTOMÁTICA</span><h2>${esc(l.quiz.question)}</h2><div>${l.quiz.options.map((o, i) => `<label class="quiz-option"><input type="radio" name="answer" value="${i}" ${q?.answer === i ? 'checked' : ''} required><span>${esc(o)}</span></label>`).join('')}</div><button class="button primary" type="submit" style="margin-top:17px">Conferir resposta ${icon('arrow')}</button>${q ? `<div class="quiz-result ${passed ? '' : 'wrong'}" role="status"><strong>${passed ? '✓ Você identificou a ideia central.' : 'Vamos revisar esse ponto.'}</strong>${esc(l.quiz.explanation)}${!passed ? '<br>Volte ao exemplo e tente novamente.' : ''}</div>` : ''}<p class="muted" style="font-size:10px;margin:17px 0 0">A checagem avalia um conceito; a prática e a revisão do código completam a aprendizagem.</p></form><div id="completion">${completion(l)}</div>`;
    } else if (tab === 'anotacoes') {
      body = `<h2 style="font-size:20px;margin-bottom:12px">Explique do seu jeito.</h2><p class="muted" style="font-size:13px">Registre a ideia central, um erro que você resolveu e uma pergunta que ainda ficou.</p><label class="sr-only" for="lesson-notes">Anotações da aula</label><textarea class="notes-area" id="lesson-notes" data-notes="${l.id}" maxlength="50000" placeholder="O que aprendi...\nO que ainda preciso investigar...\nComo usaria isso no meu projeto...">${esc(state.notes[l.id] || '')}</textarea><p class="save-status" data-save-hint>Sincronizado com sua conta. O backup permite guardar uma cópia independente.</p><button class="button secondary" data-action="mentor" data-id="${l.id}">Copiar contexto para revisar no chat ↗</button>`;
    } else {
      body = `<article class="prose">${l.theory.map(x => `<section class="theory-section"><h2>${esc(x.title)}</h2><p>${esc(x.text)}</p></section>`).join('')}${l.caution ? `<div class="notice"><strong>Antes de executar.</strong> ${esc(l.caution)}</div>` : ''}${codeBlock(l)}<div class="button-row"><a class="button secondary" href="#laboratorio/${l.id}">${icon('code')} Experimentar no editor</a><a class="text-link" href="${esc(l.source)}" target="_blank" rel="noopener noreferrer">Aprofundar na documentação oficial ↗</a></div><div class="lesson-end"><label class="check-label"><input type="checkbox" data-read="${l.id}" ${state.read[l.id] ? 'checked' : ''}>Li e consigo explicar a ideia central desta aula.</label><div class="button-row"><a class="button primary" href="#aula/${l.id}/exercicios">Praticar com os 3 exercícios ${icon('arrow')}</a></div></div><div id="completion">${completion(l)}</div></article>`;
    }
    return `${game.missionBanner(l)}<a class="back-link" href="#trilha">← Voltar às aulas</a><div class="lesson-layout"><div class="lesson-content"><header class="lesson-title"><span class="eyebrow">NÍVEL ${num(l.level)} · ${esc(lv.title)} · AULA ${num(l.id)}</span><h1>${esc(l.title)}</h1><p>${esc(l.goal)}</p></header><nav class="lesson-tabs" aria-label="Etapas da aula">${[['aula', 'Aula'], ['exercicios', 'Exercícios'], ['checagem', 'Checagem'], ['anotacoes', 'Anotações']].map(([k, t]) => `<a href="#aula/${l.id}/${k}" class="${tab === k ? 'active' : ''}" ${tab === k ? 'aria-current="page"' : ''}>${t}</a>`).join('')}</nav>${body}</div><aside class="lesson-aside"><div class="panel sticky-box"><h2>Neste nível</h2>${C.lessons.filter(x => x.level === l.level).map(x => `<a class="lesson-row ${x.id === l.id ? 'current' : ''}" href="#aula/${x.id}/aula"><span class="circle ${L.complete(state, x) ? 'checked' : ''}">${L.complete(state, x) ? '✓' : num(x.id)}</span><h3>${esc(x.title)}</h3></a>`).join('')}<div class="aside-next">SUA ENTREGA DO NÍVEL<strong>${esc(lv.project)}</strong><a href="#projetos/${lv.id}" class="button ghost">Ver projeto ↗</a></div></div></aside></div>`;
  }
  function laboratory(l) {
    const code = state.drafts[l.id] ?? l.code;
    return heading('EXPERIMENTE, INVESTIGUE, ENTENDA', 'Editor de ' + C.name, 'Edite e salve seu rascunho. Siga as instruções da aula para executar ou visualizar o exemplo e compare o resultado.', `<a class="button ghost" href="#aula/${l.id}/exercicios">Voltar aos exercícios</a>`) + `<div class="lab-grid"><div><section class="panel lab-main"><div class="editor-toolbar"><span>${icon('code')} ${esc(filename(l))}</span><label class="sr-only" for="lab-lesson">Escolher exemplo da aula</label><select id="lab-lesson">${C.lessons.map(x => `<option value="${x.id}" ${x.id === l.id ? 'selected' : ''}>${num(x.id)} · ${esc(x.title)}</option>`).join('')}</select></div><div class="editor-container"><div class="line-numbers" aria-hidden="true" id="line-numbers">${code.split('\n').map((_, i) => i + 1).join('\n')}</div><label class="sr-only" for="code-editor">Código ${esc(C.name)} editável</label><textarea class="code-editor" id="code-editor" data-draft="${l.id}" spellcheck="false" autocapitalize="off" autocomplete="off" maxlength="50000">${esc(code)}</textarea></div><div class="lab-actions"><button class="button primary" data-action="copy-draft" data-id="${l.id}">Copiar código</button>${C.id==='go'?'<a class="button secondary" href="https://go.dev/play/" target="_blank" rel="noopener noreferrer">Abrir Playground ↗</a>':`<a class="button secondary" href="${esc(l.source)}" target="_blank" rel="noopener noreferrer">Documentação da aula ↗</a>`}<button class="button ghost" data-action="download-code" data-id="${l.id}">Baixar arquivo ↓</button><button class="button ghost" data-action="reset-draft" data-id="${l.id}">Restaurar exemplo</button></div></section><p class="save-status" data-save-hint>Rascunho de ${esc(C.name)} sincronizado com sua conta. O editor não executa código, comandos ou clusters.</p><div class="editor-run"><h3>COMO EXECUTAR OU VERIFICAR NO SEU AMBIENTE</h3><pre>${esc(l.run)}</pre></div><div class="output"><h3>Referência do exemplo original · compare com a sua execução</h3><pre>${esc(l.expected)}</pre></div><section class="panel mentor-prompt"><h3>O resultado foi diferente do que você esperava?</h3><p>Copie o contexto, cole nesta conversa e acrescente a saída obtida. Vamos investigar a causa juntos, uma etapa de cada vez.</p><button class="text-link" style="background:none;padding:0" data-action="mentor" data-id="${l.id}">Copiar contexto para a revisão ↗</button></section></div><aside class="panel lab-aside"><span class="eyebrow">AMBIENTE DE ${esc(C.name.toUpperCase())}</span><h2>Prepare sua prática</h2>${(C.setup||[]).map(item=>`<div><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></div>`).join('')}<div class="notice info">${esc(l.caution || 'Siga as instruções desta aula e compare com o resultado de referência.')}</div><p>Os exemplos e resultados desta página são material de estudo. Registre o que observou nas anotações.</p></aside></div>`;
  }
  function projects(focus) {
    const items = focus ? C.levels.filter(l => l.id === focus) : C.levels;
    return heading('SEU APRENDIZADO EM FUNCIONAMENTO', focus ? 'Projeto do nível ' + num(focus) : 'Construa algo que faça sentido.', `Cada entrega usa o que você aprendeu. Projeto final: ${C.outcome}`, focus ? '<a class="button ghost" href="#projetos">Ver todos os projetos</a>' : '') + `<div class="notice info" style="margin-bottom:24px">Projetos têm critérios de autoavaliação e revisão pelo chat. Conclua as três aulas do nível antes de registrar a entrega. Use dados fictícios durante o estudo.</div><div class="project-grid">${items.map(l => {
      const ready = L.levelComplete(state, C, l.id), done = ready && state.projects[l.id];
      return `<article class="panel project-card"><div class="flex between"><span class="project-level">NÍVEL ${num(l.id)} · ${l.tag}</span><span class="pill ${done ? '' : 'blue'}">${done ? '✓ Entregue' : ready ? 'Pronto para a entrega' : 'Em construção'}</span></div><h2>${esc(l.project)}</h2><h3>O que entregar</h3><ul>${l.deliverables.map(x => '<li>' + esc(x) + '</li>').join('')}</ul><h3>Critérios de revisão</h3><ul>${l.rubric.map(x => '<li>' + esc(x) + '</li>').join('')}</ul><label for="project-notes-${l.id}" class="form-label">Evidências e decisões</label><textarea id="project-notes-${l.id}" data-project-note="${l.id}" maxlength="50000" placeholder="Link do repositório, comandos executados, cenários testados e decisões...">${esc(state.projectNotes[l.id] || '')}</textarea><label class="check-label"><input type="checkbox" data-project="${l.id}" ${done ? 'checked' : ''} ${ready ? '' : 'disabled'}>Entreguei e verifiquei os critérios deste projeto.</label>${ready ? '' : '<p class="save-status">Disponível após concluir as 3 aulas deste nível.</p>'}<div class="button-row"><a class="text-link" href="#capitulo/${l.id}">Ver nível e desafio final ↗</a><button class="text-link" style="background:none;padding:0;margin-left:auto" data-action="project-review" data-id="${l.id}">Copiar pedido de revisão ↗</button></div></article>`;
    }).join('')}</div>`;
  }
  function schedule() {
    const p = L.plan(state, C);
    return heading('UM PLANO QUE CABE NA SUA SEMANA', 'Consistência antes de pressa.', `A trilha de ${C.name} tem ${C.hours} horas de referência. Ajuste o ritmo e mantenha os critérios de compreensão.`, `<a class="button secondary" href="${A.planFile(C.id)}" download>Baixar plano-base ↓</a>`) + `<div class="schedule-top"><section class="panel plan-settings"><h2>Seu compromisso de estudo</h2><label for="weekly-hours" class="form-label">Horas por semana</label><select id="weekly-hours">${[4, 6, 8, 10, 12, 16].map(n => `<option value="${n}" ${state.hours === n ? 'selected' : ''}>${n} horas por semana${n === 8 ? ' · ritmo de referência' : ''}</option>`).join('')}</select><label for="start-date" class="form-label">Data de início do plano</label><input type="date" id="start-date" min="2020-01-01" max="2100-01-01" value="${state.start}"><div class="plan-result">${p.weeks} semanas <small>· cerca de ${Math.round(p.weeks / 4.35)} meses</small></div><p>De ${date(state.start, true)} a ${date(p.end, true)}. Datas são estimativas por carga horária, não prazos obrigatórios.</p></section><section class="panel routine"><h2>Uma rotina possível</h2>${[['Segunda', 'Teoria e anotações', 1], ['Terça', 'Prática guiada', 2], ['Quinta', 'Exercícios e checagem', 2], ['Sábado', 'Projeto do nível', 2], ['Domingo', 'Revisão sem consulta', 1]].map(([d, t, h]) => `<div class="routine-row"><strong>${d}</strong><span>${t}</span><b>${Math.round(state.hours * h / 8 * 60)} min</b></div>`).join('')}<p class="save-status" style="margin-top:16px">Distribuição sugerida. Ao ter dificuldade, repita a prática antes de avançar.</p></section></div><div class="section-head"><div><h2>Seu cronograma completo</h2><p>Três aulas, nove exercícios e um projeto em cada nível.</p></div></div><div class="plan-table-wrap"><table class="plan-table"><thead><tr><th scope="col">Nível</th><th scope="col">Foco</th><th scope="col">Semanas</th><th scope="col">Período estimado</th><th scope="col">Entrega</th></tr></thead><tbody>${p.levels.map(row => { const l = C.levels[row.id - 1]; return `<tr><td>${num(l.id)}</td><td><a href="#aula/${(l.id - 1) * 3 + 1}/aula"><strong>${l.title}</strong><small>${l.skills.join(' · ')}</small></a></td><td>${row.from === row.to ? row.from : row.from + '–' + row.to}</td><td>${date(row.start, true)} → ${date(row.end, true)}</td><td><a class="accent" href="#projetos/${l.id}">${l.project} ↗</a></td></tr>`; }).join('')}</tbody></table></div><section class="panel backup-panel"><div><h2>Seu progresso, com você.</h2><p>O progresso de ${C.name}, suas respostas, rascunhos, projetos e anotações ficam neste navegador. O backup exporta apenas este curso. Exporte um backup para guardar ou continuar em outro dispositivo. Não há sincronização automática entre dispositivos.</p></div><div class="button-row"><button class="button primary" data-action="export-backup">Exportar backup ↓</button><button class="button secondary" data-action="import-backup">Importar backup ↑</button></div></section><div class="reading-note panel"><h2>Como saber que é hora de avançar?</h2><p>Você consegue explicar a ideia sem copiar, resolver os exercícios, executar ou verificar os resultados e justificar as escolhas. Uma checagem correta sozinha não substitui essa prática. A duração é uma referência e não uma promessa de senioridade.</p></div>`;
  }
  function references() {
    return heading('APRENDA A CONSULTAR A FONTE', 'Referências de ' + C.name, `Material autoral em português com links para a documentação oficial. Revisão do conteúdo: ${C.updated}.`) + `<div class="reference-grid">${C.references.map(ref=>`<a class="panel reference-card" href="${esc(ref.url)}" target="_blank" rel="noopener noreferrer">${icon('book')}<div><h2>${esc(ref.title)} ↗</h2><p>${esc(ref.description)}</p><small>${esc(new URL(ref.url).hostname)}</small></div></a>`).join('')}</div><section class="panel reading-note"><h2>Como estudar esta trilha</h2><p>Leia uma ideia, preveja o exemplo, execute e compare. Resolva os exercícios antes de abrir as soluções e registre os erros que você investigou. As checagens conceituais têm correção automática; exercícios e projetos usam critérios de autoavaliação. Copie o contexto da aula para continuar o aprendizado nesta conversa.</p></section>`;
  }
  function prerequisites() { return `<section class="panel learning-prerequisites"><h2>Antes de começar ${esc(C.name)}</h2><ul>${C.prerequisites.map(item=>`<li>${esc(item)}</li>`).join('')}</ul></section>`; }
  function catalog() {
    const visual={logica:['LP','#9cdda5'],cpp:['C++','#8ac6ef'],csharp:['C#','#c0a2f0'],markdown:['MD','#c9d2e7'],css:['CSS','#88bce9'],javascript:['JS','#f1d36b'],go:['GO','#91d9db'],java:['JV','#e9b285'],python:['PY','#d8c87c'],docker:['DK','#8ebced'],kubernetes:['K8s','#b6a5ee'],bancos:['SQL','#a6d8bc'],sqlite:['SL','#a9c6e5'],postgresql:['PG','#91bbdf'],mysql:['MY','#e4bb86'],mariadb:['MA','#b5cbd8'],sqlserver:['MS','#daa1a3'],oracle:['OR','#e8afa2'],mongodb:['MG','#9dcfa7'],redis:['RD','#e2a7aa']};
    function card(id){
      const course=A.courses[id], [symbol,color]=visual[id];
      let progress=L.fresh(course), unavailable=false;
      try{const raw=localStorage.getItem(A.storageKey(id));if(raw)progress=L.sanitize(JSON.parse(raw),course);}catch{unavailable=true;}
      const stats=L.stats(progress,course),xp=R.profile(progress,course).xp;
      return `<article class="catalog-card ${id===C.id?'catalog-current':''}" style="--course-accent:${color}"><div class="catalog-card-top"><span class="course-emblem" aria-hidden="true">${symbol}</span><span class="catalog-status">${unavailable?'BACKUP NÃO LIDO':stats.done?'EM ANDAMENTO':id==='go'?'SUA TRILHA ORIGINAL':'NOVA TRILHA'}</span></div><h3>${esc(course.name)}</h3><p>${esc(course.description)}</p><div class="catalog-metrics"><span>${course.levels.length} NÍVEIS</span><span>${course.hours} H</span><span>~${Math.ceil(course.hours/8)} SEMANAS</span></div><div class="catalog-progress"><span>${stats.done}/${course.lessons.length} aulas · ${xp.toLocaleString('pt-BR')} XP</span><span>${stats.percent}%</span></div><div class="xp-track"><span style="width:${stats.percent}%"></span></div><div class="catalog-prerequisites"><strong>PRÉ-REQUISITOS</strong>${esc(course.prerequisites.join(' '))}</div><div class="catalog-outcome"><strong>PROJETO FINAL</strong>${esc(course.outcome)}</div><div class="catalog-actions"><a href="${A.courseUrl(id)}" class="button primary">${stats.done?'Continuar':'Estudar'} ${esc(course.name)} ${icon('arrow')}</a><a href="${A.courseUrl(id,'cronograma')}" class="text-link">Ver plano ↗</a></div></article>`;
    }
    const sections = A.groups.map(group => `<div class="section-head catalog-group"><div><h2>${esc(group.title)}</h2><p>${esc(group.description)}</p></div></div><div class="course-catalog ${group.single ? 'single' : ''}">${group.ids.map(card).join('')}</div>`).join('') + `<section class="panel reading-note"><h2>Qual banco estudar primeiro?</h2><p>Comece por <a href="${A.courseUrl('bancos')}">Bancos de Dados e SQL</a>. Depois escolha uma especialização: SQLite para explorar persistência local, PostgreSQL para aprofundar sistemas relacionais ou o banco usado no seu projeto. MongoDB e Redis têm modelos e práticas próprios; cada curso explica quando usá-los.</p><p>A seleção inclui sistemas presentes entre os mais usados pelos participantes da <a href="https://survey.stackoverflow.co/2026/technology" target="_blank" rel="noopener noreferrer">pesquisa Stack Overflow 2026 ↗</a>. A ordem dos cursos é didática. Os cronogramas são independentes: escolha uma trilha principal e ajuste as horas à sua rotina.</p></section>`;
    return heading(`${Object.keys(A.courses).length} TRILHAS · O MESMO JEITO DE EVOLUIR`, 'Escolha o que você quer aprender.', 'Aulas, exercícios e projetos do básico ao avançado, com XP, conquistas e desafios finais. Cada curso tem seu próprio progresso, quatro desafios integradores e um projeto final.', `<span class="academy-counter">${Object.keys(A.courses).length} CURSOS · ${Object.values(A.courses).reduce((n,c)=>n+c.levels.length,0)} NÍVEIS</span>`).replace('class="page-heading"','class="page-heading academy-heading"') + sections + `<section class="guild-card catalog-guide"><div><span>01 · ESTUDE</span><h3>Entenda e execute</h3><p>Leia a aula, preveja o exemplo e teste no ambiente indicado. Os comandos vêm acompanhados de instruções e resultados de referência.</p></div><div><span>02 · PRATIQUE</span><h3>Resolva e construa</h3><p>Cada curso inclui 36 aulas, 108 exercícios com dicas e soluções, 36 checagens e 12 projetos com critérios.</p></div><div><span>03 · EVOLUA</span><h3>Conquiste seu progresso</h3><p>Ganhe até 13.300 XP por curso, avance de nível e conquiste medalhas nos desafios finais. O XP é concedido uma vez por atividade.</p></div></section><p class="catalog-footer-note">As estimativas consideram 8 horas semanais em um curso. Ajuste o cronograma ao seu ritmo. Os exemplos são executados no seu ambiente; o editor salva rascunhos. Você também pode trazer cada aula, seu código e suas dúvidas para esta conversa.</p>`;
  }
  function searchResults(query) {
    const text = normalize(query);
    const list = C.lessons.filter(l => normalize([l.title, l.goal, C.levels[l.level - 1].skills.join(' '), ...l.theory.map(x => x.title + ' ' + x.text)].join(' ')).includes(text));
    return heading('ENCONTRE O PRÓXIMO CONCEITO', `Busca por “${esc(query)}”`, `${list.length} aula${list.length === 1 ? '' : 's'} encontrada${list.length === 1 ? '' : 's'}.`) + (list.length ? list.map(l => `<a class="panel search-result" href="#aula/${l.id}/aula"><span class="eyebrow">NÍVEL ${num(l.level)} · AULA ${num(l.id)}</span><h2>${esc(l.title)} ↗</h2><p>${esc(l.goal)}</p></a>`).join('') : `<div class="panel empty">Nenhuma aula corresponde a essa busca em ${esc(C.name)}. Tente um dos conceitos: ${C.levels[0].skills.map(esc).join(', ')}.</div>`);
  }
  function render() {
    let segments;
    try { segments = (location.hash.slice(1) || (location.search ? 'inicio' : 'cursos')).split('/').map(x => decodeURIComponent(x)); } catch { segments = ['inicio']; }
    let [route, value, tab] = segments;
    if (route === 'conteudo') route = 'inicio';
    let active = route, title;
    if (route === 'combos') { main.innerHTML = advanced.combos(); title = 'Desafios integradores';
    } else if (route === 'combo') { main.innerHTML = advanced.combo(value); title = 'Desafio integrador'; active='combos';
    } else if (route === 'projetofinal') { main.innerHTML = advanced.finalProject(); title = 'Projeto final';
    } else if (route === 'revisao') { main.innerHTML = advanced.review(); title = 'Seu plano de revisão';
    } else if (route === 'habilidade') { main.innerHTML = advanced.ability(); title = 'Habilidade da classe';
    } else if (route === 'conta') { main.innerHTML = advanced.account(); title = 'Minha conta';
    } else if (route === 'cursos') { main.innerHTML = catalog(); title = 'Todos os cursos';
    } else if (route === 'mapa') { main.innerHTML = game.world(); title = 'Trilha de aprendizado';
    } else if (route === 'capitulo') { const id = C.levels.some(l=>l.id===Number(value)) ? Number(value) : 1; main.innerHTML = game.chapter(id); title = 'Nível ' + num(id); active = 'mapa';
    } else if (route === 'personagem') { main.innerHTML = game.character(); title = 'Meu perfil';
    } else if (route === 'inventario') { main.innerHTML = game.inventory(); title = 'Recompensas';
    } else if (route === 'arena') { main.innerHTML = game.arena(); title = 'Desafios de nível';
    } else if (route === 'combate') { const id = C.levels.some(l=>l.id===Number(value)) ? Number(value) : 1; main.innerHTML = game.battle(id); title = 'Desafio · Nível '+num(id); active = 'arena';
    } else if (route === 'aula') {
      const lesson = C.lessons.find(l => l.id === Number(value)) || C.lessons[0];
      const selected = ['aula', 'exercicios', 'checagem', 'anotacoes'].includes(tab) ? tab : 'aula';
      state.lastLesson = lesson.id; save(false); main.innerHTML = lessonPage(lesson, selected); active = 'trilha'; title = 'Aula ' + num(lesson.id);
    } else if (route === 'laboratorio') {
      const lesson = C.lessons.find(l => l.id === Number(value)) || L.next(state, C); main.innerHTML = laboratory(lesson); title = 'Editor ' + C.name;
    } else if (route === 'trilha') { main.innerHTML = curriculum(); title = 'Aulas';
    } else if (route === 'projetos') { const id = C.levels.some(l => l.id === Number(value)) ? Number(value) : null; main.innerHTML = projects(id) + (id ? '' : advanced.finalTeaser()); title = 'Projetos';
    } else if (route === 'cronograma') { main.innerHTML = schedule(); title = 'Cronograma';
    } else if (route === 'referencias') { main.innerHTML = references(); title = 'Referências';
    } else if (route === 'busca') { main.innerHTML = searchResults((value || '').slice(0, 120)); title = 'Buscar aulas'; active = 'trilha';
    } else { main.innerHTML = game.home() + advanced.overview(); active = 'inicio'; title = 'Visão geral'; }
    nav(active); updateChrome(); document.getElementById('crumb').textContent = title; document.title = title + ' — ' + C.name + ' · Forge Academy';
    closeMenu(); window.scrollTo({ top: 0 });
    main.focus({ preventScroll: true });
  }
  function refreshCompletion(id) { const lesson=C.lessons[id-1],box=document.getElementById('completion'); if(box)box.innerHTML=completion(lesson); const banner=document.querySelector('.mission-banner'); if(banner)banner.outerHTML=game.missionBanner(lesson); }
  async function copy(text) {
    try { await navigator.clipboard.writeText(text); toast('Copiado. Cole onde deseja usar.'); }
    catch { const temp = document.createElement('textarea'); temp.value = text; temp.style.cssText = 'position:fixed;top:0;left:0;opacity:.01'; document.body.append(temp); temp.focus(); temp.select(); let copied = false; try { copied = document.execCommand('copy'); } catch {} temp.remove(); toast(copied ? 'Copiado.' : 'Não foi possível copiar automaticamente. Selecione o texto e use Ctrl+C.'); }
  }
  function download(name, text, type = 'text/plain;charset=utf-8') { const blob = new Blob([text], { type }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = name; document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(url), 1500); }
  async function confirm(title, text) { const d = document.getElementById('confirm-dialog'); document.getElementById('dialog-title').textContent = title; document.getElementById('dialog-text').textContent = text; d.returnValue = ''; d.showModal(); return new Promise(resolve => d.addEventListener('close', () => resolve(d.returnValue === 'confirm'), { once: true })); }
  function setMenu(open) {
    const sidebar = document.getElementById('sidebar'), button = document.getElementById('menu-button');
    sidebar.classList.toggle('open', open); sidebar.inert = mobileScreen.matches && !open;
    sidebar.setAttribute('aria-hidden', String(mobileScreen.matches && !open));
    document.getElementById('shade').hidden = !open; button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Fechar navegação' : 'Abrir navegação');
  }
  function closeMenu() { setMenu(false); }
  const context = { C, L, R, esc, icon, getState:()=>state, go, save, toast, render, copy, confirm };
  const game = window.RPG_UI.create(context);
  const advanced = window.Advanced_UI.create(context);
  document.addEventListener('click', async event => {
    const extra = event.target.closest('[data-advanced]'); if (extra) { await advanced.click(extra); return; }
    const link = event.target.closest('a[href]');
    if (link && link.origin === location.origin && link.search.includes('curso=') && link.search !== location.search) { event.preventDefault(); try { await window.Account.flush(); location.assign(link.href); } catch(error) { toast(error.message); } return; }
    const el = event.target.closest('[data-action]'); if (!el) return;
    const id = Number(el.dataset.id), l = C.lessons[id - 1], action = el.dataset.action;
    if (action.startsWith('rpg-')) { await game.handleClick(el); return; }
    if (action === 'filter') { filter = el.dataset.filter; render(); }
    else if (action === 'copy-example') await copy(l.code);
    else if (action === 'copy-draft') await copy(state.drafts[id] ?? l.code);
    else if (action === 'download-code') download(filename(l), state.drafts[id] ?? l.code);
    else if (action === 'reset-draft') { if (await confirm('Restaurar exemplo da aula?', 'O rascunho do laboratório desta aula será substituído pelo exemplo original. Exporte um backup antes se quiser guardá-lo.')) { delete state.drafts[id]; save(); render(); toast('Exemplo original restaurado.'); } }
    else if (action === 'mentor') {
      const code = state.drafts[id] ?? l.code;
      const answers = l.exercises.map(ex => `${ex.id}. ${ex.title}\n${state.answers[`${id}-${ex.id}`] || '(ainda não respondi)'}`).join('\n\n');
      await copy(`Estou estudando ${C.name} na plataforma Forge Academy, aula ${num(id)}: ${l.title}.\nObjetivo: ${l.goal}\n\nRevise meu raciocínio e o código. Explique os erros antes de dar uma solução completa.\n\nCódigo atual:\n${A.fencedCode(code, l.language || C.codeLanguage)}\n\nMinhas respostas:\n${answers}\n\nAnotações:\n${state.notes[id] || '(sem anotações)'}\n\nSaída que obtive: [preencher]\nMinha dúvida: [preencher]`);
    } else if (action === 'project-review') {
      const lv = C.levels[id - 1]; await copy(`Quero revisar o projeto de ${C.name} no Forge Academy, nível ${num(id)}: ${lv.project}.\nEntregas: ${lv.deliverables.join('; ')}\nCritérios: ${lv.rubric.join('; ')}\nMinhas evidências: ${state.projectNotes[id] || '[preencher]'}\n\nMeu código/repositório: [preencher]\nFaça uma revisão de correção, clareza, testes e limites.`);
    } else if (action === 'export-backup') { download('go-forge-' + C.id + '-backup-' + L.today() + '.json', JSON.stringify(state, null, 2), 'application/json'); toast('Backup exportado com progresso, código e anotações.'); }
    else if (action === 'import-backup') document.getElementById('backup-file').click();
  });
  document.addEventListener('input', event => {
    const t = event.target;
    if (advanced.input(t)) return;
    if (t.dataset.answer) state.answers[t.dataset.answer] = t.value;
    else if (t.dataset.notes) state.notes[t.dataset.notes] = t.value;
    else if (t.dataset.projectNote) state.projectNotes[t.dataset.projectNote] = t.value;
    else if (t.dataset.draft) { state.drafts[t.dataset.draft] = t.value; document.getElementById('line-numbers').textContent = t.value.split('\n').map((_, i) => i + 1).join('\n'); }
    else return;
    save(); const hint = t.closest('article, .lesson-content, .lab-grid')?.querySelector('[data-save-hint]'); if (hint) hint.textContent = lastSaveOk ? 'Sincronizando com sua conta…' : 'Mantido apenas nesta sessão. Exporte um backup para guardar seu trabalho.';
  });
  document.addEventListener('change', async event => {
    const t = event.target;
    if (advanced.change(t)) return;
    if (t.dataset.read) { state.read[t.dataset.read] = t.checked; save(); refreshCompletion(Number(t.dataset.read)); }
    else if (t.dataset.exercise) { state.exercises[t.dataset.exercise] = t.checked; save(); refreshCompletion(Number(t.dataset.exercise.split('-')[0])); }
    else if (t.dataset.project) { const id = Number(t.dataset.project); if (L.levelComplete(state, C, id)) { state.projects[id] = t.checked; save(); render(); } }
    else if (t.id === 'course-picker') { if (Object.hasOwn(A.courses,t.value)) { try { await window.Account.flush(); location.assign(A.courseUrl(t.value)); } catch(error) { toast(error.message); t.value=C.id; } } }
    else if (t.id === 'lab-lesson') go('laboratorio/' + t.value);
    else if (t.id === 'weekly-hours') { state.hours = Number(t.value); save(false); render(); }
    else if (t.id === 'start-date') { if (L.validDate(t.value) && t.validity.valid) { state.start = t.value; save(false); render(); } else toast('Escolha uma data de início válida.'); }
    else if (t.id === 'backup-file') {
      const file = t.files[0]; if (!file) return;
      try {
        if (file.size > 32 * 1024 * 1024) throw new Error('O backup ultrapassa o limite de 32 MB.');
        pendingImport = L.sanitize(JSON.parse(await file.text()), C);
        const n = L.stats(pendingImport, C);
        if (await confirm('Substituir o progresso deste curso?', `Este backup contém ${n.done} aula${n.done === 1 ? '' : 's'} concluída${n.done === 1 ? '' : 's'} e ${n.exercises} exercícios. O progresso deste curso na sua conta será substituído. Você pode cancelar e exportar o atual primeiro.`)) { state = pendingImport; state.rpg.name=window.Account.user.displayName; state.rpg.classId=window.Account.user.classId; state.rpg.rewarded=state.rpg.rewarded.filter(k=>k!=='final'&&!k.startsWith('combo:')); save(false); render(); toast('Backup restaurado. Seu progresso já está disponível.'); }
      } catch (error) { toast('Não foi possível importar: ' + (error instanceof SyntaxError ? 'arquivo JSON inválido.' : error.message)); }
      pendingImport = undefined; t.value = '';
    }
  });
  document.addEventListener('submit', async event => {
    if (['advanced-assessment-form','account-password-form','class-practice-form'].includes(event.target.id)) { event.preventDefault(); await advanced.submit(event.target); return; }
    if (event.target.id.startsWith('rpg-')) { event.preventDefault(); await game.handleSubmit(event.target); return; }
    if (event.target.id === 'search-form') { event.preventDefault(); const q = document.getElementById('search').value.trim(); if (q) go('busca/' + encodeURIComponent(q.slice(0, 120))); }
    if (event.target.id === 'quiz-form') { event.preventDefault(); const id = Number(event.target.dataset.id); const answer = Number(new FormData(event.target).get('answer')); state.quiz[id] = { answer, attempts: (state.quiz[id]?.attempts || 0) + 1 }; save(); render(); }
  });
  document.getElementById('menu-button').addEventListener('click', () => setMenu(!document.getElementById('sidebar').classList.contains('open')));
  mobileScreen.addEventListener('change', closeMenu);
  document.getElementById('shade').addEventListener('click', closeMenu);
  document.querySelector('.skip').addEventListener('click', event => { event.preventDefault(); main.focus({ preventScroll: true }); main.scrollIntoView({ block: 'start' }); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) { event.preventDefault(); document.getElementById('search').focus(); } });
  document.addEventListener('scroll', event => { if (event.target.id === 'code-editor') document.getElementById('line-numbers').scrollTop = event.target.scrollTop; }, true);
  window.addEventListener('hashchange', render);
  document.getElementById('course-picker').innerHTML = A.groups.map(group => `<optgroup label="${esc(group.title)}">${group.ids.map(id => { const course = A.courses[id]; return `<option value="${id}" ${id===C.id?'selected':''}>${esc(course.name)}</option>`; }).join('')}</optgroup>`).join('');
  document.getElementById('academy-subtitle').textContent = Object.keys(A.courses).length + ' TRILHAS · SUA EVOLUÇÃO';
  document.getElementById('course-context-name').textContent=C.name;
  document.getElementById('search').placeholder='Buscar em '+C.name+'...';
  R.reconcile(state, C); save(false); render(); if (storageError) warnStorage();
})();
