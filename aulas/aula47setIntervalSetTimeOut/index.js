function showTime() {
  let date = new Date()

  return date.toLocaleTimeString('pt-BR', {
    hour12: false
    // hour: '2-digit',
    // minute: '2-digit',
    // second: '2-digit'
  })
}

// function functionOfInterval() {
//   console.log(showTime())
// }

// setInterval(functionOfInterval, 1000)

const timer = setInterval(function () {
  console.log(showTime())
}, 1000)

console.log(timer)

// setTimeout(function () {
//   clearInterval(timer)
// }, 3000)

// setTimeout(function () {
//   console.log('Olá mundo!')
// }, 5000)
