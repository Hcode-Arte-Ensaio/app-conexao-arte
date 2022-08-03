import { IPlace } from "../interfaces/IPlace";

export const places: IPlace[] = [
  {
    id: 1,
    name: "Beco do Batman",
    site: "https://goo.gl/maps/EKVw81r999ezuL5f9",
    address:
      "R. Medeiros de Albuquerque, 82-154 - Jardim das Bandeiras, São Paulo - SP, 05436-060",
    image: "beco_do_batman.jpg",
    description:
      "Localizado no boêmio e cultural bairro da Vila Madalena, o Beco do Batman nada mais é que uma grande galeria de arte a céu aberto que se transforma a todo tempo. Suas ruelas, com muros repletos de grafites, revelam que a capital paulista é um grande celeiro de artistas do movimento street art. Depois de visitar o local, aproveite para desbravar os arredores e visitar lojinhas, cafés e bares descolados. Dica: é um passeio que pode ser repetido, já que as obras se renovam periodicamente.",
    categoryId: [3],
    favorite: false,
  },
  {
    id: 2,
    name: "Centro Cultural da Juventude Ruth Cardoso",
    site: "https://g.page/CCJuventude",
    address:
      "Av. Dep. Emílio Carlos, 3641 - Vila dos Andrades, São Paulo - SP, 02721-200",
    image: "ccj_ruth_cardoso.jpg",
    description:
      "Localizado na zona norte de São Paulo, mais precisamente no bairro de Vila Nova Cachoeirinha, o Centro Cultural Municipal da Juventude Ruth Cardoso – também conhecido como CCJ – é um local icônico para a cidade de São Paulo por ser considerado o maior espaço cultural dedicado aos interesses da população jovem. Cinema, shows musicais, debates, peças de teatro, saraus, espetáculos de circo e dança são algumas das atividades que fazem parte da sua programação. Curiosidade: Criolo, Liniker, Elza Soares, KlJay e Tássia Reis são alguns dos artistas consagrados que já se apresentaram no CCJ.<br/>Instagram: @ccjuventude",
    categoryId: [1],
    favorite: false,
  },
  {
    id: 3,
    name: "Centro Cultural Grajaú",
    site: "https://goo.gl/maps/wVWMQaYYqAKUoJHF7",
    address:
      "R. Prof. Oscar Barreto Filho, 252 - Parque America, São Paulo - SP, 04822-230",
    image: "cc_grajau.jpg",
    description:
      "Para quem está em busca de um local bacana para visitar no extremo zona sul da capital paulista, o Centro Cultura Grajaú é uma opção certeira. Com mais de 3000m², sua estrutura é composta de duas salas destinadas a oficinas, uma sala de cinema com 120 lugares, um teatro e um anfiteatro ao ar livre. Há também o Ponto de Leitura Graciliano Ramos, que possui um acervo de seis mil livros. Vale a pena ficar de olho na programação oficial divulgada nas redes sociais, que costuma ser repleta de espetáculos teatrais, shows e oficinas dos mais diferentes tipos, como de dança ou de bordado.<br/>Instagram: @centroculturalgrajau",
    categoryId: [1],
    favorite: false,
  },
  {
    id: 4,
    name: "Casa de Cultura Vila Guilherme ",
    site: "https://g.page/CCCasarao",
    address:
      "Praça Oscár da Silva, 110 - Vila Guilherme, São Paulo - SP, 02067-070",
    image: "casarao_vila_guilherme.jpg",
    description:
      "Em um belíssimo prédio tombado pelo Departamento de Patrimônio Histórico funciona a Casa de Cultura Vila Guilherme, ou melhor, o “Casarão”. O local funcionou como escola até 1970 e, entre 1977 e 2004, passou a ser a sede da subprefeitura Vila Maria/Vila Guilherme. Após esse período, o prédio foi fechado. Após mobilização da população do bairro suas portas se reabriram para o funcionamento de um equipamento cultural. Hoje, em seus mais de 3.000 m², reúne salas multiusos, ampla área externa e um pátio interno para realização de atividades. Sua programação é repleta de oficinas, apresentações culturais, debates, saraus, exibições de filmes, entre outros.</br>Instagram: @cc.casarao",
    categoryId: [1],
    favorite: false,
  },
  {
    id: 5,
    name: "Casa de Cultura Júlio Guerra",
    site: "https://goo.gl/maps/FiT9835NArVpcmaY9",
    address:
      "Praça Floriano Peixoto, 131 - Santo Amaro, São Paulo - SP, 04751-030",
    image: "cc_julio_guerra.jpg",
    description:
      "Instalada em um dos edifícios mais conhecidos da região Sul de São Paulo, a Casa de Cultura Júlio Guerra é popularmente chamada de “Casa Amarela”. Oferece à população cursos gratuitos, apresentações de teatro, torneios de xadrez e damas, além de promover atividades como feiras de artesanato e bailes temáticos semanais. A programação das atividades costuma ser divulgada nas redes sociais da casa.<br/>Instagram: @ccjulioguerra",
    categoryId: [1],
    favorite: false,
  },
  {
    id: 6,
    name: "Museu do Ipiranga",
    site: "https://goo.gl/maps/Cq7NcopkA3xa5Zj49",
    address: "R. dos Patriotas, 20 - Vila Monumento, São Paulo - SP, 04264",
    image: "museu_do_ipiranga.jpg",
    description:
      "Se você é fã de história, visitar o Museu Paulista (ou Museu do Ipiranga) é altamente recomendado. Seu riquíssimo acervo, com mais de 450 mil itens, reúne desde estatuetas que decoravam as casas da aristocracia brasileira no século XIX e pinturas que reproduzem vistas de São Paulo até cartazes da Revolução Constitucionalista de 1932 e uma coleção de fotografias com mais de 12 mil retratos. Margeado pelos seus admiráveis jardins – inspirados nos de Versalhes, na França – abriga também a Capela Imperial com os restos mortais de D. Pedro I e da Imperatriz Leopoldina.  É um dos quatro mais antigos museus do país.",
    categoryId: [1],
    favorite: false,
  },
  {
    id: 7,
    name: "Theatro Municipal",
    site: "https://goo.gl/maps/WvF1oR7ic8i5biZw5",
    address:
      "Praça Ramos de Azevedo, s/n - República, São Paulo - SP, 01037-010",
    image: "theatro_municipal_sp.jpg",
    description:
      "Uma majestosa construção inspirada na Ópera de Paris, em estilo renascentista barroco, ganha status de protagonismo no centro histórico de São Paulo. Trata-se do Theatro Municipal, uma das grandes relíquias arquitetônicas do nosso país. A casa foi construída em 1903, mas sua inauguração só ocorreu em 1911, com a exibição da ópera Hamlet, de Ambrósio Thomas. Assistir a um espetáculo nessa imponente sala, seja um balé, uma ópera ou uma orquestra, é uma experiência inesquecível, por isso vale a pena ficar de olho na programação. Há também a opção de fazer uma visita educativa gratuita. Curiosidade: no local funciona também o Bar dos Arcos, que fica em seu subsolo e costuma ser bastante concorrido. Caso decida conhecê-lo, prepare-se para enfrentar fila ou tente reservar uma mesa com antecedência. ",
    categoryId: [3],
    favorite: false,
  },
  {
    id: 8,
    name: "Masp",
    site: "https://goo.gl/maps/hRRGGfLsWKWnE1pr8",
    address: "Av. Paulista, 1578 - Bela Vista, São Paulo - SP, 01310-200",
    image: "masp.jpg",
    description:
      "O Museu de Arte de São Paulo Assis Chateaubriand, popularmente conhecido como Masp, é considerado um dos maiores cartões-postais de São Paulo. Por abrigar o mais importante acervo de arte europeia da América Latina, reunindo obras de Picasso, Goya, El Greco, Matisse, Portinari, Van Gogh e Monet, é um museu que merece ser visitado pelo menos uma vez na vida. Sua arquitetura é outra atração à parte. Na estrutura vanguardista criada pela arquiteta italiana Lina Bo Bardi, o corpo principal do museu é sustentado por apenas quatro pilares, criando um grande vão livre. Dica: todas as terças-feiras a entrada é gratuita.",
    categoryId: [1],
    favorite: false,
  },
  {
    id: 9,
    name: "MAM",
    site: "https://goo.gl/maps/5nncuwxyQMXMLJTc7",
    address:
      "Av. Pedro Álvares Cabral, s/n° - Vila Mariana, São Paulo - SP, 04094-000",
    image: "mam.jpg",
    description:
      "Uma celebração à arte em meio ao Parque Ibirapuera. Essa é uma boa forma de definir o Museu de Arte Moderna de São Paulo, o MAM, que tem como missão tornar a arte moderna e contemporânea acessível ao maior número de pessoas. Possui um acervo que soma mais de cinco mil obras, exibidas em exposições temporárias realizadas no próprio prédio do museu e em outras instituições, tanto nacionais como estrangeiras. Que tal fazer um pit stop por lá depois de uma caminhada pelo parque?",
    categoryId: [1],
    favorite: false,
  },
  {
    id: 10,
    name: "Autódramo de Interlagos",
    site: "https://goo.gl/maps/HktCQ7nL5E6UjWc97",
    address:
      "Av. Sen. Teotônio Vilela, 261 - Interlagos, São Paulo - SP, 04801-010",
    image: "autodromo_de_interlagos.jpg",
    description:
      "Desde 1940, o Autódromo José Carlos Pace – mais conhecido como Autódromo de Interlagos – recebe eventos de diversas categorias do automobilismo, incluindo o famoso Grande Prêmio de Fórmula 1 do Brasil, que acontece no local desde 1981. Suas pistas fazem parte do imaginário do público brasileiro, principalmente daqueles que são fãs de Ayrton Senna: impossível não se lembrar da emocionante vitória que o piloto conquistou em 1991, depois de anos de tentativas, e também a vitória de 1993. Sua estrutura é composta de 23 boxes, uma ampla sala de imprensa, o salão nobre, o padoque e arquibancada com capacidade para 70 mil pessoas. Já o kartódromo possui 61 boxes e arquibancada para mil pessoas. O local costuma receber eventos e festivais, como o Lollapalooza. A visitação é livre e gratuita.",
    categoryId: [3],
    favorite: false,
  },
  {
    id: 11,
    name: "Avenida Paulista",
    site: "https://goo.gl/maps/ebnHT8954oVDZTkH9",
    address: "Avenida Paulista, SP",
    image: "avenida_paulista.jpg",
    description: `Ir a Sampa e não visitar a Avenida Paulista é como ir ao Rio e não conhecer  Copacabana. Dito isso, programe-se para caminhar pelos 2,8 quilômetros de extensão da mais icônica avenida paulistana e constatar que São Paulo é uma das cidades mais plurais do mundo. Isso porque, durante o passeio, você cruzará com pessoas das mais diferentes tribos, idades e estilos. Famosa por receber com frequência manifestações e mobilizações populares, o endereço não era tão democrático como agora no início do século XX, quando  era o reduto da elite paulistana. Uma vez na Paulista, aproveite para visitar algumas das atrações que ficam por lá, como o Masp, o Instituto Moreira Salles, o Itaú Cultural, a Japan House, o Centro Cultural Fiesp e a Casa das Rosas. 

  `,
    categoryId: [3],
    favorite: false,
  },
  {
    id: 12,
    name: "Casa do Tatuapé | Museu da Cidade",
    site: "https://goo.gl/maps/rPvZ2pKvTMzBjRjZ8",
    address: "R. Guabijú, 49 - Tatuapé, São Paulo - SP, 03077-100",
    image: "casa_da_cidade_tatuape.jpg",
    description: `Caminhar em meio às palmeiras imperais do Jardim Botânico do Rio de Janeiro é um daqueles passeios clássicos que devemos fazer pelo menos uma vez na vida. Ocupando uma área de 540.000 metros quadrados, esse pedacinho da Cidade Maravilhosa é considerado pela Unesco como área de Reserva da Biosfera. Por trás de suas árvores, plantas, construções e lagos há muita história: o espaço foi fundado em 13 de junho de 1808, pelo então príncipe regente português D. João VI, com o objetivo de ser um jardim de aclimatação de espécies vegetais originárias de outras partes do mundo. Hoje, guarda um acervo botânico que é considerado um dos mais ricos e notáveis do planeta em variedade de espécies. `,
    categoryId: [1],
    favorite: false,
  },
  {
    id: 13,
    name: "Jardim Botânico",
    site: "https://goo.gl/maps/CaRq9aLUMHGszh1E7",
    address:
      "Av. Miguel Estefno, 3031 - Vila Água Funda, São Paulo - SP, 04301-905",
    image: "jardim_botanico.jpg",
    description: `Conhecer o Jardim Botânico de São Paulo é um daqueles passeios que fazem bem para o corpo e para a mente! Fundado em 1928, conta com 143 hectares repletos de espécies vegetais dos mais variados tipos.  Apesar de ser uma atração pouco explorada pelos turistas – e até mesmo pelos moradores de São Paulo – é um local lindíssimo para passar um domingo e até fazer um piquenique. Uma vez lá, percorra as pontes sobre pequenos veios d’água, repare nos gazebos floridos, admire os orquidários e viveiros com várias espécies de plantas e relaxe em meio à natureza.  `,
    categoryId: [3],
    favorite: false,
  },
  {
    id: 14,
    name: "Instituto Tomie Ohtake",
    site: "https://goo.gl/maps/QWXS7D4pZiZ9H6fZ9",
    address: "Rua Coropé, 88 - Pinheiros, São Paulo - SP, 05426-010",
    image: "instituto_tomie_ohtake.jpg",
    description: `Impossível passar pela região de Pinheiros, entre as avenidas Brigadeiro Faria Lima e Pedroso de Moraes, e não notar uma construção inusitada com 22 andares e repleta de linhas arredondadas e painéis coloridos. Trata-se do Ohtake Cultural, que abriga o Instituto Tomie Ohtake e também escritórios comerciais. Inaugurado em 2001, o instituto possui sete salas de exposições que costumam receber mostras gratuitas importantes – desde Picasso e Gaudí até Di Cavalcanti e Frida Kahlo. Seu hall conta com livraria, loja com objetos artísticos e o restaurante Santinho. A arquitetura de formas marcantes e inovadoras que tanto chama atenção na paisagem da cidade é assinada por Ruy Ohtake, filho da artista que dá nome ao local. 

 `,
    categoryId: [2],
    favorite: false,
  },
  {
    id: 15,
    name: "Instituto Moreira Salles – IMS",
    site: "https://g.page/imspaulista?share",
    address: "Av. Paulista, 2424 - Bela Vista, São Paulo - SP, 01310-300",
    image: "instituto_moreira_salles.jpg",
    description: `Se há um lugar em São Paulo que guarda um acervo fotográfico de peso, esse lugar é o Instituto Moreira Salles, também conhecido como IMS Paulista. Com cerca de dois milhões de imagens, possui o mais importante conjunto de fotografias do século XIX no Brasil e a melhor compilação relativa à fotografia nacional das sete primeiras décadas do século XX. E não para por aí: a instituição também reúne obras de renomados artistas da fotografia mundial, como Marc Ferrez, Augusto Stahl, Henri Ballot, Marcel Gautherot e Alice Brill. Fica na Avenida Paulista e a entrada para suas exposições é gratuita. Vale a visita! `,
    categoryId: [2],
    favorite: false,
  },
  {
    id: 16,
    name: "Museu do Futebol",
    site: "https://goo.gl/maps/uzV9Uh8oz81do2Da7",
    address: "Praça Charles Miller, s/n - Pacaembu, São Paulo - SP, 01234-010",
    image: "museu_do_futebol.jpg",
    description: `O esporte mais popular do Brasil tem um museu para chamar de seu em São Paulo. Situado na Praça Charles Miller, dentro do icônico Estádio do Pacaembu, o local surpreende os visitantes com objetos, fotos, áudios, vídeos e muitos artifícios tecnológicos interativos. O museu foi criado com o objetivo de resguardar a história dessa modalidade que faz parte da cultura e da identidade do brasileiro. Quem o visita não costuma se arrepender, já que o passeio é pra lá de divertido, mesmo para quem não é tão fã de futebol. Um dos espaços mais interessantes da visita é a Sala das Copas, onde cada torneio é representado com fotos do evento e dos acontecimentos mundiais mais marcantes da época.  `,
    categoryId: [3],
    favorite: false,
  },
  {
    id: 17,
    name: "Parque Ibirapuera",
    site: "https://goo.gl/maps/NSHH7uBcEjTvraNdA",
    address:
      "Av. Pedro Álvares Cabral - Vila Mariana, São Paulo - SP, 04094-050",
    image: "parque_ibirapuera.jpg",
    description: `Uma das maiores reservas verdes da capital paulista merece atenção não somente pelas belezas botânicas, mas também por concentrar museus, espaços para shows, restaurantes, monumentos e prédios icônicos, como a Oca, a Marquise e a Fundação Bienal.  Seu conjunto arquitetônico, de autoria de Oscar Niemeyer, é tombado pelo patrimônio histórico paulista e é um marco da consolidação da arquitetura moderna no Brasil. Apelidado carinhosamente de Ibira, com uma área de 158 hectares, é o mais famoso parque da cidade. Endereço certo para quem gosta de praticar esportes ao ar livre, seja corrida, skate ou bicicleta, ou adora passear a pé e apreciar a natureza.   `,
    categoryId: [3],
    favorite: false,
  },
  {
    id: 18,
    name: "Pátio do Colégio",
    site: "https://goo.gl/maps/SqzAVA1K6jmL8UGa8",
    address:
      "Praça Pateo do Collegio, 2 - Centro Histórico de São Paulo, São Paulo - SP, 01016-040",
    image: "patio_do_colegio.jpg",
    description: `É considerado o berço de São Paulo, pois foi ao seu redor que a cidade nasceu. O marco inicial remonta a 25 de janeiro de 1554, quando o padre jesuíta Manuel de Paiva rezou a primeira missa da futura cidade, num altar improvisado de pau a pique. Nos anos 1600 foram erguidos nessa área uma igreja e o Colégio dos Jesuítas. De lá pra cá, passou por diferentes reformas e fases, inclusive uma demolição em 1954 para que fosse construída uma réplica do primeiro prédio. Nessa ocasião, uma parede de taipa de pilão original de 1585 foi preservada e pode ser vista pelo público. Hoje abriga o Museu Padre Anchieta, que reúne imagens sacras, relicários dos séculos XVII e XVIII e uma maquete da área no século XVI. Também possui um charmoso café.`,
    categoryId: [3],
    favorite: false,
  },
  {
    id: 19,
    name: "Pinacoteca",
    site: "https://goo.gl/maps/twop2FoJ3wGEHnUJ7",
    address: "Praça da Luz, 2 - Luz, São Paulo - SP, 01120-010",
    image: "pinacoteca.jpg",
    description: `Sabe qual é o museu de arte mais antigo da cidade de São Paulo? Acertou quem pensou na Pinacoteca! Sua história começa em 1900, quando seu edifício principal foi construído com o objetivo de sediar o Liceu de Artes e Ofícios. Depois, acabou se tornando um museu. Também conhecida como Pina, o museu contabiliza um acervo com cerca de dez mil obras entre pinturas, gravuras, desenhos, fotografias, esculturas, peças de tapeçaria, vestuário, colagem e cerâmica. Trata-se de um dos mais belos museus paulistanos, não deixe de conhecer!`,
    categoryId: [3],
    favorite: false,
  },
  {
    id: 20,
    name: "Museu da Língua Portuguesa ",
    site: "https://goo.gl/maps/CdMKLQeeatNYFS256",
    address:
      "Praça da Luz, s/nº - Centro Histórico de São Paulo, São Paulo - SP, 01120-010",
    image: "museu_da_lingua_portuguesa.jpg",
    description: `Fechado em decorrência de um triste incêndio ocorrido em 2015, o Museu da Língua Portuguesa reabriu suas portas em 2021. Grande parte de seu acervo foi renovado e alguns clássicos que costumavam agradar os visitantes foram repaginados. Entre as novas seções, destaque para a “Falares”, que mostra a relação dos falantes com a língua portuguesa em todo o país. Vale destacar que esse é um dos primeiros museus do mundo totalmente dedicados a um idioma, tendo sido inaugurado em 2006. Conta com exposições permanentes e temporárias e fica localizado junto à Estação da Luz. `,
    categoryId: [6],
    favorite: false,
  },
  {
    id: 21,
    name: "Centro Cultural Banco do Brasil - São Paulo",
    site: "https://goo.gl/maps/CdMKLQeeatNYFS256",
    address:
      "R. Álvares Penteado, 112 - Centro Histórico de São Paulo, São Paulo - SP, 01012-000",
    image: "centro_cultural_banco_do_brasil.jpg",
    description: `Instalado em um prédio erguido em 1901, no coração do Centro de São Paulo, funciona um dos mais efervescentes centros culturais da cidade. Trata-se do Centro Cultural Banco do Brasil, ou CCBB São Paulo, que recebeu este nome por abrigar, até 1999, a sede do banco que leva seu nome. Inaugurado em 2001, é reconhecido pela programação cultural de qualidade nas áreas de artes cênicas, cinema, exposições, ideias, música e arte-educação – a maioria gratuita ou a preços acessíveis. Antes da visita, consulte o site oficial do museu para conferir a programação. `,
    categoryId: [6],
    favorite: false,
  },
  {
    id: 22,
    name: "Feira da Benedito Calixto",
    site: "https://goo.gl/maps/SuJ7RYGjyKt7baNr9",
    address: "Praça Benedito Calixto - Pinheiros, São Paulo - SP, 05406-040",
    image: "feira_benedito_calixto.jpg",
    description: `A feirinha da Praça Benedito Calixto, que funciona apenas aos sábados em Pinheiros, é uma opção certeira para quem gosta de artesanato e antiguidades. Além de dezenas de barracas com relíquias interessantes, encontram-se também por lá boa música, bares animados, lojas descoladas e muita gente aproveitando o dia de uma maneira despretensiosa. É um local democrático, reduto principalmente de músicos, artistas, jornalistas e jovens adultos. `,
    categoryId: [5],
    favorite: false,
  },
  {
    id: 23,
    name: "Mercado Municipal de São Paulo",
    site: "https://goo.gl/maps/itq2ucxbmrb2ET4C9",
    address:
      "R. da Cantareira, 306 - Centro Histórico de São Paulo, São Paulo - SP, 01024-900",
    image: "mercado_municipal.jpg",
    description: `Um dos pontos turísticos mais visitados de São Paulo é, sem dúvida, o Mercado Municipal. Afinal, quem nunca ouviu falar do sanduíche de mortadela do Mercadão?  Além de abrigar diversos restaurantes que servem esse e outros quitutes da culinária brasileira, a construção encanta o visitante pela exuberância de sua arquitetura e de seus vitrais. Porém, as grandes protagonistas do local são mesmo as frutas, que ficam expostas nas bancas dos comerciantes e enchem os olhos de quem passeia por lá. Prepare-se para provar várias delas gratuitamente, desde as mais comuns até as mais exóticas, e vivenciar uma explosão de aromas e sabores. Dica: ao escolher alguma para levar, tome cuidado e pergunte o preço antes, pois pode custar muito caro! `,
    categoryId: [6],
    favorite: false,
  },
  {
    id: 24,
    name: "MIS",
    site: "https://goo.gl/maps/rs7pANFEAxCP2kFo7",
    address: "Av. Europa, 158 - Jardim Europa, São Paulo - SP, 01449-000",
    image: "mis.jpg",
    description: `Criado em 1970 por um grupo de intelectuais, o Museu da Imagem e do Som, mais conhecido como MIS, preserva o patrimônio de audiovisual nacional, abrigando importantes documentos sonoros e imagéticos. Hoje, tem como ideal o diálogo com a arte do século XXI, mas sem deixar de lado a rica história acumulada desde sua fundação. O local costuma receber excelentes mostras. Eentre as exposições que já passaram por lá estão “Stanley Kubrick”, “O mundo de Tim Burton”, “Quadrinhos”, “Castelo Rá-Tim-Bum”, “Renato Russo”, “Musicais no cinema”, “Nova fotografia” e “Björk Digital”. Cheque a programação antes de ir!`,
    categoryId: [6],
    favorite: false,
  },
  {
    id: 25,
    name: "Museu da Casa Brasileira (MCB)",
    site: "https://goo.gl/maps/E7yC64gbF6ocizrM9",
    address:
      "Av. Brg. Faria Lima, 2705 - Jardim Paulistano, São Paulo - SP, 01451-000",
    image: "museu_da_casa_brasileira.jpg",
    description: `Atração interessante para quem aprecia design e arquitetura, o Museu da Casa Brasileira possui um acervo que conta a história do mobiliário brasileiro dos séculos XVIII a XX. Além disso, costuma promover debates, palestras, exposições temporárias e audições musicais, tudo com entrada gratuita. Sediado em uma mansão em estilo neoclássico que reproduz o Palácio Imperial de Petrópolis, era a antiga residência do ex-prefeito de São Paulo, Fábio da Silva Prado, e de sua mulher, Renata Crespi Prato. Destaque para o jardim de seis mil metros quadrados, um verdadeiro oásis em meio aos imponentes prédios da região da Avenida Brigadeiro Faria Lima. `,
    categoryId: [6],
    favorite: false,
  },
];
