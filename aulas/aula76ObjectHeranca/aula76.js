// Produto -> aumento, desconto
// Camiseta = cor, caneca = material
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") return;
      estoque = valor;
      //   console.log("Temos" + valor + "xícaras no nosso estoque");
      //   return valor;
    },
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto("Gen", 111);

const camiseta = new Camiseta("Regata", 59.99, "Preto");

const caneca = new Caneca("Xícara", 30, "vidro", 5);

camiseta.aumento(10);

caneca.aumento(50);

console.log(camiseta);
console.log(produto);

caneca.estoque = 120;

console.log(caneca.estoque);
