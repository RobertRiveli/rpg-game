import { criarCard } from "./componentes/componentes.js";
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
  personagens.forEach((personagem) => {
    const card = criarCard(personagem);
    adicionarElemento(divContainer, card);
  });
}

telaSelecaoPersonagem();
