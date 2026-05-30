import Personagem from "./Personagem.js";

class Guerreiro extends Personagem {
  constructor() {
    super("Darlan", 50, 3, 1, "Guerreiro");
  }

  retornarHabilidade() {
    return [
      {
        nome: "Golpe Poderoso",
        efeito:
          "Darlan desferre um golpe poderoso que causa 8 de dano em um inimigo.",
      },
      {
        nome: "Postura Defensiva",
        efeito:
          "Darlan assume uma postura defensiva, reduzindo o dano recebido em 30% por 2 turnos.",
      },
    ];
  }
}

class Mago extends Personagem {
  constructor() {
    super("Lazar", 30, 6, 1, "Mago");
  }

  retornarHabilidade() {
    return [
      {
        nome: "Bola de Fogo",
        efeito:
          "Lazar conjura uma bola de fogo que causa 5 de dano em um inimigo.",
      },
      {
        nome: "Escudo Arcano",
        efeito:
          "Lazar cria um escudo mágico que reduz o dano recebido em 50% por 3 turnos.",
      },
    ];
  }
}

const mago = new Mago();
const guerreiro = new Guerreiro();

export default [mago, guerreiro];
