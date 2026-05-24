const Personagem = require("./Personagem.js");

class Guerreiro extends Personagem {
  constructor(nome) {
    super(nome, 50, 10, 1, "Guerreiro");
  }
}

module.exports = Guerreiro;
