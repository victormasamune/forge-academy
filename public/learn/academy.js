/* Seleção de curso e compatibilidade com o progresso original de Go. */
(function (root) {
  'use strict';
  const go = root.COURSE;
  Object.assign(go, {
    id: 'go', name: 'Go', extension: 'go', codeLanguage: 'go',
    description: 'Do primeiro programa a serviços confiáveis, com tipos, testes, concorrência e operação.',
    prerequisites: ['Nenhuma experiência prévia em Go. Acesso a um computador para praticar.'],
    outcome: 'API de ordens de serviço com estoque, autorização, transações e observabilidade.',
    setup: [
      { title: 'Prepare o ambiente', text: 'Instale Go pelo site oficial e confirme com go version. Use uma pasta separada por aula.' },
      { title: 'Inicie o módulo', text: 'Na pasta da aula, execute go mod init example.com/oficina uma única vez. Salve o exemplo com o nome indicado.' },
      { title: 'Execute e investigue', text: 'Use go run . para programas e go test -v . para testes. O Playground oficial serve para exemplos isolados; rede, duração e recursos são limitados.' }
    ],
    references: [
      { title: 'Primeiros passos em Go', description: 'Instalação, módulos e primeiros programas.', url: 'https://go.dev/doc/tutorial/' },
      { title: 'A Tour of Go', description: 'Tipos, métodos e concorrência em exemplos interativos.', url: 'https://go.dev/tour/' },
      { title: 'Especificação de Go', description: 'Sintaxe, tipos e semântica da linguagem.', url: 'https://go.dev/ref/spec' },
      { title: 'Biblioteca padrão', description: 'Pacotes, contratos e exemplos oficiais.', url: 'https://pkg.go.dev/std' },
      { title: 'Modelo de memória', description: 'Sincronização e visibilidade em programas concorrentes.', url: 'https://go.dev/ref/mem' },
      { title: 'Diagnóstico e desempenho', description: 'Profiling, trace e investigação de problemas.', url: 'https://go.dev/doc/diagnostics' },
      { title: 'Segurança em Go', description: 'Vulnerabilidades e ferramentas oficiais.', url: 'https://go.dev/doc/security/' },
      { title: 'Playground oficial', description: 'Execução de exemplos isolados com limites de sandbox.', url: 'https://go.dev/play/' }
    ]
  });
  go.levels.forEach(level => { level.hours = 24; });
  go.lessons.forEach(lesson => {
    const test = !/func main\s*\(/.test(lesson.code);
    lesson.hours = 8; lesson.language = 'go'; lesson.filename = test ? 'main_test.go' : 'main.go';
    lesson.run = test ? lesson.id === 15 ? 'go test -fuzz=FuzzTrim -fuzztime=10s .' : lesson.id === 28 ? 'go test -run=^$ -bench=Montar -benchmem .' : 'go test -v .' : 'go run .';
  });
  const courses = { go, ...(root.COURSES || {}) };
  const selected = new URLSearchParams(root.location.search).get('curso');
  const id = Object.hasOwn(courses, selected) ? selected : 'go';
  const course = courses[id];
  root.COURSE = course;
  root.COURSES = courses;
  root.Academy = {
    courses, selected: id,
    groups: [
      { title: 'Comece pela base', description: 'Se você está começando, estude Lógica e depois escolha uma linguagem. Os cursos continuam abertos para quem já tem experiência.', ids: ['logica'], single: true },
      { title: 'Linguagens de programação', description: 'Escolha uma trilha principal para praticar fundamentos, construir projetos e avançar com consistência.', ids: ['go', 'javascript', 'python', 'java', 'cpp', 'csharp'] },
      { title: 'Web e documentação', description: 'Aprenda a criar interfaces com CSS e a escrever documentação clara com Markdown.', ids: ['css', 'markdown'] },
      { title: 'Containers e orquestração', description: 'Aprenda Docker antes de Kubernetes para dominar imagens, redes e volumes.', ids: ['docker', 'kubernetes'] },
      { title: 'Bancos de dados · comece pela base', description: 'Aprenda SQL, modelagem, integridade e transações. Depois escolha um banco para se aprofundar; não é necessário cursar todos ao mesmo tempo.', ids: ['bancos'], single: true },
      { title: 'Bancos relacionais', description: 'SQLite para aplicações locais; PostgreSQL, MySQL, MariaDB, SQL Server e Oracle para aprofundar desenvolvimento e operação. Cada curso ensina seu próprio dialeto e suas ferramentas.', ids: ['sqlite', 'postgresql', 'mysql', 'mariadb', 'sqlserver', 'oracle'] },
      { title: 'Documentos e estruturas por chave', description: 'MongoDB para documentos e Redis para estruturas de dados, cache e eventos. Aprenda modelagem, consistência e recuperação próprias de cada sistema.', ids: ['mongodb', 'redis'] }
    ],
    storageKey(courseId) { const original = courseId === 'go' ? 'go-forge-progress-v1' : 'go-forge-' + courseId + '-progress-v1'; return root.Account?.user ? 'forge-academy:' + root.Account.user.id + ':' + original : original; },
    courseUrl(courseId, page = 'inicio') { return '/?curso=' + encodeURIComponent(courseId) + '#' + page; },
    planFile(courseId) { return '/learn/' + (courseId === 'go' ? 'cronograma-go-forge.md' : 'cronograma-' + courseId + '.md'); },
    fencedCode(code, language = '') {
      const text = String(code);
      const size = (text.match(/`+/g) || []).reduce((n, run) => Math.max(n, run.length + 1), 3);
      const fence = '`'.repeat(size);
      return `${fence}${language}\n${text}${text.endsWith('\n') ? '' : '\n'}${fence}`;
    }
  };
  if (id !== 'go') {
    root.RPG_DATA = {
      classes: root.RPG_DATA.classes,
      chapters: course.levels.map(level => ({
        id: level.id, region: level.title, terrain: 'estudos',
        boss: 'Desafio do nível ' + String(level.id).padStart(2, '0'),
        bossTitle: 'Três perguntas para aplicar os conceitos de ' + course.name + ' deste nível.',
        relic: 'Medalha · ' + level.title, lore: level.summary,
        victory: 'Você concluiu o desafio de ' + level.title + '. Sua medalha e seu XP foram registrados.',
        rune: level.skills[0], questions: level.challenge
      }))
    };
  }
})(window);
