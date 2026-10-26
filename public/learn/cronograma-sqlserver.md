# Plano de ensino — SQL Server

Aprenda SQL Server com T-SQL, modelagem, consultas, programação no banco, desempenho e operação. A trilha usa SQL Server 2022 Developer como ambiente de laboratório e avança até recuperação, concorrência e arquitetura.

**Carga estimada:** 216 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Recomendado: curso de Bancos de Dados e SQL; as primeiras aulas retomam o essencial.
- Computador capaz de executar SQL Server 2022 Developer em ambiente de desenvolvimento e teste; acesso a uma instância local autorizada.
- Conhecer arquivos, terminal e instalação de ferramentas. Para integrar aplicações, ajuda conhecer uma das linguagens da plataforma.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Ambiente e valores | 18 | 1–3 | Caderno de conexão e expressões |
| 02 | Esquema e integridade | 18 | 3–5 | Cadastro de catálogo e pedidos |
| 03 | Consultas relacionais | 18 | 5–7 | Relatório comercial confiável |
| 04 | Consultas avançadas e JSON | 18 | 7–9 | Painel de vendas paginado |
| 05 | Programação no banco | 18 | 10–12 | API de banco para o catálogo |
| 06 | Índices e planos | 18 | 12–14 | Dossiê de desempenho |
| 07 | Transações e concorrência | 18 | 14–16 | Laboratório de estoque concorrente |
| 08 | Segurança e fronteiras | 18 | 16–18 | Contrato de acesso da aplicação |
| 09 | Recuperação de dados | 18 | 19–21 | Ensaio de recuperação documentado |
| 10 | Observabilidade e manutenção | 18 | 21–23 | Roteiro de investigação operacional |
| 11 | Evolução e disponibilidade | 18 | 23–25 | Plano de evolução e continuidade |
| 12 | Projeto integrado | 18 | 25–27 | Banco de pedidos pronto para revisão |

## Nível 01 — Ambiente e valores

Diferencie instância, banco, cliente e lote; escreva as primeiras expressões T-SQL.

**Aulas e objetivos**

- Aula 01: **Instância, banco, cliente e lote** — Identificar onde a consulta roda e separar instruções do motor de comandos do cliente. (6 h)
  - Exercício 1: Registre instância, edição, versão e banco com SERVERPROPERTY e DB_NAME().
  - Exercício 2: Declare @nome = N'laboratório', consulte, acrescente GO e tente consultar novamente. Explique o erro.
  - Exercício 3: Salve a consulta em aula01.sql e execute com o cliente escolhido, registrando comando e código de saída quando houver.
- Aula 02: **Tipos, Unicode e aritmética** — Escolher tipos e prever conversões e divisão em expressões T-SQL. (6 h)
  - Exercício 1: Calcule 19.90 vezes 7 e devolva decimal(12,2).
  - Exercício 2: Declare um nome com acentos em nvarchar e compare o uso do literal N com um literal sem N; registre a collation.
  - Exercício 3: Compare CAST(7/2 AS decimal(8,2)) com CAST(7 AS decimal(8,2))/2.
- Aula 03: **Datas e conversão de entradas** — Interpretar datas sem depender do idioma da sessão e tratar conversões inválidas. (6 h)
  - Exercício 1: Calcule o primeiro dia e o dia seguinte de fevereiro de 2024 usando DATEFROMPARTS/DATEADD.
  - Exercício 2: Converta N'42' e N'quarenta' com TRY_CONVERT e classifique os resultados.
  - Exercício 3: Explique por que DATEDIFF(day,'2026-10-01T23:59:59','2026-10-02T00:00:00') retorna 1.

**Projeto:** Caderno de conexão e expressões

- Registre instância, edição, versão e banco sem publicar credenciais.
- Entregue cinco consultas de expressões com resultados previstos.
- Documente como repetir as consultas por arquivo no cliente escolhido.

**Critérios de conclusão**

- O contexto selecionado é ForgeSQLLab, nunca um banco real.
- Unicode, divisão e conversões são explicados com exemplos.
- Outra pessoa consegue seguir os comandos sem adivinhar a instância.

## Nível 02 — Esquema e integridade

Modele tabelas e relações com regras verificadas pelo motor.

**Aulas e objetivos**

- Aula 04: **Tabelas e constraints** — Criar uma tabela cujo contrato rejeite valores que violam regras simples. (6 h)
  - Exercício 1: Tente inserir preço zero e preço NULL separadamente, registre o erro e confira se a linha válida permaneceu.
  - Exercício 2: Insira outro produto com sku GO-01 e explique o resultado.
  - Exercício 3: Adicione estoque int NOT NULL DEFAULT(0) CHECK(estoque>=0) ao modelo e teste -1.
- Aula 05: **Chaves estrangeiras e cardinalidade** — Modelar uma relação um-para-muitos e comprovar a rejeição de órfãos. (6 h)
  - Exercício 1: Antes dos DROP finais, tente inserir pedido 103 com cliente 99.
  - Exercício 2: Antes da limpeza, tente excluir cliente 1 e proponha uma política de arquivamento.
  - Exercício 3: Modele itens de pedido com pedido_id,numero_item,produto_id,quantidade e justifique a chave.
- Aula 06: **INSERT, UPDATE, DELETE e OUTPUT** — Modificar apenas as linhas pretendidas e inspecionar valores antes e depois. (6 h)
  - Exercício 1: Altere a retirada para 30 e registre @@ROWCOUNT e estado final.
  - Exercício 2: Exclua somente id 2 com OUTPUT deleted.id,deleted.qtd.
  - Exercício 3: Insira um SELECT entre UPDATE e a captura de @@ROWCOUNT e explique por que isso muda a evidência.

**Projeto:** Cadastro de catálogo e pedidos

- DDL de clientes, produtos, pedidos e itens com chaves explícitas.
- Carga de dados fictícios e cinco tentativas inválidas documentadas.
- Scripts de atualização e exclusão limitados por chave.

**Critérios de conclusão**

- Dados órfãos, preço negativo e quantidade zero são rejeitados.
- Chave técnica e regra de negócio são distinguidas.
- Scripts informam linhas afetadas e não dependem da ordem física.

## Nível 03 — Consultas relacionais

Consulte dados sem perder linhas ou inflar agregações por junções.

**Aulas e objetivos**

- Aula 07: **Filtros, NULL e ordenação** — Construir predicados com semântica explícita de ausência e resultados determinísticos. (6 h)
  - Exercício 1: Filtre pontos entre 5 e 10 e explique a ausência de Bia.
  - Exercício 2: Selecione TOP(1) entre as maiores pontuações, escolhendo o menor id em empate.
  - Exercício 3: Escreva filtro para nomes Ana ou Bia, mas apenas quando pontos>=10.
- Aula 08: **JOIN e preservação de linhas** — Escolher o tipo de junção e a posição do filtro sem perder pais sem filhos. (6 h)
  - Exercício 1: Remova status do ON e acrescente WHERE p.status='P'. Compare.
  - Exercício 2: Acrescente um segundo pedido pago para Ana e preveja a quantidade de linhas.
  - Exercício 3: Explique como combinar totais de pedidos e de contatos por cliente quando ambos são um-para-muitos.
- Aula 09: **GROUP BY, HAVING e agregações** — Agrupar no grão correto e distinguir contagem de linhas e valores presentes. (6 h)
  - Exercício 1: Mude o relatório para exibir apenas clientes com total >=30.
  - Exercício 2: Calcule AVG(valor) por cliente e explique o resultado do cliente 2.
  - Exercício 3: Adapte o LEFT JOIN da aula anterior para contar pedidos pagos por cliente.

**Projeto:** Relatório comercial confiável

- Consultas de clientes com e sem pedidos.
- Resumo por cliente com política explícita para nulos.
- Massa de teste com duplicidade de nomes e cliente sem compra.

**Critérios de conclusão**

- Junções usam IDs e sua cardinalidade é justificada.
- Totais conferem com o cálculo manual da massa pequena.
- Relatórios têm ordenação determinística.

## Nível 04 — Consultas avançadas e JSON

Decomponha consultas e produza ranking, paginação e leitura de JSON.

**Aulas e objetivos**

- Aula 10: **CTE, EXISTS e anti-junções** — Decompor consultas e identificar presença ou ausência sem armadilhas de NULL. (6 h)
  - Exercício 1: Substitua NOT EXISTS por c.id NOT IN(SELECT cliente_id FROM @p) e compare.
  - Exercício 2: Retorne somente clientes que possuem ao menos um pedido e acrescente outro pedido de Ana.
  - Exercício 3: Crie uma CTE Totais por cliente e outra Elegiveis com total>=2.
- Aula 11: **Funções de janela e paginação** — Calcular acumulados e posições preservando cada linha e desempates. (6 h)
  - Exercício 1: Calcule RANK e DENSE_RANK por valor DESC para o cliente 1.
  - Exercício 2: Liste a segunda página de 2 vendas por id usando OFFSET/FETCH.
  - Exercício 3: Busque duas vendas após id 2 sem OFFSET.
- Aula 12: **JSON_VALUE, JSON_QUERY e OPENJSON** — Ler um documento JSON com esquema explícito e distinguir escalares de objetos. (6 h)
  - Exercício 1: Some a quantidade dos itens tabulados por OPENJSON.
  - Exercício 2: Compare ISJSON para o documento correto e N'{cliente:Ana}'.
  - Exercício 3: Modele documento nvarchar(max) NOT NULL com CHECK ISJSON e descreva validação para qtd>0 em todos os itens.

**Projeto:** Painel de vendas paginado

- Consulta de clientes sem pedidos usando NOT EXISTS.
- Ranking e acumulado com empate e desempate documentados.
- Importação de JSON com esquema de campos e validação.

**Critérios de conclusão**

- Paginação inclui chave única na ordenação.
- Ausência não depende do comportamento perigoso de NOT IN com NULL.
- JSON não substitui constraints nem validação de domínio.

## Nível 05 — Programação no banco

Defina interfaces SQL reutilizáveis e lógica baseada em conjuntos.

**Aulas e objetivos**

- Aula 13: **Views e funções tabulares** — Publicar uma consulta nomeada e diferenciar view de função tabular parametrizada. (6 h)
  - Exercício 1: Antes dos DROP finais, altere o produto 2 para ativo=1 e consulte novamente a view.
  - Exercício 2: Crie dbo.ForgeA13PorEstado(@ativo bit) como função tabular inline e consulte com 0.
  - Exercício 3: Explique o risco de SELECT * em uma view exposta a aplicação e proponha revisão de mudança de coluna.
- Aula 14: **Procedimentos e validação de entrada** — Encapsular uma escrita parametrizada com erro de domínio e retorno definido. (6 h)
  - Exercício 1: Antes da limpeza, execute o procedimento com preço 0 e NULL em chamadas separadas.
  - Exercício 2: Tente INSERT direto com preço negativo e explique por que a constraint permanece necessária.
  - Exercício 3: Altere o procedimento para devolver @id em parâmetro OUTPUT e crie uma chamada completa.
- Aula 15: **Triggers baseadas em conjuntos** — Registrar uma mudança de várias linhas sem assumir que inserted tem apenas uma linha. (6 h)
  - Exercício 1: Antes da limpeza, execute UPDATE com WHERE id=99 e consulte a quantidade de logs.
  - Exercício 2: Envolva o UPDATE em BEGIN TRAN/ROLLBACK e compare tabela e log após rollback.
  - Exercício 3: Reescreva uma trigger que faz SELECT @id=id FROM inserted para tratar todas as linhas.

**Projeto:** API de banco para o catálogo

- View ou função tabular para leitura parametrizada.
- Procedimento de escrita com entradas verificadas.
- Trigger de auditoria que cobre instrução com várias linhas.

**Critérios de conclusão**

- Definições respeitam separação de lotes GO.
- Nenhuma entrada é concatenada ao texto de SQL.
- Triggers tratam inserted/deleted como conjuntos.

## Nível 06 — Índices e planos

Use evidências de acesso para escolher índices e reconhecer custos.

**Aulas e objetivos**

- Aula 16: **Índices rowstore, INCLUDE e filtro** — Relacionar predicados e projeção à estrutura de acesso sem criar índices por hábito. (6 h)
  - Exercício 1: Escreva a consulta de pedidos abertos do cliente 20 e identifique o índice candidato.
  - Exercício 2: Atualize status de A para F e explique o efeito lógico no índice filtrado.
  - Exercício 3: Proponha índice para WHERE cliente=@c ORDER BY data,id com projeção total em uma tabela maior.
- Aula 17: **Planos reais, estatísticas e leituras** — Comparar consultas por resultado, cardinalidade e trabalho executado. (6 h)
  - Exercício 1: Compare a faixa com WHERE YEAR(instante)=2026 AND MONTH(instante)=1.
  - Exercício 2: Aumente a massa para vários anos e documente quantas linhas caem no intervalo consultado.
  - Exercício 3: Descreva uma investigação quando estimativa é 1 linha e execução retorna 100 mil.
- Aula 18: **Columnstore e carga analítica** — Comparar organização por linhas e colunas para agregações sem prometer ganhos universais. (6 h)
  - Exercício 1: Remova o índice columnstore, execute a agregação em heap e compare o resultado.
  - Exercício 2: Projete ensaio com ao menos 100 mil linhas e três canais, sem executar em instância compartilhada.
  - Exercício 3: Escolha candidatos físicos para catálogo de 100 produtos e fatos de milhões de vendas; justifique.

**Projeto:** Dossiê de desempenho

- Consultas com índices de cobertura e filtro.
- Plano real e leituras lógicas antes/depois para massa controlada.
- Comparação de acesso transacional e agregação analítica.

**Critérios de conclusão**

- Resultados lógicos são iguais nas comparações.
- Tempo isolado não é apresentado como prova suficiente.
- Custo de armazenamento e escrita dos índices é discutido.

## Nível 07 — Transações e concorrência

Proteja invariantes diante de erros, bloqueios e atualizações simultâneas.

**Aulas e objetivos**

- Aula 19: **Transação, XACT_ABORT e TRY CATCH** — Reverter um conjunto de alterações quando uma das operações falha. (6 h)
  - Exercício 1: Troque o segundo UPDATE por saldo=saldo+30 e confira a soma total.
  - Exercício 2: Adapte o CATCH para um procedimento utilizado por aplicação.
  - Exercício 3: Projete tratamento se o id de destino não existir, apesar de o UPDATE não gerar erro.
- Aula 20: **Isolamento, bloqueios e versões** — Distinguir consistência da transação de ausência de espera e planejar ensaio com duas sessões. (6 h)
  - Exercício 1: Registre as duas opções retornadas e explique se pode iniciar SNAPSHOT sem alterar o banco.
  - Exercício 2: Crie tabela permanente dbo.ForgeA20(id int PRIMARY KEY,valor int), uma linha (1,10), e ensaie atualização não confirmada versus leitura em outra sessão.
  - Exercício 3: Em laboratório, repita B com READ UNCOMMITTED enquanto A mantém valor 20 não confirmado e depois reverte.
- Aula 21: **Deadlocks e repetição limitada** — Reproduzir um ciclo de espera controlado e projetar recuperação da transação vítima. (6 h)
  - Exercício 1: Após preparar, execute em A BEGIN TRAN e UPDATE id=1; em B BEGIN TRAN e UPDATE id=2; depois A tenta id=2 e B tenta id=1.
  - Exercício 2: Repita com ambas as transações acessando id 1 antes de id 2.
  - Exercício 3: Escreva pseudocódigo com no máximo três tentativas para erro 1205 e sem repetir erros de validação.

**Projeto:** Laboratório de estoque concorrente

- Transação com rollback comprovado ao ocorrer erro.
- Roteiro com duas sessões e horários de bloqueio.
- Reprodução de deadlock e estratégia de repetição limitada.

**Critérios de conclusão**

- Nenhum erro deixa transação aberta no cliente.
- NOLOCK não é usado para garantir consistência.
- Repetição trata a transação inteira e limita tentativas.

## Nível 08 — Segurança e fronteiras

Conceda acesso mínimo e mantenha entradas fora da estrutura de SQL.

**Aulas e objetivos**

- Aula 22: **Usuários, roles e menor privilégio** — Comprovar um papel de leitura sem exigir login administrativo da aplicação. (6 h)
  - Exercício 1: Antes do REVERT e da limpeza, tente UPDATE na identidade restrita e capture o erro em TRY CATCH.
  - Exercício 2: Desenhe permissão para aplicação chamar um procedimento de cadastro sem UPDATE direto em toda a base.
  - Exercício 3: Retire o usuário do papel, repita o SELECT e explique por que a conexão administrativa original não é teste válido.
- Aula 23: **SQL dinâmico com parâmetros** — Separar valores da estrutura do comando e validar identificadores permitidos. (6 h)
  - Exercício 1: Busque um nome contendo apóstrofo, como D'Ávila, usando parâmetro.
  - Exercício 2: Defina @busca com texto que inclua aspas e OR 1=1 e confira o resultado.
  - Exercício 3: Desenhe ordenação permitida apenas por id ou nome, sem aceitar qualquer SQL do usuário.
- Aula 24: **Segurança em nível de linha** — Aplicar um filtro por usuário e reconhecer a diferença entre filtro e autorização de escrita. (6 h)
  - Exercício 1: Crie um segundo usuário WITHOUT LOGIN, conceda SELECT e teste uma linha própria.
  - Exercício 2: Em contexto de operador, desative a policy e repita a leitura restrita, depois reative.
  - Exercício 3: Descreva por que aceitar tenant_id livre do cliente e gravá-lo em SESSION_CONTEXT pode romper o isolamento.

**Projeto:** Contrato de acesso da aplicação

- Papel de leitura testado com usuário sem login.
- Consulta dinâmica com parâmetros e nomes permitidos.
- Política de linhas e matriz de usuários esperados.

**Critérios de conclusão**

- A aplicação não exige db_owner/sysadmin.
- Teste negativo prova que escrita não autorizada é negada.
- Contexto de autorização não é controlável por cliente não confiável.

## Nível 09 — Recuperação de dados

Execute backup e restauração de laboratório e defina objetivos de recuperação.

**Aulas e objetivos**

- Aula 25: **Modelos de recuperação e backup completo** — Criar um backup real de laboratório e distinguir recuperação completa de FULL recovery model. (6 h)
  - Exercício 1: Registre caminho retornado, término do BACKUP, tamanho e local de armazenamento; não publique dados do servidor.
  - Exercício 2: Explique por que mudar SIMPLE para FULL sem backup e sem agendamento de log não atende a RPO de 5 minutos.
  - Exercício 3: Defina RPO/RTO para um laboratório e descreva como medir ambos em restauração.
- Aula 26: **Restauração em outro banco e verificação** — Restaurar o backup da aula anterior com nome e arquivos exclusivos e conferir o dado recuperado. (6 h)
  - Exercício 1: Consulte Saldo na origem e no banco restaurado e faça uma alteração somente na cópia.
  - Exercício 2: Registre FILELISTONLY e explique a diferença entre LogicalName e PhysicalName.
  - Exercício 3: Defina cinco verificações para aceitar a retomada de um sistema de pedidos.
- Aula 27: **Backup de log e recuperação no tempo** — Comprovar um ponto de parada que conserva uma escrita válida e exclui uma alteração posterior. (6 h)
  - Exercício 1: Consulte as duas tabelas Evento após o ensaio e explique a diferença.
  - Exercício 2: Descreva o resultado operacional se um backup de log necessário no meio da sequência sumir.
  - Exercício 3: Meça o ensaio desde a escolha dos arquivos até a consulta validada e projete uma frequência de logs para RPO de 5 minutos.

**Projeto:** Ensaio de recuperação documentado

- Backup completo com checksum em diretório do servidor.
- Banco restaurado com outro nome e arquivos exclusivos.
- Ensaio de log com marca temporal anterior a alteração indevida.

**Critérios de conclusão**

- Valida dados restaurados; VERIFYONLY não é a única evidência.
- A cadeia de logs e o ponto de parada são preservados.
- Tempo medido e perda observada são comparados a RTO/RPO definidos.

## Nível 10 — Observabilidade e manutenção

Investigue regressões e bloqueios antes de escolher intervenções.

**Aulas e objetivos**

- Aula 28: **Query Store e regressões** — Consultar histórico de execução e planos sem confundir médias ou captura ausente com ausência de carga. (6 h)
  - Exercício 1: Acrescente duração média em milissegundos ao relatório.
  - Exercício 2: Descreva evidências antes de forçar um plano anterior para uma consulta que regrediu.
  - Exercício 3: Registre opções iniciais e proponha como encerrar o experimento sem apagar histórico indiscriminadamente.
- Aula 29: **DMVs, bloqueios e Extended Events** — Coletar evidência de espera e reconhecer limites de privilégios e de uma fotografia pontual. (6 h)
  - Exercício 1: Repita o ensaio da aula 20 com A mantendo alteração sem commit, B esperando e uma terceira conexão observando a DMV.
  - Exercício 2: Localize o gráfico do deadlock da aula 21 em system_health ou numa sessão Extended Events preparada pelo operador.
  - Exercício 3: Escreva uma ordem de investigação antes de decidir por KILL.
- Aula 30: **Integridade, manutenção e SQL Server Agent** — Projetar tarefas verificáveis com duração, resultado e resposta a falhas. (6 h)
  - Exercício 1: Execute CHECKDB no laboratório e registre duração e estado de conclusão, sem usar opção de reparo.
  - Exercício 2: No SQL Server Agent do laboratório, crie job que rode SELECT DB_NAME() e falhe controladamente em um segundo teste com THROW.
  - Exercício 3: Proponha manutenção para banco de pedidos considerando backup, CHECKDB e estatísticas.

**Projeto:** Roteiro de investigação operacional

- Relatório de uma consulta e seus planos no Query Store.
- Captura de bloqueio de laboratório com origem identificada.
- Tarefa de manutenção com resultado, duração e alerta.

**Critérios de conclusão**

- Unidades de duração e população da amostra estão claras.
- Permissões de leitura operacional são separadas de administração.
- Manutenção não se reduz a reconstruir todos os índices.

## Nível 11 — Evolução e disponibilidade

Versione esquemas e avalie histórico e continuidade com seus limites.

**Aulas e objetivos**

- Aula 31: **Migrações versionadas e idempotência** — Aplicar uma mudança de esquema uma vez, preservando dados e tornando a repetição observável. (6 h)
  - Exercício 1: Adicione email nvarchar(120) NULL em migração de versão 2 e execute duas vezes.
  - Exercício 2: Antes de gravar a versão, introduza THROW numa migração de teste e observe rollback.
  - Exercício 3: Planeje tornar email obrigatório sem quebrar uma versão antiga da aplicação que ainda o omite.
- Aula 32: **Tabelas temporais e histórico** — Consultar versões de uma linha e definir retenção sem tratar histórico como backup independente. (6 h)
  - Exercício 1: Atualize valor para 30 em outra transação e consulte o histórico.
  - Exercício 2: Descreva e execute a limpeza somente dos objetos desta aula depois de salvar evidências.
  - Exercício 3: Defina por quanto tempo o projeto precisa de histórico e quem pode consultá-lo/alterá-lo.
- Aula 33: **Always On e decisões de disponibilidade** — Projetar continuidade com modos de confirmação, dependências e testes de falha definidos. (6 h)
  - Exercício 1: Desenhe duas instâncias e um caminho de conexão para a aplicação, indicando modo e dependências.
  - Exercício 2: Escreva roteiro de teste de failover para um ambiente de AG já autorizado.
  - Exercício 3: Explique um caso em que failover para réplica assíncrona pode perder dados reconhecidos na primária.

**Projeto:** Plano de evolução e continuidade

- Migração repetível com registro de versão e validação.
- Tabela temporal com teste de histórico e política de retenção.
- Desenho de disponibilidade com modos, dependências e ensaio proposto.

**Critérios de conclusão**

- Migração aplicada duas vezes preserva dados.
- Histórico não é tratado como backup independente.
- Desenho de AG não é apresentado como cluster implantado.

## Nível 12 — Projeto integrado

Combine integridade, idempotência, testes e evidências operacionais em um sistema pequeno.

**Aulas e objetivos**

- Aula 34: **Pedido e outbox na mesma transação** — Persistir mudança de negócio e intenção de evento atomicamente, sem confundir com entrega externa única. (6 h)
  - Exercício 1: Introduza THROW após INSERT do pedido e antes da outbox e confira as duas tabelas.
  - Exercício 2: Projete tabelas permanentes Pedido e Outbox com vínculo, estado de publicação e data de criação.
  - Exercício 3: Descreva tratamento se o mesmo evento_id chegar duas vezes ao consumidor.
- Aula 35: **Idempotência e concorrência otimista** — Detectar atualização obsoleta e definir uma chave de repetição para solicitações. (6 h)
  - Exercício 1: Releia a versão após o conflito e tente a alteração para 30.
  - Exercício 2: Modele solicitação com chave_idempotencia única e teste duas inserções da mesma chave.
  - Exercício 3: Transforme a tabela temporária em dbo.ForgeA35 e faça duas sessões lerem a mesma versão antes de atualizar.
- Aula 36: **Validação integrada e roteiro operacional** — Entregar um projeto com evidências de correção, acesso, desempenho e recuperação. (6 h)
  - Exercício 1: Escreva e execute ao menos dez cenários do projeto: válido, valor inválido, FK inválida, duplicata, repetição, conflito, acesso negado, outbox, rollback e recuperação.
  - Exercício 2: Escolha o relatório mais importante e entregue resultado esperado, índice candidato e plano/leituras sob massa documentada.
  - Exercício 3: Escreva as instruções para outra pessoa instalar, testar, operar e recuperar o banco em ambiente de desenvolvimento.

**Projeto:** Banco de pedidos pronto para revisão

- Repositório de scripts com instalação, migração e dados fictícios.
- Fluxo de pedido e outbox atômicos com testes de falha e repetição.
- Dossiê com plano, permissões, restauração medida e decisões de arquitetura.

**Critérios de conclusão**

- Repetir a mesma solicitação não duplica o pedido.
- Conflito concorrente é detectado sem sobrescrever silenciosamente.
- Conclusões distinguem o que foi executado, simulado e apenas projetado.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [SQL Server 2022: edições](https://learn.microsoft.com/en-us/sql/sql-server/editions-and-components-of-sql-server-2022?view=sql-server-ver16) — Escopo da edição Developer e recursos por edição.
- [Referência T-SQL](https://learn.microsoft.com/en-us/sql/t-sql/language-reference?view=sql-server-ver16) — Contratos de tipos, consultas, objetos e instruções.
- [sqlcmd](https://learn.microsoft.com/en-us/sql/tools/sqlcmd/sqlcmd-utility?view=sql-server-ver16) — Variantes, conexão, arquivos e tratamento de erros do cliente.
- [Bloqueios e versões](https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-transaction-locking-and-row-versioning-guide?view=sql-server-ver16) — Isolamento, locks e concorrência no SQL Server.
- [Query Store](https://learn.microsoft.com/en-us/sql/relational-databases/performance/monitoring-performance-by-using-the-query-store?view=sql-server-ver16) — Histórico de consultas, planos, execução e regressões.
- [Backup e restauração](https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/back-up-and-restore-of-sql-server-databases?view=sql-server-ver16) — Cadeias de backup, modelos de recuperação e ensaios de restauração.
- [Continuidade](https://learn.microsoft.com/en-us/sql/database-engine/sql-server-business-continuity-dr?view=sql-server-ver16) — Always On, recuperação de desastres e seus limites.
- [Query Store: permissões e unidades](https://learn.microsoft.com/en-us/sql/relational-databases/system-catalog-views/sys-query-store-runtime-stats-transact-sql?view=sql-server-ver16) — Catálogos, estatísticas agregadas e VIEW DATABASE PERFORMANCE STATE no SQL Server 2022.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Pedidos e relatórios em T-SQL

Um banco SQL Server 2022 recebe nomes com acentos, cria pedidos com itens e precisa listar clientes sem movimento. A saída da escrita deve identificar a operação correta.

**Aulas necessárias**

- Aula 02 — Tipos, Unicode e aritmética
- Aula 04 — Tabelas e constraints
- Aula 05 — Chaves estrangeiras e cardinalidade
- Aula 06 — INSERT, UPDATE, DELETE e OUTPUT
- Aula 08 — JOIN e preservação de linhas
- Aula 09 — GROUP BY, HAVING e agregações

**Conceitos combinados:** Unicode e domínio; FK e OUTPUT; Junção e contagem.

### Combo 2 — Carga de documentos e auditoria por conjunto

Uma rotina importa itens JSON e atualiza várias linhas. O relatório precisa de acumulados por pedido e a equipe investiga uma consulta de busca.

**Aulas necessárias**

- Aula 11 — Funções de janela e paginação
- Aula 12 — JSON_VALUE, JSON_QUERY e OPENJSON
- Aula 14 — Procedimentos e validação de entrada
- Aula 15 — Triggers baseadas em conjuntos
- Aula 16 — Índices rowstore, INCLUDE e filtro
- Aula 17 — Planos reais, estatísticas e leituras

**Conceitos combinados:** OPENJSON e janela; Rotinas e triggers; Índice e plano.

### Combo 3 — Transações e autorização em disputa

O serviço faz alterações concorrentes, executa SQL dinâmico com valores do usuário e aplica isolamento de linhas por identidade. É preciso tratar erros sem ampliar privilégios.

**Aulas necessárias**

- Aula 19 — Transação, XACT_ABORT e TRY CATCH
- Aula 20 — Isolamento, bloqueios e versões
- Aula 21 — Deadlocks e repetição limitada
- Aula 22 — Usuários, roles e menor privilégio
- Aula 23 — SQL dinâmico com parâmetros
- Aula 24 — Segurança em nível de linha

**Conceitos combinados:** Falha transacional; Autorização e parâmetros; Isolamento.

### Combo 4 — Restore, regressão e mudança compatível

O serviço possui backup-base e logs, Query Store e migrations. Uma atualização de cliente usa versão otimista; o procedimento operacional precisa separar dados recuperados e desempenho.

**Aulas necessárias**

- Aula 25 — Modelos de recuperação e backup completo
- Aula 26 — Restauração em outro banco e verificação
- Aula 27 — Backup de log e recuperação no tempo
- Aula 28 — Query Store e regressões
- Aula 31 — Migrações versionadas e idempotência
- Aula 35 — Idempotência e concorrência otimista

**Conceitos combinados:** Cadeia de recuperação; Evidência funcional e plano; Versão de esquema e de linha.

### Projeto final — Pedidos com outbox e recuperação no SQL Server

Implemente um banco de pedidos e estoque em SQL Server 2022 Developer para ensaio local. Uma mudança de pedido deve poder registrar seu evento na mesma unidade de trabalho, sem depender de envio externo dentro da transação.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Modelo e entrada: constraints, referências, Unicode e valores de domínio são validados no esquema e nos procedimentos.
- Unidade transacional: pedido, baixa e outbox são coordenados com TRY/CATCH e encerramento correto após falha.
- Concorrência e repetição: atualização otimista ou lock protege estoque e retries idempotentes não duplicam efeitos.
- Leitura e acesso: consultas preservam granularidade, parâmetros separam valores e roles/RLS são testadas para permitidos e recusados.
- Evolução e investigação: migration versionada, plano/Query Store e diagnóstico de bloqueios acompanham a entrega.
- Recuperação: backup completo e restauração em destino separado são verificados; recuperação no tempo só é declarada após ensaio real com a cadeia correta.

**Entregáveis**

- DDL, procedimentos, outbox, fixtures e migrations.
- Cliente parametrizado com contratos de conflito e repetição.
- Testes funcionais, concorrentes e de autorização; evidências de planos/Query Store.
- Runbook operacional com caminhos do servidor, permissões, cópias e verificação do destino.

**Critérios práticos**

- **Modelo e entrada:** Modelo e entrada: constraints, referências, Unicode e valores de domínio são validados no esquema e nos procedimentos.
- **Unidade transacional:** Unidade transacional: pedido, baixa e outbox são coordenados com TRY/CATCH e encerramento correto após falha.
- **Concorrência e repetição:** Concorrência e repetição: atualização otimista ou lock protege estoque e retries idempotentes não duplicam efeitos.
- **Leitura e acesso:** Leitura e acesso: consultas preservam granularidade, parâmetros separam valores e roles/RLS são testadas para permitidos e recusados.
- **Evolução e investigação:** Evolução e investigação: migration versionada, plano/Query Store e diagnóstico de bloqueios acompanham a entrega.
- **Recuperação:** Recuperação: backup completo e restauração em destino separado são verificados; recuperação no tempo só é declarada após ensaio real com a cadeia correta.

**Testes de aceitação para executar localmente**

#### Falha entre pedido e evento

- Preparação: Fixture de estoque e nenhuma operação de teste aplicada.
- Entrada/ação: Provocar erro após alteração de pedido, antes de concluir a outbox.
- Resultado esperado: A unidade é desfeita; pedido, estoque e evento permanecem coerentes, sem transação aberta.

#### Atualização obsoleta

- Preparação: Duas leituras da mesma linha com a mesma versão inicial.
- Entrada/ação: Aplicar a primeira atualização e tentar a segunda com a versão antiga.
- Resultado esperado: A segunda não altera a linha e a API trata conflito; não anuncia sucesso silencioso.

#### Restore em destino distinto

- Preparação: Backup-base real e diretórios/nomes lógicos verificados no servidor.
- Entrada/ação: Restaurar em banco exclusivo e consultar marcadores, contagens e regras conhecidas.
- Resultado esperado: Destino fica acessível e contém o ponto esperado; VERIFYONLY sozinho não é tratado como esse resultado.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
