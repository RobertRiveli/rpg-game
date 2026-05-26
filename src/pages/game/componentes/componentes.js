function criarCard(divContainer) {
  const article = document.createElement("article");
  article.classList.add("personagem");

  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const img = document.createElement("img");
  img.src = "../../assets/personagens/ezreal.png";
  img.alt = "Ezreal";

  const h3 = document.createElement("h3");
  h3.classList.add("classe-personagem");
  h3.textContent = "ASSASSINO";

  criarCantos(divCard);
  divContainer.appendChild(article);
  article.appendChild(divCard);
  divCard.appendChild(img);
  article.appendChild(h3);
}

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

export { criarCard };
