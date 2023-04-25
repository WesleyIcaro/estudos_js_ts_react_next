const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const stylesBody = getComputedStyle(document.body)
const backgroundColorBody = stylesBody.backgroundColor

for (let p of ps) {
  // console.log(p.backgroundColorBody)
  p.style.backgroundColor = backgroundColorBody
  p.style.color = 'white'
}
