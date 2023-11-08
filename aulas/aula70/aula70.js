const pessoa = {
  nome: "Wesley",
  sobrenome: "Icaro",
  idade: 25,
};

const chave = "nome";
// console.log(pessoa[chave])
// console.log(pessoa.sobrenome)
// console.log(pessoa['idade'])

const pessoa1 = new Object();
pessoa1.nome = "José";
pessoa1.sobrenome = "Maria";
pessoa1.idade = 25;

// console.log(pessoa1[chave])
// console.log(pessoa1['sobrenome'])

delete pessoa1[chave];
// console.log(pessoa1)

pessoa1.falarNome = function () {
  return `${this.sobrenome} está falando o seu nome.`;
};

pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

// console.log(pessoa1.getDataNascimento())

for (let chave in pessoa1) {
  console.log(pessoa1[chave]);
}

// Functions em objetos são métodos
function criarPessoa(nomeAbencoado, sobrenomeAbencoado) {
  return {
    nomeAbencoado,
    sobrenomeAbencoado,
    nomeCompletoAbencoado() {
      return `${this.nomeAbencoado} ${this.sobrenomeAbencoado}`;
    },
  };
}

const p1 = criarPessoa("Wesley", "Icaro");

console.log(p1.nomeCompletoAbencoado());

function Carro(marca, ano) {
  this.marca = marca;
  this.ano = ano;

  Object.freeze(this);

  // return this;
}

// p1 = (ENDERECOMEMORIA) -> "Valor"
// P1.ENDERECOMEMORIA =  {marca: 'Outra coisa}
// p1 = (NOVOENDERECOMEMORIA) -> ""
const c1 = new Carro("Fiat", 2023);
delete c1.marca;
c1.ano = 2013;
const c2 = new Carro("Ford", 2018);
console.log(c1);

c2.fala = function () {
  console.log("Olá mundo!!!");
};

// c2.fala();
