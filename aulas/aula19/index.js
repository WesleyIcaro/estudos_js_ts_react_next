/* 
Primitivos (imutáveis) - string - number, bolean, underfined,
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/

// let a = ['ruiz']
// let b = a

// a = 'vagner'

// console.log(a, b)

// let nome = 'Luiz'
// nome = 'Otávio'
// console.log(nome[0])

// let a = [1, 2, 3]
// let b = [...a]
// let c = b
// console.log(a, b)

// a.push(4)
// console.log(a, b)

// b.pop()
// console.log(a, b)

// a.push('Luiz')
// console.log(c)

const a = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
}
const b = { ...a }

a.nome = 'João'
console.log(b)
