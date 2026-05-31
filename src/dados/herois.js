import herois from "../classes/Heroi.js";

const heroisPorId = new Map([]);

for (const chave in herois) {
  const ClassePersonagem = herois[chave];

  heroisPorId.set(ClassePersonagem.id, ClassePersonagem);
}

export function criarHeroiPorId(id) {
  const ClassePersonagem = heroisPorId.get(Number(id));

  if (!ClassePersonagem) {
    throw new Error(`Heroi com id ${id} não encontrado.`);
  }

  return new ClassePersonagem();
}

export const todosHerois = [new herois.Guerreiro(), new herois.Mago()];
