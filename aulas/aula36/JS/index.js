// For in -> lê os índices ou chave dos objetos

const pessoa = {
  nome: 'Wesley',
  sobrenome: 'Icaro',
  idade: 24
}

for (let dado in pessoa) {
  console.log(`${dado}: ${pessoa[dado]}`)
}

// console.log(pessoa.nome)

// const name = 'nome'
// console.log(pessoa[name])

// for (let i in pessoa) {
//   console.log(i)
// }

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i])
// }

// for (let indice in frutas) {
//   console.log(frutas[indice])
// }
