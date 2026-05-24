const readline = require("readline-sync");

const Heroi = require("./classes/Heroi");
const Inimigo = require("./classes/Inimigo");

const heroi = new Heroi("Herói");

const opcoes = {
  1: {
    nome: "Atacar",
  },
  2: {
    nome: "Defender",
  },
};

function gerarAcaoInimigo() {
  const acoes = Object.keys(opcoes);
  const indiceAleatorio = Math.floor(Math.random() * acoes.length + 1);

  return opcoes[indiceAleatorio];
}

function escolherAcao() {
  let acao = "";

  do {
    acao = readline.question(`
    1: Atacar,
    2: Defender
    `);

    if (!opcoes[acao]) {
      console.log("Ação inválida!");
    }
  } while (!opcoes[acao]);

  return opcoes[acao];
}

function agir(acao, ator, alvo = "") {
  if (acao === opcoes[1]) {
    ator.atacar(alvo);
  } else if (acao === opcoes[2]) {
    console.log("O " + ator.nome + " se defende!");
  }
}

function finalizarTurno(heroi, inimigo, turno) {
  console.log(`--------------   FIM DO TURNO ${turno}   --------------`);
  console.log(heroi);
  console.log(inimigo);
}

function finalizarBatalha(heroi, inimigo) {
  let fim = false;

  if (heroi.vida <= 0) {
    console.log("O inimigo venceu!");
    fim = true;
  } else if (inimigo.vida <= 0) {
    console.log("O herói venceu!");
    fim = true;
  }

  return fim;
}

function iniciarTurno(numeroTurno, heroi, inimigo) {
  let turno = numeroTurno;

  console.log(`--------------   INÍCIO DO TURNO ${turno}   --------------`);
  console.log("PERSONAGENS: ");

  console.log(heroi);
  console.log(inimigo);

  console.log("Escolha uma ação: ");

  const acaoHeroi = escolherAcao();
  const acaoInimigo = gerarAcaoInimigo();

  agir(acaoHeroi, heroi, inimigo);

  let fim = finalizarBatalha(heroi, inimigo);

  if (fim) {
    return;
  }

  agir(acaoInimigo, inimigo, heroi);

  fim = finalizarBatalha(heroi, inimigo);

  if (fim) {
    return;
  }
}

function iniciar(heroi, numeroBatalha) {
  console.log(`--------------   BATALHA ${numeroBatalha}   --------------`);

  const inimigo = new Inimigo();

  let turno = 1;
  while (!finalizarBatalha(heroi, inimigo)) {
    console.log("--------------------------------");

    iniciarTurno(turno, heroi, inimigo);

    finalizarTurno(heroi, inimigo, turno);
    turno++;
  }

  if (heroi.vida <= 0) {
    return;
  }

  iniciar(heroi, numeroBatalha + 1);
}

iniciar(heroi, 1);
