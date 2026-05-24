const Personagem = require("./Personagem.js");

class Orc extends Personagem {
  constructor() {
    super("Orc", 30, 10, 1, "Orc");
  }
}

module.exports = Orc;
