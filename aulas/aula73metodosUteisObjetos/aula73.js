const produto = { nome: "Produto", preco: 1.8 };
// const caneca = Object.assign({}, produto, { material: "porcelana" }); // Em caso de objetos com a chave com o mesmo nome, o último objeto prevalece

// const caneca = { ...produto, material: "porcelana" };

const caneca = {
  nome: produto.nome,
  preco: produto.preco,
  material: "Porcelana",
};

// Object.defineProperty(caneca, "preco", {
//   writable: false,
//   configurable: false,
// });

// Object.freeze(caneca); // Não deixa o objeto sofre alteração

// caneca.nome = "Outro nome";
// caneca.preco = 2.5;

// delete caneca.nome;

// console.log(produto);
// console.log(caneca);

// console.log(Object.getOwnPropertyDescriptor(caneca, "preco"));

// console.log(Object.keys(caneca));

// console.log(Object.values(caneca));

// console.log(Object.entries(caneca));

// for (let entry of Object.entries(caneca)) {
//   console.log(entry);
// }

// for (let [chave, valor] of Object.entries(produto)) {
//   console.log(chave, valor);
// }

for (let valor of Object.entries(caneca)) {
  console.log(valor[0], valor[1]);
}
