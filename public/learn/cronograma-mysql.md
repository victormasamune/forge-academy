# Plano de ensino — MySQL

SQL e modelagem no MySQL 8.4 LTS, do cliente e das restrições ao InnoDB, à concorrência, à otimização, à segurança e à recuperação ensaiada.

**Carga estimada:** 216 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Conhecer lógica básica; a trilha de fundamentos de bancos de dados ajuda, mas as primeiras aulas revisam SQL.
- Computador com MySQL Community Server 8.4 LTS e cliente mysql; acesso administrativo apenas à instância local de laboratório.
- Terminal e editor; a aula de backup usa Bash e mysqldump. Os ensaios concorrentes exigem duas conexões; replicação exige duas instâncias descartáveis.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Ambiente e contratos de conexão | 18 | 1–3 | Caderno de laboratório MySQL |
| 02 | Modelagem e integridade | 18 | 3–5 | Catálogo de produtos e pedidos |
| 03 | Escritas e unidades transacionais | 18 | 5–7 | Transferências entre contas fictícias |
| 04 | Consultas e granularidade | 18 | 7–9 | Relatório paginado de vendas |
| 05 | Relações e decomposição de consultas | 18 | 10–12 | Painel de clientes e hierarquia |
| 06 | Leitura analítica, views e documentos | 18 | 12–14 | Painel analítico de eventos e vendas |
| 07 | Índices e investigação de planos | 18 | 14–16 | Otimização de uma consulta de catálogo |
| 08 | Objetos armazenados e particionamento | 18 | 16–18 | Histórico operacional por período |
| 09 | Concorrência e invariantes | 18 | 19–21 | Reserva concorrente de estoque |
| 10 | Segurança de aplicação e transporte | 18 | 21–23 | Acesso controlado ao catálogo |
| 11 | Recuperação e replicação | 18 | 23–25 | Plano de recuperação ensaiado |
| 12 | Operação e projeto integrado | 18 | 25–27 | Sistema de pedidos MySQL reproduzível |

## Nível 01 — Ambiente e contratos de conexão

Distinguir cliente e servidor, criar tabelas de laboratório e observar configuração de texto.

**Aulas e objetivos**

- Aula 01: **Cliente, servidor e primeira conexão** — Identificar o servidor MySQL e enviar uma consulta pelo cliente correto. (6 h)
  - Exercício 1: Registre versão, banco e CURRENT_USER() da sua conexão local.
  - Exercício 2: Calcule (8 + 2) * 3 e 8 + 2 * 3, prevendo os dois resultados.
  - Exercício 3: Salve duas consultas em um .sql e execute com source no cliente mysql.
- Aula 02: **Schemas, tabelas e metadados** — Criar uma tabela de laboratório e verificar sua definição. (6 h)
  - Exercício 1: Acrescente prioridade INT NOT NULL à tabela e insira uma linha completa.
  - Exercício 2: Explique como forge_mysql.tarefas difere de outro_banco.tarefas.
  - Exercício 3: Crie a tabela temporária, feche a conexão e tente consultá-la em outra sessão.
- Aula 03: **Unicode, collations e modos SQL** — Observar comparação textual e registrar configurações que influenciam o resultado. (6 h)
  - Exercício 1: Compare A com a nas duas collations do exemplo.
  - Exercício 2: Armazene um emoji em VARCHAR(20) CHARACTER SET utf8mb4 e consulte CHAR_LENGTH e OCTET_LENGTH.
  - Exercício 3: Escreva uma nota com sql_mode e character_set_connection da sessão.

**Projeto:** Caderno de laboratório MySQL

- README com instalação 8.4 LTS, versão observada, endereço, porta e conta sem revelar senha.
- Arquivo SQL que cria uma tabela de tarefas temporária, insere três linhas e consulta em ordem explícita.
- Comparação documentada de texto sensível/insensível e comportamento de uma nova conexão.

**Critérios de conclusão**

- Os comandos identificam MySQL e o banco dedicado antes de alterar dados.
- As três linhas aparecem com os valores previstos e a tabela temporária não é visível em outra sessão.
- O relatório distingue charset, collation e sql_mode com valores observados.

## Nível 02 — Modelagem e integridade

Traduzir tipos, unicidade e dependências em regras verificáveis no InnoDB.

**Aulas e objetivos**

- Aula 04: **Tipos numéricos, temporais e valores exatos** — Escolher tipos a partir do domínio e verificar conversões. (6 h)
  - Exercício 1: Troque o preço por 0.10 e quantidade por 3.
  - Exercício 2: Calcule a data 30 dias após 2026-02-15.
  - Exercício 3: Proponha tipos para estoque, data de nascimento e horário UTC de um evento.
- Aula 05: **Chaves e restrições de domínio** — Usar PRIMARY KEY, UNIQUE, NOT NULL e CHECK como contratos de dados. (6 h)
  - Exercício 1: Tente inserir id=3 e codigo=CABO, depois confira a contagem.
  - Exercício 2: Teste estoque=-1 e estoque=NULL em comandos separados.
  - Exercício 3: Inclua preco DECIMAL(10,2) NOT NULL CHECK(preco > 0).
- Aula 06: **Relacionamentos e integridade referencial** — Criar uma relação pai-filho no InnoDB e escolher uma política de exclusão. (6 h)
  - Exercício 1: Antes dos DROP finais, tente inserir pedido (11,99).
  - Exercício 2: Antes da limpeza, tente DELETE do cliente 1.
  - Exercício 3: Em uma cópia local, use ON DELETE CASCADE e repita a exclusão.

**Projeto:** Catálogo de produtos e pedidos

- Schema com clientes, produtos e pedidos, tipos justificados e valores monetários exatos.
- Chaves técnicas e de negócio, CHECKs, NOT NULL e foreign keys InnoDB com política de exclusão definida.
- Carga fictícia e scripts de teste de preço inválido, código repetido, filho órfão e exclusão com dependência.

**Critérios de conclusão**

- Um pedido válido é inserido e as consultas exibem seus valores corretos.
- Os quatro casos inválidos falham pela regra esperada sem criar linhas indevidas.
- O README justifica tipo temporal, precisão monetária e RESTRICT/CASCADE pelo domínio.

## Nível 03 — Escritas e unidades transacionais

Realizar cadastros e mudanças com identificação de linhas, rollback e confirmação.

**Aulas e objetivos**

- Aula 07: **Inserção, AUTO_INCREMENT e identificadores** — Cadastrar linhas e recuperar o identificador gerado na mesma conexão. (6 h)
  - Exercício 1: Insira duas notas em instruções separadas e consulte o ID após cada uma.
  - Exercício 2: Recrie a tabela, insira três linhas em um INSERT e observe LAST_INSERT_ID().
  - Exercício 3: Escreva por que um ID faltante não prova exclusão de uma linha.
- Aula 08: **UPDATE, DELETE e escopo de mudanças** — Modificar somente as linhas pretendidas e conferir a quantidade afetada. (6 h)
  - Exercício 1: Conclua apenas as tarefas ainda pendentes e confira a contagem antes de rollback.
  - Exercício 2: Execute duas vezes UPDATE id=1 SET concluida=1.
  - Exercício 3: Remova somente id=2 dentro de uma transação e confira COUNT antes e após ROLLBACK.
- Aula 09: **Transações, COMMIT e SAVEPOINT** — Agrupar mudanças e reverter uma parte sem perder o restante. (6 h)
  - Exercício 1: Transfira 15 entre as duas contas e confira a soma antes de confirmar.
  - Exercício 2: Faça apenas o débito e simule uma falha chamando ROLLBACK.
  - Exercício 3: Explique por que ALTER TABLE entre débito e crédito não pertence à transação de negócio.

**Projeto:** Transferências entre contas fictícias

- Script de criação de contas e histórico de operações com dados totalmente fictícios.
- Transação de transferência e roteiro de falha após débito, com evidência de rollback.
- Demonstração de LAST_INSERT_ID na conexão correta e contagens de alterações lidas imediatamente.

**Critérios de conclusão**

- Débito e crédito preservam a soma e pertencem à mesma transação.
- A falha intermediária não deixa um débito parcial confirmado.
- Explica lacunas de AUTO_INCREMENT e por que DDL não participa do ensaio de rollback.

## Nível 04 — Consultas e granularidade

Filtrar ausências, paginar com ordem total e construir resumos sem ambiguidade.

**Aulas e objetivos**

- Aula 10: **Filtros, NULL e lógica de três valores** — Escrever predicados que tratam explicitamente a ausência de dados. (6 h)
  - Exercício 1: Selecione somente nota zero e depois somente ausência.
  - Exercício 2: Selecione id 1 ou 2, desde que a nota esteja informada.
  - Exercício 3: Compare 4<=>4, 4<=>NULL e NULL<=>NULL.
- Aula 11: **Ordenação, LIMIT e paginação por chave** — Definir uma ordem total e evitar saltos imprevisíveis entre páginas. (6 h)
  - Exercício 1: Liste os dois eventos mais recentes usando dia DESC,id DESC.
  - Exercício 2: Insira id=5 no dia 2026-10-01 e repita a próxima página.
  - Exercício 3: Descreva um cenário em que OFFSET perde estabilidade com inserções.
- Aula 12: **Agregação, GROUP BY e HAVING** — Resumir fatos sem esconder a granularidade da consulta. (6 h)
  - Exercício 1: Remova HAVING e calcule os dois vendedores.
  - Exercício 2: Compare WHERE valor>=10 com HAVING SUM(valor)>=10.
  - Exercício 3: Consulte COUNT(*) e COALESCE(SUM(valor),0) com WHERE id<0.

**Projeto:** Relatório paginado de vendas

- Dados fictícios com empates de data, valores ausentes e vendedores sem todas as medidas.
- Consultas de listagem com cursor composto e relatórios por vendedor.
- Casos de teste para NULL, zero, grupo vazio e filtro antes/depois da agregação.

**Critérios de conclusão**

- A paginação usa a mesma ordem e campos do cursor e demonstra duas páginas corretas.
- COUNT(*) e COUNT(coluna) são distinguidos por um caso com NULL.
- O relatório mantém ONLY_FULL_GROUP_BY e define a granularidade de cada linha.

## Nível 05 — Relações e decomposição de consultas

Controlar cardinalidade de joins e expressar existência e recursão com limites.

**Aulas e objetivos**

- Aula 13: **JOIN e multiplicação de linhas** — Unir entidades preservando a cardinalidade esperada. (6 h)
  - Exercício 1: Conte somente pedidos com total>=25 sem remover Beto.
  - Exercício 2: Troque LEFT por INNER e explique o resultado.
  - Exercício 3: Acrescente uma relação de dois contatos da Ana e preveja quantas linhas o join com dois pedidos gera.
- Aula 14: **Subconsultas, EXISTS e antijoin** — Expressar existência e ausência sem contar linhas desnecessárias. (6 h)
  - Exercício 1: Retorne clientes com pelo menos um pedido.
  - Exercício 2: Compare id NOT IN (SELECT cliente_id...) com o NOT EXISTS original.
  - Exercício 3: Retire p.cliente_id=c.id do NOT EXISTS e preveja o resultado.
- Aula 15: **CTEs comuns e recursivas** — Decompor consultas e estabelecer uma condição de término. (6 h)
  - Exercício 1: Gere números de 1 até 8 e calcule sua soma.
  - Exercício 2: Use uma CTE com valores 10,20,30 e outra para filtrar >=20.
  - Exercício 3: Explique o risco de uma hierarquia em que A aponta para B e B para A.

**Projeto:** Painel de clientes e hierarquia

- Consultas de clientes com e sem pedidos, incluindo múltiplos pedidos e múltiplos contatos.
- Comparação reproduzível de NOT EXISTS e NOT IN com NULL.
- Uma CTE recursiva limitada e um roteiro que detecta ou evita ciclo na hierarquia do projeto.

**Critérios de conclusão**

- O total de pedidos não aumenta artificialmente ao adicionar contatos.
- Clientes sem pedido continuam visíveis quando essa é a intenção do relatório.
- A recursão tem limite explícito, tipos adequados e política para ciclos.

## Nível 06 — Leitura analítica, views e documentos

Preservar fatos em rankings, criar contratos de leitura e usar JSON de forma tipada.

**Aulas e objetivos**

- Aula 16: **Funções de janela e rankings** — Calcular posições e acumulados preservando as linhas originais. (6 h)
  - Exercício 1: Use uma CTE com ROW_NUMBER e selecione numero=1 em uma consulta externa.
  - Exercício 2: Compare RANK e DENSE_RANK nos valores 20,20,10.
  - Exercício 3: Calcule o acumulado por id DESC com frame ROWS explícito.
- Aula 17: **Views e fronteiras de consulta** — Criar uma view com contrato explícito e entender seus limites. (6 h)
  - Exercício 1: Antes da limpeza, altere a tarefa 1 para fechada e consulte a view.
  - Exercício 2: Inclua status na definição da view e revise o SELECT externo.
  - Exercício 3: Descreva como testar acesso da view com uma conta de leitura limitada.
- Aula 18: **JSON nativo e extração de campos** — Usar JSON com validação e transformar valores em tipos úteis. (6 h)
  - Exercício 1: Extraia $.cupom e compare com IS NULL.
  - Exercício 2: Use JSON_SET para mudar total para 30 e consulte novamente.
  - Exercício 3: Proponha uma validação que exija tipo textual e total numérico.

**Projeto:** Painel analítico de eventos e vendas

- Ranking por vendedor com empates definidos e acumulado com frame explícito.
- View de leitura com colunas declaradas e modo de segurança documentado.
- Tabela de eventos JSON com exemplos válidos, caminho ausente e validação estrutural planejada.

**Critérios de conclusão**

- ROW_NUMBER e DENSE_RANK têm resultados distintos e justificados nos empates.
- A view reflete mudanças na origem e não é apresentada como backup ou materialização.
- Campos JSON usados como números são tipados e as diferenças com MariaDB são registradas.

## Nível 07 — Índices e investigação de planos

Desenhar acessos a partir de consultas e avaliar custo com evidência.

**Aulas e objetivos**

- Aula 19: **Índices B-tree e prefixos compostos** — Relacionar caminhos de acesso com filtros e ordenação. (6 h)
  - Exercício 1: Liste consultas por cliente, por cliente+data e por data somente; indique qual mais naturalmente usa o prefixo do índice.
  - Exercício 2: Consulte todos os pedidos do cliente 7 ordenados por dia,id.
  - Exercício 3: Explique por que criar dez índices extras pode piorar uma carga de INSERT.
- Aula 20: **EXPLAIN e EXPLAIN ANALYZE** — Comparar estimativas e execução sem confundir plano com resultado. (6 h)
  - Exercício 1: Anote linhas estimadas e observadas nos nós do plano.
  - Exercício 2: Troque categoria=1 por categoria=2 e explique a nova cardinalidade.
  - Exercício 3: Descreva uma comparação de índice antes/depois com volume maior.
- Aula 21: **Colunas geradas e índices sobre JSON** — Indexar um atributo derivado preservando um contrato de tipo. (6 h)
  - Exercício 1: Acrescente tipo=cancelamento no JSON do evento 2 e consulte a coluna gerada.
  - Exercício 2: Insira um JSON sem tipo e observe a coluna gerada.
  - Exercício 3: Compare EXPLAIN da consulta por tipo e registre a definição do índice.

**Projeto:** Otimização de uma consulta de catálogo

- Carga fictícia com volume e distribuição registrados para filtros por cliente, data e atributo JSON.
- Índice composto e índice sobre coluna gerada, com justificativa dos campos e da ordem.
- Comparação antes/depois contendo resultado equivalente, planos, cardinalidades e medições repetidas.

**Critérios de conclusão**

- A proposta mantém os mesmos resultados e considera custo das escritas.
- Distingue estimativas de medidas e documenta que EXPLAIN ANALYZE executa.
- Não promete um plano exato em qualquer máquina nem usa FORCE INDEX como única justificativa.

## Nível 08 — Objetos armazenados e particionamento

Encapsular regras pequenas e avaliar manutenção de dados por faixa.

**Aulas e objetivos**

- Aula 22: **Stored procedures e tratamento de falhas** — Encapsular uma operação curta com parâmetros e erro explícito. (6 h)
  - Exercício 1: Antes do DROP final, chame a rotina com quantidade 0 e confira o erro.
  - Exercício 2: Teste preco NULL e quantidade NULL em chamadas separadas.
  - Exercício 3: Descreva o envio da definição por um driver que não entende DELIMITER.
- Aula 23: **Triggers e auditoria transacional** — Registrar uma mudança de dados e observar o vínculo com a transação. (6 h)
  - Exercício 1: Troque ROLLBACK por COMMIT e confira tarefa e histórico antes da limpeza.
  - Exercício 2: Faça UPDATE status=status e observe o trigger atual.
  - Exercício 3: Explique por que o dono do banco ainda pode adulterar a tabela histórica.
- Aula 24: **Particionamento e manutenção por faixa** — Definir partições e observar pruning sem tratá-lo como solução universal. (6 h)
  - Exercício 1: Consulte ano 2027 e observe partições no plano.
  - Exercício 2: Em uma cópia do CREATE, tente PRIMARY KEY(id) sem ano.
  - Exercício 3: Antes do DROP final, remova só p_antigo e confira as linhas restantes.

**Projeto:** Histórico operacional por período

- Procedure com parâmetros validados e teste de erro, usando o cliente adequado para DELIMITER.
- Trigger de histórico com teste de COMMIT e ROLLBACK em tabelas InnoDB.
- Protótipo separado de tabela particionada, chaves compatíveis e ensaio de retenção com dados fictícios.

**Critérios de conclusão**

- Entradas inválidas da procedure produzem erro claro e não resultado válido.
- O histórico acompanha a transação e seus limites de segurança são explicitados.
- A escolha de particionamento considera chaves únicas, foreign keys e exclusão de dados por retenção.

## Nível 09 — Concorrência e invariantes

Observar snapshots, proteger a última unidade e tratar ciclos de locks.

**Aulas e objetivos**

- Aula 25: **MVCC e níveis de isolamento** — Distinguir leituras consistentes e fronteiras de snapshot. (6 h)
  - Exercício 1: Mantenha l25_saldo compartilhada. A inicia RR e lê 100; B atualiza para 120 e confirma; A lê de novo e depois confirma.
  - Exercício 2: Recrie saldo 100 e repita o ensaio com A em READ COMMITTED.
  - Exercício 3: Explique um custo de manter uma leitura aberta por horas.
- Aula 26: **Locks, SELECT FOR UPDATE e invariantes** — Reservar um recurso de forma atômica sem depender de leitura desprotegida. (6 h)
  - Exercício 1: Em duas sessões, execute a atualização condicional sobre uma unidade; A mantém a transação aberta e B tenta reservar.
  - Exercício 2: Recrie estoque 1; A faz START e SELECT ... FOR UPDATE; B tenta UPDATE no mesmo ID.
  - Exercício 3: Explique por que pular linhas bloqueadas pode servir a workers, mas não a saldo bancário completo.
- Aula 27: **Deadlocks e retentativas idempotentes** — Reconhecer ciclos de espera e repetir a unidade correta. (6 h)
  - Exercício 1: Adie o DROP: A bloqueia ID 1; B bloqueia ID 2; A tenta ID 2; B tenta ID 1.
  - Exercício 2: Repita usando ordem ID 1→ID2 nas duas sessões.
  - Exercício 3: Projete uma retentativa quando a transferência também envia notificação.

**Projeto:** Reserva concorrente de estoque

- Roteiro de duas sessões comparando REPEATABLE READ e READ COMMITTED com leituras observadas.
- Teste de duas reservas concorrentes sobre uma unidade, com estado e contagem finais.
- Ensaio de deadlock e proposta de retentativa limitada da unidade inteira com efeitos externos idempotentes.

**Critérios de conclusão**

- Só uma reserva é confirmada e a quantidade nunca fica negativa.
- Registra a sequência A/B e finaliza todas as transações após cada ensaio.
- Distingue espera, deadlock e timeout e não assume uma vítima fixa.

## Nível 10 — Segurança de aplicação e transporte

Definir limites de conta, parametrizar valores e validar o destino de conexão.

**Aulas e objetivos**

- Aula 28: **Contas, roles e menor privilégio** — Separar permissões de aplicação e administração e verificar concessões. (6 h)
  - Exercício 1: Adie REVOKE e DROP ROLE até concluir os testes. Com a role ainda contendo SELECT e l28_dado preparada, crie uma conta com senha aleatória gerada pelo servidor, conceda a role e defina-a como padrão.
  - Exercício 2: Conecte como a conta limitada e tente SELECT e CREATE TABLE.
  - Exercício 3: Remova a conta de teste e a role sem afetar o usuário normal de estudos.
- Aula 29: **Parâmetros e prevenção de SQL injection** — Separar valores de entrada da estrutura de uma consulta. (6 h)
  - Exercício 1: Insira O'Brien usando parâmetro e busque o mesmo valor.
  - Exercício 2: Mapeie as opções nome e id da interface para duas consultas fixas.
  - Exercício 3: Escolha o driver de uma linguagem já estudada e escreva sua chamada parametrizada para buscar id.
- Aula 30: **TLS, segredos e fronteiras de rede** — Verificar o transporte e definir um contrato de conexão seguro. (6 h)
  - Exercício 1: Registre Ssl_cipher e Ssl_version e diga se há evidência de TLS na sessão.
  - Exercício 2: Em laboratório com CA configurada, conecte com VERIFY_IDENTITY e depois teste um nome incompatível com o certificado.
  - Exercício 3: Revise o README do seu projeto procurando senhas literais em comandos e URLs.

**Projeto:** Acesso controlado ao catálogo

- Role e conta limitada de leitura, com criação e limpeza somente no laboratório.
- Consulta parametrizada com testes de apóstrofo, valor inexistente e entrada com aparência de SQL.
- Contrato de TLS com CA/identidade e teste de host incompatível, ou registro explícito de laboratório pendente.

**Critérios de conclusão**

- SELECT permitido funciona e uma operação proibida falha com a conta limitada.
- Entradas de valor não mudam a estrutura e opções de ordenação vêm de lista permitida.
- Não inclui senhas reais em arquivos e não declara TLS validado com uma cifra vazia.

## Nível 11 — Recuperação e replicação

Testar restauração e compreender cobertura de logs e limites de réplicas.

**Aulas e objetivos**

- Aula 31: **Backup lógico e restauração verificada** — Gerar um dump e recuperar dados em outro banco de laboratório. (6 h)
  - Exercício 1: Consulte COUNT(*),SUM(valor) e SHOW CREATE TABLE nas duas cópias.
  - Exercício 2: Em uma pasta de teste, tente restaurar um nome de arquivo inexistente e registre a falha.
  - Exercício 3: Planeje um dump do schema com procedures e eventos e descreva os cuidados.
- Aula 32: **Binary log e recuperação até um ponto** — Distinguir inspeção de logs de um ensaio completo de recuperação. (6 h)
  - Exercício 1: Compare a retenção configurada com um requisito de recuperar mudanças de três dias.
  - Exercício 2: Em uma cópia local de um binlog autorizado, produza uma leitura para investigação.
  - Exercício 3: Planeje e execute em uma instância descartável: backup-base, mudança válida e depois exclusão acidental.
- Aula 33: **Replicação, GTID e limites de disponibilidade** — Descrever uma topologia e verificar sua saúde sem confundir replicação e backup. (6 h)
  - Exercício 1: Desenhe fonte e réplica com UUIDs, portas, direção e canal.
  - Exercício 2: Em duas instâncias descartáveis configuradas pelo roteiro oficial de GTID, insira um marcador na fonte e consulte a réplica até aplicá-lo.
  - Exercício 3: Explique por que uma réplica pode reproduzir DELETE acidental.

**Projeto:** Plano de recuperação ensaiado

- Dump local de tabelas InnoDB e restauração em banco separado com comparação de definição e dados.
- Plano de recuperação até um ponto com backup-base, logs, posições, RPO/RTO e evidências do ensaio isolado.
- Topologia de replicação com identidades distintas, canal observado e teste de marcador, ou pendência explicitada.

**Critérios de conclusão**

- A recuperação é validada pelos dados restaurados, não apenas pela existência de um arquivo.
- Reconhece que logs ausentes impedem certos objetivos e que réplica pode aplicar exclusão acidental.
- Não chama uma consulta local de prova de alta disponibilidade e distingue GTID de MySQL e MariaDB.

## Nível 12 — Operação e projeto integrado

Evoluir schema e reunir evidências de integridade, desempenho e recuperação.

**Aulas e objetivos**

- Aula 34: **Performance Schema e investigação de carga** — Priorizar consultas a partir de frequência, custo total e evidências. (6 h)
  - Exercício 1: Escolha um digest e registre contagem, soma e média com a janela do teste.
  - Exercício 2: Execute uma consulta simples do laboratório dez vezes e observe como o digest pode mudar.
  - Exercício 3: Selecione uma consulta de alto custo total e prepare EXPLAIN sobre dados fictícios equivalentes.
- Aula 35: **Migrações, DDL atômico e compatibilidade** — Planejar evolução de schema em etapas verificáveis. (6 h)
  - Exercício 1: Descreva como o código antigo e novo convivem enquanto apelido pode ser NULL.
  - Exercício 2: Proponha um preenchimento por faixa de ID para milhões de linhas.
  - Exercício 3: Em cópia de laboratório, mantenha uma transação de leitura aberta e observe uma tentativa de ALTER em outra sessão.
- Aula 36: **Projeto integrado: pedidos idempotentes e operação** — Integrar invariantes, recuperação e evidência de desempenho em um banco de pedidos. (6 h)
  - Exercício 1: Repita req-001 com total 99 e explique o limite do exemplo.
  - Exercício 2: Projete uma transação que reserva uma unidade e cria o pedido sem duplicá-lo em retentativa.
  - Exercício 3: Entregue schema, carga fictícia, testes de duplicidade/conflito/estoque, EXPLAIN e restauração verificada.

**Projeto:** Sistema de pedidos MySQL reproduzível

- Schema versionado e carga fictícia com pedidos, itens e estoque, incluindo chave de requisição idempotente.
- Testes de caso normal, duplicidade, conteúdo conflitante, última unidade concorrente e recuperação isolada.
- README operacional com versão, configuração, privilégios, migração em etapas, planos e métricas observadas.

**Critérios de conclusão**

- Uma repetição válida devolve o mesmo pedido e uma repetição conflitante é rejeitada explicitamente.
- Falhas e retentativas não produzem pedido parcial, estoque negativo ou efeito externo duplicado.
- Explica limites de DDL atômico, instrumentação e portabilidade para MariaDB, com laboratórios pendentes claramente marcados.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [Manual MySQL 8.4](https://dev.mysql.com/doc/refman/8.4/en/) — Referência da versão-base usada nesta trilha; confirme também as notas do patch instalado.
- [Instalação](https://dev.mysql.com/doc/refman/8.4/en/installing.html) — Guias oficiais por plataforma para instalar servidor e ferramentas.
- [Linhas LTS e Innovation](https://dev.mysql.com/doc/refman/8.4/en/mysql-releases.html) — Modelo de versões e escolha explícita da linha 8.4 LTS.
- [InnoDB e transações](https://dev.mysql.com/doc/refman/8.4/en/innodb-locking-transaction-model.html) — Isolamento, locks, MVCC e comportamentos de concorrência.
- [Prepared statements](https://dev.mysql.com/doc/refman/8.4/en/sql-prepared-statements.html) — Separação de valores e estrutura no mecanismo de preparação SQL.
- [Backup e recuperação](https://dev.mysql.com/doc/refman/8.4/en/backup-and-recovery.html) — Procedimentos de backup e recuperação; replicação tem objetivo distinto.
- [Performance Schema](https://dev.mysql.com/doc/refman/8.4/en/performance-schema.html) — Coleta e interpretação de dados reais de execução.
- [Connector/Python](https://dev.mysql.com/doc/connector-python/en/connector-python-api-mysqlcursor-execute.html) — API de execução parametrizada usada como exemplo de integração.
- [Triggers e binary log](https://dev.mysql.com/doc/refman/8.4/en/stored-programs-logging.html) — Requisitos administrativos adicionais na criação de programas armazenados.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Cadastro e movimentação InnoDB

Um checkout cria pedido e itens em MySQL 8.4 LTS. Os valores precisam ser exatos, referências válidas e qualquer falha deve deixar o estado anterior.

**Aulas necessárias**

- Aula 04 — Tipos numéricos, temporais e valores exatos
- Aula 05 — Chaves e restrições de domínio
- Aula 06 — Relacionamentos e integridade referencial
- Aula 07 — Inserção, AUTO_INCREMENT e identificadores
- Aula 08 — UPDATE, DELETE e escopo de mudanças
- Aula 09 — Transações, COMMIT e SAVEPOINT

**Conceitos combinados:** Domínio exato; Identidade e FK; Transação de escrita.

### Combo 2 — Relatórios e navegação do catálogo

A tela mostra clientes sem pedidos, uma página estável e indicadores extraídos de documentos JSON nativos. As consultas precisam responder à granularidade definida.

**Aulas necessárias**

- Aula 10 — Filtros, NULL e lógica de três valores
- Aula 11 — Ordenação, LIMIT e paginação por chave
- Aula 12 — Agregação, GROUP BY e HAVING
- Aula 13 — JOIN e multiplicação de linhas
- Aula 15 — CTEs comuns e recursivas
- Aula 18 — JSON nativo e extração de campos

**Conceitos combinados:** NULL e multiplicidade; Cursor determinístico; JSON e CTE.

### Combo 3 — Índices, auditoria e estoque disputado

O catálogo indexa campos JSON, o histórico registra mudanças e duas operações concorrentes reservam produtos. A equipe precisa distinguir plano, efeito e falha.

**Aulas necessárias**

- Aula 19 — Índices B-tree e prefixos compostos
- Aula 20 — EXPLAIN e EXPLAIN ANALYZE
- Aula 21 — Colunas geradas e índices sobre JSON
- Aula 23 — Triggers e auditoria transacional
- Aula 26 — Locks, SELECT FOR UPDATE e invariantes
- Aula 27 — Deadlocks e retentativas idempotentes

**Conceitos combinados:** Acesso por índice; Efeitos da escrita; Locks e retry.

### Combo 4 — Permissões, evolução e recuperação

O serviço possui conta limitada, consultas parametrizadas, dump lógico e binary logs. A implantação altera o esquema enquanto ainda existem consumidores antigos e réplicas.

**Aulas necessárias**

- Aula 28 — Contas, roles e menor privilégio
- Aula 29 — Parâmetros e prevenção de SQL injection
- Aula 31 — Backup lógico e restauração verificada
- Aula 32 — Binary log e recuperação até um ponto
- Aula 33 — Replicação, GTID e limites de disponibilidade
- Aula 35 — Migrações, DDL atômico e compatibilidade

**Conceitos combinados:** Menor privilégio; Dump e PITR; Compatibilidade operacional.

### Projeto final — Checkout idempotente e operável no MySQL

Implemente o banco de uma loja fictícia com catálogo, pedidos e estoque. Use MySQL 8.4 LTS/InnoDB e clientes locais; dados e credenciais reais não fazem parte da entrega.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Integridade exata: tipos monetários, chaves, referências, nulabilidade e limites são protegidos pelo esquema.
- Checkout atômico: reserva de estoque e pedido confirmam juntos e erro intermediário não deixa efeitos parciais.
- Repetição controlada: chave idempotente, comparação de conteúdo e retorno estável; deadlock tem retry limitado da unidade.
- Consultas medidas: relatório sem multiplicação, paginação por chave e índice justificado com resultado funcional conferido.
- Acesso e evolução: conta limitada, binding, fronteira TLS documentada e migration compatível com consumidores existentes.
- Recuperação verificável: dump restaurado em banco exclusivo, marcadores conferidos e estratégia de binlog/replicação sem prometer ensaio não realizado.

**Entregáveis**

- DDL, fixtures e migrations com versão e pré-requisitos.
- Cliente com operações parametrizadas e contrato de repetição.
- Testes de concorrência, relatórios e planos com resultados documentados.
- Runbook de dump/restore e recuperação por ponto com evidências e limites.

**Critérios práticos**

- **Integridade exata:** Integridade exata: tipos monetários, chaves, referências, nulabilidade e limites são protegidos pelo esquema.
- **Checkout atômico:** Checkout atômico: reserva de estoque e pedido confirmam juntos e erro intermediário não deixa efeitos parciais.
- **Repetição controlada:** Repetição controlada: chave idempotente, comparação de conteúdo e retorno estável; deadlock tem retry limitado da unidade.
- **Consultas medidas:** Consultas medidas: relatório sem multiplicação, paginação por chave e índice justificado com resultado funcional conferido.
- **Acesso e evolução:** Acesso e evolução: conta limitada, binding, fronteira TLS documentada e migration compatível com consumidores existentes.
- **Recuperação verificável:** Recuperação verificável: dump restaurado em banco exclusivo, marcadores conferidos e estratégia de binlog/replicação sem prometer ensaio não realizado.

**Testes de aceitação para executar localmente**

#### Requisição repetida

- Preparação: Um produto com estoque 2 e nenhuma req-1 registrada.
- Entrada/ação: Criar pedido de uma unidade e reenviar a mesma req-1; depois reutilizar a chave com conteúdo diferente.
- Resultado esperado: A repetição idêntica mantém um pedido/uma baixa; a divergente recebe conflito definido.

#### Disputa e deadlock

- Preparação: Duas conexões sobre tabelas persistentes de laboratório com dois produtos.
- Entrada/ação: Executar reserva concorrente e a intercalação que forma um ciclo de espera.
- Resultado esperado: A falha é identificada e a unidade é refeita com limite sem pedido parcial ou débito duplicado.

#### Destino restaurado

- Preparação: Dump da fixture conhecida e banco de restore vazio autorizado.
- Entrada/ação: Importar e conferir contagens, totais e tentativas inválidas no destino.
- Resultado esperado: Dados e regras conferem; arquivos/logs são preservados conforme o roteiro. PITR depende de ensaio adicional com logs válidos.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
