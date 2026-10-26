# Plano de ensino — Docker

Containers do primeiro comando à entrega e recuperação de uma aplicação local.

**Carga estimada:** 144 horas. **Ritmo base:** 8 h/semana.
**Estrutura:** 12 níveis, 36 aulas, 108 exercícios, 36 checagens e 12 projetos.
**Gamificação:** XP, níveis de experiência, medalhas e 12 desafios finais.

## Antes de começar

- Uso básico de terminal e arquivos.
- Windows com virtualização e WSL2 ou Linux com Docker Engine.
- Acesso à internet para obter imagens e espaço em disco para o laboratório.

As durações incluem estudo, exercícios, revisão e projetos. São estimativas, sem promessa de senioridade.
Escolha uma trilha principal; as horas de cursos diferentes não cabem automaticamente na mesma semana.

## Níveis e entregas

| Nível | Foco | Horas | Semanas a 8 h/semana | Projeto |
| --- | --- | ---: | --- | --- |
| 01 | Ambiente e primeiros containers | 12 | 1–2 | Laboratório de apresentação |
| 02 | Imagens e Dockerfile | 12 | 2–3 | Imagem de uma página de estudo |
| 03 | Arquivos e persistência | 12 | 4–5 | Caderno persistente |
| 04 | Redes e conectividade | 12 | 5–6 | Dois serviços em rede local |
| 05 | Aplicações com Compose | 12 | 7–8 | Aplicação declarativa de estudo |
| 06 | BuildKit e builds eficientes | 12 | 8–9 | Imagem mínima e build auditável |
| 07 | Segurança e limites | 12 | 10–11 | Execução com permissões reduzidas |
| 08 | Diagnóstico e comportamento | 12 | 11–12 | Manual de diagnóstico |
| 09 | Buildx e distribuição de artefatos | 12 | 13–14 | Pacote local multiplataforma |
| 10 | Testes, CI e supply chain | 12 | 14–15 | Pipeline reproduzível local |
| 11 | Operação e recuperação | 12 | 16–17 | Ensaio de operação |
| 12 | Projeto final e especialização | 12 | 17–18 | Oficina Containers |

## Nível 01 — Ambiente e primeiros containers

Entenda cliente, daemon, imagens e processos e execute seu primeiro laboratório.

**Aulas e objetivos**

- Aula 01: **Instalação, daemon e contexto** — Confirmar que cliente e servidor Docker estão acessíveis e identificar o ambiente utilizado. (4 h)
  - Exercício 1: Registre o contexto selecionado, a versão do cliente e do servidor e o backend utilizado. Explique onde o processo Linux será executado.
  - Exercício 2: Explique o diagnóstico para: comando docker não encontrado; Client aparece e Server falha; servidor informa Windows quando o laboratório pede Linux.
  - Exercício 3: Crie uma pasta docker-forge no WSL2 ou Linux e registre em um README a sequência de verificação do ambiente.
- Aula 02: **Criar, iniciar, parar e remover** — Relacionar o ciclo de vida do container ao processo principal e inspecionar o resultado. (4 h)
  - Exercício 1: Crie dkr-a02-um e dkr-a02-dois da mesma imagem e faça cada um imprimir uma mensagem diferente. Inspecione os estados e remova apenas os dois.
  - Exercício 2: Execute uma instância de laboratório com sh -c "exit 7" e registre o ExitCode. Compare com echo.
  - Exercício 3: Compare docker start -a em uma instância parada com repetir docker run --name usando o mesmo nome.
- Aula 03: **Processos, terminal e primeira porta** — Executar um serviço contínuo e diferenciar porta do host e porta interna. (4 h)
  - Exercício 1: Publique outra instância do nginx em 127.0.0.1:8084:80 e compare docker port nas duas.
  - Exercício 2: Tente criar uma segunda instância na porta do host já ocupada. Registre a mensagem e limpe apenas a instância de teste, se criada.
  - Exercício 3: Compare docker run -d busybox:1.37 echo oi com o nginx. Por que apenas um permanece ativo?

**Projeto:** Laboratório de apresentação

- Roteiro de instalação usado no Windows/WSL2 ou Linux.
- Container que imprime seu nome e termina com código zero.
- Registro de version, context e inspeção do processo.

**Critérios de conclusão**

- Distingue cliente e servidor no docker version.
- Explica por que o container terminou.
- Remove apenas o container do próprio laboratório.

## Nível 02 — Imagens e Dockerfile

Construa uma imagem, controle o contexto e diferencie configuração de execução.

**Aulas e objetivos**

- Aula 04: **Contexto de build e COPY** — Construir uma imagem de página estática e controlar os arquivos enviados ao builder. (4 h)
  - Exercício 1: Altere o título para seu objetivo de estudo, faça outro build com tag :2 e compare a saída das duas imagens.
  - Exercício 2: Em uma cópia da pasta, renomeie index.html e rode o build sem mudar COPY. Explique a falha.
  - Exercício 3: Adicione um arquivo .env fictício e um arquivo temporário. Explique o efeito do .dockerignore e de COPY seletivo.
- Aula 05: **CMD, ENTRYPOINT, WORKDIR e USER** — Entender a configuração de execução da imagem sem confundir build e runtime. (4 h)
  - Exercício 1: Troque CMD para uma mensagem sua e reconstrua. Rode com e sem argumento depois da imagem.
  - Exercício 2: Use --entrypoint id na imagem para consultar a identidade do processo.
  - Exercício 3: Use --entrypoint sh e tente criar /teste como USER 10001. Registre por que falha e proponha um diretório próprio.
- Aula 06: **Tags, identidade e atualização** — Diferenciar nomes mutáveis, IDs locais e referências por digest. (4 h)
  - Exercício 1: Copie uma referência de RepoDigests da sua saída e execute echo usando-a no lugar da tag.
  - Exercício 2: Escreva três verificações antes de trocar a base da sua página por outra versão.
  - Exercício 3: Liste um container já criado e a referência de imagem dele. Explique se mover uma tag altera automaticamente o processo existente.

**Projeto:** Imagem de uma página de estudo

- Dockerfile com COPY seletivo e .dockerignore.
- Página estática servida pela imagem construída.
- Registro de tag, ID e digest quando disponível.

**Critérios de conclusão**

- Nenhuma credencial é enviada no contexto.
- Explica a função de FROM, COPY e CMD.
- Reproduz o build em uma pasta nova.

## Nível 03 — Arquivos e persistência

Escolha entre camada gravável, bind mount e volume e pratique restauração.

**Aulas e objetivos**

- Aula 07: **Bind mounts e edição no host** — Compartilhar arquivos de laboratório com um container e controlar escrita. (4 h)
  - Exercício 1: Tente acrescentar uma linha no arquivo pelo mesmo mount readonly e registre a falha.
  - Exercício 2: Use --mount para apontar a um diretório que não existe dentro desta pasta de laboratório. Compare com o caminho correto.
  - Exercício 3: Explique o resultado de montar uma pasta vazia sobre /usr/share/nginx/html em uma instância de teste.
- Aula 08: **Volumes e ciclo de vida dos dados** — Persistir dados em volume nomeado e recuperá-los após remover a instância. (4 h)
  - Exercício 1: Grave uma segunda nota no volume e leia em um terceiro container efêmero.
  - Exercício 2: Crie dkr-a08-vazio e compare a leitura nele com a leitura no volume de dados.
  - Exercício 3: Escreva um procedimento para remover apenas os dois volumes da aula depois de guardar as evidências.
- Aula 09: **Backup de arquivos e restauração** — Copiar dados inativos e comprovar a restauração em um volume separado. (4 h)
  - Exercício 1: Acrescente três linhas distintas antes do backup e compare o arquivo restaurado byte a byte usando um container com os dois volumes readonly.
  - Exercício 2: Faça outra cópia contendo só um dos dois arquivos criados no volume de teste. Mostre como sua verificação detecta a ausência.
  - Exercício 3: Explique por que a mesma receita tar não basta para um banco recebendo transações.

**Projeto:** Caderno persistente

- Diretório de conteúdo montado somente para leitura.
- Volume nomeado com anotações que sobrevivem à recriação.
- Backup tar restaurado em outro volume de laboratório.

**Critérios de conclusão**

- Distingue ciclo de vida do container e dos dados.
- Compara o conteúdo restaurado, não só a existência do tar.
- Não remove volumes externos ao laboratório.

## Nível 04 — Redes e conectividade

Conecte serviços por nome, limite exposição e investigue falhas de rede.

**Aulas e objetivos**

- Aula 10: **Bridge própria e DNS interno** — Conectar cliente e servidor por nome sem publicar portas no host. (4 h)
  - Exercício 1: Crie outro servidor nesta rede com --network-alias pagina e acesse http://pagina por um cliente efêmero.
  - Exercício 2: Tente resolver o servidor em um cliente que não esteja na bridge criada. Registre a diferença.
  - Exercício 3: Liste os containers conectados à bridge e explique se isso os torna acessíveis pela internet.
- Aula 11: **Publicação restrita e EXPOSE** — Relacionar endereço de escuta, mapeamento e alcance do acesso. (4 h)
  - Exercício 1: Crie uma instância do nginx sem -p e compare docker port com a instância publicada.
  - Exercício 2: Publique a porta do host para 81 interna, mantendo nginx na configuração padrão. Explique o resultado.
  - Exercício 3: Desenhe em palavras o caminho de uma requisição para 127.0.0.1:8111.
- Aula 12: **Diagnóstico de nome, rede e porta** — Localizar uma falha de conectividade sem trocar configurações aleatoriamente. (4 h)
  - Exercício 1: Troque o nome do destino por um nome inexistente e registre a diferença em relação à porta 81.
  - Exercício 2: Pare dkr-a12-web e repita os testes. Registre como ps -a e inspect ajudam a interpretar a mudança.
  - Exercício 3: Escreva um procedimento de cinco passos para investigar indisponibilidade HTTP de um container.

**Projeto:** Dois serviços em rede local

- Bridge própria com serviço HTTP e cliente efêmero.
- Acesso do host por porta publicada apenas em loopback.
- Registro de diagnóstico para nome, porta e rede incorretos.

**Critérios de conclusão**

- Cliente usa nome de serviço na rede correta.
- Distingue porta do host da porta do container.
- Explica por que localhost muda entre processos.

## Nível 05 — Aplicações com Compose

Descreva aplicações com vários serviços e separe configuração, dados e prontidão.

**Aulas e objetivos**

- Aula 13: **Seu primeiro compose.yaml** — Descrever serviços declarativamente e executar o mesmo projeto de forma repetível. (4 h)
  - Exercício 1: Adicione um serviço verificar com busybox:1.37 e comando wget para http://web. Execute-o com docker compose run --rm verificar.
  - Exercício 2: Execute o projeto com outro nome e outra porta do host. Explique quais recursos ficam separados.
  - Exercício 3: Em uma cópia do arquivo, coloque ports fora do serviço e rode config. Corrija a estrutura.
- Aula 14: **Configuração e variáveis de ambiente** — Diferenciar interpolação do Compose e ambiente dentro do processo. (4 h)
  - Exercício 1: Renomeie .env temporariamente dentro da pasta da aula e execute o serviço. Registre o valor padrão.
  - Exercício 2: Mude a expressão para ${ALUNO:?Defina ALUNO} e faça um teste sem a variável.
  - Exercício 3: Prepare .env.example com nomes e valores fictícios e uma regra para manter .env fora do controle de versão.
- Aula 15: **Healthcheck e dependências prontas** — Esperar prontidão no início e compreender o que depends_on não resolve. (4 h)
  - Exercício 1: Troque somente PGPASSWORD do consumidor em uma cópia do projeto e observe a diferença entre banco saudável e consulta recusada.
  - Exercício 2: Explique uma limitação de testar apenas se um processo existe como healthcheck. Proponha um teste melhor para HTTP.
  - Exercício 3: Escreva o comportamento esperado de um cliente quando db for reiniciado após a partida.

**Projeto:** Aplicação declarativa de estudo

- compose.yaml com serviço web, rede e volume.
- Variáveis com padrões locais e .env.example sem segredos reais.
- Dependência com condition: service_healthy e teste de recuperação.

**Critérios de conclusão**

- docker compose config valida a configuração.
- Distingue interpolação no YAML e ambiente do processo.
- Explica limites de depends_on após a inicialização.

## Nível 06 — BuildKit e builds eficientes

Separe compilação de execução e use cache e segredos de build com intenção.

**Aulas e objetivos**

- Aula 16: **Build multi-stage** — Separar ferramentas de compilação do artefato que vai executar. (4 h)
  - Exercício 1: Construa --target builder com outra tag e compare o tamanho com a imagem final.
  - Exercício 2: Altere a mensagem no código e construa nova tag. Confirme que não está executando a tag anterior.
  - Exercício 3: Explique por que remover -static sem revisar a base pode quebrar o runtime scratch.
- Aula 17: **Cache por camada e cache mount** — Organizar o Dockerfile para não repetir trabalho sem necessidade e medir a reutilização. (4 h)
  - Exercício 1: Altere só a mensagem de app.py e repita o build. Identifique até qual etapa houve cache.
  - Exercício 2: Crie um Dockerfile alternativo que faça COPY . . antes da instalação e compare após mudar app.py.
  - Exercício 3: Explique por que uma etapa CACHED não elimina a necessidade de testar a nova entrega.
- Aula 18: **Segredos temporários no build** — Consumir um valor fictício por secret mount sem copiá-lo para a imagem. (4 h)
  - Exercício 1: Em um build sem cache, omita --secret e observe o efeito de required=true.
  - Exercício 2: Explique por que ARG TOKEN seguido de curl com token não é a alternativa recomendada.
  - Exercício 3: Explique por que esse secret mount não entrega automaticamente a senha à aplicação iniciada depois.

**Projeto:** Imagem mínima e build auditável

- Dockerfile multi-stage com artefato final sem compilador.
- Medição de dois builds e explicação do cache.
- Segredo fictício recebido por secret mount sem cópia para a imagem.

**Critérios de conclusão**

- Imagem final executa o artefato esperado.
- Mostra qual alteração invalida qual etapa.
- Não utiliza ARG/ENV para credenciais.

## Nível 07 — Segurança e limites

Reduza permissões e recursos e compreenda a superfície do daemon.

**Aulas e objetivos**

- Aula 19: **Memória, CPU e quantidade de processos** — Aplicar limites explícitos e conferir se o ambiente os suporta. (4 h)
  - Exercício 1: Crie outra instância de sleep com limites diferentes e compare inspect e stats.
  - Exercício 2: Escreva um roteiro de investigação para um container que para com OOMKilled=true, sem provocar exaustão no host.
  - Exercício 3: Se cinco serviços têm limite de 1 GiB num host pequeno, isso garante que todos funcionarão? Justifique.
- Aula 20: **Filesystem restrito e capabilities** — Executar um processo sem root e reduzir permissões ao necessário. (4 h)
  - Exercício 1: Repita a receita sem --tmpfs e observe a tentativa de escrita em /tmp.
  - Exercício 2: Explique o que mudaria se /tmp/nota precisasse sobreviver à remoção do container.
  - Exercício 3: Analise um serviço que pede --privileged apenas para ler um arquivo de configuração. Proponha alternativa.
- Aula 21: **Rootless e proteção do daemon** — Distinguir permissões internas e controle do daemon e avaliar rootless sem expor sockets. (4 h)
  - Exercício 1: Compare USER, cap-drop, rootless e acesso ao socket em uma tabela com o que cada controle afeta.
  - Exercício 2: Leia a página oficial rootless e registre se seu Linux tem os pré-requisitos. No Desktop/Windows, documente a diferença em vez de alterar a instalação.
  - Exercício 3: Proponha como obter logs da aplicação sem conceder a ela o socket Docker.

**Projeto:** Execução com permissões reduzidas

- Serviço executado por usuário não root.
- Configuração com limites, filesystem somente leitura e tmpfs necessário.
- Comparação documentada entre USER, daemon rootful e rootless.

**Critérios de conclusão**

- Processo funciona sem --privileged.
- Somente diretórios necessários aceitam escrita.
- Nenhum socket Docker é montado na aplicação.

## Nível 08 — Diagnóstico e comportamento

Observe logs e métricas, investigue falhas e encerre processos corretamente.

**Aulas e objetivos**

- Aula 22: **Logs, rotação e métricas** — Coletar evidências de execução sem encher disco nem registrar segredos. (4 h)
  - Exercício 1: Defina um formato de linha para registrar uma tentativa HTTP com identificador de requisição, status e duração, sem dados pessoais.
  - Exercício 2: Explique três motivos para logs vazios sem concluir que o serviço está saudável.
  - Exercício 3: Estime a ordem de grandeza de armazenamento por container com max-size=5m e max-file=3 e discuta por que não é contabilidade exata.
- Aula 23: **Inspect, exec e investigação de falhas** — Reunir estado e evidência antes de modificar uma instância com problema. (4 h)
  - Exercício 1: Execute uma instância BusyBox tentando chamar um comando fictício e compare com o código 23.
  - Exercício 2: Mostre só nome, imagem e estado usando --format, sem copiar todo inspect para um lugar público.
  - Exercício 3: Escreva o que precisa registrar para reproduzir uma falha que só acontece em outra máquina.
- Aula 24: **Sinais, PID 1 e saúde** — Encerrar um serviço de modo previsível e distinguir saúde de reinício automático. (4 h)
  - Exercício 1: Adapte o trap do laboratório para simular uma limpeza curta com sleep 2 antes de sair. Compare com timeout 5.
  - Exercício 2: Compare CMD ["programa", "arg"] com CMD programa arg no Dockerfile.
  - Exercício 3: Defina um healthcheck para HTTP e descreva quem tomará uma decisão após falhas repetidas no seu laboratório.

**Projeto:** Manual de diagnóstico

- Registro de logs com rotação e métricas de uma execução.
- Reprodução de falha de processo, porta e permissão.
- Teste de parada graciosa e explicação de health status.

**Critérios de conclusão**

- Investiga ExitCode/OOMKilled em vez de só reiniciar.
- Não inclui segredos nos registros.
- Distingue container rodando, saudável e aplicação correta.

## Nível 09 — Buildx e distribuição de artefatos

Controle builder, plataformas, Bake e exportação de cache sem serviços pagos.

**Aulas e objetivos**

- Aula 25: **Builders e imagens multi-platform** — Produzir variantes para arquiteturas diferentes e distinguir índice, build e execução. (4 h)
  - Exercício 1: Registre as plataformas informadas pelo builder e compare com a arquitetura do servidor Docker.
  - Exercício 2: Explique a diferença entre exportador oci e exportador local.
  - Exercício 3: Escreva um plano para validar uma aplicação compilada em amd64 e arm64.
- Aula 26: **Bake e alvos declarativos** — Descrever mais de uma configuração de build sem duplicar comandos longos. (4 h)
  - Exercício 1: Execute apenas o alvo estudo e explique a diferença para executar o grupo default.
  - Exercício 2: Altere a tag de entrega e use --print antes de construir. Registre a mudança resolvida.
  - Exercício 3: Proponha um grupo teste que inclua um alvo de testes e aponte como falhas devem bloquear a entrega.
- Aula 27: **Cache externo e resultado de build** — Exportar e reutilizar cache local sem confundir cache e imagem de entrega. (4 h)
  - Exercício 1: Depois de registrar o primeiro build, remova somente o builder da aula, crie outro nome e reutilize cache-primeiro. Observe as linhas de cache.
  - Exercício 2: Explique por que COPY . . junto de cache dentro do contexto pode degradar o build.
  - Exercício 3: Descreva como manter os dois caches do laboratório sem apagar dados de outros projetos.

**Projeto:** Pacote local multiplataforma

- Arquivo OCI com variantes amd64 e arm64.
- Bake com alvos de desenvolvimento e entrega.
- Cache local exportado/reutilizado com medição.

**Critérios de conclusão**

- Explica diferença entre índice e manifest de uma plataforma.
- Distingue exportar artefato e carregar imagem no daemon.
- Não presume suporte a emulação em todo host.

## Nível 10 — Testes, CI e supply chain

Transforme builds em entregas verificáveis e compreenda procedência e componentes.

**Aulas e objetivos**

- Aula 28: **Testes em container e pipeline local** — Fazer uma falha de teste interromper a construção da entrega. (4 h)
  - Exercício 1: Mude a multiplicação para soma em app.py e confirme que o build falha. Restaure a função depois.
  - Exercício 2: Acrescente um teste para quantidade zero e explique o que os três testes ainda não comprovam.
  - Exercício 3: Escreva as etapas mínimas para converter o roteiro numa integração contínua sem publicar nada automaticamente.
- Aula 29: **Registry local e referências de entrega** — Enviar e recuperar uma imagem num registry restrito ao computador de estudo. (4 h)
  - Exercício 1: Registre o digest informado após push e o RepoDigests após pull da referência local.
  - Exercício 2: Pare e recrie apenas o container do registry com o mesmo volume e tente recuperar novamente a imagem.
  - Exercício 3: Explique por que esta receita HTTP em loopback não deve ser publicada como registry de uma equipe.
- Aula 30: **SBOM, provenance e confiança** — Gerar metadados de construção e explicar o que eles comprovam e o que não comprovam. (4 h)
  - Exercício 1: Extraia em uma pasta vazia de laboratório o OCI gerado e identifique index.json e os manifests/blobs referenciados.
  - Exercício 2: Explique em um parágrafo a diferença entre SBOM e provenance usando este build como exemplo.
  - Exercício 3: Defina quatro critérios para aceitar uma imagem de terceiro no projeto final.

**Projeto:** Pipeline reproduzível local

- Script que falha quando um teste ou build falha.
- Imagem distribuída em registry restrito ao localhost.
- Artefato OCI com metadados SBOM e provenance e análise de limites.

**Critérios de conclusão**

- Falha de teste impede etapa de publicação.
- Registra revisão e digest da entrega.
- Explica por que uma SBOM não prova ausência de vulnerabilidades.

## Nível 11 — Operação e recuperação

Atualize de forma controlada, restaure dados e escreva procedimentos de incidente.

**Aulas e objetivos**

- Aula 31: **Compose por ambiente e segredos de runtime** — Separar configuração pública, credenciais e parâmetros locais sem copiar segredos à imagem. (4 h)
  - Exercício 1: Adicione um segundo serviço sem secrets e verifique que ele não encontra /run/secrets/senha_lab.
  - Exercício 2: Prepare dois arquivos de teste com listas de portas e use config para observar o resultado antes de executar.
  - Exercício 3: Descreva como trocar uma credencial de runtime sem reconstruir a imagem e sem registrar o valor no README.
- Aula 32: **Backup lógico de um banco de laboratório** — Restaurar dados fictícios em banco separado e verificar uma consulta. (4 h)
  - Exercício 1: Insira três registros distintos e confira conteúdo e contagem no banco restaurado.
  - Exercício 2: Liste informações necessárias além do dump para restaurar uma aplicação real.
  - Exercício 3: Explique por que deixar backup.sql apenas nesta mesma máquina não cobre falha completa do disco.
- Aula 33: **Atualização, rollback e incidentes** — Ensaiar mudança de imagem e retorno sem prometer reversão automática dos dados. (4 h)
  - Exercício 1: Defina três verificações para promover v2 além de conferir que o container ficou Up.
  - Exercício 2: Configure uma tag inexistente em uma cópia do projeto e escreva o procedimento de recuperação sem apagar volumes.
  - Exercício 3: Explique a limitação de duas réplicas no mesmo host e quando isso motiva estudar Kubernetes ou outra orquestração.

**Projeto:** Ensaio de operação

- Arquivos Compose por ambiente sem segredos versionados.
- Backup lógico de banco fictício restaurado em serviço separado.
- Runbook de atualização e retorno à imagem anterior.

**Critérios de conclusão**

- Testa restauração com consultas e não só com arquivo gerado.
- Documenta compatibilidade da versão da aplicação com o esquema.
- Não promete alta disponibilidade com um único host.

## Nível 12 — Projeto final e especialização

Integre construção, execução, segurança e recuperação em um laboratório independente.

**Aulas e objetivos**

- Aula 34: **Projeto final: contrato e arquitetura** — Planejar o laboratório integrado e transformar requisitos em critérios verificáveis. (4 h)
  - Exercício 1: Transforme os três endpoints do README em cenários com entrada, status e conteúdo esperado.
  - Exercício 2: Justifique volume para banco e filesystem somente leitura para o restante.
  - Exercício 3: Liste três maneiras pelas quais expor o laboratório externamente mudaria o trabalho necessário.
- Aula 35: **Projeto final: implementação local** — Construir e testar uma aplicação persistente com configuração de execução explícita. (4 h)
  - Exercício 1: Registre uma nota, rode docker compose down sem -v, suba app novamente e confira a mesma nota.
  - Exercício 2: Envie POST com JSON sem texto e confirme status 400; consulte uma rota ausente e confirme 404.
  - Exercício 3: Inspecione usuário, portas, mounts, saúde e limites da instância. Relacione cada item a uma linha do compose.yaml.
- Aula 36: **Projeto final: recuperação e revisão** — Restaurar o estado em outro volume, provar os critérios e escolher os próximos estudos. (4 h)
  - Exercício 1: Compare a lista de notas antes da parada com a consulta no volume restaurado. Registre os mesmos IDs e textos.
  - Exercício 2: Investigue UID/GID dos arquivos restaurados antes de apontar a aplicação UID 10001 ao novo volume.
  - Exercício 3: Faça uma revisão final com cinco evidências e duas limitações do projeto.

**Projeto:** Oficina Containers

- Aplicação HTTP, dados persistentes e diagnóstico em Compose local.
- Build reprodutível, teste de fumaça, privilégio mínimo e referências das imagens.
- README de instalação, backup/restauração, atualização e evidências de falha controlada.

**Critérios de conclusão**

- Nova pasta sobe pelo procedimento documentado.
- Recriação preserva dados e restauração foi ensaiada.
- Você justifica limites, portas, permissões e estratégia de atualização.

## Rotina sugerida

- 1 h: teoria, previsão do exemplo e anotações.
- 2 h: execução e variações do exemplo.
- 2 h: exercícios, checagem e revisão dos erros.
- 2 h: projeto do nível.
- 1 h: revisão sem consulta e dúvidas para o chat.

## Como avançar

Conclua as três aulas, os nove exercícios, as checagens e o projeto do nível. Depois resolva o desafio final. Cada atividade concede XP uma única vez. Exercícios e projetos são autoavaliados; quizzes conceituais têm correção automática.

## Fontes oficiais

- [Primeiros passos](https://docs.docker.com/get-started/) — Conceitos de imagens, containers e ciclo de vida.
- [Instalação Windows](https://docs.docker.com/desktop/setup/install/windows-install/) — Requisitos e instalação com WSL2.
- [Dockerfile](https://docs.docker.com/reference/dockerfile/) — Referência das instruções de construção.
- [Compose](https://docs.docker.com/compose/) — Aplicações com múltiplos serviços.
- [Persistência](https://docs.docker.com/engine/storage/volumes/) — Volumes, ciclo de vida e exemplos de backup.
- [Redes](https://docs.docker.com/engine/network/drivers/bridge/) — Bridge e resolução de nomes.
- [BuildKit e Buildx](https://docs.docker.com/build/) — Builds, plataformas e exportação de artefatos.
- [Segredos de build](https://docs.docker.com/build/building/secrets/) — Secret mounts e SSH mounts.
- [Rootless](https://docs.docker.com/engine/security/rootless/) — Daemon e containers sem usuário root no host.
- [Attestations](https://docs.docker.com/build/metadata/attestations/) — Metadados SBOM e provenance e seus limites.

<!-- forge-integrated-assessments -->

## Desafios integradores e projeto final

Cada combo exige a conclusão de todas as aulas indicadas: leitura, três exercícios e checagem correta. As respostas conceituais recebem correção automática e indicação das aulas a revisar. A recompensa de cada atividade é concedida uma vez.

As cargas horárias são estimativas. Distribua os combos, a entrega final e a revisão dentro das sessões de prática; amplie o cronograma quando precisar de mais tempo.

### Combo 1 — Imagem, processo e dados persistentes

Uma equipe publica uma aplicação de anotações. O serviço lê /dados/notas.txt, o processo encerra ao receber SIGTERM e os dados devem sobreviver à troca do container.

**Aulas necessárias**

- Aula 02 — Criar, iniciar, parar e remover
- Aula 03 — Processos, terminal e primeira porta
- Aula 04 — Contexto de build e COPY
- Aula 05 — CMD, ENTRYPOINT, WORKDIR e USER
- Aula 08 — Volumes e ciclo de vida dos dados
- Aula 09 — Backup de arquivos e restauração

**Conceitos combinados:** Imagem e contexto; Processo principal; Volume e recuperação.

### Combo 2 — Aplicação e banco em Compose

Um serviço HTTP e seu banco local devem conversar pela rede interna do Compose. Somente a aplicação precisa ser acessível no host; o build não pode deixar credenciais na imagem.

**Aulas necessárias**

- Aula 10 — Bridge própria e DNS interno
- Aula 11 — Publicação restrita e EXPOSE
- Aula 13 — Seu primeiro compose.yaml
- Aula 14 — Configuração e variáveis de ambiente
- Aula 15 — Healthcheck e dependências prontas
- Aula 18 — Segredos temporários no build

**Conceitos combinados:** DNS por serviço; Publicação restrita; Readiness e segredos.

### Combo 3 — Imagem pequena, processo saudável e limites

A aplicação cresce e passa por builds repetidos. O container deve respeitar memória/CPU, executar com menos privilégios e encerrar sem perder trabalho em andamento.

**Aulas necessárias**

- Aula 16 — Build multi-stage
- Aula 17 — Cache por camada e cache mount
- Aula 19 — Memória, CPU e quantidade de processos
- Aula 20 — Filesystem restrito e capabilities
- Aula 23 — Inspect, exec e investigação de falhas
- Aula 24 — Sinais, PID 1 e saúde

**Conceitos combinados:** Build multi-stage; Recursos e privilégio mínimo; Diagnóstico de encerramento.

### Combo 4 — Entrega reproduzível e recuperação

Uma versão nova foi publicada num registry local. A equipe precisa provar qual imagem executou, detectar uma regressão e recuperar o banco sem depender de uma tag mutável.

**Aulas necessárias**

- Aula 28 — Testes em container e pipeline local
- Aula 29 — Registry local e referências de entrega
- Aula 30 — SBOM, provenance e confiança
- Aula 31 — Compose por ambiente e segredos de runtime
- Aula 32 — Backup lógico de um banco de laboratório
- Aula 33 — Atualização, rollback e incidentes

**Conceitos combinados:** Testes de entrega; Identidade de imagem; Rollback e restauração.

### Projeto final — Serviço de catálogo com entrega e recuperação demonstradas

Entregue um catálogo fictício com uma aplicação HTTP e um banco local. Outra pessoa deve conseguir iniciar a versão documentada, executar os testes, substituir o container e recuperar uma cópia sem credenciais nos arquivos publicados.

**Liberação:** 36 aulas concluídas e quatro combos aprovados. O rascunho pode ser preparado antes.

**Requisitos**

- Construir a imagem da aplicação com estágio final contendo somente artefatos de execução e usuário adequado.
- Executar aplicação e banco por Compose, usando DNS interno e publicando somente a entrada necessária no host.
- Separar configuração, segredos e dados; os dados precisam sobreviver à substituição do container.
- Definir healthcheck, recursos e rotina de encerramento com observação do processo.
- Executar testes locais antes de publicar num registry de laboratório e registrar digest e configuração da entrega.
- Produzir backup lógico, restaurar em destino separado e demonstrar rollback de aplicação com análise de compatibilidade dos dados.

**Entregáveis**

- Dockerfile, .dockerignore e compose.yaml sem credenciais reais.
- README com ambiente, comandos, versão/digest, entradas de teste e limites do laboratório.
- Relatório de testes, prontidão, recursos e encerramento com saídas reais identificadas.
- Runbook de backup, restauração e rollback com evidências do destino recuperado.

**Critérios práticos**

- **Imagem reproduzível:** O contexto exclui arquivos indevidos e o estágio final contém os artefatos definidos.
- **Rede e configuração:** A aplicação usa nomes de serviço, exposição restrita e configuração sem segredos embutidos.
- **Ciclo dos dados:** A substituição do container preserva registros via armazenamento planejado.
- **Processo operável:** Saúde, limites e encerramento possuem ensaios e interpretação, além de configuração declarada.
- **Entrega verificável:** Testes e identidade da imagem permitem reproduzir a versão e investigar regressões.
- **Recuperação demonstrada:** Uma cópia é aberta, conferida e relacionada ao plano de reversão e aos limites reais.

**Testes de aceitação para executar localmente**

#### Dados após substituição

- Preparação: Inicie a stack num diretório de laboratório e crie um item identificável no catálogo.
- Entrada/ação: Substitua o container da aplicação e reinicie o serviço do banco mantendo o volume previsto.
- Resultado esperado: O item continua consultável; registre os IDs de containers e a referência do volume, sem confundir volume com backup.

#### Prontidão e encerramento

- Preparação: Configure o healthcheck e uma operação curta observável na aplicação.
- Entrada/ação: Inicie a stack com banco ainda inicializando e depois solicite encerramento gracioso.
- Resultado esperado: O cliente trata a indisponibilidade inicial; o processo recebe o sinal e encerra dentro do prazo definido, com logs suficientes para conferir.

#### Cópia recuperada e versão exata

- Preparação: Preserve origem, dump e digest da entrega. Crie um banco de restauração vazio separado.
- Entrada/ação: Restaure o dump, execute consultas de domínio e inicie a referência de aplicação compatível com esse estado.
- Resultado esperado: Quantidade/valores conhecidos coincidem no destino e a versão executada corresponde ao digest registrado; divergência permanece uma falha a investigar.

A plataforma corrige as questões conceituais e verifica o preenchimento da entrega. A implementação prática é autoavaliada com evidências dos testes locais: o código não é executado pelo servidor. O plano de revisão aponta as aulas relacionadas aos erros e critérios pendentes.
