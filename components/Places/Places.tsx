import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native';
import { IPlace } from '../../interfaces/IPlace';
import Categories from './Categories';
import Place from './Place';
import SearchContext from '../../context/search';
interface PlacesProps {
    title: string;
    favorite?: boolean;
    query?: string;
}

const Places = (props: PlacesProps) => {

    const {setState, state} = useContext(SearchContext);
    const [places, setPlaces] = useState<IPlace[]>([]);
    const [placesFiltered, setPlacesFiltered] = useState<IPlace[]>([]);
    const [favoritePlaces, setFavoritePlaces] = useState<IPlace[]>([]);
    const [query, setQuery] = useState(state);
    const [categoryId, setCategoryId] = useState(0);
    const getPlaces = async (param, catId) => {

        // const places = await axios.get('https://besp.westcentralus.cloudapp.azure.com/places');
        const myDatabase: IPlace[] = [{
            id: 1,
            name: "Bondinho Pão de Açúcar",
            site: "https://maps.app.goo.gl/pwfR54xgVyfgk8pR8",
            address: "Av. Pasteur, 520 - Urca",
            image: "bondinho_pao_acucar.jpg",
            description: "Prepare-se para apreciar vistas de tirar o fôlego das praias do Leme, Copacabana, Ipanema e Leblon, do Aterro do Flamengo e do Cristo Redentor. Considerado um dos principais cartões-postais do Rio de Janeiro, o Pão de Açúcar é um dos locais mais visitados do nosso país. Ao embarcar em seu teleférico – popularmente conhecido como bondinho – o visitante faz duas paradas: a primeira no Morro da Urca, a 220 metros de altura, e a segunda no Morro do Pão de Açúcar, a 396 metros de altura. Dica: não esqueça de visitar o museu que conta a história do bondinho. ",
            categoryId: [3],
        }, {
            id: 2,
            name: "Museu do Amanhã",
            site: "https://goo.gl/maps/NUmTthNt84ABgy7D7",
            address: "Praça Mauá, 1 - Centro",
            image: "museu_do_amanha.jpg",
            description: "Em meio à Baía de Guanabara, um prédio emblemático se destaca na paisagem da zona portuária carioca: o Museu do Amanhã. Interatividade é a palavra de ordem desse espaço cultural dedicado às ciências aplicadas. Ao visitar suas diferentes salas, o visitante é instigado a refletir acerca dos desafios e oportunidades que a humanidade terá de enfrentar nas próximas décadas a partir das perspectivas da sustentabilidade e da convivência. Vale muito a visita! ",
            categoryId: [1],
        }, {
            id: 3,
            name: "Cristo Redentor",
            site: "https://goo.gl/maps/YRYiN25wkiJtQqY56",
            address: "Praça Mauá, 1 - Centro",
            image: "cristo_redentor.jpg",
            description: "Marca registrada do Brasil mundo afora, o Cristo Redentor recebe a todos de braços abertos, independentemente de religião ou crença. Construído no topo do Morro do Corcovado, o monumento de 38 metros de altura é uma das setes maravilhas do mundo moderno e uma das atrações mais emblemáticas e visitadas do Brasil. Quem o visita jamais esquece a experiência, já que, além de vê-lo bem de pertinho, é possível contemplar as belezas da Cidade Maravilhosa de diferentes ângulos.",
            categoryId: [3],
        }, {
            id: 4,
            name: "Praia de Copacabana",
            site: "https://goo.gl/maps/wXa1pNuGigGs9Tp26",
            address: "Praça Mauá, 1 - Centro",
            image: "praia_copacabana.jpg",
            description: "Apelidada de Princesinha do Mar, a Praia de Copacabana é considerada uma das mais famosas do planeta. São 3,5 quilômetros  de extensão que recebem diariamente cariocas e turistas ávidos por curtir o mar, tomar sol ou petiscar em um de seus quiosques espalhados pelo calçadão. E falando em calçadão: a célebre padronagem que imita as curvas do mar é uma atração à parte. Não esqueça de fazer uma foto! ",
            categoryId: [3],
        }, {
            id: 5,
            name: "Estádio do Maracanã",
            site: "https://goo.gl/maps/LtJNL71Bs4a1QCEc6",
            address: "Praça Mauá, 1 - Centro",
            image: "maracana.jpg",
            description: "Idealizado para receber os jogos da Copa do Mundo de 1950, o Estádio Jornalista Mário Filho, o famoso Maraca, nasceu para ser o maior do mundo. De lá pra cá, surgiram muitos estádios de futebol maiores, mas o Maracanã, localizado na zona norte da cidade, continua sendo o mais importante do Brasil e um ícone para apaixonados pelo esporte. Ganhou uma nova cara mais de 60 anos depois de inaugurado, após passar por uma grande reestruturação e modernização para receber a Copa de 2016. ",
            categoryId: [5],
        }, {
            id: 6,
            name: "Parque Lage",
            site: "https://goo.gl/maps/vn6qPBaitYwAygpT8",
            address: "Praça Mauá, 1 - Centro",
            image: "parque_lage.jpg",
            description: "Uma lindíssima área verde de 52 hectares já seria motivo suficiente para visitar o Parque Lage. Some a isso o fato de o local abrigar um belo palacete, um café com ótimos quitutes e jardins que reúnem diferentes tipos de plantas. Localizado aos pés do Morro do Corcovado, faz parte do Parque Nacional da Tijuca e é uma opção de passeio interessante para toda a família. ",
            categoryId: [2],
        }, {
            id: 7,
            name: "Galeria Ipanema",
            site: "https://goo.gl/maps/18uAAxCGDDsWoaXA9",
            address: "R. Aníbal de Mendonça, 27 - Ipanema",
            image: "galeria_ipanema.jpg",
            description: "Fundada em 1955, essa galeria é considerada um lugar icônico para a arte brasileira por ser uma das precursoras do movimento modernista e por já ter realizado mostras memoráveis de artistas nacionais celebrados internacionalmente, como Alfredo Volpi e Hélio Oiticica. Está localizada em um belíssimo edifício projetado pelo arquiteto Sérgio Bernardes e, sem dúvida, é um endereço imperdível para apreciadores da boa arte! ",
            categoryId: [2],
        }, {
            id: 8,
            name: "Parque das Ruínas",
            site: "https://goo.gl/maps/ubcrmDGtPZQ579tt8",
            address: "R. Murtinho Nobre, 169 - Santa Teresa",
            image: "parque_das_ruinas.jpg",
            description: "Em uma ladeira do tradicional Morro de Santa Tereza funciona um centro cultural que presenteia seus frequentadores com uma programação gratuita pulsante: o Parque das Ruínas. Além de receber exposições de arte, apresentações musicais e peças de teatro infantis, o local oferece uma vista maravilhosa do Rio de Janeiro. Curiosidade: outrora, o local foi a casa de Laurinda Santos Lobo, mulher que era considerada uma mecenas da Belle Époque carioca. Nas dependências do seu palacete, Laurinda costumava reunir muitos intelectuais e artistas. ",
            categoryId: [1],
        }, {
            id: 9,
            name: "Estádio Nilton Santos",
            site: "https://goo.gl/maps/2uReQyC41SMS54yAA",
            address: "R. José dos Reis, 425 - Engenho de Dentro",
            image: "estadio_nilton_santos.jpg",
            description: "Se você acompanhou as provas de atletismo da Rio 2016 deve se lembrar do Estádio Olímpico Nilton Santos, popularmente conhecido como Engenhão. O local entrou para a história dos Jogos Olímpicos como palco de performances memoráveis de atletas como o jamaicano Usain Bolt e o brasileiro Thiago Silva. Inaugurado em 2007 para os Jogos Pan-Americanos, o Engenhão fica localizado no antigo terreno da Rede Ferroviária Federal, no bairro do Engenho de Dentro e é arrendado pelo Botafogo. Ótimo passeio para quem é fã de esporte! ",
            categoryId: [5],
        }, {
            id: 10,
            name: "Estádio das Laranjeiras",
            site: "https://goo.gl/maps/cnXLcs9aRe89nyK99",
            address: "R. Pinheiro Machado, 86-126 - Laranjeiras",
            image: "estadio_laranjeiras.jpg",
            description: "Se você é um daqueles fãs de futebol, visitar o Estádio Manoel Schwartz – popularmente conhecido como Estádio das Laranjeiras, fazendo menção ao bairro onde é situado – pode ser um passeio bastante emblemático. Sabe por quê? Porque esse é o primeiro estádio de futebol construído no Brasil e, por isso, é um campo icônico para o esporte brasileiro. Inaugurado em 1919, com um confronto entre as seleções brasileira e chilena, pertence ao Fluminense, mas já não recebe jogos oficiais do seu time principal, pois sua capacidade de público não comporta os padrões atuais. ",
            categoryId: [5],
        }, {
            id: 11,
            name: "Feira de São Cristóvão",
            site: "https://goo.gl/maps/4DtZcEZMUDkmAAJRA",
            address: "R. Campo de São Cristóvão - São Cristóvão",
            image: "feira_sao_cristovao.jpg",
            description: `A cultura e os costumes nordestinos são a matéria-prima do Centro Luiz Gonzaga de Tradições Nordestinas, popularmente conhecido como Feira de São Cristóvão. Logo na entrada, há uma estátua em tamanho natural de Luiz Gonzaga, o eterno Rei do Baião, que dá nome ao local. Enquanto passeia pelo grandioso pavilhão, o visitante é surpreendido com os aromas que vêm dos diferentes restaurantes, pode apreciar o artesanato oriundo da região e curtir algumas apresentações musicais que rolam nos palcos.  `,
            categoryId: [4],
        },
        {
            id: 12,
            name: "Jardim Botânico",
            site: "https://goo.gl/maps/4DtZcEZMUDkmAAJRA",
            address: "R. Jardim Botânico, 1008 - Jardim Botânico, Rio de Janeiro - RJ, 22460-030",
            image: "jardim_botanico.jpg",
            description: `Caminhar em meio às palmeiras imperais do Jardim Botânico do Rio de Janeiro é um daqueles passeios clássicos que devemos fazer pelo menos uma vez na vida. Ocupando uma área de 540.000 metros quadrados, esse pedacinho da Cidade Maravilhosa é considerado pela Unesco como área de Reserva da Biosfera. Por trás de suas árvores, plantas, construções e lagos há muita história: o espaço foi fundado em 13 de junho de 1808, pelo então príncipe regente português D. João VI, com o objetivo de ser um jardim de aclimatação de espécies vegetais originárias de outras partes do mundo. Hoje, guarda um acervo botânico que é considerado um dos mais ricos e notáveis do planeta em variedade de espécies. `,
            categoryId: [3],
        },
        {
            id: 13,
            name: "AquaRio",
            site: "https://g.page/aquariomarinhodorio?share",
            address: "Praça Muhammad Ali - Via Binário do Porto, s/n - Gamboa, Rio de Janeiro - RJ, 20220-360",
            image: "aquario.jpg",
            description: `O maior aquário marinho da América do Sul fica em terras cariocas e encanta não apenas os pequenos que o visitam, mas também adultos, que acabam se surpreendendo com a beleza e a diversidade dos mais de cinco mil animais de 350 espécies – nativas do Brasil e de outras partes do mundo – que vivem por lá. A atração reúne desde corais, ouriços e arraias até cavalos-marinhos, tubarões e, claro, peixinhos dos mais diferentes tipos e cores. São 26 mil metros quadrados de área construída e 4,5 milhões de litros d’água em 26 tanques. Diversão garantida! `,
            categoryId: [3],
        },
        {
            id: 14,
            name: "Museu de Arte do Rio de Janeiro - MAR",
            site: "https://g.page/museuarterio?share",
            address: "Praça Mauá, 5 - Centro, Rio de Janeiro - RJ, 20081-240",
            image: "museu_arte_rio_mar.jpg",
            description: `Inaugurado em 2013, o Museu de Arte do Rio de Janeiro, mais conhecido como MAR, está instalado em dois prédios construídos em épocas diferentes: o Palacete Dom João VI, de 1916, e um edifício vizinho, da década de 1940, que no passado abrigou o Terminal Rodoviário Mariano Procópio. Para uni-los, foi projetada como cobertura uma estrutura de concreto armado cujo desenho remete às ondas do mar. Em suas oito salas de exposições, exibe mostras temporárias de curta e longa duração cujas temáticas, em sua maioria, se relacionam com a própria cidade Rio de Janeiro. O museu também abriga a Escola do Olhar, cuja proposta museológica consiste em oferecer atividades educativas voltadas para a prática e a reflexão sobre a arte. `,
            categoryId: [1],
        },
        {
            id:15,
            name: "Theatro Municipal",
            site: "https://goo.gl/maps/4DtZcEZMUDkmAAJRA",
            address: "R. Jardim Botânico, 1008 - Jardim Botânico, Rio de Janeiro - RJ, 22460-030",
            image: "theatro_municipal_rio.jpg",
            description: `Impossível caminhar pelas ruas principais do Centro do Rio de Janeiro e não admirar a beleza do Theatro Municipal. Sua história começou a ser desenhada no fim do século XIX, época em que a arte teatral ganhava relevância na então capital do Brasil. Percebendo que não havia nenhum espaço de grande porte na cidade, em 1894, o jornalista e dramaturgo Arthur de Azevedo iniciou uma campanha em prol da construção de um teatro. A semente havia sido lançada, mas somente em 1903 a ideia ganhou vida, quando o então prefeito Pereira Passos fez um concurso para a apresentação de projetos arquitetônicos para o futuro teatro. Sua construção começou em 1905 e, quatro anos depois, em 1909, esse que é até hoje um dos mais icônicos e suntuosos prédios do nosso país era inaugurado. Vale a visita! `,
            categoryId: [7],
        },
        {
            id: 16,
            name: "Orla Conde",
            site: "https://goo.gl/maps/7TdqjGHs783PG73P9",
            address: "Av. Rodrigues Alves - Centro, Rio de Janeiro - RJ",
            image: "orla_conde.jpg",
            description: `A Orla Prefeito Luiz Paulo Conde – popularmente conhecida como Orla Conde ou Boulevard Olímpico – simboliza o reencontro da cidade com o mar, uma vez que, antes do projeto de revitalização da região portuária carioca, realizada para os Jogos Olímpicos Rio 2016, a área, que antes era ocupada pelo Viaduto da Perimetral, não recebia pedestres. Durante o percurso de 3,5 quilômetros de extensão, que pode ser feito a pé ou de bicicleta, é possível admirar a paisagem da Baía de Guanabara, avistar a Ponte Rio-Niterói e fazer paradas estratégicas para visitar construções históricas e culturais do Rio de Janeiro, como o Museu do Amanhã, o Museu de Arte do Rio de Janeiro (MAR) e o AquaRio. `,
            categoryId: [3],
        },
        {
            id: 17,
            name: "Arcos da Lapa",
            site: "https://goo.gl/maps/4DtZcEZMUDkmAAJRA",
            address: "Lapa, Rio de Janeiro - RJ, 20031-040",
            image: "arcos_da_lapa.jpg",
            description: `Para quem é fã de história, visitar os Arcos da Lapa e conhecer a sua história é mais que obrigatório. São mais de 42 arcos duplos, de estilo românico, que chamam atenção de quem passa pela imponência e beleza. A construção, concluída em 1723, nada mais é do que o antigo Aqueduto da Carioca, que foi utilizado por muito tempo para levar água de uma nascente para a população da cidade. É considerada a maior obra arquitetônica realizada no Brasil durante o período colonial.  `,
            categoryId: [3],
        },
        {
            id: 18,
            name: "Igreja da Candelária",
            site: "https://goo.gl/maps/TjP2Czgga6S2BSps6",
            address: "Praça Pio X, s/n - Centro, Rio de Janeiro - RJ, 20040-020",
            image: "igreja_candelaria.jpg",
            description: `Figura entre  as mais belas igrejas coloniais brasileiras. Localizada na região central da cidade, costuma ser uma das construções mais visitadas por quem passeia pela Orla Conde. Sua primeira inauguração ocorreu em 1811, com obras ainda inacabadas. Por sua beleza, tanto externa quanto interna, o santuário é muito escolhido pelos cariocas para receber casamentos. Ao fazer a visitação, repare com atenção nos detalhes do altar principal, projetado pelo brasileiro Archimedes Memoria, admire os vitrais alemães e não deixe de conferir os púlpitos em estilo art nouveau do escultor português Rodolfo Pinto do Couto. As lindas portas de bronze que ficam na entrada da igreja, obra do português Teixeira Lopes, também merecem atenção. `,
            categoryId: [3],
        },
        {
            id: 19,
            name: "Mureta da Urca",
            site: "https://goo.gl/maps/DAbBwdDKKBCpApjs8",
            address: "Av. João Luiz Alves, s/n - Urca, Rio de Janeiro - RJ, 22291-080",
            image: "mureta_da_urca.jpg",
            description: `A vista superprivilegiada da Baía de Guanabara, do Pão de Açúcar e do Cristo Redentor já seria motivo suficiente para conhecer a Mureta da Urca. Mas há muitos outros que fazem com que o local, que nada mais é do que um muro baixo  com cerca de um quilômetro de extensão à beira mar, mereça a visita: é um dos pontos mais incríveis da cidade para apreciar o pôr do sol e seus bares reúnem cariocas e turistas de todo o mundo dispostos a petiscar e bebericar uma cerveja gelada. Dica: antes de curtir o fim de tarde na mureta, passeie pelas ruas do pequeno bairro da Urca, um dos mais charmosos da cidade, e confira a sua arquitetura composta de edifícios baixos e casarões históricos.`,
            categoryId: [3],
        },
        {
            id: 20,
            name: "Real Gabinete Português de Leitura ",
            site: "https://goo.gl/maps/EtpQH3eASTVQUNQw8",
            address: "R. Luís de Camões, 30 - Centro, Rio de Janeiro - RJ, 20051-020",
            image: "real_gabinete_portugues_de_leitura.jpg",
            description: `Considerado uma das bibliotecas mais lindas e majestosas do mundo, o Real Gabinete Português de Leitura preserva grande parte da história entre o Brasil e Portugal em seu acervo bibliográfico que reúne cerca de 350 mil obras. A instituição foi fundada em 1837 com o intuito de oferecer aos portugueses que moravam no Rio de Janeiro acesso às publicações de seu país. Projetada em estilo neomanuelino, sua fachada foi inspirada em construções lisboetas, como o Mosteiro dos Jerônimos e a Torre de Belém. Já seu salão de leitura tem pé-direito triplo, é coberto por um belo vitral octogonal e possui um rico mobiliário. A grandiosidade arquitetônica do local é de tirar o fôlego, não deixe de incluí-lo em sua lista de lugares a visitar na capital fluminense! `,
            categoryId: [6],
        }

    ];
        if(catId){
            setPlaces(myDatabase.filter(place => place.categoryId[0] === catId));
        }else{
            setPlaces(myDatabase);
        }
        
       if(state.query){
           
           const filter = places.filter(item=>{
                if(item.name.toLowerCase().includes(state.query.toLowerCase()) || item.description.toLowerCase().includes(state.query.toLowerCase())){
                     return item;
                }
           })
           
           setPlacesFiltered(filter);
        }
       if(props.favorite){
           const getData = async () => {
                try {
                    const value = await AsyncStorage.getItem('TASKS');
                    if (value !== null) {
                    // We have data!!
                    console.log(value);
                    }
                } catch (error) {
                    // Error retrieving data
                }
                };
           const favorite = places.filter(item=>{
                if(item.name.toLowerCase().includes(state.query.toLowerCase()) || item.description.toLowerCase().includes(state.query.toLowerCase())){
                     return item;
                }
           })
           setFavoritePlaces(favorite);
       }
    }

    const changeCategory = (e) =>{
        setCategoryId(e)
    }

    useEffect(() => {
        getPlaces(state, categoryId);

    }, [state,categoryId]);

    //  console.log("dentro do places", state);


    return (
        <View>
            <Text style={styles.title}>{props.title}</Text>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
        >
        <Pressable key={0}  onPress={(e)=>changeCategory(0)}>
            <Text style={categoryId==0?styles.categoryActive:styles.categoryItem}>Todos</Text>
        </Pressable>
         <Pressable key={1}  onPress={(e)=>changeCategory(1)}>
             {({pressed}) =>(

                <Text style={categoryId==1?styles.categoryActive:styles.categoryItem} >Museus</Text>
                )
             }
        </Pressable>
        <Pressable key={2}  onPress={(e)=>changeCategory(2)}>
            <Text style={categoryId==2?styles.categoryActive:styles.categoryItem}>Galerias</Text>
        </Pressable>
        <Pressable key={3}  onPress={(e)=>changeCategory(3)}>
                <Text style={categoryId==3?styles.categoryActive:styles.categoryItem}>Pontos Turísticos</Text>
        </Pressable>
        <Pressable key={4}  onPress={(e)=>changeCategory(4)}>
            <Text style={categoryId==4?styles.categoryActive:styles.categoryItem}>Restaurantes</Text>
        </Pressable>
        <Pressable key={5}  onPress={(e)=>changeCategory(5)}>
            <Text style={categoryId==5?styles.categoryActive:styles.categoryItem}>Estádios de Futebol</Text>
        </Pressable>
        <Pressable key={6}  onPress={(e)=>changeCategory(6)}>
            <Text style={categoryId==5?styles.categoryActive:styles.categoryItem}>Bibliotecas</Text>
        </Pressable>
        <Pressable key={7}  onPress={(e)=>changeCategory(7)}>
            <Text style={categoryId==5?styles.categoryActive:styles.categoryItem}>Teatros</Text>
        </Pressable>
        </ScrollView>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}                
            >
                {props.favorite ?favoritePlaces.map((item) => (
                    
                     <Place place={item} key={item.id} />
                )):  placesFiltered.length?placesFiltered.map((item) => (
                    
                     <Place place={item} key={item.id} />
                )):places.map((item) => (
                    <Place place={item} key={item.id} />
                ))}
              
                
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        color: '#000',
        fontWeight: '600',
    },
    categoriesContainer: {        
        marginTop: 15,
    },
    categoryItem: {
        marginLeft: 15,
        color: '#7B7A7A',
    },
    categoryActive: {
        color: '#000',
        marginLeft: 15,
        borderBottomWidth: 3,
        borderBottomColor: '#F53636',
    },
});

export default Places;