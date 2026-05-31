import {
  criarCard,
  inicializarCarrossel,
  criarLinhaHabilidade,
} from "./componentes/componentes.js";
import adicionarElemento from "../../utils/dom.js";
import atributos from "../../dados/atributos.js";
import { criarHeroiPorId, todosHerois } from "../../dados/herois.js";

function carregarAtributos(personagem) {
  const limiteMaximo = 50;

  atributos.forEach((atributo) => {
    const nomeAtributo = document.getElementById(`texto-${atributo}`);
    const barra = document.getElementById(`barra-${atributo}`);
    const valor = personagem[atributo];

    const larguraBarra = (valor / limiteMaximo) * 100;
    barra.style.width = `${larguraBarra}%`;
    nomeAtributo.textContent = `${atributo.toUpperCase()}: ${valor}`;
  });
}

function carregarHabilidades(personagem) {
  const habilidadesContainer = document.getElementById("habilidade");
  habilidadesContainer.innerHTML = "";
  personagem.retornarHabilidade().forEach((habilidade) => {
    adicionarElemento(habilidadesContainer, criarLinhaHabilidade(habilidade));
  });
}

function carregarDadosHeroi(heroiSelecionado) {
  carregarAtributos(heroiSelecionado);
  carregarHabilidades(heroiSelecionado);
}

function telaSelecaoPersonagem() {
  const carrossel = document.getElementById("carrossel");
  const trilha = document.getElementById("trilha");
  const btnEsquerdo = document.getElementById("btn-esquerdo");
  const btnDireito = document.getElementById("btn-direito");
  const btnConfirmar = document.getElementById("btn-confirmar");
  const btnVoltar = document.getElementById("btn-voltar");

  carregarDadosHeroi(todosHerois[0]);

  todosHerois.forEach((personagem) => {
    const card = criarCard(personagem);
    adicionarElemento(trilha, card);
  });

  const carrosselPersonagens = inicializarCarrossel({
    carrossel,
    trilha,
    seletorCard: ".personagem",
  });

  carrosselPersonagens.iniciar();

  btnEsquerdo.addEventListener("click", () => {
    carrosselPersonagens.voltarCard();

    const indicePersonagem = carrosselPersonagens.indiceAtual();
    const heroiSelecionado = todosHerois[indicePersonagem];

    carregarDadosHeroi(heroiSelecionado);
  });

  btnDireito.addEventListener("click", () => {
    carrosselPersonagens.proximoCard();

    const indicePersonagem = carrosselPersonagens.indiceAtual();
    const heroiSelecionado = todosHerois[indicePersonagem];

    carregarDadosHeroi(heroiSelecionado);
  });

  btnConfirmar.addEventListener("click", () => {
    const indicePersonagem = carrosselPersonagens.indiceAtual();
    const heroiSelecionado = criarHeroiPorId(indicePersonagem + 1);

    localStorage.setItem("heroiSelecionado", JSON.stringify(heroiSelecionado));

    window.location.href = "../game/game.html";
  });

  btnVoltar.addEventListener("click", () => {
    window.location.href = "../menu/menu.html";
  });
}

telaSelecaoPersonagem();
