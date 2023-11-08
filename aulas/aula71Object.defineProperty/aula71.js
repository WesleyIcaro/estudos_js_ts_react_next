// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // Mostra a chave
    configurable: false, // Configurável
    get: function () {
      return estoque;
    },
  });

  //   Object.defineProperty(this, "estoque", {
  //     enumerable: true, // Mostra a chave
  //     // value: estoque
  //     value: function () {
  //       return estoque;
  //     }, // Valor
  //     writable: false, // Pode alterar
  //     configurable: false, // Configurável
  //   });
  //   Object.defineProperties(this, {
  //     nome: {
  //       enumerable: true, // Mostra a chave
  //       value: nome,
  //       writable: false, // Pode alterar
  //       configurable: false, // Configurável
  //     },
  //     preco: {
  //       enumerable: true, // Mostra a chave
  //       value: preco,
  //       writable: false, // Pode alterar
  //       configurable: false, // Configurável
  //     },
  //   });
}

const p1 = new Produto("Tênis", 329, 4);
p1.estoque = 50000;
console.log(p1);
console.log(p1.estoque);
// console.log(Object.keys(p1));

// for (let chave in p1) {
//   console.log(chave);
// }
