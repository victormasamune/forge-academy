"""Conteúdo autoral da trilha Forge Academy · Go. Sem dependências de terceiros."""
import json
from pathlib import Path

ROOT = Path(__file__).parent
OUT = ROOT / 'public' / 'learn'
OUT.mkdir(exist_ok=True)
levels = []
lessons = []

def level(title, tag, summary, skills, project, deliverables, rubric):
    levels.append(dict(id=len(levels)+1, title=title, tag=tag, summary=summary,
                       skills=skills, project=project, deliverables=deliverables, rubric=rubric))

def lesson(title, goal, theory, code, expected, question, options, answer, explanation,
           tasks, source, caution='', local=False):
    idx = len(lessons)+1
    lessons.append(dict(id=idx, level=len(levels), week=idx, title=title, goal=goal,
                        theory=[dict(title=t, text=p) for t,p in theory], code=code.strip()+'\n',
                        expected=expected, quiz=dict(question=question, options=options, answer=answer,
                        explanation=explanation), exercises=[dict(id=i+1, title=t[0], prompt=t[1],
                        hint=t[2], solution=t[3], criteria=t[4]) for i,t in enumerate(tasks)],
                        source=source, caution=caution, local=local, minutes=45 if idx<13 else 60))

level('Primeiros passos', 'Fundamentos', 'Entenda o que um programa faz e dê suas primeiras instruções em Go.',
      ['Ambiente', 'Variáveis', 'Lógica'], 'Cartão de apresentação no terminal',
      ['Programa que apresenta nome, objetivo e horas disponíveis.', 'Cálculo de horas de estudo por mês.', 'README com instalação e execução.'],
      ['Executa com go run .', 'Você explica cada linha sem consultar.', 'Nomes claros e código formatado.'])
lesson('Seu primeiro programa em Go', 'Executar um programa e explicar package, import e main.', [
 ('Um programa é uma sequência de instruções', 'O código-fonte é texto escrito por você. O compilador verifica esse texto e o transforma em um executável. No começo, pense em entrada → processamento → saída. Nosso primeiro programa só produz uma saída no terminal.'),
 ('As três peças do primeiro arquivo', 'package main identifica o pacote que pode formar um programa executável. import "fmt" disponibiliza ferramentas de formatação e impressão. func main() é o ponto de entrada desse programa. As chaves delimitam as instruções da função; fmt.Println escreve uma linha.'),
 ('Prepare sua oficina', 'No Windows, instale a versão estável pelo instalador oficial em go.dev/dl e reabra o terminal. Confira com go version. Crie uma pasta go-forge, entre nela e execute go mod init example.com/estudos. Salve o código em main.go e rode go run .; para gerar um executável, use go build .. No Playground, basta colar o programa completo e clicar em Run. Um erro do compilador é uma pista: leia o arquivo, a linha e a mensagem antes de mudar o código.')],
 '''package main

import "fmt"

func main() {
    fmt.Println("Olá, Go!")
}''', 'Olá, Go!', 'Qual é o ponto de entrada de um programa executável Go?',
 ['import "fmt"', 'func main()', 'fmt.Println', 'package fmt'], 1, 'O runtime chama main.main. O package main contém o programa; a função main contém as instruções iniciais.', [
 ('Sua primeira saída', 'Escreva um programa que imprima duas linhas: “Salve, Alex!” e “Estou aprendendo Go.”. Rode e compare a saída.', 'Faça duas chamadas a fmt.Println dentro de main.', 'Dentro de main: fmt.Println("Salve, Alex!") e fmt.Println("Estou aprendendo Go."). Mantenha package main e import "fmt".', ['As duas linhas aparecem na ordem pedida.', 'Você executou no terminal ou no Playground.']),
 ('Leia o erro', 'Troque Println por println em fmt.Println. Registre a mensagem e explique por que falhou. Depois corrija.', 'Go diferencia letras maiúsculas de minúsculas; símbolos exportados começam com maiúscula.', 'fmt.println não é uma função exportada do pacote fmt. Restaure fmt.Println. Existe um builtin println, mas ele não é fmt.println e não é nossa ferramenta de saída normal.', ['Registra a mensagem observada.', 'Explica a diferença entre os identificadores.']),
 ('Explique sem copiar', 'Explique com suas palavras o papel de package main, import e func main. Compare go run . e go build ..', 'Separe a organização do arquivo, a dependência e o ponto de entrada.', 'package main forma o comando; import inclui o pacote usado; main inicia as instruções. go run compila e executa; go build gera o binário no caso de um comando.', ['Explica os três elementos.', 'Diferencia execução de geração do executável.'])], 'https://go.dev/doc/tutorial/getting-started')
lesson('Valores, variáveis e tipos', 'Representar dados e prever o resultado de expressões.', [
 ('O tipo descreve o valor', 'string representa texto, bool representa verdadeiro ou falso, e int representa inteiros. Go tem tipagem estática: a variável tem um tipo definido durante a compilação. Use := para declarar uma variável local com inferência. Atribuir outro valor usa =, sem os dois pontos.'),
 ('Zero também é um estado', 'var quantidade int começa em zero. bool começa em false e string começa vazia. const declara uma constante. Ao calcular dinheiro, represente centavos com inteiros e estabeleça limites; float64 usa aproximações binárias e pode surpreender em operações financeiras.'),
 ('Faça o cálculo à mão', 'A expressão 5/2, com operandos inteiros, resulta em 2. Para uma razão fracionária, converta antes de dividir: float64(5)/2. fmt.Printf aceita verbos como %s para string e %d para inteiro. Variáveis locais declaradas e não utilizadas causam erro; isso ajuda a manter o programa claro.')],
 '''package main
import "fmt"
func main() {
    nome := "Alex"
    horasPorSemana := 8
    const semanas = 36
    fmt.Printf("%s: %d horas de prática\\n", nome, horasPorSemana*semanas)
}''', 'Alex: 288 horas de prática', 'Quanto vale 5 / 2 quando ambos os operandos são inteiros?', ['2.5', '3', '2', 'Erro de compilação'], 2, 'Divisão entre inteiros descarta a parte fracionária em direção a zero. A conversão deve acontecer antes da divisão.', [
 ('Calculadora de estudo', 'Use uma variável com 6 horas semanais e outra com 4 semanas. Imprima o total de horas do mês e o tipo do total.', 'Use multiplicação e o verbo %T em fmt.Printf.', 'total := horas * semanas; fmt.Printf("%d horas (%T)\\n", total, total). Para 6 e 4, a saída é 24 horas (int).', ['Usa variáveis.', 'O total é 24 e o tipo é int.']),
 ('Dinheiro sem surpresa', 'Um serviço custa 12550 centavos. Calcule o total de três serviços e mostre reais e centavos.', 'Parte inteira: total/100. Centavos: total%100. Formate com %02d.', 'O total é 37650 centavos; fmt.Printf("R$ %d,%02d\\n", total/100, total%100) produz R$ 376,50.', ['Mantém o cálculo em inteiros.', 'Formata duas casas de centavos.']),
 ('Três valores zero', 'Declare int, string e bool sem atribuição. Mostre os três e explique seus valores iniciais.', 'var nome tipo não exige um valor explícito.', 'var n int; var s string; var ok bool. Os valores são 0, "" e false. Para visualizar a string vazia, use %q.', ['Demonstra os três tipos.', 'Explica zero value.'])], 'https://go.dev/tour/basics/8')
lesson('Decisões, laços e decomposição', 'Transformar uma regra simples em controle de fluxo.', [
 ('Deixe a regra visível', 'if executa um bloco quando a condição é verdadeira; else trata a alternativa. Expressões lógicas usam &&, || e !. switch é útil para alternativas de um mesmo valor. A abertura da chave fica na mesma linha da condição, conforme o estilo normal de Go.'),
 ('Um único laço, muitas formas', 'for cobre repetição com contador, com condição ou sem condição. break interrompe o laço, continue avança à próxima iteração. Antes de rodar, escreva a primeira e a última iteração no papel: esse hábito evita erros de limite.'),
 ('Pense em casos de fronteira', 'Uma regra que aprova valor >= 100 deve ser verificada com 99, 100 e 101. Separe regras em passos pequenos: ler ou definir o dado, validar, calcular e imprimir. A clareza importa mais do que reduzir o número de linhas.')],
 '''package main
import "fmt"
func main() {
    for numero := 1; numero <= 5; numero++ {
        if numero%2 == 0 {
            fmt.Println(numero, "par")
        } else {
            fmt.Println(numero, "ímpar")
        }
    }
}''', '1 ímpar\n2 par\n3 ímpar\n4 par\n5 ímpar', 'Quantas vezes roda for i := 0; i < 3; i++?', ['2', '3', '4', 'Até ocorrer break'], 1, 'O corpo roda para i igual a 0, 1 e 2. Em i igual a 3 a condição já é falsa.', [
 ('Situação do estoque', 'Para estoque negativo, imprima “inválido”; zero, “esgotado”; 1 a 5, “baixo”; acima disso, “normal”.', 'Teste o negativo antes das outras faixas.', 'Uma cadeia if n < 0 / else if n == 0 / else if n <= 5 / else cobre as faixas sem sobreposição.', ['Verifica -1, 0, 1, 5 e 6.', 'Cada valor recebe uma única situação.']),
 ('Acumulador', 'Some todos os números pares de 1 a 10 usando for.', 'Comece com soma := 0 e acrescente i quando i%2 == 0.', 'A soma é 30: 2 + 4 + 6 + 8 + 10. O laço deve incluir o 10.', ['Resultado igual a 30.', 'Limites incluem 1 e 10.']),
 ('Rastreie uma execução', 'Descreva o valor de soma depois de cada iteração do exercício anterior, incluindo as ímpares.', 'Uma iteração ímpar não muda o acumulador.', 'Após i de 1 a 10: 0, 2, 2, 6, 6, 12, 12, 20, 20, 30.', ['Apresenta dez estados.', 'Explica por que alguns valores se repetem.'])], 'https://go.dev/tour/flowcontrol/1')

level('Dados e funções', 'Fundamentos', 'Organize informações em coleções e construa funções com contratos claros.',
      ['Funções', 'Slices e maps', 'Strings e Unicode'], 'Resumo de serviços em memória',
      ['Receber uma coleção de serviços.', 'Calcular totais por categoria.', 'Validar entradas vazias e valores inválidos.'],
      ['Funções pequenas com contratos explícitos.', 'Casos vazio, único e repetido funcionam.', 'Não depende da ordem de um map.'])
lesson('Funções e múltiplos retornos', 'Extrair regras para funções previsíveis.', [
 ('Um contrato pequeno', 'Uma função tem nome, parâmetros, tipos de retorno e corpo. Procure nomes que revelem a intenção: calcularTotal é mais claro do que processar. Valores são passados por cópia; a cópia de um slice ainda referencia seu array subjacente, tema da próxima aula.'),
 ('Mais de um resultado', 'Go permite múltiplos retornos. Uma função pode devolver (int, bool), onde o bool indica se o cálculo faz sentido. Em operações que podem falhar com uma causa útil, adotaremos (valor, error) nos próximos níveis. Retornos antecipados reduzem a profundidade de ifs.'),
 ('Escopo e efeitos', 'Variáveis locais só existem dentro de seu escopo. Evite alterar variáveis globais para devolver resultados. Funções que dependem apenas dos parâmetros e retornam um resultado são fáceis de prever e testar. Não ignore um resultado importante usando _ sem explicar a decisão.')],
 '''package main
import "fmt"
func total(valor, quantidade int) (int, bool) {
    if valor < 0 || quantidade < 0 { return 0, false }
    return valor * quantidade, true
}
func main() {
    resultado, ok := total(1250, 3)
    fmt.Println(resultado, ok)
}''', '3750 true', 'O que return 0, false faz no exemplo?', ['Encerra só o if', 'Encerra a função e devolve dois resultados', 'Encerra todo o programa', 'Lança uma exceção'], 1, 'return encerra a função atual. Quem chamou recebe os dois resultados e decide o próximo passo.', [
 ('Desconto com contrato', 'Crie desconto(valor, percentual int) (int, bool), com percentual entre 0 e 100 e valor não negativo. Retorne o valor final em centavos.', 'Valide primeiro e documente o arredondamento inteiro.', 'Rejeite valor < 0, percentual < 0 ou > 100. Calcule valor - valor*percentual/100, declarando que a divisão inteira trunca a parcela do desconto. Assuma valores pequenos para evitar overflow.', ['Testa 0%, 100% e percentual inválido.', 'Documenta o arredondamento.']),
 ('Faça a previsão', 'Sem executar, preveja total(100, 0), total(-1, 2) e total(100, 2). Depois confira.', 'A validação ocorre antes da multiplicação.', 'Resultados: (0, true), (0, false) e (200, true). Zero quantidade é aceito neste contrato.', ['Acerta os três pares.', 'Diferencia zero válido de entrada inválida.']),
 ('Uma função por regra', 'Extraia do projeto do nível anterior uma função que classifica o estoque e devolve string.', 'A função não precisa imprimir: main pode imprimir o retorno.', 'func classificar(n int) string com retornos antecipados para as faixas. Manter a saída no main separa cálculo de apresentação.', ['A regra não usa fmt.', 'O chamador decide como mostrar a situação.'])], 'https://go.dev/tour/basics/4')
lesson('Arrays, slices e maps', 'Escolher a coleção certa e reconhecer compartilhamento de dados.', [
 ('Array e slice têm papéis distintos', 'Um array tem tamanho no tipo, como [3]int. Um slice descreve uma janela de um array: possui comprimento e capacidade. append devolve um slice atualizado e pode alocar outro array. Sempre guarde seu retorno; não presuma que uma alteração por um slice fique isolada dos outros.'),
 ('Map é associação, não sequência', 'map[string]int associa chaves a valores. A consulta v, ok := m[chave] distingue uma ausência de um zero armazenado. make inicializa um map para escrita. Ler de um map nil funciona; escrever nele causa panic. A ordem de iteração não é garantida.'),
 ('Copiar intencionalmente', 'Para uma cópia independente de elementos int, use append([]int(nil), original...) ou slices.Clone. Em elementos que contêm ponteiros, maps ou slices, a cópia ainda é superficial. Para gerar relatórios ordenados a partir de maps, ordene as chaves explicitamente.')],
 '''package main
import "fmt"
func main() {
    precos := []int{1000, 2000}
    precos = append(precos, 1500)
    total := 0
    for _, preco := range precos { total += preco }
    estoque := map[string]int{"TAG": 4}
    n, existe := estoque["TAG"]
    fmt.Println(total, n, existe)
}''', '4500 4 true', 'A ordem de iteração de um map é garantida?', ['Sim, por inserção', 'Sim, em ordem alfabética', 'Não', 'Somente para string'], 2, 'Não dependa da ordem de maps. Ordene uma lista de chaves quando a ordem for um requisito.', [
 ('Agrupe por categoria', 'Dadas as categorias TAG, GPS, TAG, crie um map com a contagem de cada uma.', 'Inicialize map[string]int e incremente contagem[categoria].', 'O resultado lógico é TAG: 2 e GPS: 1. A ordem em que forem impressos não é um critério.', ['Conta repetições.', 'Não depende da ordem do map.']),
 ('Cópia ou janela?', 'Crie a := []int{1, 2, 3}; b := a[:2]; altere b[0]. Explique o efeito em a e repita usando uma cópia.', 'O slicing não copia o array.', 'b[0] também muda a[0]. Com b := append([]int(nil), a[:2]...), o novo array isola a alteração dos inteiros.', ['Demonstra o compartilhamento.', 'Mostra uma cópia independente.']),
 ('Ausência não é zero', 'Armazene GPS com quantidade 0 e consulte GPS e AUSENTE usando comma-ok.', 'Use quantidade, existe := estoque[chave].', 'GPS retorna (0, true), AUSENTE retorna (0, false). São situações diferentes apesar do mesmo valor numérico.', ['Usa o booleano da consulta.', 'Diferencia os dois casos.'])], 'https://go.dev/tour/moretypes/7')
lesson('Strings, runes e entrada de dados', 'Tratar texto UTF-8 sem confundir bytes com caracteres.', [
 ('String é uma sequência de bytes', 'Strings são imutáveis e podem conter UTF-8. len(texto) mede bytes. range sobre uma string decodifica runes, que representam pontos de código Unicode. Uma letra percebida pelo usuário pode conter mais de um ponto de código: rune também não é sinônimo universal de caractere visual.'),
 ('Normalize o que for necessário', 'strings.TrimSpace remove espaços nas bordas e strings.ToLower ajuda em comparações simples. Isso não resolve todas as regras de equivalência Unicode. Para validar IMEI, trate como string de dígitos, preservando zeros à esquerda; não faça aritmética com identificadores.'),
 ('Entrada precisa de tratamento de erro', 'bufio.Scanner lê tokens, por padrão linhas, e tem limite de tamanho que deve ser ajustado para entradas maiores. strconv.Atoi converte texto para int e devolve erro. Verifique Scanner.Err e falhas de conversão. Os exercícios podem começar com strings fixas antes de usar os.Stdin localmente.')],
 '''package main
import (
    "fmt"
    "strings"
    "unicode/utf8"
)
func main() {
    nome := strings.TrimSpace("  José  ")
    fmt.Println(nome, len(nome), utf8.RuneCountInString(nome))
}''', 'José 5 4', 'Por que len("José") vale 5 em UTF-8?', ['Conta o terminador nulo', 'é ocupa dois bytes', 'Toda letra usa dois bytes', 'len conta palavras'], 1, 'J, o e s usam um byte cada; é usa dois. São cinco bytes e quatro pontos de código.', [
 ('Nome aproveitável', 'Remova espaços nas bordas de um nome e rejeite o resultado vazio. Preserve os acentos.', 'TrimSpace vem antes da comparação com "".', 'nome = strings.TrimSpace(nome); if nome == "" { ... }. Preservar acentos não exige converter para ASCII.', ['Rejeita apenas espaços.', 'Mantém José como José.']),
 ('IMEI textual', 'Verifique se um identificador tem exatamente 15 bytes, todos entre 0 e 9. Explique por que isso ainda não valida o dígito verificador.', 'Dígitos ASCII têm um byte cada. Verifique cada posição.', 'len(s) == 15 e um laço que rejeita s[i] < \'0\' ou s[i] > \'9\'. Isso valida o formato, não Luhn, existência ou vínculo do aparelho.', ['Preserva zeros iniciais.', 'Distingue formato de validade completa.']),
 ('Bytes e runes', 'Compare len e RuneCountInString para Go, ação e um emoji de sua escolha. Explique os resultados observados.', 'Os números variam com a codificação e a composição Unicode.', 'Go tem 2 bytes/2 runes; ação tem 6 bytes/4 runes. Para o emoji, registre os resultados reais: emojis compostos podem ter várias runes.', ['Registra os resultados.', 'Não assume uma rune por símbolo visual.'])], 'https://go.dev/blog/strings')

level('Modelagem idiomática', 'Intermediário', 'Modele domínio com structs, métodos, interfaces e erros explícitos.',
      ['Structs', 'Interfaces', 'Errors'], 'Motor de regras de ordens de serviço',
      ['Tipos de OS e transições válidas.', 'Erros com contexto e sem duplicar logs.', 'Interface pequena para persistência.'],
      ['Estados inválidos são recusados.', 'Regras não conhecem HTTP nem SQL.', 'Erros preservam a causa.'])
lesson('Structs, ponteiros e métodos', 'Agrupar dados e controlar quando uma operação altera o original.', [
 ('Dados com significado', 'Um struct agrupa campos nomeados. Um tipo definido pode receber métodos. Prefira representar regras por tipos do domínio em vez de passar várias strings sem relação. Campos exportados começam com maiúscula e podem receber tags, como json:"id", para orientar bibliotecas.'),
 ('Ponteiro dá acesso ao mesmo valor', '&x obtém o endereço e *p acessa o valor apontado. Go continua passando tudo por valor: ao passar um ponteiro, a cópia contém o mesmo endereço. Um método com receiver *OS pode alterar a OS original. Um receiver OS recebe uma cópia do struct, que pode ainda conter referências internas.'),
 ('Mantenha a invariável perto da mudança', 'Uma OS concluída pode exigir evidências revisadas. Coloque a validação no método de transição para impedir que um chamador pule a regra por acidente. Nem todo campo precisa ser público. Evite expor mutação irrestrita quando existe uma invariável relevante.')],
 '''package main
import "fmt"
type Ordem struct { ID int; Status string }
func (o *Ordem) Iniciar() { o.Status = "em execução" }
func main() {
    os := Ordem{ID: 1, Status: "aberta"}
    os.Iniciar()
    fmt.Println(os.ID, os.Status)
}''', '1 em execução', 'Por que Iniciar usa receiver *Ordem?', ['Para permitir alterar a ordem original', 'Porque métodos sempre exigem ponteiros', 'Para criar herança', 'Para tornar o código paralelo'], 0, 'O ponteiro permite que o método altere os campos da ordem original. Receivers por valor também existem.', [
 ('Transição controlada', 'Implemente Concluir() bool, permitindo mudar de “em execução” para “concluída” e recusando os demais estados.', 'Verifique o estado antes de atribuir.', 'Use receiver *Ordem; retorne false sem alterar se Status for diferente de "em execução". Caso contrário, atribua "concluída" e retorne true.', ['Não altera ordem aberta.', 'Conclui uma ordem em execução.']),
 ('Cópia do struct', 'Copie uma Ordem para outra variável, altere o ID da cópia e explique por que a original não muda.', 'Os campos do exemplo são int e string, e o struct é copiado.', 'copia := original; copia.ID = 2 altera apenas a cópia. Se houvesse um campo slice, seu array poderia continuar compartilhado.', ['Demonstra o comportamento.', 'Menciona a cópia superficial.']),
 ('Modele equipamento', 'Defina Equipamento com IMEI textual, Modelo e Ativo. Justifique os tipos.', 'Identificadores não são quantidades.', 'IMEI e Modelo são string; Ativo é bool. O IMEI textual preserva zeros à esquerda.', ['Usa IMEI string.', 'Explica as escolhas.'])], 'https://go.dev/tour/moretypes/2')
lesson('Interfaces e composição', 'Depender de comportamentos pequenos em vez de implementações concretas.', [
 ('Implementação implícita', 'Uma interface descreve um conjunto de métodos. Um tipo a implementa se seu conjunto de métodos satisfizer o contrato, sem uma declaração implements. Comece com uma interface pequena no pacote consumidor. Uma abstração útil corresponde a uma necessidade real de substituição.'),
 ('Composição com responsabilidade clara', 'Go usa composição e embedding em vez de hierarquia de classes. io.Reader e io.Writer são exemplos de interfaces pequenas que se combinam. Faça a regra de negócio depender da operação que precisa, não de todos os detalhes de um banco.'),
 ('A armadilha do nil', 'Uma interface tem tipo dinâmico e valor dinâmico. Uma interface que contém um ponteiro nil de um tipo concreto não é igual a nil. Devolver explicitamente nil em caminhos sem erro evita um erro comum em funções que retornam error. Prefira composição simples antes de factories e camadas extras.')],
 '''package main
import "fmt"
type Notificador interface { Avisar(string) }
type Console struct{}
func (Console) Avisar(s string) { fmt.Println("aviso:", s) }
func concluir(n Notificador) { n.Avisar("OS concluída") }
func main() { concluir(Console{}) }''', 'aviso: OS concluída', 'Quando um tipo implementa uma interface em Go?', ['Após usar implements', 'Quando satisfaz o conjunto de métodos exigido', 'Somente se estiver no mesmo arquivo', 'Somente quando usa embedding'], 1, 'A satisfação da interface é implícita. Assinaturas e conjunto de métodos precisam corresponder.', [
 ('Um segundo notificador', 'Implemente um notificador que acumule mensagens em um slice e passe-o a concluir.', 'Use um ponteiro se o método acrescentar ao slice do receptor.', 'type Memoria struct { Mensagens []string }; func (m *Memoria) Avisar(s string) { m.Mensagens = append(m.Mensagens, s) }. Use concluir(&m).', ['Funciona sem mudar concluir.', 'Preserva a mensagem para inspeção.']),
 ('Interface mínima', 'Desenhe uma interface para uma regra que só precisa buscar uma ordem por ID. Quais métodos devem ficar de fora?', 'O consumidor só precisa de uma capacidade.', 'Uma opção é Buscar(ctx context.Context, id int64) (Ordem, error). Listar, Salvar e Excluir ficam de fora se essa regra não os usa.', ['Mantém o contrato pequeno.', 'Justifica o contexto e o erro.']),
 ('Nil tipado', 'Preveja: var p *Console; var n Notificador = p; n == nil. Explique sem chamar o método.', 'A interface guarda um tipo dinâmico, mesmo que o valor seja nil.', 'A comparação é false. n contém o tipo *Console e um ponteiro nil; não é uma interface sem tipo e sem valor.', ['Prevê false.', 'Explica tipo e valor dinâmicos.'])], 'https://go.dev/tour/methods/9')
lesson('Erros como parte do contrato', 'Tratar falhas esperadas e preservar a causa com wrapping.', [
 ('Erro é um valor', 'O tipo error é uma interface com Error() string. O padrão (valor, error) torna falhas parte explícita da assinatura. Verifique err antes de usar o valor, acrescente contexto útil e devolva ao chamador que pode decidir o que fazer.'),
 ('Classifique sem comparar texto', 'Use errors.Is para reconhecer sentinelas na cadeia e errors.As para extrair um tipo de erro. fmt.Errorf com %w preserva a causa. Comparar err.Error() com uma mensagem torna o código frágil a alterações de texto e traduções.'),
 ('Panic não é a validação de formulário', 'Panic costuma indicar uma situação que viola pressupostos ou um erro de programação. Reserve recover para fronteiras em que a política seja explícita. Use defer para liberar recursos, mas registre a limpeza apenas depois de confirmar que o recurso foi adquirido. Evite registrar a mesma falha em todas as camadas.')],
 '''package main
import (
    "errors"
    "fmt"
)
var ErrInvalida = errors.New("ordem inválida")
func validar(id int) error {
    if id <= 0 { return fmt.Errorf("id %d: %w", id, ErrInvalida) }
    return nil
}
func main() { fmt.Println(errors.Is(validar(0), ErrInvalida)) }''', 'true', 'Qual verbo de fmt.Errorf preserva a causa para errors.Is?', ['%s', '%v', '%w', '%d'], 2, '%w faz wrapping do erro. A mensagem ganha contexto e a cadeia continua inspecionável.', [
 ('Validação com causa', 'Crie ErrIMEIInvalido e uma função que devolva esse erro com contexto quando o formato for inválido.', 'Reutilize o validador textual e fmt.Errorf com %w.', 'Declare uma sentinela com errors.New. Ao falhar, retorne fmt.Errorf("validar equipamento: %w", ErrIMEIInvalido). Não exponha identificadores sensíveis no log.', ['errors.Is reconhece a causa.', 'Entradas válidas retornam nil.']),
 ('Não engula erro', 'Revise uma chamada resultado, _ := operacao(). Explique quando ignorar o erro seria aceitável e quando destrói a informação necessária.', 'A decisão depende do contrato e das consequências.', 'Se a operação pode falhar e o valor deixa de ser confiável, verifique o erro e propague ou trate. Ignorar só é defensável com uma razão explícita e uma alternativa segura.', ['Apresenta uma decisão contextual.', 'Não usa panic como resposta automática.']),
 ('A ordem do defer', 'Explique por que f, err := os.Open(...); defer f.Close(); if err != nil { ... } está errado e reordene.', 'Se Open falhar, f não é um recurso válido.', 'Verifique err e retorne primeiro. Só então faça defer f.Close(). Para escrita crítica, também é necessário tratar erros de flush/Close conforme o contrato.', ['Coloca o defer após a verificação.', 'Reconhece falha possível na finalização.'])], 'https://go.dev/blog/go1.13-errors')

level('Ferramentas e bibliotecas', 'Intermediário', 'Construa comandos utilizáveis e aprenda os protocolos de I/O da biblioteca padrão.',
      ['Modules', 'io e arquivos', 'JSON e CLI'], 'CLI de exportação de ordens',
      ['Flags para filtrar e exportar dados.', 'Saída JSON determinística e legível.', 'Separação entre stdout, stderr e erros.'],
      ['README permite reproduzir a execução.', 'Arquivos são fechados e erros tratados.', 'Saída de dados não é misturada a logs.'])
lesson('Módulos, pacotes e documentação', 'Organizar um projeto sem criar dependências cíclicas.', [
 ('Módulo não é pacote', 'Um módulo é uma unidade de versionamento descrita por go.mod. Um pacote é um conjunto de arquivos Go de um diretório, com regras para arquivos de teste e build. O caminho de importação inclui o módulo e o subdiretório. O nome do pacote costuma ser curto e expressar sua finalidade.'),
 ('Ferramentas do dia a dia', 'go mod init inicia um módulo; go mod tidy alinha dependências; go fmt ./... formata; go test ./... testa; go vet ./... procura problemas suspeitos. go.sum registra checksums de conteúdo de módulos, não uma lista de segredos nem um lockfile tradicional.'),
 ('Comece pequeno', 'Separe um comando em cmd quando houver motivo e use internal para limitar importações externas à árvore permitida. Evite pacotes util ou common que concentrem responsabilidades sem relação. Comentários de símbolos exportados explicam intenção e contratos; go doc permite consultá-los.')],
 '''package main
import "fmt"
// Total soma valores em centavos. A entrada não é modificada.
func Total(valores []int) int {
    n := 0
    for _, v := range valores { n += v }
    return n
}
func main() { fmt.Println(Total([]int{100, 200})) }''', '300', 'O que go.mod descreve principalmente?', ['Uma instância de banco', 'O módulo e suas dependências/requisitos', 'Uma única função', 'Os valores de variáveis de ambiente'], 1, 'go.mod identifica o módulo, a versão mínima da linguagem e requisitos de dependências, entre outras diretivas.', [
 ('Dois pacotes', 'Crie um módulo example.com/oficina com pacote internal/ordem e um comando que importe uma função dele.', 'O nome importado combina módulo e diretório.', 'Crie internal/ordem/ordem.go com package ordem e função exportada. Importe "example.com/oficina/internal/ordem" no comando e execute go run ..', ['Não há ciclos.', 'O comando executa a função importada.']),
 ('Documente o contrato', 'Documente uma função de soma, incluindo unidade, mutação e entradas aceitas.', 'Escreva o que o usuário da função precisa saber.', 'Declare que recebe centavos, se aceita negativos, se altera a entrada e como trata slice vazio. O comentário deve concordar com a implementação.', ['Explicita unidade e limites.', 'Não repete apenas o nome.']),
 ('Checklist de ferramentas', 'Execute go fmt ./..., go vet ./... e go test ./... no seu módulo. Anote os resultados reais.', 'Sem testes, o comando ainda pode informar [no test files].', 'Registre saídas reais e corrija os problemas reportados. [no test files] não significa que a regra foi testada.', ['Registra execução real.', 'Diferencia ausência de testes de testes aprovados.'])], 'https://go.dev/doc/tutorial/create-module', local=True)
lesson('I/O, arquivos e composição', 'Processar fluxos usando Reader e Writer.', [
 ('Um protocolo comum', 'io.Reader expõe Read e io.Writer expõe Write. Muitas fontes e destinos implementam essas interfaces: arquivos, buffers, conexões e leitores de string. Escrever uma função que recebe io.Reader permite testar sem criar um arquivo real.'),
 ('Leituras podem ser parciais', 'Read pode devolver n > 0 junto de um erro. Processe os bytes válidos antes de interpretar o erro. io.EOF sinaliza fim do fluxo; não é sempre um fracasso do negócio. io.Copy implementa a cópia e você deve verificar o erro que ele retorna.'),
 ('Recursos e limites', 'Abra um arquivo, verifique o erro e só então agende o fechamento. Evite io.ReadAll sem limite para entradas não confiáveis. io.LimitReader limita bytes lidos, mas você precisa de uma política explícita para detectar que a entrada excedeu o máximo em vez de aceitar truncamento silencioso.')],
 '''package main
import (
    "bytes"
    "fmt"
    "io"
    "strings"
)
func main() {
    var destino bytes.Buffer
    n, err := io.Copy(&destino, strings.NewReader("OS-001"))
    if err != nil { fmt.Println(err); return }
    fmt.Println(n, destino.String())
}''', '6 OS-001', 'Read devolveu n > 0 e io.EOF. O que fazer primeiro?', ['Descartar o buffer', 'Processar os n bytes válidos', 'Chamar panic', 'Fechar o processo'], 1, 'Os bytes retornados são válidos mesmo quando há um erro junto. Depois de processá-los, trate EOF ou outro erro.', [
 ('Transformação testável', 'Escreva copiar(dst io.Writer, src io.Reader) error sem depender de os.File.', 'io.Copy já conhece os dois protocolos.', '_, err := io.Copy(dst, src); return err. Um buffer de memória permite observar a saída em testes.', ['Aceita buffers e arquivos.', 'Propaga o erro de cópia.']),
 ('Entrada limitada', 'Projete uma leitura de no máximo 1024 bytes que rejeite entradas maiores, sem truncá-las silenciosamente.', 'Leia até limite+1 e confira o tamanho.', 'Use io.LimitReader(r, 1025), io.ReadAll, trate o erro e rejeite len(b) > 1024. Só então aceite o conteúdo.', ['Detecta 1025 bytes.', 'Não aceita truncamento como sucesso.']),
 ('Caminhos de falha', 'Liste erros possíveis ao exportar dados para um arquivo e como comunicá-los.', 'Criar, escrever, sincronizar e fechar são operações distintas.', 'Considere permissão, diretório ausente, disco cheio e erro ao fechar. Acrescente contexto com %w e não informe sucesso antes da finalização exigida pelo contrato.', ['Cobre criação e escrita.', 'Considera o fechamento.'])], 'https://pkg.go.dev/io')
lesson('JSON, tempo e comandos CLI', 'Criar fronteiras de entrada e saída previsíveis.', [
 ('JSON tem regras próprias', 'encoding/json usa campos exportados e tags para mapear nomes. json.Marshal cria bytes; Encoder escreve em um fluxo. Ao receber JSON não confiável, limite o corpo, trate falhas e decida se campos desconhecidos e múltiplos valores no mesmo corpo serão aceitos.'),
 ('Data não é só string', 'time.Time representa um instante, com detalhes de localização e leitura monotônica em alguns contextos. RFC3339 é uma boa escolha para intercâmbio de instantes. A formatação de Go usa a data de referência 2006-01-02 15:04:05; datas de negócio precisam de fuso explicitamente definido.'),
 ('CLI comunica por contrato', 'flag fornece flags simples. stdout deve transportar o resultado e stderr os diagnósticos quando o comando for usado em pipelines. Retorne erros de uma função run e decida o código de saída em main. os.Exit não executa defers, por isso deixe recursos fecharem antes de chamá-lo.')],
 '''package main
import (
    "encoding/json"
    "fmt"
)
type Ordem struct {
    ID int `json:"id"`
    Status string `json:"status"`
}
func main() {
    b, err := json.Marshal(Ordem{ID: 7, Status: "aberta"})
    if err != nil { fmt.Println(err); return }
    fmt.Println(string(b))
}''', '{"id":7,"status":"aberta"}', 'Qual campo encoding/json normalmente serializa?', ['Um campo exportado', 'Qualquer campo privado', 'Só campos int', 'Somente campos com tag obrigatória'], 0, 'Campos exportados podem ser serializados; as tags personalizam os nomes e opções, mas não tornam campos privados exportados.', [
 ('Exportação da OS', 'Adicione Tecnico e ValorCentavos ao struct e produza JSON com nomes tecnico e valor_centavos.', 'Campos começam com maiúscula; tags controlam o JSON.', 'Tecnico string `json:"tecnico"` e ValorCentavos int `json:"valor_centavos"`. Verifique o erro do Marshal.', ['Saída JSON válida.', 'Valor monetário mantém a unidade.']),
 ('Data com fuso', 'Formate um instante conhecido em RFC3339 e explique por que 22/10/2026 10:00 sem fuso é ambíguo.', 'Um horário de parede não identifica sozinho um instante global.', 'Use t.Format(time.RFC3339). Um offset ou localização é necessário para interpretar 10:00 em uma região; não use o fuso do servidor implicitamente.', ['Inclui offset ou Z.', 'Explica a ambiguidade.']),
 ('Contrato de CLI', 'Desenhe uma flag -status e descreva stdout, stderr e código de saída quando o filtro for inválido.', 'Considere uma pessoa e outro programa consumindo a saída.', 'Dados válidos vão para stdout, erro para stderr e saída não zero indica falha. Documente os valores aceitos e não misture logs ao JSON.', ['Define valores aceitos.', 'Separa dados e diagnóstico.'])], 'https://pkg.go.dev/encoding/json')

level('Testes e confiabilidade', 'Intermediário', 'Transforme requisitos em verificações que encontram regressões reais.',
      ['testing', 'Table tests', 'Fuzzing'], 'Regras financeiras com testes',
      ['Testes de limites e valores inválidos.', 'Subtestes legíveis e teste de regressão.', 'Uma propriedade verificada com fuzzing.'],
      ['Os testes falham quando uma regra é quebrada.', 'Sem dependência de rede ou relógio real.', 'Asserções verificam comportamento observável.'])
lesson('Testes unitários e casos de fronteira', 'Escrever um teste que falhe pela razão certa.', [
 ('O contrato é o alvo', 'Arquivos terminados em _test.go podem definir funções TestXxx(t *testing.T). Organize o teste em preparação, ação e verificação. Primeiro veja o teste falhar, depois implemente a regra e confirme que ele passa. Um teste que nunca falhou pode estar verificando a coisa errada.'),
 ('Mensagens que ajudam', 'Use t.Fatalf quando continuar tornaria o restante do teste inválido; t.Errorf permite registrar a falha e seguir. Mostre entrada, resultado obtido e esperado. Testes no pacote nome_test exercitam a API pública; testes no mesmo pacote também podem acessar detalhes privados, quando necessário.'),
 ('Fronteiras importam', 'Para dinheiro, teste zero, valor mínimo, arredondamento e entradas rejeitadas. Cobertura revela linhas executadas, não garante asserções úteis. Não escreva testes que apenas repetem a mesma fórmula da implementação: use exemplos de negócio calculados de forma independente.')],
 '''package main
import "testing"
func total(valor, quantidade int) int { return valor * quantidade }
func TestTotal(t *testing.T) {
    got := total(1250, 3)
    if got != 3750 { t.Fatalf("total = %d; esperado 3750", got) }
}''', 'Em main_test.go: go test -v . → TestTotal deve passar.', 'O que a cobertura de linhas comprova?', ['Que todos os contratos estão corretos', 'Quais linhas foram executadas nos testes', 'Que não existem races', 'Que o sistema é seguro'], 1, 'Cobertura mostra execução de linhas. Uma linha executada pode continuar contendo erro que nenhuma asserção detectou.', [
 ('Uma regressão financeira', 'Teste uma função de desconto com exemplos para 0%, 10% e 100%, e a política para percentual inválido.', 'Defina o resultado esperado antes de implementar.', 'Para 10000 centavos: 0% → 10000, 10% → 9000, 100% → 0. O teste de percentual inválido deve exigir erro ou bool false conforme seu contrato.', ['Testa limites.', 'Quebrar a validação faz um teste falhar.']),
 ('Faça falhar', 'Altere deliberadamente o resultado esperado de um teste e registre a falha. Depois restaure.', 'A mensagem deve permitir entender entrada, obtido e esperado.', 'Um teste com esperado incorreto deve falhar de modo claro. Se continuar passando, confira se ele é descoberto pelo go test e se a asserção é alcançada.', ['Observa falha real.', 'Restaura o teste correto.']),
 ('Cobertura com julgamento', 'Execute go test -cover ./... e identifique um comportamento importante que o percentual não prova.', 'Pense em valores, não apenas em linhas.', 'Uma função pode ter 100% de linhas cobertas e não testar overflow, arredondamento ou isolamento entre usuários.', ['Registra o resultado real.', 'Nomeia uma lacuna concreta.'])], 'https://go.dev/doc/tutorial/add-a-test', local=True)
lesson('Tabelas, subtestes e fronteiras HTTP', 'Escalar verificações sem esconder o comportamento.', [
 ('Uma tabela de cenários', 'Table-driven tests expressam entradas e expectativas em uma coleção. Cada cenário deve ter um nome que conte a regra. t.Run organiza a saída e permite selecionar um caso com go test -run. Evite uma abstração de teste mais complexa que o próprio comportamento.'),
 ('Substitua a fronteira', 'Injete uma interface pequena, uma função de relógio ou um io.Reader em vez de depender de serviços reais. Um fake em memória registra efeitos observáveis sem reproduzir todos os detalhes da dependência. Um teste de integração complementa o fake verificando o sistema real quando essa fronteira importa.'),
 ('HTTP sem porta fixa', 'net/http/httptest tem ResponseRecorder e NewRequest para testar handlers diretamente, e NewServer para exercitar um cliente contra um servidor de teste. Verifique status, headers e corpo. Não use time.Sleep para coordenar algo que pode ser sinalizado explicitamente.')],
 '''package main
import (
    "net/http"
    "net/http/httptest"
    "testing"
)
func TestHealth(t *testing.T) {
    h := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.WriteHeader(http.StatusNoContent)
    })
    rr := httptest.NewRecorder()
    h.ServeHTTP(rr, httptest.NewRequest("GET", "/healthz", nil))
    if rr.Code != 204 { t.Fatalf("status = %d; esperado 204", rr.Code) }
}''', 'Em main_test.go: go test -v . → TestHealth deve passar.', 'Qual ferramenta testa um handler sem abrir uma porta?', ['http.ListenAndServe', 'httptest.ResponseRecorder com NewRequest', 'time.Sleep', 'Um banco em produção'], 1, 'O recorder implementa ResponseWriter e registra a resposta gerada pelo handler.', [
 ('Tabela de estados', 'Crie subtestes para concluir uma OS aberta, em execução e já concluída.', 'O nome de cada caso deve explicar se a operação é aceita.', 'Apenas o estado em execução deve concluir no contrato anterior; os outros casos recusam sem mutação. Use t.Run para cada cenário.', ['Verifica retorno e estado final.', 'Casos têm nomes úteis.']),
 ('Contrato HTTP', 'Amplie TestHealth para verificar um header Content-Type em um handler JSON e um corpo válido.', 'Configure headers antes de escrever a resposta.', 'Verifique rr.Header().Get("Content-Type"), rr.Code e decodifique o corpo com json.Decoder. Não compare só uma substring que poderia existir numa resposta de erro.', ['Confere status, header e corpo.', 'Trata o erro da decodificação.']),
 ('Relógio sob controle', 'Explique como testar uma regra de vencimento sem depender da data de hoje.', 'Passe agora como parâmetro ou injete func() time.Time.', 'Use instantes fixos antes, no limite e depois do vencimento. O resultado precisa ser igual em qualquer dia de execução.', ['Usa instantes fixos.', 'Testa a fronteira exata.'])], 'https://pkg.go.dev/net/http/httptest', local=True)
lesson('Fuzzing, benchmarks e testes concorrentes', 'Explorar propriedades e separar correção de desempenho.', [
 ('Exemplos e propriedades', 'Fuzzing gera entradas para encontrar falhas além dos exemplos manuais. Um alvo FuzzXxx recebe *testing.F, registra sementes com Add e chama Fuzz. Escolha uma propriedade verdadeira: um parser não deve causar panic para qualquer entrada, ou um ciclo de serialização deve preservar dados válidos.'),
 ('Medição exige cuidado', 'Benchmarks medem custo de uma operação, enquanto testes verificam correção. Evite incluir preparação que não faz parte do custo pretendido. Repita medições e compare resultados antes de otimizar. O tempo de uma execução no Playground não é um benchmark confiável.'),
 ('Races são comportamento observado', 'go test -race instrumenta acessos e pode detectar data races nos caminhos exercitados. Não demonstra ausência universal de races. Para concorrência determinística, estude também testing/synctest em versões recentes. Sempre execute testes normais e os específicos da concorrência.')],
 '''package main
import (
    "strings"
    "testing"
)
func FuzzTrim(f *testing.F) {
    f.Add("  OS-1 ")
    f.Fuzz(func(t *testing.T, s string) {
        once := strings.TrimSpace(s)
        if strings.TrimSpace(once) != once {
            t.Fatal("TrimSpace deve ser idempotente")
        }
    })
}''', 'Em main_test.go: go test -fuzz=FuzzTrim -fuzztime=10s .', 'O que go test -race garante?', ['Ausência de qualquer race', 'Detecção de races observadas nos caminhos executados', 'Maior velocidade', 'Correção de deadlocks'], 1, 'O detector observa uma execução instrumentada. Caminhos não exercitados podem conter races não detectadas.', [
 ('Propriedade do validador', 'Crie um alvo de fuzz para o validador de IMEI que nunca cause panic e só aceite 15 dígitos ASCII.', 'Quando o validador aceitar, confira a propriedade de formato de modo independente.', 'Adicione sementes vazia, válida e com Unicode. Para entradas aceitas, verifique tamanho e bytes; rejeite qualquer aceitação inconsistente.', ['Inclui sementes variadas.', 'Não depende apenas do mesmo validador na asserção.']),
 ('Regressão do fuzz', 'Explique o que fazer quando o fuzz encontra uma entrada que quebra a função.', 'Não apague a entrada problemática.', 'Reproduza, reduza se necessário, corrija a causa e mantenha o caso no corpus ou como teste de regressão. Verifique o contrato antes de alterar a propriedade.', ['Preserva o caso.', 'Explica a causa.']),
 ('Medição honesta', 'Desenhe uma comparação entre duas formas de concatenar texto. Liste o que manter igual.', 'Mesma entrada, mesma máquina e mesmo resultado são o começo.', 'Valide a saída, execute benchmarks repetidos com -bench e -benchmem e compare tempo e alocações. Não conclua a partir de uma chamada isolada.', ['Mede resultado equivalente.', 'Inclui alocações e repetições.'])], 'https://go.dev/doc/tutorial/fuzz', local=True)

level('Concorrência segura', 'Avançado', 'Coordene tarefas, cancelamento e acesso a estado compartilhado.',
      ['Goroutines', 'Channels e context', 'sync'], 'Processador de evidências',
      ['Fila com concorrência limitada.', 'Cancelamento propagado até as tarefas.', 'Teste de encerramento e execução com -race.'],
      ['Não deixa goroutines sem dono.', 'Não usa Sleep como sincronização.', 'Explica quem fecha cada canal.'])
lesson('Goroutines e ciclo de vida', 'Iniciar trabalho concorrente e garantir sua finalização.', [
 ('Concorrência é organização', 'Uma goroutine é uma execução leve gerenciada pelo runtime. go f() inicia f concorrentemente; isso não garante execução paralela naquele instante. Concorrência estrutura atividades que progridem de modo independente. Paralelismo depende também do trabalho, do runtime e dos recursos disponíveis.'),
 ('Quem espera e quem cancela?', 'Quando main retorna, o processo termina sem esperar suas goroutines. sync.WaitGroup acompanha término, mas não transporta erros nem cancela trabalho. O padrão Add antes de iniciar e Done com defer funciona em versões antigas e atuais. Em Go recente existe também WaitGroup.Go; conheça a versão mínima antes de adotá-lo.'),
 ('Propriedade do ciclo de vida', 'Cada goroutine precisa de uma condição de saída. Quem a inicia deve saber como observar seu término e como interrompê-la quando a operação perde o sentido. Dormir por alguns milissegundos para “dar tempo” não cria uma relação confiável de sincronização.')],
 '''package main
import (
    "fmt"
    "sync"
)
func main() {
    var wg sync.WaitGroup
    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go func(id int) {
            defer wg.Done()
            fmt.Println("tarefa", id)
        }(i)
    }
    wg.Wait()
}''', 'Três linhas: tarefa 1, tarefa 2 e tarefa 3. A ordem pode variar.', 'O que WaitGroup faz?', ['Cancela tarefas automaticamente', 'Espera o término das tarefas registradas', 'Impede todo acesso concorrente', 'Transporta erros'], 1, 'WaitGroup sincroniza a espera pelo término. Cancelamento, erros e proteção de dados precisam de mecanismos próprios.', [
 ('Tarefas com dono', 'Inicie cinco goroutines e espere todas terminarem sem usar Sleep.', 'Registre cada tarefa antes de iniciá-la.', 'Use WaitGroup com Add(1), defer Done() e Wait() no chamador. A ordem de impressão não é um contrato.', ['As cinco terminam antes de main retornar.', 'Sem Sleep para sincronizar.']),
 ('Resultado compartilhado', 'Explique por que incrementar um int global em várias goroutines é perigoso e proponha duas soluções.', 'WaitGroup espera, mas não protege o incremento.', 'O incremento é leitura-modificação-escrita e pode ter data race. Proteja com Mutex ou acumule resultados por um canal em uma goroutine dona do total.', ['Distingue término de exclusão mútua.', 'Propõe duas sincronizações válidas.']),
 ('Política de término', 'Para um leitor em background, descreva como ele recebe cancelamento e quem espera seu encerramento.', 'Pense no caminho feliz e no caminho de erro.', 'O iniciador fornece context, o leitor observa Done nas operações bloqueantes e sinaliza conclusão. O dono cancela e aguarda antes de liberar dependências usadas pela goroutine.', ['Há condição de saída.', 'Há observação do término.'])], 'https://go.dev/tour/concurrency/1')
lesson('Channels, select e context', 'Comunicar resultados com cancelamento explícito.', [
 ('Transferência e bloqueio', 'Um canal sem buffer conecta um envio a um recebimento. Um canal com buffer permite uma quantidade limitada de valores pendentes. Enviar para um canal fechado causa panic. Receber de um canal fechado e drenado devolve o valor zero e ok false; range termina quando o canal fecha e esvazia.'),
 ('Fechamento tem um dono', 'Normalmente quem coordena os produtores fecha o canal quando sabe que não haverá mais envios. Consumidores não fecham o canal só porque pararam de ler. select permite esperar por alternativas, mas não torna uma operação magicamente livre de deadlock. Canais nil bloqueiam seus casos indefinidamente.'),
 ('Context propaga o fim da operação', 'context.Context carrega cancelamento, prazo e valores de escopo da requisição; não é um saco de parâmetros opcionais. Passe-o como primeiro argumento. Chame o cancel de WithCancel ou WithTimeout para liberar recursos. Operações bloqueantes também precisam observar Done ou usar APIs que aceitam o contexto.')],
 '''package main
import (
    "context"
    "fmt"
)
func enviar(ctx context.Context, out chan<- int, v int) error {
    select {
    case <-ctx.Done(): return ctx.Err()
    case out <- v: return nil
    }
}
func main() {
    ctx, cancel := context.WithCancel(context.Background())
    cancel()
    fmt.Println(enviar(ctx, make(chan int), 42))
}''', 'context canceled', 'Quem normalmente fecha um canal de resultados?', ['Qualquer consumidor', 'Quem coordena e sabe que todos os envios terminaram', 'O garbage collector', 'Context automaticamente'], 1, 'O fechamento deve acontecer quando não há possibilidade de novos envios, geralmente pelo dono dos produtores.', [
 ('Cancelamento verificável', 'Crie um envio bloqueante que termine quando o contexto for cancelado e escreva um teste sem Sleep.', 'Use select entre envio e ctx.Done; sinalize início/término por canais.', 'O cancel faz o caminho de ctx.Done ficar disponível. O teste aguarda a conclusão com prazo apenas como limite de falha e verifica errors.Is(err, context.Canceled).', ['Não deixa goroutine bloqueada.', 'Verifica o erro de cancelamento.']),
 ('Leitura até o fim', 'Produza os valores 1, 2 e 3 em um canal, feche após os envios e some no consumidor com range.', 'Um produtor único pode fechar com defer close(ch).', 'O consumidor calcula 6 e o range termina após o fechamento. O produtor não envia depois de fechar.', ['Resultado 6.', 'Fechamento tem um responsável.']),
 ('Pronto ao mesmo tempo', 'Se dois casos de select estiverem prontos, o primeiro no código sempre vence? Explique a implicação para cancelamento.', 'A ordem textual não define prioridade.', 'Não há prioridade pelo primeiro caso. Se trabalho e cancelamento estiverem prontos, o trabalho pode ser escolhido; contratos de cancelamento estrito exigem desenho adicional.', ['Não presume prioridade.', 'Explica a limitação.'])], 'https://go.dev/blog/context')
lesson('Mutex, atomics e worker pools', 'Limitar trabalho e proteger invariáveis compartilhadas.', [
 ('Proteja a invariável inteira', 'sync.Mutex coordena acesso exclusivo. Mantenha a região crítica pequena e não copie um mutex depois que ele for usado. RWMutex só vale a pena se medições e padrão de acesso justificarem. Um map normal não admite leitura e escrita concorrentes sem sincronização.'),
 ('Contador não é transação', 'sync/atomic oferece operações atômicas específicas e úteis para contadores ou protocolos muito bem definidos. Duas variáveis atômicas não tornam uma invariável composta automaticamente atômica. Prefira um mutex quando várias mudanças precisam ocorrer juntas.'),
 ('Concorrência com limite', 'Um worker pool usa uma quantidade fixa de consumidores para processar trabalhos. Limite também fila, memória e tempo. Propague cancelamento em envio, recebimento e operação. O coordenador fecha a fila de entrada após os produtores e fecha resultados depois de todos os workers, sem perder o caminho de erro.')],
 '''package main
import (
    "fmt"
    "sync"
)
type Contador struct { mu sync.Mutex; n int }
func (c *Contador) Inc() { c.mu.Lock(); defer c.mu.Unlock(); c.n++ }
func main() {
    var c Contador
    var wg sync.WaitGroup
    for i := 0; i < 100; i++ {
        wg.Add(1)
        go func() { defer wg.Done(); c.Inc() }()
    }
    wg.Wait()
    c.mu.Lock(); fmt.Println(c.n); c.mu.Unlock()
}''', '100', 'Duas operações atômicas separadas protegem automaticamente uma regra entre dois campos?', ['Sim, sempre', 'Não; a invariável composta precisa de um protocolo de sincronização', 'Só se forem int64', 'Somente em map'], 1, 'Atomicidade de cada acesso não torna uma sequência inteira uma transação.', [
 ('Contador sem race', 'Extraia Contador e teste 1000 incrementos concorrentes; execute go test -race.', 'A leitura final também precisa respeitar o contrato de sincronização.', 'Espere as tarefas, leia com um método protegido e verifique 1000. O resultado normal sozinho não substitui a análise de sincronização.', ['Resultado correto.', 'Executa o detector e registra a saída.']),
 ('Três workers', 'Desenhe um pool de três workers para dez ordens, incluindo o encerramento dos canais.', 'Quem produz jobs fecha jobs; outro coordenador espera workers e fecha results.', 'Crie jobs e results, três consumidores, produtor que fecha jobs e uma espera que fecha results. O consumidor drena results. Inclua contexto antes de usar em uma aplicação real.', ['Concorrência limitada a três.', 'Não fecha results antes do último envio.']),
 ('Pressão na fila', 'Explique o que ocorre se chegarem mil tarefas por segundo e só cem forem processadas. Defina uma política.', 'Buffer maior adia o problema, mas não resolve capacidade.', 'A fila cresce até esgotar memória ou atingir limite. Escolha backpressure, rejeição controlada ou fila durável com limites, prazo e observabilidade.', ['Reconhece o limite de capacidade.', 'Define uma política concreta.'])], 'https://pkg.go.dev/sync', local=True)

level('APIs com net/http', 'Avançado', 'Exponha serviços com contratos claros, limites e testes de ponta a ponta.',
      ['Handlers', 'Clientes e middleware', 'Segurança'], 'API de ordens de serviço',
      ['Rotas de criação, consulta e conclusão.', 'Validação, erros JSON e testes de contrato.', 'Autorização por recurso e limites de requisição.'],
      ['Códigos HTTP têm significado consistente.', 'Contexto chega à operação.', 'Uma identidade não acessa ordens de outra sem permissão.'])
lesson('Handlers, rotas e contratos HTTP', 'Construir uma API com a biblioteca padrão.', [
 ('Handler é uma interface pequena', 'http.Handler define ServeHTTP(ResponseWriter, *Request). HandlerFunc adapta uma função. ServeMux nas versões atuais aceita padrões com método e variáveis de caminho. Prefira um mux próprio em vez do mux global, especialmente quando houver múltiplos serviços ou endpoints de diagnóstico.'),
 ('Resposta tem uma ordem', 'Defina headers antes de WriteHeader ou Write. A primeira escrita do corpo envia status 200 se nada foi definido. Separe erros de validação, ausência, conflito e falha interna. Nunca exponha um stack trace ou credencial ao cliente.'),
 ('Teste sem precisar de um deploy', 'Use httptest para enviar uma requisição ao handler. Compare status, tipo de conteúdo e o contrato do JSON. Em um servidor real, configure timeouts compatíveis com a carga, cancelamento e shutdown. O exemplo abaixo testa a resposta em memória e não abre uma porta.')],
 '''package main
import (
    "fmt"
    "net/http"
    "net/http/httptest"
)
func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("GET /ordens/{id}", func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "text/plain; charset=utf-8")
        fmt.Fprint(w, "OS-"+r.PathValue("id"))
    })
    rr := httptest.NewRecorder()
    mux.ServeHTTP(rr, httptest.NewRequest("GET", "/ordens/7", nil))
    fmt.Println(rr.Code, rr.Body.String())
}''', '200 OS-7', 'Quando definir Content-Type?', ['Após escrever o corpo', 'Antes de WriteHeader ou Write', 'Apenas no banco', 'Nunca em JSON'], 1, 'A primeira escrita pode enviar os headers. Alterá-los depois normalmente já é tarde.', [
 ('Detalhe por ID', 'Implemente GET /ordens/{id}, com 200 para existente, 400 para ID malformado e 404 para ausente.', 'Separe converter o parâmetro de buscar a ordem.', 'Parseie o ID com strconv, valide faixa, consulte um repositório e mapeie os erros do domínio para os status. Não transforme toda falha em 500.', ['Testa os três caminhos.', 'Não expõe erro interno no corpo.']),
 ('Criação consistente', 'Defina o contrato de POST /ordens: entrada, resposta, status e Location.', 'Pense em recurso criado e endereço de consulta.', 'Uma criação bem-sucedida pode devolver 201, Location: /ordens/{id} e JSON com o recurso. Documente os campos obrigatórios e erros de validação.', ['Define 201 e Location.', 'Entrada e resposta têm exemplos.']),
 ('Escrita prematura', 'Investigue por que fmt.Fprint(w, "erro"); w.WriteHeader(400) não produz a resposta esperada.', 'A escrita do corpo já escolheu um status.', 'Fprint envia implicitamente 200 se nenhum status foi escrito. A correção é definir headers/status antes do corpo.', ['Explica o 200 implícito.', 'Reordena as operações.'])], 'https://pkg.go.dev/net/http')
lesson('Clientes HTTP e middleware', 'Tratar a rede como uma fronteira que pode demorar ou falhar.', [
 ('Reutilize o cliente', 'http.Client e seu Transport foram feitos para reutilização e são seguros para uso concorrente. Configure prazo e contexto em vez de depender de uma chamada sem limite. Feche resp.Body, inclusive em status de erro. Leia ou drene dentro de limites quando isso fizer parte da política de reutilização.'),
 ('Status de erro não é erro de transporte', 'client.Do pode retornar err nil e uma resposta HTTP 500. Verifique status e trate falhas de decodificação. Limite o tamanho da resposta. Repetir automaticamente um POST pode duplicar efeitos; retry precisa de contrato de idempotência, prazo total e backoff com jitter.'),
 ('Middleware é composição', 'Um middleware recebe http.Handler e devolve http.Handler. É útil para request ID, logs, recuperação controlada e autenticação. Defina a ordem de execução e não suponha que CORS substitui autenticação. Instrumentar ResponseWriter requer cuidado com interfaces opcionais e streaming.')],
 '''package main
import (
    "fmt"
    "net/http"
    "net/http/httptest"
)
func requestID(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("X-Request-ID", "exemplo-local")
        next.ServeHTTP(w, r)
    })
}
func main() {
    rr := httptest.NewRecorder()
    h := requestID(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) { w.WriteHeader(204) }))
    h.ServeHTTP(rr, httptest.NewRequest("GET", "/", nil))
    fmt.Println(rr.Code, rr.Header().Get("X-Request-ID"))
}''', '204 exemplo-local', 'client.Do devolveu resposta 500 e err nil. Isso é possível?', ['Não', 'Sim; o transporte funcionou, mas o servidor respondeu com erro HTTP', 'Só no Playground', 'Significa sucesso do negócio'], 1, 'Erro de transporte e status HTTP são níveis diferentes. Ambos exigem tratamento.', [
 ('Cliente com prazo', 'Escreva uma chamada com NewRequestWithContext, cliente reutilizável e fechamento de Body.', 'Verifique Do antes de acessar resp.', 'Crie um contexto com prazo, defer cancel, monte a requisição, chame um cliente reutilizado, trate err e então defer resp.Body.Close(). Confira status e limite o corpo.', ['Trata transporte e status.', 'Tem prazo e limite de leitura.']),
 ('Teste de indisponibilidade', 'Use httptest.NewServer para devolver 503 e verifique o erro do seu cliente.', 'O teste não deve depender da internet.', 'O servidor de teste sempre responde 503. O cliente deve classificar indisponibilidade sem fingir que a resposta foi um recurso válido.', ['Sem rede externa.', 'Verifica classificação e mensagem útil.']),
 ('Repetição de POST', 'Um timeout ocorreu após enviar a criação de uma OS. Explique por que repetir pode duplicar e como evitar.', 'O servidor pode ter confirmado a transação antes de a resposta se perder.', 'Use uma chave de idempotência persistida com unicidade e resultado associado. Repetições retornam o mesmo resultado ou um conflito documentado.', ['Reconhece resultado desconhecido.', 'Propõe deduplicação persistente.'])], 'https://pkg.go.dev/net/http#Client')
lesson('Segurança na fronteira da API', 'Validar, autorizar e limitar antes de executar efeitos.', [
 ('Identidade e permissão são diferentes', 'Autenticação identifica quem chama; autorização decide o que essa identidade pode fazer naquele recurso. Um técnico autenticado ainda precisa estar autorizado para a OS consultada. Nunca confie em tecnico_id recebido do cliente para decidir sozinho o escopo.'),
 ('Entradas e saídas têm limites', 'Use MaxBytesReader para limitar corpo HTTP. Para JSON estrito, combine DisallowUnknownFields com uma segunda Decode que exija EOF, evitando múltiplos valores. Defina limites de cabeçalho, paginação, upload e tempo. Validação de formato não substitui autorização.'),
 ('Segredos e dependências', 'Senhas precisam de hashing lento apropriado, como Argon2id ou bcrypt com parâmetros avaliados; criptografia reversível não é armazenamento de senha. Cookies de sessão precisam de política adequada de Secure, HttpOnly e SameSite e proteção contra CSRF quando aplicável. Consulte a documentação do provedor escolhido e use govulncheck nas dependências. A aula não entrega um sistema de autenticação pronto para produção.')],
 '''package main
import (
    "encoding/json"
    "fmt"
    "strings"
)
func main() {
    var entrada struct { Status string `json:"status"` }
    dec := json.NewDecoder(strings.NewReader(`{"status":"aberta","admin":true}`))
    dec.DisallowUnknownFields()
    err := dec.Decode(&entrada)
    fmt.Println(err != nil)
}''', 'true', 'Um usuário autenticado pode acessar qualquer OS por conhecer seu ID?', ['Sim', 'Só se o ID for longo', 'Não; deve haver autorização sobre o recurso', 'CORS resolve isso'], 2, 'Conhecer o ID e possuir uma sessão não dá permissão. A consulta precisa aplicar o escopo e a política do recurso.', [
 ('Matriz de autorização', 'Defina acesso de técnico, operador e administrador para visualizar e concluir uma OS.', 'Separe concluir execução de confirmar operacionalmente.', 'Técnico acessa suas ordens e envia evidências; confirmação operacional exige papel e permissão adequados. Teste explicitamente acesso cruzado entre técnicos.', ['Inclui autorização por recurso.', 'Tem teste de acesso cruzado.']),
 ('JSON estrito', 'Projete um decoder que rejeite corpo excessivo, campo desconhecido e segundo objeto JSON.', 'A primeira Decode bem-sucedida não garante fim do corpo.', 'Use MaxBytesReader no handler; DisallowUnknownFields; primeira Decode; segunda Decode para verificar io.EOF. Classifique tamanho excessivo e JSON inválido conforme o contrato.', ['Rejeita os três casos.', 'Não expõe detalhes internos.']),
 ('Auditoria sem vazamento', 'Liste o que registrar na confirmação de uma OS e o que excluir do log.', 'Rastreabilidade não exige registrar toda a requisição.', 'Registre ator, recurso, ação, resultado, instante e request ID. Exclua senha, token, segredo e conteúdo de evidências; trate dados pessoais com escopo mínimo.', ['Evento permite rastrear a ação.', 'Não registra segredos.'])], 'https://go.dev/doc/security/', caution='Autenticação e autorização exigem revisão própria antes de usar o projeto com dados reais.')

level('Banco e arquitetura', 'Avançado', 'Persista regras com transações e fronteiras que permitem evolução.',
      ['database/sql', 'Transações', 'Design de pacotes'], 'Persistência transacional da OS',
      ['Migrações versionadas e consultas parametrizadas.', 'Confirmação de OS e baixa de estoque consistentes.', 'Testes de integração e de isolamento.'],
      ['Parâmetros nunca viram SQL concatenado.', 'Transação não vaza para outra conexão.', 'Concorrência não duplica a baixa.'])
lesson('SQL, pool e consultas parametrizadas', 'Acessar dados com contexto e recursos bem administrados.', [
 ('sql.DB é um pool', 'database/sql fornece abstrações para drivers. sql.DB gerencia conexões, não representa uma única sessão. Configure limites conforme o banco e a aplicação; mais conexões não significam mais desempenho. Use PingContext para verificar conectividade dentro de um prazo.'),
 ('Dados não são código SQL', 'Passe valores como parâmetros para QueryContext e ExecContext. Placeholders dependem do driver; no PostgreSQL, $1 é comum. Nomes de tabelas e colunas não são parâmetros: para ordenação dinâmica, use uma lista permitida de identificadores definidos pelo programa.'),
 ('O ciclo da consulta', 'QueryRowContext(...).Scan pode devolver sql.ErrNoRows, que normalmente vira ausência no domínio. Em QueryContext, feche rows, verifique cada Scan e confira rows.Err depois do laço. Passe o contexto da requisição até o driver para permitir cancelamento.')],
 '''package main
import (
    "context"
    "database/sql"
    "fmt"
)
func buscarStatus(ctx context.Context, db *sql.DB, id int64) (string, error) {
    var status string
    err := db.QueryRowContext(ctx, "SELECT status FROM ordens WHERE id = $1", id).Scan(&status)
    if err != nil { return "", fmt.Errorf("buscar ordem: %w", err) }
    return status, nil
}
func main() { fmt.Println("Função de repositório; requer driver e banco PostgreSQL para consulta real.") }''', 'Função de repositório; requer driver e banco PostgreSQL para consulta real.', 'O que representa *sql.DB?', ['Uma linha', 'Um pool de conexões gerenciado', 'Uma transação única', 'Um driver PostgreSQL embutido'], 1, 'database/sql gerencia o pool. O driver é separado e precisa ser escolhido e configurado.', [
 ('Consulta segura', 'Implemente busca por ID e técnico usando parâmetros PostgreSQL. Não concatene valores.', 'Use WHERE id = $1 AND tecnico_id = $2.', 'Passe ambos os valores a QueryRowContext e mapeie sql.ErrNoRows sem revelar existência de recurso fora do escopo. Adicione um driver compatível no módulo.', ['Usa parâmetros.', 'Aplica escopo por técnico.']),
 ('Recursos da listagem', 'Descreva o fluxo completo de QueryContext com múltiplas linhas e todos os erros relevantes.', 'Existe um erro possível depois de a última iteração terminar.', 'Trate o erro inicial, defer rows.Close, faça Scan por linha, trate cada falha e verifique rows.Err no final. Limite a paginação.', ['Inclui rows.Err.', 'Limita a quantidade de dados.']),
 ('Ordenação permitida', 'O usuário pede order_by. Proponha uma implementação segura para criado_em e status.', 'Valores são parâmetros; identificadores vêm de uma tabela controlada.', 'Mapeie entradas conhecidas para fragmentos fixos como "created_at" e "status". Rejeite desconhecidos. Não aceite expressão SQL arbitrária.', ['Lista explícita de opções.', 'Não concatena texto livre.'])], 'https://go.dev/doc/tutorial/database-access', local=True)
lesson('Transações e idempotência', 'Preservar invariáveis quando operações falham ou competem.', [
 ('Tudo ou nada dentro da fronteira', 'Uma transação agrupa operações no mesmo banco. BeginTx devolve *sql.Tx. Use o tx para todas as consultas que pertencem à transação; usar db no meio pode obter outra conexão e escapar da atomicidade. Defer Rollback cobre saídas antecipadas; Commit também pode falhar.'),
 ('Concorrência exige uma decisão', 'Duas confirmações da mesma OS podem chegar juntas. Use estado com update condicional, locks apropriados, nível de isolamento e restrições de unicidade conforme a regra. Teste com duas transações concorrentes reais. A escolha depende do comportamento específico do banco e do driver.'),
 ('Efeito externo é outra fronteira', 'Uma transação SQL não desfaz um webhook já enviado. O padrão outbox grava a mudança e um evento na mesma transação; um worker publica depois com deduplicação. Idempotência significa repetir a mesma intenção sem duplicar o efeito de negócio, e precisa sobreviver a reinícios.')],
 '''package main
import (
    "context"
    "database/sql"
    "errors"
    "fmt"
)
func confirmar(ctx context.Context, db *sql.DB, id int64) error {
    tx, err := db.BeginTx(ctx, nil)
    if err != nil { return err }
    defer tx.Rollback()
    r, err := tx.ExecContext(ctx, "UPDATE ordens SET status='concluida' WHERE id=$1 AND status='pendente'", id)
    if err != nil { return err }
    n, err := r.RowsAffected()
    if err != nil { return err }
    if n != 1 { return errors.New("ordem ausente ou estado incompatível") }
    return tx.Commit()
}
func main() { fmt.Println("Exemplo parcial: a baixa de estoque deve integrar a mesma transação.") }''', 'Exemplo parcial: a baixa de estoque deve integrar a mesma transação.', 'Uma operação feita por db dentro de uma função que abriu tx pertence automaticamente à transação?', ['Sim', 'Não; é preciso usar o tx', 'Só se tiver o mesmo SQL', 'Só em PostgreSQL'], 1, 'A transação usa sua conexão. Operações no pool db não entram automaticamente nela.', [
 ('OS e estoque juntos', 'Desenhe a confirmação operacional e a baixa do IMEI em uma única transação.', 'Toda mudança no banco usa tx, e o estado anterior limita o update.', 'Valide a transição, atualize a OS condicionalmente, baixe o equipamento vinculado e grave auditoria/outbox no mesmo tx. Qualquer falha cancela tudo. Não peça uma nova leitura de IMEI se a instalação já o vinculou.', ['Atomicidade de OS e equipamento.', 'Concorrência não duplica a baixa.']),
 ('Duas confirmações', 'Especifique um teste de integração com duas confirmações simultâneas da mesma OS.', 'O resultado do estoque precisa ser verificado após as duas terminarem.', 'Inicie operações sincronizadas, aguarde ambas e confira uma única baixa, um estado final coerente e respostas segundo a política de idempotência/conflito.', ['Exercita concorrência real no banco.', 'Verifica efeito persistido, não só status HTTP.']),
 ('Falha no webhook', 'O banco confirmou, mas o envio externo falhou. Descreva recuperação com outbox.', 'Salvar evento e mudança juntos fecha a lacuna entre commit e envio.', 'O worker busca eventos pendentes, envia, registra sucesso e tenta novamente com backoff em falhas. O receptor ou protocolo precisa deduplicar porque o envio pode ocorrer mais de uma vez.', ['Persistência do evento é transacional.', 'Reconhece entrega duplicada possível.'])], 'https://go.dev/doc/database/execute-transactions', local=True)
lesson('Arquitetura guiada por dependências', 'Organizar o projeto sem transformar toda função em uma camada.', [
 ('Comece pelas regras', 'A regra de concluir uma OS não deve depender de detalhes de HTTP ou do driver SQL. Uma função de aplicação pode coordenar autorização e persistência por contratos pequenos. A arquitetura existe para tornar mudanças e verificações mais fáceis, não para maximizar pastas.'),
 ('Interfaces onde há consumidor', 'Declare uma interface perto da regra que a utiliza. Implemente detalhes de banco e rede na borda, fazendo a composição em main. Evite interfaces enormes, containers de injeção desnecessários e modelos de domínio que só espelham a tabela sem carregar regras.'),
 ('Leia o grafo de dependências', 'Pacotes Go não podem ter ciclos de importação. Se dois pacotes se conhecem demais, revise a responsabilidade e a direção da dependência. Registre decisões difíceis com alternativas, restrições e consequências. Só extraia microserviços quando limites operacionais e de equipe justificarem.')],
 '''package main
import (
    "context"
    "fmt"
)
type Repositorio interface { Status(context.Context, int) (string, error) }
type Memoria map[int]string
func (m Memoria) Status(ctx context.Context, id int) (string, error) {
    s, ok := m[id]
    if !ok { return "", fmt.Errorf("ordem ausente") }
    return s, nil
}
func consultar(ctx context.Context, r Repositorio, id int) (string, error) { return r.Status(ctx, id) }
func main() {
    s, err := consultar(context.Background(), Memoria{1:"aberta"}, 1)
    if err != nil { fmt.Println(err); return }
    fmt.Println(s)
}''', 'aberta', 'Onde costuma fazer sentido declarar uma interface pequena de dependência?', ['Sempre em um pacote global interfaces', 'Perto do consumidor que precisa do comportamento', 'Dentro do driver SQL obrigatoriamente', 'Uma interface para cada struct'], 1, 'O consumidor define o comportamento que necessita. Isso evita acoplá-lo a uma API maior que sua necessidade.', [
 ('Mapa de pacotes', 'Proponha a estrutura de um monólito de OS e descreva a direção das importações.', 'O comando monta dependências; regras não importam handlers.', 'Uma opção: cmd/api compõe internal/ordem, internal/httpapi e internal/postgres. As bordas dependem dos contratos do domínio/aplicação, sem ciclo.', ['Sem ciclos.', 'Responsabilidades justificadas.']),
 ('Troca de armazenamento', 'Demonstre que uma regra usa um fake em memória sem importar database/sql.', 'A assinatura da dependência pertence ao comportamento necessário.', 'Implemente apenas os métodos consumidos pelo caso de uso. Um teste injeta o fake e observa o resultado/efeito, sem duplicar a implementação SQL.', ['Regra independente de SQL.', 'O fake testa comportamento real do caso de uso.']),
 ('Decisão registrada', 'Escreva uma decisão: monólito modular ou microserviços para seu projeto de estudo.', 'Considere deploy, transações, diagnóstico e equipe de uma pessoa.', 'O monólito modular costuma reduzir custo operacional inicial. Registre o contexto, a decisão e os sinais concretos que justificariam separação futura.', ['Expõe alternativas e consequências.', 'Usa restrições reais.'])], 'https://go.dev/doc/modules/layout', local=True)

exec(compile((ROOT / 'course_advanced.py').read_text(), 'course_advanced.py', 'exec'))
assert len(levels) == 12 and len(lessons) == 36
assert sum(len(x['exercises']) for x in lessons) == 108
data = dict(title='Forge Academy · Go', updated='2026-10-22', hours=288, levels=levels, lessons=lessons)
(OUT / 'course.js').write_text('window.COURSE = '+json.dumps(data, ensure_ascii=False)+';\n')
md = ['# Forge Academy · Go — Cronograma de estudo', '', 'Ritmo de referência: 36 semanas × 8 horas = 288 horas.',
      'Ajuste o ritmo sem pular os critérios de compreensão. Não há prazo que garanta senioridade.', '',
      '## Rotina semanal (8 horas)', '', 'Segunda: 1h de teoria; terça: 2h de prática guiada; quinta: 2h de exercícios; sábado: 2h de projeto; domingo: 1h de revisão e explicação sem consulta.', '',
      '## Como concluir uma aula', '', 'Ler e explicar o conceito, executar o exemplo no Go local ou no Playground, resolver os três exercícios, conferir os critérios e passar na checagem de compreensão.',
      'Exercícios e projetos têm autoavaliação; a checagem conceitual é corrigida automaticamente. O editor da plataforma não compila Go.', '']
for lv in levels:
    a, b = (lv['id']-1)*3+1, lv['id']*3
    md += [f"## Nível {lv['id']:02d} — {lv['title']} (semanas {a}–{b})", '', lv['summary'], '']
    for ls in [x for x in lessons if x['level']==lv['id']]:
        md += [f"- Semana {ls['week']}: {ls['title']} — {ls['goal']}"]
    md += ['', '**Projeto:** '+lv['project'], '']
    md += ['- '+d for d in lv['deliverables']]
    md += ['', '**Critérios:** '+ '; '.join(lv['rubric']), '']
md += ['## Referências oficiais', '', '- https://go.dev/doc/tutorial/', '- https://go.dev/tour/', '- https://go.dev/ref/spec',
       '- https://go.dev/ref/mem', '- https://go.dev/doc/security/', '- https://go.dev/doc/diagnostics', '- https://go.dev/doc/go1.27', '',
       'Conteúdo autoral em português. Referências verificadas em 22/10/2026. Effective Go é complementar e não cobre sozinho os recursos modernos.']
(OUT / 'cronograma-go-forge.md').write_text('\n'.join(md)+'\n')
print(f"Conteúdo pronto: {len(levels)} níveis, {len(lessons)} aulas, 108 exercícios e 36 checagens.")

