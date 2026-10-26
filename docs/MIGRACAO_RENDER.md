# Migração futura para Render

## Situação atual

A Forge Academy funciona como um Worker Vinext com banco Cloudflare D1. O código pode ser versionado no GitHub agora. A hospedagem em Render é uma etapa posterior: o atual `npm start` inicia uma prévia Wrangler local, não um servidor de produção para Render.

Este documento é o roteiro de implementação. Nenhum serviço ou banco Render é criado por ele. O endereço atual continua sendo a instalação ativa até uma migração validada.

## Arquitetura proposta

| Componente | Atual | Destino proposto |
| --- | --- | --- |
| Interface e materiais | `public/learn/`, servidos pelo Worker | Mesmos arquivos estáticos, servidos pelo processo Node |
| API e autenticação | Rotas Vinext e `server/api.mjs` | Servidor HTTP Node com os mesmos contratos `/api/*` |
| Persistência | D1, dialeto SQLite | PostgreSQL com migrações próprias |
| Autenticação do aluno | Usuário, senha e sessão da aplicação | Preservar os hashes scrypt e o login da aplicação |
| Entrada da hospedagem | Gerenciada pelo Sites | URL própria da instalação externa |
| Publicação | Fluxo Sites | Repositório GitHub conectado ao Render |

A escolha de Node e PostgreSQL é uma proposta para esta aplicação. Ela permite manter a maior parte da interface e dos conteúdos, mas exige adaptar o acesso ao banco e a inicialização do servidor.

## Implementação antes do primeiro deploy

1. Extrair o acesso SQL de `server/api.mjs` para repositórios e transações com contratos explícitos. Não simular D1 com consultas independentes: os lotes atuais dependem de atomicidade.
2. Criar esquema PostgreSQL para as oito tabelas: usuários, sessões, progresso, documentos, resultados, tentativas, entregas finais e limites de requisição. Portar placeholders, funções JSON, UPSERTs e consultas de concorrência para o novo dialeto.
3. Implementar uma entrada HTTP Node que sirva `/`, `/learn/*`, `/api/*` e um health check. Usar `0.0.0.0` e a porta `PORT` fornecida pelo ambiente.
4. Definir a origem pública da aplicação em configuração. Validar a origem das gravações, cookies HTTPS e os cabeçalhos do proxy; não aceitar cabeçalhos de IP ou protocolo enviados livremente pelo cliente. Os atuais cabeçalhos Cloudflare não podem ser presumidos no Render.
5. Manter sessões opacas, cookies HttpOnly/Secure e senha de 8 a 128 caracteres. Reutilizar os hashes existentes sem solicitar ou exportar senhas em texto puro.
6. Criar comandos separados de build, migração e início em produção. Não usar `wrangler dev` ou um servidor de desenvolvimento como processo publicado.
7. Executar a suíte de isolamento, concorrência, autenticação e avaliações contra PostgreSQL real, além da verificação completa pelo navegador.
8. Só então criar e validar o `render.yaml` correspondente aos comandos efetivamente implementados.

## Dados e transição

- O GitHub recebe código, materiais e migrações; contas, sessões, respostas e notas dos alunos permanecem fora do repositório.
- Exportar o banco por um fluxo administrativo autorizado e transportar o arquivo de forma privada. Validar contagens, IDs, referências e revisões no destino.
- Preservar os IDs internos de usuário e os hashes de senha/recuperação. Invalidar sessões no momento da troca e pedir novo login no endereço externo.
- Conferir progresso, rascunhos extensos, entregas finais, recompensas e histórico de avaliações depois da importação.
- Planejar uma janela de gravação suspensa para evitar divergência entre bancos. Fazer backup e manter um procedimento de retorno antes de apontar o endereço definitivo.

## Configuração esperada

Os nomes finais serão definidos ao implementar o servidor. A configuração deve conter a origem pública, a conexão PostgreSQL e a porta do processo. Valores secretos devem ser configurados no provedor, sem entrar em Git, no código da interface ou nos logs.

O Render aceita repositórios privados de provedores conectados. O servidor precisa escutar em `0.0.0.0` e deve usar `PORT`. Quando aplicação e PostgreSQL estiverem na mesma conta e região do Render, a conexão interna é a opção prevista. Planos, limites e valores serão conferidos no momento de publicar, antes de criar recursos.

## Critérios de conclusão

- Build reproduzível a partir do GitHub.
- Processo inicia no comando de produção e passa pelo health check.
- Cadastro, login, recuperação e troca de senha funcionam com o mínimo de 8 caracteres.
- Uma conta não acessa dados de outra, mesmo adulterando parâmetros.
- Gravações concorrentes preservam os rascunhos e os resultados corretos.
- Combos e projetos finais mantêm seus pré-requisitos, feedback e recompensas.
- Reiniciar ou atualizar o serviço preserva todos os registros no banco.
- Teste de backup e restauração concluído antes da entrada definitiva.

## Referências oficiais

Consultadas em 25/10/2026:

- [Render Web Services](https://render.com/docs/web-services)
- [Criação e conexão com Render Postgres](https://render.com/docs/postgresql-creating-connecting)
