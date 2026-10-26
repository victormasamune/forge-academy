# Plano de ensino — Oracle Database

SQL e PL/SQL no Oracle AI Database 26ai Free: consultas, transações, pacotes, desempenho e recuperação, com laboratórios locais e evidências de cada entrega.

**Carga estimada:** 216 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Lógica de programação e noções de SQL ajudam; os primeiros níveis revisam a base.
- Oracle AI Database 26ai Free instalado em máquina ou contêiner local compatível; SQL*Plus ou SQLcl para executar scripts. A edição Free tem limites de recursos: planeje dados pequenos.
- Aulas administrativas requerem acesso ao servidor e acompanhamento de quem administra o laboratório. Nenhuma conta de nuvem ou contratação é necessária.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Ambiente, tipos e integridade | 18 | 1–3 | Cadastro de salas de estudo |
| 02 | Escrita de dados e relacionamentos | 18 | 3–5 | Reservas com relacionamento válido |
| 03 | Consultas e relatórios | 18 | 5–7 | Relatório de ocupação |
| 04 | SQL analítico e interfaces de leitura | 18 | 7–9 | Painel de uso por dia |
| 05 | Fundamentos de PL/SQL | 18 | 10–12 | Validador de reservas |
| 06 | API armazenada e auditoria | 18 | 12–14 | Pacote de reservas |
| 07 | Índices, planos e estatísticas | 18 | 14–16 | Investigação de consulta lenta |
| 08 | Transações, MVCC e concorrência | 18 | 16–18 | Reserva concorrente controlada |
| 09 | Segurança, parâmetros e JSON | 18 | 19–21 | Interface de consulta segura |
| 10 | Arquitetura e evolução de dados | 18 | 21–23 | Evolução de histórico de reservas |
| 11 | Backup, restauração e recuperação | 18 | 23–25 | Ensaio de recuperação em instância descartável |
| 12 | Operação e projeto integrado | 18 | 25–27 | Sistema de reservas operável |

## Nível 01 — Ambiente, tipos e integridade

Conecte à PDB correta e represente dados com tipos e regras explícitas.

**Aulas e objetivos**

- Aula 01: **Conexão, PDB e contexto da sessão** — Identificar usuário, schema e serviço antes de executar uma instrução. (6 h)
  - Exercício 1: Acrescente SERVICE_NAME ao relatório da sessão.
  - Exercício 2: Explique a diferença entre @aula_01.sql e SELECT 1 FROM dual; e execute ambos no local correto.
  - Exercício 3: Escreva um README com host, porta, serviço, usuário e forma de fornecer a senha sem registrá-la.
- Aula 02: **Tipos, literais e NULL no Oracle** — Escolher representações explícitas para números, textos e datas. (6 h)
  - Exercício 1: Calcule 3 unidades de preço 12.50 usando NUMBER e exiba 37.50.
  - Exercício 2: Mostre o dia seguinte a 2026-10-24 como YYYY-MM-DD.
  - Exercício 3: Preveja NVL('','sem nome') e explique o resultado.
- Aula 03: **Tabelas e constraints como regras do domínio** — Criar estrutura que rejeita dados inválidos, independentemente do cliente. (6 h)
  - Exercício 1: Tente inserir sala 2 com capacidade 0, trate o erro e confirme que não foi inserida.
  - Exercício 2: Teste nome Biblioteca com outro ID e documente a constraint violada.
  - Exercício 3: Liste os nomes e tipos das constraints de A03_SALA.

**Projeto:** Cadastro de salas de estudo

- Script que cria salas com identificador, nome único e capacidade positiva.
- Cinco registros fictícios e consulta com ordenação explícita.
- README com serviço, usuário sem senha e versão do servidor.

**Critérios de conclusão**

- Um nome duplicado é rejeitado pela constraint.
- Capacidade zero falha sem remover dados válidos.
- A conexão demonstra FREEPDB1 e usuário FORGE.

## Nível 02 — Escrita de dados e relacionamentos

Insira, altere e remova registros mantendo referências e limites de transação.

**Aulas e objetivos**

- Aula 04: **INSERT, identity e sequences** — Gerar identificadores sem calcular MAX(id)+1. (6 h)
  - Exercício 1: Adicione duas reservas com lista de colunas e confira quatro títulos no total.
  - Exercício 2: Obtenha NEXTVAL, execute ROLLBACK e obtenha NEXTVAL novamente.
  - Exercício 3: Tente inserir título NULL e confirme que a identity não torna a linha válida.
- Aula 05: **UPDATE, SQL%ROWCOUNT e RETURNING INTO** — Alterar somente a linha alvo e obter o resultado da mudança. (6 h)
  - Exercício 1: Mude a quantidade para zero, execute o bloco e desfaça tudo ao final.
  - Exercício 2: Execute a atualização para id=99 e defina uma resposta explícita.
  - Exercício 3: Crie duas linhas e escreva alteração de quantidade somente para uma delas.
- Aula 06: **DELETE e integridade referencial** — Cancelar registros sem criar referências órfãs. (6 h)
  - Exercício 1: Tente DELETE de A06_SALA antes de apagar a reserva e observe o erro.
  - Exercício 2: Proponha ALTER e UPDATE para cancelar sem remover a reserva.
  - Exercício 3: Escreva uma limpeza de filho e pai com verificação de contagem antes do commit.

**Projeto:** Reservas com relacionamento válido

- Tabelas sala e reserva com chave estrangeira e IDs gerados.
- Operações de inserir, corrigir e cancelar uma reserva.
- Roteiro que demonstra commit, rollback e tentativa de referência inválida.

**Critérios de conclusão**

- Uma reserva não aponta para sala inexistente.
- Um cancelamento afeta somente o ID informado.
- Identificadores são únicos sem exigir sequência sem lacunas.

## Nível 03 — Consultas e relatórios

Responda perguntas do domínio com filtros, joins e agregações corretos.

**Aulas e objetivos**

- Aula 07: **Filtros, CASE e lógica de três valores** — Definir corretamente a seleção quando campos podem estar ausentes. (6 h)
  - Exercício 1: Escreva um filtro que inclui nota menor que 7 ou ausente.
  - Exercício 2: Acrescente nota 7 e teste os ramos do CASE.
  - Exercício 3: Retorne somente a maior nota conhecida com desempate por ID.
- Aula 08: **Joins e preservação de linhas sem filhos** — Relacionar conjuntos sem multiplicar somas ou ocultar salas vazias. (6 h)
  - Exercício 1: Troque LEFT JOIN por INNER JOIN e conte as linhas.
  - Exercício 2: Inclua uma sala sem reserva e mantenha-a no relatório de ativas.
  - Exercício 3: Uma reserva tem dois itens e três pagamentos. Explique por que a junção direta produz seis combinações e proponha uma correção.
- Aula 09: **Agregações, GROUP BY e HAVING** — Calcular contagens e totais no nível correto do relatório. (6 h)
  - Exercício 1: Compare COUNT(*) e COUNT(r.id) para a sala Verde.
  - Exercício 2: Exiba somente salas com total de horas maior que 4.
  - Exercício 3: Crie conjunto de horas 2, NULL e 4 e compare AVG com soma dividida por COUNT(*).

**Projeto:** Relatório de ocupação

- Consulta de salas sem reservas usando LEFT JOIN.
- Resumo de reservas e horas por sala com filtros documentados.
- Casos de teste com sala vazia e reserva cancelada.

**Critérios de conclusão**

- COUNT da chave da reserva preserva zero para salas vazias.
- A soma não duplica registros por joins indevidos.
- A ordenação permite reproduzir os resultados.

## Nível 04 — SQL analítico e interfaces de leitura

Use subconsultas, CTEs, funções analíticas e views sem perder o significado dos dados.

**Aulas e objetivos**

- Aula 10: **Subconsultas, EXISTS e CTEs** — Decompor consultas e testar existência sem depender de listas com NULL. (6 h)
  - Exercício 1: Troque NOT EXISTS por s.id NOT IN(SELECT sala_id FROM reservas) e explique a saída.
  - Exercício 2: Use EXISTS para listar as salas com pelo menos uma reserva.
  - Exercício 3: Escreva uma CTE com contagem por sala e consulte as que têm duas ou mais reservas.
- Aula 11: **Funções analíticas e janelas explícitas** — Produzir ranking e acumulado preservando cada linha de detalhe. (6 h)
  - Exercício 1: Envolva a consulta em uma CTE e filtre posicao=1.
  - Exercício 2: Adicione outra linha Azul com 3 horas e compare ROW_NUMBER e DENSE_RANK.
  - Exercício 3: Escreva a soma por sala com GROUP BY e compare quantidade de linhas.
- Aula 12: **Views e contratos de leitura** — Publicar consultas com colunas estáveis e acesso controlável. (6 h)
  - Exercício 1: Acrescente observacao_interna à tabela e verifique as colunas da view.
  - Exercício 2: Tente UPDATE pela view e explique o resultado.
  - Exercício 3: Escreva consulta para localizar views ou packages inválidos no schema.

**Projeto:** Painel de uso por dia

- CTE que resume reservas por dia e sala.
- Ranking com desempate estável e acumulado com janela explícita.
- View com colunas contratuais e consultas de verificação.

**Critérios de conclusão**

- O ranking define critério para empates.
- O acumulado usa ROWS e ordenação com desempate.
- A view evita SELECT * no contrato publicado.

## Nível 05 — Fundamentos de PL/SQL

Traduza regras para blocos, trate exceções e percorra conjuntos com intenção clara.

**Aulas e objetivos**

- Aula 13: **Blocos, variáveis e controle de fluxo** — Escrever um bloco PL/SQL com validação e saída previsível. (6 h)
  - Exercício 1: Troque o limite para sete dias e preveja o total.
  - Exercício 2: Defina v_horas=0 e descreva a falha antes do laço.
  - Exercício 3: Extraia o cálculo para uma função local que recebe horas e dias.
- Aula 14: **Exceções e savepoints** — Tratar falhas previstas sem esconder erros desconhecidos. (6 h)
  - Exercício 1: Faça SELECT id INTO variável de A14_TESTE para id=99 e imprima ausente.
  - Exercício 2: Explique como registrar SQLCODE e SQLERRM e preservar a exceção original.
  - Exercício 3: Insira IDs 10 e 20 com um savepoint entre eles; reverta só o segundo.
- Aula 15: **Cursores e processamento de conjuntos** — Escolher entre uma instrução SQL e iteração procedural. (6 h)
  - Exercício 1: Calcule o total do exemplo com uma consulta SQL sem laço.
  - Exercício 2: Inclua titulo na consulta do cursor e imprima ID e título.
  - Exercício 3: Uma tabela tem 10 mil reservas ativas e precisa marcar vencidas. Proponha uma única operação SQL.

**Projeto:** Validador de reservas

- Bloco que valida duração e capacidade antes de inserir.
- Tratamento separado de reserva inexistente e regra de negócio.
- Relatório de validação de um conjunto de entradas fictícias.

**Critérios de conclusão**

- Uma falha esperada produz código ou mensagem definida.
- WHEN OTHERS não esconde falhas desconhecidas.
- A transação não confirma parcialmente por acidente.

## Nível 06 — API armazenada e auditoria

Organize regras em procedures e packages, controlando efeitos de triggers.

**Aulas e objetivos**

- Aula 16: **Procedures e parâmetros** — Criar uma operação armazenada com validação e retorno explícito. (6 h)
  - Exercício 1: Teste quantidade zero e NULL e confira o saldo.
  - Exercício 2: Tente consumir 6 e verifique o código -20002.
  - Exercício 3: Liste erros da procedure sem usar acesso administrativo.
- Aula 17: **Packages, especificação e implementação** — Organizar uma API estável com detalhes privados. (6 h)
  - Exercício 1: Crie no body uma função arredondar que use ROUND(valor,2) e chame-a no retorno.
  - Exercício 2: Introduza temporariamente uma assinatura diferente no body e consulte USER_ERRORS; depois corrija.
  - Exercício 3: Explique por que guardar usuario_atual numa variável global do package é arriscado com pool.
- Aula 18: **Triggers e auditoria transacional** — Registrar alterações sem esconder efeitos de transação. (6 h)
  - Exercício 1: Evite auditar quando antigo e novo são iguais; mantenha a coluna NOT NULL.
  - Exercício 2: Execute cancelamento, COMMIT e confirme a auditoria.
  - Exercício 3: Explique por que capacidade positiva deve ser CHECK e não trigger.

**Projeto:** Pacote de reservas

- Package com operações de consultar e criar reserva.
- Tabela de auditoria com trigger enxuto para mudança de estado.
- Testes com parâmetros válidos, inválidos e rollback.

**Critérios de conclusão**

- O pacote não usa COMMIT escondido na operação de negócio.
- O trigger participa da mesma transação da alteração.
- Alterar implementação não muda desnecessariamente a especificação pública.

## Nível 07 — Índices, planos e estatísticas

Investigue custo de consultas com medições e planos, sem presumir ganho por criar índice.

**Aulas e objetivos**

- Aula 19: **Índices B-tree e ordem das colunas** — Escolher candidatos a índice a partir de consultas reais. (6 h)
  - Exercício 1: Descreva as diferenças entre consultas por sala+intervalo e apenas intervalo de início.
  - Exercício 2: Proponha uma medição que considere leitura e inserção antes de aceitar mais um índice.
  - Exercício 3: Liste as colunas e sua posição no índice criado.
- Aula 20: **EXPLAIN PLAN e DBMS_XPLAN** — Interpretar o plano estimado sem confundi-lo com execução medida. (6 h)
  - Exercício 1: Encontre no plano o filtro de estado e registre a operação associada.
  - Exercício 2: Crie índice em estado e explique por que um scan pode continuar sendo escolhido.
  - Exercício 3: Descreva o que falta para afirmar que a mudança melhorou a consulta.
- Aula 21: **Estatísticas e predicados pesquisáveis** — Relacionar distribuição de dados ao planejamento da consulta. (6 h)
  - Exercício 1: Compare TRUNC(instante)=DATE '2026-10-03' com o intervalo e confira a mesma contagem.
  - Exercício 2: Liste NUM_ROWS e LAST_ANALYZED da tabela do exemplo.
  - Exercício 3: Planeje ensaio com maioria de estado ATIVA e poucos registros CANCELADA.

**Projeto:** Investigação de consulta lenta

- Massa sintética e consulta por sala e intervalo de datas.
- Plano antes/depois e registro da cardinalidade estimada.
- Relatório explicando seletividade, custo de escrita e limitações do teste.

**Critérios de conclusão**

- Não exige um plano idêntico em versões diferentes.
- Distingue estimativas de linhas realmente processadas.
- Mantém resultados corretos após a mudança.

## Nível 08 — Transações, MVCC e concorrência

Defina atomicidade e reproduza leituras e bloqueios em duas sessões.

**Aulas e objetivos**

- Aula 22: **Atomicidade, savepoints e commits implícitos** — Definir a unidade de trabalho e evitar DDL no meio de uma operação. (6 h)
  - Exercício 1: Repita a transferência e confirme no final; depois confira 70 e 50.
  - Exercício 2: Simule erro depois do débito e faça rollback integral.
  - Exercício 3: Explique o efeito de INSERT pendente seguido de CREATE TABLE e ROLLBACK.
- Aula 23: **MVCC e consistência de leitura em duas sessões** — Observar dados confirmados sem leitura suja. (6 h)
  - Exercício 1: Repita o roteiro com valor inicial 10 e ROLLBACK em A2.
  - Exercício 2: Na sessão A, consulte o valor antes de confirmar; compare com B1.
  - Exercício 3: Explique por que SELECT de vagas seguido de UPDATE absoluto pode perder uma atualização.
- Aula 24: **Bloqueios, FOR UPDATE e espera limitada** — Reproduzir contenção e desenhar uma operação que não fica esperando indefinidamente. (6 h)
  - Exercício 1: Repita B1 com FOR UPDATE WAIT 2 e registre o comportamento enquanto A segura o bloqueio.
  - Exercício 2: Após a reserva de A, tente UPDATE condicional em B e confira ROWCOUNT zero.
  - Exercício 3: Desenhe protocolo para uma transferência entre recursos IDs 2 e 1 sem inversão de ordem entre sessões.

**Projeto:** Reserva concorrente controlada

- Roteiro intercalado de duas sessões tentando reservar o mesmo recurso.
- Operação condicional que impede saldo ou vagas negativas.
- Teste de erro, rollback e tempo de espera limitado.

**Critérios de conclusão**

- Um SELECT comum não é tratado como bloqueio de escrita.
- A regra é protegida no banco durante a transação.
- A aplicação prevê espera, repetição limitada e falha de concorrência.

## Nível 09 — Segurança, parâmetros e JSON

Restrinja acesso por operação, use binds e consulte documentos com tipos explícitos.

**Aulas e objetivos**

- Aula 25: **Usuários, roles e privilégios de objeto** — Dar à aplicação somente a interface de dados necessária. (6 h)
  - Exercício 1: Conecte como leitor e tente ler NOTA_INTERNA pela tabela base.
  - Exercício 2: Como FORGE, revogue o SELECT concedido à role e repita a consulta do leitor em uma nova sessão.
  - Exercício 3: Proponha acesso para executar A16_CONSUMIR sem dar UPDATE em A16_SALDO.
- Aula 26: **Bind variables e SQL dinâmico seguro** — Separar valores de entrada da estrutura de uma instrução. (6 h)
  - Exercício 1: Troque v_nome para o texto x' OR 1=1 -- e preveja a contagem.
  - Exercício 2: Reescreva o exemplo sem SQL dinâmico.
  - Exercício 3: Aceite escolha por nome ou ID sem concatenar qualquer texto fornecido.
- Aula 27: **JSON nativo e consultas SQL/JSON** — Consultar documentos com tipos e política de erro definidos. (6 h)
  - Exercício 1: Retorne eventos com horas maior ou igual a 2.
  - Exercício 2: Insira horas com texto não numérico e teste ERROR ON ERROR em uma consulta separada.
  - Exercício 3: Explique por que sala_id e quantidade podem merecer colunas relacionais mesmo existindo dados JSON.

**Projeto:** Interface de consulta segura

- Usuário leitor com acesso apenas à view autorizada.
- Consulta ou procedure parametrizada com teste de entrada contendo aspas.
- Coluna JSON com consulta tipada e comportamento para campo ausente.

**Critérios de conclusão**

- Leitor não recebe DBA nem acesso indiscriminado a tabelas.
- Valores de entrada não são concatenados em SQL dinâmico.
- Validação JSON e regras relacionais têm responsabilidades documentadas.

## Nível 10 — Arquitetura e evolução de dados

Planeje partições, resumos materializados e migrações com contratos verificáveis.

**Aulas e objetivos**

- Aula 28: **Particionamento por intervalo e fronteiras** — Dividir dados históricos por uma chave de manutenção explícita. (6 h)
  - Exercício 1: Insira 2026-10-01 e comprove a partição.
  - Exercício 2: Explique a consulta por outubro e procure PSTART/PSTOP no plano local.
  - Exercício 3: Uma equipe usa Standard Edition 2. O laboratório Free prova que ela pode usar a mesma tabela particionada?
- Aula 29: **Materialized views e defasagem de leitura** — Manter um resumo armazenado com refresh explícito. (6 h)
  - Exercício 1: Insira uma linha para sala 2, confirme e compare origem e resumo antes/depois do refresh.
  - Exercício 2: Defina uma política de atualização que aceita até 15 minutos de defasagem.
  - Exercício 3: Explique o que investigar antes de trocar COMPLETE por FAST.
- Aula 30: **Migrações versionadas e compatibilidade** — Evoluir estrutura sem supor transação reversível de DDL. (6 h)
  - Exercício 1: Explique o que acontece com INSERT que omite estado depois de NOT NULL sem DEFAULT.
  - Exercício 2: Liste três verificações antes de encerrar a migração.
  - Exercício 3: Proponha como retomar um backfill de milhões de linhas após falha.

**Projeto:** Evolução de histórico de reservas

- Histórico com partições por data e limites de fronteira testados.
- Resumo materializado atualizado por rotina explícita.
- Migração versionada com etapas de expandir, preencher e contratar.

**Critérios de conclusão**

- Justifica partição por volume e manutenção, não como ganho automático.
- Documenta defasagem do resumo e momento de refresh.
- Reconhece commits implícitos de DDL no plano de implantação.

## Nível 11 — Backup, restauração e recuperação

Diferencie exportação lógica, backup físico e recuperação até um ponto definido.

**Aulas e objetivos**

- Aula 31: **Data Pump: exportação e importação lógica** — Produzir um dump e comprovar a importação em outro schema. (6 h)
  - Exercício 1: Descreva a configuração de FORGE_DP sem conceder DBA ao usuário da aplicação.
  - Exercício 2: Após importar em FORGE_RESTORE, compare as duas linhas, não apenas o código de saída do comando.
  - Exercício 3: Explique se o dump dessa tabela permite recuperar toda a instância até um segundo antes de um erro.
- Aula 32: **RMAN e backup físico consistente** — Criar e validar um backup de uma instância descartável sem chamar validação de restore concluído. (6 h)
  - Exercício 1: Execute LIST BACKUP SUMMARY e registre identidade e local dos artefatos do ensaio.
  - Exercício 2: Explique por que o exemplo usa MOUNT após shutdown limpo e o que muda numa estratégia online com archived logs.
  - Exercício 3: Defina critérios para um restore real em ambiente descartável além do VALIDATE.
- Aula 33: **PITR, RPO e RTO com alvo verificável** — Definir um ponto de recuperação e provar quais mudanças foram preservadas ou perdidas. (6 h)
  - Exercício 1: Execute a preparação e registre o SCN e os dois marcadores antes do ensaio administrativo.
  - Exercício 2: Escreva o esqueleto de um runbook com SCN real, sem executá-lo em instância compartilhada.
  - Exercício 3: Defina uma tabela de registro de RTO e perda de dados do ensaio.

**Projeto:** Ensaio de recuperação em instância descartável

- Exportação de tabela para schema de validação com comparação de contagens.
- Backup RMAN e evidência de validação ou restore de ensaio, identificados separadamente.
- Runbook com alvo de recuperação, arquivos necessários e tempos medidos.

**Critérios de conclusão**

- Não declara sucesso de restore apenas por sucesso de backup ou VALIDATE.
- Mantém artefatos e logs fora do único disco de origem.
- Testa recuperação somente em ambiente descartável identificado.

## Nível 12 — Operação e projeto integrado

Instrumente, processe lotes e entregue uma API transacional com evidências de operação.

**Aulas e objetivos**

- Aula 34: **Instrumentação de sessão e SQL trace** — Identificar uma operação e coletar evidências sem registrar valores sensíveis. (6 h)
  - Exercício 1: Envolva o trabalho em bloco que desabilita trace e limpa módulo quando há exceção.
  - Exercício 2: Descreva como obter TKPROF sem conceder leitura de todo o servidor à aplicação.
  - Exercício 3: O relatório mostra 500 execuções de uma consulta curta por solicitação. Qual hipótese testar?
- Aula 35: **BULK COLLECT, FORALL e erros de lote** — Processar coleções com política explícita para falhas parciais. (6 h)
  - Exercício 1: Adapte a política para desfazer todas as linhas do lote quando qualquer elemento falhar.
  - Exercício 2: Troque a coleção por 2,1,3 e confirme somente no chamador.
  - Exercício 3: Descreva um cursor BULK COLLECT que processa 100 linhas por vez sem perder o último lote.
- Aula 36: **Projeto integrado: reserva transacional** — Integrar invariantes, API armazenada e protocolo de repetição em uma operação revisável. (6 h)
  - Exercício 1: Prepare recurso com uma vaga e duas sessões com requisições diferentes. Intercale chamadas e commits.
  - Exercício 2: Desenhe a extensão que trata a mesma req com parâmetros iguais e diferentes.
  - Exercício 3: Monte um README do projeto com instalação, testes e recuperação comprovada.

**Projeto:** Sistema de reservas operável

- Schema, pacote e consultas com testes de integridade e concorrência.
- Relatório de uma consulta investigada e de um lote com erro parcial controlado.
- Guia de instalação, usuário da aplicação, migração e ensaio de recuperação.

**Critérios de conclusão**

- Nenhuma credencial real é versionada.
- Falhas de lote têm política explícita de commit ou rollback.
- Há evidência de resultados e limites do que foi executado.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [Oracle AI Database Free — instalação](https://www.oracle.com/database/free/get-started/) — Distribuições, limites e preparação local da edição 26ai Free.
- [Conexões e FREEPDB1](https://docs.oracle.com/en/database/oracle/oracle-database/26/xeinl/connecting-oracle-database-free.html) — Listener, serviço da PDB e formas de conexão.
- [SQL Language Reference](https://docs.oracle.com/en/database/oracle/oracle-database/26/sqlrf/) — Sintaxe e semântica do SQL Oracle usado nos exemplos.
- [PL/SQL Language Reference](https://docs.oracle.com/en/database/oracle/oracle-database/26/lnpls/) — Blocos, exceções, cursores, pacotes e processamento em lote.
- [SQL Tuning Guide](https://docs.oracle.com/en/database/oracle/oracle-database/26/tgsql/) — Planos, estatísticas e investigação com DBMS_XPLAN.
- [Backup and Recovery User’s Guide](https://docs.oracle.com/en/database/oracle/oracle-database/26/bradv/) — Backups físicos, validação, restore, recovery e PITR com RMAN.
- [Database Utilities](https://docs.oracle.com/en/database/oracle/oracle-database/26/sutil/) — Exportação e importação lógica com Data Pump.
- [Matriz de recursos por edição](https://docs.oracle.com/en/database/oracle/oracle-database/26/dblic/Licensing-Information.html) — Disponibilidade de opções e restrições por edição; consultar antes de usar recursos corporativos.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Reserva com regras e relatórios

Um schema Oracle 26ai Free guarda recursos e reservas. O cadastro deve diferenciar ausência, rejeitar estados inválidos e produzir um relatório que inclua recursos sem reservas.

**Aulas necessárias**

- Aula 02 — Tipos, literais e NULL no Oracle
- Aula 03 — Tabelas e constraints como regras do domínio
- Aula 05 — UPDATE, SQL%ROWCOUNT e RETURNING INTO
- Aula 08 — Joins e preservação de linhas sem filhos
- Aula 09 — Agregações, GROUP BY e HAVING

**Conceitos combinados:** NULL e domínio; Efeito de UPDATE; Junção e medida.

### Combo 2 — API PL/SQL e auditoria

O banco expõe uma package de reservas, processa conjuntos e registra mudanças por trigger. Os erros devem preservar o limite de trabalho previsto.

**Aulas necessárias**

- Aula 11 — Funções analíticas e janelas explícitas
- Aula 14 — Exceções e savepoints
- Aula 15 — Cursores e processamento de conjuntos
- Aula 16 — Procedures e parâmetros
- Aula 17 — Packages, especificação e implementação
- Aula 18 — Triggers e auditoria transacional

**Conceitos combinados:** Janela e processamento; Contrato de package; Exceção e auditoria.

### Combo 3 — Plano e reserva concorrente

O serviço consulta por intervalo de data e disputa vagas. O operador precisa compreender o efeito de DDL, snapshots de leitura e leituras bloqueantes em duas sessões.

**Aulas necessárias**

- Aula 19 — Índices B-tree e ordem das colunas
- Aula 20 — EXPLAIN PLAN e DBMS_XPLAN
- Aula 21 — Estatísticas e predicados pesquisáveis
- Aula 22 — Atomicidade, savepoints e commits implícitos
- Aula 23 — MVCC e consistência de leitura em duas sessões
- Aula 24 — Bloqueios, FOR UPDATE e espera limitada

**Conceitos combinados:** Acesso e estatísticas; Commit e visibilidade; FOR UPDATE e NOWAIT.

### Combo 4 — Contrato público e recuperação com alvo

A API possui usuário limitado e bind variables. Uma migration modifica o esquema, enquanto exportações lógicas e backups físicos precisam ter seu alcance documentado.

**Aulas necessárias**

- Aula 25 — Usuários, roles e privilégios de objeto
- Aula 26 — Bind variables e SQL dinâmico seguro
- Aula 30 — Migrações versionadas e compatibilidade
- Aula 31 — Data Pump: exportação e importação lógica
- Aula 32 — RMAN e backup físico consistente
- Aula 33 — PITR, RPO e RTO com alvo verificável

**Conceitos combinados:** Privilégios e binds; Migração e cópia lógica; RMAN e PITR.

### Projeto final — API de reservas com package e recuperação Oracle

Implemente um schema de reservas de recursos em Oracle AI Database 26ai Free. A interface PL/SQL deve ter contrato público, regras verificáveis e ensaios locais que distingam leitura, escrita e recuperação.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Modelo de reservas: constraints, referências, identidades e regras de ausência/valores cobrem entradas inválidas e histórico.
- API PL/SQL: package com especificação clara, parâmetros validados e tratamento de exceção sem ocultar falhas obrigatórias.
- Atomicidade e disputa: reserva e baixa de vagas pertencem à mesma unidade; duas sessões demonstram bloqueio e recusa sem saldo negativo.
- Leituras e desempenho: relatórios preservam granularidade, analíticas têm ordem/frame e um índice é investigado com predicado e estatísticas coerentes.
- Acesso e evolução: usuário da API recebe privilégios mínimos, SQL dinâmico vincula valores e migrations respeitam commits implícitos do DDL.
- Recuperação demonstrada: exportação/importação lógica validada e roteiro físico/PITR com privilégios, caminhos, SCN e estado de ensaio explicitados.

**Entregáveis**

- DDL, fixture fictícia, dicionário e migrations com seus limites de confirmação.
- Especificação/body da package, cliente e contrato de erros.
- Ensaios de duas sessões, relatórios e investigação de plano com resultados.
- Runbook Data Pump/RMAN/PITR que separa preparação, validação e recuperação executada.

**Critérios práticos**

- **Modelo de reservas:** Modelo de reservas: constraints, referências, identidades e regras de ausência/valores cobrem entradas inválidas e histórico.
- **API PL/SQL:** API PL/SQL: package com especificação clara, parâmetros validados e tratamento de exceção sem ocultar falhas obrigatórias.
- **Atomicidade e disputa:** Atomicidade e disputa: reserva e baixa de vagas pertencem à mesma unidade; duas sessões demonstram bloqueio e recusa sem saldo negativo.
- **Leituras e desempenho:** Leituras e desempenho: relatórios preservam granularidade, analíticas têm ordem/frame e um índice é investigado com predicado e estatísticas coerentes.
- **Acesso e evolução:** Acesso e evolução: usuário da API recebe privilégios mínimos, SQL dinâmico vincula valores e migrations respeitam commits implícitos do DDL.
- **Recuperação demonstrada:** Recuperação demonstrada: exportação/importação lógica validada e roteiro físico/PITR com privilégios, caminhos, SCN e estado de ensaio explicitados.

**Testes de aceitação para executar localmente**

#### Falha na reserva

- Preparação: Recurso com duas vagas e nenhuma requisição de teste.
- Entrada/ação: Executar reserva válida e provocar falha controlada em etapa obrigatória de outra operação.
- Resultado esperado: Somente a unidade válida confirma; a falha não conserva baixa parcial nem auditoria transacional indevida.

#### Bloqueio em duas sessões

- Preparação: Tabela persistente do laboratório e A com FOR UPDATE sobre o recurso.
- Entrada/ação: B tenta FOR UPDATE NOWAIT; após A encerrar, B refaz a leitura e a decisão.
- Resultado esperado: B identifica recurso ocupado antes da liberação e revalida o estado depois, sem assumir vagas antigas.

#### Cópia e ponto recuperado

- Preparação: Fixture com marcadores e destino lógico/instância de teste preparados por operador autorizado.
- Entrada/ação: Importar a cópia lógica e conferir seus dados; se houver ensaio PITR, recuperar o SCN registrado e abrir o destino.
- Resultado esperado: O destino lógico corresponde ao ponto exportado; PITR só passa com os marcadores esperados no alvo real, não apenas VALIDATE.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
