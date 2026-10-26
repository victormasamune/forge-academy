# Plano de ensino — Markdown

Escreva documentos claros e portáveis, do primeiro README a manuais técnicos, com CommonMark, GFM, revisão e manutenção.

**Carga estimada:** 72 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Nenhuma experiência prévia de programação é exigida.
- Editor de texto e visualizador de Markdown; use um preview local com o dialeto declarado.
- Saber criar pastas e arquivos. Markdown organiza conteúdo; não exige um compilador de linguagem.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Texto e estrutura | 6 | 1–1 | Apresentação de um projeto |
| 02 | Listas e blocos | 6 | 1–2 | Procedimento de conferência |
| 03 | Código e caracteres | 6 | 2–3 | Guia de exemplos copiáveis |
| 04 | Links e caminhos | 6 | 3–3 | Índice de documentação |
| 05 | Imagens e leitura acessível | 6 | 4–4 | Relatório de uma OS |
| 06 | Recursos GFM | 6 | 4–5 | Checklist e matriz de serviços |
| 07 | HTML e comportamento do renderizador | 6 | 5–6 | Guia com detalhes opcionais |
| 08 | Documentação de uso | 6 | 6–6 | Kit de entrada de um projeto |
| 09 | Conjuntos de documentos | 6 | 7–7 | Manual dividido por público |
| 10 | Extensões e portabilidade | 6 | 7–8 | Documento com alternativa portátil |
| 11 | Decisões e manutenção | 6 | 8–9 | Guia de manutenção documental |
| 12 | Entrega e auditoria | 6 | 9–9 | Manual de OS e estoque |

## Nível 01 — Texto e estrutura

Leia o arquivo-fonte e transforme um texto simples em uma página com hierarquia.

**Aulas e objetivos**

- Aula 01: **Seu primeiro arquivo e o preview** — Distinguir texto-fonte, estrutura e apresentação renderizada. (2 h)
  - Exercício 1: Troque o título pelo nome de um projeto e escreva seu objetivo em um parágrafo.
  - Exercício 2: Registre duas diferenças visuais entre fonte e preview sem alterar o significado.
  - Exercício 3: Anote qual editor e qual modo de Markdown foram usados.
- Aula 02: **Títulos, parágrafos e hierarquia** — Estruturar um texto em seções que representem as partes do assunto. (2 h)
  - Exercício 1: Acrescente uma seção de Resultado no mesmo nível de Conferência.
  - Exercício 2: Transforme duas instruções de um único parágrafo em dois parágrafos verdadeiros.
  - Exercício 3: Explique por que trocar Material necessário para ###### só para reduzir a fonte prejudica a estrutura.
- Aula 03: **Ênfase e código inline** — Diferenciar destaque textual de nomes e valores literais. (2 h)
  - Exercício 1: Escreva uma frase com uma regra importante em forte e o nome saldo como código inline.
  - Exercício 2: Mostre o texto A*B como código inline e compare com um texto sem crases.
  - Exercício 3: Revise um parágrafo que colocou todas as palavras em negrito.

**Projeto:** Apresentação de um projeto

- README com título, objetivo e público.
- Parágrafos e destaque com função clara.
- Registro do preview e do dialeto usado.

**Critérios de conclusão**

- A fonte continua legível sem renderização.
- Os títulos representam a estrutura real do conteúdo.
- Ênfase e código inline são usados com intenção.

## Nível 02 — Listas e blocos

Organize procedimentos, agrupamentos e observações sem depender de alinhamento visual.

**Aulas e objetivos**

- Aula 04: **Listas e procedimentos** — Escolher listas ordenadas ou não ordenadas conforme a relação entre itens. (2 h)
  - Exercício 1: Inclua uma etapa de conferir o identificador antes de conferir saldo.
  - Exercício 2: Escreva uma lista de evidências que podem ser consultadas em qualquer ordem.
  - Exercício 3: Melhore o passo Faça a conferência.
- Aula 05: **Aninhamento e blocos dentro de itens** — Manter subitens e exemplos ligados ao item correto. (2 h)
  - Exercício 1: Acrescente uma conferência de data como subitem da primeira etapa.
  - Exercício 2: Remova o recuo do parágrafo de divergência e explique a mudança no preview.
  - Exercício 3: Reorganize uma lista com cinco camadas em duas subseções e listas curtas.
- Aula 06: **Citações e separadores** — Representar texto citado e mudanças de assunto sem confundir instrução com citação. (2 h)
  - Exercício 1: Acrescente uma segunda frase à citação mantendo claro que ela vem do registro fictício.
  - Exercício 2: Reescreva uma regra essencial que estava escondida numa citação sem título.
  - Exercício 3: Teste três hífens imediatamente abaixo de uma palavra e depois com uma linha vazia antes.

**Projeto:** Procedimento de conferência

- Passos de conferência em sequência.
- Subitens ligados ao passo correto.
- Observação separada do procedimento principal.

**Critérios de conclusão**

- A lista ordenada mantém ordem compreensível.
- Aninhamento é verificado no preview.
- Nenhuma instrução essencial fica ambígua numa citação.

## Nível 03 — Código e caracteres

Mostre comandos e sintaxe sem que o renderizador os confunda com formatação.

**Aulas e objetivos**

- Aula 07: **Blocos cercados e linguagem de exemplo** — Exibir vários comandos ou linhas de código sem executá-los. (2 h)
  - Exercício 1: Escreva um exemplo de saldo em JSON e sua saída textual em blocos separados.
  - Exercício 2: Remova a cerca final do primeiro bloco e observe o que passa a ser mostrado como código.
  - Exercício 3: Crie uma instrução com um comando fictício sem incluir o prompt do terminal no trecho copiável.
- Aula 08: **Crases, escapes e exemplos de Markdown** — Mostrar sintaxe de Markdown como conteúdo literal. (2 h)
  - Exercício 1: Mostre a fonte de uma pequena tabela GFM sem transformá-la em tabela na aula.
  - Exercício 2: Escreva um identificador A*B fora de código e decida como preservar sua forma.
  - Exercício 3: Mostre num documento um exemplo de Markdown que contém uma cerca json.
- Aula 09: **Quebras de linha e espaços significativos** — Distinguir parágrafos, quebras suaves e quebras forçadas. (2 h)
  - Exercício 1: Divida um parágrafo de preparação e conclusão em dois parágrafos.
  - Exercício 2: Troque a barra invertida do exemplo por dois espaços finais e compare a manutenção da fonte.
  - Exercício 3: Explique por que dois previews podem apresentar diferente a quebra suave sem que ambos estejam errados.

**Projeto:** Guia de exemplos copiáveis

- Trechos de código com contexto e resultado esperado.
- Exemplo de Markdown exibido como texto.
- Convenção explícita de quebras e linhas vazias.

**Critérios de conclusão**

- As cercas abrem e fecham corretamente.
- O conteúdo copiado conserva caracteres necessários.
- A leitura não depende de uma quebra suave específica.

## Nível 04 — Links e caminhos

Construa navegação com rótulos úteis, referências e caminhos coerentes.

**Aulas e objetivos**

- Aula 10: **Links com rótulos que explicam o destino** — Criar links inline compreensíveis e diferenciar texto, destino e título opcional. (2 h)
  - Exercício 1: Troque um link clique aqui para saber das regras por um rótulo que nomeie o destino.
  - Exercício 2: Crie dois links com o mesmo destino CommonMark e rótulos adequados a frases diferentes.
  - Exercício 3: Remova o título opcional do segundo link e explique o que precisa continuar compreensível.
- Aula 11: **Links por referência e definições reutilizáveis** — Separar o fluxo do texto de endereços repetidos sem criar referências ambíguas. (2 h)
  - Exercício 1: Adicione uma definição gfm e use-a numa frase sobre extensões.
  - Exercício 2: Troque um uso commonmark por commonmar e observe o resultado antes de corrigir.
  - Exercício 3: Explique o problema de chamar uma referência de tutorial de estoque quando ela aponta para a especificação CommonMark.
- Aula 12: **Caminhos relativos, fragmentos e contexto** — Planejar links entre arquivos e seções a partir da localização do documento. (2 h)
  - Exercício 1: Crie GUIA.md ao lado do README com o título ## Conferencia e teste os dois primeiros links.
  - Exercício 2: Mova GUIA.md para uma pasta docs e atualize os links do README.
  - Exercício 3: Altere Conferencia para Conferência final e descubra a nova âncora gerada pelo seu destino.

**Projeto:** Índice de documentação

- Índice com rótulos que descrevem o destino.
- Links por referência reutilizados com propósito.
- Mapa de arquivos e caminhos relativos.

**Critérios de conclusão**

- Links são conferidos a partir do arquivo que os contém.
- As referências são únicas e resolvidas.
- Âncoras geradas são verificadas no renderizador escolhido.

## Nível 05 — Imagens e leitura acessível

Use conteúdo visual e estrutura que continuem informativos para leitores diferentes.

**Aulas e objetivos**

- Aula 13: **Imagens e texto alternativo** — Inserir uma imagem com alternativa textual adequada ao seu papel. (2 h)
  - Exercício 1: Crie uma figura simples com os valores do exemplo e salve como imagens/saldo.png.
  - Exercício 2: Substitua o texto alternativo figura1 por uma descrição útil de um fluxo de conferência.
  - Exercício 3: Renomeie temporariamente a figura e confirme o que continua compreensível no documento.
- Aula 14: **Conteúdo acessível e linguagem de orientação** — Revisar títulos, rótulos e instruções para leitura além da aparência visual. (2 h)
  - Exercício 1: Reescreva dois links chamados baixar para diferenciar guia e modelo de OS.
  - Exercício 2: Escreva uma indicação de saldo insuficiente que não dependa de cor.
  - Exercício 3: Leia só os títulos do exemplo e descreva o caminho que eles oferecem.
- Aula 15: **Relatórios com fatos, limites e próximos passos** — Montar um relatório que separa observação, interpretação e decisão. (2 h)
  - Exercício 1: Classifique a foto existe e a instalação está correta como observação ou conclusão, justificando o contexto.
  - Exercício 2: Acrescente uma pendência sobre legibilidade da imagem com próximo passo.
  - Exercício 3: Se a OS passar a solicitar 4 unidades, revise o relatório.

**Projeto:** Relatório de uma OS

- Relatório com resumo textual independente de imagens.
- Figura local com alternativa descritiva quando usada.
- Conteúdo dividido por tarefa e estado.

**Critérios de conclusão**

- O sentido não depende apenas de cor ou imagem.
- As figuras citadas existem ou são claramente tarefas de criação.
- Títulos e rótulos são compreensíveis fora do contexto visual.

## Nível 06 — Recursos GFM

Aplique extensões conhecendo os limites do destino e a alternativa em texto.

**Aulas e objetivos**

- Aula 16: **Tabelas GFM para comparações pequenas** — Organizar dados tabulares sem forçar parágrafos longos dentro de células. (2 h)
  - Exercício 1: Acrescente uma coluna Próximo passo mantendo três linhas de dados.
  - Exercício 2: Mostre o literal A|B dentro de uma célula sem criar outra coluna.
  - Exercício 3: Reescreva uma célula com cinco frases e vários passos como uma seção fora da tabela.
- Aula 17: **Listas de tarefas e registros de revisão** — Representar itens concluídos ou pendentes sem confundir documento com automação. (2 h)
  - Exercício 1: Divida revisar tudo em três itens com critérios claros.
  - Exercício 2: Acrescente uma frase que registre como os links foram conferidos.
  - Exercício 3: O destino de um link foi renomeado depois de a tarefa ser marcada. O que revisar?
- Aula 18: **Autolinks, texto riscado e declaração de dialeto** — Distinguir recursos básicos de extensões e escrever alternativas claras. (2 h)
  - Exercício 1: Troque a URL direta GFM por um link inline com rótulo descritivo.
  - Exercício 2: Reescreva uma frase riscada sem deixar dúvida sobre qual procedimento vale.
  - Exercício 3: Liste quais recursos desta aula dependem de GFM e qual tem forma CommonMark.

**Projeto:** Checklist e matriz de serviços

- Matriz pequena de estados e efeitos.
- Checklist de evidências e revisão.
- Declaração dos recursos GFM utilizados.

**Critérios de conclusão**

- A tabela tem cabeçalho e separador válidos.
- Checklist não é confundido com controle de execução automático.
- Documento tem alternativa compreensível em CommonMark.

## Nível 07 — HTML e comportamento do renderizador

Distinga sintaxe de renderização, apresentação e sanitização.

**Aulas e objetivos**

- Aula 19: **HTML inline e blocos explícitos** — Reconhecer quando a fonte contém HTML e qual parte cabe ao renderizador. (2 h)
  - Exercício 1: Troque o parágrafo HTML por uma forma Markdown equivalente para o destaque.
  - Exercício 2: Confira se kbd é preservado pelo seu visualizador e registre o resultado.
  - Exercício 3: Teste um parágrafo HTML contendo os caracteres **saldo** e compare com o parágrafo Markdown fora dele.
- Aula 20: **Seções recolhíveis com details e summary** — Organizar conteúdo suplementar sem esconder ações essenciais. (2 h)
  - Exercício 1: Substitua um summary chamado Mais por um rótulo que descreva seu conteúdo.
  - Exercício 2: Reescreva o mesmo exemplo usando apenas um título e um parágrafo.
  - Exercício 3: Mova a regra de pendência para dentro da área recolhível e explique por que essa versão é pior.
- Aula 21: **Sanitização e contrato de publicação** — Distinguir conteúdo reconhecido, conteúdo permitido e recursos realmente disponíveis. (2 h)
  - Exercício 1: Liste os recursos usados por um documento seu e marque quais são indispensáveis.
  - Exercício 2: Prepare uma versão sem HTML de um guia que usa kbd e details.
  - Exercício 3: Revise uma URL que contém um token fictício parecido com segredo e proponha um exemplo melhor.

**Projeto:** Guia com detalhes opcionais

- Conteúdo essencial visível por padrão.
- Uma seção recolhível com rótulo descritivo.
- Matriz de compatibilidade do conteúdo usado.

**Critérios de conclusão**

- HTML não é usado para esconder pré-requisitos importantes.
- Não há scripts ou handlers de evento no documento.
- O comportamento é conferido no destino, sem presumir suporte universal.

## Nível 08 — Documentação de uso

Escreva para a tarefa do leitor, separando introdução, tutorial e consulta.

**Aulas e objetivos**

- Aula 22: **README que orienta o primeiro contato** — Apresentar objetivo, público, entrada e limitações sem transformar o README num manual inteiro. (2 h)
  - Exercício 1: Adapte o README para um operador que quer conferir uma OS, não para um desenvolvedor.
  - Exercício 2: Proponha uma seção que deveria sair do README quando se tornar longa.
  - Exercício 3: Escreva uma limitação que altere a expectativa do leitor sem ser uma frase vaga.
- Aula 23: **Tutorial orientado a uma tarefa** — Escrever uma sequência com ponto de partida, ações e resultado observável. (2 h)
  - Exercício 1: Adapte o tutorial para saldo 1 e solicitação de 2 unidades.
  - Exercício 2: Acrescente um pré-requisito necessário para conferir uma evidência visual.
  - Exercício 3: Reescreva faça o necessário como uma ação e um resultado verificáveis.
- Aula 24: **Referência de campos, estados e vocabulário** — Criar um documento de consulta com contratos e exemplos consistentes. (2 h)
  - Exercício 1: Documente saldo como inteiro não negativo, incluindo o significado de zero.
  - Exercício 2: Revise um tutorial que usa concluída como sinônimo de conferida sem definir esse estado.
  - Exercício 3: Escreva um contraexemplo de quantidade e explique por que ele é rejeitado no contrato.

**Projeto:** Kit de entrada de um projeto

- README que orienta o primeiro contato.
- Tutorial com pré-requisitos e resultado verificável.
- Referência curta dos campos e estados.

**Critérios de conclusão**

- O leitor encontra um caminho inicial claro.
- Os exemplos usam dados fictícios e hipóteses explícitas.
- Referência e tutorial têm objetivos distintos.

## Nível 09 — Conjuntos de documentos

Organize vários arquivos e reduza a repetição que causa divergências.

**Aulas e objetivos**

- Aula 25: **Índices e navegação entre arquivos** — Projetar um conjunto documental em que cada público encontre seu percurso. (2 h)
  - Exercício 1: Crie os três documentos mínimos em docs e teste cada link do índice.
  - Exercício 2: Acrescente um link de retorno ao README em GUIA.md.
  - Exercício 3: Crie um item de índice para quem procura solucionar uma pendência de evidência.
- Aula 26: **Âncoras estáveis e revisão de links** — Entender como mudanças de títulos e arquivos afetam a navegação existente. (2 h)
  - Exercício 1: Troque Conferencia final por Decisao registrada e atualize a navegação.
  - Exercício 2: Crie duas seções Teste no laboratório e inspecione os fragmentos gerados.
  - Exercício 3: Um link chamado Campos obrigatórios abre uma seção de histórico. Explique a falha e corrija.
- Aula 27: **Modelos e convenções de autoria** — Criar modelos que orientem informações necessárias sem transformar placeholders em fatos. (2 h)
  - Exercício 1: Crie uma cópia do modelo com os dados fictícios OS-1, saldo 3 e solicitação 2.
  - Exercício 2: Escreva três convenções editoriais para os documentos do projeto.
  - Exercício 3: Explique onde manter a definição de status quando vários modelos a usam.

**Projeto:** Manual dividido por público

- Índice para operador e responsável técnico.
- Links de ida e retorno entre arquivos.
- Convenções e fonte principal para cada regra.

**Critérios de conclusão**

- Nenhum arquivo essencial fica isolado.
- Os caminhos funcionam no contexto publicado.
- A mesma regra não é mantida em cópias divergentes.

## Nível 10 — Extensões e portabilidade

Use recursos extras apenas quando o ambiente oferece suporte e uma alternativa adequada.

**Aulas e objetivos**

- Aula 28: **Mermaid como extensão com alternativa textual** — Acrescentar um diagrama quando o destino oferece suporte sem tornar a regra dependente dele. (2 h)
  - Exercício 1: Se uma conferência tiver uma decisão de solicitar evidência, escreva primeiro a regra em texto e depois proponha o diagrama.
  - Exercício 2: Abra a amostra num preview sem Mermaid e avalie se a tarefa ainda pode ser entendida.
  - Exercício 3: Altere a regra para manter pendente quando a evidência não for legível. Revise texto e rótulos.
- Aula 29: **Front matter e metadados de um gerador** — Separar metadados específicos de uma ferramenta do corpo Markdown portátil. (2 h)
  - Exercício 1: Prepare uma versão do guia para um destino que aceita apenas CommonMark.
  - Exercício 2: Descreva title e revisao numa convenção do projeto.
  - Exercício 3: No cenário Jekyll, coloque um parágrafo antes dos delimitadores e investigue por que o resultado pode mudar.
- Aula 30: **Notas, fórmulas e MDX: limites das extensões** — Avaliar recursos extras sem confundir dialetos ou exigir componentes para ler uma regra. (2 h)
  - Exercício 1: Transforme a nota do exemplo em um parágrafo visível para uma edição portátil.
  - Exercício 2: Escreva uma lista distinguindo tabelas GFM, Mermaid, front matter e MDX.
  - Exercício 3: Uma equipe propõe um componente MDX para exibir uma única frase. Avalie a escolha para um manual que será lido como texto.

**Projeto:** Documento com alternativa portátil

- Diagrama opcional acompanhado de texto equivalente.
- Metadados separados do conteúdo principal.
- Inventário de extensões exigidas pelo destino.

**Critérios de conclusão**

- Mermaid e metadados não são apresentados como CommonMark.
- Texto essencial continua compreensível sem extensões.
- Não há dependência de execução de componentes para ler a regra principal.

## Nível 11 — Decisões e manutenção

Registre mudanças e prepare outras pessoas para revisar documentos.

**Aulas e objetivos**

- Aula 31: **Registros de decisão com contexto e consequência** — Documentar uma escolha de projeto de modo que possa ser revisada no futuro. (2 h)
  - Exercício 1: Se o manual tiver apenas uma página curta, reavalie a separação de arquivos.
  - Exercício 2: Acrescente uma consequência negativa verificável da decisão proposta.
  - Exercício 3: Escreva como indicaria que a decisão 002 substituiu a 001.
- Aula 32: **Histórico de mudanças útil para leitores** — Registrar o efeito de uma revisão sem confundir histórico com instrução vigente. (2 h)
  - Exercício 1: Registre que GUIA.md foi movido para docs/GUIA.md e o efeito para links locais.
  - Exercício 2: Uma correção mudou a quantidade do exemplo de 2 para 4. O que precisa ser revisto além do histórico?
  - Exercício 3: Reescreva um item de histórico que diz antes confirmar sem conferir, agora talvez conferir.
- Aula 33: **Contribuição e checklist de revisão documental** — Preparar critérios para que outra pessoa revise uma alteração com autonomia. (2 h)
  - Exercício 1: Acrescente um item de revisão sobre coerência entre tutorial e referência de estados.
  - Exercício 2: Registre uma revisão em que Mermaid não pôde ser renderizado no ambiente disponível.
  - Exercício 3: Uma pessoa corrigiu apenas um link local. Defina uma revisão proporcional.

**Projeto:** Guia de manutenção documental

- Decisão com contexto, alternativa e consequência.
- Histórico de mudanças útil para leitores.
- Checklist de contribuição e revisão.

**Critérios de conclusão**

- Decisões descrevem o que foi escolhido e por quê.
- Mudanças têm efeito observável e versão ou data.
- Critérios incluem conteúdo, links e renderização.

## Nível 12 — Entrega e auditoria

Revise o conjunto como um produto que precisa orientar trabalho real.

**Aulas e objetivos**

- Aula 34: **Diagnóstico de problemas de renderização** — Investigar um resultado inesperado com uma hipótese e um exemplo mínimo. (2 h)
  - Exercício 1: Produza num laboratório um bloco de código sem fechamento e escreva um diagnóstico curto.
  - Exercício 2: Investigue um subitem que virou lista principal sem mudar seu conteúdo.
  - Exercício 3: Um preview GFM mostrou a tabela. O que você pode concluir sobre o preview anterior?
- Aula 35: **Portabilidade e matriz de compatibilidade** — Revisar o mesmo conteúdo em contratos de renderização diferentes. (2 h)
  - Exercício 1: Converta uma tabela de dois campos em uma lista que mantenha o significado em CommonMark.
  - Exercício 2: Compare um documento num preview GFM e em um modo sem as extensões usadas.
  - Exercício 3: Defina três critérios para publicar um manual que será lido como texto e no GitHub.
- Aula 36: **Projeto final: manual de OS e estoque** — Entregar um conjunto coerente de documentos com percurso, referência, exemplos e revisão. (2 h)
  - Exercício 1: Escreva os três arquivos de docs, complete o índice do README e inclua links de retorno.
  - Exercício 2: Peça a um leitor, ou faça uma leitura sem consultar suas anotações, seguindo o cenário principal e o insuficiente.
  - Exercício 3: Descreva como guardar uma cópia identificada e restaurar o conjunto documental no laboratório.

**Projeto:** Manual de OS e estoque

- README de entrada, guia do operador e referência de estados.
- Exemplo de OS, matriz de estoque e procedimento de recuperação documental.
- Relatório final de revisão e limitações do renderizador.

**Critérios de conclusão**

- Um leitor executa o percurso proposto sem explicação oral adicional.
- Links, exemplos e regras são coerentes entre arquivos.
- As extensões e as revisões pendentes estão declaradas.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [CommonMark 0.31.2](https://spec.commonmark.org/0.31.2/) — Especificação primária de blocos e conteúdo inline; base portátil da trilha.
- [Especificação GFM](https://github.github.com/gfm/) — Extensões de tabelas, listas de tarefas, autolinks e texto riscado.
- [Sintaxe no GitHub](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) — Comportamento do renderizador GitHub, links, imagens e navegação.
- [Blocos de código](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-and-highlighting-code-blocks) — Cercas, identificadores de linguagem e realce no GitHub.
- [Tabelas no GitHub](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables) — Organização de dados tabulares e escape de barras verticais.
- [Seções recolhíveis](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections) — Uso de details e summary no renderizador GitHub.
- [Diagramas no GitHub](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams) — Mermaid como extensão do ambiente, com limites de compatibilidade.
- [README como entrada de um repositório](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) — Finalidade do README, links relativos e navegação entre seções no GitHub.
- [Front matter no Jekyll](https://jekyllrb.com/docs/front-matter/) — Contrato específico de metadados do gerador, separado da base Markdown.
- [O formato MDX](https://mdxjs.com/docs/what-is-mdx/) — Diferenças entre texto Markdown, JSX e expressões num pipeline próprio.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Procedimento com exemplos literais

Uma página ensina a executar um comando dentro de uma etapa numerada e precisa mostrar a sintaxe de um bloco cercado sem encerrar o próprio exemplo.

**Aulas necessárias**

- Aula 02 — Títulos, parágrafos e hierarquia
- Aula 04 — Listas e procedimentos
- Aula 05 — Aninhamento e blocos dentro de itens
- Aula 07 — Blocos cercados e linguagem de exemplo
- Aula 08 — Crases, escapes e exemplos de Markdown
- Aula 09 — Quebras de linha e espaços significativos

**Conceitos combinados:** Hierarquia; Listas e blocos; Cercas e quebras.

### Combo 2 — Navegação, imagens e dialeto

Um guia contém links internos, uma imagem que explica uma decisão e uma tabela de compatibilidade. Ele será lido no repositório e numa prévia local.

**Aulas necessárias**

- Aula 10 — Links com rótulos que explicam o destino
- Aula 11 — Links por referência e definições reutilizáveis
- Aula 12 — Caminhos relativos, fragmentos e contexto
- Aula 13 — Imagens e texto alternativo
- Aula 14 — Conteúdo acessível e linguagem de orientação
- Aula 18 — Autolinks, texto riscado e declaração de dialeto

**Conceitos combinados:** Links descritivos; Texto alternativo; Dialeto declarado.

### Combo 3 — README, tutorial e fronteira de HTML

Uma equipe organiza a documentação de um serviço. Parte do texto possui HTML e seções recolhíveis, e contribuições de outras pessoas passam por publicação sanitizada.

**Aulas necessárias**

- Aula 19 — HTML inline e blocos explícitos
- Aula 20 — Seções recolhíveis com details e summary
- Aula 21 — Sanitização e contrato de publicação
- Aula 22 — README que orienta o primeiro contato
- Aula 23 — Tutorial orientado a uma tarefa
- Aula 24 — Referência de campos, estados e vocabulário

**Conceitos combinados:** Objetivo de cada documento; HTML e sanitização; Conteúdo essencial.

### Combo 4 — Documentação que evolui sem perder leitores

O manual passa a ter vários arquivos, um diagrama Mermaid e metadados de gerador. Uma decisão muda a navegação e precisa ser registrada sem prometer suporte universal.

**Aulas necessárias**

- Aula 25 — Índices e navegação entre arquivos
- Aula 26 — Âncoras estáveis e revisão de links
- Aula 28 — Mermaid como extensão com alternativa textual
- Aula 29 — Front matter e metadados de um gerador
- Aula 31 — Registros de decisão com contexto e consequência
- Aula 35 — Portabilidade e matriz de compatibilidade

**Conceitos combinados:** Navegação estável; Extensões e fallback; Decisões e compatibilidade.

### Projeto final — Manual portável de um serviço de biblioteca

Entregue a documentação de um serviço fictício de cadastro e empréstimos. Outra pessoa deve conseguir entender a finalidade, seguir uma tarefa e consultar o contrato, inclusive num destino com menos extensões.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Criar README com finalidade, pré-requisitos, início rápido, limites e navegação para os demais documentos.
- Escrever um tutorial de tarefa com entradas, passos, resultado esperado e caminho para investigar divergências.
- Documentar campos, estados, erros e exemplos numa referência consistente com o tutorial.
- Organizar caminhos, imagens e âncoras, com rótulos descritivos e informação alternativa para conteúdo visual.
- Declarar dialetos e extensões usados e publicar uma matriz de compatibilidade com alternativa para diagramas ou recursos opcionais.
- Manter registro de decisão, histórico de mudanças e checklist de revisão, sem credenciais ou afirmações de teste não executado.

**Entregáveis**

- README.md, docs/tutorial.md e docs/referencia.md com conteúdo completo e fictício.
- Assets e navegação relativos, com exemplos copiados e conferidos na revisão.
- Registro de decisão, changelog e guia/checklist de contribuição.
- Matriz de destinos e relatório de inspeção das renderizações e dos links.

**Critérios práticos**

- **Estrutura e leitura:** Hierarquia, listas e blocos representam o conteúdo sem depender de espaços acidentais.
- **Tarefa reproduzível:** O tutorial informa estado inicial, ação e resultado, com evidências compatíveis com o escopo.
- **Contrato consistente:** Referência e exemplos usam os mesmos nomes, tipos e estados do tutorial.
- **Navegação e alternativas:** Links, fragmentos e imagens têm destinos conferidos e informação compreensível.
- **Publicação consciente:** HTML e extensões possuem contrato declarado, sanitização respeitada e fallback.
- **Manutenção verificável:** Decisões, mudanças e revisão registram o que foi efetivamente observado e o que falta.

**Testes de aceitação para executar localmente**

#### Tarefa por leitor novo

- Preparação: Prepare os arquivos e uma instância fictícia ou descrição reproduzível do ambiente do tutorial.
- Entrada/ação: Peça a um revisor seguir somente o README e o tutorial, registrando dúvidas e resultados.
- Resultado esperado: O caminho inicial, comandos/entradas e resultado são encontráveis; divergências são registradas e corrigidas no texto, sem presumir sucesso.

#### Dois destinos declarados

- Preparação: Escolha uma base CommonMark e um destino GFM ou outro visualizador explicitamente nomeado.
- Entrada/ação: Abra os documentos nos dois e confira listas, cercas, links, tabelas, HTML e alternativas de diagrama.
- Resultado esperado: A matriz descreve diferenças reais e os conteúdos essenciais continuam compreensíveis; recursos não suportados não são declarados como funcionais.

#### Mudança e navegação

- Preparação: Registre uma decisão que altera uma seção referenciada.
- Entrada/ação: Atualize título/destino, revise links relativos e registre a mudança e as consequências.
- Resultado esperado: Links usados pelo leitor continuam válidos ou a mudança é tratada conscientemente; decisões e changelog concordam com a versão entregue.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
