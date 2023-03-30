function saudacao(nome) {
  return `${nome}, bom dia!` // Utilizar o return é importante porque envia o valor que a função retorna para a váriavel
}

const variavel = saudacao('Wesley')
// console.log(variavel)

function soma(x = 10, y = 56) {
  const somando = x + y
  return somando
}

// console.log(soma(0, 7))

const raiz = function (n) {
  const conta = n ** 0.5
  return conta
}

// console.log(raiz(9))

const resto = (n, r) => n % r

// const restante = resto(13, 2)

console.log(restante)

function restio(a, b) {
  console.log(a + b)
}

// console.log(restio(5, 3))
