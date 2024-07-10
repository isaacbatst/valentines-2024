import { Requisito } from "./requisito/requisito";
import { RequisitoData } from "./requisito/requisito-data";
import { RequisitoEnigma } from "./requisito/requisito-enigma";

export type Enigma = {
  id: number;
  descoberta?: string[];
  pergunta: string;
  resposta: string;
  pista?: string;
  requisitos: Requisito[];
};

export const enigmas: Enigma[] = [
  {
    id: 1,
    // titulo resumido que não pode dar a resposta
    pergunta:
      "Estrelas guiam o caminho ancestral,\nEcoam histórias num compasso astral.\nO presente e o passado se cruzam no ar,\nQual é o passo para conseguirmos chegar?\n\nPalavras escondem segredos a desvendar,\nUma ação singular antes de começar.\nO que os viajantes fazem com fervor,\nUma resposta simples, mas com grande valor.",
    resposta: "Viajar",
    pista:
      "Pense em um verbo que remete a explorar o mundo, a conhecer novos lugares e culturas. Uma ação que é tanto física quanto mental, que nos leva a novas descobertas.",
    requisitos: [new RequisitoData(new Date("2024-07-10T12:00:00-03:00"))],
    descoberta: [
      "Muito bem!\n Mas será que sabe exatamente aonde iremos explorar?",
      "Prepare-se pois exatamente às 7h precisaremos zarpar.",
    ],
  },
  {
    id: 2,
    pergunta:
      "Agora Imagine um objeto sendo lançado de um ponto central em uma cidade cuja história foi pintada de laranja.\n\nEsta cidade pulsa um ponto de partida, onde o passado encontra o presente. Qual é essa cidade?",
    resposta: "Recife",
    pista:
      "Este lugar foi um dia defendido por um nobre europeu cuja ponte ainda ecoa seu nome. Pense em uma cidade onde a primeira sinagoga das Américas se encontra.",
    requisitos: [
      // new RequisitoData(new Date("2024-07-11T13:00:00-03:00")),
      new RequisitoData(new Date("2024-07-10T13:00:00-03:00")),
      new RequisitoEnigma(1),
    ],
    descoberta: [
      "Parabéns!\nAgora que você sabe onde estamos indo, o que acha de descobrir o que faremos por lá?",
      "Às 11h45 teremos um encontro marcado.",
    ],
  },
  {
    id: 3,
    pergunta:
      "Considere que a força gravitacional atua sobre uma maçã caindo de uma árvore. O restaurante tem um nome que evoca a parte vital, sem ela não falamos seu nome. Qual é o nome do restaurante?",
    resposta: "Arvo",
    pista:
      "Pense no croquete mais gostoso que você já comeu, um lugar que é tanto um restaurante quanto um jardim",
    requisitos: [
      new RequisitoData(new Date("2024-07-10T08:00:00-03:00")),
      new RequisitoEnigma(1),
      new RequisitoEnigma(2),
    ],
    descoberta: [
      "Excelente!\nAgora que você sabe onde vamos almoçar, o que acha de descobrir o que faremos depois?",
      "Das 13h às 16h a programação está garantida.",
    ],
  },
  {
    id: 4,
    pergunta:
      "Um refúgio onde a arte e a história se encontram, guardado por muralhas que ecoam contos medievais. Qual é o nome deste lugar onde o tempo parece parar?",
    resposta: "Instituto Brennand",
    pista:
      "Pense em um nome que remete a cavaleiros e histórias antigas, um lugar que é tanto um castelo quanto um museu.",
    requisitos: [
      new RequisitoData(new Date("2024-07-10T12:00:00-03:00")),
      new RequisitoEnigma(1),
      new RequisitoEnigma(2),
      new RequisitoEnigma(3),
    ],
    descoberta: [
      "Parabéns!\nAgora sabe onde vamos passar a tarde, mas o que faremos depois?",
      "Abra sua mente,\n pois nem só de Recife vive o homem.",
    ],
  },
  {
    id: 5,
    pergunta:
      "Em uma cidade onde as águas dançam e criam paisagens efêmeras, há uma homenagem a um protetor histórico que se reflete em suas ruas e praias. Qual é o nome dessa cidade?",
    resposta: "João Pessoa",
    pista:
      "Este lugar é a capital de um estado cujo nome é um tributo a uma figura histórica que protegeu suas terras. Suas praias são um segredo revelado pelas marés.",
    requisitos: [
      new RequisitoData(new Date("2024-07-10T14:30:00-03:00")),
      new RequisitoEnigma(1),
      new RequisitoEnigma(2),
      new RequisitoEnigma(3),
      new RequisitoEnigma(4),
    ],
    descoberta: [
      "Nosso destino é inevitável\nAposto que você já sabe o que faremos por lá.",
    ],
  },
  {
    id: 6,
    pergunta:
      "No campo da química, a transformação de substâncias traz surpresas inesperadas, assim como a fusão de sabores em certo bar.\n\nImagine um nome que sugere uma língua universal, onde todos podem se entender através dos sabores. cuja especialidade é um petisco regional com um toque gourmet.\n\nQual é o nome deste bar?",
    resposta: "Esperanto",
    requisitos: [
      new RequisitoData(new Date("2024-07-10T15:00:00-03:00")),
      new RequisitoEnigma(1),
      new RequisitoEnigma(2),
      new RequisitoEnigma(3),
      new RequisitoEnigma(4),
      new RequisitoEnigma(5),
    ],
  },
];