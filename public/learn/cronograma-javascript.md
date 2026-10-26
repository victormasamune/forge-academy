# Plano de ensino — JavaScript

Do primeiro script a interfaces web e serviços locais, com fundamentos, testes, assincronismo e investigação de desempenho.

**Carga estimada:** 216 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Nenhuma experiência prévia de programação é exigida.
- Computador com uma versão LTS suportada de Node.js, navegador moderno e editor de texto.
- Saber criar pastas e abrir um terminal; HTML essencial será apresentado antes dos exercícios de DOM.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Ambiente e lógica | 18 | 1–3 | Calculadora de horas de estudo |
| 02 | Funções, escopo e closures | 18 | 3–5 | Calculadora de orçamento por funções |
| 03 | Coleções e transformação | 18 | 5–7 | Relatório de estoque em memória |
| 04 | Modelagem e composição | 18 | 7–9 | Modelo de ordem de serviço |
| 05 | Módulos e protocolos | 18 | 10–12 | CLI modular de serviços |
| 06 | Erros, contratos e testes | 18 | 12–14 | Domínio de estoque com testes |
| 07 | Assincronismo e cancelamento | 18 | 14–16 | Buscador assíncrono de cotações fictícias |
| 08 | Interface web e eventos | 18 | 16–18 | Painel local de ordens |
| 09 | HTTP, dados e segurança | 18 | 19–21 | API local de ordens e cliente |
| 10 | Arquivos, streams e CLI | 18 | 21–23 | Importador de estoque por CLI |
| 11 | Concorrência e desempenho | 18 | 23–25 | Investigação de um relatório lento |
| 12 | Arquitetura e entrega | 18 | 25–27 | Oficina JavaScript: OS e estoque |

## Nível 01 — Ambiente e lógica

Execute scripts e transforme entradas em decisões explícitas.

**Aulas e objetivos**

- Aula 01: **Seu primeiro script e os ambientes JavaScript** — Executar um arquivo no Node e distinguir linguagem, runtime e APIs do ambiente. (6 h)
  - Exercício 1: Imprima seu nome e o objetivo de estudar JavaScript em duas linhas.
  - Exercício 2: Troque console por Console, execute e registre o erro. Depois corrija.
  - Exercício 3: Explique onde document.querySelector faria sentido e por que node main.mjs não fornece esse documento.
- Aula 02: **Valores, conversão e igualdade** — Distinguir números de texto e validar uma conversão antes de calcular. (6 h)
  - Exercício 1: Converta "12" e calcule o total para 12 e para 3 unidades de 250 centavos.
  - Exercício 2: Crie uma função que rejeite "", "abc", -1 e Infinity como quantidade.
  - Exercício 3: Preveja e execute "5" + 1, "5" * 2 e "5" === 5.
- Aula 03: **Condições, laços e limites** — Traduzir regras de decisão e repetir operações sem ultrapassar a fronteira. (6 h)
  - Exercício 1: Execute a regra com 4.9, 5, 6.9, 7 e 10.
  - Exercício 2: Transforme o laço para somar de 1 até N, incluindo N. Teste N=0,1,4.
  - Exercício 3: Teste if("false") e compare com if(false).

**Projeto:** Calculadora de horas de estudo

- Script que calcula horas semanais e mensais de referência.
- Validação de entradas vazias, negativas e não numéricas.
- README com instalação e três execuções.

**Critérios de conclusão**

- Distingue terminal, fonte e saída.
- Usa conversão explícita e Number.isFinite quando necessário.
- Explica as condições e testa seus limites.

## Nível 02 — Funções, escopo e closures

Separe regras de negócio e entenda o estado capturado por funções.

**Aulas e objetivos**

- Aula 04: **Funções, parâmetros e retornos** — Extrair uma regra de cálculo e separar resultado de impressão. (6 h)
  - Exercício 1: Crie aplicarDesconto(total, desconto) que recuse desconto maior que total.
  - Exercício 2: Compare calcularTotal(100), calcularTotal(100,undefined) e calcularTotal(100,null).
  - Exercício 3: Escreva uma versão que retorne o total e outra que o apresente, chamando a primeira.
- Aula 05: **Escopo léxico e tempo de vida dos nomes** — Identificar qual variável uma função utiliza e evitar estado global acidental. (6 h)
  - Exercício 1: Acrescente um terceiro bloco com taxa=0 e preveja as três saídas.
  - Exercício 2: Reescreva uma função que lê descontoGlobal para receber desconto como parâmetro.
  - Exercício 3: Execute um bloco que lê saldo antes de const saldo=10, capture e explique o erro.
- Aula 06: **Closures e funções como valores** — Criar funções com estado privado e instâncias independentes. (6 h)
  - Exercício 1: Crie criarId(prefixo) que produza OS-1, OS-2 e um gerador independente EQ-1.
  - Exercício 2: Escreva executarCalculo(valor, estrategia) e passe duas funções diferentes.
  - Exercício 3: Explique o risco de uma closure guardar um objeto de relatório enorme quando só precisa de seu ID.

**Projeto:** Calculadora de orçamento por funções

- Funções para total, desconto e validação.
- Contador de consultas independente para cada orçamento.
- Cenários de parâmetros ausentes e descontos no limite.

**Critérios de conclusão**

- Funções devolvem resultados sem depender de globais.
- Demonstra closures independentes.
- Explica parâmetros padrão, return e escopo.

## Nível 03 — Coleções e transformação

Organize listas e registros sem perder o controle das alterações.

**Aulas e objetivos**

- Aula 07: **Arrays, referências e cópias rasas** — Organizar uma lista e distinguir copiar o contêiner de copiar seus objetos. (6 h)
  - Exercício 1: Atualize apenas o item de id 2 numa lista de três objetos sem mudar os objetos de entrada.
  - Exercício 2: Demonstre que push funciona em um array declarado com const e que reatribuir o nome falha.
  - Exercício 3: Percorra um array vazio e outro com três números, somando os elementos.
- Aula 08: **Objetos, Map e Set** — Representar registros e consultar chaves sem confundir ausência com valor falso. (6 h)
  - Exercício 1: Crie um Map de três IDs para quantidades, incluindo uma quantidade zero. Consulte um ID ausente.
  - Exercício 2: Receba uma lista com etiquetas repetidas e produza uma lista sem repetições.
  - Exercício 3: Compare Object.hasOwn({quantidade:undefined},"quantidade") com o acesso ao valor.
- Aula 09: **Transformações, ordenação e redução** — Construir relatórios preservando entradas e usando comparadores explícitos. (6 h)
  - Exercício 1: Produza os IDs com quantidade igual a zero sem modificar a lista original.
  - Exercício 2: Calcule o total de uma lista vazia com reduce.
  - Exercício 3: Ordene [20,3,11] preservando a coleção recebida.

**Projeto:** Relatório de estoque em memória

- Coleção de itens com identificador e quantidade.
- Relatório de itens em falta e total de unidades.
- Consulta que distingue ausência de quantidade zero.

**Critérios de conclusão**

- Preserva a coleção original nas transformações propostas.
- Não usa ordenação padrão para comparar números.
- Trata referências compartilhadas e chaves repetidas.

## Nível 04 — Modelagem e composição

Modele regras usando objetos, protótipos e contratos pequenos.

**Aulas e objetivos**

- Aula 10: **Protótipos, métodos e this** — Explicar delegação por protótipo e como a chamada define o contexto de um método. (6 h)
  - Exercício 1: Crie uma terceira pessoa com o mesmo comportamento e confira o protótipo.
  - Exercício 2: Guarde ana.apresentar numa variável e chame-a sem receptor dentro de try/catch.
  - Exercício 3: Reescreva apresentar como função apresentar(pessoa).
- Aula 11: **Classes, instâncias e invariantes** — Modelar uma transição válida e manter estado separado por instância. (6 h)
  - Exercício 1: Tente confirmar a mesma ordem duas vezes e capture o erro.
  - Exercício 2: Crie três ordens, confirme apenas a segunda e liste seus status.
  - Exercício 3: Inclua em resumo apenas id e status e serialize com JSON.stringify.
- Aula 12: **Composição, dependências e contratos pequenos** — Montar um caso de uso sem amarrar a regra ao console ou ao armazenamento. (6 h)
  - Exercício 1: Faça buscarPreco devolver undefined e confira que registrar não foi chamado.
  - Exercício 2: Troque registrar por uma função que formata um texto em uma lista, sem mudar orcar.
  - Exercício 3: Explique por que Orçamento herdar de BancoDeDados seria uma relação pouco clara.

**Projeto:** Modelo de ordem de serviço

- Ordem com transições de estado validadas.
- Calculadora de serviço com dependência injetada.
- Comparação entre método, função e estado de instância.

**Critérios de conclusão**

- Recusa transições inválidas.
- Mantém instâncias independentes.
- Prefere composição quando não há relação de substituição clara.

## Nível 05 — Módulos e protocolos

Organize código em módulos e processe dados por interfaces de iteração.

**Aulas e objetivos**

- Aula 13: **Módulos ESM e fronteiras de arquivo** — Usar import e export e distinguir um módulo de uma variável global. (6 h)
  - Exercício 1: Crie dominio.mjs com export function total e main.mjs que importa essa função. Execute main.mjs.
  - Exercício 2: Troque total por calcular no import sem mudar a exportação. Registre a falha e corrija.
  - Exercício 3: Desenhe em texto a dependência entre interface, caso de uso e um adaptador de arquivo.
- Aula 14: **Iteradores e generators** — Produzir uma sequência sob demanda e respeitar o encerramento do consumidor. (6 h)
  - Exercício 1: Gere os IDs EQ-1 até EQ-4 e consuma todos.
  - Exercício 2: Conte quantas iterações do produtor ocorrem quando o consumidor para no primeiro valor.
  - Exercício 3: Compare percorrer um generator diretamente com [...generator] numa coleção grande.
- Aula 15: **package.json, npm e dependências** — Descrever um projeto executável e separar metadados de instalação de pacotes. (6 h)
  - Exercício 1: Execute o exemplo numa pasta de aula e depois npm run start.
  - Exercício 2: Remova uma aspas de package.json e observe a mensagem do npm. Depois restaure o arquivo.
  - Exercício 3: Explique a diferença entre uma faixa de versões em package.json e as resoluções do lockfile.

**Projeto:** CLI modular de serviços

- Módulo de domínio e ponto de entrada ESM.
- Processamento incremental de uma sequência de serviços.
- package.json documentado com comando de execução e sem dependências desnecessárias.

**Critérios de conclusão**

- Importações relativas incluem extensão.
- Não mistura CommonJS e ESM sem adaptação explícita.
- O gerador para quando o consumidor encerra a iteração.

## Nível 06 — Erros, contratos e testes

Valide fronteiras e construa testes que detectem falhas relevantes.

**Aulas e objetivos**

- Aula 16: **Exceções, contexto e responsabilidade** — Tratar uma falha onde existe uma decisão útil sem apagar sua causa. (6 h)
  - Exercício 1: Crie um erro identificável para quantidade negativa e trate-o de forma diferente de um erro inesperado.
  - Exercício 2: Acrescente ao exemplo uma camada de exportação e confira a cadeia de cause.
  - Exercício 3: Demonstre um finally que registra limpeza e deixe a exceção seguir para um catch externo.
- Aula 17: **Validação de entrada e formatos de dados** — Converter dados externos num contrato de domínio explícito. (6 h)
  - Exercício 1: Teste validarItem com null, [], ID vazio, quantidade "3", -1 e 1001.
  - Exercício 2: Mostre que admin:true não aparece no objeto retornado.
  - Exercício 3: Compare Number.isInteger e Number.isSafeInteger para um valor acima do intervalo seguro.
- Aula 18: **Testes com node:test e dependências controladas** — Escrever testes que falham quando uma regra ou um efeito importante é quebrado. (6 h)
  - Exercício 1: Acrescente casos quantidade 0 e quantidade igual ao saldo.
  - Exercício 2: Teste uma regra expirada em data fixa sem usar o relógio real.
  - Exercício 3: Num caso de entrada inválida, confira que a função salvar injetada não foi chamada.

**Projeto:** Domínio de estoque com testes

- Erros distinguem entrada inválida e indisponibilidade.
- Testes de sucesso, fronteira e falha.
- Relógio e repositório substituídos em testes de casos de uso.

**Critérios de conclusão**

- Falhas de validação não são silenciosamente convertidas em sucesso.
- Testes verificam resultado e efeitos importantes.
- A suíte é determinística e não depende de rede externa.

## Nível 07 — Assincronismo e cancelamento

Coordene resultados futuros sem bloquear desnecessariamente a execução.

**Aulas e objetivos**

- Aula 19: **Promises e composição de resultados** — Encadear operações futuras e manter suas falhas no fluxo retornado. (6 h)
  - Exercício 1: Compare then(()=>Promise.resolve(8)) com then(()=>{Promise.resolve(8)}).
  - Exercício 2: Adicione contexto num catch e deixe o erro chegar ao limite externo.
  - Exercício 3: Explique por que colocar um laço longo dentro de new Promise não libera a interface.
- Aula 20: **async, await e ordem de execução** — Prever uma ordem simples de ESM e distinguir espera de bloqueio síncrono. (6 h)
  - Exercício 1: Acrescente outra Promise.then depois de queueMicrotask e preveja sua posição.
  - Exercício 2: Crie async function dobro(n){return n*2} e compare chamar a função com aguardar seu resultado.
  - Exercício 3: Explique o que aconteceria se um laço de CPU longo fosse colocado antes de console.log("E").
- Aula 21: **Concorrência, timeout e cancelamento** — Limitar trabalho em andamento e propagar o encerramento às operações. (6 h)
  - Exercício 1: Processe seis tarefas fictícias usando apenas dois consumidores e registre o máximo de tarefas ativas.
  - Exercício 2: Modifique o exemplo para usar um sinal já abortado e registre o resultado.
  - Exercício 3: Compare Promise.all e Promise.allSettled para duas operações que cumprem e uma que rejeita.

**Projeto:** Buscador assíncrono de cotações fictícias

- Operações sequenciais e concorrentes comparadas.
- Timeout e cancelamento propagados às operações.
- Tratamento de falhas parciais e limites de concorrência.

**Critérios de conclusão**

- Explica a ordem de execução observada.
- Não confunde Promise.all com limite de concorrência.
- Aguarda a limpeza das tarefas canceladas.

## Nível 08 — Interface web e eventos

Construa interfaces acessíveis a partir de HTML, DOM e eventos.

**Aulas e objetivos**

- Aula 22: **HTML essencial e DOM** — Relacionar elementos do documento a operações JavaScript de seleção e atualização. (6 h)
  - Exercício 1: Inclua OS-3 no array e confira resumo e lista ao reabrir a página.
  - Exercício 2: Troque #resumo por um id inexistente e investigue a falha no console.
  - Exercício 3: Use uma ordem chamada <b>teste</b> e confira sua apresentação.
- Aula 23: **Eventos, formulários e estado da interface** — Receber uma interação, validar um campo e atualizar dados e apresentação. (6 h)
  - Exercício 1: Rejeite um ID que já esteja no array e apresente uma mensagem.
  - Exercício 2: Adicione uma ordem pressionando Enter no campo e outra pelo botão.
  - Exercício 3: Recarregue a página e explique por que a lista some.
- Aula 24: **Acessibilidade, foco e mensagens de estado** — Criar um fluxo de interação compreensível sem depender de mouse ou cor. (6 h)
  - Exercício 1: Percorra o formulário usando apenas Tab, Shift+Tab e Enter. Registre o percurso.
  - Exercício 2: Envie abc e depois OS-12. Confira aria-invalid e a mensagem.
  - Exercício 3: Explique por que a mensagem diz “neste exemplo” e não promete gravação num servidor.

**Projeto:** Painel local de ordens

- HTML completo com formulário rotulado e lista de ordens.
- Eventos que atualizam o estado e a interface.
- Mensagens de erro e resultado acessíveis por teclado.

**Critérios de conclusão**

- Usa elementos semânticos e associa labels aos campos.
- Evita interpretar entrada de usuário como HTML.
- A interface permanece compreensível após várias interações.

## Nível 09 — HTTP, dados e segurança

Trate a rede como uma fronteira que pode falhar ou receber dados inválidos.

**Aulas e objetivos**

- Aula 25: **fetch, respostas HTTP e dados recebidos** — Distinguir falha de transporte, status HTTP e contrato do corpo da resposta. (6 h)
  - Exercício 1: Adicione ao servidor uma rota que retorne 404 e confirme que o cliente a trata como falha prevista.
  - Exercício 2: Faça /ordens devolver {"mensagem":"oi"} e confira a validação.
  - Exercício 3: Simule uma resposta demorada e aplique AbortSignal.timeout no cliente.
- Aula 26: **API local, métodos e limite de entrada** — Implementar uma rota JSON com códigos HTTP e validação antes do efeito. (6 h)
  - Exercício 1: Envie JSON malformado e depois um ID fora do formato. Confira status e tamanho da lista.
  - Exercício 2: Envie um corpo acima de 1024 bytes no laboratório.
  - Exercício 3: Escreva uma função podeConsultar(usuario,ordem) para uma OS pertencente a um técnico específico.
- Aula 27: **Renderização segura e dados não confiáveis** — Exibir texto recebido sem interpretá-lo como código ou marcação. (6 h)
  - Exercício 1: Digite <strong>urgente</strong> e confirme a prévia.
  - Exercício 2: Teste uma URL javascript:alert(1) e confira que nenhum link é criado para ela.
  - Exercício 3: Explique por que permitir https: não prova que um site é legítimo.

**Projeto:** API local de ordens e cliente

- API com rotas e códigos HTTP definidos.
- Cliente que distingue erro de transporte e status HTTP.
- Demonstração de renderização segura e limites de entrada.

**Critérios de conclusão**

- Verifica response.ok e valida os dados recebidos.
- Não usa CORS como substituto de autorização.
- Define limite de corpo e rejeita JSON inválido.

## Nível 10 — Arquivos, streams e CLI

Automatize tarefas com recursos locais e processamento incremental.

**Aulas e objetivos**

- Aula 28: **Arquivos, caminhos e ciclo de vida** — Ler e gravar dados locais com diretório delimitado e tratamento de recursos. (6 h)
  - Exercício 1: Faça o arquivo ter versao 2 e confira a rejeição antes do uso.
  - Exercício 2: Tente ler um arquivo inexistente dentro da pasta temporária e registre o código do erro.
  - Exercício 3: Descreva como adaptar o exemplo para dados persistentes com um comando de backup separado.
- Aula 29: **Streams, pipeline e pressão do consumidor** — Processar uma sequência por etapas sem ignorar o ritmo do destino. (6 h)
  - Exercício 1: Aumente a quantidade de itens e o atraso do destino numa carga pequena e controlada.
  - Exercício 2: Rejeite um valor negativo por callback(new Error(...)) e trate a falha da pipeline.
  - Exercício 3: Explique como lidar com uma linha que chega dividida em dois pedaços de bytes.
- Aula 30: **CLI, argumentos e canais de saída** — Receber argumentos textuais e fornecer um resultado consumível por outros programas. (6 h)
  - Exercício 1: Execute node main.mjs 4 e confira o JSON.
  - Exercício 2: Execute node main.mjs abc e confira stderr e código de saída.
  - Exercício 3: Acrescente --help sem tratá-lo como uma quantidade.

**Projeto:** Importador de estoque por CLI

- Importação de arquivo textual com entradas verificadas.
- Relatório produzido por pipeline com pressão de fluxo.
- Códigos de saída e saída de diagnóstico separados dos dados.

**Critérios de conclusão**

- Limita escopo de arquivos ao diretório de laboratório.
- Explica por que stream não significa memória ilimitada.
- Não dispara subprocessos para interpretar entradas de usuário.

## Nível 11 — Concorrência e desempenho

Investigue gargalos antes de escolher paralelismo ou otimizações.

**Aulas e objetivos**

- Aula 31: **Worker threads e trabalho de CPU** — Executar um cálculo num worker e controlar mensagens, falhas e término. (6 h)
  - Exercício 1: Compare o cálculo no worker com uma função síncrona para o mesmo limite.
  - Exercício 2: Lance um Error no ramo do worker antes da mensagem e capture a rejeição no principal.
  - Exercício 3: Descreva como processar 100 relatórios com um número fixo de workers.
- Aula 32: **Profiling e medições úteis** — Definir uma carga e medir antes de escolher uma otimização. (6 h)
  - Exercício 1: Faça cinco medições da mesma carga e registre a variação sem imprimir dentro do laço de cálculo.
  - Exercício 2: Formule uma meta de desempenho para listar 1000 ordens e defina o cenário.
  - Exercício 3: Explique quando usar um perfil de CPU em vez de trocar estruturas de dados por intuição.
- Aula 33: **Memória, filas e ciclo de vida de recursos** — Manter limites de retenção e distinguir descarte de coleta imediata. (6 h)
  - Exercício 1: Generalize a capacidade do cache e teste 0,1 e 3 conforme um contrato escolhido.
  - Exercício 2: Leia R-3 antes de inserir R-6 e explique por que FIFO ainda removeria R-3.
  - Exercício 3: Descreva um fluxo de montagem e desmontagem de interface que registra um listener só enquanto necessário.

**Projeto:** Investigação de um relatório lento

- Medição reproduzível com carga e orçamento definidos.
- Comparação entre processamento local e worker para CPU.
- Relatório de limites de memória, filas e ciclo de vida.

**Critérios de conclusão**

- Não atribui aceleração garantida ao uso de worker.
- Considera custo de mensagens, clonagem e inicialização.
- Mantém limites de trabalho e encerra recursos.

## Nível 12 — Arquitetura e entrega

Integre domínio, interface e operação numa aplicação local revisável.

**Aulas e objetivos**

- Aula 34: **Casos de uso e fronteiras de arquitetura** — Integrar regras testáveis sem prender o domínio ao transporte HTTP. (6 h)
  - Exercício 1: Escreva uma apresentação CLI para o mesmo consultar sem mudar sua implementação.
  - Exercício 2: Acrescente outro campo interno ao repositório e confira a saída.
  - Exercício 3: Substitua buscar por uma função que conta chamadas e passe um ID inválido.
- Aula 35: **Idempotência e confirmação de ordens** — Definir o efeito de uma repetição e o limite de uma garantia em memória. (6 h)
  - Exercício 1: Confirme a mesma ordem com a mesma chave e depois com outra chave, conferindo o saldo após cada chamada.
  - Exercício 2: Use pedido-1 para tentar confirmar OS-2 depois da primeira chamada.
  - Exercício 3: Descreva o que seria necessário para preservar a confirmação após reiniciar o processo.
- Aula 36: **Projeto final, interface e operação local** — Entregar uma aplicação didática completa e demonstrar seus fluxos e limites. (6 h)
  - Exercício 1: Execute o modo automático e depois o modo --servir. Teste OS-1 duas vezes e um ID inexistente pela página.
  - Exercício 2: Extraia confirmar para um módulo de domínio e crie testes independentes do servidor HTTP.
  - Exercício 3: Escreva um README com execução, testes, versão do ambiente, limites e proposta de backup/restauração.

**Projeto:** Oficina JavaScript: OS e estoque

- Interface web e API local com confirmação de ordens.
- Regra de estoque testada, validação e repetição idempotente documentadas.
- README com execução, testes, backup, recuperação e limitações.

**Critérios de conclusão**

- A confirmação repetida não baixa estoque novamente no escopo implementado.
- Distingue garantias em memória de persistência e transações reais.
- Demonstra fluxos de sucesso, rejeição e recuperação com dados fictícios.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [Guia de JavaScript — MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide) — Tipos, funções, objetos, módulos e programação assíncrona.
- [Especificação ECMAScript](https://tc39.es/ecma262/) — Semântica normativa da linguagem; recursos implementados dependem do runtime.
- [Documentação Node.js](https://nodejs.org/api/) — APIs de arquivos, HTTP, processos, streams e diagnóstico.
- [Módulos ESM no Node](https://nodejs.org/api/esm.html) — Importação, exportação, extensões e interoperabilidade.
- [Test runner do Node](https://nodejs.org/api/test.html) — Testes, isolamento, subtestes e verificações assíncronas.
- [DOM — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) — Documento, seleção de elementos e construção de interfaces.
- [Fetch — MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) — Requisições, respostas, falhas HTTP e cancelamento.
- [Streams do Node](https://nodejs.org/api/stream.html) — Processamento incremental, pipeline e pressão do consumidor.
- [Worker threads](https://nodejs.org/api/worker_threads.html) — Trabalho de CPU em threads, mensagens e ciclo de vida.
- [Medição de desempenho](https://nodejs.org/api/perf_hooks.html) — Métricas de tempo, marcas e investigação do event loop.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Relatório de carrinho sem alterar a entrada

Um carrinho chega com preços textuais, produtos identificados por SKU e objetos compartilhados. O relatório deve validar números, calcular o total e ordenar uma cópia sem modificar o carrinho em uso.

**Aulas necessárias**

- Aula 02 — Valores, conversão e igualdade
- Aula 04 — Funções, parâmetros e retornos
- Aula 07 — Arrays, referências e cópias rasas
- Aula 08 — Objetos, Map e Set
- Aula 09 — Transformações, ordenação e redução

**Conceitos combinados:** Conversão; Referências; Coleções e relatório.

### Combo 2 — Modelo testável com fronteira de entrada

Um módulo ESM modela inscrições e depende de um repositório injetado. Entrada inválida não pode alterar o estado; os testes devem demonstrar a regra e não apenas a existência de uma classe.

**Aulas necessárias**

- Aula 11 — Classes, instâncias e invariantes
- Aula 12 — Composição, dependências e contratos pequenos
- Aula 13 — Módulos ESM e fronteiras de arquivo
- Aula 16 — Exceções, contexto e responsabilidade
- Aula 17 — Validação de entrada e formatos de dados
- Aula 18 — Testes com node:test e dependências controladas

**Conceitos combinados:** Invariantes; Módulos; Validação e testes.

### Combo 3 — Formulário acessível e resposta HTTP segura

Uma tela envia inscrições a uma API local. Ela deve bloquear submissões duplicadas durante a espera, explicar erros por texto e exibir nomes recebidos sem interpretá-los como HTML.

**Aulas necessárias**

- Aula 19 — Promises e composição de resultados
- Aula 21 — Concorrência, timeout e cancelamento
- Aula 23 — Eventos, formulários e estado da interface
- Aula 24 — Acessibilidade, foco e mensagens de estado
- Aula 25 — fetch, respostas HTTP e dados recebidos
- Aula 27 — Renderização segura e dados não confiáveis

**Conceitos combinados:** Assincronia; Acessibilidade; HTTP e renderização segura.

### Combo 4 — API com arquivos, pressão de fluxo e repetição

O backend local processa um arquivo grande, publica um resultado HTTP e mantém operações idempotentes. O serviço deve observar limites, conservar resultados após reinício quando prometido e medir antes de otimizar.

**Aulas necessárias**

- Aula 28 — Arquivos, caminhos e ciclo de vida
- Aula 29 — Streams, pipeline e pressão do consumidor
- Aula 31 — Worker threads e trabalho de CPU
- Aula 32 — Profiling e medições úteis
- Aula 34 — Casos de uso e fronteiras de arquitetura
- Aula 35 — Idempotência e confirmação de ordens

**Conceitos combinados:** Streams; Fronteiras; Diagnóstico e idempotência.

### Projeto final — Portal local de inscrições em JavaScript

Entregue uma interface web acessível e uma API local para gerenciar vagas de oficinas. Duas pessoas podem disputar a última vaga e uma requisição pode ser repetida depois de resultado incerto.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Validar capacidade, identidade da inscrição e transições por um caso de uso compartilhado, sem misturar DOM e regra.
- Implementar formulário com rótulos, foco, mensagens de status e recuperação de erro sem depender de cor ou mouse.
- Aplicar método, rota, limite de corpo e validação, conferir respostas de fetch e renderizar dados com segurança.
- Definir persistência e protocolo idempotente, distinguindo demonstração em memória de garantia após reinício.
- Processar importação por etapas com backpressure e, se necessário, CPU em workers com encerramento controlado.
- Fornecer testes node:test, cenários de interface, medições reproduzíveis e roteiro de execução/recuperação local.

**Entregáveis**

- Fontes ESM da interface e API, com regras compartilhadas.
- Testes e fixtures de validação, concorrência lógica e repetição.
- README com ambiente, instalação, formatos e limites.
- Roteiro de uso por teclado, falha de rede e recuperação do estado.

**Critérios práticos**

- **Regras do domínio:** Validar capacidade, identidade da inscrição e transições por um caso de uso compartilhado, sem misturar DOM e regra.
- **Interface acessível:** Implementar formulário com rótulos, foco, mensagens de status e recuperação de erro sem depender de cor ou mouse.
- **API e dados externos:** Aplicar método, rota, limite de corpo e validação, conferir respostas de fetch e renderizar dados com segurança.
- **Estado e repetição:** Definir persistência e protocolo idempotente, distinguindo demonstração em memória de garantia após reinício.
- **Trabalho limitado:** Processar importação por etapas com backpressure e, se necessário, CPU em workers com encerramento controlado.
- **Validação da entrega:** Fornecer testes node:test, cenários de interface, medições reproduzíveis e roteiro de execução/recuperação local.

**Testes de aceitação para executar localmente**

#### Inscrição válida

- Preparação: Oficina com capacidade 2 e nenhuma inscrição.
- Entrada/ação: Enviar nome válido e chave op-1 uma vez.
- Resultado esperado: Uma inscrição, uma vaga restante e resultado apresentado por mensagem acessível.

#### Conteúdo não confiável

- Preparação: Oficina disponível e nome contendo texto parecido com uma tag HTML.
- Entrada/ação: Submeter e depois exibir o nome na lista.
- Resultado esperado: O nome aparece como texto; nenhum HTML recebido é executado.

#### Última vaga e repetição

- Preparação: Uma vaga disponível; duas operações diferentes e uma repetição da vencedora.
- Entrada/ação: Tentar as duas inscrições e repetir a confirmação aceita.
- Resultado esperado: A capacidade não fica negativa; só uma vence e a repetição não cria outra inscrição dentro da garantia documentada.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
