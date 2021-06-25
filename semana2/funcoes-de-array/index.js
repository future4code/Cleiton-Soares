// Exercícios de interpretação de código

// 1.
// [{nome:'Amanda Rangel', apelido: 'Mandi'}, 0, usuarios]
// [{nome:'Laís Petra', apelido: 'Laura'}, 1, usuarios]
// [{nome:'Letícia Chijo', apelido: 'Chijo'}, 2, usuarios]

//Nem acredito que praticamente acertei essa!!! :D (eu tava na dúvida)

// 2.
// ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo',]

// 3.
// [{ nome: "Amanda Rangel", apelido: "Mandi" }
// { nome: "Laís Petra", apelido: "Laura" }]

// Exercícios de escrita de código

// 1.
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

// a)
const nomePets = pets.map((elemento) => {
  return elemento.nome;
});

console.log(nomePets);

// b)
const salsichaPets = pets.filter((elemento) => {
  return elemento.raca === "Salsicha";
});

console.log(salsichaPets);

// c)
const arrayPoodle = pets.filter((elemento) => {
  return elemento.raca === "Poodle";
});

// // outra alternativa:
// const descontoParaPoodles = pets
//   .filter((pet) => pet.raca === "Poodle")
//   .map(
//     (pet) =>
//       `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`
//   );

// console.log(descontoParaPoodles);

const mensagemPoodle = arrayPoodle.map((elemento) => {
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${elemento.nome}`;
});

console.log(mensagemPoodle);

// 2.
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

// a)
const nomeItens = produtos.map((elemento) => {
  return elemento.nome;
});

console.log(nomeItens);

// b)
const itensComDesconto = produtos.map((item) => {
  const novoObjeto = { nome: item.nome, preco: item.preco };
  novoObjeto.preco = (novoObjeto.preco * 0.95).toFixed(2);
  return novoObjeto;
});

// const itensComDesconto = produtos.map(({ nome, preco }) => {
//   const novoPreco =+ (preco * 0.95).toFixed(2)
//   return {
//     nome,
//     preco: novoPreco
//   }
// })

console.log(itensComDesconto);

// c)
const arrBebidas = produtos.filter(({ categoria }) => {
  return categoria === "Bebidas";
});

console.log(arrBebidas);

// d)
const produtosYpe = produtos.filter((item) => {
  return item.nome.includes("Ypê");
});

console.log(produtosYpe);

// e)
const fraseCompre = produtosYpe.map((item) => {
  return `Compre ${item.nome} por ${item.preco}.`;
});

console.log(fraseCompre);

/////////////////////////DESAFIOOOOOO
// a.
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

const pokemonNomes = pokemons.map((item) => item.nome).sort();

console.log(pokemonNomes);

// b.
