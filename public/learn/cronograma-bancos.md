# Plano de ensino — Bancos de Dados e SQL

Aprenda modelagem, SQL, integridade, transações e operação antes de escolher um banco. SQLite é o laboratório acessível para praticar os conceitos.

**Carga estimada:** 144 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Nenhuma experiência prévia com banco de dados é exigida.
- Computador com SQLite 3.37+ e editor; Python 3.12+ é usado em duas aulas de integração e cópia consistente.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Primeiros conceitos | 12 | 1–2 | Catálogo de livros |
| 02 | Modelagem e relacionamentos | 12 | 2–3 | Modelo de biblioteca |
| 03 | Consultas essenciais | 12 | 4–5 | Busca do catálogo |
| 04 | Relatórios e indicadores | 12 | 5–6 | Relatório de circulação |
| 05 | Junções e existência | 12 | 7–8 | Relatório de leitores |
| 06 | Qualidade do modelo | 12 | 8–9 | Revisão do modelo da biblioteca |
| 07 | Escritas e ciclo de vida | 12 | 10–11 | Operações de cadastro |
| 08 | SQL para análise | 12 | 11–12 | Painel de circulação |
| 09 | Transações e concorrência | 12 | 13–14 | Empréstimo transacional |
| 10 | Desempenho com evidências | 12 | 14–15 | Investigação de consulta |
| 11 | Integração e evolução | 12 | 16–17 | Cliente seguro da biblioteca |
| 12 | Recuperação e projeto completo | 12 | 17–18 | Biblioteca com recuperação demonstrada |

## Nível 01 — Primeiros conceitos

Entenda o SGBD, a estrutura das tabelas e as regras que protegem os dados.

**Aulas e objetivos**

- Aula 01: **Dados, informações e consultas** — Distinguir dado armazenado, consulta e interpretação de negócio. (4 h)
  - Exercício 1: Calcule o valor de quatro livros de 1550 centavos.
  - Exercício 2: Explique a diferença entre sqlite3 e SELECT.
  - Exercício 3: Represente desconto de 300 centavos sobre 2400.
- Aula 02: **Tabelas, linhas e colunas** — Criar uma relação simples e consultar suas linhas. (4 h)
  - Exercício 1: Cadastre o livro 3, Banco de Dados.
  - Exercício 2: Mostre apenas os títulos em ordem alfabética.
  - Exercício 3: Compare duas linhas com o mesmo id.
- Aula 03: **Domínios e regras de integridade** — Declarar valores obrigatórios e limites do domínio. (4 h)
  - Exercício 1: Tente cadastrar estoque -1 e descreva a falha.
  - Exercício 2: Imponha nome único em uma tabela nova.
  - Exercício 3: Explique por que validação só na tela é insuficiente.

**Projeto:** Catálogo de livros

- Arquivo SQL que cria livros com id, título e quantidade.
- Cinco registros fictícios e duas consultas ordenadas.
- Dicionário com significado, tipo e obrigatoriedade de cada coluna.

**Critérios de conclusão**

- IDs duplicados e estoque negativo são rejeitados.
- Cada linha representa um único livro.
- Consultas esperadas podem ser reproduzidas em um banco novo.

## Nível 02 — Modelagem e relacionamentos

Transforme regras do domínio em identidades, cardinalidades e referências.

**Aulas e objetivos**

- Aula 04: **Chaves e identidade** — Escolher identificadores estáveis e distinguir chaves candidatas. (4 h)
  - Exercício 1: Tente duplicar o e-mail com outro ID.
  - Exercício 2: Atualize o nome de Ana sem trocar a chave.
  - Exercício 3: Proponha duas chaves candidatas para um cadastro com CPF obrigatório e matrícula única.
- Aula 05: **Relacionamentos e chaves estrangeiras** — Modelar uma relação de um para muitos com referência válida. (4 h)
  - Exercício 1: Tente emprestar para leitor 99.
  - Exercício 2: Explique quando SET NULL é inadequado.
  - Exercício 3: Confira a habilitação da verificação no laboratório.
- Aula 06: **Relações de muitos para muitos** — Criar uma tabela associativa sem duplicações. (4 h)
  - Exercício 1: Teste inserir o par (1,10) novamente.
  - Exercício 2: Acrescente ordem_autoria ao modelo.
  - Exercício 3: Desenhe livro, autor e autoria com suas FKs.

**Projeto:** Modelo de biblioteca

- Diagrama com livros, autores, leitores e empréstimos.
- DDL das tabelas e associações.
- Três tentativas inválidas documentadas.

**Critérios de conclusão**

- Cada entidade tem identidade estável.
- Relação N:N usa associação sem pares duplicados.
- Nenhuma FK aceita referência órfã com a verificação ligada.

## Nível 03 — Consultas essenciais

Consulte as linhas certas, trate ausência e organize resultados previsíveis.

**Aulas e objetivos**

- Aula 07: **Filtros e lógica booleana** — Traduzir condições de negócio para WHERE com precedência clara. (4 h)
  - Exercício 1: Filtre ativos com preço de 1000 a 2000 inclusive.
  - Exercício 2: Compare (ativo=1 AND preco<1000) OR id=3 com ativo=1 AND (preco<1000 OR id=3).
  - Exercício 3: Crie casos em 999,1000,1001 para limite <=1000.
- Aula 08: **NULL e valores ausentes** — Consultar ausência sem confundi-la com zero ou texto vazio. (4 h)
  - Exercício 1: Consulte somente empréstimos devolvidos.
  - Exercício 2: Explique por que = NULL não encontra a linha 1.
  - Exercício 3: Mostre todos os empréstimos com rótulo de aberto.
- Aula 09: **Ordenação e paginação inicial** — Produzir resultados limitados com desempate determinístico. (4 h)
  - Exercício 1: Mostre a primeira página de dois livros.
  - Exercício 2: Mostre os dois maiores IDs.
  - Exercício 3: Explique um problema ao inserir um título antes da segunda página.

**Projeto:** Busca do catálogo

- Consultas de faixa de preço, estado e ausência.
- Paginação com desempate e exemplos de duas páginas.
- Tabela de casos de fronteira.

**Critérios de conclusão**

- Filtros respeitam igualdade nos limites.
- Ausência é testada com IS NULL.
- Todas as saídas paginadas têm ordem explícita.

## Nível 04 — Relatórios e indicadores

Construa medidas com granularidade definida e filtros no estágio certo.

**Aulas e objetivos**

- Aula 10: **Agregação e granularidade** — Contar fatos na unidade correta e distinguir COUNT(*) de COUNT(coluna). (4 h)
  - Exercício 1: Calcule a soma conhecida da categoria livro.
  - Exercício 2: Conte categorias distintas com valor conhecido.
  - Exercício 3: Explique por que ausência não deve virar zero silenciosamente no ticket médio.
- Aula 11: **WHERE e HAVING** — Separar o filtro de linhas do filtro de grupos. (4 h)
  - Exercício 1: Liste categorias com pelo menos duas vendas não canceladas.
  - Exercício 2: Retire o WHERE e explique a mudança.
  - Exercício 3: Inclua grupos com soma exatamente 1000.
- Aula 12: **CASE e indicadores condicionais** — Construir classificações e contagens condicionais legíveis. (4 h)
  - Exercício 1: Conte entregas com dias=0.
  - Exercício 2: Classifique 0 como no prazo e valores positivos como atraso.
  - Exercício 3: Explique por que testar dias>=0 antes de dias>5 esconde a faixa maior.

**Projeto:** Relatório de circulação

- Indicadores por categoria e estado.
- Definição do numerador e denominador de cada medida.
- Dados de teste com NULL e fronteiras.

**Critérios de conclusão**

- COUNT(*) e COUNT(coluna) são usados conscientemente.
- Cancelamentos são tratados antes da agregação.
- Cada classificação cobre as faixas sem sobreposição acidental.

## Nível 05 — Junções e existência

Relacione tabelas e verifique multiplicidade, ausência e correlação.

**Aulas e objetivos**

- Aula 13: **INNER JOIN e multiplicidade** — Combinar relações sem perder de vista a quantidade de linhas. (4 h)
  - Exercício 1: Conte empréstimos por leitor com correspondência.
  - Exercício 2: Remova ON e explique o risco.
  - Exercício 3: Conte leitores que têm empréstimo, sem contá-los repetidamente.
- Aula 14: **LEFT JOIN e linhas sem relação** — Preservar entidades sem correspondência e contar corretamente. (4 h)
  - Exercício 1: Liste apenas leitores sem empréstimos.
  - Exercício 2: Compare COUNT(*) e COUNT(e.id) por leitor.
  - Exercício 3: Preserve todos os leitores e relacione só empréstimos com id>10.
- Aula 15: **EXISTS e perguntas de existência** — Consultar presença ou ausência sem multiplicar o resultado. (4 h)
  - Exercício 1: Liste leitores com pelo menos um empréstimo.
  - Exercício 2: Compare id NOT IN(SELECT leitor_id FROM emprestimo).
  - Exercício 3: Remova a correlação e descreva o erro lógico.

**Projeto:** Relatório de leitores

- Consulta de leitores com e sem empréstimo.
- Totais que não duplicam medidas do leitor.
- Comparação de NOT IN com NULL e NOT EXISTS.

**Critérios de conclusão**

- A granularidade de cada relatório é declarada.
- Leitores sem movimento aparecem quando solicitado.
- Filtros da tabela direita não anulam relações externas sem intenção.

## Nível 06 — Qualidade do modelo

Reconheça dependências, elimine anomalias e justifique redundância medida.

**Aulas e objetivos**

- Aula 16: **Dependências funcionais** — Reconhecer qual atributo determina cada fato do domínio. (4 h)
  - Exercício 1: Corrija a divergência do curso 10.
  - Exercício 2: Proponha a decomposição do esquema.
  - Exercício 3: Diferencie dependência de coincidência.
- Aula 17: **Normalização e anomalias** — Separar fatos que causam anomalias de atualização, inserção e exclusão. (4 h)
  - Exercício 1: Cadastre um curso sem aluno matriculado.
  - Exercício 2: Remova todas as matrículas do curso 10.
  - Exercício 3: Identifique dependência parcial numa chave (pedido_id,produto_id) com nome_produto.
- Aula 18: **Desnormalização com responsabilidade** — Avaliar redundância intencional e medir sua manutenção. (4 h)
  - Exercício 1: Reconcilie o resumo com os itens.
  - Exercício 2: Defina um indicador de divergência.
  - Exercício 3: Proponha uma regra de atualização para relatório diário.

**Projeto:** Revisão do modelo da biblioteca

- Modelo antes/depois com dependências.
- Exemplos de anomalia de inserção e exclusão.
- Consulta de reconciliação de um resumo.

**Critérios de conclusão**

- Decomposição preserva a relação por chaves.
- Atributos históricos mantêm seu significado.
- Qualquer redundância tem política de atualização e reconstrução.

## Nível 07 — Escritas e ciclo de vida

Insira, altere e exclua dados com condições e efeitos verificáveis.

**Aulas e objetivos**

- Aula 19: **INSERT e conflitos** — Inserir registros com intenção clara e tratar duplicações. (4 h)
  - Exercício 1: Faça o conflito atualizar valor para 200.
  - Exercício 2: Cadastre r2 sem conflito.
  - Exercício 3: Explique por que ignorar conflitos pode esconder uma requisição diferente.
- Aula 20: **UPDATE e alteração controlada** — Modificar apenas o conjunto desejado e verificar o efeito. (4 h)
  - Exercício 1: Tente baixar 10 do item 1.
  - Exercício 2: Aumente apenas o estoque do item 2 em 4.
  - Exercício 3: Explique o risco de ler estoque e depois gravar um valor calculado no cliente.
- Aula 21: **DELETE e ciclo de vida** — Distinguir exclusão física, inativação e retenção. (4 h)
  - Exercício 1: Liste somente leitores ativos.
  - Exercício 2: Reative o leitor 2.
  - Exercício 3: Descreva um risco de CASCADE em históricos.

**Projeto:** Operações de cadastro

- Scripts de inclusão, alteração e inativação.
- Registro dos efeitos esperados e observados.
- Política de histórico para leitores e empréstimos.

**Critérios de conclusão**

- Repetição de chave tem comportamento documentado.
- Escritas preservam registros não alvo.
- Exclusão considera dependências e retenção.

## Nível 08 — SQL para análise

Decomponha consultas e acrescente medidas sem perder a granularidade.

**Aulas e objetivos**

- Aula 22: **Subconsultas e comparação com medidas** — Comparar linhas com uma medida calculada sobre o conjunto. (4 h)
  - Exercício 1: Calcule a média explicitamente.
  - Exercício 2: Encontre livros com o maior preço.
  - Exercício 3: Inclua outro livro de preço 600 e compare =MAX com LIMIT 1.
- Aula 23: **CTEs e decomposição da consulta** — Nomear etapas de uma consulta para torná-la verificável. (4 h)
  - Exercício 1: Mostre a etapa totais sem o filtro final.
  - Exercício 2: Troque a medida por quantidade de empréstimos.
  - Exercício 3: Explique por que uma CTE não prova melhoria de desempenho.
- Aula 24: **Funções de janela** — Calcular ranking e acumulados preservando linhas de detalhe. (4 h)
  - Exercício 1: Troque SUM por ROW_NUMBER no exemplo.
  - Exercício 2: Acrescente movimento 4 de valor 20 e calcule saldo final.
  - Exercício 3: Explique por que ordenar só por valor pode gerar saldo não estável em empates.

**Projeto:** Painel de circulação

- Consulta com CTE por leitor.
- Ranking e acumulado com ordem definida.
- Comparação de resultados com dados de empate.

**Critérios de conclusão**

- Conjuntos de referência estão documentados.
- CTEs têm nomes coerentes com sua granularidade.
- Janelas usam frame e desempate apropriados.

## Nível 09 — Transações e concorrência

Preserve invariantes sob falhas e operações concorrentes.

**Aulas e objetivos**

- Aula 25: **Transações e atomicidade** — Agrupar alterações que devem confirmar ou desfazer juntas. (4 h)
  - Exercício 1: Troque ROLLBACK por COMMIT.
  - Exercício 2: Faça apenas a primeira alteração e execute ROLLBACK.
  - Exercício 3: Explique por que uma transação não valida sozinha o destinatário.
- Aula 26: **Savepoints e recuperação parcial** — Desfazer uma etapa opcional sem confirmar a operação externa. (4 h)
  - Exercício 1: Remova ROLLBACK TO e compare.
  - Exercício 2: Execute ROLLBACK externo em vez de COMMIT.
  - Exercício 3: Dê um exemplo em que rollback parcial seria incorreto.
- Aula 27: **Concorrência, repetição e idempotência** — Preparar escritas para disputa e repetição após resultado incerto. (4 h)
  - Exercício 1: Repita a segunda alteração exigindo versão 2.
  - Exercício 2: Projete uma tabela de operações idempotentes.
  - Exercício 3: Diferencie timeout de recusa de estoque.

**Projeto:** Empréstimo transacional

- Operação que registra empréstimo e baixa disponibilidade.
- Teste de rollback entre as duas etapas.
- Estratégia de repetição e conflito documentada.

**Critérios de conclusão**

- Nunca confirma apenas metade da operação.
- Zero linhas alteradas é tratado explicitamente.
- Repetição da mesma operação não duplica efeitos.

## Nível 10 — Desempenho com evidências

Escolha índices, interprete planos e produza paginação coerente.

**Aulas e objetivos**

- Aula 28: **Índices e custo de escrita** — Criar um índice alinhado a uma consulta e reconhecer seu custo. (4 h)
  - Exercício 1: Crie índice composto para leitor_id e aberto.
  - Exercício 2: Explique por que não criar um índice para cada coluna automaticamente.
  - Exercício 3: Encontre os índices declarados no laboratório.
- Aula 29: **Planos e medições** — Ler uma estratégia de acesso sem confundi-la com tempo garantido. (4 h)
  - Exercício 1: Remova o índice e compare o plano.
  - Exercício 2: Verifique o resultado real da consulta.
  - Exercício 3: Descreva um experimento de desempenho reproduzível.
- Aula 30: **Paginação por chave** — Evitar deslocamentos crescentes usando um cursor estável. (4 h)
  - Exercício 1: Peça a página após id=1.
  - Exercício 2: Explique como paginar por titulo,id.
  - Exercício 3: Compare inserção de id=0 com cursor id=2.

**Projeto:** Investigação de consulta

- Consulta antes/depois com resultado conferido.
- Plano e justificativa do índice escolhido.
- Página por cursor com teste de empate.

**Critérios de conclusão**

- Não confunde plano com tempo garantido.
- Índices correspondem aos filtros reais.
- O cursor preserva os componentes da ordem.

## Nível 11 — Integração e evolução

Conecte uma aplicação, evolua o esquema e teste os invariantes.

**Aulas e objetivos**

- Aula 31: **Parâmetros e aplicação** — Separar a estrutura SQL dos valores fornecidos pelo usuário. (4 h)
  - Exercício 1: Troque entrada por Ana.
  - Exercício 2: Explique a vírgula em (entrada,).
  - Exercício 3: Projete ordenação dinâmica por nome ou ID.
- Aula 32: **Migrações de esquema** — Evoluir o banco com passos versionados e verificáveis. (4 h)
  - Exercício 1: Insira livro sem informar ativo.
  - Exercício 2: Explique o risco de executar a mesma ADD COLUMN duas vezes.
  - Exercício 3: Planeje renomear coluna usada por duas versões da API.
- Aula 33: **Testes de integridade** — Transformar regras e resultados em verificações repetíveis. (4 h)
  - Exercício 1: Crie teste para exatamente um livro sem estoque.
  - Exercício 2: Teste tentativa de estoque negativo em cenário isolado.
  - Exercício 3: Descreva uma fixture capaz de detectar JOIN que multiplica receita.

**Projeto:** Cliente seguro da biblioteca

- Consulta parametrizada em Python.
- Migração versionada com dados anteriores.
- Casos positivos e negativos de integridade.

**Critérios de conclusão**

- Entradas não são concatenadas na consulta.
- Migração preserva dados e identifica a versão.
- Testes verificam efeitos e estado, além da ausência de erro.

## Nível 12 — Recuperação e projeto completo

Escolha tecnologias conscientemente e entregue um laboratório recuperável.

**Aulas e objetivos**

- Aula 34: **Backup e restauração** — Criar uma cópia consistente e provar que ela pode ser lida. (4 h)
  - Exercício 1: Faça o destino ser arquivo backup-lab.db em uma pasta nova.
  - Exercício 2: Defina RPO de uma hora e RTO de trinta minutos.
  - Exercício 3: Explique o limite da demonstração em memória.
- Aula 35: **OLTP, análise e escolha de banco** — Relacionar o modelo de dados ao padrão de acesso. (4 h)
  - Exercício 1: Separe duas consultas OLTP e duas analíticas para a biblioteca.
  - Exercício 2: Escolha um banco para app local sem servidor e justifique.
  - Exercício 3: Explique por que Redis e MongoDB não são sinônimos.
- Aula 36: **Projeto final e revisão técnica** — Entregar um banco reproduzível com consultas, regras e recuperação. (4 h)
  - Exercício 1: Tente segundo empréstimo aberto do exemplar 1.
  - Exercício 2: Registre devolução e depois novo empréstimo.
  - Exercício 3: Prepare roteiro de demonstração em banco novo.

**Projeto:** Biblioteca com recuperação demonstrada

- Schema, fixtures e consultas da biblioteca.
- Cliente parametrizado e fluxo transacional testado.
- Backup em arquivo, restauração separada e relatório de decisões.

**Critérios de conclusão**

- Banco novo reproduz todos os resultados documentados.
- Invariantes rejeitam empréstimo duplo e referências órfãs.
- Restauração é aberta e verificada; limites são explicitados.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [SQL no laboratório SQLite](https://www.sqlite.org/lang.html) — Sintaxe e diferenças do dialeto usado nos exemplos.
- [Consultas e conjuntos](https://www.sqlite.org/lang_select.html) — SELECT, junções e agrupamento.
- [Integridade referencial](https://www.sqlite.org/foreignkeys.html) — Chaves, referências e ações de exclusão.
- [Transações](https://www.sqlite.org/lang_transaction.html) — Limites de uma unidade de trabalho.
- [Parâmetros no Python](https://docs.python.org/3/library/sqlite3.html) — Binding de valores e conexão com SQLite.
- [Cópia consistente](https://www.sqlite.org/backup.html) — Backup online e verificação de restauração.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Cadastro e busca com integridade

Uma biblioteca cadastra exemplares e empréstimos. Cada empréstimo referencia um leitor existente; devolvido_em NULL significa aberto. A busca precisa listar abertos de um leitor em ordem estável.

**Aulas necessárias**

- Aula 03 — Domínios e regras de integridade
- Aula 04 — Chaves e identidade
- Aula 05 — Relacionamentos e chaves estrangeiras
- Aula 07 — Filtros e lógica booleana
- Aula 08 — NULL e valores ausentes
- Aula 09 — Ordenação e paginação inicial

**Conceitos combinados:** Identidade e referências; Ausência e filtros; Ordenação determinística.

### Combo 2 — Relatório que não multiplica fatos

O relatório deve mostrar todos os leitores, inclusive sem empréstimos, e contar somente empréstimos válidos. O nome de uma categoria foi repetido em cada livro e ficou contraditório.

**Aulas necessárias**

- Aula 10 — Agregação e granularidade
- Aula 11 — WHERE e HAVING
- Aula 13 — INNER JOIN e multiplicidade
- Aula 14 — LEFT JOIN e linhas sem relação
- Aula 16 — Dependências funcionais
- Aula 17 — Normalização e anomalias

**Conceitos combinados:** Granularidade; Junção externa; Normalização.

### Combo 3 — Reserva que suporta falha e repetição

Ao emprestar um exemplar, o sistema registra uma operação identificada e reduz disponibilidade. Uma falha pode acontecer entre as etapas ou depois de o cliente perder a resposta.

**Aulas necessárias**

- Aula 19 — INSERT e conflitos
- Aula 20 — UPDATE e alteração controlada
- Aula 22 — Subconsultas e comparação com medidas
- Aula 23 — CTEs e decomposição da consulta
- Aula 25 — Transações e atomicidade
- Aula 27 — Concorrência, repetição e idempotência

**Conceitos combinados:** Escrita condicional; Atomicidade; Idempotência.

### Combo 4 — Busca evolutiva e recuperação

A biblioteca terá busca parametrizada, páginas por cursor e alteração de esquema sem perda de histórico. Uma cópia precisa ser recuperada em destino separado antes da entrega.

**Aulas necessárias**

- Aula 28 — Índices e custo de escrita
- Aula 29 — Planos e medições
- Aula 30 — Paginação por chave
- Aula 31 — Parâmetros e aplicação
- Aula 32 — Migrações de esquema
- Aula 34 — Backup e restauração

**Conceitos combinados:** Índices medidos; Binding e cursor; Migração e restore.

### Projeto final — Biblioteca com empréstimos e recuperação

Implemente o banco de uma biblioteca pequena com leitores, títulos, exemplares, empréstimos e devoluções. Entregue um laboratório reproduzível; não use dados pessoais reais.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Modelo íntegro: entidades, chaves e cardinalidades documentadas; referências inexistentes e duplicações de negócio são rejeitadas.
- Operação atômica: empréstimo e baixa de disponibilidade confirmam juntos ou são desfeitos; tentativa concorrente não produz disponibilidade negativa.
- Identidade de operação: repetição da mesma requisição não cria outro empréstimo e conteúdo divergente tem tratamento explícito.
- Consultas corretas: listar leitores sem movimento, circulação por período e página com desempate, sem multiplicar medidas de entidades.
- Integração e evolução: cliente com valores parametrizados, migração versionada e casos positivos e negativos de integridade.
- Recuperação demonstrada: cópia consistente, reabertura em destino separado, comparação de dados e registro de RPO/RTO pretendidos e medidos.

**Entregáveis**

- DDL e dicionário de dados com regras e decisões do modelo.
- Scripts de fixture e consultas com resultados esperados.
- Cliente, migrações e roteiro de testes reproduzível em banco novo.
- Runbook de cópia e restauração com evidências do destino e limitações.

**Critérios práticos**

- **Modelo íntegro:** Modelo íntegro: entidades, chaves e cardinalidades documentadas; referências inexistentes e duplicações de negócio são rejeitadas.
- **Operação atômica:** Operação atômica: empréstimo e baixa de disponibilidade confirmam juntos ou são desfeitos; tentativa concorrente não produz disponibilidade negativa.
- **Identidade de operação:** Identidade de operação: repetição da mesma requisição não cria outro empréstimo e conteúdo divergente tem tratamento explícito.
- **Consultas corretas:** Consultas corretas: listar leitores sem movimento, circulação por período e página com desempate, sem multiplicar medidas de entidades.
- **Integração e evolução:** Integração e evolução: cliente com valores parametrizados, migração versionada e casos positivos e negativos de integridade.
- **Recuperação demonstrada:** Recuperação demonstrada: cópia consistente, reabertura em destino separado, comparação de dados e registro de RPO/RTO pretendidos e medidos.

**Testes de aceitação para executar localmente**

#### Empréstimo válido e repetido

- Preparação: Um exemplar disponível e leitor existente; nenhuma operação req-1 registrada.
- Entrada/ação: Solicitar um empréstimo e repetir req-1 com o mesmo conteúdo.
- Resultado esperado: Um empréstimo ativo, uma baixa e o mesmo resultado identificado nas duas respostas.

#### Falha entre efeitos

- Preparação: Fixture com disponibilidade 1 e erro injetado após a baixa, antes do registro final.
- Entrada/ação: Executar a operação e provocar falha controlada na segunda etapa.
- Resultado esperado: A transação é desfeita; disponibilidade e quantidade de empréstimos permanecem como antes.

#### Restaurar e consultar

- Preparação: Cópia gerada após dados conhecidos e destino de laboratório vazio.
- Entrada/ação: Abrir a cópia em outro destino e rodar contagens, totalizações e verificação de referências.
- Resultado esperado: Destino abre, preserva os marcadores e atende aos invariantes; duração e ponto recuperado são registrados.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
