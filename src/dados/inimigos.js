import inimigos from "../classes/Inimigo.js";

const inimigosPorId = new Map([]);

for (const chave in inimigos) {
  const ClasseInimigo = inimigos[chave];
  inimigosPorId.set(ClasseInimigo.id, ClasseInimigo);
}

export function criarInimigoPorId(id) {
  const ClasseInimigo = inimigosPorId.get(Number(id));

  if (!ClasseInimigo) {
    throw new Error(`Inimigo com id ${id} não encontrado.`);
  }

  return new ClasseInimigo();
}
