// New Object -> Object.prototype
const objA = {
  chaveA: "A",
  //   _proto_: Object.prototype
};

// objA.__proto__ === Object.prototype
// true

const objB = {
  chaveB: "B",
  //   _proto_: chaveA: "A"
};

const objC = new Object();

objC.chaveC = "C";

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveA);
// console.log(objC.chaveB);

function Produto(preco, nome) {
  this.preco = preco;
  this.nome = nome;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto(87, "mouse");
// p1.desconto(100);
p1.aumento(100);

// Literal
const p2 = {
  nome: "Camisa",
  preco: 100,
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(45);
// p2.desconto(125);

console.log(p2);
console.log(p1);

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: false,
    enumerable: true,
    value: 113,
  },
  tamanho: {
    writable: true,
    configurable: false,
    enumerable: true,
    value: 48,
  },
});

p3.aumento(10);
console.log(p3);
