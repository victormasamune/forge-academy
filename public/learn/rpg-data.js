/* Metadados da gamificação e perguntas de aplicação. */
(function(root){
  root.RPG_DATA={
  "classes": [
    {
      "id": "artifice",
      "name": "Artífice",
      "title": "Visual dourado",
      "color": "#efc47b",
      "symbol": "◇",
      "description": "Personalize seu perfil com o avatar artífice."
    },
    {
      "id": "arcanista",
      "name": "Arcanista",
      "title": "Visual violeta",
      "color": "#bba5fb",
      "symbol": "✧",
      "description": "Personalize seu perfil com o avatar arcanista."
    },
    {
      "id": "sentinela",
      "name": "Sentinela",
      "title": "Visual verde",
      "color": "#82dbcb",
      "symbol": "⛨",
      "description": "Personalize seu perfil com o avatar sentinela."
    }
  ],
  "chapters": [
    {
      "id": 1,
      "region": "Primeiros passos",
      "terrain": "vila",
      "boss": "Desafio do nível 01",
      "bossTitle": "Três perguntas para aplicar e revisar os conceitos deste nível.",
      "relic": "Medalha · Primeiros passos",
      "lore": "Entenda o que um programa faz e dê suas primeiras instruções em Go.",
      "victory": "Você concluiu o desafio final de Primeiros passos. Sua medalha e seu XP já foram registrados.",
      "rune": "Ambiente",
      "questions": [
        {
          "question": "A forja precisa emitir duas mensagens, uma por linha. Qual construção resolve isso?",
          "options": [
            "Duas chamadas a fmt.Println dentro de main",
            "Duas funções main no mesmo pacote",
            "Um import diferente para cada mensagem",
            "Uma variável sem ser utilizada"
          ],
          "answer": 0,
          "explanation": "Cada Println escreve uma linha. Um programa tem uma única função main como ponto de entrada do comando."
        },
        {
          "question": "O ferreiro guardou horas := 5 e dias := 2. Qual é o tipo de horas * dias?",
          "options": [
            "string",
            "int",
            "bool",
            "float64 automaticamente"
          ],
          "answer": 1,
          "explanation": "Os dois valores inferidos são int. A multiplicação não os converte automaticamente para float64."
        },
        {
          "question": "Um portão abre para energia >= 10. Qual conjunto examina melhor a fronteira?",
          "options": [
            "1, 2 e 3",
            "10 apenas",
            "9, 10 e 11",
            "100, 200 e 300"
          ],
          "answer": 2,
          "explanation": "Verificar imediatamente antes, no limite e imediatamente depois revela erros de comparação."
        }
      ]
    },
    {
      "id": 2,
      "region": "Dados e funções",
      "terrain": "bosque",
      "boss": "Desafio do nível 02",
      "bossTitle": "Três perguntas para aplicar e revisar os conceitos deste nível.",
      "relic": "Medalha · Dados e funções",
      "lore": "Organize informações em coleções e construa funções com contratos claros.",
      "victory": "Você concluiu o desafio final de Dados e funções. Sua medalha e seu XP já foram registrados.",
      "rune": "Funções",
      "questions": [
        {
          "question": "O inventário precisa distinguir uma chave ausente de uma quantidade igual a zero. Como consultar?",
          "options": [
            "Só comparar m[chave] == 0",
            "Usar valor, existe := m[chave]",
            "Ordenar o map",
            "Converter o map para string"
          ],
          "answer": 1,
          "explanation": "O booleano da consulta comma-ok informa se a chave existe, independentemente de seu valor."
        },
        {
          "question": "a := []int{1, 2}; b := a[:1]; b[0] = 9. Quanto vale a[0]?",
          "options": [
            "1",
            "0",
            "9",
            "O código não compila"
          ],
          "answer": 2,
          "explanation": "O slice b referencia o mesmo array de a. Fazer slicing não copia os elementos."
        },
        {
          "question": "Um nome com acento tem len diferente da contagem de runes. O que len mede?",
          "options": [
            "Bytes",
            "Letras visuais",
            "Palavras",
            "Somente dígitos ASCII"
          ],
          "answer": 0,
          "explanation": "len de string mede bytes. Runes representam pontos de código, que também podem diferir de caracteres visuais."
        }
      ]
    },
    {
      "id": 3,
      "region": "Modelagem idiomática",
      "terrain": "castelo",
      "boss": "Desafio do nível 03",
      "bossTitle": "Três perguntas para aplicar e revisar os conceitos deste nível.",
      "relic": "Medalha · Modelagem idiomática",
      "lore": "Modele domínio com structs, métodos, interfaces e erros explícitos.",
      "victory": "Você concluiu o desafio final de Modelagem idiomática. Sua medalha e seu XP já foram registrados.",
      "rune": "Structs",
      "questions": [
        {
          "question": "Um método deve mudar o Status da ordem original. Qual receiver é apropriado?",
          "options": [
            "*Ordem",
            "string",
            "Somente uma interface vazia",
            "Uma variável global obrigatória"
          ],
          "answer": 0,
          "explanation": "Um receiver ponteiro permite alterar o struct original. O ponteiro também é passado por valor."
        },
        {
          "question": "Uma interface contém um ponteiro nil de um tipo concreto que a implementa. Ela é necessariamente igual a nil?",
          "options": [
            "Sim",
            "Não, pois ainda há tipo dinâmico",
            "Somente se tiver um método",
            "Somente depois de um defer"
          ],
          "answer": 1,
          "explanation": "Uma interface com tipo dinâmico e valor ponteiro nil é diferente de uma interface nil."
        },
        {
          "question": "A causa de um erro deve continuar reconhecível após adicionar contexto. Qual estratégia usar?",
          "options": [
            "Comparar parte do texto",
            "Trocar tudo por panic",
            "Wrapping com %w e errors.Is",
            "Ignorar o erro interno"
          ],
          "answer": 2,
          "explanation": "Wrapping preserva a cadeia. errors.Is consegue verificar uma causa conhecida sem depender do texto."
        }
      ]
    },
    {
      "id": 4,
      "region": "Ferramentas e bibliotecas",
      "terrain": "porto",
      "boss": "Desafio do nível 04",
      "bossTitle": "Três perguntas para aplicar e revisar os conceitos deste nível.",
      "relic": "Medalha · Ferramentas e bibliotecas",
      "lore": "Construa comandos utilizáveis e aprenda os protocolos de I/O da biblioteca padrão.",
      "victory": "Você concluiu o desafio final de Ferramentas e bibliotecas. Sua medalha e seu XP já foram registrados.",
      "rune": "Modules",
      "questions": [
        {
          "question": "Read retornou 6 bytes e io.EOF na mesma chamada. O que fazer?",
          "options": [
            "Descartar os 6 bytes",
            "Processar os 6 bytes e depois tratar EOF",
            "Ler um buffer sem verificar n",
            "Considerar tudo um panic"
          ],
          "answer": 1,
          "explanation": "n > 0 descreve bytes válidos mesmo quando um erro vem junto, inclusive EOF."
        },
        {
          "question": "Você leu com LimitReader de 1024 bytes e recebeu 1024. Isso comprova que a entrada original cabia no limite?",
          "options": [
            "Sim",
            "Só para JSON",
            "Não; leia limite+1 para detectar excesso",
            "Sim, se o leitor era um arquivo"
          ],
          "answer": 2,
          "explanation": "Ler apenas até o limite não distingue entrada exata de truncamento. Ler um byte adicional permite rejeitar excesso."
        },
        {
          "question": "Um comando exporta JSON para ser consumido por outro programa. Para onde vão os diagnósticos?",
          "options": [
            "stderr, preservando stdout para os dados",
            "Misturados ao JSON",
            "Somente no go.mod",
            "Em qualquer lugar, sem diferença"
          ],
          "answer": 0,
          "explanation": "Separar stdout de stderr mantém o resultado legível por programas e os diagnósticos disponíveis ao operador."
        }
      ]
    },
    {
      "id": 5,
      "region": "Testes e confiabilidade",
      "terrain": "templo",
      "boss": "Desafio do nível 05",
      "bossTitle": "Três perguntas para aplicar e revisar os conceitos deste nível.",
      "relic": "Medalha · Testes e confiabilidade",
      "lore": "Transforme requisitos em verificações que encontram regressões reais.",
      "victory": "Você concluiu o desafio final de Testes e confiabilidade. Sua medalha e seu XP já foram registrados.",
      "rune": "testing",
      "questions": [
        {
          "question": "Uma função tem 100% de linhas cobertas. O que ainda pode faltar?",
          "options": [
            "Nada",
            "Asserções e cenários de fronteira relevantes",
            "Um nome mais longo",
            "Um servidor público"
          ],
          "answer": 1,
          "explanation": "Cobertura informa execução de linhas. Não garante que resultados ou regras importantes foram verificados."
        },
        {
          "question": "Um teste de vencimento usa a data atual e falha meses depois. Como torná-lo previsível?",
          "options": [
            "Adicionar Sleep",
            "Não executar no CI",
            "Injetar um relógio ou passar um instante fixo",
            "Repetir até passar"
          ],
          "answer": 2,
          "explanation": "Instantes controlados permitem testar antes, no limite e depois do vencimento sem depender do dia de execução."
        },
        {
          "question": "O fuzzing encontrou uma entrada que provoca panic. Qual é o próximo passo?",
          "options": [
            "Reproduzir, corrigir e preservar como regressão",
            "Apagar o corpus",
            "Ignorar a entrada rara",
            "Desativar todos os testes"
          ],
          "answer": 0,
          "explanation": "Um contraexemplo reproduzível ajuda a corrigir a causa e a evitar que o mesmo bug retorne."
        }
      ]
    },
    {
      "id": 6,
      "region": "Concorrência segura",
      "terrain": "torres",
      "boss": "Desafio do nível 06",
      "bossTitle": "Três perguntas para aplicar e revisar os conceitos deste nível.",
      "relic": "Medalha · Concorrência segura",
      "lore": "Coordene tarefas, cancelamento e acesso a estado compartilhado.",
      "victory": "Você concluiu o desafio final de Concorrência segura. Sua medalha e seu XP já foram registrados.",
      "rune": "Goroutines",
      "questions": [
        {
          "question": "WaitGroup espera todos os incrementos de um contador. Isso, por si só, protege contador++?",
          "options": [
            "Sim",
            "Não; esperar término não oferece exclusão mútua",
            "Só em uma máquina com um núcleo",
            "Sempre que o contador é int"
          ],
          "answer": 1,
          "explanation": "WaitGroup acompanha término. A operação de leitura-modificação-escrita ainda precisa de sincronização."
        },
        {
          "question": "Quem deve fechar um canal com vários produtores?",
          "options": [
            "O primeiro consumidor que sair",
            "Um timer arbitrário",
            "O coordenador, depois de todos os envios terminarem",
            "Qualquer goroutine"
          ],
          "answer": 2,
          "explanation": "O dono do ciclo de vida precisa ter certeza de que nenhum produtor enviará novamente."
        },
        {
          "question": "Um worker bloqueia ao enviar resultados e o consumidor cancelou. Como permitir a saída?",
          "options": [
            "select entre envio e ctx.Done()",
            "Um Sleep curto antes do envio",
            "Um loop infinito de envio",
            "Ignorar o cancelamento"
          ],
          "answer": 0,
          "explanation": "O caminho de envio também precisa observar cancelamento para não deixar a goroutine presa."
        }
      ]
    },
    {
      "id": 7,
      "region": "APIs com net/http",
      "terrain": "ponte",
      "boss": "Desafio do nível 07",
      "bossTitle": "Três perguntas para aplicar e revisar os conceitos deste nível.",
      "relic": "Medalha · APIs com net/http",
      "lore": "Exponha serviços com contratos claros, limites e testes de ponta a ponta.",
      "victory": "Você concluiu o desafio final de APIs com net/http. Sua medalha e seu XP já foram registrados.",
      "rune": "Handlers",
      "questions": [
        {
          "question": "Um handler escreve o corpo e só depois tenta WriteHeader(400). Qual status provavelmente já enviou?",
          "options": [
            "400",
            "200 implícito",
            "404 automático",
            "Nenhum, até Close"
          ],
          "answer": 1,
          "explanation": "A primeira escrita do corpo normalmente envia status 200 quando nenhum outro foi definido antes."
        },
        {
          "question": "client.Do retornou resposta 503 e err nil. Como interpretar?",
          "options": [
            "Sucesso da regra de negócio",
            "Impossível",
            "Transporte concluído, mas resposta HTTP de indisponibilidade",
            "Erro que pode ser sempre ignorado"
          ],
          "answer": 2,
          "explanation": "Erro de transporte e status HTTP são contratos diferentes e exigem verificações próprias."
        },
        {
          "question": "Um técnico autenticado consulta uma OS de outro técnico pelo ID. O que a API deve verificar?",
          "options": [
            "Autorização sobre aquele recurso",
            "Somente se o ID é numérico",
            "A cor do tema",
            "Somente CORS"
          ],
          "answer": 0,
          "explanation": "Uma sessão válida não autoriza qualquer acesso. O escopo do recurso precisa ser aplicado no servidor."
        }
      ]
    },
    {
      "id": 8,
      "region": "Banco e arquitetura",
      "terrain": "cofre",
      "boss": "Desafio do nível 08",
      "bossTitle": "Três perguntas para aplicar e revisar os conceitos deste nível.",
      "relic": "Medalha · Banco e arquitetura",
      "lore": "Persista regras com transações e fronteiras que permitem evolução.",
      "victory": "Você concluiu o desafio final de Banco e arquitetura. Sua medalha e seu XP já foram registrados.",
      "rune": "database/sql",
      "questions": [
        {
          "question": "Você abriu tx com BeginTx, mas fez um UPDATE por db.ExecContext. Esse UPDATE está automaticamente no tx?",
          "options": [
            "Sim",
            "Não; a operação precisa usar o tx",
            "Somente se o SQL for igual",
            "Somente com uma tabela"
          ],
          "answer": 1,
          "explanation": "db é o pool. O tx possui a conexão e o contexto transacional de suas próprias operações."
        },
        {
          "question": "Como passar o ID recebido para uma consulta SQL?",
          "options": [
            "Concatenar diretamente na string",
            "Colocar aspas manualmente",
            "Usar parâmetros do driver, como $1 no PostgreSQL",
            "Remover espaços e concatenar"
          ],
          "answer": 2,
          "explanation": "Parâmetros mantêm dados separados da estrutura SQL. Identificadores dinâmicos exigem uma lista controlada."
        },
        {
          "question": "OS, estoque e evento de outbox precisam representar a mesma confirmação. Onde gravá-los?",
          "options": [
            "Na mesma transação do banco",
            "Em três goroutines independentes",
            "Depois de enviar o webhook, sem persistir",
            "Somente em memória"
          ],
          "answer": 0,
          "explanation": "A gravação transacional conjunta mantém a alteração e o evento durável consistentes; publicação externa acontece depois."
        }
      ]
    },
    {
      "id": 9,
      "region": "Go moderno e abstrações",
      "terrain": "academia",
      "boss": "Desafio do nível 09",
      "bossTitle": "Três perguntas para aplicar e revisar os conceitos deste nível.",
      "relic": "Medalha · Go moderno e abstrações",
      "lore": "Use generics e reflexão quando melhorarem contratos e simplicidade.",
      "victory": "Você concluiu o desafio final de Go moderno e abstrações. Sua medalha e seu XP já foram registrados.",
      "rune": "Generics",
      "questions": [
        {
          "question": "type Centavos int64 deve satisfazer uma restrição pelo tipo subjacente. Qual termo usar?",
          "options": [
            "string",
            "~int64",
            "int64 sem til, sempre",
            "[]int64"
          ],
          "answer": 1,
          "explanation": "~int64 inclui tipos definidos com int64 subjacente. O termo int64 sozinho representa o tipo exato."
        },
        {
          "question": "O consumidor interrompeu um iterador e yield devolveu false. O produtor deve…",
          "options": [
            "Continuar produzindo",
            "Reiniciar sozinho",
            "Parar de chamar yield e retornar",
            "Criar uma goroutine"
          ],
          "answer": 2,
          "explanation": "False informa que o consumidor encerrou a iteração. O produtor precisa respeitar o protocolo."
        },
        {
          "question": "Um domínio conhecido usa reflection apenas para acessar um campo por nome. Qual alternativa costuma ser mais clara?",
          "options": [
            "Tipo concreto ou interface pequena",
            "Mais nomes de campo em strings",
            "unsafe em toda leitura",
            "Um map de any sem contrato"
          ],
          "answer": 0,
          "explanation": "Quando a estrutura é conhecida, tipos e interfaces preservam verificações em compilação e tornam a regra mais clara."
        }
      ]
    },
    {
      "id": 10,
      "region": "Desempenho e runtime",
      "terrain": "observatorio",
      "boss": "Desafio do nível 10",
      "bossTitle": "Três perguntas para aplicar e revisar os conceitos deste nível.",
      "relic": "Medalha · Desempenho e runtime",
      "lore": "Investigue gargalos com evidência e entenda os limites do modelo de execução.",
      "victory": "Você concluiu o desafio final de Desempenho e runtime. Sua medalha e seu XP já foram registrados.",
      "rune": "pprof e trace",
      "questions": [
        {
          "question": "A API demora, mas o uso de CPU é baixo. O que investigar antes de micro-otimizar cálculos?",
          "options": [
            "Só o número de variáveis",
            "Espera em rede, banco, filas e locks",
            "A cor dos logs",
            "Mais goroutines sem limite"
          ],
          "answer": 1,
          "explanation": "Latência pode vir de tempo bloqueado. Meça as dependências e a contenção do caminho real."
        },
        {
          "question": "Um slice de 10 bytes referencia um array de 10 MB. Esse array pode continuar vivo?",
          "options": [
            "Não",
            "Só sem GC",
            "Sim, porque ainda está alcançável pelo slice",
            "Só quando len é 10 MB"
          ],
          "answer": 2,
          "explanation": "O GC considera alcançabilidade. Um subslice pequeno pode manter o array grande referenciado."
        },
        {
          "question": "O que transforma uma otimização em uma conclusão defensável?",
          "options": [
            "Carga equivalente, medições repetidas e correção preservada",
            "Uma execução mais rápida por acaso",
            "Apenas usar ponteiros",
            "Compilar sem erros"
          ],
          "answer": 0,
          "explanation": "Resultados comparáveis exigem controle do cenário, variabilidade e testes de comportamento."
        }
      ]
    },
    {
      "id": 11,
      "region": "Operação em produção",
      "terrain": "bastiao",
      "boss": "Desafio do nível 11",
      "bossTitle": "Três perguntas para aplicar e revisar os conceitos deste nível.",
      "relic": "Medalha · Operação em produção",
      "lore": "Prepare o serviço para iniciar, falhar, ser observado e encerrar com previsibilidade.",
      "victory": "Você concluiu o desafio final de Operação em produção. Sua medalha e seu XP já foram registrados.",
      "rune": "Shutdown",
      "questions": [
        {
          "question": "O contexto principal foi cancelado. Como dar uma janela de limpeza ao shutdown?",
          "options": [
            "Reutilizar o contexto cancelado",
            "Criar contexto independente com prazo",
            "Esperar sem limite",
            "Ignorar o sinal"
          ],
          "answer": 1,
          "explanation": "Um contexto já cancelado não oferece uma janela útil. A limpeza precisa de seu próprio prazo."
        },
        {
          "question": "Qual rótulo é perigoso para a cardinalidade de uma métrica?",
          "options": [
            "Método HTTP",
            "Classe de status",
            "ID individual de cada OS",
            "Nome fixo da aplicação"
          ],
          "answer": 2,
          "explanation": "IDs individuais podem gerar uma quantidade de séries sem limite. Use logs ou traces para correlação detalhada."
        },
        {
          "question": "Voltar ao binário anterior desfaz uma migração destrutiva de banco?",
          "options": [
            "Não; esquema e dados exigem estratégia própria",
            "Sim, sempre",
            "Só com go build",
            "Só se houver um container"
          ],
          "answer": 0,
          "explanation": "Rollback da aplicação e recuperação dos dados são problemas distintos. Migrações precisam de planejamento próprio."
        }
      ]
    },
    {
      "id": 12,
      "region": "Engenharia e especialização",
      "terrain": "nucleo",
      "boss": "Desafio do nível 12",
      "bossTitle": "Três perguntas para aplicar e revisar os conceitos deste nível.",
      "relic": "Medalha · Engenharia e especialização",
      "lore": "Integre o aprendizado e saiba investigar além da API pública.",
      "victory": "Você concluiu o desafio final de Engenharia e especialização. Sua medalha e seu XP já foram registrados.",
      "rune": "AST e toolchain",
      "questions": [
        {
          "question": "O servidor confirmou uma OS, mas a resposta se perdeu. Como repetir a intenção sem duplicar o efeito?",
          "options": [
            "Criar sempre um novo pedido",
            "Reutilizar uma chave idempotente com resultado persistido",
            "Esperar um segundo e reenviar sem chave",
            "Usar um map descartável como única proteção"
          ],
          "answer": 1,
          "explanation": "A identidade da operação e seu resultado precisam de persistência e uma fronteira consistente com o efeito."
        },
        {
          "question": "Um analisador precisa encontrar declarações de funções Go. Qual ferramenta representa a sintaxe?",
          "options": [
            "Busca textual por qualquer func",
            "Uma tabela SQL",
            "go/parser com go/ast",
            "Um contador de linhas"
          ],
          "answer": 2,
          "explanation": "A AST representa construções da linguagem. O critério deve distinguir declarações de literais de função."
        },
        {
          "question": "Qual demonstração melhor encerra a campanha?",
          "options": [
            "Fluxo reproduzível, testes de falha e decisões justificadas",
            "Somente muitas pastas",
            "Um print de sucesso sem reprodução",
            "Apenas o nome do framework"
          ],
          "answer": 0,
          "explanation": "A defesa técnica reúne comportamento observado, falhas controladas e capacidade de explicar custos e limites."
        }
      ]
    }
  ]
};
})(typeof window==='undefined'?globalThis:window);
