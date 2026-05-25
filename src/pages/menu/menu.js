const divOpcoesMenu = document.querySelectorAll(".opcao-menu");
const OPCOESMENU = {
  "novo-jogo": "../game/game.html",
  opcoes: "#",
  sair: "#",
};

divOpcoesMenu.forEach((div) => {
  div.addEventListener("click", function (event) {
    event.preventDefault();
    const opcao = div.getAttribute("data-opcao");

    const urlDestino = OPCOESMENU[opcao];

    div.classList.add("cortando");

    setTimeout(() => {
      window.location.href = urlDestino;
    }, 300);
  });
});
