// Declaração de função
falaOi()
function falaOi() {
  console.log('Oie')
}

// const souUmDado = function () {
//   console.log('Sou um dado.')
// }

const souUmDado = function nomeDaFuncao() {
  console.log('Sou um dado.')
}

function executarFuncao(funcao) {
  console.log('Vou executar sua função abaixo:')
  funcao()
}

executarFuncao(souUmDado)

const arrowFunction = () => {
  console.log('Função arrow!')
}
arrowFunction()

// const obj = {
//   falar: function () {
//     console.log('Estou falando...')
//   }
// }

const obj = {
  falar() {
    console.log('Estou falando...')
  }
}
obj.falar()
