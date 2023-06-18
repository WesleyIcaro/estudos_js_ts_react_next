// IIFE -> Imediately invoked function expression
;(function (idade, peso, altura) {
  const sobrenome = 'Lima'
  function criaNome(nome) {
    return nome + ' ' + sobrenome
  }

  function falaNome() {
    console.log(criaNome('Wesley'))
  }

  falaNome()
  console.log(idade, peso, altura)
  // const nome = 'Wesley'
  // console.log(nome)
})(24, 70, 1.78)
// qualquerCoisa()

const nome = 'Qualquer coisa'
