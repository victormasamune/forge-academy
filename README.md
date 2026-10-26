# Forge Academy

Plataforma de ensino em português com contas individuais, progresso persistente e gamificação inspirada em RPG. Os termos técnicos dos cursos são preservados.

## Cursos e atividades

Vinte cursos: Lógica de Programação, Go, JavaScript, Python, Java, C++, C#, CSS, Markdown, Docker, Kubernetes, Bancos de Dados e SQL, SQLite, PostgreSQL, MySQL, MariaDB, SQL Server, Oracle Database, MongoDB e Redis.

Cada curso contém 12 níveis, 36 aulas, 108 exercícios, checagens conceituais, projetos de nível, quatro desafios integradores e um projeto final independente. Os 80 combos e 20 projetos finais adicionam 300 questões de aplicação, explicações e referências às aulas necessárias para revisão. Os planos em Markdown incluem os novos desafios e seus testes de aceitação prática.

Os combos são liberados pela conclusão do conjunto de aulas indicado em cada atividade. A entrega final exige as 36 aulas e os quatro combos; seu rascunho pode ser preparado antes. Cada recompensa é concedida uma vez. Há 13.300 XP possíveis por curso.

As questões conceituais recebem correção automática. Exercícios e implementação dos projetos usam autoavaliação com critérios e testes locais. O servidor não executa código enviado pelo aluno e não certifica seu funcionamento. O plano de revisão combina erros das checagens, dos combos e os critérios pendentes do projeto.

## Classes

| Classe | Vantagem implementada |
| --- | --- |
| Artífice | Checklist persistente para construir o projeto final |
| Arcanista | Cartões de revisão dos conceitos das aulas |
| Sentinela | Quatro tentativas por desafio de nível, em vez de três |
| Ladino | Pistas de investigação a partir dos objetivos dos pré-requisitos |
| Explorador | Rota pelas aulas que faltam para liberar o próximo combo |
| Bardo | Caderno estruturado para conceito, exemplo e limites |
| Monge | Sessão de foco com objetivo e temporizador de 25 minutos |
| Clérigo | Plano de recuperação em três passos para os erros recentes |
| Paladino | Treino de três conceitos sem gastar tentativas de nível |

As afinidades descrevem estilos de estudo; não medem competência nem restringem cursos. Nome de exibição e classe pertencem à conta e valem em todos os cursos. Não é possível trocar de classe durante um desafio de nível aberto.

## Contas e progresso

- Cadastro com usuário, nome de exibição e senha de 8 a 128 caracteres. Não exige nome real ou e-mail.
- Senhas protegidas por scrypt com salt aleatório; sessões opacas em cookie HttpOnly, Secure em HTTPS e SameSite=Lax. Tokens de sessão e recuperação são armazenados como hashes.
- Código de recuperação exibido uma vez no cadastro e na recuperação. Não há envio por e-mail: cada aluno precisa guardar esse código.
- Registros privados identificados pela sessão no servidor. O cliente não escolhe o proprietário de um registro.
- Salvamento automático em D1, separado por conta e curso, incluindo respostas, anotações, rascunhos, ferramentas e avaliações.
- Controle de revisão impede uma aba ou dispositivo de sobrescrever uma edição mais recente silenciosamente. Em conflito, é possível exportar a cópia local e recarregar a versão salva.
- Backups antigos são importados somente por ação explícita do aluno. O perfil da conta atual prevalece; resultados de combos e projeto final permanecem os registrados pelo servidor.

O cache local também é separado por usuário e limpo ao sair. Dados privados não fazem parte dos arquivos de publicação. Contas, sessões e notas da prévia local usam um banco distinto do banco publicado.

## GitHub e hospedagem externa

O repositório deve conter apenas o código e os materiais versionados. Não envie `.wrangler/`, bancos locais, arquivos de ambiente, credenciais ou dados dos alunos. A implantação atual usa Cloudflare Workers e D1. O roteiro [Migração para Render](docs/MIGRACAO_RENDER.md) descreve a adaptação necessária para Node e PostgreSQL antes de um deploy externo; o atual comando `npm start` ainda é uma prévia local Wrangler.

## Estrutura

- `public/learn/`: interface, materiais, ícones e planos de estudo.
- `curricula/`: fontes dos 19 cursos complementares; `build_course.py` e `course_advanced.py`: fonte do curso Go.
- `assessments/`: desafios integradores e projetos finais dos 20 cursos.
- `scripts/build-learning-data.cjs`: gera índices do servidor, dados da interface e seções adicionais dos planos.
- `server/`: autenticação, validação de progresso, correção e API.
- `app/`: rotas Vinext; `worker/` e `vite.config.ts`: integração com o runtime Sites.
- `db/schema.ts` e `drizzle/`: esquema e migrações D1. Não há criação de esquema durante requisições.
- `.openai/hosting.json`: identidade estável do Site e declaração do binding `DB`.

As rotas reservadas de autenticação da hospedagem são preservadas. O login de aluno é próprio da aplicação e não substitui nem intercepta essas rotas.

## Desenvolvimento e validação

Requer Node.js 22.13 ou superior e Python 3 para regenerar os materiais.

```sh
npm run install:ci
python3 build_course.py
python3 build_academy.py
node scripts/build-learning-data.cjs
node --test tests/*.test.cjs tests/*.test.mjs
npm run build
```

Use o fluxo oficial de prévia e publicação do Sites. Na prévia gerenciada, `sites-preview start <checkout>` informa a URL correta. Não execute outro servidor em paralelo.

As migrações versionadas são aplicadas pelo fluxo de publicação antes do upload do Worker. Para preparar o D1 local depois do build:

```sh
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_productive_mattie_franklin.sql
```

A rota `/api/dev/session` e seu link de conta sintética existem apenas quando `import.meta.env.DEV` é verdadeiro. A conta possui senha desabilitada. Essa rota é inativa no build de produção; os registros locais em `.wrangler/` são ignorados e não publicados.

Os testes cobrem isolamento entre contas, credenciais e sessões, recuperação e troca de senha, validação de origem, bloqueios de pré-requisitos, correção e revisão, gravações concorrentes, entregas finais e consistência dos currículos e das recompensas. A gamificação é formativa: os exercícios autoavaliados não constituem prova supervisionada.
