# Plano de ensino — Java

Aprenda Java do primeiro programa à arquitetura de serviços locais, com fundamentos sólidos, testes, JDBC, concorrência e operação.

**Carga estimada:** 288 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Nenhuma linguagem prévia é obrigatória.
- Saber criar pastas, editar texto e abrir um terminal.
- Para os roteiros Bash das aulas Maven, usar WSL2 ou Git Bash no Windows, ou criar manualmente os arquivos indicados.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Primeiros programas | 24 | 1–3 | Calculadora de orçamento de estudo |
| 02 | Métodos, arrays e texto | 24 | 4–6 | Analisador de nomes e notas |
| 03 | Modelagem com objetos | 24 | 7–9 | Cadastro de ordens de serviço em memória |
| 04 | Erros e contratos de domínio | 24 | 10–12 | Regras de cobrança e vencimento |
| 05 | Generics e coleções | 24 | 13–15 | Catálogo de equipamentos em memória |
| 06 | Lambdas e processamento de dados | 24 | 16–18 | Relatório de serviços |
| 07 | Build e testes | 24 | 19–21 | Biblioteca de regras testadas |
| 08 | Arquivos, JSON e HTTP | 24 | 22–24 | Importador e cliente de serviços |
| 09 | Persistência com JDBC | 24 | 25–27 | Repositório de ordens em H2 |
| 10 | Concorrência moderna | 24 | 28–30 | Processador de tarefas limitado |
| 11 | JVM, operação e segurança | 24 | 31–33 | Entrega operacional de uma CLI |
| 12 | Arquitetura e projeto final | 24 | 34–36 | API local de ordens e estoque |

## Nível 01 — Primeiros programas

Prepare o JDK e transforme entradas em decisões verificáveis.

**Aulas e objetivos**

- Aula 01: **JDK, compilação e primeiro programa** — Instalar o JDK e distinguir fonte, bytecode e execução. (8 h)
  - Exercício 1: Troque as duas mensagens para apresentar seu nome, um objetivo e suas horas semanais. Compile e execute.
  - Exercício 2: Remova o ponto e vírgula de uma chamada, registre o erro de compilação e corrija.
  - Exercício 3: Após compilar, identifique Main.java e Main.class. Explique para que cada arquivo serve.
- Aula 02: **Variáveis, tipos e expressões** — Calcular valores sem confundir divisão inteira, texto e números. (8 h)
  - Exercício 1: Calcule horas em 4, 12 e 52 semanas para uma carga de 6 horas semanais.
  - Exercício 2: Compare 9 / 4, 9 / 4.0 e (int) (9 / 4.0). Explique cada saída.
  - Exercício 3: Use Math.addExact(Integer.MAX_VALUE, 1), observe a falha e compare com Integer.MAX_VALUE + 1.
- Aula 03: **Condições, laços e argumentos** — Validar uma entrada e controlar repetição com fronteiras explícitas. (8 h)
  - Exercício 1: Execute a regra com 0, 1, 20 e 21 horas e registre cada resultado.
  - Exercício 2: Leia horas em args[0], verifique se existe um argumento e trate texto não numérico.
  - Exercício 3: Escreva uma versão while da projeção e explique por que esquecer semana++ impede o término.

**Projeto:** Calculadora de orçamento de estudo

- Programa de terminal com nome e horas semanais.
- Cálculo de horas em quatro semanas e aviso para valores inválidos.
- README com comandos e três exemplos de execução.

**Critérios de conclusão**

- Compila com javac e executa com java.
- Rejeita horas negativas e testa zero e o limite escolhido.
- Você explica tipos, expressões e cada ramo de decisão.

## Nível 02 — Métodos, arrays e texto

Extraia regras e trate sequências sem confundir referência com objeto.

**Aulas e objetivos**

- Aula 04: **Métodos e passagem por valor** — Extrair uma regra pura e entender parâmetros e retorno. (8 h)
  - Exercício 1: Crie frete(int distanciaKm) que retorna 500 + distanciaKm * 120 centavos e rejeita distância negativa.
  - Exercício 2: Passe um int[] a um método que altera o primeiro elemento e depois a outro que reatribui o parâmetro a um novo array.
  - Exercício 3: Divida a calculadora do nível anterior em validarHoras e calcularProjecao.
- Aula 05: **Arrays, índices e algoritmos básicos** — Percorrer uma coleção de tamanho fixo e tratar o caso vazio. (8 h)
  - Exercício 1: Crie métodos que calculam a menor e a maior nota, rejeitando array vazio.
  - Exercício 2: Troque a cópia do exemplo por int[] copia = notas e preveja a nova saída.
  - Exercício 3: Receba um índice e só mostre a nota se 0 <= índice < length.
- Aula 06: **Strings, igualdade e Unicode** — Tratar texto imutável e distinguir unidades UTF-16 de pontos de código. (8 h)
  - Exercício 1: Normalize espaços e caixa de três entradas e preserve também os originais.
  - Exercício 2: Compare new String("Go") com outro new String("Go") usando == e equals.
  - Exercício 3: Compare length e codePointCount para A, 😀 e uma letra com marca combinante.

**Projeto:** Analisador de nomes e notas

- Métodos separados para validar notas e calcular média.
- Leitura de um array com pelo menos cinco notas e um caso vazio.
- Relatório de nomes normalizados e explicação de limites Unicode.

**Critérios de conclusão**

- A média usa divisão adequada e rejeita conjunto vazio.
- Testes manuais cobrem nota negativa e acima do máximo.
- Você explica por que um método pode alterar um array recebido.

## Nível 03 — Modelagem com objetos

Proteja invariantes usando classes, records e contratos pequenos.

**Aulas e objetivos**

- Aula 07: **Classes, construtores e encapsulamento** — Manter o estado válido desde a criação do objeto. (8 h)
  - Exercício 1: Acrescente descrição obrigatória à Ordem e rejeite texto vazio ou composto só de espaços.
  - Exercício 2: Execute concluir duas vezes e decida se sua regra rejeita ou trata a segunda chamada como idempotente.
  - Exercício 3: Tente atribuir ordem.concluida a partir de uma classe externa e registre o erro de acesso.
- Aula 08: **Records, enums e valores imutáveis** — Representar dados e estados finitos com contratos simples. (8 h)
  - Exercício 1: Crie ArrayList, passe ao Resumo, adicione outro item à lista original e compare os tamanhos.
  - Exercício 2: Crie switch expression que devolve uma mensagem para cada Status.
  - Exercício 3: Crie dois records iguais e compare equals, hashCode e ==.
- Aula 09: **Interfaces, composição e polimorfismo** — Trocar um detalhe externo sem modificar a regra de domínio. (8 h)
  - Exercício 1: Implemente Notificador que guarda a última mensagem em vez de imprimir.
  - Exercício 2: Crie Notificador que acrescenta o prefixo [AVISO] e delega a outro Notificador.
  - Exercício 3: Explique por que colocar salvarNoBanco, enviarEmail e desenharTela na mesma interface dificulta o uso.

**Projeto:** Cadastro de ordens de serviço em memória

- Classe Ordem que controla as próprias transições de status.
- Record para a leitura de dados e enum para os estados.
- Interface de notificação com implementação de terminal.

**Critérios de conclusão**

- Dados inválidos são rejeitados na criação.
- Não há setter público que permita pular uma transição.
- Uma implementação alternativa troca a notificação sem reescrever o domínio.

## Nível 04 — Erros e contratos de domínio

Dê significado a falhas, valores e identidade dos objetos.

**Aulas e objetivos**

- Aula 10: **Exceções, causas e fechamento de recursos** — Tratar falhas na camada certa e manter recursos com dono. (8 h)
  - Exercício 1: Crie AutoCloseable que registra aberto e fechado e lance uma exceção dentro do try.
  - Exercício 2: Trate uma primeira linha ausente antes de chamar parseInt.
  - Exercício 3: Desenhe o caminho parser → caso de uso → terminal e indique onde acrescentar contexto e onde mostrar a falha.
- Aula 11: **Dinheiro, datas e relógios controlados** — Escolher unidades e tornar regras temporais reproduzíveis. (8 h)
  - Exercício 1: Calcule 10.00 / 3 com escala 2 e compare HALF_UP com DOWN.
  - Exercício 2: Teste venceu em um nanossegundo antes, no instante e depois do limite.
  - Exercício 3: Converta um Instant próximo da meia-noite para UTC e America/Sao_Paulo e compare LocalDate.
- Aula 12: **Igualdade, hash e identidade estável** — Usar objetos como chaves sem quebrar contratos de coleções. (8 h)
  - Exercício 1: Adicione ordens dos sistemas lab e externo com o mesmo número e consulte ambas.
  - Exercício 2: Explique o problema de uma chave cuja hash depende de status e que muda de ABERTA para CONCLUIDA.
  - Exercício 3: Modele um record Dinheiro e uma entidade Ordem e diga quais campos participariam da igualdade de cada um.

**Projeto:** Regras de cobrança e vencimento

- Cálculo monetário decimal com arredondamento explícito.
- Verificação de vencimento com relógio recebido como dependência.
- Exceções com causa preservada e recursos fechados.

**Critérios de conclusão**

- Testa o instante anterior, o limite e o instante seguinte.
- Não compara dinheiro por double nem igualdade por hash.
- Nenhum recurso fica aberto após uma falha.

## Nível 05 — Generics e coleções

Escolha estruturas pelos contratos de uso e preserve a segurança de tipos.

**Aulas e objetivos**

- Aula 13: **Generics, limites e PECS** — Expressar relações de tipos sem raw types nem casts arriscados. (8 h)
  - Exercício 1: Implemente <T> T primeiro(List<T> itens) com contrato para lista vazia.
  - Exercício 2: Passe ArrayList<Object> ao método adicionar e depois tente passar ArrayList<Double>.
  - Exercício 3: Crie uma List sem parâmetro, misture texto e números e mostre por que um cast na leitura pode falhar. Depois corrija.
- Aula 14: **List, Set, Map e contratos de mutação** — Escolher uma estrutura coerente com ordem, unicidade e acesso. (8 h)
  - Exercício 1: Imprima a diferença entre tag com quantidade 0 e gps ausente.
  - Exercício 2: Conte palavras num array usando Map<String,Integer> e merge.
  - Exercício 3: Tente adicionar um item em List.of e depois crie ArrayList a partir dela para editar.
- Aula 15: **Comparators e ordenação determinística** — Construir critérios de ordenação com desempate e sem overflow. (8 h)
  - Exercício 1: Ordene primeiro quantidade decrescente e depois nome crescente.
  - Exercício 2: Acrescente um ID ao Item e use-o como último desempate para nomes e quantidades iguais.
  - Exercício 3: Compare Integer.MIN_VALUE e Integer.MAX_VALUE com uma subtração e com Integer.compare.

**Projeto:** Catálogo de equipamentos em memória

- Catálogo indexado por identificador e consulta por chave.
- Ordenação por nome e desempate por identificador.
- Método genérico de leitura e cópia sem casts inseguros.

**Critérios de conclusão**

- Distingue chave ausente de valor permitido pelo contrato.
- Ordenação é determinística para empates.
- Compila sem raw types nem avisos de casts não verificados.

## Nível 06 — Lambdas e processamento de dados

Transforme coleções com funções, streams e ausência explícita.

**Aulas e objetivos**

- Aula 16: **Lambdas e interfaces funcionais** — Passar comportamento pequeno como argumento com tipos verificáveis. (8 h)
  - Exercício 1: Combine não vazio e comprimento máximo 20 em dois predicates.
  - Exercício 2: Crie Function<String,Integer> para obter comprimento após strip e explique como compor funções.
  - Exercício 3: Capture uma variável limite em uma lambda e tente reatribuí-la depois. Registre a mensagem do compilador.
- Aula 17: **Streams, redução e agrupamento** — Descrever um relatório com transformações sem acumuladores externos. (8 h)
  - Exercício 1: Acrescente dois serviços de Beto, um concluído e outro pendente, e confira o agrupamento.
  - Exercício 2: Repita o relatório com List.of() vazia e explique as saídas.
  - Exercício 3: Guarde uma Stream em variável, execute sum e tente reutilizá-la. Corrija o desenho.
- Aula 18: **Optional e ausência como contrato** — Representar um resultado que pode não existir sem esconder o caso vazio. (8 h)
  - Exercício 1: Crie busca por ID que retorna Optional<Item> e transforme o resultado em nome ou mensagem de ausência.
  - Exercício 2: Crie método padrao que imprime Calculando e compare orElse(padrao()) e orElseGet(Main::padrao) com Optional presente.
  - Exercício 3: Descreva um resultado para uma busca HTTP que distingue 404 de timeout.

**Projeto:** Relatório de serviços

- Filtro de ordens concluídas e soma dos valores em centavos.
- Agrupamento por técnico sem alterar a coleção original.
- Consulta que retorna Optional para resultado ausente.

**Critérios de conclusão**

- Não usa efeitos colaterais para acumular em stream.
- Testa conjunto vazio, ausente e múltiplos grupos.
- Explica operação intermediária, terminal e execução preguiçosa.

## Nível 07 — Build e testes

Crie um projeto reproduzível e verifique comportamentos com JUnit Jupiter.

**Aulas e objetivos**

- Aula 19: **Projeto Maven e dependências reproduzíveis** — Entender coordenadas, estrutura de pastas e fases do build. (8 h)
  - Exercício 1: Salve o roteiro como lab19.sh e execute em Bash com JDK 21+ e Maven. Depois rode mvn test dentro da pasta gerada.
  - Exercício 2: Explique a diferença entre o JDK que executa Maven e maven.compiler.release no pom.
  - Exercício 3: Execute mvn dependency:tree e explique por que não aparecem bibliotecas externas de produção neste exemplo.
- Aula 20: **JUnit Jupiter e asserções úteis** — Verificar resultado, erro e fronteira com testes que podem falhar. (8 h)
  - Exercício 1: Mude temporariamente a multiplicação para soma e execute mvn test. Depois restaure.
  - Exercício 2: Acrescente testes para preço zero, quantidade zero e os dois zero.
  - Exercício 3: Acrescente teste para total(Integer.MAX_VALUE, 2).
- Aula 21: **Testes parametrizados e fronteiras substituíveis** — Testar muitos cenários e controlar relógio e colaboradores. (8 h)
  - Exercício 1: Altere o contrato para considerar vencido somente após o instante limite e atualize implementação e caso no limite.
  - Exercício 2: Recupere o Notificador do nível 3 e teste que Confirmar envia a mensagem exatamente uma vez.
  - Exercício 3: Liste o que o teste de um repositório falso não prova sobre JDBC.

**Projeto:** Biblioteca de regras testadas

- Projeto Maven com fontes e testes separados.
- Testes parametrizados para limites de uma regra de cobrança.
- Duplo de teste para notificação e relógio fixo para vencimento.

**Critérios de conclusão**

- mvn test executa os testes num checkout limpo.
- Uma regressão proposital faz o teste relevante falhar.
- Testes não dependem de rede, relógio real ou ordem de execução.

## Nível 08 — Arquivos, JSON e HTTP

Troque dados com limites claros e feche recursos externos.

**Aulas e objetivos**

- Aula 22: **NIO, arquivos UTF-8 e leitura limitada** — Ler e escrever dados com dono do recurso e limites explícitos. (8 h)
  - Exercício 1: Valide linhas no formato nome;quantidade e registre erro com número da linha.
  - Exercício 2: Defina 1MiB como limite de uma importação e explique como lidar com arquivo que cresce durante a leitura.
  - Exercício 3: Descreva como substituir um relatório sem apagar a versão anterior se a geração falhar no meio.
- Aula 23: **JSON, DTOs e validação de fronteira** — Mapear JSON sem confundir sintaxe válida com regra válida. (8 h)
  - Exercício 1: Altere quantidade para zero e depois para -1 e observe a validação.
  - Exercício 2: Adicione um campo texto com aspas e quebras de linha e serialize pelo ObjectMapper.
  - Exercício 3: Envie um campo não previsto e registre o comportamento da configuração atual. Defina a política da API.
- Aula 24: **HttpClient, timeouts e status** — Consumir uma resposta HTTP local separando transporte e regra. (8 h)
  - Exercício 1: Mude a resposta local para 503 e faça o cliente emitir mensagem específica para esse status.
  - Exercício 2: Atrase a resposta local além do timeout de requisição e registre a exceção, encerrando o servidor no finally.
  - Exercício 3: Explique por que repetir um POST de confirmação após timeout pode aplicar o efeito duas vezes.

**Projeto:** Importador e cliente de serviços

- Importação de arquivo UTF-8 com validação por registro.
- DTO JSON validado antes de alterar o domínio.
- Cliente HTTP local com timeout e tratamento de status.

**Critérios de conclusão**

- Entrada inválida não produz atualização parcial silenciosa.
- Transporte, status HTTP e formato do corpo são tratados separadamente.
- Exemplos não dependem de credenciais nem de APIs públicas externas.

## Nível 09 — Persistência com JDBC

Execute SQL parametrizado e mantenha mudanças relacionadas numa transação.

**Aulas e objetivos**

- Aula 25: **JDBC e SQL parametrizado** — Consultar dados locais sem concatenar valores externos no SQL. (8 h)
  - Exercício 1: Insira um nome que contenha apóstrofo e consulte o valor.
  - Exercício 2: Busque um ID inexistente e modele o retorno sem confundir ausência com SQLException.
  - Exercício 3: Tente inserir o mesmo ID duas vezes e explique o papel da chave primária.
- Aula 26: **Transações, commit e rollback** — Manter estoque e confirmação consistentes quando ocorre uma falha. (8 h)
  - Exercício 1: Remova a falha simulada, acrescente registro de confirmação e commit. Confira estoque e confirmação.
  - Exercício 2: Provoque uma violação no INSERT de confirmação após o UPDATE e verifique rollback.
  - Exercício 3: Descreva o risco de enviar a mensagem HTTP de confirmação antes do commit.
- Aula 27: **Atualização condicional e concorrência no banco** — Evitar baixa negativa e detectar conflito por resultado do comando. (8 h)
  - Exercício 1: Crie coluna versao e atualize uma ordem com WHERE id = ? AND versao = ?.
  - Exercício 2: Insira itens de nomes repetidos e pagine com ORDER BY nome, id.
  - Exercício 3: Modele uma tabela de confirmação com chave de idempotência UNIQUE e resultado associado.

**Projeto:** Repositório de ordens em H2

- Criação de banco local ou em memória com esquema versionado.
- Confirmação de OS e baixa de estoque na mesma transação.
- Controle de concorrência e idempotência por chave única.

**Critérios de conclusão**

- Não concatena valores externos em SQL.
- Falha entre duas mudanças reverte a transação.
- Repetir a confirmação não duplica a baixa de estoque.

## Nível 10 — Concorrência moderna

Controle estado compartilhado, cancelamento e concorrência de I/O.

**Aulas e objetivos**

- Aula 28: **Memória compartilhada, locks e operações atômicas** — Distinguir visibilidade de atomicidade e proteger invariantes. (8 h)
  - Exercício 1: Troque AtomicInteger por um campo int compartilhado e repita o experimento. Explique por que obter 20000 uma vez não prova correção.
  - Exercício 2: Modele estoque e totalConsumido que devem ser atualizados juntos.
  - Exercício 3: Explique a função de start, incrementAndGet e join separadamente.
- Aula 29: **Virtual threads, limites e interrupção** — Executar tarefas de I/O sem ignorar recursos escassos e cancelamento. (8 h)
  - Exercício 1: Acrescente AtomicInteger para contar tarefas dentro da região protegida e registre o máximo.
  - Exercício 2: Submeta uma tarefa que espera e cancele seu Future com cancel(true). Registre a interrupção dentro da tarefa.
  - Exercício 3: Compare a motivação de virtual threads para esperar HTTP e para calcular um número primo grande.
- Aula 30: **CompletableFuture, composição e timeouts** — Combinar resultados sem confundir timeout do resultado com parada do trabalho. (8 h)
  - Exercício 1: Crie método buscarPreco que retorna CompletableFuture<Integer> e encadeie após um ID com thenCompose.
  - Exercício 2: Crie failedFuture e observe join; depois trate a falha com mensagem na fronteira.
  - Exercício 3: Desenhe uma confirmação cujo timeout acontece depois do commit no servidor.

**Projeto:** Processador de tarefas limitado

- Executor de virtual threads para tarefas independentes de I/O simulada.
- Limite explícito de operações externas em andamento.
- Interrupção, timeout e fechamento de executor com testes observáveis.

**Critérios de conclusão**

- O contador final é correto com sincronização adequada.
- Nenhuma tarefa fica sem caminho de término.
- Relatório não promete ganho de CPU por usar virtual threads.

## Nível 11 — JVM, operação e segurança

Empacote, observe e investigue antes de otimizar.

**Aulas e objetivos**

- Aula 31: **JVM, memória e JDK Flight Recorder** — Formular uma hipótese de desempenho com evidência observável. (8 h)
  - Exercício 1: Compile e execute com a opção StartFlightRecording descrita nos comandos. Resuma a gravação.
  - Exercício 2: Troque a lista por um processamento que não guarde todos os textos e compare consumo/alocação observados.
  - Exercício 3: Explique por que guardar todos os resultados numa lista static pode impedir a liberação dos objetos.
- Aula 32: **JAR, módulos e distribuição** — Empacotar uma aplicação e entender dependências de runtime. (8 h)
  - Exercício 1: Execute jar --list --file app.jar e identifique classe, manifesto e module-info.
  - Exercício 2: Use jlink --module-path app.jar --add-modules lab.app --output runtime-aula32 e execute o java gerado.
  - Exercício 3: Adicione outro módulo que usa uma classe pública de lab.app e observe a necessidade de exports para o pacote.
- Aula 33: **Configuração, caminhos e entrada não confiável** — Validar fronteiras sem transformar dados externos em comandos ou tipos arbitrários. (8 h)
  - Exercício 1: Leia a variável JAVA_FORGE_PORT e aceite somente inteiro entre 1024 e 65535, usando 8080 quando ela estiver ausente.
  - Exercício 2: Defina uma política para o caso em que relatorios é um link simbólico para fora da raiz.
  - Exercício 3: Liste informações que não deveriam aparecer em um log de requisição e proponha identificadores de correlação.

**Projeto:** Entrega operacional de uma CLI

- Artefato executável com versão do JDK documentada.
- Registro JFR local e hipótese sustentada pelos eventos observados.
- Configuração validada e documentação para falhas comuns.

**Critérios de conclusão**

- Não usa benchmark ingênuo como prova de capacidade de produção.
- Logs não incluem segredos nem dados pessoais fictícios desnecessários.
- Entrada externa não escapa do diretório permitido nem é desserializada de forma irrestrita.

## Nível 12 — Arquitetura e projeto final

Integre domínio, persistência e interfaces com testes de falha.

**Aulas e objetivos**

- Aula 34: **Portas, adaptadores e casos de uso** — Separar regras do domínio dos detalhes de armazenamento e transporte. (8 h)
  - Exercício 1: Separe leitura de estoque da operação atômica de consumir e diga quando o caso de uso precisa de cada uma.
  - Exercício 2: Escreva uma lista de cenários comuns para Memoria e um adapter JDBC.
  - Exercício 3: Modele uma porta para confirmar OS e consumir estoque atomicamente.
- Aula 35: **API HTTP local e contratos de resposta** — Expor uma consulta com método, rota, status e fechamento claros. (8 h)
  - Exercício 1: Faça o cliente usar POST no mesmo endpoint e verifique status 405 e cabeçalho Allow.
  - Exercício 2: Substitua o JSON fixo por resultado de um caso de uso e serialize com o ObjectMapper da aula 23.
  - Exercício 3: Liste os controles que faltam antes de disponibilizar esta demo fora do computador.
- Aula 36: **Idempotência, eventos e revisão final** — Distinguir demonstração local de uma entrega validada e operacional. (8 h)
  - Exercício 1: Depois da primeira chamada, repita req-1 para a ordem 99 e confira o conflito.
  - Exercício 2: Implemente a regra no adapter JDBC das aulas 25 a 27 com tabela de idempotência e outbox.
  - Exercício 3: Escreva README e uma matriz de ao menos oito cenários do projeto final, com comandos e resultados esperados.

**Projeto:** API local de ordens e estoque

- Domínio de OS com transições, evidências fictícias e regras de confirmação.
- Adapter JDBC com transação de confirmação e chave de idempotência.
- Interface HTTP local, testes, documentação e roteiro de operação.

**Critérios de conclusão**

- Domínio pode ser testado sem HTTP e sem banco real.
- Testes cobrem confirmação repetida, falha de persistência e concorrência.
- Limites de autenticação, autorização e produção são documentados; demo permanece local.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [Aprender Java](https://dev.java/learn/) — Tutoriais oficiais da linguagem, APIs e JVM.
- [API Java 21](https://docs.oracle.com/en/java/javase/21/docs/api/index.html) — Contratos das classes e interfaces usadas na base da trilha.
- [Apache Maven](https://maven.apache.org/guides/getting-started/) — Estrutura de projeto, dependências e ciclo de build.
- [JUnit Jupiter](https://docs.junit.org/6.1.3/overview.html) — Modelo de testes, asserções, parametrização e extensões.
- [JDBC](https://docs.oracle.com/javase/tutorial/jdbc/basics/) — Preparação de comandos e transações; exemplos clássicos devem ser lidos junto à API Java 21.
- [H2](https://h2database.github.io/html/quickstart.html) — Banco local de estudo e documentação do driver JDBC.
- [Virtual threads](https://dev.java/learn/new-features/virtual-threads/) — Aplicação de threads virtuais e limites de recursos externos.
- [JDK Flight Recorder](https://dev.java/learn/jvm/jfr/) — Observação de JVM e evidências para investigar desempenho.
- [Jackson 2.21](https://github.com/FasterXML/jackson/wiki/Jackson-Release-2.21) — Mapeamento de JSON e manutenção da linha usada nos exercícios.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Reserva tipada e comparação correta

Uma aplicação console recebe código e quantidade, encontra um recurso e tenta reservá-lo. Estados finitos, igualdade de texto e validação na criação devem produzir resultados previsíveis.

**Aulas necessárias**

- Aula 02 — Variáveis, tipos e expressões
- Aula 03 — Condições, laços e argumentos
- Aula 04 — Métodos e passagem por valor
- Aula 06 — Strings, igualdade e Unicode
- Aula 07 — Classes, construtores e encapsulamento
- Aula 08 — Records, enums e valores imutáveis

**Conceitos combinados:** Tipos; Igualdade; Invariantes e estados.

### Combo 2 — Relatório com coleções e ausência explícita

O relatório agrupa pedidos por cliente, ordena por total e usa objetos como chaves. Um cliente pode não ter pedidos; chaves mutáveis e acumuladores externos não devem comprometer o resultado.

**Aulas necessárias**

- Aula 12 — Igualdade, hash e identidade estável
- Aula 14 — List, Set, Map e contratos de mutação
- Aula 15 — Comparators e ordenação determinística
- Aula 16 — Lambdas e interfaces funcionais
- Aula 17 — Streams, redução e agrupamento
- Aula 18 — Optional e ausência como contrato

**Conceitos combinados:** Igualdade e hash; Coleções; Streams e Optional.

### Combo 3 — Entrada HTTP e confirmação transacional

Uma aplicação Maven recebe JSON de um serviço local, converte para DTO e confirma pedidos em JDBC. Testes controlam respostas e comprovam rollback quando a reserva não pode ser concluída.

**Aulas necessárias**

- Aula 20 — JUnit Jupiter e asserções úteis
- Aula 21 — Testes parametrizados e fronteiras substituíveis
- Aula 23 — JSON, DTOs e validação de fronteira
- Aula 24 — HttpClient, timeouts e status
- Aula 25 — JDBC e SQL parametrizado
- Aula 26 — Transações, commit e rollback

**Conceitos combinados:** DTO e HTTP; JUnit; JDBC e atomicidade.

### Combo 4 — Concorrência, limites e diagnóstico na JVM

A API disputa estoque, chama dependências com tarefas concorrentes e expõe contratos HTTP. Uma investigação de desempenho deve usar evidências e o cliente não pode confundir timeout com interrupção confirmada.

**Aulas necessárias**

- Aula 27 — Atualização condicional e concorrência no banco
- Aula 28 — Memória compartilhada, locks e operações atômicas
- Aula 29 — Virtual threads, limites e interrupção
- Aula 30 — CompletableFuture, composição e timeouts
- Aula 31 — JVM, memória e JDK Flight Recorder
- Aula 35 — API HTTP local e contratos de resposta

**Conceitos combinados:** Atualização condicional; Concorrência; Timeouts e observabilidade.

### Projeto final — Agenda de reservas em Java

Construa uma aplicação local de reserva de salas/equipamentos, com interface de terminal e consulta/confirmação HTTP. As reservas devem respeitar capacidade e conservar seu resultado sob falha e repetição.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Modelar identidades, estados e valores monetários/temporais com tipos coerentes e invariantes por construção.
- Produzir filtros e relatórios por coleções/streams com tratamento de ausência, empate e vazio.
- Usar JDBC parametrizado e uma transação para reserva, disponibilidade e chave idempotente, verificando a escrita condicional.
- Separar casos de uso de CLI/HTTP, validar DTOs e entradas, definir status e recusar acesso indevido antes de efeitos.
- Limitar trabalho concorrente, propagar interrupção/prazo e testar rejeições e falhas com JUnit e colaboradores controlados.
- Fornecer build Maven/JAR reproduzível, dados locais de teste, hipótese de desempenho e restauração conferida.

**Entregáveis**

- Projeto Maven com domínio, adaptadores e interfaces executáveis.
- Testes JUnit e cenários locais de concorrência e falha.
- README com comandos de build, execução, configuração e contratos.
- Relatório de recuperação de dados e investigação de uma hipótese de desempenho.

**Critérios práticos**

- **Modelo estável:** Modelar identidades, estados e valores monetários/temporais com tipos coerentes e invariantes por construção.
- **Consultas determinísticas:** Produzir filtros e relatórios por coleções/streams com tratamento de ausência, empate e vazio.
- **Persistência atômica:** Usar JDBC parametrizado e uma transação para reserva, disponibilidade e chave idempotente, verificando a escrita condicional.
- **Fronteiras e acesso:** Separar casos de uso de CLI/HTTP, validar DTOs e entradas, definir status e recusar acesso indevido antes de efeitos.
- **Concorrência e testes:** Limitar trabalho concorrente, propagar interrupção/prazo e testar rejeições e falhas com JUnit e colaboradores controlados.
- **Entrega verificável:** Fornecer build Maven/JAR reproduzível, dados locais de teste, hipótese de desempenho e restauração conferida.

**Testes de aceitação para executar localmente**

#### Reserva com capacidade

- Preparação: Recurso R tem 3 vagas e operação res-1 ainda não existe.
- Entrada/ação: Reservar 2 vagas usando res-1.
- Resultado esperado: Uma reserva confirmada e uma vaga disponível; resultado persistido para a operação.

#### Disputa pela última vaga

- Preparação: Uma vaga e duas conexões/tentativas independentes.
- Entrada/ação: Cada tentativa solicita uma vaga com chave própria.
- Resultado esperado: Somente uma confirma; a outra recebe recusa/conflito e a disponibilidade não fica negativa.

#### Falha e retorno da operação

- Preparação: Falha de comunicação após possível commit; base reaberta conforme o roteiro.
- Entrada/ação: Repetir res-1 com mesmo conteúdo.
- Resultado esperado: A resposta corresponde à reserva original sem nova baixa; conteúdo divergente para a chave é recusado.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
