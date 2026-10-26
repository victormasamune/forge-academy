# Plano de ensino — MongoDB

Documentos BSON, consultas, modelagem, agregações, índices e operação de MongoDB 8.0, com laboratórios locais até transações, eventos e decisões de distribuição.

**Carga estimada:** 216 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Concluir Lógica de Programação ou dominar objetos, arrays e funções simples de JavaScript.
- Fundamentos de bancos de dados ajudam a comparar integridade, índices e transações; SQL não é obrigatório para começar.
- MongoDB Community Server 8.0, mongosh 2.x compatível e Database Tools compatível para o laboratório de backup. Não é necessário contratar nuvem.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Ambiente e documentos | 18 | 1–3 | Cadastro documental de produtos |
| 02 | Consultas e contratos | 18 | 3–5 | Busca paginada do catálogo |
| 03 | Escritas atômicas | 18 | 5–7 | Controle de estoque |
| 04 | Modelagem e integridade | 18 | 7–9 | Pedidos e clientes |
| 05 | Agregação e relações | 18 | 10–12 | Relatório de vendas |
| 06 | Pipelines analíticos | 18 | 12–14 | Painel analítico |
| 07 | Índices e retenção | 18 | 14–16 | Plano de índices e sessões |
| 08 | Desempenho de consultas | 18 | 16–18 | Investigação reproduzível |
| 09 | Consistência e concorrência | 18 | 19–21 | Transferência e recebimento idempotente |
| 10 | Segurança e limites | 18 | 21–23 | Consulta segura por tenant |
| 11 | Recuperação e eventos | 18 | 23–25 | Plano operacional |
| 12 | Evolução e projeto final | 18 | 25–27 | Persistência completa do catálogo |

## Nível 01 — Ambiente e documentos

Reconheça cliente, servidor e tipos BSON antes das primeiras operações.

**Aulas e objetivos**

- Aula 01: **Conectar e persistir o primeiro documento** — Distinguir cliente, servidor e banco e verificar uma escrita. (6 h)
  - Exercício 1: Insira ID2 com nome Pedidos e consulte seu nome.
  - Exercício 2: Tente inserir ID1 novamente e explique o erro.
  - Exercício 3: Imprima banco e versão do servidor e compare com a versão do shell.
- Aula 02: **Objetos, arrays e caminhos** — Representar endereço e interesses com estrutura aninhada. (6 h)
  - Exercício 1: Inclua Rui de Olinda e liste somente nomes de Recife.
  - Exercício 2: Encontre o cadastro que contém a tag go.
  - Exercício 3: Retorne nome e cidade, sem _id ou tags.
- Aula 03: **Tipos BSON, datas e decimais** — Escolher representações e distinguir valor de formatação. (6 h)
  - Exercício 1: Busque janeiro2026 usando início inclusivo e fim exclusivo.
  - Exercício 2: Conte preco decimal e preco string.
  - Exercício 3: Inclua preço20.00 e filtre preços menores que20.00.

**Projeto:** Cadastro documental de produtos

- Scripts de conexão e carga de10 produtos fictícios.
- Tipos BSON e estrutura aninhada documentados.
- README com versões e comandos de execução.

**Critérios de conclusão**

- IDs únicos e busca por identificador.
- Datas como Date e política monetária explícita.
- Reexecução limpa apenas coleções do laboratório.

## Nível 02 — Consultas e contratos

Traduza filtros, projeções e ordenação para resultados verificáveis.

**Aulas e objetivos**

- Aula 04: **Filtros e lógica** — Traduzir regras de seleção com operadores explícitos. (6 h)
  - Exercício 1: Adicione ativos de preços9e30 e preveja o filtro original.
  - Exercício 2: Liste ativos ou preço20.
  - Exercício 3: Busque A e C com $in.
- Aula 05: **Projeção, null e ausência** — Definir o retorno e distinguir falta de campo de valor nulo. (6 h)
  - Exercício 1: Encontre somente documentos sem email.
  - Exercício 2: Retorne nome e email de Bia sem _id.
  - Exercício 3: Defina email opcional que precisa ser string quando presente.
- Aula 06: **Cursores e páginas ordenadas** — Consumir resultados e reconhecer limites da paginação por deslocamento. (6 h)
  - Exercício 1: Mostre páginas de dois itens com skip0e2.
  - Exercício 2: Imprima IDs sem toArray.
  - Exercício 3: Explique o efeito de inserir um item de preço5 entre páginas por skip.

**Projeto:** Busca paginada do catálogo

- Cinco filtros com resultados previstos.
- Projeções específicas por caso de uso.
- Páginas com desempate definido.

**Critérios de conclusão**

- Casos de fronteira de preço e estado.
- Testes separados de null e ausência.
- Ordem estável entre preços iguais.

## Nível 03 — Escritas atômicas

Altere documentos e arrays com pré-condições e resultados interpretados.

**Aulas e objetivos**

- Aula 07: **Atualizações e atomicidade** — Usar $set e $inc com pré-condição e interpretar contadores. (6 h)
  - Exercício 1: Retire mais3 e confira o estado.
  - Exercício 2: Atribua nomeA duas vezes e compare os contadores.
  - Exercício 3: Planeje um teste com duas retiradas de4 sobre estoque5.
- Aula 08: **Arrays e atualização posicional** — Reunir condições no mesmo elemento e alterar itens filtrados. (6 h)
  - Exercício 1: Antes do incremento, compare condições independentes e $elemMatch.
  - Exercício 2: Inclua tag dados duas vezes sem duplicar.
  - Exercício 3: Inclua itemC/qtd0 e remova itens com zero.
- Aula 09: **Upsert, exclusão e lotes** — Decidir criar ou alterar e reconhecer resultados parciais. (6 h)
  - Exercício 1: Atualize ativo e confira criadoEm.
  - Exercício 2: Insira B e exclua só B.
  - Exercício 3: Preveja insertC, insertA duplicado, insertD com ordered:true.

**Projeto:** Controle de estoque

- Retirada e reposição condicionais.
- Itens alterados por arrayFilters.
- Lote por chave única com relatório de falha parcial.

**Critérios de conclusão**

- Estoque não negativo nos testes.
- Repetição de importação não duplicaSKU.
- Estado final após erro do lote é demonstrado.

## Nível 04 — Modelagem e integridade

Escolha embedding ou referências e imponha contrato no servidor.

**Aulas e objetivos**

- Aula 10: **Modelagem por padrões de acesso** — Desenhar documentos a partir das leituras, mudanças e limites. (6 h)
  - Exercício 1: Liste três consultas com filtros e campos necessários.
  - Exercício 2: Defina máximo de itens por pedido e teste um acima.
  - Exercício 3: Explique por que não copiar saldo atual para todos os pedidos.
- Aula 11: **Referências e integridade** — Detectar referências sem destino e definir exclusão coordenada. (6 h)
  - Exercício 1: Mude clienteId do pedido2 para7 e repita a auditoria.
  - Exercício 2: Escolha uma regra de exclusão de cliente com pedidos.
  - Exercício 3: Busque cliente do pedido1 e trate destino ausente.
- Aula 12: **Schema validation** — Reforçar tipos e campos obrigatórios no servidor. (6 h)
  - Exercício 1: Insira estoque válido sem nome.
  - Exercício 2: Teste estoque string "2".
  - Exercício 3: Aceite precoCentavos int>=0 sem torná-lo obrigatório.

**Projeto:** Pedidos e clientes

- Inventário de consultas e estrutura dos documentos.
- Política de referências e dados históricos.
- Validador com testes positivos e negativos.

**Critérios de conclusão**

- Arrays têm limites de domínio.
- Órfãos são detectados e tratados.
- Servidor rejeita documento inválido.

## Nível 05 — Agregação e relações

Construa relatórios sem confundir a unidade de contagem.

**Aulas e objetivos**

- Aula 13: **Agregação por etapas** — Calcular grupos e acompanhar o formato intermediário. (6 h)
  - Exercício 1: Some totais por estado sem filtrar pagos.
  - Exercício 2: Calcule média de total dos pagos.
  - Exercício 3: Execute só $match e depois acrescente $group.
- Aula 14: **$unwind e subtotais** — Desdobrar itens sem confundir quantidade de linhas com pedidos. (6 h)
  - Exercício 1: Inclua outro pedido com A/qtd1 e some quantidade por SKU.
  - Exercício 2: Inclua pedido com itens:[] e compare preserveNullAndEmptyArrays.
  - Exercício 3: Defina um teste se total também é gravado no pedido.
- Aula 15: **$lookup e relações** — Associar documentos e tratar ausência de correspondência. (6 h)
  - Exercício 1: Retorne pedido e nome mantendo pedido sem cliente.
  - Exercício 2: Troque clienteId7 por string "7" e refaça lookup.
  - Exercício 3: Identifique o índice que atende o lado clientes.

**Projeto:** Relatório de vendas

- Totais por estado e porSKU.
- Associação com cliente ausente tratado.
- Cardinalidade após cada etapa documentada.

**Critérios de conclusão**

- Totais conferem manualmente.
- Pedido não é contado como item.
- Órfãos não somem quando o requisito pede mostrá-los.

## Nível 06 — Pipelines analíticos

Produza visões múltiplas, acumulados e conversões diagnosticáveis.

**Aulas e objetivos**

- Aula 16: **$facet e múltiplas visões** — Retornar página e metadados com limites definidos. (6 h)
  - Exercício 1: Faça um filtro sem resultado e trate contagem[].
  - Exercício 2: Adicione ramo com maior _id ativo.
  - Exercício 3: Explique por que limit1 na página não limita a contagem a1.
- Aula 17: **Funções de janela** — Calcular acumulados mantendo as linhas originais. (6 h)
  - Exercício 1: Calcule acumulados separados por loja.
  - Exercício 2: Preveja documents:[-1,0].
  - Exercício 3: Defina uma sequência para eventos do mesmo dia.
- Aula 18: **Conversões e períodos** — Diagnosticar valores legados e definir o fuso do relatório. (6 h)
  - Exercício 1: Retenha o original e separe valores não convertidos.
  - Exercício 2: Agrupe01:00Z e04:00Z de02jan2026 por dia em São Paulo.
  - Exercício 3: Defina campo valorInt após a migração.

**Projeto:** Painel analítico

- Página e total com limites.
- Acumulado por loja e fuso definido.
- Relatório de valores legados inválidos.

**Critérios de conclusão**

- Entrada vazia tratada.
- Acumulado reinicia por partição.
- Inválido não vira zero silencioso.

## Nível 07 — Índices e retenção

Desenhe acesso, unicidade e expiração com custos conhecidos.

**Aulas e objetivos**

- Aula 19: **Índices simples e compostos** — Criar estruturas de acesso a partir das consultas importantes. (6 h)
  - Exercício 1: Liste nome e chave de cada índice.
  - Exercício 2: Compare filtro lojaA com somente dia1.
  - Exercício 3: Defina medição antes de cinco índices novos.
- Aula 20: **Unicidade, índices parciais e multikey** — Aplicar regras de negócio a subconjuntos e conhecer índices sobre arrays. (6 h)
  - Exercício 1: Tente ativar ID2 e confira seu estado.
  - Exercício 2: Localize emails ativos duplicados antes do índice.
  - Exercício 3: Crie aula20_tags com array e índice tags:1.
- Aula 21: **TTL e retenção** — Configurar expiração sem confundi-la com autorização imediata. (6 h)
  - Exercício 1: Busque sessãoID1 somente se ainda válida.
  - Exercício 2: Explique por que uma string expiraEm é inadequada.
  - Exercício 3: Escolha políticas para sessão e pedido comercial.

**Projeto:** Plano de índices e sessões

- Mapa consulta→índice.
- Conflito de unicidade demonstrado.
- Sessões comTTL e validade na leitura.

**Critérios de conclusão**

- Índices nomeados e justificados.
- Unicidade testada no subconjunto correto.
- Expirado recusado antes da limpeza.

## Nível 08 — Desempenho de consultas

Meça esforço, cobertura e paginação antes de otimizar.

**Aulas e objetivos**

- Aula 22: **Explain e trabalho de consulta** — Ler contadores e comparar índices em uma experiência controlada. (6 h)
  - Exercício 1: Compare hint("grupo") com hint({$natural:1}).
  - Exercício 2: Explique por que10 respostas não provam eficiência.
  - Exercício 3: Observe o plano escolhido pelo otimizador.
- Aula 23: **Consultas cobertas** — Alinhar retorno e índice e verificar ausência de fetch. (6 h)
  - Exercício 1: Adicione descricao não indexada à projeção e meça.
  - Exercício 2: Busque Z e explique por que0:0 não prova a mesma cobertura.
  - Exercício 3: Justifique não incluir todos os campos num índice gigante.
- Aula 24: **Paginação por chave e busca text** — Continuar páginas pela última chave e conhecer a busca textual básica. (6 h)
  - Exercício 1: Continue depois de4 e trate vazio.
  - Exercício 2: Continue preço ascendente e ID ascendente após preço10,ID2.
  - Exercício 3: Em aula24_text, crie busca pela palavra mongodb em titulo.

**Projeto:** Investigação reproduzível

- Base fictícia e consultas limitadas.
- Planos e contadores antes/depois.
- Cursor validado e busca textual experimental.

**Critérios de conclusão**

- Retorno e esforço registrados separadamente.
- Cobertura com resultado não vazio.
- Continuação respeita ordem completa.

## Nível 09 — Consistência e concorrência

Use transações e trate confirmação incerta e repetição.

**Aulas e objetivos**

- Aula 25: **Transações entre documentos** — Transferir valores com commit e abort na mesma sessão. (6 h)
  - Exercício 1: Remova B antes da transferência e verifique A após abort.
  - Exercício 2: Tente transferir130 e registre ambos os saldos.
  - Exercício 3: Explique por que email dentro de um corpo repetível é arriscado.
- Aula 26: **Read e write concern** — Explicitar confirmação e visibilidade e separar replicação de backup. (6 h)
  - Exercício 1: Explique secondary versus majority.
  - Exercício 2: Projete API para criação cujo prazo de confirmação expirou.
  - Exercício 3: Como recuperar uma exclusão propagada a todos?
- Aula 27: **Retries e idempotência** — Impedir duplicação por repetição de requisição de negócio. (6 h)
  - Exercício 1: Defina resposta para req001 com qtd3 após aceitar qtd2.
  - Exercício 2: Crie req002 e confira quantidade.
  - Exercício 3: Planeje dois clientes criando a mesma chave simultaneamente.

**Projeto:** Transferência e recebimento idempotente

- Replica set de teste identificado.
- Testes decommit eabort da transferência.
- Reuso divergente de chave rejeitado.

**Critérios de conclusão**

- Operações transacionais na mesma sessão.
- Falha não gera crédito sem débito.
- Timeout não significa ausência de escrita.

## Nível 10 — Segurança e limites

Aplique menor privilégio e construa consultas a partir de entradas validadas.

**Aulas e objetivos**

- Aula 28: **Autenticação e roles** — Inspecionar privilégios e separar aplicação e administração. (6 h)
  - Exercício 1: Com auth habilitada, teste leitura e inserção com uma conta read.
  - Exercício 2: Escolha privilégios para catálogo somente de consulta.
  - Exercício 3: Retire escrita concedida diretamente e por role herdada.
- Aula 29: **Validação de entrada e injeção NoSQL** — Construir filtros com valores permitidos e identidade confiável. (6 h)
  - Exercício 1: Teste string vazia e81caracteres e defina regra da vazia.
  - Exercício 2: Inclua outra Lia em t2 e prove isolamento de t1.
  - Exercício 3: Aceite ordenação nome ou criadoEm com mapa fechado.
- Aula 30: **Limites, timeouts e logs** — Limitar trabalho e distinguir falhas de ausência de resultados. (6 h)
  - Exercício 1: Valide tamanho inteiro entre1e100.
  - Exercício 2: Desenhe registro de falha sem URI nem corpo do pedido.
  - Exercício 3: Compare prazo HTTP, seleção de servidor e maxTimeMS.

**Projeto:** Consulta segura por tenant

- Contas separadas de aplicação e administração.
- Entrada tipada e tenant confiável.
- Limites de página/tempo e política de logs.

**Critérios de conclusão**

- Acesso proibido testado com identidade real.
- Objeto operador rejeitado no campo string.
- Falha não vira lista vazia silenciosa.

## Nível 11 — Recuperação e eventos

Restaure dados, investigue sinais e processe eventos retomáveis.

**Aulas e objetivos**

- Aula 31: **Backup BSON e restauração** — Criar backup real e restaurar num namespace separado. (6 h)
  - Exercício 1: Crie índice nome:1 antes do dump e confira no destino.
  - Exercício 2: Mude A paraA2 na origem após o dump e restaure de novo.
  - Exercício 3: Defina objetivos e meça um ensaio de recuperação.
- Aula 32: **Observabilidade e incidentes** — Relacionar sinais e testar hipóteses sem inventar medições. (6 h)
  - Exercício 1: Compare nindexes com getIndexes().length.
  - Exercício 2: Documente uma consulta lenta sem dados pessoais.
  - Exercício 3: Investigue disco crescente com contagem estável.
- Aula 33: **Change streams e retomada** — Observar evento e planejar checkpoint e deduplicação. (6 h)
  - Exercício 1: Observe evento update ao mudar valor para8 com stream aberto.
  - Exercício 2: Defina ordem entre efeito e token.
  - Exercício 3: Defina ação se token é antigo demais.

**Projeto:** Plano operacional

- Dump real e restore separado.
- Relatório de métricas e roteiro de incidente.
- Consumidor comcheckpoint e deduplicação desenhados.

**Critérios de conclusão**

- Restore validado por dados e índices.
- Métricas variáveis não são inventadas.
- Falha entre efeito echeckpoint prevista.

## Nível 12 — Evolução e projeto final

Justifique distribuição, migre contratos e reúna evidências.

**Aulas e objetivos**

- Aula 34: **Sharding e escolha de chave** — Avaliar concentração e consultas antes de fragmentar dados. (6 h)
  - Exercício 1: Explique risco de tenant como única chave se A é90% da carga.
  - Exercício 2: Compare tenant+sku e relatório global.
  - Exercício 3: Compare perda de servidor e falta de capacidade de volume.
- Aula 35: **Migração versionada** — Converter documentos em etapas repetíveis e compatíveis. (6 h)
  - Exercício 1: Implemente apresentação que aceite versões1e2.
  - Exercício 2: Detecte versão1 restante e versão2 sem string nova.
  - Exercício 3: Planeje lote de100 e retomada.
- Aula 36: **Projeto integrado e evidências** — Reunir modelo, consultas, invariantes e operação para revisão. (6 h)
  - Exercício 1: Aplique regra e prove estoque negativo rejeitado.
  - Exercício 2: Crie cinco testes executáveis do catálogo.
  - Exercício 3: Justifique embedding, dois índices e usar ou não transação/sharding.

**Projeto:** Persistência completa do catálogo

- Scripts de criação,carga,consultas e testes.
- Migração repetível e plano de reversão.
- Relatório de modelo,índices,acesso e recuperação.

**Critérios de conclusão**

- Sharding justificado por carga e consultas.
- Validador aplicado e testado.
- Ensaios executados separados de hipóteses.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [Manual8.0](https://www.mongodb.com/docs/v8.0/) — Comandos e contratos do servidor.
- [mongosh](https://www.mongodb.com/docs/mongodb-shell/) — Cliente e execução de scripts.
- [Validação](https://www.mongodb.com/docs/v8.0/core/schema-validation/) — Regras de tipos e integridade.
- [Agregação](https://www.mongodb.com/docs/v8.0/core/aggregation-pipeline/) — Etapas e expressões.
- [Otimização](https://www.mongodb.com/docs/v8.0/core/query-optimization/) — Índices e consultas cobertas.
- [Transações](https://www.mongodb.com/docs/v8.0/core/transactions/) — Sessões e atomicidade.
- [Retryable writes](https://www.mongodb.com/docs/v8.0/core/retryable-writes/) — Garantias das repetições.
- [Controle de acesso](https://www.mongodb.com/docs/v8.0/tutorial/enable-authentication/) — Autenticação local e autorização.
- [mongodump](https://www.mongodb.com/docs/database-tools/mongodump/) — Exportação BSON.
- [mongorestore](https://www.mongodb.com/docs/database-tools/mongorestore/) — Restauração e namespaces.
- [Change streams](https://www.mongodb.com/docs/v8.0/changestreams/) — Eventos e retomada.
- [Shard key](https://www.mongodb.com/docs/v8.0/core/sharding-choose-a-shard-key/) — Distribuição e padrões de consulta.
- [Replica set de teste](https://www.mongodb.com/docs/v8.0/tutorial/deploy-replica-set-for-testing/) — Procedimento para membros locais.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Consulta e atualização de estoque

Uma coleção de produtos guarda SKU, quantidade e preço com representação definida. A API precisa consultar uma página estável e baixar estoque sem uma sequência vulnerável de leitura e regravação.

**Aulas necessárias**

- Aula 02 — Objetos, arrays e caminhos
- Aula 03 — Tipos BSON, datas e decimais
- Aula 04 — Filtros e lógica
- Aula 05 — Projeção, null e ausência
- Aula 06 — Cursores e páginas ordenadas
- Aula 07 — Atualizações e atomicidade

**Conceitos combinados:** BSON e projeção; Filtro e ordem; Escrita condicional.

### Combo 2 — Modelo, validação e relatório sem multiplicação

O catálogo tem pedidos com itens e referências a clientes. O relatório deve contar pedidos e unidades corretamente, e documentos inválidos precisam ser recusados conforme um contrato declarado.

**Aulas necessárias**

- Aula 10 — Modelagem por padrões de acesso
- Aula 11 — Referências e integridade
- Aula 12 — Schema validation
- Aula 13 — Agregação por etapas
- Aula 14 — $unwind e subtotais
- Aula 15 — $lookup e relações

**Conceitos combinados:** Padrão de acesso; Schema validation; Agregação e cardinalidade.

### Combo 3 — Índices, transação e repetição

Uma operação cria um pedido e reserva estoque em outro documento. A aplicação utiliza índices e precisa lidar com concorrência e resultado incerto após falha de comunicação.

**Aulas necessárias**

- Aula 19 — Índices simples e compostos
- Aula 20 — Unicidade, índices parciais e multikey
- Aula 22 — Explain e trabalho de consulta
- Aula 25 — Transações entre documentos
- Aula 26 — Read e write concern
- Aula 27 — Retries e idempotência

**Conceitos combinados:** Índices e custo; Transação entre documentos; Concerns e idempotência.

### Combo 4 — Acesso, evolução e retomada

A API recebe filtros externos, evolui documentos versionados e publica alterações por change streams. Um operador prepara uma cópia BSON para recuperação em outra base.

**Aulas necessárias**

- Aula 28 — Autenticação e roles
- Aula 29 — Validação de entrada e injeção NoSQL
- Aula 31 — Backup BSON e restauração
- Aula 33 — Change streams e retomada
- Aula 35 — Migração versionada
- Aula 36 — Projeto integrado e evidências

**Conceitos combinados:** Consulta controlada; Migração e eventos; Recuperação.

### Projeto final — Agenda de oficinas com inscrições idempotentes

Construa a persistência de oficinas, participantes e inscrições com vagas limitadas. O sistema precisa distinguir pedido novo, repetição idêntica e conflito; consultar relatórios e provar recuperação com dados fictícios.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Definir documentos e relações a partir das consultas, com tipos BSON e validators aplicados às coleções.
- Reservar vaga e registrar inscrição de forma consistente; quando houver múltiplos documentos, usar transação na topologia apropriada.
- Identificar a operação por chave única, comparar conteúdo em repetições e tratar falhas/resultado incerto com política limitada.
- Criar consultas paginadas e relatórios de inscrições sem duplicar medidas após $unwind/$lookup; justificar os índices com explain e dados de teste.
- Construir filtros permitidos na API e separar a identidade de aplicação da conta administrativa, demonstrando ações recusadas.
- Versionar a evolução dos documentos e ensaiar retomada/reconciliação de eventos e backup BSON restaurado em base separada.

**Entregáveis**

- Scripts de coleções, validators, índices e fixtures, com versão/topologia do laboratório.
- Cliente ou roteiro funcional das operações, entradas, consultas e respostas esperadas.
- Relatório de testes de concorrência, duplicata, recusa, explicação dos planos e limites de retomada.
- Runbook de migração, backup/restauração e conferência do destino, com logs e resultados reais.

**Critérios práticos**

- **Modelo e contrato:** A granularidade e os tipos são definidos e a validação está aplicada, não só declarada no cliente.
- **Consistência da inscrição:** Vagas e inscrição têm unidade de trabalho comprovada, com casos sem capacidade e erro intermediário.
- **Repetição controlada:** Chave, conteúdo, erros e janela de repetição fazem parte do protocolo.
- **Consulta e desempenho:** Paginação, agregação e índices mantêm resultados corretos e medições contextualizadas.
- **Acesso e diagnóstico:** Filtros e permissões limitam a operação e erros são observáveis sem credenciais nos logs.
- **Evolução recuperável:** Versionamento, eventos e cópia restaurada possuem procedimentos e limites explícitos.

**Testes de aceitação para executar localmente**

#### Duas tentativas para a última vaga

- Preparação: Crie oficina com uma vaga e duas identidades de operação diferentes; use o replica set local para o fluxo transacional.
- Entrada/ação: Dispare duas tentativas concorrentes de inscrição e consulte vagas e registros confirmados.
- Resultado esperado: Somente uma inscrição é aceita; vagas não ficam negativas e o estado rejeitado não deixa metade da operação persistida.

#### Repetição e validação de entrada

- Preparação: Prepare uma operação confirmada e fixtures inválidas para tipos/campos e estrutura de filtro.
- Entrada/ação: Repita a mesma operação com mesmo conteúdo, depois com conteúdo diferente; tente documento inválido e operador não permitido.
- Resultado esperado: Repetição idêntica não reserva outra vaga; conflito é distinguido; documento/filtro indevido é recusado com estado preservado.

#### Cópia, migração e eventos

- Preparação: Preserve documentos conhecidos, versão de schema, índices e token/estado de consumidor quando o ensaio usar change streams.
- Entrada/ação: Execute backup/restauração em base separada e confira o estado; aplique a migração prevista e ensaie retomada ou reconciliação.
- Resultado esperado: Dados, tipos e invariantes esperados coincidem no destino; migração e retomada têm resultados e limites registrados, sem prometer histórico infinito.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
