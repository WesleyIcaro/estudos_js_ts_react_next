// Map

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const dobrarNumeros = numeros.map(valor => valor * 2)

// console.log(dobrarNumeros)

const pessoas = [
  { nome: 'Luiz', idade: 18 },
  { nome: 'Wesley', idade: 25 },
  { nome: 'Yasmim', idade: 16 },
  { nome: 'Jenifer', idade: 17 },
  { nome: 'Sueli', idade: 40 },
  { nome: 'Vanderlei', idade: 44 },
  { nome: 'Edite', idade: 48 }
]

const pessoasNomes = pessoas.map(valor => valor.nome)
const pessoasSemNomes = pessoas.map(obj => ({ idade: obj.idade }))
// return { idade: obj.idade }

// delete obj.nome
// return obj
// })

const pessoasId = pessoas.map((obj, indice) => {
  const newObj = { ...obj }
  newObj.id = indice
  return newObj
})

// console.log(pessoasNomes)
// console.log(pessoasSemNomes)
console.log(pessoasId)
