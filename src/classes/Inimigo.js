import Personagem from "./Personagem.js";

class Orc extends Personagem {
  static id = 3;

  constructor() {
    super(Orc.id, "Orc", 30, 10, 1, "Orc");
  }
}

export default { Orc };
