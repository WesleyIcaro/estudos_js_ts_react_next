// fetch('pessoas.json')
//   .then(resposta => resposta.json())
//   .then(json => carregaElementosNaPagina(json))

axios('pessoas.json').then(resposta => carregarElementosNaPagina(resposta.data))

const carregarElementosNaPagina = json => {
  const resultado = document.querySelector('.resultado')
  const table = document.createElement('table')

  document.addEventListener('click', e => {
    const element = e.target
    const tag = element.tagName.toLowerCase()

    if (tag === 'a') {
      table.innerHTML = ''
      e.preventDefault()
      for (let i = 0; i < json.length; i++) {
        let tr = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.innerText = json[i].nome
        tr.appendChild(td1)

        td2 = document.createElement('td')
        td2.innerText = json[i].idade
        tr.appendChild(td2)

        td3 = document.createElement('td')
        td3.innerText = json[i].salario
        tr.appendChild(td3)

        table.appendChild(tr)

        // renderizarElementos(table)
      }
      resultado.appendChild(table)
    }
  })
}

// const renderizarElementos = json => {
//   resultado.innerHTML += ` ${json} - `
// }
