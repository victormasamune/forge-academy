# Plano de ensino — Redis

De chaves e expiração a cache, scripts atômicos, Streams, persistência e operação. Modele estruturas de dados e trate falhas sem supor entrega ou durabilidade ilimitadas.

**Carga estimada:** 144 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Lógica de programação e terminal básico; a base Bancos de Dados e SQL ajuda a comparar consistência e recuperação.
- Redis 7.2+ com redis-cli em um laboratório local dedicado. Os exemplos usam o núcleo, sem módulos opcionais.
- Para instalar no Windows, use o ambiente Linux/WSL conforme a documentação oficial.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Primeiros comandos | 12 | 1–2 | Cadastro simples de cursos |
| 02 | Tempo, contagem e cache | 12 | 2–3 | Cache de catálogo |
| 03 | Estruturas de uso diário | 12 | 4–5 | Participação em cursos |
| 04 | Ranking e medidas compactas | 12 | 5–6 | Painel de atividade |
| 05 | Composição de operações | 12 | 7–8 | Atualização concorrente de perfil |
| 06 | Scripts e regras atômicas | 12 | 8–9 | Reserva e pontuação sem repetição |
| 07 | Streams e recuperação de trabalho | 12 | 10–11 | Consumidor de eventos de pedidos |
| 08 | Mensagens e contratos de entrega | 12 | 11–12 | Atualização de ranking com recuperação |
| 09 | Persistência e recuperação | 12 | 13–14 | Recuperação do ranking |
| 10 | Segurança e evolução | 12 | 14–15 | Acesso de leitura restrito |
| 11 | Operação com evidências | 12 | 16–17 | Relatório operacional do laboratório |
| 12 | Topologias e projeto completo | 12 | 17–18 | Ranking com consumidor recuperável |

## Nível 01 — Primeiros comandos

Conecte ao servidor, modele nomes e manipule chaves de forma dirigida.

**Aulas e objetivos**

- Aula 01: **Conexão e arquitetura** — Reconhecer cliente, servidor e a unidade de comando. (4 h)
  - Exercício 1: Confira o destino usado no terminal.
  - Exercício 2: Identifique a versão do servidor.
  - Exercício 3: Explique o efeito de fechar só redis-cli.
- Aula 02: **Chaves, valores e tipos** — Criar uma string e observar sua substituição. (4 h)
  - Exercício 1: Troque o curso para Python.
  - Exercício 2: Consulte uma chave que não foi criada.
  - Exercício 3: Crie outra chave para o nível.
- Aula 03: **Existência e remoção dirigida** — Consultar presença e excluir somente chaves conhecidas. (4 h)
  - Exercício 1: Remova duas chaves explicitamente criadas.
  - Exercício 2: Compare DEL e UNLINK para um valor grande.
  - Exercício 3: Defina uma convenção de nomes por aula.

**Projeto:** Cadastro simples de cursos

- Comandos de criação e consulta de três cursos.
- Convenção de nomes documentada.
- Roteiro de limpeza só das chaves criadas.

**Critérios de conclusão**

- Destino e versão estão registrados.
- Ausência é distinguida de texto vazio.
- Nenhum comando de limpeza global é necessário.

## Nível 02 — Tempo, contagem e cache

Modele validade e repetição sem confundir cache com fonte de verdade.

**Aulas e objetivos**

- Aula 04: **Expiração e TTL** — Definir validade sem separar escrita e expiração desnecessariamente. (4 h)
  - Exercício 1: Crie valor com prazo de dois minutos.
  - Exercício 2: Compare TTL e PTTL para a mesma chave.
  - Exercício 3: Explique a falha entre SET e EXPIRE.
- Aula 05: **Contadores atômicos** — Incrementar sem ler e regravar o valor no cliente. (4 h)
  - Exercício 1: Adicione mais sete visitas.
  - Exercício 2: Teste INCR em uma string abc.
  - Exercício 3: Desenhe atualização perdida com dois clientes.
- Aula 06: **Cache e invalidação** — Definir fonte de verdade, miss e política de atualização. (4 h)
  - Exercício 1: Descreva fluxo de leitura cache-aside.
  - Exercício 2: Defina invalidação após alterar o título na origem.
  - Exercício 3: Explique uma avalanche de misses.

**Projeto:** Cache de catálogo

- Chaves com expiração e unidades documentadas.
- Contador de acessos atômico.
- Fluxograma de hit, miss e invalidação.

**Critérios de conclusão**

- Valores e TTL são gravados juntos quando necessário.
- O contador não usa GET e SET para incrementar.
- O fluxo distingue erro, ausência e dado em cache.

## Nível 03 — Estruturas de uso diário

Escolha hashes, listas e sets conforme a unidade de acesso.

**Aulas e objetivos**

- Aula 07: **Hashes e entidades pequenas** — Agrupar campos que pertencem a uma mesma entidade. (4 h)
  - Exercício 1: Acrescente campo curso com valor SQL.
  - Exercício 2: Compare apagar um campo e apagar a entidade.
  - Exercício 3: Explique por que um hash de todos os usuários dificulta TTL por usuário.
- Aula 08: **Listas e filas simples** — Manter uma sequência e distinguir remoção de confirmação de trabalho. (4 h)
  - Exercício 1: Insira tarefa3 e consuma a próxima.
  - Exercício 2: Explique falha após LPOP e antes do processamento.
  - Exercício 3: Proponha encerrar consumidor bloqueado com prazo.
- Aula 09: **Sets e participação única** — Representar membros sem duplicação e consultar interseção. (4 h)
  - Exercício 1: Teste se bia está no grupo SQL.
  - Exercício 2: Encontre o total da união SQL e Go.
  - Exercício 3: Explique por que set não serve para registrar duas presenças da mesma pessoa em dias diferentes sem mudar o modelo.

**Projeto:** Participação em cursos

- Hash de perfil, set de participantes e fila de tarefas.
- Comandos de consulta e atualização por estrutura.
- Análise de falha após remoção de tarefa.

**Critérios de conclusão**

- Não depende da ordem de hashes/sets.
- Cada estrutura representa um fato definido.
- A fila simples não é apresentada como processamento confiável completo.

## Nível 04 — Ranking e medidas compactas

Use ordenação e estruturas compactas com contratos de precisão claros.

**Aulas e objetivos**

- Aula 10: **Sorted sets e ranking** — Ordenar membros por pontuação e tratar empates. (4 h)
  - Exercício 1: Peça somente os dois primeiros do ranking.
  - Exercício 2: Crie empate entre ana e caio e observe.
  - Exercício 3: Explique por que usar score como identificador é incorreto.
- Aula 11: **Bitmaps e presença compacta** — Codificar estados booleanos em posições com significado definido. (4 h)
  - Exercício 1: Marque presença no dia 1.
  - Exercício 2: Desmarque o dia 2.
  - Exercício 3: Avalie usar CPF numérico diretamente como posição.
- Aula 12: **HyperLogLog e contagem aproximada** — Distinguir cardinalidade estimada de coleção de membros. (4 h)
  - Exercício 1: Acrescente ana novamente e compare a estimativa.
  - Exercício 2: Escolha estrutura para testar participação exata de um usuário.
  - Exercício 3: Explique por que o exemplo pequeno não prova erro zero em grande escala.

**Projeto:** Painel de atividade

- Ranking com regra de desempate.
- Mapa de presença por dia documentado.
- Indicador aproximado comparado com um set pequeno.

**Critérios de conclusão**

- Score e identidade estão separados.
- Posições do bitmap possuem significado e limite.
- Aproximação não é anunciada como exatidão.

## Nível 05 — Composição de operações

Diferencie bloco atômico, disputa otimista e otimização de transporte.

**Aulas e objetivos**

- Aula 13: **MULTI e EXEC** — Agrupar comandos sem supor rollback de erros em tempo de execução. (4 h)
  - Exercício 1: Inclua outro INCR antes de EXEC.
  - Exercício 2: Use DISCARD em vez de EXEC num segundo bloco.
  - Exercício 3: Explique por que comparar MULTI com rollback SQL é enganoso.
- Aula 14: **WATCH e concorrência otimista** — Detectar mudança concorrente e tratar abortos com limite de repetição. (4 h)
  - Exercício 1: Repita sem o SET intermediário para 2.
  - Exercício 2: Reproduza com dois terminais.
  - Exercício 3: Defina uma política de retry.
- Aula 15: **Pipelining e latência de rede** — Reduzir viagens de rede sem atribuir atomicidade a um lote. (4 h)
  - Exercício 1: Compare uma chamada por chave com MGET.
  - Exercício 2: Projete um lote de pipeline de tamanho limitado.
  - Exercício 3: Explique como medir sem mudar a carga.

**Projeto:** Atualização concorrente de perfil

- Bloco de atualização com respostas verificadas.
- Ensaio WATCH com dois clientes.
- Plano de medição com lotes limitados.

**Critérios de conclusão**

- Não supõe rollback geral em EXEC.
- WATCH conserva conexão e possui limite de retry.
- Pipeline não é apresentado como isolamento.

## Nível 06 — Scripts e regras atômicas

Execute decisões curtas no servidor e defina os limites da deduplicação.

**Aulas e objetivos**

- Aula 16: **Lua e operações condicionais atômicas** — Executar uma decisão curta no servidor sem supor rollback automático. (4 h)
  - Exercício 1: Tente reservar zero unidades.
  - Exercício 2: Demonstre o limite de rollback em chave separada.
  - Exercício 3: Explique o custo de um loop Lua demorado.
- Aula 17: **Limitador de requisições por janela** — Vincular contador e vencimento em uma operação com contrato explícito. (4 h)
  - Exercício 1: Mude o limite para três.
  - Exercício 2: Teste uma janela curta e seu vencimento.
  - Exercício 3: Defina o comportamento em indisponibilidade.
- Aula 18: **Idempotência e scripts reaproveitáveis** — Evitar uma atualização duplicada durante uma janela de deduplicação definida. (4 h)
  - Exercício 1: Teste conteúdo conflitante.
  - Exercício 2: Explique a resposta NOSCRIPT.
  - Exercício 3: Inclua uma notificação externa no desenho.

**Projeto:** Reserva e pontuação sem repetição

- Script de reserva com argumentos validados antes da escrita.
- Limitador com janela e política de indisponibilidade documentadas.
- Requisição idempotente com repetição compatível, conflito e retenção explícita.

**Critérios de conclusão**

- A reserva recusada não altera estoque.
- As respostas do limitador correspondem à política declarada.
- Não promete rollback de erro Lua nem exatamente uma vez após perda da deduplicação.

## Nível 07 — Streams e recuperação de trabalho

Use cursores, grupos e pendências sem esconder reentregas ou limites de retenção.

**Aulas e objetivos**

- Aula 19: **Streams, IDs e leitura por cursor** — Registrar eventos ordenados e retomar uma leitura com posição conhecida. (4 h)
  - Exercício 1: Leia desde o início.
  - Exercício 2: Teste um ID não crescente.
  - Exercício 3: Planeje retenção.
- Aula 20: **Grupos de consumidores e XACK** — Distribuir trabalho e reconhecer uma entrada somente após o efeito necessário. (4 h)
  - Exercício 1: Adicione um segundo worker.
  - Exercício 2: Crie um grupo independente.
  - Exercício 3: Simule falha antes do ACK.
- Aula 21: **Pendências, reclaim e consumidores idempotentes** — Recuperar trabalho abandonado e limitar tentativas de processamento. (4 h)
  - Exercício 1: Observe a mudança de dono.
  - Exercício 2: Defina o tempo de reclaim.
  - Exercício 3: Trate falha permanente.

**Projeto:** Consumidor de eventos de pedidos

- Stream com contrato de campos e política de retenção.
- Dois consumidores do mesmo grupo com ACK após o efeito definido.
- Ensaio de falha, reclaim, duplicata e limite de tentativas.

**Critérios de conclusão**

- O cursor permite identificar eventos já lidos.
- XACK é distinguido de apagar evento.
- A recuperação mostra idempotência e não promete exatamente uma vez após qualquer perda de estado.

## Nível 08 — Mensagens e contratos de entrega

Diferencie sinalização rápida de histórico recuperável e comprovação do efeito.

**Aulas e objetivos**

- Aula 22: **Pub/Sub e mensagens em tempo real** — Publicar sinais efêmeros e observar o papel dos assinantes ativos. (4 h)
  - Exercício 1: Observe dois clientes.
  - Exercício 2: Publique sem assinante.
  - Exercício 3: Escolha um uso adequado.
- Aula 23: **Notificações de keyspace e expiração** — Observar eventos de chaves sem usá-los como agenda confiável. (4 h)
  - Exercício 1: Observe uma expiração local.
  - Exercício 2: Desconecte o observador.
  - Exercício 3: Desenhe a recuperação de uma tarefa vencida quando um consumidor cai.
- Aula 24: **Entrega, repetição e efeitos externos** — Escolher entre sinal efêmero, evento retido e efeito idempotente. (4 h)
  - Exercício 1: Monte uma matriz de falhas.
  - Exercício 2: Explique outbox.
  - Exercício 3: Compare os dois caminhos.

**Projeto:** Atualização de ranking com recuperação

- Canal efêmero e fonte consultável do ranking claramente separados.
- Ensaio de desconexão com sinal perdido e retomada por estado/cursor.
- Matriz de falhas incluindo efeito externo, duplicata e evento indisponível.

**Critérios de conclusão**

- PUBLISH não é tratado como confirmação de processamento.
- Expired não é apresentado como agenda exata e durável.
- O contrato descreve retenção, repetição e falhas entre sistemas.

## Nível 09 — Persistência e recuperação

Relacione cópia, durabilidade e prova de reabertura com o RPO/RTO.

**Aulas e objetivos**

- Aula 25: **Snapshots RDB** — Solicitar uma cópia de estado e verificar conclusão sem confundir início e sucesso. (4 h)
  - Exercício 1: Acompanhe o fim da gravação.
  - Exercício 2: Defina a perda possível entre snapshots.
  - Exercício 3: Localize o arquivo no laboratório.
- Aula 26: **AOF e política de durabilidade** — Relacionar registro de operações, fsync e recuperação. (4 h)
  - Exercício 1: Compare always e everysec conceitualmente.
  - Exercício 2: Liste o que conferir antes de rewrite.
  - Exercício 3: Planeje cópia de AOF com manifesto.
- Aula 27: **Restauração RDB isolada** — Criar e reabrir uma cópia com processos exclusivos do ensaio. (4 h)
  - Exercício 1: Identifique origem e destino.
  - Exercício 2: Explique por que SAVE não é recomendação automática para bases grandes.
  - Exercício 3: Prepare evidências persistentes do projeto.

**Projeto:** Recuperação do ranking

- Configuração e janela de perda documentadas.
- Cópia e inicialização de destino independente.
- Marcadores, logs e duração real do ensaio.

**Critérios de conclusão**

- Início de BGSAVE não é tratado como conclusão.
- AOF é copiado conforme a unidade exigida pela versão.
- O destino recuperado é aberto e consultado.

## Nível 10 — Segurança e evolução

Defina permissões, transporte e contratos das chaves ao longo do tempo.

**Aulas e objetivos**

- Aula 28: **ACL e privilégios por comando** — Criar uma identidade de teste sem ampliar a conta da aplicação. (4 h)
  - Exercício 1: Confira o estado off antes da limpeza.
  - Exercício 2: Planeje teste positivo e negativo com uma credencial local.
  - Exercício 3: Explique por que +@all é amplo demais para um leitor.
- Aula 29: **Rede, TLS e autenticação** — Distinguir escuta local, identidade e proteção do transporte. (4 h)
  - Exercício 1: Registre a exposição atual.
  - Exercício 2: Descreva um cliente TLS com senha em prompt.
  - Exercício 3: Trate certificado com nome divergente.
- Aula 30: **Namespaces e evolução de dados** — Versionar representações e planejar transição de chaves. (4 h)
  - Exercício 1: Proponha leitura durante migração.
  - Exercício 2: Diferencie ambientes nos nomes.
  - Exercício 3: Planeje limpeza de v1.

**Projeto:** Acesso de leitura restrito

- Conta de ensaio e matriz de comandos permitidos/recusados.
- Registro de destino e plano de verificação TLS.
- Migração de chave com fallback e critério de retirada.

**Critérios de conclusão**

- Testa recusa, além do caminho permitido.
- Configuração não é confundida com conexão TLS comprovada.
- Versões possuem contrato e política de transição.

## Nível 11 — Operação com evidências

Observe custos e percorra dados conforme os contratos dos comandos.

**Aulas e objetivos**

- Aula 31: **Métricas, logs e latência** — Investigar sinais sem usar uma amostra como história completa. (4 h)
  - Exercício 1: Calcule taxa a partir de duas leituras.
  - Exercício 2: Compare latência do cliente e tempo do comando.
  - Exercício 3: Defina alerta útil.
- Aula 32: **SCAN e manutenção incremental** — Percorrer chaves com cursor e aceitar resultados não uniformes. (4 h)
  - Exercício 1: Complete a iteração manualmente.
  - Exercício 2: Trate uma chave repetida.
  - Exercício 3: Explique inspeção seguida de remoção.
- Aula 33: **Memória, eviction e expiração** — Separar falta de memória, remoção por política e prazo de validade. (4 h)
  - Exercício 1: Confira a política atual.
  - Exercício 2: Explique erro de escrita com noeviction.
  - Exercício 3: Diferencie métricas de expired e evicted.

**Projeto:** Relatório operacional do laboratório

- Taxas com intervalos e unidades.
- Iterador SCAN com término e repetição tratados.
- Comparação de misses por expiração e eviction.

**Critérios de conclusão**

- Não interpreta diagnóstico vazio como ausência de problema.
- COUNT não é tratado como tamanho garantido do lote.
- O cliente trata erro de escrita por memória.

## Nível 12 — Topologias e projeto completo

Conheça os limites de replicação e distribuição e entregue evidências do serviço.

**Aulas e objetivos**

- Aula 34: **Replicação e consistência observada** — Inspecionar papéis e planejar um ensaio real com duas instâncias. (4 h)
  - Exercício 1: Prepare duas instâncias locais exclusivas.
  - Exercício 2: Observe uma escrita replicada.
  - Exercício 3: Explique exclusão replicada.
- Aula 35: **Sentinel, Cluster e distribuição por slots** — Distinguir monitoramento de failover e particionamento. (4 h)
  - Exercício 1: Confira a regra das hash tags em Cluster real.
  - Exercício 2: Planeje teste Sentinel.
  - Exercício 3: Avalie colocar todas as chaves na mesma hash tag.
- Aula 36: **Projeto final: ranking e efeito repetível** — Integrar estrutura, idempotência e evidências operacionais. (4 h)
  - Exercício 1: Aplique uma operação diferente.
  - Exercício 2: Explique o limite do TTL de deduplicação.
  - Exercício 3: Entregue o roteiro operacional do projeto.

**Projeto:** Ranking com consumidor recuperável

- Contrato de chaves e identidades de operação.
- Cliente/consumidor com testes de duplicata, falha e retomada.
- Ensaio de restauração, métricas e decisão de topologia.

**Critérios de conclusão**

- Não promete exatamente uma vez sem tratar retenção e perda de estado.
- Escolha de topologia corresponde ao requisito e ao ensaio feito.
- Cópia restaurada e resultados de negócio são conferidos.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [Instalação local](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/) — Plataformas e ferramentas suportadas.
- [Referência de comandos](https://redis.io/docs/latest/commands/) — Sintaxe, complexidade e versão de cada comando.
- [Transações](https://redis.io/docs/latest/develop/using-commands/transactions/) — MULTI, EXEC, WATCH e tratamento de erros.
- [Streams](https://redis.io/docs/latest/develop/data-types/streams/) — Grupos, pendências e reconhecimento.
- [Persistência](https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/) — RDB, AOF e recuperação.
- [ACL](https://redis.io/docs/latest/operate/oss_and_stack/management/security/acl/) — Usuários e regras por comandos e chaves.
- [Replicação](https://redis.io/docs/latest/operate/oss_and_stack/management/replication/) — Replicação assíncrona e limites de disponibilidade.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Perfil, participação e cache

Um painel guarda perfil em hash, participação única em set e um resumo em cache com validade. O número de acessos precisa crescer sem atualização perdida.

**Aulas necessárias**

- Aula 02 — Chaves, valores e tipos
- Aula 04 — Expiração e TTL
- Aula 05 — Contadores atômicos
- Aula 06 — Cache e invalidação
- Aula 07 — Hashes e entidades pequenas
- Aula 09 — Sets e participação única

**Conceitos combinados:** Modelo por chave; Contagem e participação; TTL e invalidação.

### Combo 2 — Pontuação e reserva de operação

Uma aplicação soma pontos e limita requisições. Ela deve distinguir operação nova, repetição e conflito, sem atribuir rollback geral a qualquer bloco Redis.

**Aulas necessárias**

- Aula 10 — Sorted sets e ranking
- Aula 13 — MULTI e EXEC
- Aula 14 — WATCH e concorrência otimista
- Aula 16 — Lua e operações condicionais atômicas
- Aula 17 — Limitador de requisições por janela
- Aula 18 — Idempotência e scripts reaproveitáveis

**Conceitos combinados:** Sorted set; Atomicidade e limites; Idempotência e janela.

### Combo 3 — Eventos, reentrega e cópia recuperada

Uma solicitação entra num Stream, é processada por um grupo e também gera aviso em Pub/Sub. Um worker pode cair depois do efeito e antes do reconhecimento.

**Aulas necessárias**

- Aula 19 — Streams, IDs e leitura por cursor
- Aula 20 — Grupos de consumidores e XACK
- Aula 21 — Pendências, reclaim e consumidores idempotentes
- Aula 22 — Pub/Sub e mensagens em tempo real
- Aula 24 — Entrega, repetição e efeitos externos
- Aula 27 — Restauração RDB isolada

**Conceitos combinados:** Stream e grupo; ACK e reclaim; Fonte recuperável.

### Combo 4 — Acesso, manutenção e topologia

O serviço cresce. Uma conta de leitura acessa prefixos próprios, a manutenção percorre chaves e a arquitetura considera réplicas e distribuição por slots.

**Aulas necessárias**

- Aula 28 — ACL e privilégios por comando
- Aula 29 — Rede, TLS e autenticação
- Aula 32 — SCAN e manutenção incremental
- Aula 33 — Memória, eviction e expiração
- Aula 34 — Replicação e consistência observada
- Aula 35 — Sentinel, Cluster e distribuição por slots

**Conceitos combinados:** ACL e transporte; Iteração e memória; Replicação e slots.

### Projeto final — Painel de atendimento com processamento recuperável

Entregue um serviço fictício de solicitações com perfis, prioridade de atendimento, métricas e processamento de eventos. Use Redis conscientemente como estrutura de dados e fonte/cópia conforme o contrato documentado, sem confundir sinal de tela com confirmação durável de trabalho.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Definir nomes, tipos e unidade de acesso para perfis, participação, prioridade e cache com prazos explícitos.
- Aplicar operações condicionais e incrementos sem atualização perdida, com identidade/conteúdo de operação e retenção de deduplicação documentados.
- Processar eventos de Stream por grupo com ACK no ponto definido, limite de tentativas, tratamento de pendências e reentrega idempotente.
- Separar contas administrativas e de aplicação, demonstrando comandos/chaves permitidos e recusados e o transporte realmente testado.
- Registrar métricas com intervalo, iterar manutenção por SCAN corretamente e escolher política de memória/eviction compatível com cada tipo de dado.
- Gerar e reabrir uma cópia em processo isolado, conferir dados e eventos esperados e justificar limites de persistência, replicação e eventual Cluster/Sentinel.

**Entregáveis**

- Contrato de chaves e scripts/cliente do serviço com dados fictícios e versão do Redis.
- Roteiros de operação, consumidor e casos de duplicata, conflito, limite e falha.
- Relatório de acesso, memória, iteração, métricas e interpretação de resultados variáveis.
- Runbook de cópia e recuperação com marcador no destino, estado dos eventos, RPO/RTO e decisão de topologia.

**Critérios práticos**

- **Modelo por estrutura:** Cada chave tem tipo, identidade, unidade e ciclo de vida compatíveis com as consultas.
- **Atomicidade e repetição:** A unidade da operação e sua retenção são testadas sem prometer rollback ou deduplicação ilimitada.
- **Processamento recuperável:** O protocolo distingue entrega, posse, efeito, ACK, retenção e retomada.
- **Acesso e evolução:** ACL, transporte e versões têm verificações e transição documentadas.
- **Operação observável:** Métricas, SCAN e memória possuem unidades e tratamento de situações não uniformes.
- **Estado recuperado e topologia:** O destino é aberto e conferido; réplicas, Sentinel e Cluster são descritos no escopo realmente ensaiado.

**Testes de aceitação para executar localmente**

#### Operação repetida e conflito

- Preparação: Prepare chaves vazias próprias do laboratório e uma identidade de solicitação com conteúdo conhecido.
- Entrada/ação: Aplique a mesma operação duas vezes dentro da retenção e depois tente a mesma identidade com conteúdo incompatível.
- Resultado esperado: O efeito válido ocorre uma vez no prazo definido; a repetição devolve a decisão anterior e o conflito é tratado explicitamente, sem alterar o estado indevidamente.

#### Queda antes do ACK

- Preparação: Crie Stream e grupo, consuma uma entrada e aplique um efeito identificável sem reconhecer a mensagem.
- Entrada/ação: Interrompa o consumidor de ensaio, reivindique a pendência após o limiar escolhido e processe a reentrega.
- Resultado esperado: O efeito não é duplicado; a entrada tem conclusão/ACK conforme o protocolo e tentativas são observadas. A prova vale sob retenção e persistência ensaiadas.

#### Cópia e reabertura

- Preparação: Crie perfil, prioridade e eventos de referência e preserve o ponto da cópia segundo o modo escolhido.
- Entrada/ação: Abra a cópia em instância isolada e consulte marcadores, ranking e estados de fluxo previstos nesse ponto.
- Resultado esperado: O destino contém o estado documentado e suas regras; perda possível, retenção e duração são registradas. Não se conclui alta disponibilidade a partir de uma cópia local.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
