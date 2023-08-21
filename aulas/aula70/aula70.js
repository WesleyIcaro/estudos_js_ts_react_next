const pessoa = {
  nome: 'Wesley',
  sobrenome: 'Icaro',
  idade: 25
}

const chave = 'nome'
// console.log(pessoa[chave])
// console.log(pessoa.sobrenome)
// console.log(pessoa['idade'])

const pessoa1 = new Object()
pessoa1.nome = 'José'
pessoa1.sobrenome = 'Maria'
pessoa1.idade = 25

// console.log(pessoa1[chave])
// console.log(pessoa1['sobrenome'])

delete pessoa1[chave]
// console.log(pessoa1)

pessoa1.falarNome = function () {
  console.log(`${this.sobrenome} está falando o seu nome.`)
}

pessoa1.getDataNascimento = function () {
  const dataAtual = new Date()
  return dataAtual.getFullYear() - this.idade
}

// console.log(pessoa1.getDataNascimento())

for (let chave in pessoa1) {
  console.log(pessoa1[chave])
}

// Functions em objetos são métodos
