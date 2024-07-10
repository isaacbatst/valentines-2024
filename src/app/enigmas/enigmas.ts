// enigma 1
// Pergunta: Em breve, embarcaremos em uma jornada onde o tempo se entrelaça com a história e os sabores nos levam a novas descobertas. Prepare-se para uma viagem inesquecível. O que você deve fazer para estar pronta?
// Pista: Pense no que você precisa organizar antes de uma viagem, como roupas e itens pessoais, e esteja pronta para descobrir novos lugares e experiências.
// Resposta: Preparar malas e organizar-se para uma viagem


//  Enigma 2: Viagem para Recife
// Data de Liberação: 12 de julho às 8h
// Descrição: Um enigma de física e história que envolve a trajetória de um objeto em movimento e um marco arquitetônico.
// Pergunta: Imagine um objeto sendo lançado de um ponto central em uma cidade cuja história foi pintada de laranja por um período. Esta cidade pulsa seu ponto de partida, onde o passado encontra o presente. Qual é essa cidade?
// Pista: Este lugar foi um dia defendido por um nobre europeu cuja ponte ainda ecoa seu nome. Pense em uma cidade onde a primeira sinagoga das Américas se encontra.
// Resposta: Recife

import { Requisito } from "./requisito/requisito";
import { RequisitoData } from "./requisito/requisito-data";
import { RequisitoEnigma } from "./requisito/requisito-enigma";

// Enigma 3: Almoço Especial
// Data de Liberação: 12 de julho às 11h45 (geolocalização ao chegar no restaurante)
// Descrição: Um enigma sobre física aplicada à gastronomia que a levará ao restaurante favorito.
// Pergunta: Considere que a força gravitacional atua sobre uma maçã caindo de uma árvore. O restaurante tem um nome que evoca a parte vital e enraizada dessa árvore, aquela que mantém a estabilidade e crescimento. Qual é o nome do restaurante?
// Pista: Pense na língua que pode associar árvores a lugares, onde 'Arvo' é uma referência etimológica.
// Resposta: Arvo

// Enigma 4: Visita ao Instituto Brennand
// Data de Liberação: 12 de julho às 13h30 (geolocalização ao chegar no Instituto)
// Descrição: Um refúgio onde a arte e a história se encontram, guardado por muralhas que ecoam contos medievais. Qual é o nome deste lugar onde o tempo parece parar?
// Pista: Pense em um nome que remete a cavaleiros e histórias antigas, um lugar que é tanto um castelo quanto um museu.
// Resposta: Instituto Brennand

// Enigma 5: Viagem para João Pessoa
// Data de Liberação: Após a visita ao Instituto Brennand (geolocalização ao sair do Instituto)
// Descrição: Em uma cidade onde as águas dançam e criam paisagens efêmeras, há uma homenagem a um protetor histórico que se reflete em suas ruas e praias. Qual é o nome dessa cidade?
// Pista: Este lugar é a capital de um estado cujo nome é um tributo a uma figura histórica que protegeu suas terras. Suas praias são um segredo revelado pelas marés.
// Resposta: João Pessoa

// Enigma 6: Jantar no Esperanto
// Data de Liberação: 12 de julho às 19h (geolocalização ao chegar no bar)
// Descrição: No campo da química, a transformação de substâncias traz surpresas inesperadas, assim como a fusão de sabores em um bar cuja especialidade é um petisco regional com um toque gourmet. Qual é o nome deste bar?
// Pista: Imagine um nome que sugere uma língua universal, onde todos podem se entender através dos sabores.
// Resposta: Esperanto

export const enigmas: {
  id: number;
  pergunta: string;
  resposta: string;
  pista: string;
  requisitos: Requisito[];
}[] = [
  {
    id: 1,
    pergunta:
      "Em breve, embarcaremos em uma jornada onde o tempo se entrelaça com a história e os sabores nos levam a novas descobertas. Prepare-se para uma viagem inesquecível. O que você deve fazer para estar pronta?",
    resposta: "Preparar malas e organizar-se para uma viagem",
    pista:
      "Pense no que você precisa organizar antes de uma viagem, como roupas e itens pessoais, e esteja pronta para descobrir novos lugares e experiências.",
    requisitos: [
      new RequisitoData(new Date("2024-07-10T13:00:00-03:00")),
    ],
  },
  {
    id: 2,
    pergunta:
      "Imagine um objeto sendo lançado de um ponto central em uma cidade cuja história foi pintada de laranja por um período. Esta cidade pulsa seu ponto de partida, onde o passado encontra o presente. Qual é essa cidade?",
    resposta: "Recife",
    pista:
      "Este lugar foi um dia defendido por um nobre europeu cuja ponte ainda ecoa seu nome. Pense em uma cidade onde a primeira sinagoga das Américas se encontra.",
    requisitos: [
      new RequisitoData(new Date("2024-07-11T13:00:00-03:00")),
      new RequisitoEnigma(1),
    ],
  },
  {
    id: 3,
    pergunta:
      "Considere que a força gravitacional atua sobre uma maçã caindo de uma árvore. O restaurante tem um nome que evoca a parte vital e enraizada dessa árvore, aquela que mantém a estabilidade e crescimento. Qual é o nome do restaurante?",
    resposta: "Arvo",
    pista:
      "Pense na língua que pode associar árvores a lugares, onde 'Arvo' é uma referência etimológica.",
    requisitos: [
      new RequisitoData(new Date("2024-07-12T08:00:00-03:00")),
      new RequisitoEnigma(1),
      new RequisitoEnigma(2),
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
      new RequisitoData(new Date("2024-07-12T12:00:00-03:00")),
      new RequisitoEnigma(1),
      new RequisitoEnigma(2),
      new RequisitoEnigma(3),
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
      new RequisitoData(new Date("2024-07-12T14:30:00-03:00")),
      new RequisitoEnigma(1),
      new RequisitoEnigma(2),
      new RequisitoEnigma(3),
      new RequisitoEnigma(4),
    ]
  },
  {
    id: 6,
    pergunta:
      "No campo da química, a transformação de substâncias traz surpresas inesperadas, assim como a fusão de sabores em um bar cuja especialidade é um petisco regional com um toque gourmet. Qual é o nome deste bar?",
    resposta: "Esperanto",
    pista:
      "Imagine um nome que sugere uma língua universal, onde todos podem se entender através dos sabores.",
    requisitos: [
      new RequisitoData(new Date("2024-07-12T17:00:00-03:00")),
      new RequisitoEnigma(1),
      new RequisitoEnigma(2),
      new RequisitoEnigma(3),
      new RequisitoEnigma(4),
      new RequisitoEnigma(5),
    ],
  },
];