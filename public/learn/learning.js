/* Regras de progresso por curso e cronograma. Não executa os exemplos. */
(function (root) {
  'use strict';
  const today = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  function fresh(course = {}) { return { schema: 1, courseId: course.id || 'go', hours: 8, start: today(), read: {}, exercises: {}, answers: {}, quiz: {}, notes: {}, drafts: {}, projects: {}, projectNotes: {}, lastLesson: 1, activity: [], rpg: root.RPG ? root.RPG.fresh() : undefined }; }
  const validDate = s => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s)) && new Date(s).toISOString().slice(0, 10) === s;
  function sanitize(input, course) {
    if (!input || typeof input !== 'object' || input.schema !== 1) throw new Error('Formato de backup incompatível. Use um backup exportado pela Forge Academy.');
    if ((input.courseId || 'go') !== (course.id || 'go')) throw new Error('Este backup pertence a outro curso. Selecione o curso correspondente antes de importar.');
    const s = fresh(course);
    if ([4, 6, 8, 10, 12, 16].includes(input.hours)) s.hours = input.hours;
    if (validDate(input.start) && input.start >= '2020-01-01' && input.start <= '2100-01-01') s.start = input.start;
    const text = v => typeof v === 'string' ? v.slice(0, 50000) : '';
    for (const lesson of course.lessons) {
      const id = lesson.id;
      s.read[id] = input.read?.[id] === true;
      if (input.quiz?.[id] && Number.isInteger(input.quiz[id].answer) && input.quiz[id].answer >= 0 && input.quiz[id].answer < lesson.quiz.options.length) {
        s.quiz[id] = { answer: input.quiz[id].answer, attempts: Math.max(1, Math.min(10000, Number(input.quiz[id].attempts) || 1)) };
      }
      for (const key of ['notes', 'drafts']) if (typeof input[key]?.[id] === 'string') s[key][id] = text(input[key][id]);
      for (const ex of lesson.exercises) {
        const k = `${id}-${ex.id}`;
        s.exercises[k] = input.exercises?.[k] === true;
        if (typeof input.answers?.[k] === 'string') s.answers[k] = text(input.answers[k]);
      }
    }
    for (const lv of course.levels) {
      s.projects[lv.id] = input.projects?.[lv.id] === true;
      if (typeof input.projectNotes?.[lv.id] === 'string') s.projectNotes[lv.id] = text(input.projectNotes[lv.id]);
    }
    if (Number.isInteger(input.lastLesson) && course.lessons.some(l => l.id === input.lastLesson)) s.lastLesson = input.lastLesson;
    if (Array.isArray(input.activity)) s.activity = [...new Set(input.activity.filter(validDate))].slice(-400);
    if (root.RPG) s.rpg = root.RPG.sanitize(input.rpg, course);
    return s;
  }
  const quizPassed = (s, l) => s.quiz[l.id]?.answer === l.quiz.answer;
  const exerciseCount = (s, l) => l.exercises.filter(e => s.exercises[`${l.id}-${e.id}`] === true).length;
  const complete = (s, l) => s.read[l.id] === true && exerciseCount(s, l) === l.exercises.length && quizPassed(s, l);
  const levelComplete = (s, course, level) => course.lessons.filter(l => l.level === level).every(l => complete(s, l));
  function stats(s, course) {
    const done = course.lessons.filter(l => complete(s, l)).length;
    return { done, percent: Math.round(done / course.lessons.length * 100), exercises: course.lessons.reduce((n, l) => n + exerciseCount(s, l), 0), projects: course.levels.filter(l => s.projects[l.id] && levelComplete(s, course, l.id)).length };
  }
  function next(s, course) {
    const last = course.lessons.find(l => l.id === s.lastLesson);
    if (last && !complete(s, last)) return last;
    return course.lessons.find(l => !complete(s, l)) || course.lessons[course.lessons.length - 1];
  }
  function dateAt(start, day) { const d = new Date(start + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + day); return d.toISOString().slice(0, 10); }
  function plan(s, course) {
    let elapsed = 0;
    return { weeks: Math.ceil(course.hours / s.hours), end: dateAt(s.start, Math.ceil(course.hours / s.hours * 7) - 1), levels: course.levels.map(l => {
      const before = elapsed;
      elapsed += l.hours || course.hours / course.levels.length;
      const startDay = Math.ceil(before / s.hours * 7);
      const endDay = Math.ceil(elapsed / s.hours * 7) - 1;
      return { id: l.id, start: dateAt(s.start, startDay), end: dateAt(s.start, endDay), from: Math.floor(before / s.hours) + 1, to: Math.ceil(elapsed / s.hours) };
    }) };
  }
  root.Learning = { fresh, sanitize, today, complete, quizPassed, exerciseCount, levelComplete, stats, next, plan, dateAt, validDate };
})(typeof window === 'undefined' ? globalThis : window);
