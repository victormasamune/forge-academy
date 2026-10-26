const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const sandbox = { Intl, Date };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(__dirname, '../public/learn/course.js'), 'utf8').replace('window.COURSE', 'COURSE'), sandbox);
vm.runInContext(fs.readFileSync(path.join(__dirname, '../public/learn/learning.js'), 'utf8'), sandbox);
const C = sandbox.COURSE, L = sandbox.Learning;
function finish(s, id) { const l = C.lessons[id - 1]; s.read[id] = true; for (const ex of l.exercises) s.exercises[`${id}-${ex.id}`] = true; s.quiz[id] = { answer: l.quiz.answer, attempts: 1 }; }

test('curso completo tem 12 níveis, 36 aulas e 108 exercícios', () => {
  assert.equal(C.levels.length, 12); assert.equal(C.lessons.length, 36);
  assert.equal(C.lessons.reduce((n, l) => n + l.exercises.length, 0), 108);
  for (let id = 1; id <= 12; id++) assert.equal(C.lessons.filter(l => l.level === id).length, 3);
  for (const l of C.lessons) { assert.ok(l.code && l.source.startsWith('https://')); assert.ok(l.quiz.answer >= 0 && l.quiz.answer < l.quiz.options.length); }
});
test('leitura ou resposta correta isoladas não concluem aula', () => {
  const s = L.fresh(), l = C.lessons[0];
  s.read[1] = true; s.quiz[1] = { answer: l.quiz.answer };
  assert.equal(L.complete(s, l), false);
  s.exercises['1-1'] = true; s.exercises['1-2'] = true;
  assert.equal(L.complete(s, l), false);
  s.exercises['1-3'] = true; assert.equal(L.complete(s, l), true);
  s.quiz[1].answer = (l.quiz.answer + 1) % l.quiz.options.length;
  assert.equal(L.complete(s, l), false);
});
test('projeto só conta com todas as três aulas concluídas', () => {
  const s = L.fresh(); s.projects[1] = true; finish(s, 1); finish(s, 2);
  assert.equal(L.stats(s, C).projects, 0); finish(s, 3);
  assert.equal(L.stats(s, C).projects, 1);
});
test('contagem de progresso ignora chaves inventadas', () => {
  const s = L.fresh(); s.exercises['999-1'] = true; s.projects[999] = true; finish(s, 1);
  const stats = L.stats(s, C);
  assert.equal(stats.done, 1); assert.equal(stats.exercises, 3); assert.equal(stats.projects, 0);
});
test('plano base tem 36 semanas, 24h por nível e períodos contínuos', () => {
  const s = L.fresh(); s.start = '2026-10-22';
  const p = L.plan(s, C); assert.equal(p.weeks, 36); assert.equal(p.levels[0].from, 1); assert.equal(p.levels[0].to, 3);
  assert.equal(p.end, '2027-06-30');
  for (let i = 1; i < p.levels.length; i++) assert.equal(L.dateAt(p.levels[i - 1].end, 1), p.levels[i].start);
});
test('ajuste de ritmo preserva carga total e atravessa ano bissexto', () => {
  const s = L.fresh(); s.start = '2028-02-28'; s.hours = 4;
  assert.equal(L.plan(s, C).weeks, 72); assert.equal(L.dateAt(s.start, 1), '2028-02-29');
  s.hours = 12; assert.equal(L.plan(s, C).weeks, 24); s.hours = 16; assert.equal(L.plan(s, C).weeks, 18);
});
test('backup preserva código e respostas, removendo estrutura desconhecida', () => {
  const s = L.fresh(); finish(s, 1); s.drafts[1] = 'package main'; s.notes[1] = '<script>literal</script>'; s.answers['1-1'] = 'resposta';
  const restored = L.sanitize(JSON.parse(JSON.stringify({ ...s, dangerous: 'ignore', read: { ...s.read, 999: true } })), C);
  assert.equal(L.complete(restored, C.lessons[0]), true); assert.equal(restored.drafts[1], 'package main'); assert.equal(restored.notes[1], s.notes[1]);
  assert.equal(restored.answers['1-1'], 'resposta'); assert.equal(restored.read[999], undefined); assert.equal(restored.dangerous, undefined);
});
test('backup inválido é recusado e dados fora de contrato recebem padrão', () => {
  assert.throws(() => L.sanitize({ schema: 99 }, C));
  const s = L.sanitize({ schema: 1, hours: -2, start: '2026-02-31', quiz: { 1: { answer: 999 } }, lastLesson: -1 }, C);
  assert.equal(s.hours, 8); assert.equal(s.lastLesson, 1); assert.equal(s.quiz[1], undefined); assert.notEqual(s.start, '2026-02-31');
});
test('continuar respeita a última aula e avança após conclusão', () => {
  const s = L.fresh(); s.lastLesson = 2; assert.equal(L.next(s, C).id, 2); finish(s, 2);
  assert.equal(L.next(s, C).id, 1); finish(s, 1); assert.equal(L.next(s, C).id, 3);
});
test('datas inválidas não viram um cronograma silenciosamente incorreto', () => {
  assert.equal(L.validDate('2026-02-30'), false); assert.equal(L.validDate('2028-02-29'), true);
  assert.equal(L.validDate('qualquer coisa'), false); assert.match(L.today(), /^\d{4}-\d{2}-\d{2}$/);
});
