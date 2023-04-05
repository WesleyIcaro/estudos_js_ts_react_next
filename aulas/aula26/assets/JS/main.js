const form = document.querySelector('.form')
const resultadoBom = document.querySelector('.resultado-bom')
const resultadoRuim = document.querySelector('.resultado-ruim')

function calculoImc() {
  function getEventForm(event) {
    event.preventDefault()
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    function setResultado(msg) {
      const resultado = document.querySelector('.resultado-bom')
      resultado.innerHTML = ''

      const p = document.createElement('p')
      p.innerHTML = 'Qualquer coisa'
      p.classList.add('paragrafo-resultado')
      resultado.appendChild(p)
    }

    setResultado()

    function calculandoImc() {
      let valorPeso = Number(peso.value)
      let valorAltura = Number(altura.value)
      console.log(typeof valorAltura * 1, typeof valorPeso * 1)
      if (peso.value ** 0 === 1 && altura.value ** 0 === 1) {
        let imc = peso.value / altura.value ** 2
        return imc.toFixed(2)
      } else if (peso.value ** 0 !== 1) {
        return `Valor de peso é inválido`
      } else if (altura.value ** 0 !== 1) {
        return `Valor de altura é inválido`
      } else {
        return `Valores inválidos`
      }
    }

    let valorImc = calculandoImc()

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

    console.log(valorImc)
    imc()

    // console.log(typeof calculandoImc())
  }

  form.addEventListener('submit', getEventForm)
}

calculoImc()
