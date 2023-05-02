const form = document.querySelector('.form')
const resultadoBom = document.querySelector('.resultado')
// const resultadoBom = document.querySelector('.resultado-bom')
// const resultadoRuim = document.querySelector('.resultado-ruim')

// function calculoImc() {
form.addEventListener('submit', function (e) {
  e.preventDefault()
  const inputPeso = e.target.querySelector('.peso')
  const inputAltura = e.target.querySelector('.altura')

  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)

  if (!peso) {
    setResultado('Peso inválido!', false)
    return
  }
  if (!altura) {
    setResultado('Altura inválida!', false)
    return
  }

  const imc = getImc(peso, altura)
  const nivelImc = getNivelImc(imc)

  const msg = `Seu IMC é ${imc} (${nivelImc})`

  setResultado(msg, true)
})
// const peso = form.querySelector('.peso')
// const altura = form.querySelector('.altura')

function getNivelImc(imc) {
  const nivel = [
    'Abaixo do peso',
    'Peso normal',
    'Sobrepeso',
    'Obresidade grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3'
  ]

  if (imc >= 39.9) {
    return nivel[5]
  }
  if (imc >= 34.9) {
    return nivel[4]
  }
  if (imc >= 29.9) {
    return nivel[3]
  }
  if (imc >= 24.9) {
    return nivel[2]
  }
  if (imc >= 18.5) {
    return nivel[1]
  }
  if (imc < 18.5) {
    return nivel[0]
  }
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2
  return imc.toFixed(2)
}

function criaP() {
  const p = document.createElement('p')
  return p
}

function setResultado(msg, isValid) {
  // const resultado = document.querySelector('.resultado-bom')
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = ''

  const p = criaP()

  if (isValid) {
    p.classList.add('paragrafo-resultado')
  } else {
    p.classList.add('bad')
  }

  p.innerHTML = msg
  resultado.appendChild(p)
}

// function calculandoImc() {
//   let valorPeso = Number(peso.value)
//   let valorAltura = Number(altura.value)
//   console.log(typeof valorAltura * 1, typeof valorPeso * 1)
//   if (peso.value ** 0 === 1 && altura.value ** 0 === 1) {
//     let imc = peso.value / altura.value ** 2
//     return imc.toFixed(2)
//   } else if (peso.value ** 0 !== 1) {
//     return `Valor de peso é inválido`
//   } else if (altura.value ** 0 !== 1) {
//     return `Valor de altura é inválido`
//   } else {
//     return `Valores inválidos`
//   }
// }

// let valorImc = calculandoImc()

// function imc() {
//   if (valorImc < 18.5) {
//     resultadoBom.innerHTML = ''
//     return (resultadoRuim.innerHTML = `Seu IMC é ${valorImc} (abaixo do peso)`)
//   } else if (valorImc >= 18.5 && valorImc <= 24.9) {
//     resultadoRuim.innerHTML = ''
//     return (resultadoBom.innerHTML = `Seu IMC é ${valorImc} (peso normal)`)
//   } else if (valorImc >= 24.91 && valorImc <= 29.9) {
//     resultadoBom.innerHTML = ''
//     return (resultadoRuim.innerHTML = `Seu IMC é ${valorImc} (sobrepeso)`)
//   } else if (valorImc >= 29.91 && valorImc <= 34.9) {
//     resultadoBom.innerHTML = ''
//     return (resultadoRuim.innerHTML = `Seu IMC é ${valorImc} (Obesidade grau 1)`)
//   } else if (valorImc >= 34.91 && valorImc <= 39.9) {
//     resultadoBom.innerHTML = ''
//     return (resultadoRuim.innerHTML = `Seu IMC é ${valorImc} (Obesidade grau 2)`)
//   } else if (valorImc >= 39.91) {
//     resultadoBom.innerHTML = ''
//     return (resultadoRuim.innerHTML = `Seu IMC é ${valorImc} (Obesidade grau 3)`)
//   } else {
//     resultadoBom.innerHTML = ''
//     return (resultadoRuim.innerHTML = `Valor inválido`)
//   }
// }

// console.log(valorImc)
// imc()

// console.log(typeof calculandoImc())

// }

// calculoImc()
