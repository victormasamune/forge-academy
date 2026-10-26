# Plano de ensino — PostgreSQL

Do SQL ao desenvolvimento e à operação de PostgreSQL: integridade, consultas, concorrência, desempenho, segurança e recuperação em laboratórios locais.

**Carga estimada:** 216 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Noções de lógica e arquivos; a trilha de Bancos de Dados e SQL é recomendada.
- PostgreSQL 18 com patch de manutenção disponível e ferramentas psql, createdb, pg_dump e pg_restore da mesma versão principal.
- Um banco exclusivamente de laboratório com dados fictícios. Laboratórios de roles e restauração exigem privilégios adicionais explicitados nas aulas.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Ambiente, tipos e integridade | 18 | 1–3 | Catálogo de produtos com integridade |
| 02 | CRUD e relatórios | 18 | 3–5 | Controle de estoque e relatório de vendas |
| 03 | Relacionamentos e composição | 18 | 5–7 | Pedidos com clientes e itens |
| 04 | SQL analítico | 18 | 7–9 | Painel de vendas e estrutura de categorias |
| 05 | Transações e concorrência | 18 | 10–12 | Reserva concorrente de estoque |
| 06 | Índices e planos | 18 | 12–14 | Investigação de consulta lenta |
| 07 | Dados ricos e busca | 18 | 14–16 | Catálogo com atributos e busca |
| 08 | Programação no servidor | 18 | 16–18 | Registro auditável de mudanças |
| 09 | Segurança e integração | 18 | 19–21 | Acesso de aplicação por tenant |
| 10 | Evolução e manutenção | 18 | 21–23 | Evolução de tabela de eventos |
| 11 | Recuperação e replicação | 18 | 23–25 | Plano de recuperação demonstrável |
| 12 | Operação e projeto final | 18 | 25–27 | Sistema de pedidos PostgreSQL com operação documentada |

## Nível 01 — Ambiente, tipos e integridade

Crie um laboratório PostgreSQL e transforme regras de domínio em tipos e constraints.

**Aulas e objetivos**

- Aula 01: **Conexão, sessão e primeiro SELECT** — Identificar o servidor, o banco e a role antes de executar SQL. (6 h)
  - Exercício 1: Registre host, banco, usuário e versão de servidor no README do laboratório.
  - Exercício 2: Retorne 7 vezes 8 numa coluna chamada horas.
  - Exercício 3: Explique por que \dt funciona no psql e falha numa chamada SQL de um driver.
- Aula 02: **Tipos, conversões e tempo** — Escolher representações exatas para preço, texto e instantes. (6 h)
  - Exercício 1: Calcule a média de 9 unidades por 4 pedidos sem truncar.
  - Exercício 2: Compare 12:00-03 e 15:00+00 em 24/10/2026.
  - Exercício 3: Crie coluna preco numeric(10,2) e documente seu maior valor positivo.
- Aula 03: **Chaves e constraints** — Impor integridade mesmo quando diferentes clientes escrevem no banco. (6 h)
  - Exercício 1: Em sessão de laboratório insira duas vezes o mesmo SKU e registre a constraint violada.
  - Exercício 2: Teste preco=NULL e preco=-1 em comandos separados.
  - Exercício 3: Adapte o modelo para rejeitar nome com apenas espaços e mostre um teste.

**Projeto:** Catálogo de produtos com integridade

- Banco forge_pg acessível e versão registrada.
- DDL de produtos com preço e SKU válidos.
- Três testes positivos e três violações documentadas.

**Critérios de conclusão**

- Identifica banco, role e versão antes de alterar dados.
- Rejeita SKU repetido, preço negativo e nome ausente.
- Explica a diferença entre NULL e string vazia.

## Nível 02 — CRUD e relatórios

Altere dados com filtros explícitos e produza relatórios verificáveis.

**Aulas e objetivos**

- Aula 04: **INSERT, UPDATE, DELETE e RETURNING** — Executar escritas com retorno das linhas realmente afetadas. (6 h)
  - Exercício 1: Tente reservar 4 unidades quando restam 3 e conte as linhas retornadas.
  - Exercício 2: Acrescente SKU B com 7 e aumente somente B em 2.
  - Exercício 3: Exclua somente itens com quantidade zero e retorne seus SKUs.
- Aula 05: **Filtros, NULL e ordem determinística** — Escrever condições com semântica de ausência e desempates claros. (6 h)
  - Exercício 1: Preveja e execute SELECT NULL=1, NULL IS DISTINCT FROM 1.
  - Exercício 2: Liste uma tarefa pendente por página, ordenada pelo título, com desempate por id.
  - Exercício 3: Selecione conclusões de outubro de 2026.
- Aula 06: **Agregações e GROUP BY** — Conferir contagens, totais e filtros sobre grupos. (6 h)
  - Exercício 1: Mostre apenas categorias cujo total seja maior que 40.
  - Exercício 2: Calcule quantas vendas não têm valor informado.
  - Exercício 3: Compare SUM(valor) e COALESCE(SUM(valor),0) com WHERE false.

**Projeto:** Controle de estoque e relatório de vendas

- Scripts de inserção, atualização e exclusão com RETURNING.
- Relatório por categoria com contagem e total.
- Casos com NULL, zero e categoria sem vendas.

**Critérios de conclusão**

- Toda escrita em lote tem previsão de linhas afetadas.
- Totais conferem com soma manual da amostra.
- Consulta usa ORDER BY quando exige ordem.

## Nível 03 — Relacionamentos e composição

Modele relacionamentos e componha consultas sem multiplicar valores por acidente.

**Aulas e objetivos**

- Aula 07: **JOIN e cardinalidade** — Unir tabelas sem perder registros nem multiplicar totais involuntariamente. (6 h)
  - Exercício 1: Mostre clientes e pedidos maiores que 25, preservando clientes sem esse pedido.
  - Exercício 2: Um pedido de 50 tem dois itens. Por que SUM(p.total) após JOIN dos itens vira 100?
  - Exercício 3: Tente inserir pedido com cliente_id=999 em comando isolado.
- Aula 08: **EXISTS, subconsultas e ausência** — Consultar existência sem multiplicar linhas externas. (6 h)
  - Exercício 1: Execute id NOT IN(SELECT cliente_id FROM pedidos) e compare com NOT EXISTS.
  - Exercício 2: Retorne os clientes com ao menos um pedido, sem DISTINCT.
  - Exercício 3: Proponha índice para a correlação e diga como verificar o ganho.
- Aula 09: **CTEs e views** — Separar etapas de consulta e distinguir definição de armazenamento. (6 h)
  - Exercício 1: Insira venda de 35 para Bia e consulte a view de novo.
  - Exercício 2: Use duas CTEs para agregar vendas e depois selecionar totais acima de 20.
  - Exercício 3: Explique quando investigar MATERIALIZED numa CTE cara reutilizada duas vezes.

**Projeto:** Pedidos com clientes e itens

- DDL com chaves estrangeiras.
- Relatório de pedidos incluindo clientes sem compra.
- Consultas equivalentes com EXISTS e agregação prévia.

**Critérios de conclusão**

- Distingue ausência de filho de valor nulo no filho.
- Evita duplicar total do pedido ao unir itens.
- Justifica chaves e cardinalidades em um diagrama simples.

## Nível 04 — SQL analítico

Calcule rankings, consultas correlacionadas e hierarquias com limites claros.

**Aulas e objetivos**

- Aula 10: **Funções de janela e frames** — Calcular ranking e acumulados sem reduzir a granularidade das linhas. (6 h)
  - Exercício 1: Calcule rank e dense_rank para pontuações 100,100,80.
  - Exercício 2: Acrescente região e reinicie a soma acumulada a cada região.
  - Exercício 3: Mostre a variação de valor em relação à venda anterior.
- Aula 11: **LATERAL e consulta por linha** — Buscar o filho mais recente preservando pais sem filhos. (6 h)
  - Exercício 1: Altere LIMIT 1 para 2 e explique a granularidade resultante.
  - Exercício 2: Insira pedido 12 com a mesma data do 11 e preserve a escolha determinística.
  - Exercício 3: Proponha índice para esse padrão de último pedido.
- Aula 12: **CTEs recursivas e hierarquias** — Percorrer uma árvore finita e tratar possibilidade de ciclos. (6 h)
  - Exercício 1: Gere os inteiros de 3 até 7, incluindo ambos.
  - Exercício 2: Descreva a condição para visitar próximo_id num array caminho de inteiros.
  - Exercício 3: Mostre por que referências 1→2 e 2→1 não são impedidas por uma foreign key comum.

**Projeto:** Painel de vendas e estrutura de categorias

- Ranking por região com desempate documentado.
- Último pedido de cada cliente com LATERAL.
- Árvore de categorias com proteção contra ciclos.

**Critérios de conclusão**

- Explicita frame da soma acumulada.
- Preserva clientes sem pedido no relatório.
- Recursão termina mesmo com entrada problemática.

## Nível 05 — Transações e concorrência

Defina unidades atômicas e observe conflitos em duas sessões.

**Aulas e objetivos**

- Aula 13: **Atomicidade, COMMIT e savepoints** — Agrupar mudanças e desfazer uma parte sem perder o contrato da operação. (6 h)
  - Exercício 1: Troque COMMIT por ROLLBACK e confira os dois saldos.
  - Exercício 2: Escreva uma consulta para verificar o total após transferência e explique seu limite.
  - Exercício 3: Proponha como evitar pedido confirmado sem evento registrado.
- Aula 14: **MVCC, snapshots e isolamento** — Distinguir visibilidade de versões e repetição de leituras. (6 h)
  - Exercício 1: Crie tabela persistente forge_mvcc(id int primary key,valor int) com (1,10). Na sessão A inicie Repeatable Read e leia; na B atualize para 20 e confirme; leia de novo na A.
  - Exercício 2: Repita o roteiro anterior em Read Committed.
  - Exercício 3: Descreva tratamento de SQLSTATE 40001 num serviço.
- Aula 15: **Bloqueios e reservas concorrentes** — Usar locks e ordem consistente para proteger alterações disputadas. (6 h)
  - Exercício 1: Crie forge_lock(id int primary key,qtd int) com (1,5). Na A faça BEGIN e SELECT FOR UPDATE; na B tente UPDATE da mesma linha.
  - Exercício 2: Explique quando UPDATE ... WHERE qtd>=pedido RETURNING basta para uma reserva de uma linha.
  - Exercício 3: Justifique SKIP LOCKED para uma fila e um motivo para não usá-lo em relatório financeiro.

**Projeto:** Reserva concorrente de estoque

- Transação de reserva que não permite saldo negativo.
- Roteiro de duas sessões e resultados observados.
- Política de retry limitado para falhas transitórias.

**Critérios de conclusão**

- Uma falha desfaz a operação inteira.
- Diferencia snapshot de bloqueio de escrita.
- Retry reinicia toda a transação e não duplica efeitos externos.

## Nível 06 — Índices e planos

Escolha índices por consultas reais e interprete medidas sem prometer um plano fixo.

**Aulas e objetivos**

- Aula 16: **Índices B-tree e seletividade** — Relacionar um índice às condições e à ordenação de uma consulta. (6 h)
  - Exercício 1: Compare EXPLAIN (ANALYZE,BUFFERS) com e sem o índice secundário usando a mesma carga.
  - Exercício 2: Troque o filtro por cliente_id>=0 e retire LIMIT.
  - Exercício 3: Liste duas consequências de criar índices para todas as colunas.
- Aula 17: **Índices parciais, expressões e GIN** — Escolher estruturas para subconjuntos e operadores específicos. (6 h)
  - Exercício 1: Imponha unicidade de lower(email) somente para usuários ativos.
  - Exercício 2: Busque documentos contendo cor azul e tamanho M após adicionar esses atributos.
  - Exercício 3: Explique por que um índice parcial WHERE estado='aberto' pode não servir a estado=$1 num plano genérico.
- Aula 18: **EXPLAIN ANALYZE e investigação** — Comparar estimativas, execução e buffers com segurança. (6 h)
  - Exercício 1: No seu plano marque um cost e um actual time e explique suas unidades.
  - Exercício 2: Crie índice em n e compare planos para n=7777 e n>0.
  - Exercício 3: Meça UPDATE numeros SET n=n+1 WHERE n=1 sem persistir a mudança.

**Projeto:** Investigação de consulta lenta

- Carga sintética reproduzível de pelo menos 10000 linhas.
- Planos antes e depois de dois índices candidatos.
- Relatório de seletividade, buffers e custo de escrita.

**Critérios de conclusão**

- Compara resultado funcional além do tempo.
- Reconhece custo estimado como unidade abstrata.
- Não força índice para esconder problema de modelagem.

## Nível 07 — Dados ricos e busca

Combine JSONB, busca textual e tipos estruturados com integridade relacional.

**Aulas e objetivos**

- Aula 19: **JSONB com contratos** — Consultar atributos variáveis sem abandonar regras de integridade. (6 h)
  - Exercício 1: Mostre como distinguir produto 2 de produto 3 quanto à chave cor.
  - Exercício 2: Selecione produtos com peso maior que 1 quando o schema garante número ou ausência.
  - Exercício 3: Mude apenas a cor do produto 1 para verde.
- Aula 20: **Busca textual e GIN** — Indexar e consultar lexemas com configuração linguística explícita. (6 h)
  - Exercício 1: Use plainto_tsquery para buscar aprender e PostgreSQL e descreva a relação entre termos.
  - Exercício 2: Atualize o título do artigo 2 para PostgreSQL e Python e refaça a busca.
  - Exercício 3: Ordene a busca por relevância e use id para desempatar.
- Aula 21: **Arrays e intervalos** — Usar operadores estruturados e testar fronteiras de ranges. (6 h)
  - Exercício 1: Verifique a inclusão de 01/11/2026 no primeiro range.
  - Exercício 2: Transforme ARRAY['sql','go'] em duas linhas.
  - Exercício 3: Explique por que alunos e cursos com data de matrícula pedem tabela associativa em vez de array de IDs.

**Projeto:** Catálogo com atributos e busca

- Atributos JSONB com campos obrigatórios validados.
- Busca textual em português com GIN.
- Disponibilidade modelada com intervalos e testes de fronteira.

**Critérios de conclusão**

- Distingue SQL NULL de JSON null e chave ausente.
- Escolhe configuração textual explicitamente.
- Intervalos adjacentes respeitam o limite exclusivo.

## Nível 08 — Programação no servidor

Encapsule regras pequenas e teste funções e gatilhos com efeitos conhecidos.

**Aulas e objetivos**

- Aula 22: **Funções SQL e contratos** — Encapsular cálculos sem esconder efeitos ou volatilidade. (6 h)
  - Exercício 1: Teste quantidade zero, quantidade 2 e preço 0.10, e quantidade NULL.
  - Exercício 2: Classifique uma função que consulta o preço atual numa tabela.
  - Exercício 3: Escreva uma consulta com VALUES para testar três pares de entrada.
- Aula 23: **PL/pgSQL, exceções e regras** — Escrever uma função procedural pequena com erro de domínio explícito. (6 h)
  - Exercício 1: Chame a função com zero em comando isolado e registre SQLSTATE.
  - Exercício 2: Explique por que a condição inclui q IS NULL explicitamente.
  - Exercício 3: Some o valor de 10000 vendas e explique por que um loop PL/pgSQL é desnecessário.
- Aula 24: **Triggers e auditoria transacional** — Registrar mudanças com um trigger de propósito limitado. (6 h)
  - Exercício 1: Abra BEGIN, mude preço para 20, leia auditoria e execute ROLLBACK.
  - Exercício 2: Explique o papel de IS DISTINCT FROM na cláusula WHEN.
  - Exercício 3: Descreva o que adaptar para auditar DELETE e INSERT.

**Projeto:** Registro auditável de mudanças

- Função de cálculo com contrato e casos de borda.
- Função PL/pgSQL que rejeita estado inválido.
- Trigger de auditoria com operação, chave e instante.

**Critérios de conclusão**

- Regra duplicada em aplicativo e banco é justificada.
- Exceções não são engolidas silenciosamente.
- Trigger trata INSERT, UPDATE e DELETE conscientemente.

## Nível 09 — Segurança e integração

Separe privilégios, teste políticas e vincule valores sem concatenar SQL.

**Aulas e objetivos**

- Aula 25: **Roles, GRANT e menor privilégio** — Separar identidade de login, propriedade e acesso de aplicação. (6 h)
  - Exercício 1: Antes do RESET ROLE, tente UPDATE na tabela em comando separado e registre a falha.
  - Exercício 2: Desenhe privilégios para migrador, aplicação e relatório.
  - Exercício 3: Explique por que uma tabela nova do migrador pode não ser legível pelo relatório.
- Aula 26: **Row-Level Security e contexto confiável** — Testar isolamento por linha sob uma role sem bypass. (6 h)
  - Exercício 1: Sob a role tenant1, tente inserir linha id=3,tenant_id=2.
  - Exercício 2: No mesmo laboratório refeito, insira linha id=3,tenant_id=1.
  - Exercício 3: Explique o risco de policy baseada apenas num SET app.tenant que o usuário pode mudar.
- Aula 27: **Parâmetros e fronteiras de SQL** — Separar valores de entrada da estrutura da instrução. (6 h)
  - Exercício 1: Explique o resultado de procurar literalmente o nome x' OR 1=1 -- com binding.
  - Exercício 2: Projete uma API que aceite ordenar por nome ou id e recuse outro campo.
  - Exercício 3: Troque a busca por WHERE id=$1 com PREPARE(integer) e use EXECUTE com 2.

**Projeto:** Acesso de aplicação por tenant

- Matriz de privilégios de leitura e escrita.
- Teste RLS com role sem bypass para dois tenants.
- Consulta parametrizada e caso com apóstrofo.

**Critérios de conclusão**

- Aplicação não usa superuser nem dono das tabelas.
- Privilégio e política são testados como a role real.
- Dados de entrada não viram identificadores ou SQL arbitrário.

## Nível 10 — Evolução e manutenção

Planeje crescimento e mudanças de schema com observabilidade e limites de bloqueio.

**Aulas e objetivos**

- Aula 28: **Particionamento declarativo** — Roteiar eventos por intervalo e compreender limites de unicidade. (6 h)
  - Exercício 1: Tente inserir evento de 01/12/2026 em comando isolado.
  - Exercício 2: Use EXPLAIN numa consulta de outubro.
  - Exercício 3: Insira id=1 em novembro com outra data e explique se a PK impede.
- Aula 29: **VACUUM, ANALYZE e transações longas** — Distinguir limpeza de versões, estatísticas e compactação física. (6 h)
  - Exercício 1: Explique por que VACUUM dentro de BEGIN falha.
  - Exercício 2: Compare COUNT(*) com n_live_tup para uma tabela persistente do laboratório.
  - Exercício 3: Diga o que investigar se versões mortas crescem mesmo com autovacuum ativo.
- Aula 30: **Migrações em etapas** — Evoluir schema com validação e impacto de bloqueio conhecidos. (6 h)
  - Exercício 1: Refaça o exemplo com uma linha antiga de preço -1 antes de adicionar a constraint.
  - Exercício 2: Planeje trocar nome_cliente por nome sem quebrar uma versão antiga durante o deploy.
  - Exercício 3: Defina limite de espera de bloqueio para uma migração de laboratório.

**Projeto:** Evolução de tabela de eventos

- Partições mensais e testes de limites.
- Diagnóstico de versões mortas e transações longas.
- Migração em etapas com rollback operacional descrito.

**Critérios de conclusão**

- Chave única considera a chave de partição.
- Não usa VACUUM FULL como manutenção automática.
- Mede bloqueios e valida dados antes de apertar constraints.

## Nível 11 — Recuperação e replicação

Pratique restauração e distinga continuidade de serviço de recuperação histórica.

**Aulas e objetivos**

- Aula 31: **Dump lógico e restauração verificada** — Produzir um arquivo de backup e conferir a restauração em banco separado. (6 h)
  - Exercício 1: No terminal, exporte forge_pg em formato custom e liste o conteúdo.
  - Exercício 2: Crie forge_pg_restaurado vazio e restaure o dump sem propriedade nem ACL.
  - Exercício 3: Liste o que falta preservar ao usar --no-owner --no-acl.
- Aula 32: **WAL, arquivamento e PITR** — Desenhar recuperação por ponto no tempo com uma cadeia completa de evidências. (6 h)
  - Exercício 1: Para pedidos fictícios, proponha RPO de 5 minutos e RTO de 30 minutos e um teste de aceitação.
  - Exercício 2: Explique o efeito de um segmento WAL ausente antes do alvo.
  - Exercício 3: Esboce as etapas de um laboratório PITR real sem alterar a instância atual.
- Aula 33: **Replicação física, lógica e failover** — Comparar mecanismos de réplica e suas responsabilidades operacionais. (6 h)
  - Exercício 1: Compare cópia física para standby e réplica lógica de um subconjunto de tabelas.
  - Exercício 2: Explique o risco de slot inativo com restart_lsn antigo.
  - Exercício 3: Escreva teste de failover real em laboratório com duas instâncias.

**Projeto:** Plano de recuperação demonstrável

- Dump custom restaurado em banco separado.
- RPO e RTO definidos com teste cronometrado.
- Desenho de replicação com lag, slots e procedimento de failover.

**Critérios de conclusão**

- Verifica conteúdo restaurado e objetos globais necessários.
- Reconhece que apagar dados também replica.
- Não declara HA comprovada a partir de uma única instância.

## Nível 12 — Operação e projeto final

Investigue carga e entregue um sistema de pedidos com evidências técnicas.

**Aulas e objetivos**

- Aula 34: **Monitoramento e diagnóstico de bloqueios** — Usar atividade observável para formular e testar hipóteses. (6 h)
  - Exercício 1: Reproduza o roteiro de duas sessões da aula 15 e inspecione pg_blocking_pids da sessão esperando.
  - Exercício 2: Explique por que pg_stat_activity sozinho não mede os últimos sete dias de consultas.
  - Exercício 3: Descreva três evidências a coletar antes de cancelar uma sessão.
- Aula 35: **Conexões, timeouts e cancelamento** — Definir limites de recursos e limpar estado transacional corretamente. (6 h)
  - Exercício 1: Num laboratório, use SET statement_timeout='100ms' e SELECT pg_sleep(1), depois restaure o limite.
  - Exercício 2: Uma aplicação tem 8 instâncias com pool máximo de 20. Calcule o teto potencial.
  - Exercício 3: Defina o que fazer após erro SQL numa transação antes de devolver ao pool.
- Aula 36: **Projeto final: pedidos verificáveis** — Consolidar integridade, relatório e plano operacional num sistema reproduzível. (6 h)
  - Exercício 1: Corrija nulabilidade e chave dos itens, definindo um número de linha por pedido.
  - Exercício 2: Explique por que o item precisa registrar preço da compra em vez de consultar apenas o preço atual do produto.
  - Exercício 3: Monte um README com instalação, teste de reserva, índice e restauração.

**Projeto:** Sistema de pedidos PostgreSQL com operação documentada

- Schema, consultas, índices, migrações e seeds fictícios.
- Testes de concorrência, permissões e restauração.
- Runbook de conexão lenta, bloqueio e recuperação.

**Critérios de conclusão**

- Cada decisão liga uma consulta ou risco a uma evidência.
- Timeout e pool têm limites e política de cancelamento.
- Entrega reproduzível inclui versões e limitações conhecidas.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [Documentação PostgreSQL 18](https://www.postgresql.org/docs/18/index.html) — Referência versionada de SQL, administração e programação.
- [Tutorial oficial](https://www.postgresql.org/docs/18/tutorial.html) — Primeiro banco, consultas e transações.
- [Concorrência](https://www.postgresql.org/docs/18/mvcc.html) — Isolamento, snapshots e bloqueios.
- [Planos de consulta](https://www.postgresql.org/docs/18/using-explain.html) — Custos estimados, linhas reais e cuidados com ANALYZE.
- [Row-Level Security](https://www.postgresql.org/docs/18/ddl-rowsecurity.html) — Políticas, bypass e privilégios.
- [Backup e recuperação](https://www.postgresql.org/docs/18/backup.html) — Dump lógico, backup físico e PITR.
- [Replicação lógica](https://www.postgresql.org/docs/18/logical-replication.html) — Publications, subscriptions e limites.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Pedidos e relatório sem distorção

Um serviço PostgreSQL cadastra pedidos e itens, devolve o resultado das escritas e lista clientes com receita, inclusive os que ainda não têm pedidos.

**Aulas necessárias**

- Aula 03 — Chaves e constraints
- Aula 04 — INSERT, UPDATE, DELETE e RETURNING
- Aula 06 — Agregações e GROUP BY
- Aula 07 — JOIN e cardinalidade
- Aula 08 — EXISTS, subconsultas e ausência
- Aula 09 — CTEs e views

**Conceitos combinados:** Constraints e RETURNING; Cardinalidade; CTE e existência.

### Combo 2 — Concorrência e investigação de consulta

Reservas de estoque disputam a mesma linha. Um relatório apresenta acumulados e a equipe avalia um índice para a busca frequente.

**Aulas necessárias**

- Aula 10 — Funções de janela e frames
- Aula 13 — Atomicidade, COMMIT e savepoints
- Aula 14 — MVCC, snapshots e isolamento
- Aula 15 — Bloqueios e reservas concorrentes
- Aula 16 — Índices B-tree e seletividade
- Aula 18 — EXPLAIN ANALYZE e investigação

**Conceitos combinados:** Atomicidade e locks; MVCC e janelas; EXPLAIN com evidências.

### Combo 3 — Contrato de documento e isolamento entre clientes

O catálogo possui JSONB e busca textual. Uma API aplica regras em PL/pgSQL, audita mudanças e precisa impedir que um tenant leia os registros de outro.

**Aulas necessárias**

- Aula 19 — JSONB com contratos
- Aula 20 — Busca textual e GIN
- Aula 23 — PL/pgSQL, exceções e regras
- Aula 24 — Triggers e auditoria transacional
- Aula 26 — Row-Level Security e contexto confiável
- Aula 27 — Parâmetros e fronteiras de SQL

**Conceitos combinados:** JSONB e busca; Auditoria transacional; RLS e binding.

### Combo 4 — Mudança de esquema e recuperação por ponto

O volume cresceu e há partições por data, migrações em etapas e transações longas. O serviço precisa provar recuperação e limitar operações lentas.

**Aulas necessárias**

- Aula 28 — Particionamento declarativo
- Aula 29 — VACUUM, ANALYZE e transações longas
- Aula 30 — Migrações em etapas
- Aula 31 — Dump lógico e restauração verificada
- Aula 32 — WAL, arquivamento e PITR
- Aula 35 — Conexões, timeouts e cancelamento

**Conceitos combinados:** Particionamento e compatibilidade; Manutenção; Dump e PITR.

### Projeto final — Serviço de pedidos com isolamento e recuperação

Entregue o banco PostgreSQL de um serviço de pedidos para dois tenants fictícios. O cliente pode ser local; a API deve documentar quem pode executar cada operação e como o serviço se recupera.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Integridade de pedidos: chaves, nulabilidade, quantidades e valores válidos; totais e estados têm regras documentadas.
- Reserva concorrente: duas sessões disputam estoque sem permitir saldo negativo ou pedido parcialmente confirmado.
- Consultas justificadas: relatório sem duplicação de medidas, janela com frame e busca/documentos com contrato explícito.
- Isolamento e parâmetros: roles limitadas, RLS verificada para dois tenants e valores vinculados pela API do cliente.
- Evolução e observação: migration compatível, índice justificado, diagnóstico de bloqueio e limites de duração/conexão.
- Recuperação comprovada: dump restaurado e conferido; PITR/replicação têm requisitos e estado de ensaio explicitamente registrados.

**Entregáveis**

- Schema, migrations, fixture de dois tenants e dicionário de regras.
- Cliente parametrizado e operações de reserva/cancelamento.
- Testes de concorrência, autorização e relatórios com resultados de referência.
- Runbook de observação e restore, com evidência do destino e cenários ainda não executados.

**Critérios práticos**

- **Integridade de pedidos:** Integridade de pedidos: chaves, nulabilidade, quantidades e valores válidos; totais e estados têm regras documentadas.
- **Reserva concorrente:** Reserva concorrente: duas sessões disputam estoque sem permitir saldo negativo ou pedido parcialmente confirmado.
- **Consultas justificadas:** Consultas justificadas: relatório sem duplicação de medidas, janela com frame e busca/documentos com contrato explícito.
- **Isolamento e parâmetros:** Isolamento e parâmetros: roles limitadas, RLS verificada para dois tenants e valores vinculados pela API do cliente.
- **Evolução e observação:** Evolução e observação: migration compatível, índice justificado, diagnóstico de bloqueio e limites de duração/conexão.
- **Recuperação comprovada:** Recuperação comprovada: dump restaurado e conferido; PITR/replicação têm requisitos e estado de ensaio explicitamente registrados.

**Testes de aceitação para executar localmente**

#### Última unidade em disputa

- Preparação: Estoque 1 e dois clientes em sessões distintas.
- Entrada/ação: Reservar simultaneamente uma unidade para pedidos diferentes.
- Resultado esperado: No máximo uma reserva confirma; a outra recebe recusa ou conflito tratado, sem saldo negativo nem pedido parcial.

#### Tenant incorreto

- Preparação: Dados diferentes para tenants A e B, role de aplicação sem bypass e contexto confiável.
- Entrada/ação: Consultar como A e tentar alcançar explicitamente o ID pertencente a B.
- Resultado esperado: B não é devolvido a A; a recusa não depende só de filtro montado na interface.

#### Dump e destino novo

- Preparação: Fixture conhecida, arquivo pg_dump e banco de destino vazio autorizado.
- Entrada/ação: Restaurar com ferramentas compatíveis e conferir contagens, chaves e resultados de negócio.
- Resultado esperado: Destino abre e preserva dados/regras; logs e resultados são registrados. PITR só é marcado ensaiado após recuperação real de seu alvo.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
