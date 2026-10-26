# Forge Academy · Go — Cronograma de estudo

Ritmo de referência: 36 semanas × 8 horas = 288 horas.
Ajuste o ritmo sem pular os critérios de compreensão. Não há prazo que garanta senioridade.

## Rotina semanal (8 horas)

Segunda: 1h de teoria; terça: 2h de prática guiada; quinta: 2h de exercícios; sábado: 2h de projeto; domingo: 1h de revisão e explicação sem consulta.

## Como concluir uma aula

Ler e explicar o conceito, executar o exemplo no Go local ou no Playground, resolver os três exercícios, conferir os critérios e passar na checagem de compreensão.
Exercícios e projetos têm autoavaliação; a checagem conceitual é corrigida automaticamente. O editor da plataforma não compila Go.

## Nível 01 — Primeiros passos (semanas 1–3)

Entenda o que um programa faz e dê suas primeiras instruções em Go.

- Semana 1: Seu primeiro programa em Go — Executar um programa e explicar package, import e main.
- Semana 2: Valores, variáveis e tipos — Representar dados e prever o resultado de expressões.
- Semana 3: Decisões, laços e decomposição — Transformar uma regra simples em controle de fluxo.

**Projeto:** Cartão de apresentação no terminal

- Programa que apresenta nome, objetivo e horas disponíveis.
- Cálculo de horas de estudo por mês.
- README com instalação e execução.

**Critérios:** Executa com go run .; Você explica cada linha sem consultar.; Nomes claros e código formatado.

## Nível 02 — Dados e funções (semanas 4–6)

Organize informações em coleções e construa funções com contratos claros.

- Semana 4: Funções e múltiplos retornos — Extrair regras para funções previsíveis.
- Semana 5: Arrays, slices e maps — Escolher a coleção certa e reconhecer compartilhamento de dados.
- Semana 6: Strings, runes e entrada de dados — Tratar texto UTF-8 sem confundir bytes com caracteres.

**Projeto:** Resumo de serviços em memória

- Receber uma coleção de serviços.
- Calcular totais por categoria.
- Validar entradas vazias e valores inválidos.

**Critérios:** Funções pequenas com contratos explícitos.; Casos vazio, único e repetido funcionam.; Não depende da ordem de um map.

## Nível 03 — Modelagem idiomática (semanas 7–9)

Modele domínio com structs, métodos, interfaces e erros explícitos.

- Semana 7: Structs, ponteiros e métodos — Agrupar dados e controlar quando uma operação altera o original.
- Semana 8: Interfaces e composição — Depender de comportamentos pequenos em vez de implementações concretas.
- Semana 9: Erros como parte do contrato — Tratar falhas esperadas e preservar a causa com wrapping.

**Projeto:** Motor de regras de ordens de serviço

- Tipos de OS e transições válidas.
- Erros com contexto e sem duplicar logs.
- Interface pequena para persistência.

**Critérios:** Estados inválidos são recusados.; Regras não conhecem HTTP nem SQL.; Erros preservam a causa.

## Nível 04 — Ferramentas e bibliotecas (semanas 10–12)

Construa comandos utilizáveis e aprenda os protocolos de I/O da biblioteca padrão.

- Semana 10: Módulos, pacotes e documentação — Organizar um projeto sem criar dependências cíclicas.
- Semana 11: I/O, arquivos e composição — Processar fluxos usando Reader e Writer.
- Semana 12: JSON, tempo e comandos CLI — Criar fronteiras de entrada e saída previsíveis.

**Projeto:** CLI de exportação de ordens

- Flags para filtrar e exportar dados.
- Saída JSON determinística e legível.
- Separação entre stdout, stderr e erros.

**Critérios:** README permite reproduzir a execução.; Arquivos são fechados e erros tratados.; Saída de dados não é misturada a logs.

## Nível 05 — Testes e confiabilidade (semanas 13–15)

Transforme requisitos em verificações que encontram regressões reais.

- Semana 13: Testes unitários e casos de fronteira — Escrever um teste que falhe pela razão certa.
- Semana 14: Tabelas, subtestes e fronteiras HTTP — Escalar verificações sem esconder o comportamento.
- Semana 15: Fuzzing, benchmarks e testes concorrentes — Explorar propriedades e separar correção de desempenho.

**Projeto:** Regras financeiras com testes

- Testes de limites e valores inválidos.
- Subtestes legíveis e teste de regressão.
- Uma propriedade verificada com fuzzing.

**Critérios:** Os testes falham quando uma regra é quebrada.; Sem dependência de rede ou relógio real.; Asserções verificam comportamento observável.

## Nível 06 — Concorrência segura (semanas 16–18)

Coordene tarefas, cancelamento e acesso a estado compartilhado.

- Semana 16: Goroutines e ciclo de vida — Iniciar trabalho concorrente e garantir sua finalização.
- Semana 17: Channels, select e context — Comunicar resultados com cancelamento explícito.
- Semana 18: Mutex, atomics e worker pools — Limitar trabalho e proteger invariáveis compartilhadas.

**Projeto:** Processador de evidências

- Fila com concorrência limitada.
- Cancelamento propagado até as tarefas.
- Teste de encerramento e execução com -race.

**Critérios:** Não deixa goroutines sem dono.; Não usa Sleep como sincronização.; Explica quem fecha cada canal.

## Nível 07 — APIs com net/http (semanas 19–21)

Exponha serviços com contratos claros, limites e testes de ponta a ponta.

- Semana 19: Handlers, rotas e contratos HTTP — Construir uma API com a biblioteca padrão.
- Semana 20: Clientes HTTP e middleware — Tratar a rede como uma fronteira que pode demorar ou falhar.
- Semana 21: Segurança na fronteira da API — Validar, autorizar e limitar antes de executar efeitos.

**Projeto:** API de ordens de serviço

- Rotas de criação, consulta e conclusão.
- Validação, erros JSON e testes de contrato.
- Autorização por recurso e limites de requisição.

**Critérios:** Códigos HTTP têm significado consistente.; Contexto chega à operação.; Uma identidade não acessa ordens de outra sem permissão.

## Nível 08 — Banco e arquitetura (semanas 22–24)

Persista regras com transações e fronteiras que permitem evolução.

- Semana 22: SQL, pool e consultas parametrizadas — Acessar dados com contexto e recursos bem administrados.
- Semana 23: Transações e idempotência — Preservar invariáveis quando operações falham ou competem.
- Semana 24: Arquitetura guiada por dependências — Organizar o projeto sem transformar toda função em uma camada.

**Projeto:** Persistência transacional da OS

- Migrações versionadas e consultas parametrizadas.
- Confirmação de OS e baixa de estoque consistentes.
- Testes de integração e de isolamento.

**Critérios:** Parâmetros nunca viram SQL concatenado.; Transação não vaza para outra conexão.; Concorrência não duplica a baixa.

## Nível 09 — Go moderno e abstrações (semanas 25–27)

Use generics e reflexão quando melhorarem contratos e simplicidade.

- Semana 25: Generics e conjuntos de tipos — Criar uma abstração genérica com uma razão concreta.
- Semana 26: Iteradores e evolução da linguagem — Ler recursos modernos respeitando sua versão mínima.
- Semana 27: Reflection e contratos dinâmicos — Inspecionar tipos sem substituir validação por fragilidade.

**Projeto:** Biblioteca de coleções pequena

- Uma função genérica com restrição justificada.
- Iterador que respeita interrupção do consumidor.
- Comparação com solução concreta e benchmarks.

**Critérios:** Não usa any para esconder falta de contrato.; Explica a versão mínima dos recursos.; Abstração reduz repetição sem ampliar acoplamento.

## Nível 10 — Desempenho e runtime (semanas 28–30)

Investigue gargalos com evidência e entenda os limites do modelo de execução.

- Semana 28: Benchmarks, pprof e diagnóstico — Localizar o gargalo antes de alterar o código.
- Semana 29: Memória, escape analysis e GC — Distinguir alocação, retenção e coleta.
- Semana 30: Scheduler e modelo de memória — Raciocinar sobre sincronização em vez de confiar na ordem aparente.

**Projeto:** Investigação de desempenho

- Carga reprodutível com resultados antes/depois.
- Perfis de CPU ou heap e hipótese documentada.
- Uma melhoria sem regressão de correção.

**Critérios:** Medições têm contexto e variabilidade.; Sem otimizações por suposição.; Pode explicar o custo e a mudança no perfil.

## Nível 11 — Operação em produção (semanas 31–33)

Prepare o serviço para iniciar, falhar, ser observado e encerrar com previsibilidade.

- Semana 31: Configuração, sinais e shutdown — Encerrar sem abandonar trabalho e sem esperar para sempre.
- Semana 32: Logs, métricas, traces e saúde — Responder o que falhou, onde e para quem.
- Semana 33: CI, containers e evolução segura — Entregar um artefato verificável sem acoplar o estudo a um provedor.

**Projeto:** Serviço pronto para homologação

- Configuração validada e encerramento por sinal.
- Logs estruturados, health checks e métricas.
- Pipeline de testes e artefato reproduzível.

**Critérios:** Nenhum segredo no repositório.; Timeouts e shutdown são testáveis.; Procedimento de deploy e rollback está documentado.

## Nível 12 — Engenharia e especialização (semanas 34–36)

Integre o aprendizado e saiba investigar além da API pública.

- Semana 34: Por dentro do toolchain e das fronteiras — Investigar AST, compilação e integrações de baixo nível com cuidado.
- Semana 35: Falhas distribuídas, filas e consistência — Projetar repetição e recuperação sem prometer exatamente uma vez.
- Semana 36: Projeto final e defesa técnica — Demonstrar o fluxo completo e justificar decisões.

**Projeto:** Central de serviços — projeto final

- API com ordens, evidências, confirmação e fechamento.
- Banco, autorização, outbox e worker cancelável.
- Testes, perfis, documentação e demonstração de falhas.

**Critérios:** Fluxo completo funciona com evidências verificáveis.; Nenhuma baixa ou despesa é duplicada por repetição.; Defende decisões e limitações com clareza.

## Referências oficiais

- https://go.dev/doc/tutorial/
- https://go.dev/tour/
- https://go.dev/ref/spec
- https://go.dev/ref/mem
- https://go.dev/doc/security/
- https://go.dev/doc/diagnostics
- https://go.dev/doc/go1.27

Conteúdo autoral em português. Referências verificadas em 22/10/2026. Effective Go é complementar e não cobre sozinho os recursos modernos.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Catálogo e reserva com erro explícito

Uma CLI em Go mantém produtos por SKU, recebe texto UTF-8 e tenta reservar unidades. O catálogo não pode criar produto ao consultar uma chave ausente nem alterar o saldo quando a regra falha.

**Aulas necessárias**

- Aula 04 — Funções e múltiplos retornos
- Aula 05 — Arrays, slices e maps
- Aula 06 — Strings, runes e entrada de dados
- Aula 07 — Structs, ponteiros e métodos
- Aula 09 — Erros como parte do contrato

**Conceitos combinados:** Coleções; Métodos; UTF-8 e erros.

### Combo 2 — Importação cancelável e testes de fronteira

Um importador lê registros JSON de um Reader, valida cada pedido e processa tarefas por um pool limitado. Cancelar deve liberar recursos e os testes precisam provar a regra sem depender de sleeps.

**Aulas necessárias**

- Aula 11 — I/O, arquivos e composição
- Aula 12 — JSON, tempo e comandos CLI
- Aula 13 — Testes unitários e casos de fronteira
- Aula 16 — Goroutines e ciclo de vida
- Aula 17 — Channels, select e context
- Aula 18 — Mutex, atomics e worker pools

**Conceitos combinados:** I/O; Testes; Cancelamento e sincronização.

### Combo 3 — Confirmação HTTP com persistência

Uma API recebe uma chave idempotente e confirma um pedido, reservando estoque no banco. Autorização e validação antecedem os efeitos; a mesma confirmação pode chegar de novo após timeout.

**Aulas necessárias**

- Aula 19 — Handlers, rotas e contratos HTTP
- Aula 20 — Clientes HTTP e middleware
- Aula 21 — Segurança na fronteira da API
- Aula 22 — SQL, pool e consultas parametrizadas
- Aula 23 — Transações e idempotência
- Aula 24 — Arquitetura guiada por dependências

**Conceitos combinados:** HTTP; Autorização; SQL e transações.

### Combo 4 — Serviço observável sob falha e encerramento

O serviço possui worker pool, dependências HTTP e shutdown com prazo. Uma investigação deve separar custo de CPU, retenção de memória e falhas de entrega, sem prometer exatamente uma vez entre sistemas.

**Aulas necessárias**

- Aula 28 — Benchmarks, pprof e diagnóstico
- Aula 29 — Memória, escape analysis e GC
- Aula 30 — Scheduler e modelo de memória
- Aula 31 — Configuração, sinais e shutdown
- Aula 32 — Logs, métricas, traces e saúde
- Aula 35 — Falhas distribuídas, filas e consistência

**Conceitos combinados:** Diagnóstico; Shutdown; Repetição distribuída.

### Projeto final — Central de reservas em Go

Entregue uma aplicação local de reserva de equipamentos, acessível por CLI e HTTP, que mantém disponibilidade e histórico sob repetição, erro e encerramento. Use dados fictícios e dependências locais substituíveis.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Validar SKU, quantidade positiva e transições de reserva antes de alterar o estado.
- Reutilizar o mesmo caso de uso por CLI e HTTP, com códigos de saída/status e mensagens de erro coerentes.
- Persistir reserva, baixa condicional e chave idempotente na mesma transação, sem SQL concatenado.
- Executar tarefas auxiliares com capacidade limitada, cancelamento e propriedade clara dos recursos.
- Manter testes de fronteira, duplicata, falha intermediária, autorização e corrida, incluindo verificação do estado final.
- Documentar build, configuração sem segredos, backup/restauração local, logs correlacionados e shutdown com prazo.

**Entregáveis**

- Código do módulo com CLI, API e adaptador de persistência.
- Testes automatizados e resultados locais, com fixtures e comandos exatos.
- README de instalação, contratos, decisões e limites.
- Runbook de recuperação e encerramento com evidências do destino restaurado.

**Critérios práticos**

- **Contratos de domínio:** Validar SKU, quantidade positiva e transições de reserva antes de alterar o estado.
- **Duas interfaces:** Reutilizar o mesmo caso de uso por CLI e HTTP, com códigos de saída/status e mensagens de erro coerentes.
- **Persistência consistente:** Persistir reserva, baixa condicional e chave idempotente na mesma transação, sem SQL concatenado.
- **Concorrência com limites:** Executar tarefas auxiliares com capacidade limitada, cancelamento e propriedade clara dos recursos.
- **Evidências de correção:** Manter testes de fronteira, duplicata, falha intermediária, autorização e corrida, incluindo verificação do estado final.
- **Entrega e recuperação:** Documentar build, configuração sem segredos, backup/restauração local, logs correlacionados e shutdown com prazo.

**Testes de aceitação para executar localmente**

#### Reserva válida

- Preparação: SKU A possui 5 unidades; operação op-1 ainda não existe.
- Entrada/ação: Reservar 2 unidades de A com op-1.
- Resultado esperado: Saldo 3, uma reserva confirmada e resultado persistido para op-1.

#### Repetição e conflito

- Preparação: op-1 já confirmou 2 unidades e saldo é 3.
- Entrada/ação: Repetir op-1 com mesmo conteúdo; depois reutilizar op-1 para 4 unidades.
- Resultado esperado: Primeira repetição retorna resultado anterior sem baixa; conteúdo diferente é recusado e saldo permanece 3.

#### Falha e recuperação

- Preparação: Base nova com saldo 5; falha injetada depois da baixa e antes de registrar a reserva.
- Entrada/ação: Executar a operação, encerrar o processo e reabrir base/cópia conforme o roteiro.
- Resultado esperado: Não persiste metade da operação; o estado recuperado satisfaz os invariantes e a falha aparece correlacionada nos logs.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
