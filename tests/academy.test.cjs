const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ids = ['go', 'docker', 'kubernetes', 'java', 'javascript', 'python', 'logica', 'cpp', 'csharp', 'css', 'markdown', 'bancos', 'sqlite', 'postgresql', 'mysql', 'mariadb', 'sqlserver', 'oracle', 'mongodb', 'redis'];
function boot(id) {
  const x = { Intl, Date, Math, URLSearchParams, location: { search: '?curso=' + id } };
  x.window = x; vm.createContext(x);
  for (const file of ['course.js', ...ids.slice(1).map(id => 'courses/' + id + '.js'), 'learning.js', 'rpg-data.js', 'classes.js', 'academy.js', 'rpg.js']) {
    vm.runInContext(fs.readFileSync(path.join(__dirname, '../public/learn', file), 'utf8'), x);
  }
  return x;
}
function finishLesson(x, s, l) {
  s.read[l.id] = true;
  for (const exercise of l.exercises) s.exercises[`${l.id}-${exercise.id}`] = true;
  s.quiz[l.id] = { answer: l.quiz.answer, attempts: 1 };
}

for (const id of ids) {
  test(`${id}: conteúdo, cronograma e desafio final usam a trilha selecionada`, () => {
    const x = boot(id), c = x.COURSE, L = x.Learning, R = x.RPG;
    assert.equal(c.id, id);
    assert.equal(c.levels.length, 12); assert.equal(c.lessons.length, 36);
    assert.equal(c.lessons.reduce((n,l) => n + l.exercises.length,0),108);
    assert.equal(c.levels.reduce((n,l) => n + l.hours,0),c.hours);
    assert.equal(c.lessons.reduce((n,l) => n + l.hours,0),c.hours);
    assert.equal(x.RPG_DATA.chapters.length,12);
    for (const l of c.lessons) {
      assert.ok(l.filename && l.run && l.expected && l.source.startsWith('https://'));
      assert.equal(l.quiz.options.length,4);
      assert.ok(Number.isInteger(l.quiz.answer) && l.quiz.answer >= 0 && l.quiz.answer < 4);
      for (const e of l.exercises) assert.ok(e.prompt && e.hint && e.solution && e.criteria.length >= 2);
    }
    const s = L.fresh(c), plan = L.plan(s,c);
    assert.equal(plan.weeks,Math.ceil(c.hours / 8));
    for (let i = 1; i < 12; i++) assert.equal(L.dateAt(plan.levels[i-1].end,1),plan.levels[i].start);
    assert.equal(plan.levels[11].end,plan.end);
    assert.equal(R.startBattle(s,c,1).ok,false);
    for (const l of c.lessons.filter(l => l.level === 1)) finishLesson(x,s,l);
    s.projects[1] = true; R.reconcile(s,c);
    assert.equal(R.profile(s,c).xp,750);
    assert.equal(R.startBattle(s,c,1,() => .5).ok,true);
    for (const q of x.RPG_DATA.chapters[0].questions) {
      assert.equal(R.answerBattle(s,c,1,q.answer).ok,true);
      R.continueBattle(s);
    }
    R.reconcile(s,c);
    assert.equal(R.profile(s,c).xp,1000);
    assert.equal(s.rpg.bosses[1],true);
    assert.equal(R.reconcile(s,c).xp,0);
    const restored = L.sanitize(JSON.parse(JSON.stringify(s)),c);
    assert.equal(restored.courseId,id);
    assert.equal(R.profile(restored,c).xp,1000);
    assert.equal(L.stats(restored,c).done,3);
  });
}

test('cursos têm chaves independentes e o armazenamento antigo de Go é preservado', () => {
  const x = boot('python'), keys = ids.map(id => x.Academy.storageKey(id));
  assert.equal(new Set(keys).size,ids.length);
  const catalogued = Array.from(x.Academy.groups).flatMap(group => Array.from(group.ids));
  assert.deepEqual(catalogued.sort(),[...ids].sort());
  assert.equal(keys[0],'go-forge-progress-v1');
  assert.equal(x.RPG.profile(x.Learning.fresh(x.COURSE),x.COURSE).xp,0);
  assert.equal(boot('curso-inexistente').COURSE.id,'go');
});

test('backup identifica o curso e recusa importação cruzada com os mesmos IDs de aula', () => {
  const g = boot('go'), p = boot('python');
  const old = g.Learning.fresh(g.COURSE);
  delete old.courseId;
  finishLesson(g,old,g.COURSE.lessons[0]);
  assert.equal(g.Learning.sanitize(old,g.COURSE).read[1],true);
  assert.throws(() => p.Learning.sanitize(old,p.COURSE),/outro curso/);
  const python = p.Learning.fresh(p.COURSE);
  assert.throws(() => g.Learning.sanitize(python,g.COURSE),/outro curso/);
});

test('JavaScript e Python mantêm aprendizado, XP e backups independentes', () => {
  const j = boot('javascript'), p = boot('python');
  const javascript = j.Learning.fresh(j.COURSE), python = p.Learning.fresh(p.COURSE);
  finishLesson(j,javascript,j.COURSE.lessons[0]);
  j.RPG.reconcile(javascript,j.COURSE);
  assert.equal(j.Learning.stats(javascript,j.COURSE).done,1);
  assert.equal(j.RPG.profile(javascript,j.COURSE).xp,200);
  assert.equal(p.Learning.stats(python,p.COURSE).done,0);
  assert.equal(p.RPG.profile(python,p.COURSE).xp,0);
  assert.notEqual(j.Academy.storageKey('javascript'),p.Academy.storageKey('python'));
  assert.throws(() => p.Learning.sanitize(javascript,p.COURSE),/outro curso/);
  assert.equal(j.Learning.sanitize(javascript,j.COURSE).courseId,'javascript');
});

test('durações por nível respeitam limites entre dias mesmo com frações de semana', () => {
  const x = boot('docker'), s = x.Learning.fresh(x.COURSE);
  s.hours = 10; s.start = '2028-02-28';
  const plan = x.Learning.plan(s,x.COURSE);
  assert.equal(plan.weeks,15);
  assert.equal(plan.levels[0].start,'2028-02-28');
  for (let i = 1; i < 12; i++) assert.equal(x.Learning.dateAt(plan.levels[i-1].end,1),plan.levels[i].start);
  assert.equal(plan.levels[11].end,plan.end);
});
