function funcao(a, b, c) {
  let total = 0
  for (let argumento of arguments) {
    total += argumento
  }
  console.log(total, a, b, c)
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f)
}

funcao2(1, 2, 3)

function funcao3(a, b = 10) {
  console.log(a + b)
}

funcao3(2)

function funcao4({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade)
}

const obj = {
  nome: 'Yasmim',
  sobrenome: 'Lima',
  idade: 16
}

funcao4(obj)

//  Or

funcao4({
  nome: 'Wesley',
  sobrenome: 'Icaro',
  idade: 24
})

function funcao5([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3)
}

funcao5(['Edite Salviano', 'Wesley Icaro', 'Yasmim Lima'])

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero
    if (operador === '-') acumulador -= numero
    if (operador === '*') acumulador *= numero
    if (operador === '/') acumulador /= numero
  }
  console.log(acumulador)
}

conta('/', 0, 69, 5, 78, 9)

// Não existe argumento em arrow function

const funcao6 = (...args) => {
  console.log(args)
}

funcao6(4, 5, 6, 7, 8, 34, '-')
