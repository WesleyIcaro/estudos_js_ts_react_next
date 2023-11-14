// // defineProperty - defineProperties
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true, // Mostra a chave
    // value: nome, // valor
    // writable: false, // Pode alterar
    configurable: false, // Configurável
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        throw new TypeError("Tipo inválido!");
      }

      return (estoquePrivado = valor);
    },
  });
}

function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace(" coisa", "");
      nome = valor;
    },
  };
}

const p1 = new Produto("Blusa", 100, 2);

// delete p1.estoque;

// p1.preco = 50000;
// console.log(p1);
// p1.estoque = 8;
// console.log(p1.estoque);
// console.log(Object.keys(p1));

const p2 = criaProduto("camiseta");

p2.nome = "Qualquer coisa!";

console.log(p2.nome);

// for (let chave in p1) {
//   console.log(p1[chave]);
// }
