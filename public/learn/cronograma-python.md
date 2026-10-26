# Plano de ensino — Python

Do primeiro script à automação, aos serviços e à investigação de sistemas Python, com prática local e biblioteca padrão.

**Carga estimada:** 216 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Nenhuma experiência prévia de programação é exigida.
- Computador com Python 3.12 ou superior; os exemplos não exigem recursos experimentais.
- Terminal e editor de texto; acesso à internet para instalar o interpretador e consultar as fontes.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Ambiente e lógica | 18 | 1–3 | Calculadora de horas de estudo |
| 02 | Coleções e funções | 18 | 3–5 | Controle de tarefas no terminal |
| 03 | Módulos, erros e arquivos | 18 | 5–7 | Agenda persistida em JSON |
| 04 | Modelagem e contratos | 18 | 7–9 | Catálogo de equipamentos fictícios |
| 05 | Iteração e abstrações | 18 | 10–12 | Importador incremental de registros |
| 06 | Testes e qualidade | 18 | 12–14 | Suíte de testes do importador |
| 07 | Ferramentas e automação | 18 | 14–16 | CLI instalável de tarefas |
| 08 | Dados e integrações | 18 | 16–18 | Sincronizador de catálogo local |
| 09 | Concorrência | 18 | 19–21 | Processador concorrente de lotes |
| 10 | APIs e segurança | 18 | 21–23 | API local de ordens de serviço |
| 11 | Desempenho e runtime | 18 | 23–25 | Diagnóstico do processador de lotes |
| 12 | Arquitetura e projeto final | 18 | 25–27 | Oficina Python: OS e estoque |

## Nível 01 — Ambiente e lógica

Execute pequenos programas e transforme uma regra em instruções previsíveis.

**Aulas e objetivos**

- Aula 01: **Seu primeiro script e o interpretador** — Executar um arquivo e distinguir código, terminal e resultado. (6 h)
  - Exercício 1: Imprima seu nome e seu objetivo de estudo em duas linhas diferentes.
  - Exercício 2: Troque print por Print, execute e registre o erro. Depois corrija e explique a diferença.
  - Exercício 3: Acrescente print(nome, nome) e escreva sua previsão antes de executar.
- Aula 02: **Valores, nomes, strings e números** — Escolher tipos e distinguir atribuição de comparação. (6 h)
  - Exercício 1: Calcule o total de quatro itens a 1990 centavos e imprima com uma f-string.
  - Exercício 2: Preveja -7 // 2 e compare com int(-7 / 2). Explique a diferença.
  - Exercício 3: Compare "2" + "3" com int("2") + int("3"). Trate o caso "dois" como uma entrada que precisa de validação.
- Aula 03: **Condições, laços e limites** — Expressar decisões e repetir operações sem ultrapassar fronteiras. (6 h)
  - Exercício 1: Classifique notas de 0 a 10: aprovação em 7 ou mais, recuperação entre 5 e 7, reprovação abaixo de 5.
  - Exercício 2: Some os números de 1 a 5 com um laço e confira o resultado sem usar sum.
  - Exercício 3: Crie um while que imprima 3, 2, 1 e depois "fim". Explique o que aconteceria sem decrementar.

**Projeto:** Calculadora de horas de estudo

- Script que recebe horas por dia e dias por semana.
- Relatório de horas semanais e mensais de referência.
- README com instalação e três exemplos de execução.

**Critérios de conclusão**

- Rejeita valores negativos sem encerrar com traceback para o usuário.
- Usa funções ou blocos compreensíveis e nomes claros.
- Demonstra resultado esperado em pelo menos três entradas.

## Nível 02 — Coleções e funções

Organize dados em memória e extraia regras reutilizáveis.

**Aulas e objetivos**

- Aula 04: **Listas, referências e mutabilidade** — Distinguir alterar um objeto de criar uma cópia. (6 h)
  - Exercício 1: Dada [0, 3, -1, 5], crie uma lista só com positivos e prove que a original não mudou.
  - Exercício 2: Faça uma lista com uma lista interna, copie com copy e altere um item interno pela cópia. Explique o que mudou.
  - Exercício 3: Execute itens = [1]; retorno = itens.append(2). Imprima itens e retorno e corrija uma atribuição itens = itens.append(3).
- Aula 05: **Dicionários, conjuntos e ausência** — Modelar consultas por chave e eliminar duplicações com intenção. (6 h)
  - Exercício 1: Conte ocorrências em ["a", "b", "a", "c", "b", "a"] usando um dict.
  - Exercício 2: Calcule quais IDs esperados {1, 2, 3} faltam no recebido {2, 3, 4} e quais são extras.
  - Exercício 3: Crie um dict com {"observacao": None}. Demonstre que get sozinho não distingue essa chave de outra ausente.
- Aula 06: **Funções, argumentos e contratos** — Extrair regras e evitar estado compartilhado por argumento padrão. (6 h)
  - Exercício 1: Extraia uma função aprovado(nota) que devolva bool, aceitando somente notas entre 0 e 10.
  - Exercício 2: Implemente adicionar(item, itens=None) e demonstre que chamadas sem itens não compartilham resultado.
  - Exercício 3: No exemplo, tente total(100, 2, 10), registre o erro e faça a chamada correta.

**Projeto:** Controle de tarefas no terminal

- Lista de tarefas com identificador, título e estado.
- Funções de cadastrar, concluir e listar sem duplicar IDs.
- Cenários de lista vazia, item existente e item ausente.

**Critérios de conclusão**

- Não altera coleções recebidas sem declarar esse contrato.
- Não compartilha listas por argumento padrão mutável.
- Diferencia chave ausente de valor falso ou zero.

## Nível 03 — Módulos, erros e arquivos

Separe responsabilidades e preserve os dados ao lidar com falhas.

**Aulas e objetivos**

- Aula 07: **Módulos, imports e ponto de entrada** — Organizar arquivos sem executar efeitos durante a importação. (6 h)
  - Exercício 1: Crie regras.py com uma função total e main.py que a importe. Ao importar regras, nenhuma mensagem deve aparecer.
  - Exercício 2: Execute o exemplo diretamente e depois importe main a partir de outro arquivo. Registre a diferença de saída.
  - Exercício 3: Explique por que criar um arquivo chamado json.py pode quebrar import json e proponha um nome melhor.
- Aula 08: **Exceções e falhas com contexto** — Tratar apenas as falhas esperadas e preservar a causa. (6 h)
  - Exercício 1: Acrescente os casos "0" e "2.5" ao exemplo e explique o que cada um deve fazer.
  - Exercício 2: Substitua um except Exception genérico de conversão por ValueError e explique o que deve continuar visível.
  - Exercício 3: Provoque a falha "abc" sem capturar no topo e examine __cause__ ou o traceback.
- Aula 09: **Arquivos, caminhos e JSON** — Ler e escrever texto UTF-8 com fechamento e formato explícitos. (6 h)
  - Exercício 1: Salve duas tarefas em uma pasta de laboratório e leia de volta. Use um título com acento.
  - Exercício 2: Compare tentar ler arquivo ausente com ler o texto "{quebrado" como JSON. Registre os tipos de erro.
  - Exercício 3: Exporte as tarefas usando csv.DictWriter com cabeçalho, newline="" e UTF-8. Leia com DictReader e compare os títulos.

**Projeto:** Agenda persistida em JSON

- Módulos de regras, armazenamento e entrada do usuário.
- Leitura e escrita UTF-8 em uma pasta de laboratório.
- Tratamento de arquivo ausente e JSON inválido com mensagem útil.

**Critérios de conclusão**

- Importar o módulo de regras não inicia o menu.
- Recursos são fechados com with.
- Erro de formato não é silenciosamente tratado como agenda vazia.

## Nível 04 — Modelagem e contratos

Expresse invariantes e comportamentos sem depender de hierarquias profundas.

**Aulas e objetivos**

- Aula 10: **Classes e dataclasses com invariantes** — Modelar dados e rejeitar estados que não fazem sentido. (6 h)
  - Exercício 1: Teste Item com nome vazio, preço negativo e preço zero. Descreva quais devem ser aceitos.
  - Exercício 2: Crie uma dataclass Pedido com itens usando default_factory=list. Demonstre duas instâncias independentes.
  - Exercício 3: Inclua uma lista em uma dataclass frozen e experimente append. Compare com tentar substituir o campo inteiro.
- Aula 11: **Type hints, Protocol e fronteiras** — Documentar interfaces pequenas e separar tipagem de validação. (6 h)
  - Exercício 1: Crie uma implementação que sempre devolva "Teste" e passe-a a exibir sem alterar essa função.
  - Exercício 2: Implemente ler_id(valor) que rejeite strings, bool e inteiros menores que 1, retornando int válido.
  - Exercício 3: Seu serviço só usa obter, mas a classe real também remove tabelas e faz backup. Defina um Protocol mínimo e justifique.
- Aula 12: **Composição, propriedades e estado** — Proteger mudanças de estado e compor objetos com responsabilidades claras. (6 h)
  - Exercício 1: Chame concluir duas vezes e verifique o estado após a segunda tentativa.
  - Exercício 2: Crie um serviço que recebe uma lista de ordens por construtor e oferece contar_concluidas.
  - Exercício 3: Modele Item com preço e quantidade e uma propriedade total_centavos sem setter.

**Projeto:** Catálogo de equipamentos fictícios

- Modelo de equipamento com preço em centavos e validação.
- Serviço que recebe um repositório por contrato explícito.
- Implementação em memória com cenários de cadastro e duplicidade.

**Critérios de conclusão**

- Type hints não são confundidos com validação de entrada.
- Coleções de instâncias não são compartilhadas por acidente.
- Regras permanecem no domínio e não apenas na interface.

## Nível 05 — Iteração e abstrações

Processe dados de forma incremental e administre ciclos de vida.

**Aulas e objetivos**

- Aula 13: **Iteradores, generators e processamento incremental** — Consumir sequências sem supor que todos os dados já estão em memória. (6 h)
  - Exercício 1: Crie um gerador que receba linhas de texto e produza inteiros somente para linhas não vazias.
  - Exercício 2: Produza os quadrados de 0 a 999999 sem lista; consuma apenas os três primeiros e explique o trabalho realizado.
  - Exercício 3: Altere o exemplo para imprimir [2, 4] duas vezes, sem armazenar os resultados numa lista compartilhada.
- Aula 14: **Closures e decorators com metadados** — Acrescentar comportamento a uma função preservando seu contrato. (6 h)
  - Exercício 1: Crie um decorador que conte chamadas sem alterar o resultado de somar(a, b). Demonstre duas chamadas.
  - Exercício 2: Implemente maior_que(limite) que devolve uma função para testar se um valor supera o limite.
  - Exercício 3: Remova wraps do exemplo e compare __name__ e a documentação da função. Depois restaure.
- Aula 15: **Context managers e limpeza garantida** — Definir abertura e encerramento de recursos inclusive quando ocorre uma exceção. (6 h)
  - Exercício 1: Execute sessao uma vez sem erro e outra com erro; comprove que fechou aparece nas duas.
  - Exercício 2: Mude o valor de yield para um dict com contador e altere esse dict dentro do with. Registre o estado na saída.
  - Exercício 3: Reescreva open/try/finally/close como with open(..., encoding="utf-8"). Use arquivo temporário.

**Projeto:** Importador incremental de registros

- Gerador que lê registros sem carregar todo o arquivo.
- Decorador que contabiliza chamadas preservando metadados.
- Gerenciador de contexto com limpeza comprovada após exceção.

**Critérios de conclusão**

- Iteradores não são reutilizados após esgotamento sem recriação.
- Sem função de produção que retorna dados fictícios para esconder erro.
- Um teste ou demonstração confirma a limpeza no caminho de falha.

## Nível 06 — Testes e qualidade

Construa verificações que detectem regressões e controlem as fronteiras.

**Aulas e objetivos**

- Aula 16: **Testes unitários e fronteiras** — Escrever testes que falham quando uma regra é violada. (6 h)
  - Exercício 1: Troque a multiplicação por adição, rode a suíte e identifique qual cenário detecta o defeito. Depois corrija.
  - Exercício 2: Acrescente testes para preço zero e preço negativo, além dos casos já presentes.
  - Exercício 3: Separe a regra em regras.py e os testes em test_regras.py. Execute com python -m unittest -v.
- Aula 17: **Dublês, relógios e fronteiras externas** — Controlar dependências para testar decisões sem depender do mundo exterior. (6 h)
  - Exercício 1: Teste vencida imediatamente antes, no limite e depois do vencimento com instantes UTC fixos.
  - Exercício 2: Faça um cliente fake lançar TimeoutError e teste se o serviço traduz isso para a falha pública definida pelo contrato.
  - Exercício 3: Compare testar uma soma com mocks de cada operador a testar sua saída. Escolha a verificação mais estável e explique.
- Aula 18: **Fixtures, arquivos temporários e regressão** — Isolar testes de integração pequenos e manter contraexemplos encontrados. (6 h)
  - Exercício 1: Acrescente um teste que escreve JSON truncado e exige JSONDecodeError na leitura.
  - Exercício 2: Crie um cenário com vírgula, aspas e acento em um campo e faça round-trip JSON e CSV.
  - Exercício 3: Execute a suíte duas vezes e também apenas um teste. Demonstre que o resultado não depende de arquivo anterior.

**Projeto:** Suíte de testes do importador

- Testes de sucesso, fronteira, entrada inválida e regressão.
- Relógio ou cliente substituído na fronteira correta.
- Arquivos temporários e comando de descoberta documentado.

**Critérios de conclusão**

- Testes passam isolados e em outra ordem.
- Uma implementação deliberadamente incorreta faz ao menos um teste falhar.
- Asserções verificam resultados e regras, não detalhes sem relevância.

## Nível 07 — Ferramentas e automação

Transforme scripts em ferramentas instaláveis e observáveis.

**Aulas e objetivos**

- Aula 19: **Ambientes, dependências e pyproject.toml** — Identificar o interpretador e descrever um projeto instalável. (6 h)
  - Exercício 1: Crie .venv numa pasta da aula e imprima sys.executable usando o executável desse ambiente.
  - Exercício 2: Crie src/oficina/__init__.py e uma função total, declare backend e metadados em pyproject.toml e instale a pasta atual com o comando python -m pip install .
  - Exercício 3: Explique a diferença entre declarar uma faixa de dependência e registrar uma resolução exata de todas as dependências transitivas.
- Aula 20: **CLI com argparse e códigos de saída** — Criar uma interface de terminal que se integra a outras ferramentas. (6 h)
  - Exercício 1: Troque a lista fixa por leitura dos argumentos reais e teste --help, entrada válida e texto no lugar de inteiro.
  - Exercício 2: Crie subcomandos adicionar e listar para a lista de tarefas em memória.
  - Exercício 3: Acrescente uma opção --json e gere um documento único no stdout. Faça uma mensagem de diagnóstico ir para stderr.
- Aula 21: **Logging, configuração e subprocessos seguros** — Registrar decisões úteis e executar ferramentas com limites explícitos. (6 h)
  - Exercício 1: Execute um subprocesso Python que encerre com código 2 e trate CalledProcessError sem esconder o código.
  - Exercício 2: Crie um processo filho que espera um segundo e limite a chamada a 0.05 segundo. Registre TimeoutExpired.
  - Exercício 3: Receba um token fictício e um ID de operação; registre apenas o ID e o resultado. Explique como verificar isso.

**Projeto:** CLI instalável de tarefas

- Projeto com pyproject.toml e metadados coerentes.
- Subcomandos de cadastrar e listar com ajuda automática.
- Logs em stderr e resultados em stdout para integração.

**Critérios de conclusão**

- Instala em um ambiente virtual novo.
- Argumentos inválidos produzem saída e código de retorno apropriados.
- Nenhum segredo é incluído em logs ou no repositório.

## Nível 08 — Dados e integrações

Trate limites de rede e garanta consistência da persistência.

**Aulas e objetivos**

- Aula 22: **Cliente HTTP, JSON e limites de entrada** — Distinguir resposta HTTP, falha de transporte e dados inválidos. (6 h)
  - Exercício 1: Altere o servidor local para responder 503 e registre como urllib sinaliza a resposta.
  - Exercício 2: Faça o servidor local retornar mais de 1024 bytes e demonstre a rejeição antes de interpretar o documento.
  - Exercício 3: Teste documentos {"total": true}, {"total": "3"} e {}. Explique por que todos devem falhar neste contrato estrito.
- Aula 23: **SQLite, consultas parametrizadas e conexões** — Persistir registros com tipos, restrições e ciclo de vida definidos. (6 h)
  - Exercício 1: Consulte um nome inexistente e trate o retorno de fetchone sem tentar acessar linha[0].
  - Exercício 2: Tente inserir o mesmo nome duas vezes e observe IntegrityError. Proponha uma mensagem pública apropriada.
  - Exercício 3: Consulte um nome contendo aspas e uma tentativa textual de SQL usando parâmetros. Confira que a tabela continua existente.
- Aula 24: **Transações, rollback e operações compostas** — Agrupar mudanças que precisam acontecer juntas. (6 h)
  - Exercício 1: Mude as duas baixas para 2 e 1 e confira a quantidade final. Depois provoque uma falha para comparar.
  - Exercício 2: Acrescente uma tabela de ordens e confirme status junto com a baixa. Provoque falha após atualizar status.
  - Exercício 3: Explique por que enviar uma mensagem antes do commit pode produzir inconsistência e desenhe uma tabela de eventos pendentes.

**Projeto:** Sincronizador de catálogo local

- Cliente que limita tamanho, usa timeout e valida o documento recebido.
- Tabela SQLite com unicidade e consultas parametrizadas.
- Operação composta atômica com cenário comprovado de rollback.

**Critérios de conclusão**

- Não concatena entrada do usuário ao SQL.
- Fecha conexão explicitamente e entende o contexto transacional.
- Timeout e status HTTP são tratados como contratos diferentes.

## Nível 09 — Concorrência

Escolha entre tarefas, threads e processos de acordo com o trabalho.

**Aulas e objetivos**

- Aula 25: **Threads, pools e estado compartilhado** — Esperar tarefas e proteger invariantes sem usar sleeps como sincronização. (6 h)
  - Exercício 1: Faça carregar lançar ValueError para o número 2 e demonstre que consumir os resultados observa a falha.
  - Exercício 2: Instrumente quantas tarefas estão ativas e qual foi o máximo; execute dez itens com dois workers.
  - Exercício 3: Reescreva a contagem para que cada worker só retorne um valor e o chamador agregue os resultados.
- Aula 26: **Processos, CPU e a evolução do GIL** — Escolher paralelismo considerando versão, serialização e custo. (6 h)
  - Exercício 1: Compare a versão sequencial e a de processos para limites 0, 1, 3 e 10.
  - Exercício 2: Meça lotes pequenos e grandes em sequência e com pool. Registre tempo, versão, workers e hardware disponível.
  - Exercício 3: Verifique sua versão e documente se a build é convencional ou free-threaded, usando a documentação da versão instalada.
- Aula 27: **asyncio e grupos de tarefas** — Executar concorrência cooperativa com um ciclo de vida observável. (6 h)
  - Exercício 1: Crie uma corrotina que retorna "pronto" e execute-a com asyncio.run a partir de main.py.
  - Exercício 2: Faça uma tarefa falhar e outra registrar limpeza em finally. Observe o encerramento do TaskGroup e trate ExceptionGroup apropriadamente.
  - Exercício 3: Compare time.sleep com await asyncio.sleep dentro de duas tarefas. Explique a diferença sem depender de tempos exatos.

**Projeto:** Processador concorrente de lotes

- Comparação de uma carga simulada de I/O em sequência e com pool.
- Carga de CPU executada por processos com entrada serializável.
- Versão assíncrona com grupo de tarefas e finalização definida.

**Critérios de conclusão**

- Não usa sleep para supor que uma tarefa terminou.
- Estado compartilhado tem dono ou sincronização explícita.
- Medições registram ambiente e não prometem ganho universal.

## Nível 10 — APIs e segurança

Desenhe fronteiras HTTP e valide dados antes de executar efeitos.

**Aulas e objetivos**

- Aula 28: **Filas limitadas, timeout e cancelamento** — Controlar o volume de trabalho e encerrar tarefas sem abandoná-las. (6 h)
  - Exercício 1: Adapte o processamento para dois consumidores e encerre ambos corretamente. Compare os resultados sem exigir ordem.
  - Exercício 2: Inclua um finally que registre liberação no trabalho que excede o timeout. Prove que ele rodou.
  - Exercício 3: Faça um consumidor aguardar brevemente por item e observe um produtor usando maxsize=1. Registre eventos em vez de estimar por sleep externo.
- Aula 29: **Fronteira HTTP e uma API WSGI didática** — Separar protocolo, serviço de aplicação e serialização. (6 h)
  - Exercício 1: Invocar app com PATH_INFO=/ausente e conferir status, Content-Type e JSON.
  - Exercício 2: Crie obter_total como função de aplicação usada por uma CLI e por uma rota. Não duplique a regra nas interfaces.
  - Exercício 3: Em outra pasta de laboratório, sirva app com wsgiref.simple_server apenas em 127.0.0.1 e consulte /health. Documente seu limite de uso.
- Aula 30: **Validação, autorização e dados não confiáveis** — Checar o recurso solicitado e limitar efeitos nas fronteiras. (6 h)
  - Exercício 1: Teste o próprio técnico, outro técnico e um administrador na mesma OS.
  - Exercício 2: Implemente validar_quantidade para aceitar somente int entre 1 e 100; rejeite True, "2", zero e 101.
  - Exercício 3: Provoque uma falha interna fictícia com token no detalhe e produza uma resposta pública genérica com ID de operação.

**Projeto:** API local de ordens de serviço

- Rotas de criar, consultar e concluir OS com respostas JSON.
- Autorização por recurso em cenário de técnicos distintos.
- Limites de entrada, timeout e mensagens públicas sem detalhes internos.

**Critérios de conclusão**

- Servidor de referência é identificado como laboratório, não produção.
- Uma sessão válida não autoriza acessar qualquer OS.
- Casos de erro têm status, corpo e efeito persistido coerentes.

## Nível 11 — Desempenho e runtime

Investigue custos reais sem comprometer a correção do programa.

**Aulas e objetivos**

- Aula 31: **Profiling e medições que sustentam decisões** — Localizar custos com uma carga reproduzível antes de otimizar. (6 h)
  - Exercício 1: Compare a função com uma versão que usa set para o catálogo. Verifique resultado e meça entradas maiores.
  - Exercício 2: Leia a tabela do profiler e explique a diferença entre tempo próprio e cumulativo para uma função que chama outra.
  - Exercício 3: Crie um teste com duplicatas e um relatório que exige ordem. Avalie se substituir toda lista por set preserva esse contrato.
- Aula 32: **Memória, generators e orçamento de recursos** — Medir alocações e reduzir retenção sem presumir custo zero. (6 h)
  - Exercício 1: Repita a comparação com 1000, 10000 e 100000 números, registrando resultado e pico.
  - Exercício 2: Implemente uma função com functools.lru_cache(maxsize=16) e consulte mais de 16 chaves distintas. Inspecione cache_info.
  - Exercício 3: Guarde resultados em uma lista global em vários ciclos e compare com descartar os resultados por ciclo. Use snapshots para investigar.
- Aula 33: **Modelo de objetos, cópias e coleta** — Entender identidade e tempo de vida sem depender de finalização imediata. (6 h)
  - Exercício 1: Compare duas listas distintas com o mesmo conteúdo usando == e is. Depois crie um apelido.
  - Exercício 2: Copie uma estrutura com lista interna usando copy e deepcopy e compare os efeitos de alterar o nível interno.
  - Exercício 3: Crie duas instâncias que se referenciam, observe-as por weakref e remova os nomes externos. Compare antes e depois de gc.collect sem usar essa técnica para limpar arquivos.

**Projeto:** Diagnóstico do processador de lotes

- Perfil de CPU ou cProfile de uma carga reproduzível.
- Comparação de lista e gerador com tracemalloc.
- Relatório de hipótese, alteração e impacto observado.

**Critérios de conclusão**

- Verifica equivalência dos resultados antes e depois.
- Não usa uma única execução curta como conclusão de desempenho.
- Explica referências, cópia rasa e retenção de memória.

## Nível 12 — Arquitetura e projeto final

Integre contratos, persistência e operação em um sistema compreensível.

**Aulas e objetivos**

- Aula 34: **Arquitetura por casos de uso e contratos pequenos** — Reutilizar a mesma regra por CLI e HTTP com dependências explícitas. (6 h)
  - Exercício 1: Crie uma função de CLI e uma função de adaptação HTTP que chamem concluir com repositórios novos e compare o resultado lógico.
  - Exercício 2: Teste ID ausente e segunda conclusão no mesmo repositório. Compare os tipos de falha esperados.
  - Exercício 3: Explique por que o fake retorna a mesma instância e como isso pode esconder um problema de salvar. Crie uma versão que devolve cópia.
- Aula 35: **Idempotência e confirmação atômica** — Evitar efeitos duplicados quando uma operação é reenviada. (6 h)
  - Exercício 1: Execute a mesma confirmação três vezes e verifique status, estoque e quantidade de registros de operação.
  - Exercício 2: Inicie com estoque zero, tente confirmar e depois confira status e registro da chave.
  - Exercício 3: Crie outra OS e tente usar a mesma chave da primeira. Descreva a resposta e o que permanece inalterado.
- Aula 36: **Entrega, backup e operação do projeto final** — Demonstrar instalação, aceitação e recuperação de dados. (6 h)
  - Exercício 1: Na pasta de laboratório, grave backup SQLite, reabra-o numa nova conexão e verifique contagem e esquema.
  - Exercício 2: Monte um roteiro automatizado: criar OS, confirmar, repetir, tentar acesso de outro técnico e simular falta de estoque.
  - Exercício 3: Documente ambiente novo, instalação local, testes, início, parada, backup e restauração. Peça uma execução sem consultar seu histórico.

**Projeto:** Oficina Python: OS e estoque

- CLI e interface HTTP didática usando o mesmo serviço de aplicação.
- Confirmação de OS com baixa de estoque e chave de idempotência na mesma transação.
- Testes, backup/restauração e README operacional em ambiente local.

**Critérios de conclusão**

- Repetir confirmação não dá baixa duas vezes.
- Falha parcial não confirma OS sem atualizar estoque.
- Uma instalação nova consegue rodar, testar, exportar e restaurar dados fictícios.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [Tutorial oficial](https://docs.python.org/pt-br/3/tutorial/) — Sintaxe, estruturas de dados, funções, módulos e classes.
- [Biblioteca padrão](https://docs.python.org/3/library/) — Contratos e exemplos de APIs usadas na trilha.
- [Ambientes virtuais](https://docs.python.org/3/library/venv.html) — Criação de ambientes isolados e escolha do interpretador.
- [Python Packaging User Guide](https://packaging.python.org/en/latest/tutorials/packaging-projects/) — pyproject.toml, distribuição e instalação de projetos.
- [Testes com unittest](https://docs.python.org/3/library/unittest.html) — Asserções, fixtures, descoberta e isolamento.
- [Concorrência estruturada](https://docs.python.org/3/library/asyncio-task.html) — TaskGroup, cancelamento e resultados de tarefas.
- [Free threading](https://docs.python.org/3/howto/free-threading-python.html) — Build opcional sem GIL, compatibilidade de extensões e sincronização.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Importação de pedidos sem estado acidental

Um script lê pedidos de um arquivo JSON UTF-8, agrupa por código e calcula totais. Registros inválidos devem ser recusados sem modificar pedidos já carregados nem compartilhar listas entre chamadas.

**Aulas necessárias**

- Aula 02 — Valores, nomes, strings e números
- Aula 04 — Listas, referências e mutabilidade
- Aula 05 — Dicionários, conjuntos e ausência
- Aula 06 — Funções, argumentos e contratos
- Aula 08 — Exceções e falhas com contexto
- Aula 09 — Arquivos, caminhos e JSON

**Conceitos combinados:** Mutabilidade; Contratos; JSON e exceções.

### Combo 2 — Relatório incremental com recursos fechados

Um relatório percorre milhares de movimentos, valida cada registro e produz uma soma por categoria. O consumidor pode encerrar cedo e os testes devem conferir resultado, erro e liberação do arquivo.

**Aulas necessárias**

- Aula 10 — Classes e dataclasses com invariantes
- Aula 11 — Type hints, Protocol e fronteiras
- Aula 13 — Iteradores, generators e processamento incremental
- Aula 15 — Context managers e limpeza garantida
- Aula 16 — Testes unitários e fronteiras
- Aula 18 — Fixtures, arquivos temporários e regressão

**Conceitos combinados:** Invariantes; Generators; Recursos e testes.

### Combo 3 — CLI e cliente HTTP com confirmação SQLite

Uma ferramenta recebe argumentos, consulta um serviço HTTP local e registra uma confirmação no SQLite. Resposta 404, JSON inválido e falha de escrita devem produzir resultados distintos e não deixar meia operação.

**Aulas necessárias**

- Aula 20 — CLI com argparse e códigos de saída
- Aula 21 — Logging, configuração e subprocessos seguros
- Aula 22 — Cliente HTTP, JSON e limites de entrada
- Aula 23 — SQLite, consultas parametrizadas e conexões
- Aula 24 — Transações, rollback e operações compostas
- Aula 27 — asyncio e grupos de tarefas

**Conceitos combinados:** CLI; HTTP; SQLite e composição.

### Combo 4 — API, fila limitada e recuperação de operação

A mesma regra passa a servir CLI e uma API WSGI didática. Trabalho externo entra numa fila limitada; duplicatas, autorização, tempo de espera e medição precisam ter contratos explícitos.

**Aulas necessárias**

- Aula 24 — Transações, rollback e operações compostas
- Aula 28 — Filas limitadas, timeout e cancelamento
- Aula 29 — Fronteira HTTP e uma API WSGI didática
- Aula 30 — Validação, autorização e dados não confiáveis
- Aula 31 — Profiling e medições que sustentam decisões
- Aula 35 — Idempotência e confirmação atômica

**Conceitos combinados:** Fronteiras; Backpressure; Idempotência e diagnóstico.

### Projeto final — Central de empréstimos de ferramentas em Python

Crie uma aplicação local para emprestar e devolver ferramentas, com CLI e API didática usando a mesma regra. Preserve histórico, evite baixa duplicada e demonstre recuperação de uma cópia SQLite.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Validar identificadores, quantidades e transições por funções/classes com invariantes, sem confiar somente em type hints.
- Usar SQLite com queries parametrizadas, referências e confirmação atômica de empréstimo/estoque/operação.
- Expor os mesmos casos de uso por argparse e HTTP local, traduzindo falhas em códigos de saída ou status definidos.
- Fechar arquivos e conexões, limitar a fila de tarefas e propagar timeout/cancelamento até o trabalho cooperativo.
- Testar fronteiras, duplicação, autorização e falha intermediária com fixtures isoladas e dependências controladas.
- Fornecer pyproject, ambiente reproduzível, logs sem segredos, medições justificadas e backup realmente reaberto.

**Entregáveis**

- Pacote Python com CLI, API e camada de persistência separadas.
- Suíte de testes com fixtures temporárias e comandos de execução.
- README de ambiente, contratos e decisões de concorrência.
- Relatório de backup/restauração e limites operacionais observados.

**Critérios práticos**

- **Modelo e entrada:** Validar identificadores, quantidades e transições por funções/classes com invariantes, sem confiar somente em type hints.
- **Persistência transacional:** Usar SQLite com queries parametrizadas, referências e confirmação atômica de empréstimo/estoque/operação.
- **Fronteiras reutilizáveis:** Expor os mesmos casos de uso por argparse e HTTP local, traduzindo falhas em códigos de saída ou status definidos.
- **Recursos e concorrência:** Fechar arquivos e conexões, limitar a fila de tarefas e propagar timeout/cancelamento até o trabalho cooperativo.
- **Testes observáveis:** Testar fronteiras, duplicação, autorização e falha intermediária com fixtures isoladas e dependências controladas.
- **Entrega e recuperação:** Fornecer pyproject, ambiente reproduzível, logs sem segredos, medições justificadas e backup realmente reaberto.

**Testes de aceitação para executar localmente**

#### Empréstimo confirmado

- Preparação: Ferramenta F possui 4 unidades disponíveis e operação emp-1 é inédita.
- Entrada/ação: Emprestar 2 unidades com emp-1.
- Resultado esperado: Disponibilidade 2, um empréstimo e resultado da operação persistidos juntos.

#### Falha sem efeito parcial

- Preparação: Ferramenta F possui 4 unidades; erro injetado após a baixa e antes de inserir histórico.
- Entrada/ação: Executar empréstimo e consultar a base depois do erro.
- Resultado esperado: Disponibilidade permanece 4 e não existe empréstimo confirmado pela tentativa.

#### Repetição e reabertura

- Preparação: emp-1 já confirmou 2 unidades; copie a base por procedimento consistente e reabra o destino.
- Entrada/ação: Repetir emp-1 com mesmo conteúdo no estado recuperado.
- Resultado esperado: Nenhuma segunda baixa; destino contém o empréstimo e os invariantes continuam válidos.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
