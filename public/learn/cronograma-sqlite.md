# Plano de ensino — SQLite

SQLite do arquivo local à aplicação robusta: tipos, integridade, SQL, JSON, FTS5, índices, transações, WAL, integração Python, migrações e recuperação testada.

**Carga estimada:** 144 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Conhecimentos da trilha de Bancos de Dados e SQL ou SQL básico equivalente.
- SQLite 3.37 ou superior com patch de manutenção adequado; prefira um build estável recente. JSON e FTS5 devem ser detectados conforme a aula 3.
- Python 3.12 ou superior com módulo sqlite3 para os seis laboratórios de integração; editor e terminal. A CLI sqlite3 é opcional para executar os exemplos SQL.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | SQLite embutido e ambiente | 12 | 1–2 | Ficha técnica do laboratório |
| 02 | Identidade e integridade | 12 | 2–3 | Catálogo e categorias com regras |
| 03 | Escritas e representação | 12 | 4–5 | Controle local de estoque |
| 04 | SQL relacional e composição | 12 | 5–6 | Relatórios de pedidos |
| 05 | Análise, JSON e busca | 12 | 7–8 | Catálogo com busca e indicadores |
| 06 | Views, triggers e hierarquias | 12 | 8–9 | Auditoria e árvore de categorias |
| 07 | Índices por padrão de acesso | 12 | 10–11 | Estudo de índices do catálogo |
| 08 | Planos e transações | 12 | 11–12 | Importação atômica de pedidos |
| 09 | Concorrência e WAL | 12 | 13–14 | Ensaio de concorrência com duas conexões |
| 10 | Integração e migrações | 12 | 14–15 | Camada de persistência versionada |
| 11 | Backup e verificação | 12 | 16–17 | Recuperação local demonstrada |
| 12 | Projeto e limites de operação | 12 | 17–18 | Aplicativo local de pedidos com restauração |

## Nível 01 — SQLite embutido e ambiente

Entenda a biblioteca, o arquivo e os recursos realmente disponíveis.

**Aulas e objetivos**

- Aula 01: **Banco embutido, arquivo e conexão** — Identificar onde o banco está e qual biblioteca executa a consulta. (4 h)
  - Exercício 1: Registre sqlite_version() e PRAGMA database_list no seu laboratório.
  - Exercício 2: Explique como um caminho relativo errado pode resultar em banco sem tabelas.
  - Exercício 3: Compare a implantação de SQLite com um banco cliente-servidor em duas frases técnicas.
- Aula 02: **Classes de armazenamento e afinidade** — Observar conversões e evitar assumir tipagem rígida em tabelas comuns. (4 h)
  - Exercício 1: Insira NULL e 1.5 na coluna quantidade e consulte typeof.
  - Exercício 2: Crie nome TEXT com no máximo 20 caracteres.
  - Exercício 3: Explique por que 0012 deve ser TEXT quando os zeros pertencem ao identificador.
- Aula 03: **Detectar STRICT, JSON1 e FTS5** — Verificar a biblioteca usada pelo Python e falhar com diagnóstico claro. (4 h)
  - Exercício 1: Simplifique a verificação usando parâmetros em vez de montar a string do SELECT.
  - Exercício 2: Se a CLI diz 3.53 e Python diz 3.36, STRICT no Python está garantido?
  - Exercício 3: Explique por que capturar erro de FTS5 e continuar como se a tabela existisse é inadequado.

**Projeto:** Ficha técnica do laboratório

- Arquivo de banco novo e diretório identificados.
- Versão e suporte a JSON/FTS5 registrados.
- Experimento com classes de armazenamento e afinidade.

**Critérios de conclusão**

- Distingue biblioteca de cliente CLI.
- Não assume versão do SQLite pela versão de Python.
- Explica onde os dados existem e quem pode abrir o arquivo.

## Nível 02 — Identidade e integridade

Modele regras com INTEGER PRIMARY KEY, STRICT e foreign keys verificadas.

**Aulas e objetivos**

- Aula 04: **INTEGER PRIMARY KEY e rowid** — Usar identidade estável e compreender quando AUTOINCREMENT é necessário. (4 h)
  - Exercício 1: Insira id=10 e depois outra linha sem id.
  - Exercício 2: Compare INTEGER PRIMARY KEY e INT PRIMARY KEY em tabelas comuns.
  - Exercício 3: Proponha chave para itens com pedido_id e numero_linha e avalie WITHOUT ROWID.
- Aula 05: **STRICT e constraints de domínio** — Combinar tipagem restrita, presença e validade de valores. (4 h)
  - Exercício 1: Tente inserir qtd='cinco' e depois qtd=-1 em comandos separados.
  - Exercício 2: Explique por que CHECK(qtd>=0) não substitui NOT NULL.
  - Exercício 3: Declare preço em centavos numa tabela STRICT e justifique por que DECIMAL(10,2) não é usado.
- Aula 06: **Foreign keys por conexão** — Ativar referências antes da transação e testar comportamento de exclusão. (4 h)
  - Exercício 1: Insira produto com categoria_id=999 em comando isolado.
  - Exercício 2: Tente excluir categoria1 enquanto o produto a referencia.
  - Exercício 3: Explique o que configurar numa conexão nova aberta pela aplicação.

**Projeto:** Catálogo e categorias com regras

- DDL STRICT com preço em centavos.
- Chaves e referências com comportamento de exclusão definido.
- Casos válidos, nulos, duplicados e órfãos testados.

**Critérios de conclusão**

- Compreende a relação INTEGER PRIMARY KEY e rowid.
- Ativa foreign_keys em cada conexão antes da transação.
- Testes negativos realmente falham no banco.

## Nível 03 — Escritas e representação

Use DML, UPSERT e contratos claros para dinheiro e tempo.

**Aulas e objetivos**

- Aula 07: **DML e RETURNING** — Reservar estoque e observar linhas realmente alteradas. (4 h)
  - Exercício 1: Adicione B com saldo zero e exclua somente itens zerados com RETURNING.
  - Exercício 2: Crie produto INTEGER PRIMARY KEY e obtenha id na própria inserção.
  - Exercício 3: Defina resposta da aplicação quando o retorno da reserva está vazio.
- Aula 08: **UPSERT e diferença de REPLACE** — Resolver conflito de unicidade sem apagar semanticamente o registro. (4 h)
  - Exercício 1: Repita a inserção com DO NOTHING e confira o contador.
  - Exercício 2: Explique por que repetir o UPSERT incremental duas vezes não é idempotente.
  - Exercício 3: Explique um risco de trocar o UPSERT por INSERT OR REPLACE numa tabela com filhos.
- Aula 09: **Dinheiro e datas sem tipo mágico** — Documentar unidades e formatos para cálculos previsíveis. (4 h)
  - Exercício 1: Some três itens de 199 centavos e produza o total inteiro.
  - Exercício 2: Normalize 12:00-03 e 15:00Z com datetime e compare.
  - Exercício 3: Filtre textos UTC padronizados de outubro usando limites fechado-abertos.

**Projeto:** Controle local de estoque

- Reserva com condição de saldo e RETURNING.
- UPSERT com chave de negócio única.
- Convenção de tempo UTC e dinheiro documentada.

**Critérios de conclusão**

- Não usa REPLACE como sinônimo de UPDATE.
- Saldo nunca se torna negativo.
- Evita somas monetárias em ponto flutuante sem contrato.

## Nível 04 — SQL relacional e composição

Construa relatórios sem perder pais ou multiplicar totais.

**Aulas e objetivos**

- Aula 10: **JOIN e pais sem filhos** — Produzir relatórios por entidade com cardinalidade conhecida. (4 h)
  - Exercício 1: Mostre pedidos maiores que 2500 preservando todos os clientes.
  - Exercício 2: Explique o erro de somar total do pedido depois de unir seus dois itens.
  - Exercício 3: Adicione ordenação por total decrescente e id como desempate.
- Aula 11: **EXISTS e semântica de NULL** — Consultar existência sem listas de comparação ambíguas. (4 h)
  - Exercício 1: Execute NOT IN na mesma amostra e compare.
  - Exercício 2: Retorne clientes com ao menos um pedido sem DISTINCT.
  - Exercício 3: Proponha índice para pedidos(cliente_id) e como avaliar.
- Aula 12: **CTEs e etapas de consulta** — Nomear agregações e filtros sem presumir materialização. (4 h)
  - Exercício 1: Acrescente CTE que calcule total em centavos por cliente e filtre total>1500.
  - Exercício 2: Troque o filtro para total>99999 e diga a saída esperada.
  - Exercício 3: Explique por que WITH não é garantia universal de calcular uma expressão uma única vez.

**Projeto:** Relatórios de pedidos

- Consulta incluindo clientes sem compra.
- Consulta de existência sem duplicação.
- CTEs com granularidade e ordenação explícitas.

**Critérios de conclusão**

- Conta a chave do filho no LEFT JOIN.
- Trata NULL sem comparar com =NULL.
- Totais conferem com cálculo manual.

## Nível 05 — Análise, JSON e busca

Explore recursos analíticos e extensões detectadas em seu build.

**Aulas e objetivos**

- Aula 13: **Janelas e acumulados** — Calcular análise por linha com ordem e frame explícitos. (4 h)
  - Exercício 1: Acrescente regiao e reinicie acumulado a cada região.
  - Exercício 2: Compare rank e dense_rank para pontos 100,100,80 em ordem decrescente.
  - Exercício 3: Calcule valor-lag(valor) por id na amostra.
- Aula 14: **JSON textual e validação** — Consultar documentos com JSON1 e distinguir ausência de null. (4 h)
  - Exercício 1: Tente inserir o texto {sem aspas} e registre a falha.
  - Exercício 2: Retorne IDs com peso maior que1 quando o contrato garante número.
  - Exercício 3: Mude cor para verde preservando peso.
- Aula 15: **FTS5 e linguagem MATCH** — Criar uma busca textual e tratar sua linguagem própria. (4 h)
  - Exercício 1: Busque artigos que contenham Python e SQLite.
  - Exercício 2: Busque a frase Python para.
  - Exercício 3: Explique o que fazer se CREATE VIRTUAL TABLE ... fts5 falhar com módulo ausente.

**Projeto:** Catálogo com busca e indicadores

- Acumulado com frame explícito.
- Atributos JSON validados e consultados.
- Busca FTS5 com casos de termos e frases.

**Critérios de conclusão**

- Não assume extensão disponível sem testar.
- Distingue SQL NULL, JSON null e chave ausente.
- Não concatena linguagem MATCH sem controlar a consulta.

## Nível 06 — Views, triggers e hierarquias

Encapsule consultas e regras observáveis sem esconder efeitos.

**Aulas e objetivos**

- Aula 16: **Views como contrato de leitura** — Reutilizar consultas e reconhecer limites de atualização. (4 h)
  - Exercício 1: Insira venda de1000 para Bia e consulte a view novamente.
  - Exercício 2: Tente UPDATE direto na view e explique a falha no modelo sem trigger.
  - Exercício 3: Explique por que ocultar vendas atrás de uma view não protege o arquivo de outro processo autorizado a lê-lo.
- Aula 17: **Triggers de auditoria** — Registrar mudanças por linha e testar seu comportamento transacional. (4 h)
  - Exercício 1: Faça BEGIN, mude preço para1500, consulte auditoria e execute ROLLBACK.
  - Exercício 2: Descreva o que adaptar para auditar inserção e exclusão.
  - Exercício 3: Compare OLD.preco IS NOT NEW.preco com <> se a coluna fosse anulável.
- Aula 18: **Recursão e caminhos** — Percorrer relações hierárquicas com término explícito. (4 h)
  - Exercício 1: Crie categorias1 raiz,2 filha de1 e3 filha de2; produza id e profundidade.
  - Exercício 2: Para IDs inteiros, use caminho como ,1,2, e impeça revisitar2.
  - Exercício 3: Explique por que referências1→2 e2→1 podem satisfazer uma FK.

**Projeto:** Auditoria e árvore de categorias

- View de totais com contrato de colunas.
- Trigger de auditoria com testes de rollback.
- Consulta hierárquica com profundidade e prevenção de ciclos.

**Critérios de conclusão**

- Não presume view atualizável automaticamente.
- Usa trigger por linha com OLD e NEW apropriados.
- Recursão tem término e ordenação definidos.

## Nível 07 — Índices por padrão de acesso

Escolha índices compostos, parciais e de expressão com exemplos verificáveis.

**Aulas e objetivos**

- Aula 19: **Índices compostos e cobertura** — Relacionar filtro, ordenação e colunas de uma consulta. (4 h)
  - Exercício 1: Mude LIMIT3 do objetivo conceitual para a cláusula válida LIMIT 3 no arquivo, se necessário, e confira a consulta fornecida com LIMIT 3.
  - Exercício 2: Compare EQP para cliente_id>=0 sem LIMIT.
  - Exercício 3: Explique um custo de adicionar texto grande ao índice só para cobrir uma consulta rara.
- Aula 20: **Índices parciais** — Indexar um subconjunto útil com predicado compatível. (4 h)
  - Exercício 1: Consulte pedidos fechados do cliente10 e explique o limite do índice parcial.
  - Exercício 2: Imponha só uma matrícula ativa por aluno/curso permitindo históricos inativos.
  - Exercício 3: Compare EQP com formas diferentes de expressar estado aberto.
- Aula 21: **Índices de expressão e comparação textual** — Indexar uma transformação determinística com semântica conhecida. (4 h)
  - Exercício 1: Imponha unicidade de lower(email) para a regra ASCII do exemplo.
  - Exercício 2: Explique por que índice em x+y pode não atender WHERE y+x=10 automaticamente.
  - Exercício 3: Documente por que a amostra não certifica comparação de todos os nomes internacionais.

**Projeto:** Estudo de índices do catálogo

- Três consultas-alvo e seus índices candidatos.
- Carga com seletividade e desempates.
- Comparação de resultado antes/depois e custo de escrita descrito.

**Critérios de conclusão**

- Ordem do índice corresponde ao filtro e ordenação.
- Predicado parcial corresponde à consulta.
- Não transforma funções não determinísticas em índices.

## Nível 08 — Planos e transações

Leia estratégias de acesso e defina unidades atômicas com savepoints.

**Aulas e objetivos**

- Aula 22: **EXPLAIN QUERY PLAN e estatísticas** — Interpretar estratégia sem depender de uma saída textual estável. (4 h)
  - Exercício 1: Colete EQP antes e depois de criar dados_categoria.
  - Exercício 2: Use consulta ORDER BY categoria,id e observe necessidade de ordenação temporária com índices diferentes.
  - Exercício 3: O plano melhorou, mas tempo de uma execução piorou. Que hipótese testar?
- Aula 23: **BEGIN, COMMIT e ROLLBACK** — Definir uma unidade atômica e compreender o modo de início. (4 h)
  - Exercício 1: Troque ROLLBACK por COMMIT e confira saldos e soma.
  - Exercício 2: Explique por que capturar erro e continuar sem entender o estado transacional é perigoso.
  - Exercício 3: Diga onde colocar uma confirmação humana de compra em relação ao BEGIN de escrita.
- Aula 24: **Savepoints e importação parcial** — Recuperar uma etapa opcional sem confundir RELEASE com confirmação global. (4 h)
  - Exercício 1: Troque o COMMIT final por ROLLBACK e diga quantas linhas restam.
  - Exercício 2: Explique quando uma linha rejeitada pode ser tratada por savepoint numa importação.
  - Exercício 3: Após ROLLBACK TO, por que o exemplo também usa RELEASE?

**Projeto:** Importação atômica de pedidos

- Planos coletados sem depender de formato estável.
- Transação que confirma ou desfaz a importação.
- Caso opcional recuperado com savepoint.

**Critérios de conclusão**

- Distingue SCAN de SEARCH observado.
- Não considera executescript uma transação automática universal.
- Fecha transações e cursores em todo caminho de erro.

## Nível 09 — Concorrência e WAL

Observe dois escritores, snapshots WAL e configuração por conexão.

**Aulas e objetivos**

- Aula 25: **Disputa de escrita e SQLITE_BUSY** — Reproduzir contenção real entre duas conexões. (4 h)
  - Exercício 1: Observe o código do erro.
  - Exercício 2: Libere o lock antes de B tentar.
  - Exercício 3: Projete retry limitado.
- Aula 26: **WAL e snapshots de leitura** — Demonstrar leitor estável enquanto outro cliente confirma uma escrita. (4 h)
  - Exercício 1: Encerre B antes da segunda leitura.
  - Exercício 2: Explique o efeito de leitor que permanece aberto por horas.
  - Exercício 3: Compare WAL com replicação.
- Aula 27: **Checkpoint e arquivos auxiliares** — Inspecionar o ciclo de vida do WAL num arquivo local. (4 h)
  - Exercício 1: Identifique as três colunas retornadas pelo checkpoint.
  - Exercício 2: Leia a linha após o checkpoint.
  - Exercício 3: Diferencie checkpoint e backup.

**Projeto:** Ensaio de concorrência com duas conexões

- Script com dois escritores e busy controlado.
- Script com leitor WAL e commit concorrente.
- Configurações e limites de durabilidade registrados.

**Critérios de conclusão**

- Reconhece um escritor por vez por banco.
- Mantém transações curtas e retry limitado.
- Não usa WAL como promessa de múltiplos escritores simultâneos.

## Nível 10 — Integração e migrações

Vincule valores em Python e evolua schemas versionados.

**Aulas e objetivos**

- Aula 28: **Binding e ciclo de conexão no Python** — Vincular valores e fechar conexões explicitamente. (4 h)
  - Exercício 1: Pesquise Bia com o mesmo comando.
  - Exercício 2: Explique a finalidade de finally.
  - Exercício 3: Escolha ordenação entre nome e id.
- Aula 29: **Migrações e PRAGMA user_version** — Aplicar alterações com versão e preservar dados existentes. (4 h)
  - Exercício 1: Verifique versão antes de reaplicar.
  - Exercício 2: Desfaça o ensaio trocando COMMIT por ROLLBACK.
  - Exercício 3: Planeje acrescentar uma coluna obrigatória sem default em tabela populada.
- Aula 30: **Testes de regras e erros esperados** — Executar cenários positivos e negativos em conexões isoladas. (4 h)
  - Exercício 1: Desative foreign_keys antes da fixture.
  - Exercício 2: Adicione teste de exclusão do pai referenciado.
  - Exercício 3: Separe fixtures por teste em uma suíte maior.

**Projeto:** Camada de persistência versionada

- Consulta parametrizada com apóstrofo e tentativa de injeção.
- Migração transacional com user_version.
- Reconstrução de tabela com contagens e constraints validadas.

**Critérios de conclusão**

- Valores não são concatenados ao SQL.
- Versão só avança quando a migração confirma.
- Dados e dependências sobrevivem à evolução testada.

## Nível 11 — Backup e verificação

Crie cópias consistentes e restaure com conferência funcional.

**Aulas e objetivos**

- Aula 31: **API de backup e reabertura do arquivo** — Criar cópia consistente e conferir o ponto recuperado. (4 h)
  - Exercício 1: Altere a origem antes de chamar backup.
  - Exercício 2: Compare cópia do .db ativo com API de backup.
  - Exercício 3: Defina evidência de restauração.
- Aula 32: **VACUUM INTO e cópia compacta** — Gerar um segundo arquivo e verificar seu conteúdo. (4 h)
  - Exercício 1: Reabra a cópia em um cliente separado.
  - Exercício 2: Altere o título na origem após copiar.
  - Exercício 3: Planeje nomes com data e política de retenção.
- Aula 33: **Integridade estrutural e referencial** — Combinar verificações que respondem perguntas diferentes. (4 h)
  - Exercício 1: Liste as três evidências de sucesso do exemplo.
  - Exercício 2: Explique por que ok não comprova saldo correto.
  - Exercício 3: Planeje resposta a erro de integridade.

**Projeto:** Recuperação local demonstrada

- Cópia com Connection.backup e abertura independente.
- Cópia compacta com VACUUM INTO em destino novo.
- integrity_check e foreign_key_check com resultados interpretados.

**Critérios de conclusão**

- Não copia apenas o .db aberto em WAL como backup.
- Confere conteúdo e regras após restauração.
- Distingue integridade estrutural de correção de negócio.

## Nível 12 — Projeto e limites de operação

Entregue um aplicativo local de pedidos com decisões e limites explícitos.

**Aulas e objetivos**

- Aula 34: **ATTACH e fronteiras entre arquivos** — Consultar dois bancos sem supor garantias distribuídas. (4 h)
  - Exercício 1: Qualifique todas as tabelas da junção.
  - Exercício 2: Tente consultar apoio.rotulo após DETACH.
  - Exercício 3: Avalie uma transferência entre arquivos em WAL.
- Aula 35: **Limites de implantação e acesso ao arquivo** — Escolher SQLite conforme o padrão de acesso e o ambiente. (4 h)
  - Exercício 1: Tente escrita após query_only.
  - Exercício 2: Compare API remota com arquivo remoto compartilhado.
  - Exercício 3: Defina um critério de migração de arquitetura.
- Aula 36: **Projeto local com invariantes e recuperação** — Entregar uma aplicação persistente cuja recuperação é demonstrável. (4 h)
  - Exercício 1: Tente outra reserva aberta para o recurso 1.
  - Exercício 2: Encerre a primeira e crie outra.
  - Exercício 3: Monte a demonstração de recuperação do projeto.

**Projeto:** Aplicativo local de pedidos com restauração

- DDL, dados fictícios, migrações e consultas de uso.
- Ensaio de concorrência e backup restaurado.
- README de caminhos, permissões de arquivo e critérios de migração de engine.

**Critérios de conclusão**

- Uma pessoa consegue reproduzir o projeto do zero.
- Limites de escrita e rede são justificados com carga real.
- A entrega separa medições executadas de hipóteses futuras.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [Documentação SQLite](https://www.sqlite.org/docs.html) — Sintaxe, arquitetura e APIs oficiais.
- [Tipos e afinidade](https://www.sqlite.org/datatype3.html) — Classes de armazenamento e conversões.
- [Tabelas STRICT](https://www.sqlite.org/stricttables.html) — Tipos permitidos e conversão sem perda desde 3.37.
- [Foreign keys](https://www.sqlite.org/foreignkeys.html) — Ativação por conexão e validação de referências.
- [WAL](https://www.sqlite.org/wal.html) — Leitores, escritor, checkpoint e arquivos auxiliares.
- [JSON1](https://www.sqlite.org/json1.html) — Funções JSON textuais e seus contratos.
- [FTS5](https://www.sqlite.org/fts5.html) — Índice virtual e linguagem MATCH.
- [Online backup](https://www.sqlite.org/backup.html) — Cópia consistente com API de backup.
- [sqlite3 do Python](https://docs.python.org/3/library/sqlite3.html) — Binding, conexões, transações e backup.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Estoque local com representação explícita

Um aplicativo local recebe quantidade e preço em centavos. Os itens pertencem a categorias existentes e a baixa deve indicar se realmente encontrou quantidade suficiente.

**Aulas necessárias**

- Aula 02 — Classes de armazenamento e afinidade
- Aula 04 — INTEGER PRIMARY KEY e rowid
- Aula 05 — STRICT e constraints de domínio
- Aula 06 — Foreign keys por conexão
- Aula 07 — DML e RETURNING
- Aula 09 — Dinheiro e datas sem tipo mágico

**Conceitos combinados:** Afinidade e STRICT; Integridade por conexão; RETURNING e unidades.

### Combo 2 — Catálogo com análise, JSON e busca

O catálogo exibe totais por cliente, um acumulado por movimento e busca textual em títulos. A interface lê uma view de preços e uma trigger registra mudanças efetivas.

**Aulas necessárias**

- Aula 10 — JOIN e pais sem filhos
- Aula 13 — Janelas e acumulados
- Aula 14 — JSON textual e validação
- Aula 15 — FTS5 e linguagem MATCH
- Aula 16 — Views como contrato de leitura
- Aula 17 — Triggers de auditoria

**Conceitos combinados:** Granularidade e janelas; Busca com contrato; Views e auditoria.

### Combo 3 — Reserva concorrente em WAL

Duas conexões usam um arquivo local. A aplicação exige uma reserva aberta por recurso, consulta por cliente e retomada explícita quando há disputa de escritor.

**Aulas necessárias**

- Aula 19 — Índices compostos e cobertura
- Aula 20 — Índices parciais
- Aula 22 — EXPLAIN QUERY PLAN e estatísticas
- Aula 23 — BEGIN, COMMIT e ROLLBACK
- Aula 25 — Disputa de escrita e SQLITE_BUSY
- Aula 26 — WAL e snapshots de leitura

**Conceitos combinados:** Índice parcial; Locks e snapshot; Plano por padrão de acesso.

### Combo 4 — Migração e recuperação verificáveis

O aplicativo migra seu esquema, recebe filtros do usuário e precisa produzir uma cópia que possa ser aberta num diretório separado com dados e regras conferidos.

**Aulas necessárias**

- Aula 28 — Binding e ciclo de conexão no Python
- Aula 29 — Migrações e PRAGMA user_version
- Aula 30 — Testes de regras e erros esperados
- Aula 31 — API de backup e reabertura do arquivo
- Aula 32 — VACUUM INTO e cópia compacta
- Aula 33 — Integridade estrutural e referencial

**Conceitos combinados:** Binding e testes; Versionamento; Cópia independente.

### Projeto final — Aplicativo local de reservas com recuperação

Construa a persistência de um agendador local de recursos. O cliente pode ser uma CLI Python; todos os arquivos de ensaio devem ficar em diretório de laboratório identificado.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Domínio explícito: tabelas STRICT compatíveis, unidades documentadas, chaves e referências habilitadas por conexão.
- Reserva protegida: no máximo uma reserva aberta por recurso e alteração condicional que confirme seu efeito.
- Concorrência observada: duas conexões reproduzem snapshot WAL e BUSY; retries são limitados e transações são curtas.
- Leitura eficiente: relatórios preservam pais sem filhos e um índice é justificado por consulta, EQP e medição comparável.
- Cliente evolutivo: valores parametrizados, conexões fechadas, migrations versionadas e testes de erro que conferem causa e estado.
- Cópia recuperável: backup por API ou VACUUM INTO, reabertura independente e comparação de integridade, referências e dados conhecidos.

**Entregáveis**

- DDL, contrato das unidades e lista de capacidades do build SQLite.
- CLI Python e scripts de migration versionados.
- Testes reproduzíveis com duas conexões, casos inválidos e relatório de planos.
- Runbook de cópia/reabertura com saídas e limites da implantação escolhida.

**Critérios práticos**

- **Domínio explícito:** Domínio explícito: tabelas STRICT compatíveis, unidades documentadas, chaves e referências habilitadas por conexão.
- **Reserva protegida:** Reserva protegida: no máximo uma reserva aberta por recurso e alteração condicional que confirme seu efeito.
- **Concorrência observada:** Concorrência observada: duas conexões reproduzem snapshot WAL e BUSY; retries são limitados e transações são curtas.
- **Leitura eficiente:** Leitura eficiente: relatórios preservam pais sem filhos e um índice é justificado por consulta, EQP e medição comparável.
- **Cliente evolutivo:** Cliente evolutivo: valores parametrizados, conexões fechadas, migrations versionadas e testes de erro que conferem causa e estado.
- **Cópia recuperável:** Cópia recuperável: backup por API ou VACUUM INTO, reabertura independente e comparação de integridade, referências e dados conhecidos.

**Testes de aceitação para executar localmente**

#### Reserva e recusa concorrente

- Preparação: Recurso 1 sem reserva; duas conexões reais ao mesmo arquivo local.
- Entrada/ação: Tentar duas reservas abertas do recurso e concluir as transações conforme o protocolo.
- Resultado esperado: Só uma reserva aberta persiste; a segunda recebe recusa tratada e não há efeito parcial.

#### Snapshot de leitura

- Preparação: WAL confirmado; B abre transação e lê versão 1.
- Entrada/ação: A confirma versão 2; B lê antes e depois de encerrar seu snapshot.
- Resultado esperado: B observa 1 dentro da transação antiga e 2 numa leitura posterior ao encerramento.

#### Migração e reabertura

- Preparação: Base na versão anterior com fixture conhecida e destino novo.
- Entrada/ação: Migrar, copiar pelo mecanismo escolhido, fechar e abrir a cópia em outra conexão.
- Resultado esperado: Versão, esquema, dados e regras conferem no destino; não basta o nome do arquivo existir.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
