# Estrutura do Projeto

Este documento mostra a organização das pastas e arquivos do projeto.

## Estrutura Inicial

```txt
RPG-GAME/
├─ frontend/
│  ├─ shared/
│  │  ├─ variaveis.css
│  │  └─ componentes.css
│  │
│  ├─ menu/
│  │  ├─ menu.html
│  │  ├─ menu.css
│  │  └─ menu.js
│  │
│  └─ game/
│     ├─ game.html
│     ├─ game.css
│     └─ game.js
│
├─ src/
│  ├─ classes/
│  │  ├─ Personagem.js
│  │  ├─ Heroi.js
│  │  └─ Inimigo.js
│  │
│  ├─ data/
│  │  ├─ herois.js
│  │  └─ inimigos.js
│  │
│  └─ main.js
│
├─ .gitignore
├─ package.json
└─ package-lock.json
```

## Estrutura planejada

```
RPG-GAME/
├─ docs/
│  └─ ESTRUTURA.md
│
├─ public/
│  └─ assets/
│     ├─ images/
│     ├─ sounds/
│     ├─ fonts/
│     └─ icons/
│
├─ src/
│  ├─ pages/
│  │  ├─ menu/
│  │  │  ├─ menu.html
│  │  │  ├─ menu.css
│  │  │  └─ menu.js
│  │  │
│  │  ├─ game/
│  │  │  ├─ game.html
│  │  │  ├─ game.css
│  │  │  └─ game.js
│  │  │
│  │  ├─ selecao-personagem/
│  │  │  ├─ selecao-personagem.html
│  │  │  ├─ selecao-personagem.css
│  │  │  └─ selecao-personagem.js
│  │  │
│  │  └─ batalha/
│  │     ├─ batalha.html
│  │     ├─ batalha.css
│  │     └─ batalha.js
│  │
│  ├─ styles/
│  │  ├─ reset.css
│  │  ├─ variaveis.css
│  │  ├─ componentes.css
│  │  └─ animacoes.css
│  │
│  ├─ classes/
│  │  ├─ Personagem.js
│  │  ├─ Heroi.js
│  │  ├─ Inimigo.js
│  │  ├─ Habilidade.js
│  │  └─ Item.js
│  │
│  ├─ dados/
│  │  ├─ herois.js
│  │  ├─ inimigos.js
│  │  ├─ habilidades.js
│  │  └─ itens.js
│  │
│  ├─ sistemas/
│  │  ├─ batalha.js
│  │  ├─ turno.js
│  │  ├─ dano.js
│  │  ├─ inventorio.js
│  │  └─ audio.js
│  │
│  ├─ utils/
│  │  ├─ navegacao.js
│  │  └─ local-storage.js
│  │
│  └─ main.js
│
├─ .gitignore
├─ package.json
└─ package-lock.json
```

## Explicando as pastas

### `docs/`

Responsável pela documentação

### `public/assets`

Responsável pelas imagens, sons e arquivos estáticos.

### `src/pages`

Responsável pelas telas do sistema

### `src/styles`

Responsável pelos estilos reutilizáveis

### `src/classes`

Responsável pelos moldes do jogo.

### `src/dados`

Responsável pelos dados prontos, como listas de golpes, inimigos, itens.

### `src/sistema`

Responsável pelas regras do jogo. Como que ataca primeiro, lógica dos turnos.

### `src/utils`

Responsável pelas funções auxiliares
