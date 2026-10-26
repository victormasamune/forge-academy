# Plano de ensino — C#

Do primeiro programa à modelagem, aos serviços locais e à investigação de aplicações .NET, com tipos, testes, assincronismo e contratos claros.

**Carga estimada:** 288 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Nenhuma experiência prévia em C# é obrigatória; a trilha apresenta a sintaxe necessária.
- Computador com SDK .NET 10 LTS atualizado, terminal e editor de texto. O runtime sozinho não substitui o SDK.
- Acesso à internet para instalar o SDK e consultar documentação; os exemplos usam a biblioteca padrão e dados fictícios.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Ambiente, valores e decisões | 24 | 1–3 | Cartão e orçamento de estudo |
| 02 | Fluxo, funções e validação | 24 | 4–6 | Calculadora de orçamento validada |
| 03 | Coleções e contratos genéricos | 24 | 7–9 | Catálogo de equipamentos em memória |
| 04 | Modelagem e composição | 24 | 10–12 | Modelo de ordem de serviço |
| 05 | Consultas, texto e cultura | 24 | 13–15 | Relatório de serviços e custos |
| 06 | Erros, recursos e testes | 24 | 16–18 | Regras de estoque verificadas |
| 07 | Arquivos e persistência local | 24 | 19–21 | Importador e backup de estoque |
| 08 | Assincronismo e cancelamento | 24 | 22–24 | Importação assíncrona cancelável |
| 09 | HTTP e fronteiras de entrada | 24 | 25–27 | Cliente e laboratório HTTP de ordens |
| 10 | Concorrência e coordenação | 24 | 28–30 | Processador limitado de ordens |
| 11 | Desempenho e diagnóstico | 24 | 31–33 | Investigação de relatório lento |
| 12 | Arquitetura e entrega | 24 | 34–36 | Oficina C#: ordens e estoque |

## Nível 01 — Ambiente, valores e decisões

Execute pequenos programas, acompanhe valores e transforme uma regra simples em uma decisão.

**Aulas e objetivos**

- Aula 01: **Seu primeiro projeto e a execução em .NET** — Criar um projeto console e distinguir SDK, linguagem, runtime e saída. (8 h)
  - Exercício 1: Imprima seu nome e seu objetivo de estudo em duas linhas. Registre os comandos de criação e execução.
  - Exercício 2: Troque WriteLine por Writeline, tente compilar e explique o diagnóstico. Depois corrija.
  - Exercício 3: Antes de executar, acrescente Console.WriteLine(aluno + " / " + aluno) e escreva a terceira linha esperada.
- Aula 02: **Valores, tipos e conversões** — Escolher int, decimal e bool e reconhecer os efeitos de uma conversão. (8 h)
  - Exercício 1: Imprima (decimal)(5 / 2) e (decimal)5 / 2 com duas casas e cultura invariável.
  - Exercício 2: Calcule o custo de 7 horas a 18.90m por hora e imprima duas casas.
  - Exercício 3: Declare var quantidade = 3 e tente atribuir uma string. Explique por que a compilação rejeita.
- Aula 03: **Condições, intervalos e ausência** — Ordenar decisões e tratar explicitamente valores ausentes. (8 h)
  - Exercício 1: Classifique -1, 0, 4, 5, 6, 7, 10 e 11 e escreva a tabela de resultados.
  - Exercício 2: Mova nota >= 5 antes de nota >= 7 e investigue nota7.
  - Exercício 3: Compare null, "" e "   " com ?? e string.IsNullOrWhiteSpace.

**Projeto:** Cartão e orçamento de estudo

- Projeto console .NET 10 com instruções reproduzíveis.
- Cálculo de horas e custo de estudo usando tipos adequados.
- Três cenários de entrada com resultado previsto e real.

**Critérios de conclusão**

- Distingue terminal, código-fonte, compilação e saída.
- Evita divisão inteira indevida e usa decimal para valores monetários.
- Explica a escolha de cada ramo nas entradas de fronteira.

## Nível 02 — Fluxo, funções e validação

Divida a solução em funções pequenas e controle repetições e entradas inválidas.

**Aulas e objetivos**

- Aula 04: **Laços, limites e acumuladores** — Percorrer uma sequência finita e explicar como um acumulador evolui. (8 h)
  - Exercício 1: Monte uma tabela de i e total após cada iteração do primeiro laço.
  - Exercício 2: Troque horas por um array vazio e preveja a segunda saída.
  - Exercício 3: Conte quantas horas no array {0,2,4,1} são >=2.
- Aula 05: **Funções, parâmetros e retornos** — Separar cálculo e apresentação com funções de contrato pequeno. (8 h)
  - Exercício 1: Crie CalcularComDesconto que recebe custo e percentual entre0 e100 e retorna decimal.
  - Exercício 2: Remova static de uma função local e faça-a usar uma variável externa. Compare com a versão estática.
  - Exercício 3: Chame CalcularCusto com -1 e identifique se houve retorno numérico.
- Aula 06: **Conversão de entrada e validação** — Distinguir falha de formato, ausência e valor fora do domínio. (8 h)
  - Exercício 1: Teste null, "", "0", "-1", "24" e "25" na função.
  - Exercício 2: Produza um resultado com motivo "formato" ou "intervalo" sem alterar a regra0..24.
  - Exercício 3: Leia uma linha com Console.ReadLine e aplique a função, tratando o fim da entrada.

**Projeto:** Calculadora de orçamento validada

- Funções com entradas e retornos explícitos.
- Laço que processa uma sequência finita de registros.
- Validação de valores ausentes, textuais e fora do domínio.

**Critérios de conclusão**

- Laços terminam e respeitam os limites definidos.
- Falhas de formato não são tratadas como zero válido.
- Funções centrais podem ser chamadas sem depender do Console.

## Nível 03 — Coleções e contratos genéricos

Escolha estruturas de dados pelo contrato de consulta, atualização e identidade.

**Aulas e objetivos**

- Aula 07: **Arrays, listas e referências compartilhadas** — Escolher entre tamanho fixo e coleção dinâmica e observar cópias. (8 h)
  - Exercício 1: Desenhe quais variáveis apontam para qual lista antes e depois de alias[0]=9.
  - Exercício 2: Remova os valores negativos de List<int>{3,-1,0,-2} sem modificar a lista de forma inválida durante foreach.
  - Exercício 3: Repita a cópia com List<Caixa>, onde Caixa tem uma propriedade mutável Quantidade. Altere uma caixa na cópia.
- Aula 08: **Dicionários, conjuntos e identidade** — Definir política de chaves, presença e duplicatas. (8 h)
  - Exercício 1: Consulte AB-1 e ZZ-9 e mostre mensagens diferentes para saldo0 e chave ausente.
  - Exercício 2: Compare o comportamento de Ordinal e OrdinalIgnoreCase ao inserir OS-1 e os-1 num HashSet.
  - Exercício 3: Escolha uma política de rejeição para um ID repetido e implemente sem sobrescrever o registro anterior.
- Aula 09: **Generics, predicados e contratos reutilizáveis** — Criar uma função genérica e receber comportamento por um delegate. (8 h)
  - Exercício 1: Use Primeiro para encontrar o primeiro decimal maior que100m em uma sequência.
  - Exercício 2: Busque um valor maior que10 em {1,2}. Registre o contrato de falha.
  - Exercício 3: Conte quantas vezes o predicado é chamado ao buscar n>3 em {1,4,7}.

**Projeto:** Catálogo de equipamentos em memória

- Lista ordenada de registros e índice por identificador.
- Detecção de duplicatas com política explícita de comparação.
- Função genérica de busca com predicado.

**Critérios de conclusão**

- Diferencia índice de lista e chave de dicionário.
- Não modifica coleção durante enumeração incompatível.
- Trata ausência e duplicidade sem silenciar inconsistências.

## Nível 04 — Modelagem e composição

Proteja regras de domínio e componha dependências com fronteiras pequenas.

**Aulas e objetivos**

- Aula 10: **Classes, estado e invariantes** — Encapsular uma regra de estoque em operações controladas. (8 h)
  - Exercício 1: Teste quantidades0,-1,3 e4 a partir de saldo3, usando uma instância nova por caso.
  - Exercício 2: Tente criar Estoque(-1) e explique qual garantia isso preserva.
  - Exercício 3: Crie uma função que converte texto em quantidade e só então chama Baixar.
- Aula 11: **Records, igualdade e cópias rasas** — Distinguir igualdade por valor, identidade e compartilhamento interno. (8 h)
  - Exercício 1: Compare a==b, ReferenceEquals(a,b) e a==(a with {Status="fechada"}).
  - Exercício 2: Crie copia com uma nova lista de evidências e acrescente uma evidência só nela.
  - Exercício 3: Use um padrão para reconhecer Resumo com Status="aberta" e Id="OS-1".
- Aula 12: **Interfaces e composição de dependências** — Desacoplar um caso de uso do armazenamento concreto. (8 h)
  - Exercício 1: Implemente IConsultaOrdens para sempre devolver uma ordem fechada com o ID recebido.
  - Exercício 2: Explique a diferença entre Buscar retornar null e lançar uma falha de acesso.
  - Exercício 3: Proponha uma assinatura para uma consulta remota com cancelamento.

**Projeto:** Modelo de ordem de serviço

- Modelo com estado e operações de domínio validadas.
- Registro de dados para transporte e demonstração de igualdade.
- Caso de uso recebendo uma interface de consulta.

**Critérios de conclusão**

- Estado inválido é rejeitado na fronteira definida.
- Explica igualdade de valor e compartilhamento de referências.
- Testa o caso de uso com implementação em memória.

## Nível 05 — Consultas, texto e cultura

Produza relatórios previsíveis sem esconder quando a consulta é executada.

**Aulas e objetivos**

- Aula 13: **LINQ e o momento da execução** — Distinguir uma consulta adiada de um resultado materializado. (8 h)
  - Exercício 1: Enumere consulta, adicione4 e enumere de novo. Anote os resultados.
  - Exercício 2: Acrescente um contador ao predicado e compare duas enumerações com uma única materialização.
  - Exercício 3: Explique o que aconteceria se um record da lista materializada contivesse uma List compartilhada.
- Aula 14: **Agrupamentos, totais e relatórios** — Agregar dados com uma política clara de vazio, ordem e comparação. (8 h)
  - Exercício 1: Acrescente a quantidade de serviços ao lado do total de cada técnico.
  - Exercício 2: Crie uma consulta de serviços sem resultados e defina um contrato para média.
  - Exercício 3: Substitua o nome do técnico por um ID e mantenha o nome só para apresentação.
- Aula 15: **Strings, Unicode e cultura explícita** — Separar texto de identidade, apresentação e unidades Unicode. (8 h)
  - Exercício 1: Compare os-1 e OS-1 com Ordinal e OrdinalIgnoreCase e justifique a escolha para um ID.
  - Exercício 2: Gere uma linha de arquivo com12.5m usando ponto e duas casas, independente da cultura atual.
  - Exercício 3: Investigue StringInfo.GetTextElementEnumerator para contar elementos textuais em uma string curta com acento composto.

**Projeto:** Relatório de serviços e custos

- Consulta filtrada e ordenada com momento de materialização definido.
- Totais e agrupamentos por técnico com casos vazios.
- Formato de exportação e comparadores textuais explícitos.

**Critérios de conclusão**

- Demonstra alteração de origem antes e depois de ToList.
- Não calcula média vazia sem política definida.
- Resultado exportado independe da cultura da máquina.

## Nível 06 — Erros, recursos e testes

Separe falhas esperadas, liberação de recursos e evidência de correção.

**Aulas e objetivos**

- Aula 16: **Exceções, contexto e responsabilidade** — Preservar a causa de uma falha e traduzi-la na fronteira adequada. (8 h)
  - Exercício 1: Adicione uma mensagem após a chamada que lança dentro do try e explique por que ela não aparece.
  - Exercício 2: Compare throw; e throw erro; dentro de um catch em uma experiência local e observe a pilha.
  - Exercício 3: Defina uma mensagem humana para arquivo inválido sem mostrar caminho privado ou conteúdo do arquivo.
- Aula 17: **using, IDisposable e liberação de recursos** — Garantir descarte de recursos mesmo quando a execução falha. (8 h)
  - Exercício 1: Remova o throw e observe o descarte no caminho normal.
  - Exercício 2: Escreva uma função que recebe TextWriter e imprime uma linha sem fechá-lo.
  - Exercício 3: Chame Dispose duas vezes na instância didática e explique a guarda.
- Aula 18: **Testes determinísticos e asserções de domínio** — Verificar resultados e rejeições sem depender de um framework externo. (8 h)
  - Exercício 1: Adicione um teste para baixar exatamente o saldo e outro para quantidade0.
  - Exercício 2: Troque saldo - quantidade por saldo + quantidade e execute os testes.
  - Exercício 3: Proponha uma função que recebe Func<DateTimeOffset> para registrar a criação de uma ordem.

**Projeto:** Regras de estoque verificadas

- Regra de baixa com testes de sucesso e rejeição.
- Recurso descartável liberado mesmo após exceção.
- Runner didático que termina com falha quando uma asserção não passa.

**Critérios de conclusão**

- Não captura Exception para continuar com estado corrompido.
- Usa throw; ao relançar e preserva contexto útil.
- Testes não dependem de relógio real ou ordem acidental.

## Nível 07 — Arquivos e persistência local

Leia e grave dados com contrato de formato e restauração validada.

**Aulas e objetivos**

- Aula 19: **Arquivos, caminhos e pastas de laboratório** — Ler e gravar dados respeitando propriedade e ciclo de vida. (8 h)
  - Exercício 1: Imprima Environment.CurrentDirectory e compare com a pasta temporária usada.
  - Exercício 2: Antes da gravação, tente ler outro nome dentro da pasta temporária e trate FileNotFoundException no local adequado.
  - Exercício 3: Grave três linhas de dados e leia com File.ReadLines para enumerar sem carregar deliberadamente todo o arquivo de uma vez.
- Aula 20: **JSON, DTOs e validação após desserialização** — Traduzir um formato de dados sem confiar automaticamente em suas regras de domínio. (8 h)
  - Exercício 1: Teste ID null, ID com espaços, quantidade-1 e quantidade1001 usando JSON separado para cada caso.
  - Exercício 2: Remova uma aspa do JSON e diferencie JsonException de uma rejeição de domínio.
  - Exercício 3: Acrescente "Admin":true à entrada e explique por que não deve conceder permissão.
- Aula 21: **Snapshots, versões e restauração validada** — Validar uma cópia de dados antes de substituir o estado em uso. (8 h)
  - Exercício 1: Tente restaurar dois itens com o mesmo ID e quantidades diferentes. Verifique o estado atual após a rejeição.
  - Exercício 2: Proponha um fluxo para guardar a cópia anterior antes de substituir um snapshot em arquivo.
  - Exercício 3: Defina o que seu programa faz quando encontra Versao3.

**Projeto:** Importador e backup de estoque

- Leitura e gravação em pasta de laboratório isolada.
- DTO de entrada validado após desserialização.
- Snapshot versionado e plano de restauração com cópia de recuperação.

**Critérios de conclusão**

- Libera arquivos e remove apenas a própria pasta temporária.
- JSON válido não é confundido com regra de negócio válida.
- Não substitui estado atual por snapshot rejeitado.

## Nível 08 — Assincronismo e cancelamento

Componha operações sem bloquear a thread e trate cancelamento como parte do contrato.

**Aulas e objetivos**

- Aula 22: **Task, async e composição com await** — Compor operações assíncronas distinguindo espera, concorrência e CPU. (8 h)
  - Exercício 1: Use atrasos diferentes nas duas operações e mantenha a ordem das tarefas em WhenAll.
  - Exercício 2: Altere para aguardar a primeira chamada antes de iniciar a segunda e explique a diferença estrutural.
  - Exercício 3: Faça uma das tarefas lançar InvalidOperationException e trate a falha no await do conjunto.
- Aula 23: **Cancelamento cooperativo e limite de espera** — Propagar CancellationToken até a operação e distinguir prazo e defeito. (8 h)
  - Exercício 1: Troque Cancel por CancelAfter(20) e mantenha Delay(1000,token). Registre o caminho observado.
  - Exercício 2: Remova o token de Task.Delay e explique por que a origem cancelada não muda essa espera.
  - Exercício 3: Proponha cancelamento por usuário e por prazo usando CreateLinkedTokenSource.
- Aula 24: **Sequências assíncronas e consumo incremental** — Produzir e consumir IAsyncEnumerable sem materializar toda a sequência. (8 h)
  - Exercício 1: Pare a enumeração após receber2 e acrescente um finally no produtor para registrar encerramento.
  - Exercício 2: Use WithCancellation com um token já cancelado e trate OperationCanceledException.
  - Exercício 3: Descreva como processar100mil registros um por vez sem guardar todos numa List.

**Projeto:** Importação assíncrona cancelável

- Funções async com Task e retornos observáveis.
- Cancelamento propagado até a operação que espera.
- Sequência assíncrona consumida incrementalmente.

**Critérios de conclusão**

- Explica por que async não torna cálculo de CPU paralelo.
- Evita Result e Wait em fluxo assíncrono sem justificativa.
- Encerra operações e recursos após cancelamento.

## Nível 09 — HTTP e fronteiras de entrada

Traduza contratos de rede e dados não confiáveis sem misturar permissão com formato.

**Aulas e objetivos**

- Aula 25: **HttpClient, status e respostas controladas** — Separar transporte, status HTTP e interpretação do conteúdo. (8 h)
  - Exercício 1: Faça o handler devolver503 para uma terceira rota e verifique o caminho de erro do consumidor.
  - Exercício 2: Devolva status200 com JSON malformado e observe a falha de interpretação.
  - Exercício 3: Passe um token já cancelado à chamada e observe o comportamento do handler/cliente.
- Aula 26: **API local com ASP.NET Core e encerramento** — Executar uma rota HTTP real em loopback com projeto e ciclo de vida corretos. (8 h)
  - Exercício 1: Faça uma segunda chamada para /ordens/OS-9 e confira o status.
  - Exercício 2: Adapte o laboratório para acesso manual com porta fixa local e interrupção por Ctrl+C, documentando a mudança.
  - Exercício 3: Planeje uma rota POST que limite corpo, valide DTO e só então invoque o caso de uso.
- Aula 27: **Validação, autenticação e autorização** — Aplicar regras de acesso a uma identidade já verificada sem confiar no corpo do pedido. (8 h)
  - Exercício 1: Teste o dono da OS com papel desconhecido e outro técnico com papel tecnico.
  - Exercício 2: Escreva uma tabela com admin, dono técnico, outro técnico e usuário sem papel permitido.
  - Exercício 3: Valide o ID da ordem antes da busca sem misturar o usuário autenticado ao DTO.

**Projeto:** Cliente e laboratório HTTP de ordens

- Cliente que trata status e conteúdo separadamente.
- Laboratório HTTP local com limite de leitura e encerramento.
- Regra de consulta que recebe identidade autenticada e verifica propriedade.

**Critérios de conclusão**

- Não trata todo status HTTP como sucesso de transporte.
- Não expõe o servidor de estudo fora de loopback.
- Distingue validação, autenticação e autorização.

## Nível 10 — Concorrência e coordenação

Controle acesso a estado compartilhado e limite o trabalho em andamento.

**Aulas e objetivos**

- Aula 28: **Estado compartilhado e operação atômica com lock** — Proteger a decisão e a alteração de saldo na mesma região crítica. (8 h)
  - Exercício 1: Execute dez tentativas de baixar1 a partir de saldo5 e aguarde todas.
  - Exercício 2: Explique a falha se o teste de saldo ficar fora do lock e só a subtração ficar dentro.
  - Exercício 3: Descreva o que muda quando dois processos mantêm instâncias separadas de Estoque.
- Aula 29: **Channels e filas com capacidade** — Conectar produtor e consumidor com pressão de fluxo e encerramento. (8 h)
  - Exercício 1: Troque a capacidade para1 e mantenha a soma esperada.
  - Exercício 2: Faça o consumidor lançar após o primeiro item e confira que o produtor não fica preso esperando espaço.
  - Exercício 3: Explique por que capacidade100 não limita a memória a100bytes.
- Aula 30: **Trabalho de CPU e limites de paralelismo** — Separar agendamento de CPU e espera assíncrona e conferir o resultado. (8 h)
  - Exercício 1: Compare Somar com a fórmula n*(n+1)/2 usando long para uma faixa de entradas.
  - Exercício 2: Passe um token já cancelado para Somar e registre o caminho de interrupção.
  - Exercício 3: Descreva uma estratégia para processar muitos relatórios com no máximo quatro cálculos simultâneos.

**Projeto:** Processador limitado de ordens

- Operação de estoque com decisão e alteração na mesma região crítica.
- Fila limitada com conclusão e consumo até o fim.
- Comparação documentada de trabalho síncrono e agendamento de CPU.

**Critérios de conclusão**

- Não supõe que coleção concorrente torna várias operações uma transação.
- Não aguarda dentro de lock nem usa recurso público como trava.
- Define capacidade, cancelamento e encerramento da fila.

## Nível 11 — Desempenho e diagnóstico

Investigue comportamento com resultado correto, orçamento e medidas reproduzíveis.

**Aulas e objetivos**

- Aula 31: **Medição, Release e diagnóstico de desempenho** — Medir uma operação mantendo carga e correção observáveis. (8 h)
  - Exercício 1: Rode em Release e repita a operação várias vezes, guardando entradas e medidas.
  - Exercício 2: Compare a soma iterativa com fórmula aritmética na faixa usada.
  - Exercício 3: Um serviço está lento com CPU baixa. Proponha quais evidências buscar antes de otimizar um laço.
- Aula 32: **Span, fatias e tempo de vida** — Ler uma fatia sem copiar os elementos e explicar suas restrições. (8 h)
  - Exercício 1: Crie uma cópia com ToArray antes da mudança no array e compare os resultados.
  - Exercício 2: Teste fatias com início e comprimento inválidos num laboratório separado e explique a rejeição.
  - Exercício 3: Planeje uma API que precisa reter dados até depois de um await.
- Aula 33: **Logs, métricas e correlação com Activity** — Instrumentar uma operação com contexto útil e sem depender de um coletor externo. (8 h)
  - Exercício 1: Retire o registro do listener e confira se a regra continua sem tentar acessar null.
  - Exercício 2: Proponha campos para investigar uma confirmação rejeitada sem registrar token ou comprovante pessoal.
  - Exercício 3: Descreva uma métrica de confirmações por resultado sem criar um nome de métrica por ID de ordem.

**Projeto:** Investigação de relatório lento

- Medição em Release com carga e resultado conferidos.
- Processamento de fatia sem cópia usando Span.
- Eventos e correlação com dados fictícios e campos úteis.

**Critérios de conclusão**

- Não conclui melhora com uma única execução cronometrada.
- Explica tempo de vida e limites de uso de Span.
- Distingue log, métrica e rastreamento sem registrar segredos.

## Nível 12 — Arquitetura e entrega

Integre domínio, entrada e persistência e documente as garantias e limitações.

**Aulas e objetivos**

- Aula 34: **Casos de uso, repositórios e fronteiras** — Manter regras centrais independentes da tecnologia de entrada e persistência. (8 h)
  - Exercício 1: Implemente IOrdens para lançar uma falha controlada e defina onde ela deve ser traduzida.
  - Exercício 2: Acrescente um campo interno à Ordem e garanta que Resultado não passe a expô-lo automaticamente.
  - Exercício 3: Escreva perguntas para avaliar uma implementação EF Core dessa interface.
- Aula 35: **Idempotência e confirmação de ordens** — Impedir que repetição aplique novamente o efeito de uma confirmação. (8 h)
  - Exercício 1: Depois de pedido-1 confirmar OS-1, tente usar pedido-1 com OS-2.
  - Exercício 2: Dispare várias chamadas para confirmar OS-1, usando uma mistura de mesma chave e chaves novas.
  - Exercício 3: Descreva a falha possível se uma versão de banco baixar o saldo e gravar a chave em operações independentes.
- Aula 36: **Projeto final, backup e entrega reproduzível** — Integrar entrada, regra, snapshot e documentação com limites verificáveis. (8 h)
  - Exercício 1: Execute sem argumento e depois com dotnet run -- OS-9. Confira saída e código do processo.
  - Exercício 2: Extraia Confirmar para um módulo e teste baixa, repetição, quantidade inválida e ordem ausente sem acessar arquivo.
  - Exercício 3: Monte o projeto da trilha com README, matriz de testes, comandos, snapshot versionado e procedimento de recuperação.

**Projeto:** Oficina C#: ordens e estoque

- Aplicação local com confirmação de ordem e baixa única de estoque.
- Testes de domínio, entrada inválida e repetição de pedidos.
- README com execução, versão, backup, restauração e investigação de falhas.

**Critérios de conclusão**

- Repetir confirmação não baixa o estoque novamente.
- Documenta limites de concorrência, memória e durabilidade.
- Consegue reconstruir o ambiente e justificar as fronteiras escolhidas.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [Documentação de C#](https://learn.microsoft.com/en-us/dotnet/csharp/) — Fundamentos, tipos, sintaxe e especificação da linguagem.
- [.NET 10 LTS](https://learn.microsoft.com/en-us/dotnet/core/whats-new/dotnet-10/overview) — Base estável da trilha e recursos do SDK e runtime.
- [C# 14](https://learn.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-14) — Versão estável de linguagem associada ao .NET 10; recursos de preview não são exigidos.
- [LINQ](https://learn.microsoft.com/en-us/dotnet/csharp/linq/standard-query-operators/) — Contratos de operadores e execução de consultas.
- [Async e await](https://learn.microsoft.com/en-us/dotnet/csharp/asynchronous-programming/) — Composição assíncrona, tarefas e uso de cancelamento.
- [I/O e streams](https://learn.microsoft.com/en-us/dotnet/standard/io/) — Arquivos, caminhos, streams e ciclo de vida de recursos.
- [System.Text.Json](https://learn.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/overview) — Serialização, desserialização e contrato de dados.
- [Diagnóstico em .NET](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/) — Ferramentas oficiais para métricas, rastreamento e investigação de desempenho.
- [ASP.NET Core Minimal APIs](https://learn.microsoft.com/en-us/aspnet/core/tutorials/min-web-api?view=aspnetcore-10.0) — Projeto web, rotas e ciclo de vida do laboratório HTTP local.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Cadastro validado e consulta por identidade

Um aplicativo console recebe quantidades como texto e armazena itens por código. Ausência, zero e erro de formato devem ser estados diferentes; uma entrada recusada não pode alterar o catálogo.

**Aulas necessárias**

- Aula 02 — Valores, tipos e conversões
- Aula 03 — Condições, intervalos e ausência
- Aula 05 — Funções, parâmetros e retornos
- Aula 06 — Conversão de entrada e validação
- Aula 07 — Arrays, listas e referências compartilhadas
- Aula 08 — Dicionários, conjuntos e identidade

**Conceitos combinados:** Conversão; Funções; Coleções e presença.

### Combo 2 — Relatório LINQ com estado e recursos controlados

Um relatório agrupa registros, usa records como valores e lê um recurso descartável. A execução adiada e as cópias rasas não podem surpreender o contrato da resposta nem os testes.

**Aulas necessárias**

- Aula 11 — Records, igualdade e cópias rasas
- Aula 13 — LINQ e o momento da execução
- Aula 14 — Agrupamentos, totais e relatórios
- Aula 16 — Exceções, contexto e responsabilidade
- Aula 17 — using, IDisposable e liberação de recursos
- Aula 18 — Testes determinísticos e asserções de domínio

**Conceitos combinados:** Records; LINQ; Exceções, descarte e testes.

### Combo 3 — API, cancelamento e snapshot validado

Uma API local recebe JSON, acessa uma dependência HTTP e pode restaurar um snapshot. Identidade, autorização, validação e prazo precisam ser tratados antes de substituir o estado em uso.

**Aulas necessárias**

- Aula 20 — JSON, DTOs e validação após desserialização
- Aula 21 — Snapshots, versões e restauração validada
- Aula 23 — Cancelamento cooperativo e limite de espera
- Aula 25 — HttpClient, status e respostas controladas
- Aula 26 — API local com ASP.NET Core e encerramento
- Aula 27 — Validação, autenticação e autorização

**Conceitos combinados:** DTO e snapshots; HTTP; Cancelamento e autorização.

### Combo 4 — Fila limitada, diagnóstico e confirmação única

O serviço processa confirmações com Channels e guarda chaves de operações. O número de tarefas, as regiões críticas e as evidências de desempenho precisam preservar o mesmo resultado de negócio.

**Aulas necessárias**

- Aula 28 — Estado compartilhado e operação atômica com lock
- Aula 29 — Channels e filas com capacidade
- Aula 30 — Trabalho de CPU e limites de paralelismo
- Aula 31 — Medição, Release e diagnóstico de desempenho
- Aula 33 — Logs, métricas e correlação com Activity
- Aula 35 — Idempotência e confirmação de ordens

**Conceitos combinados:** Locks; Channels; Diagnóstico e idempotência.

### Projeto final — Central local de empréstimos em C#

Entregue uma aplicação .NET com CLI e API local para emprestar equipamentos. O mesmo domínio atende as duas interfaces, com snapshot validado, fila de trabalho limitada e confirmação repetível.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Validar identificadores, quantidades e transições por operações encapsuladas; distinguir igualdade, identidade e cópia rasa.
- Expor casos de uso por CLI/ASP.NET Core, validar DTOs e autorização antes de alterar recursos.
- Salvar um formato versionado e restaurar por estado candidato, preservando os dados necessários à garantia de repetição anunciada.
- Descartar recursos, propagar tokens de cancelamento e encerrar produtor/consumidor sem fila ou tarefa ilimitada.
- Proteger o invariante de disponibilidade e deduplicação e verificar falha, fronteira e disputa com testes determinísticos.
- Documentar SDK/projetos corretos, comandos, logs correlacionados, medições em configuração adequada e reabertura de backup.

**Entregáveis**

- Solução .NET com domínio, CLI, API e persistência separados.
- Testes e fixtures de entrada, snapshot, disputa e repetição.
- README de instalação, execução e contratos de acesso/cancelamento.
- Relatório de recuperação e de um experimento de desempenho, com limites.

**Critérios práticos**

- **Contratos de domínio:** Validar identificadores, quantidades e transições por operações encapsuladas; distinguir igualdade, identidade e cópia rasa.
- **Interface e acesso:** Expor casos de uso por CLI/ASP.NET Core, validar DTOs e autorização antes de alterar recursos.
- **Persistência e recuperação:** Salvar um formato versionado e restaurar por estado candidato, preservando os dados necessários à garantia de repetição anunciada.
- **Ciclo de vida:** Descartar recursos, propagar tokens de cancelamento e encerrar produtor/consumidor sem fila ou tarefa ilimitada.
- **Concorrência e testes:** Proteger o invariante de disponibilidade e deduplicação e verificar falha, fronteira e disputa com testes determinísticos.
- **Entrega e evidências:** Documentar SDK/projetos corretos, comandos, logs correlacionados, medições em configuração adequada e reabertura de backup.

**Testes de aceitação para executar localmente**

#### Confirmação válida e duplicata

- Preparação: Equipamento E possui 3 unidades; operação e-1 é inédita.
- Entrada/ação: Emprestar 1 unidade e repetir e-1 com o mesmo conteúdo.
- Resultado esperado: Uma confirmação, saldo 2 e resposta da operação original na repetição dentro da garantia documentada.

#### Restauração inválida

- Preparação: Estado ativo válido e snapshot com versão desconhecida ou quantidade negativa.
- Entrada/ação: Solicitar carga do snapshot.
- Resultado esperado: Erro identificável e estado anterior preservado, sem troca parcial.

#### Cancelamento e encerramento

- Preparação: Fila limitada com consumidor em operação cooperativa e registros de correlação.
- Entrada/ação: Sinalizar encerramento e aguardar até o prazo definido.
- Resultado esperado: Admissão cessa, tarefas são concluídas/canceladas segundo o contrato e não há promessa falsa de efeito externo desfeito.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
