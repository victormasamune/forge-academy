(function(root){
  const classes=[
    {id:'artifice',name:'Artífice',title:'Construir para compreender',symbol:'⚒',color:'#d8bd87',description:'Transforma requisitos em etapas e aprende criando soluções.',benefit:'Bancada de projeto: checklist de etapas salvo na sua conta.',tool:'project',attributes:[5,3,4,3]},
    {id:'arcanista',name:'Arcanista',title:'Conectar conceitos',symbol:'✦',color:'#baa3ef',description:'Compara ideias e procura o motivo por trás de cada comportamento.',benefit:'Revisão de conceitos: cartões da teoria das aulas que você precisa rever.',tool:'concepts',attributes:[3,5,4,3]},
    {id:'sentinela',name:'Sentinela',title:'Aprender com uma defesa extra',symbol:'◇',color:'#87cccf',description:'Avança com consistência e usa erros para ajustar a estratégia.',benefit:'Uma tentativa adicional em cada confronto de nível: quatro em vez de três.',tool:'defense',attributes:[4,3,3,5]},
    {id:'ladino',name:'Ladino',title:'Investigar os detalhes',symbol:'⌕',color:'#d2a1bc',description:'Observa pistas e procura o ponto exato em que o raciocínio falha.',benefit:'Pista de investigação: objetivos e conceitos das aulas relacionadas ao desafio.',tool:'clues',attributes:[4,3,5,3]},
    {id:'explorador',name:'Explorador',title:'Encontrar o próximo passo',symbol:'↗',color:'#97c6a5',description:'Planeja rotas entre conhecimentos e enfrenta pré-requisitos com clareza.',benefit:'Rota guiada: organiza as aulas que faltam para liberar seu próximo combo.',tool:'route',attributes:[4,4,3,4]},
    {id:'bardo',name:'Bardo',title:'Explicar para consolidar',symbol:'♫',color:'#dfa9df',description:'Aprende articulando conceitos, exemplos e limites de uma solução.',benefit:'Roteiro de explicação: caderno com conceito, exemplo e contraprova.',tool:'explain',attributes:[3,5,3,4]},
    {id:'monge',name:'Monge',title:'Cultivar a prática',symbol:'◉',color:'#d6b18b',description:'Trabalha em blocos de atenção e registra o que conseguiu compreender.',benefit:'Sessão de foco: cronômetro com pausa e anotação de objetivo.',tool:'focus',attributes:[4,3,3,5]},
    {id:'clerigo',name:'Clérigo',title:'Recuperar conhecimentos',symbol:'✧',color:'#a9c9e4',description:'Retoma pontos frágeis e transforma feedback em um plano de estudo.',benefit:'Recuperação guiada: revisão em três etapas a partir dos seus erros recentes.',tool:'recovery',attributes:[3,4,4,5]},
    {id:'paladino',name:'Paladino',title:'Verificar antes de avançar',symbol:'♜',color:'#e1ce96',description:'Confere hipóteses e testa a compreensão antes do desafio principal.',benefit:'Treino de verificação: três perguntas das aulas estudadas, sem custo de tentativa.',tool:'practice',attributes:[4,4,4,4]},
  ];
  root.FORGE_CLASSES=classes;
  root.RPG_DATA.classes=classes;
})(typeof window==='undefined'?globalThis:window);
