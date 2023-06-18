// return
// Terminar a função
// Retorno função
function soma(a, b) {
  return a + b
}

// console.log(soma(5, 2))

function criaPessoa(nome, idade) {
  return { nome, idade }
}

const p1 = criaPessoa('Wesley', 24)
// Or
const p2 = {
  nome: 'Yasmim',
  idade: 16
}

// console.log(p1, p2)

function falafrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto
  }
  return falaResto
}

const fala = falafrase('Olá')
const resto = fala('mundo!')
// console.log(resto)

// function duplica(n) {
//   return n * 2
// }

// function triplica(n) {
//   return n * 3
// }

// function quadriplica(n) {
//   return n * 4
// }

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador
  }
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2), triplica(2), quadriplica(2))
