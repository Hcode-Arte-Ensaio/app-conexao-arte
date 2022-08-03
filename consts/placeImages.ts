import { ImageSourcePropType } from "react-native";

/*
interface ImageProps {
    id: string;
    image: ImageSourcePropType;
}

const placeImages: ImageProps[] = [
    {
        id: "10ba5402-2ca0-48d4-8463-14623424c312",
        image: require('../assets/images/gallery/president-erick-jacquin.jpg')
    }, {
        id: "18a31bdd-bcc8-41ce-baa3-be2e6faad99f",
        image: require('../assets/images/gallery/theatro-municipal.jpg')
    }, {
        id: "2638fb5f-391f-4e82-810a-9b6f63e4f363",
        image: require('../assets/images/gallery/beco-batman.jpg')
    }, {
        id: "38354141-5446-4ed1-ab56-995f193bb351",
        image: require('../assets/images/gallery/mercado-municipal.jpg')
    }, {
        id: "3a05b041-2cb5-4e2e-af71-78acdef42854",
        image: require('../assets/images/gallery/museu-do-futebol.jpg')
    }, {
        id: "5b1c91c2-24e0-4b9f-9468-76631155fc44",
        image: require('../assets/images/gallery/pinacoteca.jpg')
    }, {
        id: "78043c06-86b7-4aac-9f39-00cc97598157",
        image: require('../assets/images/gallery/masp.jpg')
    }, {
        id: "81c213c2-2aed-4021-95e2-f2c1bc83c0e3",
        image: require('../assets/images/gallery/museu-do-ipiranga.jpg')
    }, {
        id: "a227c507-387a-43c7-b4e8-0a82e86704da",
        image: require('../assets/images/gallery/autodromo-interlagos.jpg')
    }, {
        id: "aedcd62d-0168-4f9c-abba-3d2b0d12f478",
        image: require('../assets/images/gallery/museu-videogame.jpg')
    }, {
        id: "d4a7e335-899f-4e3d-b9f6-bca5f69609cc",
        image: require('../assets/images/gallery/parque-ibirapuera.jpg')
    }, {
        id: "fed883a8-f300-4049-bc4e-33a8b67153a3",
        image: require('../assets/images/gallery/aquario.jpg')
    }, {
        id: "6c3b5c10-1264-4401-8844-4428c04c8cb4",
        image: require('../assets/images/gallery/avenida-paulista.jpg'),
    },
];
*/

interface ImageProps {
  id: number;
  image: ImageSourcePropType;
}

const placeImages: ImageProps[] = [
  {
    id: 1,
    image: require("../assets/images/gallery/beco_do_batman.jpg"),
  },
  {
    id: 2,
    image: require("../assets/images/gallery/ccj_ruth_cardoso.jpg"),
  },
  {
    id: 3,
    image: require("../assets/images/gallery/cc_grajau.jpg"),
  },
  {
    id: 4,
    image: require("../assets/images/gallery/casarao_vila_guilherme.jpg"),
  },
  {
    id: 5,
    image: require("../assets/images/gallery/cc_julio_guerra.jpg"),
  },
  {
    id: 6,
    image: require("../assets/images/gallery/museu_do_ipiranga.jpg"),
  },
  {
    id: 7,
    image: require("../assets/images/gallery/theatro_municipal_sp.jpg"),
  },
  {
    id: 8,
    image: require("../assets/images/gallery/masp.jpg"),
  },
  {
    id: 9,
    image: require("../assets/images/gallery/mam.jpg"),
  },
  {
    id: 10,
    image: require("../assets/images/gallery/autodromo_de_interlagos.jpg"),
  },
  {
    id: 11,
    image: require("../assets/images/gallery/avenida_paulista.jpg"),
  },
  {
    id: 12,
    image: require("../assets/images/gallery/casa_da_cidade_tatuape.jpg"),
  },
  {
    id: 13,
    image: require("../assets/images/gallery/jardim_botanico.jpg"),
  },
  {
    id: 14,
    image: require("../assets/images/gallery/instituto_tomie_ohtake.jpg"),
  },

  {
    id: 15,
    image: require("../assets/images/gallery/instituto_moreira_salles.jpg"),
  },
  {
    id: 16,
    image: require("../assets/images/gallery/museu_do_futebol.jpg"),
  },
  {
    id: 17,
    image: require("../assets/images/gallery/parque_ibirapuera.jpg"),
  },
  {
    id: 18,
    image: require("../assets/images/gallery/patio_do_colegio.jpg"),
  },
  {
    id: 19,
    image: require("../assets/images/gallery/pinacoteca.jpg"),
  },
  {
    id: 20,
    image: require("../assets/images/gallery/museu_da_lingua_portuguesa.jpg"),
  },
  {
    id: 21,
    image: require("../assets/images/gallery/centro_cultural_banco_do_brasil.jpg"),
  },
  {
    id: 22,
    image: require("../assets/images/gallery/feira_benedito_calixto.jpg"),
  },
  {
    id: 23,
    image: require("../assets/images/gallery/mercado_municipal.jpg"),
  },
  {
    id: 24,
    image: require("../assets/images/gallery/mis.jpg"),
  },
  {
    id: 25,
    image: require("../assets/images/gallery/museu_da_casa_brasileira.jpg"),
  },
];

export default placeImages;
