// const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras + umDia)
// const data = new Date(2019, 11) // a, m, d, h, M, s, ms
// const data = new Date(1680901671422)
// console.log('Dia', data.getDate())
// console.log('Mês', data.getMonth() + 1) // Mês começa do zero
// console.log('Ano', data.getFullYear())
// console.log('Hora', data.getHours())
// console.log('Min', data.getMinutes())
// console.log('Seg', data.getSeconds())
// console.log('ms', data.getMilliseconds())
// console.log('Dia semana', data.getDay()) // 0 - Domingo, 6 - Sábado
// console.log(data.toString())
// console.log(Date.now())

function zeroAEsquerda(num) {
  return num <= 10 ? `0${num}` : num
}

function formatData(data) {
  const day = zeroAEsquerda(data.getDate())
  const month = zeroAEsquerda(data.getMonth() + 1)
  const year = zeroAEsquerda(data.getFullYear())
  const hours = zeroAEsquerda(data.getHours())
  const minutes = zeroAEsquerda(data.getMinutes())
  const seconds = zeroAEsquerda(data.getSeconds())
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
  // console.log(data)
}

const data = new Date()
const dataBrasil = formatData(data)
console.log(dataBrasil)
