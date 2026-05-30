function criarCard(dados) {
  const article = document.createElement("article");
  article.classList.add("personagem");

  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const img = document.createElement("img");

  img.alt = dados.nome;

  const h3 = document.createElement("h3");
  h3.classList.add("classe-personagem");
  h3.textContent = dados.nome;

  criarCantos(divCard);
  article.appendChild(divCard);
  divCard.appendChild(img);
  article.appendChild(h3);

  return article;
}

// Criar os cantos decorativos para o card
function criarCantos(divCard) {
  const cantos = [
    "canto-top-esquerdo",
    "canto-top-direito",
    "canto-inferior-esquerdo",
    "canto-inferior-direito",
  ];

  cantos.forEach((canto) => {
    const span = document.createElement("span");
    span.classList.add("canto", canto);
    divCard.appendChild(span);
  });
}

function inicializarCarrossel({ carrossel, trilha, seletorCard }) {
  const cards = trilha.querySelectorAll(seletorCard);

  let indiceAtual = 0;

  function centralizarCard(indice) {
    const card = cards[indice];

    const centroCarrossel = carrossel.offsetWidth / 2;
    const centroCard = card.offsetLeft + card.offsetWidth / 2;

    const deslocamento = centroCarrossel - centroCard;
    trilha.style.transform = `translateX(${deslocamento}px)`;

    cards.forEach((c) => c.classList.remove("ativo"));
    card.classList.add("ativo");
  }

  function proximoCard() {
    if (indiceAtual < cards.length - 1) {
      indiceAtual++;
      centralizarCard(indiceAtual);
    }
  }

  function voltarCard() {
    if (indiceAtual > 0) {
      indiceAtual--;
      centralizarCard(indiceAtual);
    }
  }

  function iniciar() {
    centralizarCard(indiceAtual);
  }

  return {
    proximoCard,
    voltarCard,
    iniciar,
    indiceAtual: () => indiceAtual,
  };
}

function criarLinhaHabilidade(habilidade) {
  const divHabilidade = document.createElement("div");
  divHabilidade.classList.add("linha-habilidade");

  const img = document.createElement("img");
  img.alt = habilidade.nome;

  const divInfo = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.classList.add("nome-habilidade");
  h3.textContent = habilidade.nome;

  const p = document.createElement("p");
  p.classList.add("efeito-habilidade");
  p.textContent = habilidade.efeito;

  divInfo.appendChild(h3);
  divInfo.appendChild(p);
  divHabilidade.appendChild(img);
  divHabilidade.appendChild(divInfo);

  return divHabilidade;
}

export { criarCard, inicializarCarrossel, criarLinhaHabilidade };
