import { criarCard, inicializarCarrossel } from "./componentes/componentes.js";
import adicionarElemento from "../../utils/dom.js";

const divContainer = document.querySelector(".secao-personagens");
const personagens = [
  {
    id: 1,
    nome: "Ezreal",
    classe: "Assassino",
    imagem: "../../assets/personagens/ezreal.png",
  },
  {
    id: 2,
    nome: "Ahri",
    classe: "Mago",
    imagem: "../../assets/personagens/ahri.png",
  },
  {
    id: 3,
    nome: "Garen",
    classe: "Tanque",
    imagem: "../../assets/personagens/garen.png",
  },
];

function telaSelecaoPersonagem() {
  const carrossel = document.getElementById("carrossel");
  const trilha = document.getElementById("trilha");
  const btnEsquerdo = document.getElementById("btn-esquerdo");
  const btnDireito = document.getElementById("btn-direito");

  personagens.forEach((personagem) => {
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
  });

  btnDireito.addEventListener("click", () => {
    carrosselPersonagens.proximoCard();
  });
}

telaSelecaoPersonagem();
