function grupo() {
  const form = document.querySelector('.form')
  const resultado = document.querySelector('.resultado')

  const pessoas = []

  // form.onsubmit = function (evento) {
  //   event.preventDefault()
  //   alert(1)
  //   console.log('Foi enviado')
  // }

  function recebeEventoForm(evento) {
    evento.preventDefault()
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    // pessoas = resultado.querySelector

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    })

    const person = [...pessoas]

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`

    console.log(person)
  }

  form.addEventListener('submit', recebeEventoForm)
}

grupo()
