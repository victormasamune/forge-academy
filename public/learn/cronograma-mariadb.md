# Plano de ensino — MariaDB

Do SQL e da integridade InnoDB à investigação de consultas, aos dados temporais e à recuperação, com recursos próprios do MariaDB 11.4 LTS e laboratórios locais.

**Carga estimada:** 180 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Recomendado: curso de Bancos de Dados e SQL; a trilha revisa as primeiras consultas.
- Computador com MariaDB Community Server 11.4 LTS atualizado na série e cliente mariadb; acesso administrativo somente para preparar o laboratório e aulas indicadas.
- Terminal, editor UTF-8 e disposição para registrar resultados reais. Backup físico e Galera requerem Linux e instâncias locais descartáveis adicionais.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Ambiente e SQL essencial | 15 | 1–2 | Caderno de diagnóstico do laboratório |
| 02 | Modelagem e integridade | 15 | 2–4 | Cadastro de clientes, produtos e pedidos |
| 03 | Escritas e efeitos | 15 | 4–6 | Reserva de estoque e limpeza de sessões |
| 04 | Consultas relacionais | 15 | 6–8 | Relatório de clientes e pedidos |
| 05 | SQL analítico e interfaces | 15 | 8–10 | Painel de vendas e hierarquia de categorias |
| 06 | Programabilidade MariaDB | 15 | 10–12 | Módulo de pedidos com auditoria transacional |
| 07 | JSON e dados temporais | 15 | 12–14 | Catálogo com metadados e histórico de preços |
| 08 | Índices e investigação de consultas | 15 | 14–15 | Relatório de otimização de busca por tipo de evento |
| 09 | Transações e concorrência | 15 | 16–17 | Transferência e reserva concorrente de estoque |
| 10 | Segurança e observabilidade | 15 | 17–19 | Acesso de aplicação e painel de diagnóstico |
| 11 | Backup e replicação | 15 | 19–21 | Plano de recuperação com ensaios locais |
| 12 | Arquitetura, migração e entrega | 15 | 21–23 | Banco de pedidos MariaDB com documentação operacional |

## Nível 01 — Ambiente e SQL essencial

Reconheça a sessão e expresse valores, datas e ausências de maneira previsível.

**Aulas e objetivos**

- Aula 01: **Servidor, cliente e identidade** — Identificar MariaDB 11.4, a conexão e o banco antes de executar SQL. (5 h)
  - Exercício 1: Registre versão do cliente e do servidor, banco e conta de autorização.
  - Exercício 2: Abra uma conexão sem --database e observe DATABASE(); depois selecione o laboratório.
  - Exercício 3: Explique como investigar Access denied sem conceder acesso global.
- Aula 02: **Expressões, tipos e valores exatos** — Calcular valores monetários e datas sem depender de conversões implícitas. (5 h)
  - Exercício 1: Calcule 3 unidades de 19.90 com desconto total de 5.00.
  - Exercício 2: Calcule sete dias após 2026-02-25.
  - Exercício 3: Proponha tipos para quantidade, preço e data de vencimento.
- Aula 03: **NULL, filtros e collation** — Filtrar ausências e escolher uma comparação textual consciente. (5 h)
  - Exercício 1: Crie uma tabela temporária com contatos NULL e vazios e conte cada caso.
  - Exercício 2: Mostre sem contato para NULL sem alterar o dado armazenado.
  - Exercício 3: Demonstre uma comparação que diferencia A de a.

**Projeto:** Caderno de diagnóstico do laboratório

- Registro de versão do servidor e do cliente, conta e banco.
- Seis consultas comentadas com números, datas e NULL.
- README de instalação e conexão sem segredos reais.

**Critérios de conclusão**

- Distingue processos cliente e servidor.
- Prevê os valores das expressões antes de executá-las.
- Mostra o efeito de IS NULL e de uma collation explícita.

## Nível 02 — Modelagem e integridade

Defina tabelas e relacionamentos com regras verificáveis no servidor.

**Aulas e objetivos**

- Aula 04: **Tabelas InnoDB e chaves primárias** — Projetar uma tabela de produtos com identificador estável. (5 h)
  - Exercício 1: Defina produto com id, sku, nome e preço.
  - Exercício 2: Teste dois produtos com o mesmo SKU em inserções separadas.
  - Exercício 3: Feche e reabra a conexão após criar uma tabela temporária.
- Aula 05: **Relacionamentos e integridade referencial** — Representar pedidos ligados a clientes e impedir referências órfãs. (5 h)
  - Exercício 1: Tente inserir pedido 11 para cliente 99 e registre o erro.
  - Exercício 2: Tente apagar cliente 1 antes de seus pedidos.
  - Exercício 3: Modele um pedido cujo vendedor pode não estar atribuído.
- Aula 06: **CHECK, DEFAULT e validação** — Combinar restrições de coluna para preservar regras de preço e quantidade. (5 h)
  - Exercício 1: Teste quantidade -1,0,1 em instruções separadas.
  - Exercício 2: Teste preco=NULL e omissão de preco.
  - Exercício 3: Adicione status com valores aberto e fechado.

**Projeto:** Cadastro de clientes, produtos e pedidos

- DDL InnoDB com PK, FK, UNIQUE, CHECK e NOT NULL.
- Diagrama ou tabela de relacionamentos e dicionário de dados.
- Casos válidos e inválidos com erros esperados registrados.

**Critérios de conclusão**

- Impede SKU duplicado e pedido órfão.
- Rejeita quantidade negativa e preço inválido.
- Justifica a política de exclusão de clientes.

## Nível 03 — Escritas e efeitos

Insira, altere e remova com alvos claros e verificação do estado final.

**Aulas e objetivos**

- Aula 07: **INSERT e RETURNING no MariaDB** — Inserir registros e recuperar colunas geradas em uma instrução. (5 h)
  - Exercício 1: Insira REQ-C e retorne apenas referencia.
  - Exercício 2: Tente REQ-A novamente sem IGNORE e explique a falha.
  - Exercício 3: Escreva um plano de adaptação para um driver que não consome RETURNING.
- Aula 08: **UPDATE e mudanças delimitadas** — Alterar apenas registros alvo e verificar o efeito antes de confirmar. (5 h)
  - Exercício 1: Tente reservar 9 unidades do item 1 após o exemplo.
  - Exercício 2: Atualize id=99 e diferencie ausência de erro SQL.
  - Exercício 3: Mostre os itens que receberiam quantidade=0 para saldo menor que 4.
- Aula 09: **DELETE e estratégias de remoção** — Remover linhas conscientemente e distinguir DELETE de TRUNCATE e REPLACE. (5 h)
  - Exercício 1: Apague id=2 dentro de uma transação e desfaça.
  - Exercício 2: Recrie o exemplo com quatro sessões, duas expiradas.
  - Exercício 3: Explique o risco de REPLACE em clientes ligados a pedidos.

**Projeto:** Reserva de estoque e limpeza de sessões

- INSERT com RETURNING e chave de requisição única.
- UPDATE condicional que não deixa saldo negativo.
- DELETE delimitado e teste de reversão com InnoDB.

**Critérios de conclusão**

- Uma requisição duplicada não gera duas referências iguais.
- A reserva acima do saldo altera zero linhas.
- Explica as diferenças entre DELETE, TRUNCATE e REPLACE.

## Nível 04 — Consultas relacionais

Combine relações e agregue resultados sem mudar o grão por acidente.

**Aulas e objetivos**

- Aula 10: **JOIN e cardinalidade** — Combinar clientes e pedidos sem perder clientes sem pedidos. (5 h)
  - Exercício 1: Liste apenas clientes sem pedidos.
  - Exercício 2: Conserve todos os clientes mostrando apenas pedidos de id>10.
  - Exercício 3: Explique por que contar linhas do JOIN não conta clientes únicos.
- Aula 11: **Agregação, GROUP BY e HAVING** — Resumir vendas por categoria com filtros corretos. (5 h)
  - Exercício 1: Calcule AVG(total) por categoria no conjunto inicial.
  - Exercício 2: Ignore vendas menores que 20 antes de contar por categoria.
  - Exercício 3: Compare COUNT(*) e COUNT(total) com uma venda total=NULL.
- Aula 12: **CTEs, subconsultas e EXISTS** — Organizar consultas e testar existência sem multiplicar resultados. (5 h)
  - Exercício 1: Troque NOT EXISTS por EXISTS e preveja o resultado.
  - Exercício 2: Compare NOT IN com o conjunto de pedidos que inclui NULL.
  - Exercício 3: Calcule contagens por cliente em uma CTE e use no SELECT externo.

**Projeto:** Relatório de clientes e pedidos

- Consulta LEFT JOIN preservando clientes sem pedidos.
- Relatório agregado com WHERE e HAVING coerentes.
- Consulta de ausência com NOT EXISTS e teste de NULL.

**Critérios de conclusão**

- Conta clientes e pedidos como medidas distintas.
- Resultados conferem com os conjuntos de referência.
- O caso com cliente_id NULL não quebra o filtro de ausência.

## Nível 05 — SQL analítico e interfaces

Use janelas, recursão limitada e views com contratos explícitos.

**Aulas e objetivos**

- Aula 13: **Funções de janela** — Calcular ranking e acumulados sem colapsar as linhas originais. (5 h)
  - Exercício 1: Compare RANK e DENSE_RANK por valor decrescente.
  - Exercício 2: Adicione categoria e reinicie o acumulado por categoria.
  - Exercício 3: Retorne somente a primeira venda por categoria sem usar janela no WHERE da mesma etapa.
- Aula 14: **CTE recursiva e hierarquias** — Percorrer uma hierarquia pequena com condição de parada. (5 h)
  - Exercício 1: Gere os números 3 a 7 inclusive.
  - Exercício 2: Desenhe uma hierarquia raiz 1 com filhos 2 e 3 e neto 4 ligado a 2.
  - Exercício 3: Explique por que uma âncora com texto muito curto pode falhar.
- Aula 15: **Views e contrato de consulta** — Encapsular uma projeção sem confundir view com cópia materializada. (5 h)
  - Exercício 1: Altere o nome do produto 1 e consulte a view.
  - Exercício 2: Crie uma view de IDs ativos com apenas uma coluna.
  - Exercício 3: Compare INVOKER e DEFINER no desenho de uma view de relatório.

**Projeto:** Painel de vendas e hierarquia de categorias

- Ranking com desempate estável e acumulado com frame explícito.
- CTE recursiva com limites e estratégia para ciclos.
- View com colunas públicas e contexto de segurança documentados.

**Critérios de conclusão**

- Distingue ROW_NUMBER, RANK e DENSE_RANK com empates.
- A recursão termina e passa por nós de profundidade dois.
- A view reflete mudanças da base e não é tratada como backup.

## Nível 06 — Programabilidade MariaDB

Explore sequências, rotinas e triggers sem ocultar seus contratos.

**Aulas e objetivos**

- Aula 16: **SEQUENCE e identificadores** — Usar uma sequência MariaDB independente de uma coluna AUTO_INCREMENT. (5 h)
  - Exercício 1: Crie sequência de 5 em 5 começando em 500 e leia três valores.
  - Exercício 2: Escolha entre AUTO_INCREMENT e SEQUENCE para IDs de duas tabelas compartilhando uma numeração técnica.
  - Exercício 3: Registre uma dependência que impede importar esse SQL diretamente para MySQL.
- Aula 17: **Stored procedures e parâmetros** — Criar uma rotina pequena com entradas tipadas e contexto de autorização explícito. (5 h)
  - Exercício 1: Execute a rotina com 4 unidades a 8.25 antes de removê-la.
  - Exercício 2: Escreva uma variante com OUT resultado.
  - Exercício 3: Proponha rejeição de unidades negativas dentro da rotina.
- Aula 18: **Triggers e efeitos na mesma transação** — Registrar uma mudança com trigger e compreender seus efeitos implícitos. (5 h)
  - Exercício 1: Insira dois itens numa única instrução e conte novas linhas de auditoria.
  - Exercício 2: Insira id=4 dentro de uma transação e desfaça.
  - Exercício 3: Liste as triggers do laboratório e documente o efeito implícito.

**Projeto:** Módulo de pedidos com auditoria transacional

- Sequência didática com início, incremento e teste de lacunas.
- Procedure com entrada validada e SQL SECURITY explícito.
- Trigger de auditoria com teste de lote e rollback.

**Critérios de conclusão**

- Não usa identificador técnico como numeração sem lacunas.
- DELIMITER fica restrito ao cliente de script.
- Rollback desfaz o dado e o efeito transacional da trigger.

## Nível 07 — JSON e dados temporais

Integre documentos flexíveis e histórico mantendo regras de qualidade.

**Aulas e objetivos**

- Aula 19: **JSON textual no MariaDB** — Armazenar documentos válidos sem presumir o formato binário do MySQL. (5 h)
  - Exercício 1: Teste inserir texto que não seja JSON válido.
  - Exercício 2: Insira id=3 com payload={} e consulte $.tipo.
  - Exercício 3: Decida onde guardar tenant_id obrigatório e metadados opcionais.
- Aula 20: **JSON_TABLE e transformação relacional** — Converter um array JSON em linhas tipadas para validação e consulta. (5 h)
  - Exercício 1: Some qtd das linhas produzidas pelo array inicial.
  - Exercício 2: Remova sku do segundo elemento e teste ERROR ON EMPTY.
  - Exercício 3: Planeje inserir os itens numa tabela com qtd>0 e SKU obrigatório.
- Aula 21: **Tabelas com versionamento de sistema** — Consultar versões anteriores sem confundir histórico com backup. (5 h)
  - Exercício 1: Altere o preço para 15 e compare leitura atual com ALL.
  - Exercício 2: Remova a linha atual e consulte novamente.
  - Exercício 3: Escreva dois critérios para validar backup desta tabela.

**Projeto:** Catálogo com metadados e histórico de preços

- JSON válido com contrato de campos documentado.
- JSON_TABLE que transforma um lote e trata caminhos ausentes.
- Tabela versionada com consulta atual e histórica.

**Critérios de conclusão**

- Explica JSON textual no MariaDB versus JSON binário do MySQL.
- Rejeita lote com campo obrigatório ausente.
- Distingue tempo de sistema, tempo de negócio e backup.

## Nível 08 — Índices e investigação de consultas

Formule hipóteses e meça planos sem inventar números de desempenho.

**Aulas e objetivos**

- Aula 22: **Índices compostos e colunas geradas** — Criar acesso indexável a um atributo JSON e avaliar o custo da escrita. (5 h)
  - Exercício 1: Altere o JSON de id=2 para tipo compra e consulte tipo.
  - Exercício 2: Compare (tipo,id) com (id,tipo) para filtrar só por tipo.
  - Exercício 3: Defina uma medição para justificar o índice.
- Aula 23: **EXPLAIN e hipóteses de plano** — Ler o plano estimado e distinguir estimativa de execução real. (5 h)
  - Exercício 1: Compare os planos com e sem ix_cliente numa cópia do laboratório.
  - Exercício 2: Troque cliente_id=20 por cliente_id=10 e explique a hipótese.
  - Exercício 3: Monte um registro mínimo de uma análise de plano.
- Aula 24: **ANALYZE FORMAT=JSON e estatísticas reais** — Comparar estimativas e observações sabendo que a instrução é executada. (5 h)
  - Exercício 1: Identifique um campo estimado e um r_* observado no JSON produzido.
  - Exercício 2: Repita a análise cinco vezes e registre a variação.
  - Exercício 3: Escolha o comando para atualizar estatísticas de uma tabela após carga.

**Projeto:** Relatório de otimização de busca por tipo de evento

- Coluna gerada e índice composto vinculados a uma consulta real.
- Planos EXPLAIN antes e depois de uma alteração.
- ANALYZE FORMAT=JSON com condições do ensaio e resposta validada.

**Critérios de conclusão**

- Filtra a coluna gerada pelo nome na referência 11.4.
- Distingue estimativas de métricas observadas.
- Mede custo de escrita e leitura com dados representativos.

## Nível 09 — Transações e concorrência

Preserve invariantes e observe isolamento e conflitos em duas sessões.

**Aulas e objetivos**

- Aula 25: **Transações, SAVEPOINT e commit implícito** — Agrupar alterações InnoDB e desfazer uma etapa sem misturar DDL. (5 h)
  - Exercício 1: Repita a transferência mas termine com ROLLBACK.
  - Exercício 2: Impeça débito que deixaria conta 1 negativa.
  - Exercício 3: Explique por que adicionar uma coluna no meio da transferência é inadequado.
- Aula 26: **Isolamento e snapshots InnoDB** — Distinguir leituras consistentes de leituras com bloqueio usando duas sessões. (5 h)
  - Exercício 1: Em A leia 100; em B atualize para 120 e confirme; em A leia de novo antes de encerrar.
  - Exercício 2: Repita o teste reiniciando saldo=100 e usando READ COMMITTED em A.
  - Exercício 3: Explique por que trocar o segundo SELECT por FOR UPDATE muda o experimento.
- Aula 27: **Locks, timeout e deadlocks** — Coordenar duas escritas e planejar repetição segura da transação. (5 h)
  - Exercício 1: Em A mantenha FOR UPDATE no item 1; em B tente UPDATE do mesmo item com timeout de sessão curto.
  - Exercício 2: Provoque deadlock no laboratório com A bloqueando 1 e B bloqueando 2 antes de cada um solicitar o outro.
  - Exercício 3: Descreva um retry limitado para uma transferência com notificação externa.

**Projeto:** Transferência e reserva concorrente de estoque

- Transação com reversão completa e parcial por SAVEPOINT.
- Experimento A/B comparando REPEATABLE READ e READ COMMITTED.
- Teste de bloqueio, deadlock e estratégia de retry limitado.

**Critérios de conclusão**

- Saldo total e limites permanecem válidos.
- A sequência A/B torna o resultado reproduzível.
- Trata deadlock sem repetir efeitos externos indevidamente.

## Nível 10 — Segurança e observabilidade

Verifique permissões efetivas, bind de valores e evidências de diagnóstico.

**Aulas e objetivos**

- Aula 28: **Roles e menor privilégio** — Criar uma role de leitura e verificar o acesso com uma conta consumidora. (5 h)
  - Exercício 1: Atribua mdb28_leitor a uma conta local de exercício criada pelo administrador e teste SET ROLE.
  - Exercício 2: Tente INSERT com o consumidor de leitura.
  - Exercício 3: Defina como a aplicação obtém credenciais sem colocá-las no SQL versionado.
- Aula 29: **Prepared statements e parâmetros** — Separar valores de SQL e restringir identificadores dinâmicos. (5 h)
  - Exercício 1: Busque pelo valor textual x' OR 1=1 -- usando bind.
  - Exercício 2: Proponha uma API que aceita ordenar por nome ou id.
  - Exercício 3: Escreva o contrato que um teste de integração do driver precisa comprovar.
- Aula 30: **Observabilidade e diagnóstico** — Coletar sinais de carga sem interpretar um contador isolado como causa. (5 h)
  - Exercício 1: Capture Questions e Uptime antes/depois de dez SELECTs locais.
  - Exercício 2: Compare TABLE_ROWS e COUNT(*) numa tabela InnoDB do laboratório.
  - Exercício 3: Liste uma sequência para investigar uma consulta lenta de pedidos.

**Projeto:** Acesso de aplicação e painel de diagnóstico

- Role de leitura testada com consumidor sem escrita.
- Consulta via parâmetros e testes com aspas e Unicode.
- Runbook de lentidão com métricas, planos e contexto.

**Critérios de conclusão**

- A aplicação não usa credencial administrativa.
- Identificadores dinâmicos vêm de uma lista fechada.
- Contadores e estimativas não são apresentados como causas ou contagens exatas.

## Nível 11 — Backup e replicação

Produza cópias, teste restauração e compreenda posições de replicação.

**Aulas e objetivos**

- Aula 31: **Backup lógico e restauração verificável** — Exportar uma tabela didática e restaurá-la em outro banco do laboratório. (5 h)
  - Exercício 1: Registre um hash SHA-256 do backup e confirme após copiar para outra pasta.
  - Exercício 2: Refaça o restore em mariadb_restore31_test, criado e autorizado pelo administrador.
  - Exercício 3: Explique o risco de DDL e tabelas não transacionais durante --single-transaction.
- Aula 32: **Backup físico com mariadb-backup** — Planejar backup, prepare e copy-back em uma instância descartável. (5 h)
  - Exercício 1: Escreva o checklist concreto para executar o backup físico em laboratório.
  - Exercício 2: Descreva e execute sob supervisão um restore em uma segunda instância descartável.
  - Exercício 3: Defina objetivos mensuráveis para o projeto e relacione-os ao ensaio.
- Aula 33: **Binlogs, replicação e GTID MariaDB** — Interpretar identidade de transação e definir critérios de um ensaio de réplica. (5 h)
  - Exercício 1: Interprete 0-21-350 sem inventar uma data para a transação.
  - Exercício 2: Defina o teste mínimo em duas instâncias locais para validar replicação.
  - Exercício 3: Explique por que replicação não protege sozinha contra exclusão acidental.

**Projeto:** Plano de recuperação com ensaios locais

- Dump restaurado em banco isolado com dados comparados.
- Backup físico preparado e relatório de restore em instância descartável.
- Matriz de binlog/GTID e roteiro de ensaio de réplica em duas instâncias.

**Critérios de conclusão**

- Um arquivo ou SELECT na origem não é apresentado como prova de restore.
- RPO e RTO são confrontados com medições reais ou marcados como não validados.
- Explica GTID MariaDB e por que réplica não substitui backup.

## Nível 12 — Arquitetura, migração e entrega

Avalie Galera, planeje mudanças e entregue um banco operável.

**Aulas e objetivos**

- Aula 34: **Galera, certificação e quorum** — Distinguir cluster Galera de réplica assíncrona e interpretar sinais de saúde. (5 h)
  - Exercício 1: Prepare uma tabela de sinais de três nós do laboratório.
  - Exercício 2: Planeje um ensaio de falha de um nó sem comandos de recuperação forçada.
  - Exercício 3: Defina como testar duas atualizações conflitantes em nós diferentes.
- Aula 35: **Migração e diferenças de dialeto** — Inventariar dependências e testar migração entre MariaDB e outros servidores. (5 h)
  - Exercício 1: Monte uma matriz para JSON, SEQUENCE, INSERT RETURNING e GTID entre MariaDB 11.4 e MySQL 8.4.
  - Exercício 2: Execute novamente o UPDATE de preenchimento e confirme que não altera códigos existentes.
  - Exercício 3: Descreva rollback operacional para uma mudança de coluna com dados já escritos na forma nova.
- Aula 36: **Projeto final: pedidos e operação** — Integrar integridade, consultas e evidências operacionais num banco MariaDB. (5 h)
  - Exercício 1: Execute a mudança aberto→pago duas vezes e inspecione ROW_COUNT().
  - Exercício 2: Crie relatório por estado e compare a soma com o total dos pedidos.
  - Exercício 3: Prepare uma sequência de execução de ponta a ponta para outro aluno repetir.

**Projeto:** Banco de pedidos MariaDB com documentação operacional

- Migrations, seeds e testes de integridade/concorrência reproduzíveis.
- Matriz de diferenças MariaDB/MySQL e plano de migração/retorno.
- Runbook de saúde, backup/restore e ensaio Galera claramente executado ou pendente.

**Critérios de conclusão**

- Topologia escolhida tem justificativa de requisito.
- Segredos ficam fora do repositório e privilégios são limitados.
- A demonstração final inclui falhas esperadas e evidências verificáveis.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [MariaDB 11.4 LTS e manutenção](https://mariadb.org/mariadb-server-10-6-reaches-end-of-life-on-july-6th/) — Referência de ciclo de vida para a série escolhida, sem depender da versão mais nova.
- [CREATE TABLE](https://mariadb.com/docs/server/server-usage/tables/create-table) — Tabelas, motores e integridade.
- [INSERT e RETURNING](https://mariadb.com/docs/server/reference/sql-statements/data-manipulation/inserting-loading-data/insert) — Escrita e retorno de linhas no dialeto MariaDB.
- [Sequências](https://mariadb.com/docs/server/reference/sql-structure/sequences/create-sequence) — Geradores independentes e opções de cache.
- [JSON no MariaDB](https://mariadb.com/docs/server/reference/data-types/string-data-types/json) — Representação textual e diferenças de armazenamento.
- [JSON_TABLE](https://mariadb.com/docs/server/reference/sql-functions/special-functions/json-functions/json_table) — Transformação de documento em linhas.
- [Tabelas versionadas](https://mariadb.com/docs/server/reference/sql-structure/temporal-tables/system-versioned-tables) — Histórico de sistema e consultas temporais.
- [Triggers](https://mariadb.com/docs/server/server-usage/triggers-events/triggers/create-trigger) — Eventos e efeitos transacionais.
- [ANALYZE FORMAT=JSON](https://mariadb.com/docs/server/reference/sql-statements/administrative-sql-statements/analyze-and-explain-statements/analyze-format-json) — Medições reais de execução e interpretação de campos.
- [CREATE ROLE](https://mariadb.com/docs/server/reference/sql-statements/account-management-sql-statements/create-role) — Agrupamento e concessão de privilégios.
- [PREPARE](https://mariadb.com/docs/server/reference/sql-statements/prepared-statements/prepare-statement) — Marcadores, execução e liberação de instruções preparadas.
- [mariadb-dump](https://mariadb.com/docs/server/clients-and-utilities/backup-restore-and-import-clients/mariadb-dump) — Backup lógico e condições de consistência.
- [mariadb-backup](https://mariadb.com/docs/server/server-usage/backup-and-restore/mariadb-backup/full-backup-and-restore-with-mariadb-backup) — Backup físico, preparação e restauração.
- [GTID MariaDB](https://mariadb.com/docs/server/ha-and-performance/standard-replication/gtid) — Domínios, posições e incompatibilidade com GTID MySQL.
- [Galera e certificação](https://mariadb.com/docs/galera-cluster/galera-architecture/certification-based-replication) — Coordenação otimista de write sets.
- [Quorum e recuperação Galera](https://mariadb.com/docs/galera-cluster/high-availability/understanding-quorum-monitoring-and-recovery) — Estado do componente e recuperação controlada.
- [Compatibilidade MariaDB 11.4 e MySQL 8.0](https://mariadb.com/docs/release-notes/community-server/about/compatibility-and-differences/incompatibilities-and-feature-differences-between-mariadb-11-4-and-mysql-8) — Inventário de diferenças; a comparação é por versões, não garantia genérica.
- [Migração MySQL para MariaDB](https://mariadb.com/docs/server/server-management/install-and-upgrade-mariadb/migrating-to-mariadb/moving-from-mysql/mysql-to-mariadb-migration-the-master-guide) — Planejamento e migração lógica controlada.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Estoque com retorno de escrita

Um cadastro em MariaDB 11.4 LTS recebe produtos, quantidades e categorias. A API precisa de valores exatos, domínio válido e retorno ligado à linha inserida.

**Aulas necessárias**

- Aula 02 — Expressões, tipos e valores exatos
- Aula 03 — NULL, filtros e collation
- Aula 04 — Tabelas InnoDB e chaves primárias
- Aula 05 — Relacionamentos e integridade referencial
- Aula 06 — CHECK, DEFAULT e validação
- Aula 07 — INSERT e RETURNING no MariaDB

**Conceitos combinados:** Tipos e domínio; NULL e referências; INSERT RETURNING.

### Combo 2 — Relatório e programação no banco

Uma rotina registra itens e uma trigger gera histórico por linha. O relatório precisa contar clientes sem pedidos e classificar seus totais sem multiplicar medidas.

**Aulas necessárias**

- Aula 10 — JOIN e cardinalidade
- Aula 11 — Agregação, GROUP BY e HAVING
- Aula 12 — CTEs, subconsultas e EXISTS
- Aula 13 — Funções de janela
- Aula 17 — Stored procedures e parâmetros
- Aula 18 — Triggers e efeitos na mesma transação

**Conceitos combinados:** Cardinalidade e agregação; CTE e janela; Rotina e trigger.

### Combo 3 — Documentos, histórico e acesso medido

O sistema recebe JSON, transforma arrays em linhas e guarda histórico temporal de preços. Outra rotina atualiza estoque sob disputa; a equipe investiga consultas.

**Aulas necessárias**

- Aula 19 — JSON textual no MariaDB
- Aula 20 — JSON_TABLE e transformação relacional
- Aula 21 — Tabelas com versionamento de sistema
- Aula 22 — Índices compostos e colunas geradas
- Aula 24 — ANALYZE FORMAT=JSON e estatísticas reais
- Aula 27 — Locks, timeout e deadlocks

**Conceitos combinados:** JSON e relações; Histórico versus coordenação; Índices e medição.

### Combo 4 — Evolução, acesso limitado e cópias

A equipe altera o esquema e prepara uma cópia lógica com posição de replicação. O cliente possui uma conta limitada e valores fornecidos por usuários.

**Aulas necessárias**

- Aula 25 — Transações, SAVEPOINT e commit implícito
- Aula 28 — Roles e menor privilégio
- Aula 29 — Prepared statements e parâmetros
- Aula 31 — Backup lógico e restauração verificável
- Aula 33 — Binlogs, replicação e GTID MariaDB
- Aula 35 — Migração e diferenças de dialeto

**Conceitos combinados:** DDL e migração; Roles e binding; Dump e GTID.

### Projeto final — Pedidos e histórico operável em MariaDB

Construa um banco MariaDB 11.4 LTS para uma loja fictícia com pedidos, itens, estoque e evolução de preços. O projeto deve usar recursos do dialeto conscientemente e registrar os limites de cada ensaio.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Modelo válido: chaves, FKs, nulabilidade, valores exatos e regras de quantidade/status rejeitam estados inválidos.
- Escrita rastreável: retorno de inserção, rotinas e triggers têm contrato definido; UPDATE sem mudança não gera histórico indevido quando a regra exigir.
- Consulta coerente: relatórios não multiplicam fatos; JSON/JSON_TABLE e versões temporais têm semântica de leitura documentada.
- Concorrência protegida: estoque e pedido pertencem à mesma unidade; locks, timeout e deadlock possuem tratamento e retry limitado.
- Acesso e evolução: conta restrita, parâmetros ligados, migration compatível e diferenças MariaDB/MySQL identificadas.
- Recuperação e disponibilidade: dump restaurado, procedimento físico distinguido de prepare e desenho GTID/Galera com ensaios executados ou pendentes explicitados.

**Entregáveis**

- DDL, migrations, fixtures e matriz das diferenças de dialeto relevantes.
- Rotinas e cliente parametrizado com contrato de erros e efeitos.
- Testes de relatórios, concorrência e histórico com saídas esperadas.
- Runbook de dump/restore e disponibilidade, com provas e pendências por cenário.

**Critérios práticos**

- **Modelo válido:** Modelo válido: chaves, FKs, nulabilidade, valores exatos e regras de quantidade/status rejeitam estados inválidos.
- **Escrita rastreável:** Escrita rastreável: retorno de inserção, rotinas e triggers têm contrato definido; UPDATE sem mudança não gera histórico indevido quando a regra exigir.
- **Consulta coerente:** Consulta coerente: relatórios não multiplicam fatos; JSON/JSON_TABLE e versões temporais têm semântica de leitura documentada.
- **Concorrência protegida:** Concorrência protegida: estoque e pedido pertencem à mesma unidade; locks, timeout e deadlock possuem tratamento e retry limitado.
- **Acesso e evolução:** Acesso e evolução: conta restrita, parâmetros ligados, migration compatível e diferenças MariaDB/MySQL identificadas.
- **Recuperação e disponibilidade:** Recuperação e disponibilidade: dump restaurado, procedimento físico distinguido de prepare e desenho GTID/Galera com ensaios executados ou pendentes explicitados.

**Testes de aceitação para executar localmente**

#### Regra e histórico

- Preparação: Produto existente e rotina de alteração com trigger preparado.
- Entrada/ação: Alterar um valor e executar também atualização que não muda o valor, conforme contrato documentado.
- Resultado esperado: Dados atuais e auditoria correspondem às mudanças efetivas; o resultado não é inferido apenas da presença do trigger.

#### Último item disputado

- Preparação: Estoque 1 e duas sessões em tabelas persistentes do laboratório.
- Entrada/ação: Tentar confirmar dois pedidos que exigem a última unidade.
- Resultado esperado: Somente um confirma; a recusa é tratada, não há saldo negativo nem pedido incompleto.

#### Dump e restauração

- Preparação: Fixture conhecida e banco de restore exclusivo previamente criado.
- Entrada/ação: Criar dump, importar no destino e conferir contagens, valores e regras.
- Resultado esperado: Destino contém o ponto copiado e atende às verificações; backup físico/replicação não são declarados ensaiados por esse teste lógico.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
