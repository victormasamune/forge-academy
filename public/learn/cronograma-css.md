# Plano de ensino — CSS

Da primeira regra a interfaces responsivas e acessíveis, com layout, estados, temas e investigação de problemas de CSS.

**Carga estimada:** 144 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Nenhuma linguagem anterior é obrigatória; a estrutura HTML necessária é apresentada na trilha.
- Computador com navegador moderno e editor de texto.
- Saber criar uma pasta e salvar um arquivo; os exemplos não exigem Node.js nem instalação de pacotes.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Estrutura e primeiras regras | 12 | 1–2 | Página de apresentação de serviços |
| 02 | Caixas e fluxo | 12 | 2–3 | Cartões de ordens sem cortes |
| 03 | Tipografia, cores e medidas | 12 | 4–5 | Resumo de estoque legível |
| 04 | Layout com Flexbox | 12 | 5–6 | Barra de ações responsiva |
| 05 | Layout com Grid | 12 | 7–8 | Painel de indicadores |
| 06 | Design responsivo | 12 | 8–9 | Componentes em espaços diferentes |
| 07 | Estados e acessibilidade | 12 | 10–11 | Formulário de consulta de OS |
| 08 | Posicionamento e camadas | 12 | 11–12 | Lista de ordens com cabeçalho |
| 09 | Temas e movimento | 12 | 13–14 | Painel com tema e feedback |
| 10 | Arquitetura e componentes | 12 | 14–15 | Biblioteca pequena de componentes |
| 11 | CSS avançado e diagnóstico | 12 | 16–17 | Revisão de uma tela problemática |
| 12 | Entrega e projeto final | 12 | 17–18 | Painel CSS de OS e estoque |

## Nível 01 — Estrutura e primeiras regras

Relacione elementos HTML e regras sem perder a estrutura do documento.

**Aulas e objetivos**

- Aula 01: **HTML mínimo e a primeira declaração** — Reconhecer estrutura, seletor, propriedade e valor. (4 h)
  - Exercício 1: Troque a cor do título por #5b246b e descreva o que mudou.
  - Exercício 2: Acrescente um parágrafo com o horário de atendimento e verifique quais regras o alcançam.
  - Exercício 3: Remova temporariamente style e compare o que continua na página.
- Aula 02: **Seletores, classes e relações** — Selecionar apenas o componente pretendido sem depender de posição frágil. (4 h)
  - Exercício 1: Marque OS-2 com data-status="pendente" e preveja o efeito.
  - Exercício 2: Adicione uma classe resumo ao parágrafo externo e estilize somente ele em negrito.
  - Exercício 3: Envolva o h2 de OS-1 num header e explique por que a regra de margem deixou de alcançá-lo.
- Aula 03: **Cascata, herança e especificidade** — Explicar qual declaração vence em um caso controlado. (4 h)
  - Exercício 1: Acrescente ao fim .aviso { color:#5b246b; } e preveja a cor do aviso.
  - Exercício 2: Retire a cor do aviso e as regras p, mantendo a cor no body. Explique strong e p.
  - Exercício 3: Abra Computed ou Estilos, localize a declaração de cor vencedora e registre uma regra descartada.

**Projeto:** Página de apresentação de serviços

- Página com título, descrição e lista de serviços.
- Regras por elemento e classe organizadas num style.
- Registro de uma disputa de cascata e sua explicação.

**Critérios de conclusão**

- O HTML permanece compreensível sem estilos.
- As classes selecionam os elementos pretendidos.
- Explica a regra vencedora sem depender de tentativa aleatória.

## Nível 02 — Caixas e fluxo

Calcule espaço e deixe o conteúdo crescer sem sobreposição.

**Aulas e objetivos**

- Aula 04: **Box model e tamanho externo** — Calcular conteúdo, padding e borda antes de escolher dimensões. (4 h)
  - Exercício 1: Mude padding para10px e calcule a largura externa das duas caixas.
  - Exercício 2: Adicione margin-inline:12px e explique se width mudou.
  - Exercício 3: Crie a regra *, *::before, *::after { box-sizing:border-box; } e remova as variantes de box-sizing.
- Aula 05: **Display, fluxo normal e margens** — Distinguir elementos em fluxo e escolher espaço entre conteúdos. (4 h)
  - Exercício 1: Troque o selo para display:block e registre a diferença na linha.
  - Exercício 2: Inspecione a distância entre dois p com margens verticais de1.5rem e procure colapso.
  - Exercício 3: Aplique display:none ao selo e compare com visibility:hidden.
- Aula 06: **Conteúdo longo, mínimos e overflow** — Manter informação disponível quando o conteúdo excede uma previsão. (4 h)
  - Exercício 1: Duplique a descrição três vezes e diminua a janela.
  - Exercício 2: Remova overflow-wrap e compare o identificador em uma janela estreita.
  - Exercício 3: Crie uma região separada de log com max-block-size:8rem e overflow:auto, mantendo um título visível.

**Projeto:** Cartões de ordens sem cortes

- Três cartões com padding, borda e dimensões coerentes.
- Comparação entre content-box e border-box.
- Caso de texto longo sem ocultar dados.

**Critérios de conclusão**

- Confere a dimensão externa de uma caixa.
- Não usa altura fixa para esconder variações de texto.
- Mantém o conteúdo disponível em uma largura estreita.

## Nível 03 — Tipografia, cores e medidas

Construa hierarquia visual com medidas e cores verificáveis.

**Aulas e objetivos**

- Aula 07: **Unidades, tipografia e leitura** — Escolher tamanho de texto e comprimento de linha com contexto. (4 h)
  - Exercício 1: Amplie a página para200% e registre como o parágrafo e o título se reorganizam.
  - Exercício 2: Coloque font-size:1.25rem em main e compare um filho com1em e outro com1rem.
  - Exercício 3: Retire max-inline-size, compare numa janela larga e escolha um limite de leitura.
- Aula 08: **Cores, contraste e informação redundante** — Usar cor com texto e verificar contraste em estados reais. (4 h)
  - Exercício 1: Meça texto e fundo de cada estado com uma ferramenta de contraste. Registre os valores e o critério aplicado.
  - Exercício 2: Desative temporariamente as cores dos estados e confira o que ainda permite reconhecê-los.
  - Exercício 3: Crie Cancelada com texto e um par de cores verificável, sem reutilizar só uma bolinha.
- Aula 09: **Fundos, bordas e decoração** — Separar informação estrutural de aparência decorativa. (4 h)
  - Exercício 1: Remova background e box-shadow do cartão. Verifique se há alguma informação perdida.
  - Exercício 2: Troque a borda de1px para6px e compare com e sem box-sizing:border-box usando uma largura definida.
  - Exercício 3: Crie um segundo resumo com quantidade diferente e reutilize a classe, sem duplicar todo CSS.

**Projeto:** Resumo de estoque legível

- Resumo com título, quantidades e descrições.
- Paleta com pares de texto e fundo documentados.
- Tipografia que suporta zoom e quebra de linhas.

**Critérios de conclusão**

- O texto continua acessível ao ampliar.
- Status não depende apenas de cor.
- Justifica unidades e tamanho de linha.

## Nível 04 — Layout com Flexbox

Distribua itens num eixo sem fixar tamanhos para todo conteúdo.

**Aulas e objetivos**

- Aula 10: **Flexbox e seus eixos** — Relacionar alinhamento principal e transversal à direção do flex. (4 h)
  - Exercício 1: Mude flex-direction para column e explique o novo papel de justify-content.
  - Exercício 2: Percorra os links com Tab e compare a sequência com a ordem do HTML.
  - Exercício 3: Troque gap para.5rem e retire justify-content:space-between. Compare o resultado.
- Aula 11: **Flex grow, shrink, basis e mínimos** — Prever dimensionamento flexível sem supor larguras iguais. (4 h)
  - Exercício 1: Mude a base de12rem para8rem e compare numa largura fixa.
  - Exercício 2: Retire min-inline-size:0 e overflow-wrap separadamente, observando o identificador.
  - Exercício 3: Adicione um pequeno terceiro item com flex:0 0 5rem e explique o contrato.
- Aula 12: **Wrap, alinhamento de linhas e barras de ações** — Deixar grupos quebrarem sem alterar sua ordem lógica. (4 h)
  - Exercício 1: Reduza a largura até a barra formar mais de uma linha e anote em que ponto o conteúdo pede mudança.
  - Exercício 2: Troque Conferir dados por Conferir dados completos da instalação.
  - Exercício 3: Compare o alinhamento da segunda linha com a primeira e explique por que Flexbox não cria automaticamente colunas comuns.

**Projeto:** Barra de ações responsiva

- Barra com título e links de ação.
- Grupo que quebra linhas conforme o espaço.
- Comparação entre grow, shrink e basis.

**Critérios de conclusão**

- Mantém a ordem de leitura do HTML.
- Links não cortam texto em largura pequena.
- Distingue alinhamento do eixo principal e transversal.

## Nível 05 — Layout com Grid

Organize linhas e colunas a partir do conteúdo.

**Aulas e objetivos**

- Aula 13: **Grid, trilhas e unidades fr** — Construir uma grade e explicar o papel dos mínimos nas colunas. (4 h)
  - Exercício 1: Mude repeat para3 e registre a posição do quarto indicador.
  - Exercício 2: Compare grid-template-columns:1fr 2fr numa largura conhecida.
  - Exercício 3: Coloque um identificador sem espaços num indicador e confira se ele fica disponível.
- Aula 14: **Áreas de Grid e ordem do documento** — Organizar regiões sem depender de reordenação semântica. (4 h)
  - Exercício 1: Desenhe em palavras a grade antes e depois de42rem.
  - Exercício 2: Desative o CSS e confirme a ordem de título, navegação e conteúdo.
  - Exercício 3: Mude a trilha de12rem para minmax(9rem,14rem) e teste rótulo longo.
- Aula 15: **Grades fluidas com auto-fit e minmax** — Criar colunas conforme o espaço sem uma lista de tamanhos de aparelhos. (4 h)
  - Exercício 1: Troque14rem por18rem e observe quantas colunas cabem no mesmo espaço.
  - Exercício 2: Deixe um cartão e compare auto-fit com auto-fill em espaço amplo.
  - Exercício 3: Teste uma área com menos de14rem e explique por que o min interno importa.

**Projeto:** Painel de indicadores

- Grade de indicadores com trilhas flexíveis.
- Layout de página com áreas nomeadas.
- Grade que muda de quantidade de colunas sem cartões minúsculos.

**Critérios de conclusão**

- Usa minmax sem provocar overflow inesperado.
- A sequência sem CSS mantém sentido.
- Explica o papel do espaço disponível no número de colunas.

## Nível 06 — Design responsivo

Escolha adaptações segundo conteúdo, viewport e container.

**Aulas e objetivos**

- Aula 16: **Viewport, media queries e base para telas estreitas** — Adicionar adaptações quando o conteúdo realmente pede. (4 h)
  - Exercício 1: Compare o conteúdo imediatamente abaixo e acima de40rem e escolha se o limite é adequado.
  - Exercício 2: Use200% de zoom e confira se a composição continua utilizável.
  - Exercício 3: Troque Ordens abertas por Ordens aguardando conferência operacional e revise a quebra.
- Aula 17: **Medidas fluidas com min, max e clamp** — Usar limites para dimensionar sem depender só de viewport units. (4 h)
  - Exercício 1: Teste uma janela estreita e uma larga e inspecione o font-size calculado.
  - Exercício 2: Amplie para200% e depois aumente o tamanho padrão de fonte do navegador, se possível.
  - Exercício 3: Crie um gap fluido entre duas seções usando clamp(.75rem,2vw,1.5rem).
- Aula 18: **Container queries e componentes reutilizáveis** — Adaptar um descendente pelo espaço de seu container. (4 h)
  - Exercício 1: Num viewport largo, altere apenas o tamanho de .host.estreito para32rem.
  - Exercício 2: Remova temporariamente o bloco supports e avalie a página.
  - Exercício 3: Tente aplicar dentro da query uma mudança no próprio host e explique por que esse padrão não consulta o tamanho desse mesmo host para se estilizar.

**Projeto:** Componentes em espaços diferentes

- Página com meta viewport e base para telas estreitas.
- Título fluido com limites de tamanho.
- Mesmo cartão dentro de dois containers com espaços diferentes.

**Critérios de conclusão**

- Testa pelo menos duas larguras e zoom.
- Tem layout base utilizável sem container queries.
- A mudança do componente não depende apenas da tela inteira.

## Nível 07 — Estados e acessibilidade

Torne estados e navegação perceptíveis sem depender de mouse.

**Aulas e objetivos**

- Aula 19: **Foco visível e controles semânticos** — Percorrer um formulário por teclado e reconhecer a posição do foco. (4 h)
  - Exercício 1: Use apenas Tab, Shift+Tab e Enter para visitar ajuda, campo e botão.
  - Exercício 2: Clique no texto ID da ordem e explique o efeito da associação for/id.
  - Exercício 3: Altere a cor de fundo do botão e confira hover, foco e contraste.
- Aula 20: **Estados de formulário e pseudoclasses** — Representar interação sem confundir validação visual com regra de negócio. (4 h)
  - Exercício 1: Digite texto inválido e depois aluno@example.com, registrando a mudança.
  - Exercício 2: Altere a regra do checkbox para acrescentar sublinhado ao texto marcado, mantendo o próprio controle.
  - Exercício 3: Explique por que o campo vazio já tem borda de inválido e proponha uma política de mensagens para uma aplicação futura.
- Aula 21: **Reflow, conteúdo oculto e informação acessível** — Preservar leitura e interação ao mudar apresentação. (4 h)
  - Exercício 1: Teste uma área de320px de largura em CSS e zoom elevado, verificando texto e links.
  - Exercício 2: Inspecione o nome acessível de cada link e compare com o texto visível.
  - Exercício 3: Troque sr-only por display:none numa cópia e investigue a diferença na árvore acessível.

**Projeto:** Formulário de consulta de OS

- Campos com labels e instruções explícitas.
- Foco visível em links e controles.
- Revisão de conteúdo oculto, contraste e reflow.

**Critérios de conclusão**

- Percorre os controles por Tab em ordem lógica.
- Mantém texto e indicação além de cores para estados.
- Não oculta informação essencial com CSS.

## Nível 08 — Posicionamento e camadas

Investigue deslocamentos, rolagem e sobreposição de elementos.

**Aulas e objetivos**

- Aula 22: **Position e o ancestral de referência** — Ancorar decoração ao componente sem retirar informação do fluxo indevidamente. (4 h)
  - Exercício 1: Retire position:relative do cartão e observe onde o badge se posiciona.
  - Exercício 2: Troque Pendente por Confirmação operacional pendente e teste uma área estreita.
  - Exercício 3: Aplique inset-block-start:.5rem ao próprio cartão mantendo relative e observe o espaço que ele reservava.
- Aula 23: **Sticky, região de rolagem e foco** — Manter contexto de uma lista sem encobrir seu conteúdo. (4 h)
  - Exercício 1: Remova max-block-size da região e compare o efeito observado.
  - Exercício 2: Use Tab para focar a região e tente rolá-la com teclado, sem mouse.
  - Exercício 3: Acione Ir para OS-4 e confira se o cabeçalho encobre o título da ordem.
- Aula 24: **Stacking contexts e z-index** — Resolver uma sobreposição a partir dos contextos de empilhamento. (4 h)
  - Exercício 1: Mude o z-index do primeiro painel para3 e compare a relação entre as caixas.
  - Exercício 2: Remova o z-index do primeiro painel e experimente opacity:.99, inspecionando a criação de contexto.
  - Exercício 3: Escreva um roteiro de inspeção para um menu cortado ou atrás de outro painel.

**Projeto:** Lista de ordens com cabeçalho

- Badge ancorado dentro de cartão.
- Cabeçalho sticky em região de rolagem delimitada.
- Demonstração de dois stacking contexts.

**Critérios de conclusão**

- Identifica o ancestral que delimita o posicionamento.
- Conteúdo e foco não ficam encobertos.
- Resolve a origem do empilhamento em vez de aumentar z-index indefinidamente.

## Nível 09 — Temas e movimento

Crie variações visuais consistentes e movimento opcional.

**Aulas e objetivos**

- Aula 25: **Custom properties, escopo e temas** — Reutilizar decisões visuais sem confundir variável CSS com substituição de texto global. (4 h)
  - Exercício 1: Defina --espaco:1.5rem apenas no ancestral do cartão escuro.
  - Exercício 2: Remova a declaração de --espaco da base e observe o fallback.
  - Exercício 3: Meça os pares texto/superfície dos dois temas e inclua um link em cada cartão.
- Aula 26: **Transições e preferências de movimento** — Relacionar uma transição a um estado sem prejudicar foco ou movimento reduzido. (4 h)
  - Exercício 1: Ative ou emule movimento reduzido e compare o link.
  - Exercício 2: Use Tab e Enter, sem hover, para acessar o destino.
  - Exercício 3: Acrescente uma borda permanente ao link, sem animar o tamanho da caixa.
- Aula 27: **Keyframes, duração e animação que termina** — Criar uma entrada breve com conteúdo disponível sem animação. (4 h)
  - Exercício 1: Compare450ms com150ms e registre se a entrada ajuda ou atrapalha a leitura.
  - Exercício 2: Remova toda a declaração animation e os keyframes numa cópia.
  - Exercício 3: Emule reduce e observe a regra vencedora no painel de estilos.

**Projeto:** Painel com tema e feedback

- Tokens de cor e espaçamento com escopo definido.
- Transição ligada a um estado real de interação.
- Animação breve com alternativa de movimento reduzido.

**Critérios de conclusão**

- O tema conserva legibilidade de todos os estados.
- Não anima toda propriedade indiscriminadamente.
- A informação permanece disponível com animação desativada.

## Nível 10 — Arquitetura e componentes

Organize a folha de estilos para permitir evolução previsível.

**Aulas e objetivos**

- Aula 28: **Cascade layers e ordem de arquitetura** — Definir prioridades previsíveis antes de competir por especificidade. (4 h)
  - Exercício 1: Troque a ordem inicial para base,overrides,components e preveja o fundo.
  - Exercício 2: Acrescente ao fim .acao { background:#155534; } fora de layer.
  - Exercício 3: Escreva uma convenção para base,components e overrides sem usar important como solução padrão.
- Aula 29: **Especificidade manejável com where e is** — Construir seletores sem tornar toda variação uma disputa. (4 h)
  - Exercício 1: Adicione uma variante .compacto com padding:.5rem a um cartão.
  - Exercício 2: Substitua um agrupamento por :is(.cartao,#principal) e compare a especificidade prevista.
  - Exercício 3: Compare .pagina main .lista article.cartao p com .cartao__descricao para um componente reutilizável.
- Aula 30: **Componentes, variantes e estados relacionais** — Definir limites de estilo e melhorias sem depender de estrutura oculta. (4 h)
  - Exercício 1: Retire o bloco supports e percorra o campo com teclado.
  - Exercício 2: Crie outro campo com IDs exclusivos e verifique se o foco destaca apenas o componente correspondente.
  - Exercício 3: Descreva as partes e a variante compacto sem usar a posição do componente na página.

**Projeto:** Biblioteca pequena de componentes

- Camadas declaradas em uma ordem explícita.
- Cartão e botão com variantes locais.
- Estado sem duplicar seletores muito específicos.

**Critérios de conclusão**

- Explica prioridades entre camadas e regras normais fora delas.
- Variações de um componente não vazam para outro.
- Evita usar important como solução padrão para disputas.

## Nível 11 — CSS avançado e diagnóstico

Use recursos progressivos e evidências para corrigir problemas.

**Aulas e objetivos**

- Aula 31: **Propriedades lógicas e direção de escrita** — Separar início e fim lógicos de esquerda e direita físicas. (4 h)
  - Exercício 1: Troque border-inline-start por border-left e compare as duas regiões.
  - Exercício 2: Use margin-inline-start:1rem em um elemento interno e teste dir nos dois casos.
  - Exercício 3: Liste o que ainda precisaria ser revisado ao localizar o painel para um idioma RTL.
- Aula 32: **Subgrid com base independente** — Alinhar partes de cartões em trilhas compartilhadas sem exigir a melhoria. (4 h)
  - Exercício 1: Remova o bloco supports e compare o alinhamento com títulos e descrições diferentes.
  - Exercício 2: Acrescente uma quarta parte ao cartão e revise grid-row:span3.
  - Exercício 3: Confira a documentação de suporte de grid-template-rows:subgrid e registre os navegadores-alvo do seu laboratório.
- Aula 33: **DevTools, overflow e custo de renderização** — Investigar uma hipótese de CSS e registrar evidência reproduzível. (4 h)
  - Exercício 1: Inspecione a tabela em uma janela estreita e identifique a declaração que impõe32rem.
  - Exercício 2: Remova min-inline-size numa cópia e registre a consequência para leitura e quebra de células.
  - Exercício 3: Descreva como compararia uma sombra simples e uma sombra complexa em muitos cartões.

**Projeto:** Revisão de uma tela problemática

- Componente revisado em LTR e RTL.
- Alinhamento com subgrid protegido por supports e fallback.
- Relato de investigação de overflow ou custo visual.

**Critérios de conclusão**

- Testa a versão base sem a melhoria avançada.
- Localiza a regra e o tamanho que causam o problema.
- Diferencia hipótese visual de medição de desempenho.

## Nível 12 — Entrega e projeto final

Integre layout, estados e documentação em uma entrega revisável.

**Aulas e objetivos**

- Aula 34: **CSS para impressão e saída compartilhável** — Adaptar uma página à mídia impressa sem depender do fundo colorido. (4 h)
  - Exercício 1: Abra a prévia de impressão e compare menu, cores e bordas com a tela.
  - Exercício 2: Acrescente várias observações a uma ordem e veja como o navegador trata uma caixa maior que uma página.
  - Exercício 3: Desative gráficos de fundo na impressão e confira as ordens.
- Aula 35: **Resiliência a textos, zoom e estados variados** — Montar uma matriz pequena de revisão com conteúdo realista. (4 h)
  - Exercício 1: Teste duas larguras,200% de zoom e navegação por teclado. Registre resultado e algum limite observado.
  - Exercício 2: Substitua a descrição por uma palavra sem espaços e depois por vários parágrafos.
  - Exercício 3: Acione o link por teclado e confira se o destino pode ser localizado visualmente.
- Aula 36: **Projeto final: painel de OS e estoque** — Integrar componentes, adaptação, foco e documentação num painel local. (4 h)
  - Exercício 1: Adicione uma terceira ordem e um novo indicador reutilizando os componentes, com texto propositalmente longo.
  - Exercício 2: Teste320px e uma área ampla,200% de zoom, Tab/Shift+Tab, abertura de details e prévia de impressão.
  - Exercício 3: Escreva README com execução, ordem das camadas, componentes, pontos de adaptação e limites do painel.

**Projeto:** Painel CSS de OS e estoque

- Painel com navegação, lista de OS e resumo de estoque.
- Checklist de revisão com teclado, zoom, textos longos e impressão.
- README com estrutura de CSS, compatibilidade e limitações.

**Critérios de conclusão**

- Funciona em espaços estreitos sem perda de controles.
- Links, foco e regiões do documento permanecem identificáveis.
- Demonstra layout base e melhorias sem alegar funcionalidades de backend.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [MDN — fundamentos de CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics) — Seletores, cascata, caixas e primeiras regras.
- [W3C — CSS Cascading and Inheritance Level 5](https://www.w3.org/TR/css-cascade-5/) — Origens, importância, camadas e resolução de declarações.
- [W3C — Flexbox](https://www.w3.org/TR/css-flexbox-1/) — Modelo de layout flexível e dimensionamento.
- [W3C — Grid Layout Level 2](https://www.w3.org/TR/css-grid-2/) — Trilhas, posicionamento e subgrid.
- [MDN — container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Containment/Container_queries) — Componentes que respondem ao espaço do ancestral.
- [MDN — preferências de movimento](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion) — Respeito à preferência por movimento reduzido.
- [web.dev — design responsivo](https://web.dev/learn/design/) — Conteúdo, tipografia e layouts adaptáveis.
- [W3C — WCAG 2.2](https://www.w3.org/TR/WCAG22/) — Referência para contraste, teclado, foco e reflow.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Cartão legível sem largura surpresa

Um cartão de catálogo tem título longo, botão e rótulo de disponibilidade. Ele deve caber no espaço previsto e continuar compreensível sem depender apenas de cor.

**Aulas necessárias**

- Aula 01 — HTML mínimo e a primeira declaração
- Aula 02 — Seletores, classes e relações
- Aula 03 — Cascata, herança e especificidade
- Aula 04 — Box model e tamanho externo
- Aula 06 — Conteúdo longo, mínimos e overflow
- Aula 08 — Cores, contraste e informação redundante

**Conceitos combinados:** Cascata; Box model; Overflow e informação.

### Combo 2 — Layout de página e componente reutilizável

Um painel tem área principal em Grid e barra de ações em Flexbox. O mesmo cartão será usado na página inteira e numa lateral estreita.

**Aulas necessárias**

- Aula 10 — Flexbox e seus eixos
- Aula 11 — Flex grow, shrink, basis e mínimos
- Aula 13 — Grid, trilhas e unidades fr
- Aula 15 — Grades fluidas com auto-fit e minmax
- Aula 16 — Viewport, media queries e base para telas estreitas
- Aula 18 — Container queries e componentes reutilizáveis

**Conceitos combinados:** Flexbox e mínimos; Grid fluido; Container queries.

### Combo 3 — Estados, teclado e camadas visuais

Um formulário tem validação, cabeçalho sticky e diálogo visual. A interface deve funcionar por teclado e respeitar preferência de movimento reduzido.

**Aulas necessárias**

- Aula 19 — Foco visível e controles semânticos
- Aula 20 — Estados de formulário e pseudoclasses
- Aula 21 — Reflow, conteúdo oculto e informação acessível
- Aula 23 — Sticky, região de rolagem e foco
- Aula 24 — Stacking contexts e z-index
- Aula 26 — Transições e preferências de movimento

**Conceitos combinados:** Foco e estados; Sticky e stacking context; Movimento reduzido.

### Combo 4 — Tema, arquitetura e saída compartilhável

O painel recebe temas claro/escuro, conteúdo em outra direção de escrita e uma versão impressa. As regras precisam continuar previsíveis sem crescer em especificidade.

**Aulas necessárias**

- Aula 25 — Custom properties, escopo e temas
- Aula 28 — Cascade layers e ordem de arquitetura
- Aula 29 — Especificidade manejável com where e is
- Aula 31 — Propriedades lógicas e direção de escrita
- Aula 34 — CSS para impressão e saída compartilhável
- Aula 35 — Resiliência a textos, zoom e estados variados

**Conceitos combinados:** Tokens e layers; Direção de escrita; Impressão e resiliência.

### Projeto final — Painel de biblioteca responsivo e acessível

Entregue uma interface de catálogo, empréstimos e relatório de uma biblioteca fictícia usando HTML semântico e CSS. O projeto deve resistir a conteúdo longo, teclado, zoom, temas e impressão; a avaliação visual exige observação real no navegador.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Criar páginas ou estados de catálogo, formulário de empréstimo e relatório com estrutura HTML e rótulos claros.
- Organizar tokens, camadas e componentes para que a aparência possa variar sem especificidade descontrolada.
- Combinar Flexbox e Grid com mínimos e comportamento fluidos em espaços de 320px até desktop.
- Garantir foco perceptível, mensagens de estado compreensíveis e reflow com conteúdo longo e zoom.
- Oferecer temas e adaptação de movimento e direção sem eliminar informação ou dependência exclusiva de cor.
- Preparar saída de impressão do relatório e registrar uma revisão manual com limites e falhas encontradas.

**Entregáveis**

- Arquivos HTML/CSS e assets locais necessários, com conteúdo fictício e estados de teste.
- README com estrutura dos estilos, instruções para abrir e matriz de cenários.
- Registro de revisão de largura, zoom, teclado, temas, direção e movimento, com observações reais.
- Relatório impresso/PDF de teste e lista de ajustes ou limitações ainda observados.

**Critérios práticos**

- **Estrutura e significado:** Os controles têm rótulos e o conteúdo mantém uma hierarquia compreensível.
- **Arquitetura de estilos:** Tokens, escopo e camadas explicam os conflitos sem elevar seletor a cada alteração.
- **Layout adaptável:** Flex/Grid e mínimos suportam conteúdo e containers variados sem esconder erros de tamanho.
- **Interação acessível:** Foco, estados e ordem do documento são conferidos por teclado e sob reflow.
- **Preferências e direção:** Temas e movimento respeitam preferência; propriedades lógicas atendem LTR/RTL.
- **Saída e diagnóstico:** Impressão e DevTools geram evidências reais; não se anuncia correção visual automática.

**Testes de aceitação para executar localmente**

#### Conteúdo extremo e reflow

- Preparação: Use título de 150 caracteres, URL longa, lista vazia e vinte registros fictícios.
- Entrada/ação: Abra em 320px e desktop e aplique zoom de 200%, observando rolagem e conteúdo.
- Resultado esperado: Controles e informação continuam acessíveis; rolagem localizada justificada é distinta de conteúdo essencial cortado. Registre qualquer exceção.

#### Teclado e preferências

- Preparação: Prepare formulário com erro e painel com cabeçalho sticky.
- Entrada/ação: Percorra por Tab/Shift+Tab, ative controles e teste movimento reduzido, temas e direção RTL.
- Resultado esperado: Foco permanece perceptível e não encoberto; mensagens não dependem só de cor; a redução de movimento não remove a função.

#### Impressão do relatório

- Preparação: Preencha relatório com dados suficientes para mais de uma página.
- Entrada/ação: Abra a prévia de impressão e revise todas as páginas ou exporte um PDF de conferência.
- Resultado esperado: Dados e cabeçalhos necessários aparecem sem recorte por overflow; controles dispensáveis são removidos conscientemente. A inspeção é manual.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
