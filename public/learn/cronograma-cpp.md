# Plano de ensino — C++

Do primeiro programa a aplicações locais com tipos, RAII, biblioteca padrão, templates, concorrência e investigação de desempenho.

**Carga estimada:** 288 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Nenhuma experiência prévia em C++ é exigida; lógica de programação ajuda, mas a sintaxe essencial é apresentada.
- Computador, editor de texto e compilador com suporte a C++20 e à biblioteca padrão usada nas aulas.
- No Windows, escolha MSVC com ferramentas de C++ ou g++ no WSL; não misture comandos de ambientes diferentes.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Ambiente, valores e controle | 24 | 1–3 | Calculadora de orçamento local |
| 02 | Funções e sequências | 24 | 4–6 | Relatório de serviços em memória |
| 03 | Coleções e algoritmos | 24 | 7–9 | Catálogo de itens de estoque |
| 04 | Tipos e modelagem | 24 | 10–12 | Modelo de ordem de serviço |
| 05 | Memória, ownership e RAII | 24 | 13–15 | Sessão de trabalho com recursos gerenciados |
| 06 | Erros, contratos e testes | 24 | 16–18 | Núcleo de estoque verificado |
| 07 | Templates e conceitos | 24 | 19–21 | Biblioteca pequena de cálculos |
| 08 | Ranges e visões | 24 | 22–24 | Painel de consultas de estoque |
| 09 | Arquivos e protocolos de dados | 24 | 25–27 | Importador local de estoque |
| 10 | Concorrência e sincronização | 24 | 28–30 | Processador local de contagens |
| 11 | Desempenho e ferramentas | 24 | 31–33 | Investigação de um relatório lento |
| 12 | Arquitetura e entrega | 24 | 34–36 | Oficina C++: ordens e estoque |

## Nível 01 — Ambiente, valores e controle

Execute programas pequenos, preveja operações e controle o caminho da execução.

**Aulas e objetivos**

- Aula 01: **Seu primeiro programa compilado** — Distinguir fonte, compilação, ligação e execução de um programa mínimo. (8 h)
  - Exercício 1: Troque o nome do aluno e acrescente uma linha com seu objetivo de estudo.
  - Exercício 2: Remova o ponto e vírgula da primeira instrução, compile, leia o diagnóstico e restaure a instrução.
  - Exercício 3: Retire somente o primeiro \n e preveja como as mensagens vão se juntar.
- Aula 02: **Tipos, inicialização e aritmética** — Escolher representações e prever divisão inteira e limites numéricos. (8 h)
  - Exercício 1: Calcule o preço de 12 horas a 3750 centavos por hora, declarando a faixa aceita.
  - Exercício 2: Compare static_cast<double>(7 / 2) e static_cast<double>(7) / 2.
  - Exercício 3: Tente compilar int quantidade{2.5}; e interprete a rejeição; depois escolha conscientemente um tipo.
- Aula 03: **Condições, laços e limites** — Controlar decisões e repetições sem esconder casos de fronteira. (8 h)
  - Exercício 1: Execute o cálculo para horas0,1 e3 e explique a soma em cada caso.
  - Exercício 2: Classifique nota inteira de0 a10: >=7 aprovada, >=5 recuperação, demais reprovada; recuse fora da faixa.
  - Exercício 3: Escreva um while que conte de3 até1 e termine; descreva o que muda em cada passo.

**Projeto:** Calculadora de orçamento local

- Programa que calcula horas e custo em centavos com dados de exemplo.
- Tratamento explícito de entradas negativas ou fora da faixa adotada.
- README com compilador, comandos e três resultados previstos.

**Critérios de conclusão**

- Compila como C++20 sem avisos nos comandos indicados.
- Distingue erro de compilação de erro no resultado.
- Explica divisão inteira, condição e limite do laço.

## Nível 02 — Funções e sequências

Separe uma tarefa em funções e trabalhe com sequências com limites claros.

**Aulas e objetivos**

- Aula 04: **Funções, parâmetros e contratos** — Extrair um cálculo com entradas, resultado e pré-condições explícitas. (8 h)
  - Exercício 1: Extraia uma função que calcule horas_por_dia*dias e use-a antes do cálculo em centavos.
  - Exercício 2: Crie void zerar(int valor) que atribua0 ao parâmetro e imprima a variável original depois da chamada.
  - Exercício 3: Especifique limites que garantam que custo não transborde para horas e preço recebidos.
- Aula 05: **vector, string e acesso verificado** — Usar sequências proprietárias e respeitar suas posições válidas. (8 h)
  - Exercício 1: Adapte o relatório para imprimir sem servicos quando a coleção estiver vazia.
  - Exercício 2: Receba um índice já convertido e só consulte a sequência se ele for menor que size.
  - Exercício 3: Copie servicos para outra variável, mude uma string da cópia e compare as duas listas.
- Aula 06: **const, referências e tempo de vida** — Expressar leitura ou alteração sem retornar referências para objetos destruídos. (8 h)
  - Exercício 1: Escreva uma função maior_hora que leia const vector<int>& e devolva um resultado por valor para uma lista não vazia.
  - Exercício 2: Escreva uma função dobrar(int& valor) e compare com uma versão que recebe int por valor, usando valores pequenos.
  - Exercício 3: Explique o defeito de int& ruim(){ int x=3; return x; } sem executar o uso dessa referência.

**Projeto:** Relatório de serviços em memória

- Funções para calcular total de horas e preço.
- Coleção de serviços com busca por índice validado.
- Casos de entrada vazia, um serviço e vários serviços.

**Critérios de conclusão**

- Funções pequenas expressam entradas e resultado sem estado global.
- Acesso por índice respeita os limites da sequência.
- Explica quando uma cópia é independente e quando há uma referência.

## Nível 03 — Coleções e algoritmos

Escolha estruturas e algoritmos a partir do contrato e da validade das posições.

**Aulas e objetivos**

- Aula 07: **Iteradores e operações que invalidam posições** — Remover elementos e reconhecer quando é necessário obter uma posição novamente. (8 h)
  - Exercício 1: Remova saldos negativos de um vector e mantenha zero como valor válido.
  - Exercício 2: Execute erase_if em um vector vazio e descreva o resultado.
  - Exercício 3: Encontre a posição lógica de um item por ID, acrescente outros itens e só depois faça uma nova busca para alterá-lo.
- Aula 08: **Algoritmos, ordenação e busca** — Aplicar algoritmos da biblioteca com comparadores e pré-condições corretas. (8 h)
  - Exercício 1: Compare a busca pelos IDs2 e9 depois da ordenação.
  - Exercício 2: Ordene com std::greater<int> e use o mesmo critério na busca binária.
  - Exercício 3: Explique por que um comparador que devolve a<=b não serve para sort; não execute um algoritmo com esse contrato quebrado.
- Aula 09: **map, set e consultas sem inserção** — Separar presença, quantidade zero e alteração deliberada de um catálogo. (8 h)
  - Exercício 1: Use set<string> para cadastrar A,A eB e informe a quantidade final.
  - Exercício 2: Acrescente uma consulta para B e mantenha a diferença entre A com zero e C ausente.
  - Exercício 3: Cadastre C com saldo3 usando uma operação de inserção explícita; depois faça uma nova consulta.

**Projeto:** Catálogo de itens de estoque

- Catálogo com IDs únicos e consulta sem inserir por acidente.
- Relatório ordenado por quantidade ou ID com desempate definido.
- Remoção de itens por predicado e explicação da validade dos iteradores.

**Critérios de conclusão**

- Busca ordenada é aplicada somente após cumprir sua pré-condição.
- Não usa referência ou iterador depois de uma operação que o invalida.
- Distingue ausência de uma quantidade igual a zero.

## Nível 04 — Tipos e modelagem

Agrupe dados e proteja regras com interfaces que não exponham estado inválido.

**Aulas e objetivos**

- Aula 10: **struct, enum class e estados do domínio** — Representar registros e estados nomeados sem usar números mágicos. (8 h)
  - Exercício 1: Acrescente cancelada à enumeração e à função de apresentação.
  - Exercício 2: Modele Item com ID e quantidade e crie três valores de exemplo.
  - Exercício 3: Mude a apresentação de aberta para em atendimento sem alterar o valor de Estado::aberta.
- Aula 11: **Classes e invariantes de estoque** — Proteger um estado válido por construção e operações verificadas. (8 h)
  - Exercício 1: Teste retiradas0, exatamente o saldo, acima do saldo e uma quantidade negativa com estoques preparados separadamente.
  - Exercício 2: Capture invalid_argument ao tentar construir Estoque{-1}.
  - Exercício 3: Implemente repor com uma faixa máxima de saldo definida, recusando quantidade negativa e soma fora da faixa antes da operação.
- Aula 12: **Composição e interfaces de dependência** — Trocar uma dependência sem mover as regras para a apresentação. (8 h)
  - Exercício 1: Crie um RegistroMemoria que guarde mensagens em vector<string> e use-o em Atendimento.
  - Exercício 2: Altere experimentalmente o tipo do parâmetro de escrever na implementação mantendo override e leia o diagnóstico; depois restaure.
  - Exercício 3: Descreva quando uma função de callback bastaria no lugar de Registro e escreva sua assinatura proposta.

**Projeto:** Modelo de ordem de serviço

- Tipo de ordem com identificador, horas e estado.
- Classe de estoque que valida a construção e a retirada.
- Serviço que recebe suas dependências por interface pequena.

**Critérios de conclusão**

- Não é possível construir saldo negativo pelo caminho público.
- Uma operação inválida preserva os dados anteriores.
- Composição e polimorfismo têm responsabilidade e tempo de vida explicados.

## Nível 05 — Memória, ownership e RAII

Relacione vida dos objetos, propriedade e liberação de recursos.

**Aulas e objetivos**

- Aula 13: **Escopo, destrutores e RAII** — Associar aquisição e liberação ao tempo de vida de um objeto. (8 h)
  - Exercício 1: Crie uma sessão interna em um bloco dentro de outro bloco com uma sessão externa e observe a ordem normal de destruição.
  - Exercício 2: Compare uma exceção antes de criar a sessão com uma exceção depois da construção, sem fazer o construtor falhar internamente.
  - Exercício 3: Modele um Relatorio contendo string e vector<int> sem escrever destrutor ou operadores especiais.
- Aula 14: **unique_ptr, transferência e move** — Representar propriedade exclusiva sem confundir move com cópia nem com destruição. (8 h)
  - Exercício 1: Escreva uma função que receba unique_ptr<Ordem> por valor e mostre o ID, e chame-a transferindo a propriedade.
  - Exercício 2: Escreva uma consulta que receba const Ordem& e não receba unique_ptr quando só precisa ler o ID.
  - Exercício 3: Explique por que testar uma string movida e concluir que sempre ficará vazia é um contrato incorreto.
- Aula 15: **shared_ptr, weak_ptr e ciclos** — Compartilhar propriedade apenas quando necessário e observar sem prolongar a vida do recurso. (8 h)
  - Exercício 1: Crie um segundo shared_ptr no bloco, destrua apenas um deles e verifique que a observação ainda pode obter o objeto.
  - Exercício 2: Desenhe uma ordem que possui um conjunto de evidências e uma evidência que só precisa observar sua ordem; proponha o sentido dos smart pointers.
  - Exercício 3: Descreva o que falta se duas threads alterarem simultaneamente um int dentro da Ordem mantida por shared_ptr.

**Projeto:** Sessão de trabalho com recursos gerenciados

- Objeto que registra início e término de uma sessão por escopo.
- Transferência explícita de uma propriedade exclusiva.
- Exemplo de observação sem prolongar a vida do objeto.

**Critérios de conclusão**

- Nenhuma referência escapa para um objeto local destruído.
- A transferência deixa claro quem possui o recurso em cada etapa.
- Ownership compartilhado é justificado e ciclos são evitados.

## Nível 06 — Erros, contratos e testes

Represente ausência, preserve invariantes diante de falhas e produza evidência de correção.

**Aulas e objetivos**

- Aula 16: **optional, variant e resultados explícitos** — Representar ausência e alternativas sem usar um valor válido como sentinela ambígua. (8 h)
  - Exercício 1: Consulte a chave C e imprima ausente apenas se o optional estiver vazio.
  - Exercício 2: Proponha variant<Ordem,Erro> para uma consulta que precise explicar ID inválido e não encontrado.
  - Exercício 3: Compare a regra imprimir saldo.value_or(0) com uma regra que precisa avisar cadastro inexistente.
- Aula 17: **Exceções e alteração sem estado parcial** — Construir uma mudança candidata e efetivá-la somente após validação. (8 h)
  - Exercício 1: Use a entrada{3,1} e confira o destino após a chamada.
  - Exercício 2: Teste entrada{-1,3} e{3,-1} com o mesmo destino inicial em chamadas separadas.
  - Exercício 3: Explique por que imprimir cada quantidade em um arquivo de log antes da validação não seria desfeito pelo catch.
- Aula 18: **Testes de comportamento e diagnóstico** — Verificar resultados e rejeições sem depender de assert para a correção da execução. (8 h)
  - Exercício 1: Acrescente um teste isolado que retire exatamente5 de um saldo inicial5.
  - Exercício 2: Altere temporariamente a subtração para saldo-=quantidade+1 e execute os testes; depois restaure.
  - Exercício 3: Compile este exemplo acrescentando -DNDEBUG e compare o resultado com o build normal.

**Projeto:** Núcleo de estoque verificado

- Consulta com ausência representada no tipo.
- Operação composta que valida antes de alterar o saldo.
- Testes de sucesso, limite e rejeição com estado observado.

**Critérios de conclusão**

- Não trata qualquer falha como uma quantidade padrão silenciosa.
- Falhas esperadas não deixam alteração parcial no exemplo.
- Testes continuam úteis em builds com NDEBUG quando a falha precisa ser detectada.

## Nível 07 — Templates e conceitos

Expresse algoritmos genéricos com requisitos e verificações em compilação.

**Aulas e objetivos**

- Aula 19: **Templates de função e requisitos de tipos** — Reutilizar uma operação mantendo claras as operações exigidas de cada tipo. (8 h)
  - Exercício 1: Teste valores abaixo, dentro e acima do intervalo inteiro0..10.
  - Exercício 2: Tente chamar limitar(2.5,0,10) e leia o diagnóstico; proponha uma chamada com escolha de representação coerente.
  - Exercício 3: Acrescente um teste de limitar(3,10,0) e verifique a exceção.
- Aula 20: **Concepts e contratos de programação genérica** — Restringir operações exigidas sem confundir satisfação sintática com regra de negócio. (8 h)
  - Exercício 1: Crie um tipo SaldoFixo com saldo()const devolvendo10 e use-o com disponivel.
  - Exercício 2: Crie um tipo cujo saldo()const devolva long e consulte TemSaldo com static_assert negado.
  - Exercício 3: Liste duas propriedades de negócio que TemSaldo não consegue provar com o requires mostrado.
- Aula 21: **constexpr, verificações estáticas e limites** — Separar avaliação em compilação de uma função que também pode executar em runtime. (8 h)
  - Exercício 1: Acrescente static_assert para soma_ate(10)==55.
  - Exercício 2: Chame soma_ate(-1) em um try/catch de runtime e registre a rejeição.
  - Exercício 3: Justifique a faixa0..1000 usada antes da soma e calcule o maior resultado permitido.

**Projeto:** Biblioteca pequena de cálculos

- Algoritmo parametrizado por tipo com contrato documentado.
- Conceito que descreve operações exigidas sem prometer semântica não verificada.
- Verificações estáticas de valores e propriedades do tipo.

**Critérios de conclusão**

- Tipos válidos produzem o resultado previsto sem conversões surpresas.
- Diagnósticos de tipos incompatíveis são investigados sem remover o requisito.
- Explica a diferença entre restrição sintática, regra de domínio e avaliação constante.

## Nível 08 — Ranges e visões

Combine algoritmos e visões sem perder de vista a origem e a vida dos dados.

**Aulas e objetivos**

- Aula 22: **Ranges, algoritmos e projeções** — Ordenar e consultar registros expressando qual campo participa da operação. (8 h)
  - Exercício 1: Inclua dois itens com o mesmo saldo e defina ordenação por saldo e depois ID.
  - Exercício 2: Procure o ID Z e apresente uma mensagem sem dereferenciar o resultado de ausência.
  - Exercício 3: Execute ordenação e consulta sobre um vector<Item> vazio.
- Aula 23: **Views e processamento preguiçoso** — Compor consultas sem supor que uma visão contém uma cópia dos resultados. (8 h)
  - Exercício 1: Selecione saldos iguais a zero e transforme cada um em uma mensagem de alerta.
  - Exercício 2: Materialize os resultados da consulta em vector<int> usando um laço.
  - Exercício 3: Explique por que devolver uma visão que observa um vector local destruído ao retornar é um defeito; não execute a visão pendente.
- Aula 24: **span, string_view e leitura sem propriedade** — Oferecer uma janela sobre dados existentes com limites e lifetime declarados. (8 h)
  - Exercício 1: Passe à função de soma apenas os dois primeiros elementos com span e first, depois de verificar o tamanho necessário.
  - Exercício 2: Construa string copia{id}, encerre o uso da origem e explique por que a cópia pode continuar existindo.
  - Exercício 3: Explique por que enviar id.data() a uma API que exige string C pode incluir texto além dos quatro caracteres.

**Projeto:** Painel de consultas de estoque

- Consulta com filtro e transformação declarados.
- Ordenação com projeção e sem cópia acidental do conjunto completo.
- Interface de leitura sobre dados existentes com lifetime documentado.

**Critérios de conclusão**

- Distingue coleção proprietária de visão não proprietária.
- Dados observados continuam vivos durante o uso de views.
- Não altera a base de modo que invalide a iteração em curso.

## Nível 09 — Arquivos e protocolos de dados

Leia, valide e grave dados locais com formato e falhas explícitos.

**Aulas e objetivos**

- Aula 25: **Arquivos, streams e ciclo de vida** — Escrever e ler um arquivo de laboratório verificando falhas e a finalização da escrita. (8 h)
  - Exercício 1: Crie antes um arquivo estoque-cpp-aula25.txt com o texto preservar, execute e confira a recusa sem mudar seu conteúdo.
  - Exercício 2: Em uma pasta descartável, escolha um caminho dentro de uma subpasta que não existe e investigue a falha de abertura.
  - Exercício 3: Descreva o que pode acontecer se um processo for interrompido no meio de uma gravação direta em seu arquivo principal.
- Aula 26: **Parsing com from_chars e validação completa** — Converter um campo numérico verificando erro, consumo e regra de domínio. (8 h)
  - Exercício 1: Teste0,1000 e1001 e compare presença e valor do optional.
  - Exercício 2: Teste espaço antes, espaço depois e sinal de mais, conforme a política descrita na aula.
  - Exercício 3: Use uma sequência muito longa de dígitos e confira que nenhuma quantidade é produzida.
- Aula 27: **Snapshots versionados e restauração validada** — Definir um formato de dados e construir um estado candidato antes de aceitá-lo. (8 h)
  - Exercício 1: Teste um snapshot que declare dois registros com o mesmo ID e saldos diferentes.
  - Exercício 2: Teste versão2 e um token extra depois de um snapshot válido.
  - Exercício 3: Mantenha um estoque válido e tente obter um candidato a partir de texto inválido antes de substituir os dados originais.

**Projeto:** Importador local de estoque

- Leitura e escrita de um arquivo de laboratório sem sobrescrever outro arquivo existente.
- Conversão numérica que rejeita sobra de texto e excesso de faixa.
- Snapshot versionado com validação antes de substituir o estado em memória.

**Critérios de conclusão**

- Detecta falha ao abrir, ler e finalizar escrita.
- Não considera um prefixo numérico suficiente para validar o campo inteiro.
- Documenta que arquivo de texto simples não fornece transação durável por si só.

## Nível 10 — Concorrência e sincronização

Defina o ciclo de vida do trabalho e proteja estado compartilhado.

**Aulas e objetivos**

- Aula 28: **jthread e tempo de vida do trabalho** — Criar trabalho concorrente finito e aguardar antes de ler seu resultado. (8 h)
  - Exercício 1: Passe um limite pequeno por valor para o trabalho e mantenha apenas o resultado capturado por referência.
  - Exercício 2: Escreva um trabalho com stop_token que execute no máximo10000 passos e cheque stop_requested entre passos; peça parada e aguarde.
  - Exercício 3: Explique por que devolver uma thread destacada que captura por referência um int local é um desenho inválido.
- Aula 29: **Mutex e invariantes de operações compostas** — Proteger a verificação e a alteração de saldo como uma única região crítica. (8 h)
  - Exercício 1: Use resumo enquanto as threads trabalham e mantenha a implementação protegida; no teste, confira propriedades em vez de uma sequência exata.
  - Exercício 2: Prepare uma versão com saldo inicial2 e tente retiradas de3 e-1 usando a interface protegida.
  - Exercício 3: Descreva o risco de duas operações adquirirem mutexes A eB em ordens opostas e uma alternativa de aquisição.
- Aula 30: **Atomics, contadores e limites da garantia** — Usar uma operação atômica simples sem apresentá-la como transação do domínio. (8 h)
  - Exercício 1: Use quatro trabalhos com1000 incrementos cada, aguardando todos antes da leitura.
  - Exercício 2: Explique por que load seguido de store(valor+1) pode perder incrementos mesmo que as duas operações sejam atômicas; não use isso como solução.
  - Exercício 3: Escolha uma estratégia para confirmar uma ordem e descontar saldo quando os dois campos devem mudar juntos.

**Projeto:** Processador local de contagens

- Trabalho que termina e é aguardado sem threads destacadas.
- Atualização composta de estoque protegida pelo mesmo mutex.
- Contador atômico com escopo e limites da garantia explicados.

**Critérios de conclusão**

- Não há acesso concorrente não sincronizado ao mesmo estado mutável.
- Objetos capturados vivem até o término do trabalho.
- Uma operação atômica isolada não é apresentada como transação de várias variáveis.

## Nível 11 — Desempenho e ferramentas

Meça uma hipótese e diferencie custo do programa, configuração e erro de memória.

**Aulas e objetivos**

- Aula 31: **Medições, chrono e hipóteses de desempenho** — Medir uma operação sem confundir uma leitura do relógio com evidência suficiente de otimização. (8 h)
  - Exercício 1: Colete várias amostras para uma carga maior com resultado conhecido, registrando flags e tamanho.
  - Exercício 2: Compare a mesma operação em duas versões com as mesmas flags de otimização, por exemplo-O2, se suportadas pelo compilador escolhido.
  - Exercício 3: Proponha uma hipótese para um relatório que percorre uma coleção muitas vezes e diga como a verificaria.
- Aula 32: **Capacidade, alocação e localidade** — Distinguir tamanho de capacidade e avaliar custos sem presumir políticas da implementação. (8 h)
  - Exercício 1: Compare reserve(4) com resize(4) em vectors separados e registre size.
  - Exercício 2: Registre mudanças de capacity durante várias inserções e descreva as observações sem transformá-las em regra da linguagem.
  - Exercício 3: Descreva uma carga em que só saldos são percorridos e outra que usa ID, saldo e estado juntos; proponha o que medir antes de mudar o layout.
- Aula 33: **Compilação, ligação e ferramentas de diagnóstico** — Reproduzir um build e investigar erros sem confundir categorias de falha. (8 h)
  - Exercício 1: Compile este arquivo em main.o e depois ligue para app usando os comandos descritos.
  - Exercício 2: Em uma cópia da pasta de estudo, extraia a declaração para oficina.hpp e a definição para oficina.cpp; mantenha main.cpp como cliente.
  - Exercício 3: Compare três casos em cópias separadas: ponto e vírgula ausente, definição omitida e resultado calculado errado com programa compilando.

**Projeto:** Investigação de um relatório lento

- Carga reproduzível com resultado validado fora da medição.
- Comparação de política de crescimento de vector sem assumir capacidade exata.
- Relatório com flags, ambiente, limitações e comandos de diagnóstico.

**Critérios de conclusão**

- Não conclui desempenho a partir de uma única execução curta.
- Não confunde reserve com mudança de size.
- Usa ferramentas para investigar e mantém a correção como critério.

## Nível 12 — Arquitetura e entrega

Integre regra de domínio, interfaces e operação em um projeto local revisável.

**Aulas e objetivos**

- Aula 34: **Casos de uso e fronteiras da aplicação** — Separar consulta, armazenamento e formato de apresentação por contratos pequenos. (8 h)
  - Exercício 1: Crie uma operação buscar de teste que devolva uma Ordem para OS-9 sem usar map e execute o mesmo Consultar.
  - Exercício 2: Teste ID vazio e ID válido não encontrado e registre como cada um é representado.
  - Exercício 3: Explique a limitação de guardar Consultar além do fim de um map capturado por referência.
- Aula 35: **Idempotência e confirmação de ordens** — Repetir uma confirmação sem repetir o efeito de baixa de estoque no modelo local. (8 h)
  - Exercício 1: Depois de pedido-1 para OS-1, tente a mesma chave com OS-2 e observe a rejeição e o saldo.
  - Exercício 2: Prepare uma ordem aberta que exija mais que o saldo e confirme que não é criada uma chave de sucesso.
  - Exercício 3: Descreva duas mudanças necessárias para manter essa garantia em múltiplas threads e após reiniciar.
- Aula 36: **Projeto final: CLI, snapshot e operação local** — Integrar confirmação, comandos e restauração limitada em um laboratório verificável. (8 h)
  - Exercício 1: Em uma pasta de laboratório, execute salvar snapshot-lab.txt e depois restaurar snapshot-lab.txt; tente salvar novamente no mesmo nome.
  - Exercício 2: Em cópias descartáveis, teste versão desconhecida, saldo inconsistente e arquivo de128bytes ou mais.
  - Exercício 3: Planeje e implemente várias ordens, comandos de consulta e confirmação, testes e formato versionado usando módulos e contratos das aulas anteriores.

**Projeto:** Oficina C++: ordens e estoque

- CLI que consulta e confirma ordens com validação e regra de saldo.
- Testes da repetição de confirmação, ausência e saldo insuficiente.
- README com build, execução, formato de dados, restauração e limites do projeto.

**Critérios de conclusão**

- Confirmação repetida não desconta estoque outra vez no modelo local.
- A camada de apresentação não decide a regra de estoque.
- Demonstra restauração validada e descreve o que falta para durabilidade e uso concorrente reais.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines) — Orientações dos autores do projeto sobre interfaces, RAII, ownership, tipos, templates e concorrência; as aulas são autorais.
- [Compilar com MSVC](https://learn.microsoft.com/en-us/cpp/build/walkthrough-compiling-a-native-cpp-program-on-the-command-line) — Preparação do terminal de desenvolvimento e compilação de um programa nativo.
- [Seleção do padrão no MSVC](https://learn.microsoft.com/en-us/cpp/build/reference/std-specify-language-standard-version) — Modo /std:c++20 e distinção entre padrão estável e opções preview.
- [Rascunho público de C++](https://eel.is/c++draft/) — Referência normativa em evolução; confirme a edição ao consultar recursos. A trilha usa um conjunto de recursos de C++20, sem exigir novidades posteriores.
- [Biblioteca de algoritmos](https://eel.is/c++draft/algorithms) — Contratos dos algoritmos e suas famílias no rascunho público.
- [Biblioteca de threads](https://eel.is/c++draft/thread) — Ciclo de vida, sincronização e contratos de threads no rascunho público.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Catálogo sem referências inválidas

Uma CLI mantém produtos em vector e map, remove itens e permite consultas por código. O algoritmo precisa conservar posições válidas e não criar produto só por consultar ausência.

**Aulas necessárias**

- Aula 04 — Funções, parâmetros e contratos
- Aula 05 — vector, string e acesso verificado
- Aula 06 — const, referências e tempo de vida
- Aula 07 — Iteradores e operações que invalidam posições
- Aula 08 — Algoritmos, ordenação e busca
- Aula 09 — map, set e consultas sem inserção

**Conceitos combinados:** Referências; Iteradores; Busca e presença.

### Combo 2 — Recursos e alteração sem estado parcial

Uma operação carrega um lote de reservas usando objetos com recursos exclusivos. Dados inválidos e exceções não podem vazar o recurso nem substituir parcialmente o catálogo válido.

**Aulas necessárias**

- Aula 11 — Classes e invariantes de estoque
- Aula 13 — Escopo, destrutores e RAII
- Aula 14 — unique_ptr, transferência e move
- Aula 15 — shared_ptr, weak_ptr e ciclos
- Aula 17 — Exceções e alteração sem estado parcial
- Aula 18 — Testes de comportamento e diagnóstico

**Conceitos combinados:** RAII; Propriedade; Exceções e testes.

### Combo 3 — Views, parsing e snapshot validado

Um relatório usa ranges e janelas de leitura; um snapshot textual versionado é carregado para restaurar o catálogo. O parser precisa consumir campos inteiros e a restauração não pode depender de memória destruída.

**Aulas necessárias**

- Aula 23 — Views e processamento preguiçoso
- Aula 24 — span, string_view e leitura sem propriedade
- Aula 25 — Arquivos, streams e ciclo de vida
- Aula 26 — Parsing com from_chars e validação completa
- Aula 27 — Snapshots versionados e restauração validada

**Conceitos combinados:** Contratos genéricos; Lifetime; Parsing e recuperação.

### Combo 4 — Confirmação concorrente e operação observável

Duas threads podem confirmar uma ordem e uma CLI salva snapshots. O invariante liga a verificação de estoque, a baixa e o registro da operação; diagnóstico deve separar correção de velocidade.

**Aulas necessárias**

- Aula 28 — jthread e tempo de vida do trabalho
- Aula 29 — Mutex e invariantes de operações compostas
- Aula 30 — Atomics, contadores e limites da garantia
- Aula 31 — Medições, chrono e hipóteses de desempenho
- Aula 35 — Idempotência e confirmação de ordens
- Aula 36 — Projeto final: CLI, snapshot e operação local

**Conceitos combinados:** Threads e locks; Idempotência; Medição e entrega.

### Projeto final — Controle local de reservas em C++

Construa uma CLI C++20 para reservar materiais, consultar disponibilidade e salvar/restaurar um snapshot versionado. A aplicação deve proteger propriedade, duração e alterações compostas sob erro e concorrência.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Definir estados nomeados, quantidades válidas e APIs que não exponham mutação arbitrária de estoque.
- Usar RAII e propriedade apropriada; não conservar views, referências ou iteradores além de sua validade.
- Verificar parsing completo, versão e dados do snapshot num estado candidato antes de substituir o estado válido.
- Proteger reserva, saldo e identidade da operação como um invariante; documentar o limite durável da idempotência.
- Testar vazio, ausência, fronteira, erro de parsing, rollback lógico, repetição e disputa sem depender apenas de assert.
- Documentar compilação C++20, ferramentas de diagnóstico, comandos CLI, um experimento de desempenho e restauração conferida.

**Entregáveis**

- Fontes da CLI com modelo, casos de uso e armazenamento separados.
- Executável de testes e fixtures de snapshot válido/inválido.
- README de compilação, execução, propriedade e contratos.
- Relatório de concorrência, diagnóstico e reabertura de snapshot.

**Critérios práticos**

- **Tipos e invariantes:** Definir estados nomeados, quantidades válidas e APIs que não exponham mutação arbitrária de estoque.
- **Propriedade e lifetime:** Usar RAII e propriedade apropriada; não conservar views, referências ou iteradores além de sua validade.
- **Entrada e recuperação:** Verificar parsing completo, versão e dados do snapshot num estado candidato antes de substituir o estado válido.
- **Concorrência e repetição:** Proteger reserva, saldo e identidade da operação como um invariante; documentar o limite durável da idempotência.
- **Evidências de comportamento:** Testar vazio, ausência, fronteira, erro de parsing, rollback lógico, repetição e disputa sem depender apenas de assert.
- **Entrega diagnosticável:** Documentar compilação C++20, ferramentas de diagnóstico, comandos CLI, um experimento de desempenho e restauração conferida.

**Testes de aceitação para executar localmente**

#### Reserva e repetição

- Preparação: SKU A possui 5 unidades; operação o-1 não foi aplicada.
- Entrada/ação: Confirmar 2 unidades e repetir o-1 com o mesmo conteúdo.
- Resultado esperado: Saldo 3 e um efeito de confirmação, dentro do limite de persistência documentado.

#### Snapshot recusado

- Preparação: Catálogo em memória válido com saldo 5.
- Entrada/ação: Carregar arquivo de versão desconhecida ou quantidade "12abc".
- Resultado esperado: Erro contextualizado; catálogo original continua com saldo 5 e nenhum registro parcialmente substituído.

#### Última unidade concorrente

- Preparação: Saldo 1 e duas threads com operações distintas.
- Entrada/ação: Ambas tentam reservar uma unidade; espere o término antes de verificar.
- Resultado esperado: Uma confirma e outra é recusada; saldo 0 e estruturas internas permanecem consistentes.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
