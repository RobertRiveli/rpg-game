class Personagem {
  constructor(id, nome, vida, dano, level, classe) {
    this.id = id;
    this.nome = nome;
    this.vida = vida;
    this.dano = dano;
    this.level = level;
    this.classe = classe;
  }

  retornarVida() {
    return this.vida;
  }

  subirLevel() {
    this.level += 1;
    this.dano += 1;
    this.vida += 5;
  }

  atacar(alvo) {
    alvo.vida -= this.dano;

    console.log(
      this.nome +
        " atacou " +
        alvo.nome +
        " e causou " +
        this.dano +
        " de dano.",
    );
  }

  receberDano(dano) {
    this.vida -= dano;
    console.log(this.nome + " recebeu " + dano + " de dano.");
  }

  defender(dano) {
    console.log(this.nome + "Está defendendo...");

    let numAleatorio = Math.random() * (6 - 2 + 1) + 2;

    const defesaPorCento = (numAleatorio / 10).toFixed(2);

    const danoRecebido = dano - dano * defesaPorCento;

    this.receberDano(danoRecebido);

    this.retornarVida();
  }
}

export default Personagem;
