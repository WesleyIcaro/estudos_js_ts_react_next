const container = document.querySelector('.container')
const div = document.createElement('div')

const elementos = [
  { tag: 'p', text: 'Frase 1' },
  { tag: 'div', text: 'Frase 2' },
  { tag: 'footer', text: 'Frase 3' },
  { tag: 'section', text: 'Frase 4' }
]

for (let i = 0; i < elementos.length; i++) {
  let { tag, text } = elementos[i]
  console.log(tag)
  let tagzada = document.createElement(tag)
  let textoCriado = document.createTextNode(text)
  // tagzada.innerText = text
  div.appendChild(tagzada)

  tagzada.appendChild(textoCriado)
}

container.appendChild(div)

// container.innerHTML = elementos[0].tag Para acrecentar texto
// e HTML

// function criaP() {
//   const p = document.createElement(elementos[0][0])
//   return p
// }

// const msg = elementos[0][0]

// console.log(elementos[0].tag, elementos[0].text)

// const p = criaP()

// p.innerHTML = msg
// container.appendChild(p)
