# Plano de ensino — Kubernetes

Do primeiro cluster local à entrega declarativa de aplicações confiáveis, com operação, segurança e extensibilidade.

**Carga estimada:** 216 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Docker: imagens, containers, volumes e redes.
- Terminal Bash (no Windows, WSL2), Git, YAML e HTTP básicos.
- Computador com virtualização habilitada e recursos livres para um cluster local; comece com um nó.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Fundamentos e cluster local | 18 | 1–3 | Laboratório reproduzível em kind |
| 02 | Pods e workloads | 18 | 3–5 | Serviço e tarefa de verificação |
| 03 | Rede e acesso | 18 | 5–7 | Acesso interno documentado |
| 04 | Configuração e saúde | 18 | 7–9 | Aplicação configurável com saúde |
| 05 | Recursos e agendamento | 18 | 10–12 | Orçamento de recursos do laboratório |
| 06 | Persistência e estado | 18 | 12–14 | Dados que sobrevivem ao Pod |
| 07 | Segurança de aplicações | 18 | 14–16 | Revisão de segurança por evidências |
| 08 | Diagnóstico e recuperação | 18 | 16–18 | Caderno de incidentes reproduzíveis |
| 09 | Entrega declarativa | 18 | 19–21 | Entrega local versionada |
| 10 | Observabilidade e escala | 18 | 21–23 | Painel de evidências e escala |
| 11 | Operação e recuperação | 18 | 23–25 | Runbook de operação do laboratório |
| 12 | Extensibilidade e projeto final | 18 | 25–27 | Aplicação operacional em kind |

## Nível 01 — Fundamentos e cluster local

Entenda a API, a reconciliação e os limites de um cluster de estudo.

**Aulas e objetivos**

- Aula 01: **Seu primeiro cluster com kind** — Criar um cluster local e identificar control plane, nó e runtime. (6 h)
  - Exercício 1: Liste os contextos e depois os nós com --context kind-forge. Registre qual foi usado.
  - Exercício 2: Descreva o caminho de um pedido desde kubectl até um container em execução.
  - Exercício 3: Escreva duas consequências de usar um único nó no seu notebook.
- Aula 02: **Objetos, YAML e reconciliação** — Ler metadata, spec e status e aplicar um manifesto idempotente. (6 h)
  - Exercício 1: Execute o exemplo duas vezes e conte os ConfigMaps chamados objetivo.
  - Exercício 2: Consulte kubectl explain configmap e compare data com metadata.
  - Exercício 3: Troque a mensagem para estudo declarativo e reaplique. Confirme por jsonpath.
- Aula 03: **Namespaces, labels e consultas** — Organizar recursos sem confundir nomes com fronteiras completas de segurança. (6 h)
  - Exercício 1: Crie catalogo também em forge-equipe, com ambiente=equipe. Consulte cada valor.
  - Exercício 2: Liste somente ConfigMaps com ambiente=estudo e explique o filtro.
  - Exercício 3: Compare kubectl api-resources para namespaces e nodes com pods.

**Projeto:** Laboratório reproduzível em kind

- Roteiro de criação do cluster forge e namespace de estudo.
- Manifesto versionado com labels e documentação de cada campo.
- Diagrama que separa control plane, nós e runtime.

**Critérios de conclusão**

- Outro aluno consegue recriar o ambiente sem cloud.
- Todos os comandos apontam explicitamente para kind-forge.
- Você explica spec, status e o que um namespace não isola.

## Nível 02 — Pods e workloads

Escolha o controlador certo para serviços contínuos e tarefas finitas.

**Aulas e objetivos**

- Aula 04: **Pods e ciclo de vida** — Executar um Pod e interpretar fase, readiness e reinícios. (6 h)
  - Exercício 1: Leia o IP e o nó do Pod e explique por que não usá-los como endereço permanente.
  - Exercício 2: Leia os logs do container web. Registre quais mensagens são inicialização e quais são requisições.
  - Exercício 3: Consulte fase e condições do Pod pelo YAML.
- Aula 05: **Deployments e réplicas** — Manter uma quantidade desejada de Pods e acompanhar rollout. (6 h)
  - Exercício 1: Remova apenas um Pod app=web e observe um novo nome até voltar a duas réplicas.
  - Exercício 2: Altere replicas para 3 no manifesto e reaplique. Depois retorne para 2.
  - Exercício 3: Inspecione ownerReferences de um Pod e do ReplicaSet.
- Aula 06: **Jobs, tentativas e tarefas periódicas** — Representar trabalho finito sem tratá-lo como servidor permanente. (6 h)
  - Exercício 1: Crie outro Job verificacao-falha com comando exit 1 e backoffLimit 1. Observe eventos e estado.
  - Exercício 2: Explique como uma exportação periódica evitaria sobrescrever ou duplicar resultados silenciosamente.
  - Exercício 3: Consulte kubectl explain cronjob.spec.concurrencyPolicy e compare Allow, Forbid e Replace.

**Projeto:** Serviço e tarefa de verificação

- Deployment web com duas réplicas.
- Job que termina com sucesso e registra uma verificação.
- Registro da substituição de um Pod do Deployment.

**Critérios de conclusão**

- A contagem desejada é restaurada pelo controlador.
- O Job tem política de reinício e limite de tentativas.
- Você distingue Pod, ReplicaSet, Deployment e Job.

## Nível 03 — Rede e acesso

Conecte serviços por nomes e escolha como expor uma aplicação.

**Aulas e objetivos**

- Aula 07: **Services e descoberta por seletores** — Criar endereço lógico e verificar os endpoints selecionados. (6 h)
  - Exercício 1: Crie um Service web-alt com port 8081 e targetPort 80. Acesse por port-forward local 8082:8081.
  - Exercício 2: Mude apenas o seletor de web-alt para app=inexistente e inspecione EndpointSlices. Depois corrija.
  - Exercício 3: Compare ClusterIP e port-forward no seu laboratório.
- Aula 08: **DNS e comunicação entre namespaces** — Resolver nomes de Services a partir de um Pod cliente. (6 h)
  - Exercício 1: No cliente, compare web, web.forge e o nome completo. Registre o resultado.
  - Exercício 2: Consulte servico-que-nao-existe.forge e compare com a consulta válida.
  - Exercício 3: Crie cliente no namespace forge-equipe e consulte web e web.forge.
- Aula 09: **Entrada externa e Gateway API** — Distinguir Service, Ingress e Gateway API e verificar os componentes disponíveis. (6 h)
  - Exercício 1: Liste APIs Gateway e classes presentes. Classifique presente, ausente e não verificado.
  - Exercício 2: Descreva o caminho cliente → Gateway → HTTPRoute → Service → Pod.
  - Exercício 3: Escolha uma implementação da lista oficial e registre suporte a kind, instalação, versão e como testar status Accepted/Programmed.

**Projeto:** Acesso interno documentado

- Service ClusterIP com seletor correto.
- Cliente que resolve DNS e acessa o serviço.
- Plano de entrada externa com pré-requisitos do Gateway API.

**Critérios de conclusão**

- EndpointSlices contêm os Pods esperados.
- Port-forward fica restrito ao computador local.
- Gateway API não é apresentado como incluído automaticamente.

## Nível 04 — Configuração e saúde

Separe configurações e credenciais e modele sinais de saúde úteis.

**Aulas e objetivos**

- Aula 10: **ConfigMaps e atualização de configuração** — Consumir configuração pública sem reconstruir a imagem. (6 h)
  - Exercício 1: Troque o ConfigMap para estudo revisado e crie um novo Pod config-env-2 com a mesma referência. Compare logs.
  - Exercício 2: Monte saudacao como volume de leitura e leia /config/MENSAGEM em um Pod de teste.
  - Exercício 3: Defina o que sua aplicação fará se a chave MENSAGEM estiver ausente.
- Aula 11: **Secrets e mínimo acesso** — Usar uma credencial fictícia sem confundir base64 com proteção criptográfica. (6 h)
  - Exercício 1: Mude o verificador para registrar apenas presente/ausente, sem imprimir o conteúdo.
  - Exercício 2: Descreva a sequência para trocar um Secret consumido via env por um Deployment.
  - Exercício 3: Encontre no seu repositório onde um Secret real seria acidentalmente versionado. Proponha prevenção.
- Aula 12: **Readiness, liveness e startup probes** — Usar cada probe para uma decisão distinta e testar suas consequências. (6 h)
  - Exercício 1: Crie web-probes-falha com readiness em /inexistente e liveness em /. Observe Ready e RESTARTS.
  - Exercício 2: Calcule o orçamento aproximado de startup do exemplo e proponha outro para inicialização de 90s.
  - Exercício 3: Explique por que falha temporária de um banco não deve sempre disparar liveness.

**Projeto:** Aplicação configurável com saúde

- ConfigMap para configuração pública e Secret fictício.
- Pod que recebe apenas as chaves necessárias.
- Readiness e liveness com critérios diferentes.

**Critérios de conclusão**

- Nenhum segredo real aparece em Git ou nos logs.
- Você explica reinício necessário para configuração via env.
- Falha de readiness não é confundida com reinício por liveness.

## Nível 05 — Recursos e agendamento

Defina orçamento de CPU e memória e investigue decisões do scheduler.

**Aulas e objetivos**

- Aula 13: **Requests, limits e unidades** — Definir recursos e distinguir reserva de agendamento de limite de execução. (6 h)
  - Exercício 1: Calcule requests totais de 5 réplicas com 100m CPU e 32Mi memória cada.
  - Exercício 2: Explique como CPU throttling difere de encerramento por memória.
  - Exercício 3: Leia allocatable dos nós e compare com a soma das suas requests.
- Aula 14: **Scheduling, afinidade e estado Pending** — Explicar um agendamento bloqueado com evidência dos eventos. (6 h)
  - Exercício 1: Remova apenas agenda-impossivel e recrie sem nodeSelector. Espere Ready.
  - Exercício 2: Liste labels dos nós e proponha uma seleção que exista no cluster.
  - Exercício 3: Explique por que tolerar um taint não garante ir para esse nó.
- Aula 15: **LimitRange e ResourceQuota** — Estabelecer limites de consumo e validar uma rejeição de admissão. (6 h)
  - Exercício 1: Crie em forge-quota um Pod busybox sem resources e leia o objeto resultante.
  - Exercício 2: Tente criar três Pods pequenos no namespace forge-quota e registre a rejeição do terceiro.
  - Exercício 3: Calcule por que uma atualização com maxSurge=1 pode precisar de capacidade além das réplicas normais.

**Projeto:** Orçamento de recursos do laboratório

- Deployment com requests e limits justificados.
- Relatório de um Pending provocado e corrigido.
- ResourceQuota e LimitRange no namespace de estudo.

**Critérios de conclusão**

- Requests cabem na capacidade observada do nó.
- A causa de Pending vem de eventos, não de tentativa aleatória.
- Você distingue limite de CPU, OOM e quota de namespace.

## Nível 06 — Persistência e estado

Diferencie armazenamento temporário, PVC e identidade persistente.

**Aulas e objetivos**

- Aula 16: **Volumes temporários e durabilidade** — Observar emptyDir e distinguir reinício de container de substituição de Pod. (6 h)
  - Exercício 1: Grave um segundo arquivo via exec e leia-o pelo container principal.
  - Exercício 2: Remova apenas volume-temporario e reaplique; veja quais arquivos existem.
  - Exercício 3: Classifique cache reconstruível e arquivo único de faturamento para emptyDir.
- Aula 17: **PVC, StorageClass e retenção** — Solicitar armazenamento e verificar como ele é provisionado no cluster local. (6 h)
  - Exercício 1: Altere o marcador para valor único, remova só escritor-pvc e recrie com o mesmo claim.
  - Exercício 2: Inspecione provisioner, volumeBindingMode e reclaimPolicy da classe padrão.
  - Exercício 3: Descreva como distinguir espera por consumidor de ausência de StorageClass.
- Aula 18: **StatefulSet e recuperação de dados** — Manter identidade estável e restaurar dados fictícios em destino separado. (6 h)
  - Exercício 1: Remova apenas arquivo-0 e observe a criação de arquivo-0 novamente com o mesmo claim.
  - Exercício 2: Crie um Pod com PVC novo recuperacao-demo e grave nele o conteúdo de backup-registro.txt. Leia e compare.
  - Exercício 3: Explique por que copiar arquivos de um banco em escrita pode produzir backup inválido.

**Projeto:** Dados que sobrevivem ao Pod

- Comparação reproduzível entre emptyDir e PVC.
- StatefulSet mínimo com claim template e Service headless.
- Backup e restauração de um arquivo fictício em novo PVC.

**Critérios de conclusão**

- O teste recria Pod e confere o conteúdo.
- A política de retenção e o limite do armazenamento local são documentados.
- Você não chama replicação de backup nem StatefulSet de banco altamente disponível.

## Nível 07 — Segurança de aplicações

Aplique privilégio mínimo à API, aos containers e ao tráfego.

**Aulas e objetivos**

- Aula 19: **ServiceAccounts e RBAC** — Conceder apenas leitura de Pods e demonstrar uma ação negada. (6 h)
  - Exercício 1: Verifique se leitor pode ler Secrets e registre a resposta.
  - Exercício 2: Explique como selecionar ServiceAccount no Pod e desativar token quando a API não for necessária.
  - Exercício 3: Compare a mesma consulta em forge e forge-equipe.
- Aula 20: **Pod Security e execução sem root** — Criar um Pod endurecido e distinguir política de admissão de identidade de usuário. (6 h)
  - Exercício 1: Prepare processo-inseguro no mesmo namespace sem os controles Restricted. Use dry-run de servidor e registre a rejeição.
  - Exercício 2: Tente gravar /teste no processo-restrito e explique o erro; não remova os controles.
  - Exercício 3: Liste dois motivos pelos quais trocar UID pode quebrar uma imagem.
- Aula 21: **NetworkPolicy e comprovação de isolamento** — Declarar uma política e reconhecer a dependência da implementação de rede. (6 h)
  - Exercício 1: Identifique o CNI do seu cluster e encontre a documentação de suporte a NetworkPolicy.
  - Exercício 2: Para app=protegida, descreva um cliente autorizado e outro não autorizado, com a mesma requisição HTTP.
  - Exercício 3: Explique por que bloquear toda saída pode quebrar consultas DNS mesmo quando a API de destino é permitida.

**Projeto:** Revisão de segurança por evidências

- ServiceAccount com acesso de leitura limitado ao namespace.
- Manifesto compatível com controles Restricted.
- Política de rede e plano de teste com CNI compatível.

**Critérios de conclusão**

- kubectl auth can-i demonstra uma permissão concedida e outra negada.
- Container usa usuário não root, seccomp e capabilities reduzidas.
- A existência de NetworkPolicy não é tratada como prova de bloqueio.

## Nível 08 — Diagnóstico e recuperação

Investigue falhas usando eventos, estado, logs e rede.

**Aulas e objetivos**

- Aula 22: **Eventos, imagens e falhas de inicialização** — Construir uma sequência de investigação antes de tentar corrigir. (6 h)
  - Exercício 1: Cole a mensagem real do evento de pull e explique quais partes apontam para tag ou acesso.
  - Exercício 2: Remova apenas imagem-falha e recrie com nginx:stable-alpine. Espere Ready.
  - Exercício 3: Compare esse incidente com Pending por nodeSelector.
- Aula 23: **Logs anteriores e CrashLoopBackOff** — Investigar encerramento do processo sem tratar reinícios como solução. (6 h)
  - Exercício 1: Localize lastState.terminated.exitCode e a contagem de reinícios.
  - Exercício 2: Recrie somente processo-falha com comando que imprime configuracao-ok e dorme. Observe estabilidade.
  - Exercício 3: Proponha uma mensagem que diga qual chave falta sem imprimir seu valor.
- Aula 24: **Diagnóstico de Services e rede** — Isolar DNS, seleção de endpoints, porta e resposta da aplicação. (6 h)
  - Exercício 1: Capture o seletor errado, labels reais e EndpointSlices depois da correção.
  - Exercício 2: Use Service separado rede-porta com targetPort 81 e explique a diferença do erro de seletor.
  - Exercício 3: Defina quais permissões um cliente de diagnóstico precisa e por que não deve receber cluster-admin.

**Projeto:** Caderno de incidentes reproduzíveis

- Três falhas controladas: imagem, processo e seletor.
- Linha do tempo com evidência e hipótese para cada falha.
- Correção pequena e verificação após recuperação.

**Critérios de conclusão**

- A investigação preserva a mensagem original do erro.
- Logs anteriores e eventos são usados quando apropriado.
- Você prova a recuperação pela rota que falhava.

## Nível 09 — Entrega declarativa

Empacote, customize e revise mudanças antes de reconciliá-las.

**Aulas e objetivos**

- Aula 25: **Kustomize e overlays** — Renderizar uma base com diferenças de ambiente sem duplicar tudo. (6 h)
  - Exercício 1: Faça overlay teste- sem editar a base e compare nomes renderizados.
  - Exercício 2: Salve a renderização e identifique nome, namespace e data antes de aplicar.
  - Exercício 3: Explique qual alteração pertence à base e qual pertence apenas a dev.
- Aula 26: **Helm: chart, values e release** — Criar um chart mínimo, renderizar e instalar uma release local. (6 h)
  - Exercício 1: Faça upgrade com modo=revisao e confirme o ConfigMap.
  - Exercício 2: Liste history da release e identifique as revisões.
  - Exercício 3: Escreva o que verificaria antes de instalar chart de terceiros.
- Aula 27: **GitOps, drift e promoção de mudanças** — Separar versionamento, entrega manual e reconciliação contínua. (6 h)
  - Exercício 1: Altere só a chave revisao do ConfigMap via patch, execute diff e depois restaure pelo arquivo.
  - Exercício 2: Defina um fluxo dev → revisão → produção com aprovação e imagem imutável.
  - Exercício 3: Explique como uma mudança emergencial manual deve ser incorporada ao Git.

**Projeto:** Entrega local versionada

- Base e overlay de Kustomize com diferença visível.
- Chart Helm mínimo renderizado e validado antes de instalar.
- Fluxo de pull request e plano de reconciliação GitOps.

**Critérios de conclusão**

- Segredos não são gravados nos values versionados.
- Manifesto renderizado é o objeto da revisão.
- Aplicar manualmente arquivos de Git não é chamado de GitOps completo.

## Nível 10 — Observabilidade e escala

Use sinais e pré-requisitos corretos para observar e escalar.

**Aulas e objetivos**

- Aula 28: **Logs, métricas e traces** — Relacionar sinais à pergunta operacional e ao caminho do usuário. (6 h)
  - Exercício 1: Proponha um indicador de sucesso para a rota principal da sua API.
  - Exercício 2: Faça HTTP por port-forward e procure o evento correspondente no log do web.
  - Exercício 3: Explique o que perderia ao apagar o Pod sem coleta central de logs.
- Aula 29: **HPA e pré-requisitos de métricas** — Configurar autoscaling/v2 sem prometer escala a partir de métricas ausentes. (6 h)
  - Exercício 1: Liste a API de métricas e tente kubectl top pods. Registre indisponibilidade em vez de inventar valores.
  - Exercício 2: Com request de 100m, qual uso médio corresponde a 60%?
  - Exercício 3: Planeje um teste local que acompanhe CPU, desiredReplicas e latência com limite de duração.
- Aula 30: **Rollout, reversão e orçamento de interrupção** — Combinar estratégia de atualização, readiness e PDB sem garantias indevidas. (6 h)
  - Exercício 1: Mude só rollout-web para tag fictícia, observe a nova revisão bloqueada e depois execute rollout undo.
  - Exercício 2: Calcule o pico de réplicas para desejado 2 e maxSurge 1.
  - Exercício 3: Dê um exemplo de mudança que rollout undo não desfaz.

**Projeto:** Painel de evidências e escala

- Relatório de logs, eventos e métricas disponíveis.
- HPA autoscaling/v2 com requests e pré-requisito de métricas.
- PDB e estratégia de rollout justificados para a aplicação.

**Critérios de conclusão**

- Métrica ausente é diagnosticada antes de atribuir falha ao HPA.
- Escala é validada com carga e observação, quando houver metrics-server.
- PDB não é apresentado como garantia contra toda indisponibilidade.

## Nível 11 — Operação e recuperação

Planeje manutenção, compatibilidade e backups testáveis.

**Aulas e objetivos**

- Aula 31: **Cordon, drain e manutenção de nós** — Entender evacuação segura e os limites do cluster de um nó. (6 h)
  - Exercício 1: Compare os Pods antes e durante cordon sem removê-los.
  - Exercício 2: Escreva pré-verificações para evacuar um nó de um cluster com mais de um nó.
  - Exercício 3: Explique o que ocorre ao evacuar o único nó do seu kind.
- Aula 32: **Atualizações e compatibilidade de APIs** — Planejar versões e detectar dependências antes de atualizar. (6 h)
  - Exercício 1: Liste apiVersion e kind dos recursos principais do seu projeto.
  - Exercício 2: Escolha um par de versões pretendidas e confira a política oficial.
  - Exercício 3: Planeje recriar a aplicação em um segundo cluster local sem perder dados fictícios.
- Aula 33: **Backups, etcd e restauração testada** — Separar configurações, dados da aplicação e estado do control plane. (6 h)
  - Exercício 1: Liste onde estão manifests, Secret, dados de aplicação e estado de control plane, com método de recuperação.
  - Exercício 2: Repita o exercício do arquivo fictício em PVC novo e registre tempo e verificação do conteúdo.
  - Exercício 3: Escolha objetivos didáticos para sua API local e explique como testá-los.

**Projeto:** Runbook de operação do laboratório

- Simulação segura de cordon/uncordon no cluster de estudo.
- Plano de upgrade com versões compatíveis e APIs usadas.
- Matriz de backup: manifests, dados de aplicação e estado do control plane.

**Critérios de conclusão**

- Nenhuma manutenção é aplicada a contexto de produção.
- Plano inclui verificação, ordem e critérios de interrupção.
- Uma restauração de dado fictício é demonstrada em destino separado.

## Nível 12 — Extensibilidade e projeto final

Entenda CRDs e operators e integre a trilha numa entrega verificável.

**Aulas e objetivos**

- Aula 34: **CRDs e validação de novos recursos** — Adicionar um contrato de API sem confundi-lo com um controlador funcional. (6 h)
  - Exercício 1: Tente aplicar outro NotaEstudo com nota 11 usando dry-run=server.
  - Exercício 2: Liste api-resources do grupo forge.example.com e identifique escopo e kind.
  - Exercício 3: Proponha como adicionar um campo opcional comentario sem invalidar os registros existentes.
- Aula 35: **Operators, ownership e arquitetura** — Avaliar quando automatizar operação com controller e como evitar efeitos duplicados. (6 h)
  - Exercício 1: Para um recurso Relatorio, escreva estados e passos de geração com chave idempotente.
  - Exercício 2: Liste quais APIs um controller simples precisaria ler e escrever.
  - Exercício 3: Compare resolver configuração de sua API com ConfigMap versus CRD+controller.
- Aula 36: **Projeto final: entregar, observar e recuperar** — Consolidar uma aplicação local com critérios de conclusão baseados em evidências. (6 h)
  - Exercício 1: Acesse a página, altere conteúdo via ConfigMap e explique como o processo percebe a mudança.
  - Exercício 2: Remova apenas um Pod app=entrega e demonstre reconciliação com requisições repetidas locais.
  - Exercício 3: Consolide manifests/overlay, acesso, teste de dados em PVC, RBAC, controles de Pod, política de rede e runbook.

**Projeto:** Aplicação operacional em kind

- Repositório com manifests/overlays, aplicação e instruções locais.
- Provas de rollout, acesso, persistência e controles de segurança.
- Runbook de incidentes, recuperação e decisões de produção pendentes.

**Critérios de conclusão**

- Uma máquina limpa consegue reproduzir o cenário com pré-requisitos explícitos.
- As evidências correspondem aos critérios, sem apenas marcar checkboxes.
- Você separa o que foi implementado localmente do que exigiria operação de produção.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [Conceitos e componentes](https://kubernetes.io/docs/concepts/overview/components/) — API declarativa, control plane, nós e objetos.
- [kind: laboratório local](https://kind.sigs.k8s.io/docs/user/quick-start/) — Criação, versões e requisitos do cluster local.
- [Workloads e Pods](https://kubernetes.io/docs/concepts/workloads/) — Ciclo de vida e controladores de aplicações.
- [Rede de serviços](https://kubernetes.io/docs/concepts/services-networking/) — Services, DNS e caminhos de acesso.
- [Gateway API](https://kubernetes.io/docs/concepts/services-networking/gateway/) — Tipos adicionais e implementações compatíveis.
- [NetworkPolicy](https://kubernetes.io/docs/concepts/services-networking/network-policies/) — Modelo, limitações e dependência de implementação.
- [Cilium em kind](https://docs.cilium.io/en/stable/installation/kind/) — Guia de CNI compatível para laboratório separado de políticas.
- [Segurança de Pods](https://kubernetes.io/docs/concepts/security/pod-security-standards/) — Controles dos padrões Baseline e Restricted.
- [Armazenamento persistente](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) — PVC, PV, classes e retenção.
- [Kustomize](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/) — Bases, overlays e renderização com kubectl.
- [Helm](https://helm.sh/docs/intro/using_helm/) — Charts, values e releases.
- [OpenGitOps](https://opengitops.dev/) — Princípios de estado versionado e reconciliação contínua.
- [Version skew](https://kubernetes.io/releases/version-skew-policy/) — Compatibilidade entre componentes Kubernetes.
- [CRDs e operators](https://kubernetes.io/docs/concepts/extend-kubernetes/custom-resources/) — Extensão da API e automação de reconciliação.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Reconciliar e localizar o serviço

Um Deployment roda duas réplicas no namespace treino. Um Service deve alcançá-las por labels e consumidores de outro namespace precisam usar o endereço correto.

**Aulas necessárias**

- Aula 02 — Objetos, YAML e reconciliação
- Aula 03 — Namespaces, labels e consultas
- Aula 04 — Pods e ciclo de vida
- Aula 05 — Deployments e réplicas
- Aula 07 — Services e descoberta por seletores
- Aula 08 — DNS e comunicação entre namespaces

**Conceitos combinados:** Reconciliação; Labels e endpoints; DNS por namespace.

### Combo 2 — Prontidão, configuração e dados

Uma API lê configuração e credencial por mecanismos separados, usa PVC para seu estado e não deve receber tráfego enquanto inicializa. O cluster tem recursos limitados.

**Aulas necessárias**

- Aula 10 — ConfigMaps e atualização de configuração
- Aula 11 — Secrets e mínimo acesso
- Aula 12 — Readiness, liveness e startup probes
- Aula 13 — Requests, limits e unidades
- Aula 17 — PVC, StorageClass e retenção
- Aula 18 — StatefulSet e recuperação de dados

**Conceitos combinados:** Configuração e segredo; Probes; PVC e recursos.

### Combo 3 — Isolamento verificável e mudança declarativa

A equipe limita privilégios de uma aplicação, define NetworkPolicy e promove mudanças por uma fonte declarativa. Uma conexão proibida ainda funciona no kind.

**Aulas necessárias**

- Aula 19 — ServiceAccounts e RBAC
- Aula 20 — Pod Security e execução sem root
- Aula 21 — NetworkPolicy e comprovação de isolamento
- Aula 22 — Eventos, imagens e falhas de inicialização
- Aula 24 — Diagnóstico de Services e rede
- Aula 27 — GitOps, drift e promoção de mudanças

**Conceitos combinados:** RBAC; Segurança do Pod; Política de rede e drift.

### Combo 4 — Escalar, drenar e recuperar

O portal recebe carga variável. A equipe prepara HPA, rollout e manutenção de nós, e precisa demonstrar uma recuperação sem confundir réplicas com backup.

**Aulas necessárias**

- Aula 28 — Logs, métricas e traces
- Aula 29 — HPA e pré-requisitos de métricas
- Aula 30 — Rollout, reversão e orçamento de interrupção
- Aula 31 — Cordon, drain e manutenção de nós
- Aula 33 — Backups, etcd e restauração testada
- Aula 36 — Projeto final: entregar, observar e recuperar

**Conceitos combinados:** Métricas e HPA; Rollout e manutenção; Recuperação.

### Projeto final — Portal de reservas em cluster local com operação demonstrada

Entregue um portal HTTP de reservas no kind, com manifests versionados, dados fictícios e procedimentos de operação. Separe o que foi realmente ensaiado no laboratório do que apenas foi projetado para outro ambiente.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Declarar namespace, Deployment e Service com selectors coerentes e referência de imagem identificável.
- Separar ConfigMaps e Secrets, usar ServiceAccount própria e permissões compatíveis com a função da aplicação.
- Configurar probes, requests/limits e demonstrar agendamento e prontidão sob uma carga conhecida.
- Persistir o estado necessário usando armazenamento compatível com o laboratório e documentar suas limitações.
- Produzir uma mudança de versão, observar rollout e demonstrar reversão compatível, além de planejar manutenção com PDB quando aplicável.
- Restaurar cópia do estado num destino de teste e validar dados e serviço; comprovar NetworkPolicy somente se o CNI a aplicar.

**Entregáveis**

- Manifests base e overlays/values escolhidos, sem credenciais reais, com versões e pré-requisitos do kind.
- README com comandos de criação, acesso, diagnóstico, atualização e limpeza do laboratório.
- Relatório de testes de serviço, probes, recursos, permissões e rede com saídas reais.
- Runbook de mudança, manutenção e restauração com escopo, resultados, tempo e limitações.

**Critérios práticos**

- **Objetos reconciliáveis:** Labels, selectors, namespace e controladores correspondem ao desenho e à fonte versionada.
- **Configuração e acesso:** Identidades e dados de configuração estão separados; ações recusadas são verificadas.
- **Prontidão e capacidade:** Probes e recursos foram conferidos no comportamento observado, sem prometer escala não testada.
- **Estado persistente:** A montagem e o ciclo de vida dos dados foram testados; PVC não é tratado como backup.
- **Diagnóstico e isolamento:** Falhas de serviço e políticas foram investigadas com evidência e pré-requisitos reais.
- **Mudança e recuperação:** Rollout/reversão e destino restaurado têm evidências distintas, com limites de manutenção e compatibilidade.

**Testes de aceitação para executar localmente**

#### Descoberta e prontidão

- Preparação: Crie o cluster e o namespace com a aplicação e seu Service.
- Entrada/ação: Consulte endpoints e faça requisições durante a inicialização e após readiness.
- Resultado esperado: O Service aponta para os Pods esperados; tráfego útil só é encaminhado conforme prontidão e a consulta retorna um marcador conhecido.

#### Privilégio e rede

- Preparação: Use uma ServiceAccount restrita e um CNI capaz de aplicar NetworkPolicy, se esse ensaio fizer parte da entrega.
- Entrada/ação: Execute uma ação autorizada e outra negada; teste conexão permitida e proibida.
- Resultado esperado: Resultados correspondem às regras; se o CNI não aplicar políticas, registre a etapa de rede como não comprovada em vez de aprovada.

#### Reabrir estado e versão

- Preparação: Crie reservas fictícias e preserve a cópia de recuperação antes da mudança.
- Entrada/ação: Substitua Pod, faça uma mudança/reversão controlada e restaure os dados num destino separado.
- Resultado esperado: Persistência após substituição e recuperação independente são verificadas separadamente; as reservas e a versão esperada funcionam no destino.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
