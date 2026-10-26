# Plano de ensino — Lógica de Programação

Aprenda a transformar problemas em algoritmos, prever resultados, escolher estruturas e verificar regras com exemplos executáveis simples.

**Carga estimada:** 144 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Nenhuma experiência prévia de programação. Esta é uma trilha de entrada.
- Computador, editor de texto e Python 3.12 ou superior para executar os exemplos de raciocínio.
- Python é o veículo de prática: a sintaxe necessária é apresentada aqui, sem exigir o curso de Python.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Problemas e algoritmos | 12 | 1–2 | Plano de execução de uma oficina |
| 02 | Valores e expressões | 12 | 2–3 | Calculadora de tempo e materiais |
| 03 | Decisões e regras | 12 | 4–5 | Classificador de atendimento |
| 04 | Repetição e progresso | 12 | 5–6 | Resumo de uma jornada |
| 05 | Coleções e posições | 12 | 7–8 | Relatório de materiais |
| 06 | Funções e decomposição | 12 | 8–9 | Orçamento decomposto |
| 07 | Dados e validação | 12 | 10–11 | Cadastro validado de ordens |
| 08 | Estratégias de resolução | 12 | 11–12 | Conferência de uma entrega |
| 09 | Algoritmos e custo | 12 | 13–14 | Catálogo pesquisável |
| 10 | Recursão e correção | 12 | 14–15 | Verificador de grupos de tarefas |
| 11 | Testes e depuração | 12 | 16–17 | Coleção de casos de regressão |
| 12 | Integração e projeto final | 12 | 17–18 | Oficina Lógica: OS e estoque |

## Nível 01 — Problemas e algoritmos

Descreva o resultado desejado, decomponha um problema e acompanhe estados pequenos.

**Aulas e objetivos**

- Aula 01: **Entrada, processamento e saída** — Separar dados fornecidos, operações e resultado antes de escrever um programa. (4 h)
  - Exercício 1: Para calcular o tempo de uma viagem a velocidade constante, identifique entradas, operação e saída, usando 120 km e 60 km/h.
  - Exercício 2: Troque quantidade para 5 e preveja o novo total antes de executar.
  - Exercício 3: Escreva um script com pecas=4 e minutos_por_peca=15 que imprima o tempo total.
- Aula 02: **Sequência, atribuição e estado** — Acompanhar o valor de cada variável depois de cada instrução. (4 h)
  - Exercício 1: Comece com saldo=8, some 3 e retire 5. Escreva o estado após cada passo e execute.
  - Exercício 2: Use x=2, depois x=x+3, depois x=x*4. Compare com a ordem multiplicar e depois somar.
  - Exercício 3: Troque os valores de a=10 e b=20 usando uma variável temporaria, sem usar atribuição múltipla.
- Aula 03: **Decomposição e contrato de um problema** — Dividir uma tarefa em etapas com hipóteses e resultados definidos. (4 h)
  - Exercício 1: Use quantidade_pecas=0 mantendo mão de obra 8000 e preveja as duas saídas.
  - Exercício 2: Adicione deslocamento_centavos=1200 ao contrato e ao cálculo.
  - Exercício 3: Liste duas perguntas que faria se o enunciado dissesse apenas calcular o pagamento do técnico.

**Projeto:** Plano de execução de uma oficina

- Especificação de entrada, cálculo e saída de um orçamento simples.
- Tabela que acompanha três execuções diferentes.
- Script curto que reproduz o roteiro sem depender de dados reais.

**Critérios de conclusão**

- Cada passo tem uma ação verificável.
- A previsão bate com as saídas dos três casos.
- A solução distingue dado fornecido de resultado calculado.

## Nível 02 — Valores e expressões

Escolha representações e traduza relações em expressões que possam ser verificadas.

**Aulas e objetivos**

- Aula 04: **Números, unidades e divisão** — Escolher operações numéricas compatíveis com a unidade e o tipo de resultado. (4 h)
  - Exercício 1: Calcule a decomposição de 0,59,60 e 61 minutos.
  - Exercício 2: Uma caixa comporta 6 peças. Para 20 peças, determine caixas completas e sobras.
  - Exercício 3: Some 2 horas e 35 minutos e mostre o total em minutos.
- Aula 05: **Texto, conversão e representação** — Distinguir dados textuais de quantidades e fazer uma conversão explícita. (4 h)
  - Exercício 1: Use quantidade_texto="8" e calcule o dobro numérico.
  - Exercício 2: Um identificador é "0012". Explique por que convertê-lo para inteiro pode ser inadequado.
  - Exercício 3: Preveja o que acontece com int("oito") e execute uma vez.
- Aula 06: **Comparações e valores booleanos** — Traduzir relações e verificar expressões que resultam em verdadeiro ou falso. (4 h)
  - Exercício 1: Com saldo 5, avalie suficiência para quantidades 4,5 e 6.
  - Exercício 2: Com minutos=60, compare minutos==60 e minutos>=60. Depois use minutos=61.
  - Exercício 3: Crie uma variável prazo_vencido a partir de dias_atraso=2 e uma regra de atraso estritamente maior que zero.

**Projeto:** Calculadora de tempo e materiais

- Conversão de minutos para horas e minutos restantes.
- Cálculo em centavos com quantidade e preço definidos.
- Tabela de condições de atendimento com resultados previstos.

**Critérios de conclusão**

- Explica o significado e a unidade de cada valor.
- Trata zero e limites sem confundir texto com número.
- Explica todas as condições da tabela.

## Nível 03 — Decisões e regras

Transforme regras em ramos completos e teste seus limites.

**Aulas e objetivos**

- Aula 07: **Decisão simples e casos de fronteira** — Usar if e else para executar exatamente um de dois caminhos. (4 h)
  - Exercício 1: Use quantidade 6 e saldo 5. Preveja todas as linhas antes de executar.
  - Exercício 2: Escreva uma decisão que imprima no prazo para dias_atraso=0 e atrasado para valores positivos. Assuma entrada não negativa.
  - Exercício 3: Mova a impressão Conferência concluída para dentro do ramo aceito e explique a mudança observada com quantidade 6.
- Aula 08: **Múltiplos caminhos e tabela de decisão** — Ordenar condições para classificar cada entrada em uma categoria definida. (4 h)
  - Exercício 1: Classifique 0,1,24 e 25 horas de atraso pela regra da aula.
  - Exercício 2: Defina uma taxa em texto: até 10 serviços é básica, de 11 a 20 é intermediária e acima de 20 é ampliada. Assuma contagem não negativa.
  - Exercício 3: Adicione um ramo inicial para rejeitar horas_atraso<0 antes das faixas.
- Aula 09: **Condições compostas e curto-circuito** — Combinar perguntas com and, or e not preservando a regra do enunciado. (4 h)
  - Exercício 1: Com saldo 5, avalie pode_retirar para quantidades-1,0,3 e 6.
  - Exercício 2: Um atendimento exige alerta se estiver atrasado ou sem técnico. Crie duas variáveis booleanas e confira as quatro combinações.
  - Exercício 3: Troque divisor para 2 no exemplo e depois para 5. Registre os resultados.

**Projeto:** Classificador de atendimento

- Regras escritas para atendimento imediato, agendado e recusado.
- Código que classifica cada entrada em exatamente uma situação.
- Casos em cada limite e em cada combinação relevante.

**Critérios de conclusão**

- Ramos não ocultam casos válidos pela ordem das condições.
- A regra para igualdade está explícita.
- Condições compostas correspondem ao enunciado.

## Nível 04 — Repetição e progresso

Repita operações com limites, mantenha acumuladores e explique por que o laço termina.

**Aulas e objetivos**

- Aula 10: **Repetição contada e limites do intervalo** — Repetir uma ação uma quantidade conhecida de vezes sem perder os limites. (4 h)
  - Exercício 1: Imprima os IDs de 1 até 7, incluindo 7, com um for.
  - Exercício 2: Execute um for com range(0), seguido de print("Fim"). Explique a saída.
  - Exercício 3: Use range(2,11,2) e preveja a sequência antes de rodar.
- Aula 11: **while, progresso e término** — Construir um laço condicionado com uma medida que se aproxima do término. (4 h)
  - Exercício 1: Comece com pendentes=0 e preveja a saída completa.
  - Exercício 2: Analise sem executar a versão em que pendentes=3 e o corpo contém somente print(pendentes). Diga o que falta.
  - Exercício 3: Represente uma dívida fictícia de 12 unidades e retire 3 por volta enquanto ela for positiva. Liste os estados.
- Aula 12: **Contadores, acumuladores e valores iniciais** — Calcular quantidade e total como resultados diferentes de uma repetição. (4 h)
  - Exercício 1: Monte uma tabela com total e quantidade antes do laço e após cada uma das três durações.
  - Exercício 2: Troque a sequência por[] e execute. Qual é o significado do resultado?
  - Exercício 3: Acrescente um contador longas que aumenta apenas quando minutos>=30.

**Projeto:** Resumo de uma jornada

- Laço que calcula duração e quantidade de tarefas.
- Rastreamento de um contador e de um acumulador.
- Explicação da condição de término e casos vazios.

**Critérios de conclusão**

- Não perde nem repete o último elemento.
- Todo while faz progresso sob as entradas aceitas.
- Distingue total acumulado de quantidade de itens.

## Nível 05 — Coleções e posições

Organize sequências, percorra índices válidos e construa resultados sem alterar a origem por acidente.

**Aulas e objetivos**

- Aula 13: **Listas, índices e tamanho** — Relacionar cada posição válida de uma sequência ao seu elemento. (4 h)
  - Exercício 1: Para ids=["A","B","C","D"], associe índices e valores e indique len(ids).
  - Exercício 2: Explique o que ocorre ao acessar[][0] e proponha uma verificação prévia.
  - Exercício 3: Com saldos=[8,3,5], substitua o último saldo por 0 sem usar o índice literal 2.
- Aula 14: **Percorrer, filtrar e transformar** — Construir uma nova coleção conforme uma regra sem alterar a sequência de origem. (4 h)
  - Exercício 1: A partir de[15,40,10,60], construa uma lista apenas com durações>=30.
  - Exercício 2: Converta[1,2,3] horas para minutos em uma nova lista.
  - Exercício 3: Use saldos=[4,5,6] na regra do exemplo e explique reposicoes.
- Aula 15: **Resumo, extremo e ausência** — Encontrar um maior valor preservando uma regra válida para qualquer ordem da entrada. (4 h)
  - Exercício 1: Execute o algoritmo com[-7,-2,-9]. Compare com uma versão que começa maior=0.
  - Exercício 2: Adapte o algoritmo para encontrar o menor elemento de[3,8,5].
  - Exercício 3: Teste[6] e[] e registre os comportamentos esperados.

**Projeto:** Relatório de materiais

- Lista de saldos fictícios e seus identificadores.
- Filtro de reposição e transformação sem modificar a entrada.
- Relatório que contempla lista vazia e itens repetidos.

**Critérios de conclusão**

- Acessa apenas posições válidas.
- Mantém a associação entre identificador e saldo.
- Explica quando preserva ou altera a lista original.

## Nível 06 — Funções e decomposição

Dê nome às partes do algoritmo, defina contratos e componha resultados.

**Aulas e objetivos**

- Aula 16: **Funções, parâmetros e retorno** — Definir uma operação reutilizável com entradas e resultado explícitos. (4 h)
  - Exercício 1: Defina tempo_total(quantidade,minutos_por_item) que retorne o produto. Teste 4 e 15.
  - Exercício 2: Some custo_material(3,250) a 500 de mão de obra em uma variável total.
  - Exercício 3: Defina uma função que imprima Executando, mas não a chame. Preveja a saída e depois acrescente a chamada.
- Aula 17: **Decompor e compor funções pequenas** — Ligar resultados de operações simples para implementar uma regra maior. (4 h)
  - Exercício 1: Acrescente deslocamento_centavos como parâmetro de orcamento e some a taxa uma vez. Teste 2,3500,8000,1200.
  - Exercício 2: Verifique custo_material com(0,3500),(2,3500) e(3,100) antes de usar orcamento.
  - Exercício 3: Um programa valida quantidade, calcula orçamento e imprime uma frase. Proponha nomes e contratos para essas três responsabilidades.
- Aula 18: **Escopo, referências e efeitos observáveis** — Distinguir cálculo de transformação com alteração de dados compartilhados. (4 h)
  - Exercício 1: Troque novos=saldos.copy() por novos=saldos e compare a origem depois da chamada.
  - Exercício 2: Liste as pré-condições ainda não verificadas da função simular_baixa.
  - Exercício 3: Partindo da mesma origem[5,8], simule retirar 1 e retirar 3 em chamadas separadas.

**Projeto:** Orçamento decomposto

- Funções pequenas para calcular custo, prazo e resumo.
- Descrição de entradas e saídas de cada função.
- Demonstração de chamadas com argumentos diferentes.

**Critérios de conclusão**

- Retornos podem ser usados sem capturar impressão no terminal.
- Não depende de variável global mutável para calcular.
- Cada função corresponde a uma responsabilidade explicada.

## Nível 07 — Dados e validação

Modele registros e recuse entradas que não atendem ao contrato antes de produzir efeitos.

**Aulas e objetivos**

- Aula 19: **Registros, chaves e identidade** — Agrupar dados relacionados e distinguir identificador de posição em uma lista. (4 h)
  - Exercício 1: Crie um dicionário com id="EQ-1",modelo="M1" e saldo=0. Leia os três valores.
  - Exercício 2: Verifique se tecnico está presente antes de imprimir ordem["tecnico"]. Caso não esteja, imprima sem técnico.
  - Exercício 3: Coloque duas ordens com IDs distintos em uma lista e inverta manualmente suas posições. Qual dado deve continuar identificando cada uma?
- Aula 20: **Validação de tipo, faixa e significado** — Verificar o contrato de entrada antes de usar dados em comparações e cálculos. (4 h)
  - Exercício 1: Teste-1,0,1,100 e 101 em quantidade_valida e registre os resultados.
  - Exercício 2: Teste 2.0 e explique a rejeição mesmo que represente numericamente duas unidades.
  - Exercício 3: Uma entrada 2 passa na validação, mas o saldo é 1. A retirada pode ser aprovada apenas por ter formato válido?
- Aula 21: **Validar antes de alterar o estado** — Recusar operações sem produzir mudanças parciais nos dados. (4 h)
  - Exercício 1: Teste retirar(5,5), retirar(5,0) e retirar(0,1).
  - Exercício 2: Teste retirar(5,"2") e explique por que não gera comparação inválida com saldo.
  - Exercício 3: Explique por quais caminhos uma rejeição passa e por que nenhum deles calcula saldo-quantidade.

**Projeto:** Cadastro validado de ordens

- Registro de OS com ID, quantidade e status.
- Validação de tipo, formato e faixa da quantidade.
- Demonstração de rejeição sem alteração do estado.

**Critérios de conclusão**

- Validação de formato não substitui regra de negócio.
- Entrada rejeitada preserva os dados anteriores.
- Distingue ausência de zero válido.

## Nível 08 — Estratégias de resolução

Escolha padrões de busca, contagem e comparação para resolver famílias de problemas.

**Aulas e objetivos**

- Aula 22: **Busca linear e retorno de ausência** — Visitar uma coleção para encontrar um alvo sem confundir a primeira posição com falta de resultado. (4 h)
  - Exercício 1: Teste alvo no começo, meio, fim e ausente em["A","B","C"].
  - Exercício 2: O que buscar(["A","B","A"],"A") devolve? Defina uma adaptação se quiser todas as posições.
  - Exercício 3: Use o retorno de buscar para imprimir encontrado ou ausente, inclusive quando o resultado é 0.
- Aula 23: **Contagem de frequências e agrupamento** — Resumir repetições usando uma chave que corresponda à regra de agrupamento. (4 h)
  - Exercício 1: Conte["A","A","B","C","B","A"] e confira a soma das frequências.
  - Exercício 2: Conte uma lista vazia e consulte a frequência de"A" com get.
  - Exercício 3: Defina se["M1","m 1"] tem uma ou duas categorias e implemente a política escolhida.
- Aula 24: **Laços aninhados e pares sem repetição** — Percorrer combinações de posições sem comparar um item consigo mesmo nem contar a mesma dupla duas vezes. (4 h)
  - Exercício 1: Execute o algoritmo com["A","A","A"] e liste os pares de índices considerados.
  - Exercício 2: Preveja os resultados para[],["A"] e["A","B"].
  - Exercício 3: Sem executar, conte comparações para uma lista de tamanho 4 e confira com um contador.

**Projeto:** Conferência de uma entrega

- Busca de material por identificador com ausência explícita.
- Contagem de equipamentos por modelo.
- Detecção de combinações ou duplicidades com exemplos pequenos.

**Critérios de conclusão**

- Não confunde posição zero com ausência.
- Repetições contam conforme a regra definida.
- Explica quantas comparações a estratégia realiza.

## Nível 09 — Algoritmos e custo

Compare estratégias corretas considerando pré-condições e crescimento do trabalho.

**Aulas e objetivos**

- Aula 25: **Ordenação por seleção e preservação dos dados** — Ordenar uma sequência escolhendo o menor elemento restante a cada posição. (4 h)
  - Exercício 1: Teste ordenar com[],[7],[2,1] e[2,2,1].
  - Exercício 2: Rastreie a primeira rodada para[4,1,3,2]. Qual índice é escolhido como menor e qual lista surge após a troca?
  - Exercício 3: Explique o efeito de escrever resultado[i]=resultado[menor] e depois resultado[menor]=resultado[i], sem temporario.
- Aula 26: **Busca binária e pré-condições** — Descartar metade dos candidatos mantendo o alvo dentro da região de busca possível. (4 h)
  - Exercício 1: Teste os alvos 1,18 e 20 na lista do exemplo e busque qualquer valor em[].
  - Exercício 2: Rastreie buscar_ordenado([4],5). Mostre inicio,fim e meio até terminar.
  - Exercício 3: Use[9,1,4] com alvo 9 e explique por que o resultado não pode servir de garantia geral.
- Aula 27: **Crescimento do trabalho e escolhas de algoritmo** — Comparar contagens de operações sem confundir complexidade com um tempo exato. (4 h)
  - Exercício 1: Conte o trabalho de dois laços separados, cada um com n visitas. Compare com o aninhado.
  - Exercício 2: Na busca linear de uma lista com 100 itens, compare alvo no primeiro lugar e alvo ausente.
  - Exercício 3: Explique por que ordenar uma lista para depois fazer uma única busca pode não ser uma boa escolha.

**Projeto:** Catálogo pesquisável

- Ordenação didática que preserva todos os valores.
- Busca binária em sequência ordenada.
- Contagem de trabalho para entradas de tamanhos diferentes.

**Critérios de conclusão**

- Documenta a pré-condição de ordenação da busca binária.
- Verifica vazio, ausente, repetido e elementos extremos.
- Não apresenta Big O como número exato de milissegundos.

## Nível 10 — Recursão e correção

Relacione casos-base, redução do problema e invariantes com a correção do algoritmo.

**Aulas e objetivos**

- Aula 28: **Recursão, caso-base e redução** — Explicar uma chamada recursiva pela combinação de um caso simples com um problema menor. (4 h)
  - Exercício 1: Expanda fatorial(3) no papel até o caso-base e depois resolva os retornos.
  - Exercício 2: Sem executar uma recursão longa, explique por que fatorial(-1) não tem o argumento de término da aula.
  - Exercício 3: Escreva fatorial_iterativo(n) para o mesmo domínio e compare resultados de 0 a 5.
- Aula 29: **Estruturas recursivas e grupos** — Somar dados de uma hierarquia finita sem perder os itens dos subgrupos. (4 h)
  - Exercício 1: Calcule total_minutos({"tarefas":[],"subgrupos":[]}) e explique o resultado.
  - Exercício 2: Monte uma raiz com tarefas[5] e dois filhos folhas com[10] e[20,5].
  - Exercício 3: Explique sem executar o que muda se um subgrupo referenciar o próprio grupo raiz.
- Aula 30: **Invariantes, término e contraexemplos** — Justificar uma repetição e usar um caso concreto para refutar uma regra incorreta. (4 h)
  - Exercício 1: Suponha que total vale 6 após visitar 1,2,3. Explique por que somar 4 preserva a invariante.
  - Exercício 2: Uma versão usa range(1,n) para somar de 1 até n, incluindo n. Encontre o menor n não negativo que mostre uma falha.
  - Exercício 3: Escreva inicialização, preservação e conclusão para um contador de elementos visitados.

**Projeto:** Verificador de grupos de tarefas

- Algoritmo recursivo sobre uma estrutura pequena de grupos.
- Caso-base e medida de progresso documentados.
- Invariante ou contraexemplo usado para revisar uma solução.

**Critérios de conclusão**

- Toda entrada aceita alcança um caso-base.
- Considera custo da pilha e limites práticos de recursão.
- Distingue evidência de teste de argumento geral de correção.

## Nível 11 — Testes e depuração

Escolha casos que revelem falhas, formule propriedades e guarde regressões.

**Aulas e objetivos**

- Aula 31: **Partições, fronteiras e casos de teste** — Escolher entradas que observem comportamentos diferentes de uma regra. (4 h)
  - Exercício 1: Para a classificação da aula com saldo 5, escolha um caso de cada partição e justifique.
  - Exercício 2: Troque quantidade>saldo por quantidade>=saldo e diga qual caso existente detecta a falha.
  - Exercício 3: Se a função passar a receber dados externos, quais classes de entrada além de inteiros devem ser consideradas?
- Aula 32: **Asserções e propriedades do domínio** — Verificar exemplos concretos e relações que precisam valer em várias entradas. (4 h)
  - Exercício 1: A função errada que sempre retorna 0 satisfaz novo>=0. Que verificação adicional do exemplo revela o problema para saldo 5,quantidade 2?
  - Exercício 2: Mude o limite do laço de saldos para range(11). Preveja quantas combinações válidas serão verificadas.
  - Exercício 3: Acrescente casos retirar(0,1), retirar(3,-1) e retirar(3,3) com resultados esperados.
- Aula 33: **Depuração, reprodução mínima e regressão** — Localizar uma divergência entre regra e código e guardar o caso que a revelou. (4 h)
  - Exercício 1: Substitua temporariamente a função pela fórmula quantidade*15+10 e execute as mesmas asserções.
  - Exercício 2: Escreva um registro da falha com contrato, entrada mínima, esperado, obtido e causa.
  - Exercício 3: Se o contrato mudar para 20 minutos por tarefa, quais expectativas positivas do teste devem mudar e qual caso permanece?

**Projeto:** Coleção de casos de regressão

- Tabela de testes com entradas e expectativas justificadas.
- Asserções sobre exemplos e propriedades do domínio.
- Registro de uma falha com reprodução mínima e correção.

**Critérios de conclusão**

- Testes não calculam o esperado repetindo o mesmo algoritmo.
- Cobre fronteiras, vazio e rejeições relevantes.
- A correção preserva os casos antes válidos.

## Nível 12 — Integração e projeto final

Integre especificação, estado e testes em uma solução cuja regra você consiga explicar.

**Aulas e objetivos**

- Aula 34: **Especificação de estados e transições** — Representar operações permitidas conforme o estado atual da entidade. (4 h)
  - Exercício 1: Para os três estados da aula e os eventos iniciar e concluir, preencha os seis resultados.
  - Exercício 2: Teste transicionar("aberta","pagar"). Explique por que preservar o estado não demonstra que o pagamento ocorreu.
  - Exercício 3: Acrescente um evento cancelar permitido apenas em aberta e teste cancelamento após concluir.
- Aula 35: **Repetição de pedidos e idempotência** — Proteger um efeito de negócio para que repetir uma confirmação não repita a baixa. (4 h)
  - Exercício 1: Aplique confirmar mais uma vez à segunda resposta e confira saldo e status.
  - Exercício 2: Use um estado aberto com quantidade 6 e saldo 5. Verifique o retorno e a origem.
  - Exercício 3: Explique por que guardar apenas esse dicionário numa variável não preserva a confirmação após reiniciar o programa.
- Aula 36: **Projeto final: OS, estoque e evidências de correção** — Integrar validação, estado, efeito e testes em uma solução pequena que possa ser explicada. (4 h)
  - Exercício 1: Acrescente uma OS com quantidade 0 e outra com item desconhecido. Confira resposta, saldo e status após cada tentativa.
  - Exercício 2: Escreva uma tabela para sucesso, repetição, insuficiência e ID ausente, com saldo e status esperados. Rastreie o sucesso linha a linha.
  - Exercício 3: Organize código, testes e um README com contrato, comando, resultado e três limites da solução.

**Projeto:** Oficina Lógica: OS e estoque

- Algoritmo de confirmação de OS com regra de saldo e status.
- Casos de sucesso, rejeição e repetição sem nova baixa.
- Documento com contratos, rastreamento, testes e limitações.

**Critérios de conclusão**

- Nenhuma rejeição deixa estoque parcialmente alterado.
- Confirmar novamente uma OS concluída não repete o efeito.
- Explica o escopo em memória e o caminho de evolução para outra linguagem.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [Introdução ao Python](https://docs.python.org/3/tutorial/introduction.html) — Valores, operações, strings e execução de pequenos exemplos.
- [Controle de fluxo](https://docs.python.org/3/tutorial/controlflow.html) — Condições, repetições, intervalos e funções usados como veículo de prática.
- [Estruturas de dados](https://docs.python.org/3/tutorial/datastructures.html) — Listas, dicionários e operações sobre coleções.
- [Erros e exceções](https://docs.python.org/3/tutorial/errors.html) — Identificação e tratamento de entradas inválidas.
- [Testes com unittest](https://docs.python.org/3/library/unittest.html) — Referência para ampliar a verificação depois dos testes com assert.
- [CS50 — fundamentos](https://cs50.harvard.edu/python/notes/0/) — Material universitário aberto sobre problemas, funções e variáveis; os exemplos e exercícios desta trilha são autorais.
- [CS50 — algoritmos](https://cs50.harvard.edu/x/notes/3/) — Busca, ordenação, recursão e análise de crescimento do trabalho.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Orçamento com unidades e regras de decisão

Um orçamento recebe quantidade textual e preço em centavos. Há faixas de desconto e uma condição de bloqueio; o algoritmo deve classificar fronteiras sem confundir formato, unidade e significado.

**Aulas necessárias**

- Aula 03 — Decomposição e contrato de um problema
- Aula 04 — Números, unidades e divisão
- Aula 05 — Texto, conversão e representação
- Aula 06 — Comparações e valores booleanos
- Aula 08 — Múltiplos caminhos e tabela de decisão
- Aula 09 — Condições compostas e curto-circuito

**Conceitos combinados:** Contrato; Conversão e unidades; Decisões compostas.

### Combo 2 — Resumo de movimentos com término e funções

Um algoritmo percorre movimentos, calcula quantidade e total e oferece uma função de consulta. Dados vazios e todos negativos precisam de saídas definidas; a consulta não deve mudar a lista.

**Aulas necessárias**

- Aula 10 — Repetição contada e limites do intervalo
- Aula 11 — while, progresso e término
- Aula 12 — Contadores, acumuladores e valores iniciais
- Aula 15 — Resumo, extremo e ausência
- Aula 16 — Funções, parâmetros e retorno
- Aula 18 — Escopo, referências e efeitos observáveis

**Conceitos combinados:** Repetição; Ausência; Funções e efeitos.

### Combo 3 — Cadastro, validação e escolha de busca

Um cadastro possui identificadores estáveis, saldos e um relatório de frequência por código. Consultas podem usar busca binária apenas quando a pré-condição de ordenação é verdadeira.

**Aulas necessárias**

- Aula 19 — Registros, chaves e identidade
- Aula 20 — Validação de tipo, faixa e significado
- Aula 21 — Validar antes de alterar o estado
- Aula 23 — Contagem de frequências e agrupamento
- Aula 26 — Busca binária e pré-condições
- Aula 27 — Crescimento do trabalho e escolhas de algoritmo

**Conceitos combinados:** Identidade; Validação antes do efeito; Agrupamento e pré-condições.

### Combo 4 — Estados, hierarquia e confirmação repetível

Uma ordem contém grupos e subgrupos de itens. O algoritmo soma a hierarquia, valida transições e confirma a baixa uma única vez por operação. Contraexemplos e testes de fronteira devem sustentar a explicação.

**Aulas necessárias**

- Aula 28 — Recursão, caso-base e redução
- Aula 29 — Estruturas recursivas e grupos
- Aula 30 — Invariantes, término e contraexemplos
- Aula 31 — Partições, fronteiras e casos de teste
- Aula 34 — Especificação de estados e transições
- Aula 35 — Repetição de pedidos e idempotência

**Conceitos combinados:** Recursão; Invariantes; Estados e idempotência.

### Projeto final — Algoritmo verificável de ordens e estoque

Especifique e implemente uma solução pequena para cadastrar itens, abrir ordens e confirmar baixas. Use pseudocódigo preciso e o Python simples da trilha para demonstrar os casos, sem exigir serviços externos.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Definir campos, unidades, tipos aceitos, faixas e resultados de sucesso/recusa antes de implementar.
- Representar itens e ordens por identificadores estáveis e estados com transições permitidas explícitas.
- Validar todas as condições antes do efeito e preservar o estado quando a ordem não puder ser confirmada.
- Reconhecer uma confirmação já aplicada e impedir segunda baixa para a mesma operação, incluindo conflito de conteúdo.
- Justificar as estruturas e buscas usadas, seus limites, término e invariantes, sem prometer tempos exatos só pela complexidade.
- Entregar testes de fronteira, vazio, ausência, repetição e estado inválido, guardando contraexemplos como regressões.

**Entregáveis**

- Especificação de dados, operações e tabela de transições.
- Pseudocódigo e implementação simples com funções de contrato definido.
- Tabela de testes com entrada, resultado previsto, observado e justificativa.
- Relatório de invariantes, término, escolhas e contraexemplos corrigidos.

**Critérios práticos**

- **Contrato de entrada:** Definir campos, unidades, tipos aceitos, faixas e resultados de sucesso/recusa antes de implementar.
- **Identidade e estado:** Representar itens e ordens por identificadores estáveis e estados com transições permitidas explícitas.
- **Alteração coerente:** Validar todas as condições antes do efeito e preservar o estado quando a ordem não puder ser confirmada.
- **Repetição controlada:** Reconhecer uma confirmação já aplicada e impedir segunda baixa para a mesma operação, incluindo conflito de conteúdo.
- **Algoritmos explicáveis:** Justificar as estruturas e buscas usadas, seus limites, término e invariantes, sem prometer tempos exatos só pela complexidade.
- **Evidências de correção:** Entregar testes de fronteira, vazio, ausência, repetição e estado inválido, guardando contraexemplos como regressões.

**Testes de aceitação para executar localmente**

#### Confirmação e repetição

- Preparação: Item A possui 5 unidades; ordem O está ABERTA e operação op-1 é inédita.
- Entrada/ação: Confirmar 2 unidades; repetir op-1 com os mesmos dados.
- Resultado esperado: Saldo 3, ordem CONFIRMADA e somente uma baixa; a repetição devolve o resultado anterior.

#### Recusa preserva estado

- Preparação: Saldo 5, ordem ABERTA e nenhum efeito aplicado.
- Entrada/ação: Tentar quantidade -1, 0 e 6 em cenários separados.
- Resultado esperado: Cada tentativa é recusada por sua regra; saldo 5 e ordem ABERTA permanecem.

#### Identidade e ausência

- Preparação: Lista começa na posição 0 com item ID 42 e também contém outros IDs.
- Entrada/ação: Consultar ID 42 e depois um ID inexistente.
- Resultado esperado: Primeiro item é encontrado corretamente; ausência é retorno explícito e nenhuma consulta altera o cadastro.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
