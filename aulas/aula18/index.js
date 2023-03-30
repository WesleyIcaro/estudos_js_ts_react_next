// const array = [1, 2, 3]
// array.push(4)
// array[0] = 'Luiz'
// array = 'Outra'

// No caso do const para array podemos alterar somente os elementos, mas não podemos reatribuir o valor da const. Para isso dar certo, devemos utilizar o let

let arrayDosCrias = [1, 2, 3]
arrayDosCrias.push(4)
arrayDosCrias[0] = 'Luiz'
arrayDosCrias = 'Outra'

// console.log(arrayDosCrias)

const pessoas = {
  nome: 'Wesley',
  sobrenome: 'Icaro',
  idade: 24,

  fala() {
    console.log(`O ${this.nome} tem ${this.idade} anos de idade.`)
  },

  incrementaIdade() {
    this.idade++
  }
}

pessoas.fala()
pessoas.incrementaIdade()
pessoas.fala()
pessoas.incrementaIdade()
pessoas.fala()
pessoas.incrementaIdade()
pessoas.fala()
pessoas.incrementaIdade()
pessoas.fala()

// console.log(pessoas.nome)
// console.log(pessoas.idade)

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade
  }
}

const pessoa1 = criaPessoa('Wesley', 'Icaro', 24)
const pessoa2 = criaPessoa('Luana', 'Azevedo', 20)
const pessoa3 = criaPessoa('Victor', 'Hugo', 20)
const pessoa4 = criaPessoa('Guilherme', 'Duarte', 20)
const pessoa5 = criaPessoa('Tamara', 'Luzia', 23)

// console.log(
//   pessoa1.idade,
//   pessoa2.nome,
//   pessoa3.sobrenome,
//   pessoa4.idade,
//   pessoa5.nome
// )
