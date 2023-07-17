// Filter -> Sempre retornar um array com a mesma quantidade de elementos ou menos

// Map, reduce

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// function callBackFilter(valor) {
//   return valor > 10 // Modo inteligente

//   // if (valor > 10) {
//   //   return true // Modo burro de fazer
//   // } else {
//   //   return false
//   // }

//   // valor ? true : false // Não deu certo
// }

const numerosFiltrados = numeros.filter(valor => valor > 10) // Modo inteligente
// console.log(numerosFiltrados)

const pessoas = [
  { nome: 'Luiz', idade: 18 },
  { nome: 'Wesley', idade: 25 },
  { nome: 'Yasmim', idade: 16 },
  { nome: 'Jenifer', idade: 17 },
  { nome: 'Sueli', idade: 40 },
  { nome: 'Vanderlei', idade: 44 },
  { nome: 'Edite', idade: 48 }
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 6)
const pessoasComMaisDe40 = pessoas.filter(obj => obj.idade > 40)
const pessoasComNomeFinalA = pessoas.filter(obj =>
  obj.nome.toLocaleLowerCase().endsWith('i')
)

console.log(pessoasComNomeFinalA)
