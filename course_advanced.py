# Carregado por build_course.py no mesmo namespace de autoria.
level('Go moderno e abstrações', 'Avançado', 'Use generics e reflexão quando melhorarem contratos e simplicidade.',
      ['Generics', 'Iteradores', 'Reflection'], 'Biblioteca de coleções pequena',
      ['Uma função genérica com restrição justificada.', 'Iterador que respeita interrupção do consumidor.', 'Comparação com solução concreta e benchmarks.'],
      ['Não usa any para esconder falta de contrato.', 'Explica a versão mínima dos recursos.', 'Abstração reduz repetição sem ampliar acoplamento.'])
lesson('Generics e conjuntos de tipos', 'Criar uma abstração genérica com uma razão concreta.', [
 ('O parâmetro é um tipo', 'Uma função genérica recebe parâmetros de tipo entre colchetes e valores entre parênteses. A restrição define quais tipos podem ser usados e quais operações são válidas. any aceita qualquer tipo; comparable permite igualdade e uso como chave de map dentro das regras da linguagem.'),
 ('Conjuntos e tipo subjacente', 'Uma restrição como ~int | ~int64 aceita tipos cujo tipo subjacente é int ou int64. O til permite que tipos definidos do domínio participem do contrato. Isso não remove risco de overflow: uma função genérica ainda precisa de limites ou de uma política aritmética.'),
 ('Abstração deve pagar seu custo', 'Generics combinam bem com estruturas de dados e algoritmos que preservam relações entre tipos. Interfaces comuns continuam apropriadas para comportamentos. Evite transformar uma simples chamada concreta em uma API genérica sem consumidor real. Documente casos vazios, mutação e propriedade dos dados.')],
 '''package main
import "fmt"
type Inteiro interface { ~int | ~int64 }
func Somar[T Inteiro](valores []T) T {
    var total T
    for _, v := range valores { total += v }
    return total
}
type Centavos int64
func main() { fmt.Println(Somar([]Centavos{100, 200, 50})) }''', '350', 'Por que usar ~int64 em uma restrição?', ['Para aceitar qualquer tipo', 'Para aceitar tipos definidos cujo tipo subjacente é int64', 'Para converter strings automaticamente', 'Para eliminar overflow'], 1, '~ descreve o tipo subjacente no conjunto de tipos. Não é uma conversão e não muda a aritmética.', [
 ('Contém genérico', 'Implemente Contem[T comparable]([]T, T) bool e teste string, int e slice vazio.', 'Compare cada elemento ao alvo usando ==.', 'Percorra os valores, retorne true no primeiro igual e false no final. Comparable é necessária porque a implementação usa igualdade.', ['Passa nos três cenários.', 'Justifica a restrição.']),
 ('Tipo do domínio', 'Use type Centavos int64 com Somar e explique por que Inteiro com apenas int64 não aceitaria o tipo definido.', 'Um tipo definido não é idêntico ao tipo subjacente.', 'Sem ~, o termo int64 representa esse tipo exato. ~int64 inclui tipos definidos com esse subjacente, como Centavos.', ['Distingue identidade de subjacência.', 'Demonstra a restrição adequada.']),
 ('Quando recusar generics', 'Compare interface Notificador com uma função genérica para avisar a conclusão de OS. Qual contrato fica mais claro?', 'A necessidade aqui é comportamento, não aritmética de coleções.', 'Uma interface pequena costuma expressar melhor Avisar. A solução deve justificar sua escolha com consumidores reais, sem assumir que generics sempre melhoram desempenho.', ['Compara contratos.', 'Não promete velocidade sem medir.'])], 'https://go.dev/doc/tutorial/generics')
lesson('Iteradores e evolução da linguagem', 'Ler recursos modernos respeitando sua versão mínima.', [
 ('Iterar sem materializar tudo', 'Desde Go 1.23, range pode consumir funções com assinaturas específicas. iter.Seq[T] representa uma sequência cujo produtor recebe yield func(T) bool. Quando yield retorna false, o produtor deve parar. Isso permite encerrar cedo sem precisar criar um slice com todos os elementos.'),
 ('Recursos têm uma versão', 'A diretiva go do módulo participa das regras de linguagem disponíveis. Ao usar um recurso novo, registre a versão mínima e teste com ela. As notas de Go 1.27 introduzem métodos com seus próprios parâmetros de tipo; métodos de interfaces continuam sem poder declarar esses parâmetros e não são implementados por métodos genéricos.'),
 ('Modernize com julgamento', 'Conheça go fix e bibliotecas como slices, maps e iter, mas não atualize uma API pública só para exibir sintaxe nova. Compare clareza, compatibilidade e custo. O exemplo usa iteradores de Go 1.23; a leitura complementar aborda os limites dos métodos genéricos em Go 1.27.')],
 '''package main
import (
    "fmt"
    "iter"
)
func Numeros(n int) iter.Seq[int] {
    return func(yield func(int) bool) {
        for i := 1; i <= n; i++ {
            if !yield(i) { return }
        }
    }
}
func main() {
    for v := range Numeros(5) {
        fmt.Println(v)
        if v == 2 { break }
    }
}''', '1\n2', 'O que um produtor iter.Seq deve fazer se yield devolver false?', ['Continuar produzindo', 'Encerrar a iteração', 'Fechar um canal inexistente', 'Reiniciar a sequência'], 1, 'False informa que o consumidor não quer mais valores. Continuar chamando yield viola o protocolo.', [
 ('Iterador filtrado', 'Crie um iterador que produza apenas os números pares de 1 até n e respeite a interrupção.', 'Só chame yield para os pares e retorne quando vier false.', 'Percorra os números, filtre com i%2 == 0 e encerre em !yield(i). Teste um consumidor que para no primeiro par.', ['Produz a sequência correta.', 'Para quando o consumidor pede.']),
 ('Versão explícita', 'Defina a versão mínima de um módulo que usa range sobre iter.Seq e explique como verificar compatibilidade.', 'Consulte as notas oficiais da versão do recurso.', 'Range sobre funções iteradoras requer Go 1.23 ou posterior. Teste no toolchain mínimo declarado e no estável atual; não confunda a versão instalada com a versão declarada.', ['Registra Go 1.23 como mínimo desse recurso.', 'Define verificação real.']),
 ('Métodos genéricos em 1.27', 'Leia as notas oficiais do Go 1.27 e explique um caso de uso e uma limitação dos métodos genéricos.', 'Uma regra sobre métodos de interface permanece restritiva.', 'Podem manter uma transformação genérica no namespace de um tipo. Métodos de interfaces não podem declarar parâmetros de tipo próprios nem ser implementados por métodos genéricos. Exija Go 1.27 para código que usa a novidade.', ['Cita a restrição de interfaces.', 'Explicita a versão mínima.'])], 'https://go.dev/doc/go1.27', caution='O exemplo de iterador exige Go 1.23+. A extensão de métodos genéricos citada na aula exige Go 1.27+.')
lesson('Reflection e contratos dinâmicos', 'Inspecionar tipos sem substituir validação por fragilidade.', [
 ('Tipos durante a execução', 'reflect permite inspecionar tipos, campos e valores dinamicamente. Bibliotecas de serialização usam essas capacidades. Type descreve o tipo; Value representa um valor refletido. Kind é a categoria, como struct ou ptr, e não identifica sozinho um tipo definido.'),
 ('Modificar exige permissão', 'Um reflect.Value só pode ser alterado em condições de endereçabilidade e exportação. Use CanSet e verifique Kind antes de chamar operações específicas. O código pode causar panic se presumir um formato que não existe. Tags de struct são metadados, não uma validação automática de regra de negócio.'),
 ('Escolha uma alternativa mais simples', 'Antes de reflection, considere código concreto, interfaces, generics ou geração de código. Reflection desloca erros para a execução e dificulta leitura. Use-a em uma fronteira bem testada, com mensagens úteis, limites e documentação dos tipos aceitos.')],
 '''package main
import (
    "fmt"
    "reflect"
)
type Ordem struct { ID int `json:"id"` }
func main() {
    t := reflect.TypeOf(Ordem{})
    campo, ok := t.FieldByName("ID")
    if !ok { return }
    fmt.Println(campo.Name, campo.Tag.Get("json"))
}''', 'ID id', 'Uma tag json:"id" valida automaticamente que ID seja positivo?', ['Sim', 'Não; a tag orienta bibliotecas, a regra precisa ser implementada', 'Só com reflect', 'Somente em interfaces'], 1, 'Tags são metadados. encoding/json interpreta o nome, mas não implementa essa invariável do domínio.', [
 ('Leitor de metadados', 'Liste nomes e tags json de campos exportados de um struct recebido como tipo.', 'Valide se o tipo é struct antes de iterar campos.', 'Use Kind, NumField e Field; trate ponteiros conforme o contrato e filtre campos privados. Não presuma que qualquer valor serve.', ['Rejeita formatos incompatíveis.', 'Não expõe campos privados indevidamente.']),
 ('Por que panic?', 'Explique por que reflect.ValueOf(3).SetInt(4) falha e construa um valor modificável.', 'O valor precisa apontar para armazenamento endereçável.', 'Use x := 3; v := reflect.ValueOf(&x).Elem(); confirme v.CanSet(); v.SetInt(4). O valor refletido de um literal não é modificável.', ['Explica endereçabilidade.', 'Verifica CanSet e tipo.']),
 ('Revisão de desenho', 'Uma regra de OS usa reflection para acessar Status por nome. Proponha uma alternativa.', 'A estrutura do domínio já é conhecida em compilação.', 'Use um tipo concreto ou uma interface com operação significativa. Isso move verificações para a compilação e evita strings de nomes de campo espalhadas.', ['Elimina dependência de nomes textuais.', 'Mantém o contrato explícito.'])], 'https://go.dev/blog/laws-of-reflection')

level('Desempenho e runtime', 'Especialista', 'Investigue gargalos com evidência e entenda os limites do modelo de execução.',
      ['pprof e trace', 'Alocações e GC', 'Modelo de memória'], 'Investigação de desempenho',
      ['Carga reprodutível com resultados antes/depois.', 'Perfis de CPU ou heap e hipótese documentada.', 'Uma melhoria sem regressão de correção.'],
      ['Medições têm contexto e variabilidade.', 'Sem otimizações por suposição.', 'Pode explicar o custo e a mudança no perfil.'])
lesson('Benchmarks, pprof e diagnóstico', 'Localizar o gargalo antes de alterar o código.', [
 ('Uma hipótese verificável', 'Descreva uma carga representativa e a métrica que importa: latência, throughput, alocações ou memória retida. Um microbenchmark isolado pode não representar o sistema. Meça o caminho real e investigue se o custo é CPU, I/O, contenção ou dependência externa.'),
 ('Ferramentas complementares', 'go test -bench e -benchmem ajudam em microbenchmarks. pprof mostra perfis amostrados de CPU, heap e outros recursos. go tool trace ajuda a entender eventos do runtime e períodos de bloqueio. Ative perfis com cuidado e proteja os endpoints de diagnóstico.'),
 ('Compare com disciplina', 'Use entradas equivalentes e versões registradas; execute múltiplas amostras e compare a variabilidade. Preserve testes de correção. O exemplo é um benchmark local, não um número de desempenho predefinido. A ferramenta atual também oferece formas modernas de loop de benchmark, conforme sua versão.')],
 '''package main
import (
    "strconv"
    "strings"
    "testing"
)
func montar(n int) string {
    var b strings.Builder
    for i := 0; i < n; i++ { b.WriteString(strconv.Itoa(i)) }
    return b.String()
}
func BenchmarkMontar(b *testing.B) {
    b.ReportAllocs()
    for i := 0; i < b.N; i++ { _ = montar(100) }
}''', 'Em main_test.go: go test -run=^$ -bench=Montar -benchmem -count=5 .', 'Qual é o primeiro passo de uma otimização útil?', ['Trocar tudo por ponteiros', 'Definir carga, métrica e hipótese mensurável', 'Adicionar goroutines', 'Usar unsafe'], 1, 'Sem carga e objetivo, uma melhoria local pode aumentar o custo do sistema ou não beneficiar o usuário.', [
 ('Linha de base', 'Registre cinco amostras de um benchmark com versão de Go, máquina e tamanho de entrada.', 'Não preencha números estimados: rode localmente.', 'Guarde saídas reais de -benchmem e -count=5, e descreva o que a preparação inclui. Use uma comparação estatística apropriada quando comparar alterações.', ['Resultados reais e reproduzíveis.', 'Inclui B/op e allocs/op.']),
 ('Perfil com pergunta', 'Colete CPU ou heap do projeto e formule uma hipótese baseada no perfil.', 'Heap vivo e total alocado respondem perguntas diferentes.', 'Escolha o perfil ligado ao sintoma. Identifique uma pilha relevante, faça uma mudança pequena e reavalie a mesma carga com os mesmos testes.', ['Hipótese cita evidência.', 'Reavalia depois da mudança.']),
 ('Latência externa', 'Uma API está lenta, mas usa pouca CPU. Liste investigações antes de micro-otimizar JSON.', 'Observe espera no banco, rede e filas.', 'Meça tempo por dependência, pool de conexões, locks, filas, timeouts e tamanho de resposta. CPU baixa pode indicar tempo bloqueado.', ['Considera I/O e contenção.', 'Define como medir cada hipótese.'])], 'https://go.dev/doc/diagnostics', local=True)
lesson('Memória, escape analysis e GC', 'Distinguir alocação, retenção e coleta.', [
 ('A vida do valor importa', 'O compilador decide se armazenamento pode ficar na stack ou precisa sobreviver em outro lugar. Escape analysis acompanha esse uso. Retornar o endereço de uma variável local é seguro em Go: o armazenamento sobrevive conforme necessário. A decisão exata de alocação é detalhe da implementação e pode mudar.'),
 ('GC não corrige retenção lógica', 'O garbage collector recupera objetos que deixaram de ser alcançáveis. Se um slice pequeno mantém referência a um array grande, esse array pode permanecer vivo. Maps, caches e goroutines bloqueadas também podem manter dados desnecessários. Memória retida não é o mesmo que taxa de alocação.'),
 ('Ajuste depois de medir', 'GOGC e GOMEMLIMIT influenciam o comportamento de memória do runtime; o limite de memória é uma orientação do runtime, não uma barreira rígida contra todo consumo do processo. Revise o guia de GC e a versão usada. sync.Pool não garante persistência dos objetos e deve ser justificado por perfil.')],
 '''package main
import "fmt"
func independente(dados []byte, n int) []byte {
    if n < 0 || n > len(dados) { return nil }
    copia := make([]byte, n)
    copy(copia, dados[:n])
    return copia
}
func main() {
    origem := []byte("OS-001:conteúdo longo")
    id := independente(origem, 6)
    origem[0] = 'X'
    fmt.Println(string(id))
}''', 'OS-001', 'Um subslice pequeno sempre libera o resto do array original?', ['Sim', 'Não; pode manter o array inteiro alcançável', 'Só com GC desativado', 'Só para int'], 1, 'O slice contém referência ao array subjacente. Copiar a parte necessária pode permitir liberar o array antigo.', [
 ('Retenção por subslice', 'Construa um exemplo em que guardar os primeiros bytes de um buffer mantém o array grande referenciado. Depois copie só os bytes necessários.', 'O custo de uma cópia pequena pode reduzir retenção longa.', 'Compare dados[:n] com append([]byte(nil), dados[:n]...). Investigue com heap profile; não conclua apenas pelo tamanho len do slice.', ['Explica a referência ao array.', 'Separa alocação de retenção.']),
 ('Escape observado', 'Use go build -gcflags=-m no seu módulo e explique duas mensagens observadas.', 'A mensagem descreve essa compilação, não uma lei imutável da linguagem.', 'Registre as mensagens e a razão provável do escape. Confirme o efeito no benchmark/perfil antes de alterar a API para evitar uma alocação.', ['Usa mensagens reais.', 'Não transforma detalhe de compilador em garantia.']),
 ('Cache limitado', 'Projete um cache que não cresça indefinidamente.', 'TTL sem remoção efetiva pode não limitar memória.', 'Defina capacidade, política de expiração/remoção, concorrência e métricas de tamanho e hit rate. Meça o custo antes de adicionar sync.Pool.', ['Há limite real.', 'Há política de remoção e observação.'])], 'https://go.dev/doc/gc-guide', local=True)
lesson('Scheduler e modelo de memória', 'Raciocinar sobre sincronização em vez de confiar na ordem aparente.', [
 ('G, M e P como modelo de implementação', 'O runtime agenda goroutines sobre threads do sistema. Os termos G, M e P ajudam a ler o runtime: goroutine, thread e recurso lógico necessário para executar código Go. Esse é um modelo de implementação, não um contrato para ordenar seu programa. GOMAXPROCS limita execução paralela de código Go, não a quantidade total de goroutines.'),
 ('Happens-before', 'O modelo de memória define relações de sincronização e visibilidade. Uma operação de canal, um mutex e outras primitivas podem estabelecer relações específicas. Observar que uma execução “sempre imprime certo” não prova correção; sem sincronização, leituras e escritas concorrentes podem constituir uma data race.'),
 ('Dono do estado', 'Simplifique o raciocínio com uma goroutine dona de um estado ou com proteção consistente por mutex. Use atomics só com um protocolo que você consegue explicar. Avalie liveness também: ausência de race não elimina deadlock, starvation ou vazamento de goroutines.')],
 '''package main
import "fmt"
func main() {
    pronto := make(chan struct{})
    valor := 0
    go func() {
        valor = 42
        close(pronto)
    }()
    <-pronto
    fmt.Println(valor)
}''', '42', 'Por que a leitura de valor está sincronizada no exemplo?', ['Porque houve tempo suficiente', 'Porque o fechamento do canal e o recebimento estabelecem a sincronização', 'Porque int é sempre atômico', 'Porque main tem prioridade'], 1, 'A escrita ocorre antes do close; o recebimento que observa o canal fechado cria a relação de sincronização necessária.', [
 ('Explique a relação', 'Desenhe por escrito a sequência escrita → close → recebimento → leitura do exemplo.', 'Identifique o ponto que conecta as duas goroutines.', 'Na produtora, a escrita precede close. O recebimento que observa o fechamento sincroniza com ele; a leitura posterior observa o valor de acordo com o modelo de memória.', ['Identifica a sincronização.', 'Não usa tempo como justificativa.']),
 ('Sem sinalização', 'Remova o canal do exemplo e explique por que uma saída aparentemente correta não torna o programa válido.', 'Não use uma execução isolada como prova.', 'A leitura e a escrita deixam de estar ordenadas por sincronização e há data race. Main também pode terminar antes da goroutine. Use -race para observar caminhos, não para provar ausência universal.', ['Aponta a race.', 'Reconhece o risco de término antecipado.']),
 ('Liveness', 'Descreva um deadlock que não tenha data race e como eliminá-lo.', 'Bloquear duas esperas incompatíveis já é suficiente.', 'Uma única goroutine enviando em canal sem buffer antes de existir recebedor bloqueia. Reorganize produtor/consumidor e o ciclo de vida; adicionar buffer sem raciocínio pode só adiar o bloqueio.', ['Dá exemplo sem race.', 'Corrige a dependência de espera.'])], 'https://go.dev/ref/mem', local=True)

level('Operação em produção', 'Especialista', 'Prepare o serviço para iniciar, falhar, ser observado e encerrar com previsibilidade.',
      ['Shutdown', 'Observabilidade', 'CI e entregas'], 'Serviço pronto para homologação',
      ['Configuração validada e encerramento por sinal.', 'Logs estruturados, health checks e métricas.', 'Pipeline de testes e artefato reproduzível.'],
      ['Nenhum segredo no repositório.', 'Timeouts e shutdown são testáveis.', 'Procedimento de deploy e rollback está documentado.'])
lesson('Configuração, sinais e shutdown', 'Encerrar sem abandonar trabalho e sem esperar para sempre.', [
 ('Configuração é entrada', 'Leia configuração na inicialização, valide antes de aceitar tráfego e informe exatamente o campo inválido sem revelar seu segredo. Separe configuração de ambiente de regras de negócio. Defina valores padrão conscientes; uma URL vazia não deve virar uma conexão silenciosa ao destino errado.'),
 ('Sinal vira cancelamento', 'signal.NotifyContext converte sinais em cancelamento. Pare de aceitar novas tarefas, sinalize workers, aguarde trabalho em andamento por um prazo e feche recursos na ordem correta. HTTP Server.Shutdown é parte desse processo; recursos como conexões hijacked exigem política própria.'),
 ('Um novo prazo para encerrar', 'O contexto da operação principal já pode estar cancelado ao iniciar o shutdown. Crie um contexto separado com timeout para dar uma janela de limpeza. Não bloqueie indefinidamente em uma goroutine que nunca observa cancelamento. Teste o encerramento usando sinais/controladores injetáveis quando possível.')],
 '''package main
import (
    "context"
    "fmt"
    "net/http"
    "time"
)
func encerrar(s *http.Server) error {
    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()
    return s.Shutdown(ctx)
}
func main() { fmt.Println("Integre encerrar ao recebimento de SIGTERM no seu serviço local.") }''', 'Integre encerrar ao recebimento de SIGTERM no seu serviço local.', 'Qual contexto usar para a janela de shutdown depois de a operação principal ser cancelada?', ['O mesmo contexto já cancelado', 'Um contexto independente com prazo de limpeza', 'Nenhum prazo', 'Um valor global sem dono'], 1, 'Um contexto já cancelado encerraria a limpeza imediatamente. A janela de shutdown precisa de seu próprio prazo.', [
 ('Encerramento completo', 'Implemente servidor que reage a SIGTERM e aguarda workers com prazo.', 'Defina a ordem: parar entrada, cancelar, esperar, fechar dependências.', 'Use NotifyContext; coordene Shutdown com contexto próprio e a espera dos workers. Feche o banco após tarefas que o utilizam. Trate http.ErrServerClosed como encerramento esperado.', ['Há prazo global de limpeza.', 'Não fecha dependência em uso.']),
 ('Configuração inválida', 'Defina validação para porta, URL do banco e prazo de requisição.', 'Falhe antes de abrir o servidor.', 'Converta e valide faixas, exija URL quando o modo precisar dela e prazo positivo. Mensagens apontam o campo sem imprimir senha ou URL com credenciais.', ['Falha cedo.', 'Não vaza segredos.']),
 ('Teste do término', 'Descreva como provar que uma tarefa em andamento pode terminar dentro da janela de shutdown.', 'Sincronize início e liberação por canais.', 'Inicie a tarefa, espere seu sinal de início, solicite shutdown, libere a tarefa e confira término dentro do prazo. Teste também uma tarefa que excede a janela.', ['Testa sucesso e prazo excedido.', 'Sem Sleep para coordenar.'])], 'https://pkg.go.dev/net/http#Server.Shutdown', local=True)
lesson('Logs, métricas, traces e saúde', 'Responder o que falhou, onde e para quem.', [
 ('Três perspectivas', 'Logs registram eventos, métricas agregam comportamento ao longo do tempo e traces conectam etapas de uma operação. log/slog fornece logs estruturados na biblioteca padrão. Inclua identificadores de correlação e campos estáveis; evite colocar dados pessoais ou segredos no log.'),
 ('Cardinalidade custa', 'Uma métrica rotulada por cada ID de usuário ou OS pode produzir séries sem limite. Prefira dimensões controladas, como rota normalizada, método e classe de status. Request IDs cabem em logs e traces, não como label de alta cardinalidade em toda métrica.'),
 ('Saúde tem significado', 'Liveness indica se o processo está funcional o suficiente para continuar; readiness indica se deve receber tráfego. Se a política de liveness depender de cada oscilação externa, reinícios podem amplificar uma indisponibilidade. Defina critérios, prazos e ações e não exponha diagnósticos sensíveis ao público.')],
 '''package main
import (
    "bytes"
    "fmt"
    "log/slog"
)
func main() {
    var out bytes.Buffer
    logger := slog.New(slog.NewJSONHandler(&out, &slog.HandlerOptions{
        ReplaceAttr: func(groups []string, a slog.Attr) slog.Attr {
            if a.Key == slog.TimeKey { return slog.Attr{} }
            return a
        },
    }))
    logger.Info("ordem confirmada", "ordem_id", 7, "ator_id", 2)
    fmt.Print(out.String())
}''', '{"level":"INFO","msg":"ordem confirmada","ordem_id":7,"ator_id":2}', 'Qual dimensão tende a causar cardinalidade sem limite em métricas?', ['Método HTTP', 'Classe de status', 'ID individual de cada OS', 'Nome fixo de serviço'], 2, 'Cada valor distinto cria uma combinação de séries. IDs individuais costumam ser inadequados como rótulos de métricas.', [
 ('Evento de auditoria', 'Produza um log estruturado de confirmação com ator, OS, resultado e request ID sem evidência nem token.', 'Campos estruturados permitem busca sem analisar uma frase inteira.', 'Use slog com campos estáveis e valores mínimos necessários. O logger pode usar contexto para correlacionar, conforme a integração escolhida.', ['Permite correlacionar a ação.', 'Não contém segredo.']),
 ('Métricas úteis', 'Escolha quatro métricas para a fila de evidências e limite os rótulos.', 'Pense em tamanho, espera, duração e falha.', 'Tamanho da fila, idade da tarefa mais antiga, duração de processamento e taxa de falha por categoria controlada. Não use ID de OS como label.', ['Métricas respondem problemas operacionais.', 'Rótulos são limitados.']),
 ('Saúde com política', 'Defina liveness e readiness para um serviço que depende de banco.', 'Nem toda falha transitória deve reiniciar o processo.', 'Readiness pode considerar capacidade de servir e dependência essencial com prazo; liveness deve refletir condição recuperável por reinício. Documente o comportamento esperado durante falha do banco.', ['Distingue as duas políticas.', 'Evita cascata de reinícios.'])], 'https://pkg.go.dev/log/slog', local=True)
lesson('CI, containers e evolução segura', 'Entregar um artefato verificável sem acoplar o estudo a um provedor.', [
 ('Um pipeline que responde perguntas', 'O pipeline deve formatar/verificar conforme a política, executar testes, análise estática e build. Inclua -race onde a plataforma e a carga permitirem, e govulncheck para uso conhecido de vulnerabilidades. Registre toolchain e dependências para reproduzir o resultado.'),
 ('Artefato e configuração separados', 'Um container multi-stage pode compilar em uma imagem e levar só o necessário à imagem de execução. Go nem sempre gera um binário independente de bibliotecas: cgo, certificados, DNS e dados de fuso exigem atenção. Use usuário sem privilégios e nunca inclua segredos na imagem.'),
 ('Mudança de banco também é entrega', 'Migrações devem ser versionadas e compatíveis com o período de convivência entre versões quando necessário. Planeje rollback e recuperação de dados; reverter binário não desfaz uma migração destrutiva. O estudo pode ser todo local, sem contratar hospedagem.')],
 '''package main
import (
    "fmt"
    "runtime/debug"
)
func main() {
    info, ok := debug.ReadBuildInfo()
    if !ok { fmt.Println("sem metadados"); return }
    fmt.Println("Go:", info.GoVersion)
    fmt.Println("Módulo:", info.Main.Path)
}''', 'Metadados dependem do toolchain e do modo de build usados localmente.', 'Voltar o binário para a versão anterior sempre desfaz uma migração de banco?', ['Sim', 'Não; esquema e dados precisam de estratégia própria', 'Só com container', 'Se usar go build'], 1, 'Rollback de aplicação e recuperação de esquema/dados são problemas relacionados, mas diferentes.', [
 ('Pipeline mínimo', 'Escreva a sequência de verificações para sua API e diga qual problema cada uma detecta.', 'Inclua correção, races e dependências.', 'go test ./..., go vet ./..., go test -race ./... onde suportado, govulncheck ./... instalado conforme documentação e go build ./.... Verifique formatação segundo a política do projeto.', ['Cada etapa tem uma finalidade.', 'Não trata todas como prova universal.']),
 ('Container com contexto', 'Desenhe um build multi-stage e liste arquivos necessários no runtime além do binário.', 'HTTPS e timezones podem exigir dados do sistema.', 'Considere certificados CA, base de fuso quando necessária, bibliotecas exigidas por cgo e diretórios com permissões adequadas. Não assuma que scratch serve para qualquer build.', ['Sem segredo na imagem.', 'Considera dependências reais de execução.']),
 ('Migração compatível', 'Planeje a troca de um campo sem quebrar a versão anterior ainda em execução.', 'Expanda, migre dados e só então remova o legado.', 'Adicione a nova estrutura de forma compatível, publique código que consiga conviver, migre/verifique dados e remova o antigo em etapa posterior. Defina observação e recuperação.', ['Prevê coexistência.', 'Separa remoção destrutiva.'])], 'https://go.dev/doc/security/', local=True)

level('Engenharia e especialização', 'Especialista', 'Integre o aprendizado e saiba investigar além da API pública.',
      ['AST e toolchain', 'Sistemas distribuídos', 'Projeto final'], 'Central de serviços — projeto final',
      ['API com ordens, evidências, confirmação e fechamento.', 'Banco, autorização, outbox e worker cancelável.', 'Testes, perfis, documentação e demonstração de falhas.'],
      ['Fluxo completo funciona com evidências verificáveis.', 'Nenhuma baixa ou despesa é duplicada por repetição.', 'Defende decisões e limitações com clareza.'])
lesson('Por dentro do toolchain e das fronteiras', 'Investigar AST, compilação e integrações de baixo nível com cuidado.', [
 ('Da sintaxe ao executável', 'go/parser produz uma árvore sintática; go/ast permite percorrê-la; go/types ajuda na análise de tipos. O compilador possui fases e representações internas como SSA, mas elas não são APIs estáveis da linguagem. Comece com um analisador pequeno antes de ler o compilador inteiro.'),
 ('unsafe e cgo são fronteiras', 'unsafe permite operações fora de algumas garantias do sistema de tipos. Regras de ponteiros, alinhamento e vida dos objetos importam. cgo integra código C, com custos de chamada, regras de passagem de ponteiros e dependências de build. Não use essas ferramentas para eliminar uma checagem sem prova e medição.'),
 ('Wasm e trilhas de aprofundamento', 'Go tem alvos WebAssembly e WASI com restrições próprias; consulte a documentação do alvo e da versão. Como especialização, escolha compiladores, runtime, bibliotecas, redes ou ferramentas. Leia código e testes da implementação sem tratar um detalhe interno como promessa de compatibilidade.')],
 '''package main
import (
    "fmt"
    "go/ast"
    "go/parser"
    "go/token"
)
func main() {
    src := "package exemplo; func Somar(a, b int) int { return a+b }"
    f, err := parser.ParseFile(token.NewFileSet(), "exemplo.go", src, 0)
    if err != nil { fmt.Println(err); return }
    ast.Inspect(f, func(n ast.Node) bool {
        if fn, ok := n.(*ast.FuncDecl); ok { fmt.Println(fn.Name.Name) }
        return true
    })
}''', 'Somar', 'A representação interna SSA do compilador é uma API estável da linguagem?', ['Sim', 'Não; é detalhe de implementação', 'É um arquivo go.mod', 'É um tipo de canal'], 1, 'O contrato da linguagem e as APIs documentadas são distintos dos detalhes internos do compilador.', [
 ('Analisador pequeno', 'Conte funções declaradas em um arquivo e liste seus nomes usando parser e AST.', 'FuncDecl representa declaração de função/método; literais de função são outro nó.', 'Parseie, trate erro e percorra a AST coletando *ast.FuncDecl. Documente se métodos e funções anônimas entram no critério.', ['Critério definido.', 'Não usa regex como parser da linguagem.']),
 ('Decisão sobre cgo', 'Uma biblioteca C resolve um problema inexistente em Go puro. Liste custos e alternativas antes de integrá-la.', 'Considere build, portabilidade, memória e chamada.', 'Avalie bibliotecas Go, processo separado e cgo. Se escolher cgo, documente regras de ponteiro, lib nativa, plataformas, testes e benefício mensurável.', ['Compara alternativas.', 'Inclui restrições operacionais.']),
 ('Plano de especialização', 'Escolha runtime, ferramentas ou Wasm e crie três investigações reproduzíveis além deste curso.', 'Cada investigação precisa de uma pergunta e evidência.', 'Exemplo de ferramentas: localizar funções, resolver tipos com go/types e criar um analisador com testes de diagnóstico. Registre docs/versão e resultados reais.', ['Três perguntas concretas.', 'Resultados podem ser reproduzidos.'])], 'https://pkg.go.dev/go/parser', local=True)
lesson('Falhas distribuídas, filas e consistência', 'Projetar repetição e recuperação sem prometer exatamente uma vez.', [
 ('A rede deixa resultados desconhecidos', 'Timeout não prova que o servidor não executou. Um serviço pode confirmar uma mudança e perder a resposta. Retries cegos podem multiplicar efeitos. Defina chave de idempotência, retenção, resultado reaproveitado e tratamento de chaves reutilizadas com payload diferente.'),
 ('Entrega e efeito são contratos diferentes', 'Filas com entrega ao menos uma vez podem repetir mensagens. O consumidor precisa deduplicar com persistência e uma fronteira transacional adequada. Um map em memória só demonstra a ideia; não resolve reinício, múltiplas instâncias nem concorrência de produção.'),
 ('Consistência com limites explícitos', 'Outbox, retries com backoff e jitter, limite de tentativas, dead-letter e observabilidade formam uma política de recuperação. Cancelamento não é compensação de efeito já confirmado. Defina invariáveis do negócio e escolha consistência conforme a fronteira; não adicione distribuição sem necessidade.')],
 '''package main
import "fmt"
func main() {
    vistos := make(map[string]bool)
    for _, evento := range []string{"confirmar-7", "confirmar-7", "confirmar-8"} {
        if vistos[evento] { continue }
        vistos[evento] = true
        fmt.Println("processado", evento)
    }
}''', 'processado confirmar-7\nprocessado confirmar-8', 'Um map de deduplicação em memória resolve repetição após reiniciar o processo?', ['Sim', 'Não; o estado se perde e falta uma fronteira durável', 'Só com Mutex', 'Somente para strings'], 1, 'Mutex resolve acesso concorrente local, mas não persistência, reinício ou coordenação entre instâncias.', [
 ('Idempotência durável', 'Projete confirmação de OS com chave única, resultado persistido e payload identificado.', 'A deduplicação e o efeito precisam compartilhar a fronteira de consistência.', 'Persista chave, hash do pedido e resultado. Garanta unicidade no banco e atomicidade com a mudança de negócio. Payload diferente com a mesma chave deve ser recusado conforme contrato.', ['Sobrevive a reinício.', 'Não aceita reutilização ambígua da chave.']),
 ('Mensagem problemática', 'Defina política para uma tarefa que falha sempre.', 'Repetir infinitamente sem visibilidade consome recursos.', 'Use limite de tentativas e atraso, classifique falhas transitórias/permanentes, mova para estado de revisão/dead-letter e permita reprocessamento auditável depois da correção.', ['Limita custo.', 'Há diagnóstico e recuperação.']),
 ('Timeout após commit', 'Explique ao operador o que fazer quando a confirmação retornou timeout, mas pode ter sido aplicada.', 'Um novo pedido sem a mesma identidade pode repetir o efeito.', 'Consulte o resultado pela chave/OS ou repita com a mesma chave idempotente. Mostre estado pendente de verificação até obter uma resposta confiável.', ['Reconhece resultado desconhecido.', 'Evita duplicação.'])], 'https://go.dev/blog/context', caution='O map do exemplo é apenas didático. A deduplicação do projeto deve ser persistente e transacional.', local=True)
lesson('Projeto final e defesa técnica', 'Demonstrar o fluxo completo e justificar decisões.', [
 ('O produto final', 'Construa Central de serviços: agendamento gera OS; técnico envia evidências e identifica equipamento; operação confere fotos e confirma; a confirmação baixa o equipamento e alimenta o fechamento. Use dados fictícios e comece sem integração com serviços reais. Uma despesa extra pertence a uma OS específica e exige descrição e comprovante; taxa de deslocamento é definida operacionalmente.'),
 ('A prova está nos cenários', 'Mostre o caminho feliz e falhas: acesso indevido, JSON inválido, evidência ausente conforme regra definida, repetição da confirmação, concorrência, falha de banco, cancelamento e timeout após commit. A conferência operacional não deve exigir uma nova leitura de IMEI quando a instalação já o registrou. Bloqueio operacional pode existir como serviço independente.'),
 ('Defenda as escolhas', 'Entregue README de execução local, migrações, testes, limites conhecidos, decisões de arquitetura, demonstração e um relatório de perfil. Escolha uma área para aprofundar depois. Concluir 288 horas não transforma alguém automaticamente em sênior; autonomia vem de prática, revisão e operação de sistemas reais.')],
 '''package main
import (
    "errors"
    "fmt"
)
type Ordem struct { Confirmada bool; Equipamento string }
func (o *Ordem) Confirmar() error {
    if o.Confirmada { return nil }
    if o.Equipamento == "" { return errors.New("instalação sem vínculo de equipamento") }
    o.Confirmada = true
    return nil
}
func main() {
    o := Ordem{Equipamento:"000123456789012"}
    if err := o.Confirmar(); err != nil { fmt.Println(err); return }
    if err := o.Confirmar(); err != nil { fmt.Println(err); return }
    fmt.Println(o.Confirmada)
}''', 'true', 'Qual é a melhor evidência de domínio do projeto final?', ['Quantidade de pastas', 'Fluxo executável, testes de falha e decisões justificadas', 'Somente o README', 'Um resultado sem reprodução'], 1, 'Competência se demonstra com comportamento verificável e capacidade de explicar decisões, custos e limites.', [
 ('Fluxo completo', 'Implemente a primeira fatia vertical: criar OS, vincular equipamento e confirmar com baixa transacional.', 'Faça um caminho ponta a ponta antes de ampliar módulos.', 'Entregue API, banco e teste de integração dessa fatia. A confirmação utiliza o vínculo já persistido. A ausência de dupla baixa deve ser garantida no banco, não apenas por um bool em memória.', ['Demonstração reprodutível.', 'Repetição e concorrência não duplicam o efeito.']),
 ('Falhas e despesas', 'Acrescente despesa vinculada à OS com descrição e comprovante, mais taxa operacional de deslocamento.', 'Separe quem declara a despesa de quem a aprova.', 'Modele vínculo obrigatório, status de aprovação e acesso ao comprovante. Inclua teste de ausência de descrição/evidência e autorização para taxa operacional.', ['Despesa pertence a uma OS.', 'Descrição e comprovante são exigidos.']),
 ('Defesa final', 'Prepare uma demonstração de 10 minutos e uma revisão das principais decisões e limitações.', 'Mostre uma falha e a recuperação, além do caminho feliz.', 'Apresente fluxo, testes, perfil, modelo de autorização, transação e idempotência. Diga o que ainda não está pronto para produção e qual seria a próxima investigação.', ['Inclui evidência de execução.', 'Limitações são explícitas.'])], 'https://go.dev/doc/', caution='O exemplo ilustra uma regra em memória. A entrega final exige autorização, persistência, transação e testes de concorrência.', local=True)
