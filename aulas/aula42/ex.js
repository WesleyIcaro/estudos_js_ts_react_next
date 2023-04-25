// const ePaisagem = (v1, v2) => {
//   let altura = Number(v1)
//   let largura = Number(v2)
//   if (!altura) return 'altura inválida!'
//   if (!largura) return 'largura inválida!'
//   else return altura < largura ? true : false
// }

const ePaisagem = (v1, v2) => {
  let altura = Number(v1)
  let largura = Number(v2)
  if (!altura) return 'altura inválida!'
  if (!largura) return 'largura inválida!'
  else return altura < largura
}

console.log(ePaisagem(888, 99))
