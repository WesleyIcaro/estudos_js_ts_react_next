// reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce((acumulador, valor, indice, array) => {
  if (valor % 2 !== 0) {
    acumulador += valor
  }

  return acumulador
}, 0)

// console.log(total)

const pessoas = [
  { nome: 'Luiz', idade: 18 },
  { nome: 'Wesley', idade: 25 },
  { nome: 'Yasmim', idade: 16 },
  { nome: 'Jenifer', idade: 17 },
  { nome: 'Sueli', idade: 40 },
  { nome: 'Vanderlei', idade: 44 },
  { nome: 'Edite', idade: 48 }
]

const pessoasMaisVelha = pessoas.reduce((acumulador, obj) => {
  if (acumulador.idade > obj.idade) return acumulador
  return obj
})

// console.log(pessoasMaisVelha)

const removeDuplicates = array => {
  return array.filter((item, index) => array.indexOf(item) === index)
}

const semRep = removeDuplicates(numeros)

console.log(numeros)
console.log(semRep)
