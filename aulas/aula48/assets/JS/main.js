const relogio = document.querySelector('.hour')
const init = document.querySelector('.init')
const pause = document.querySelector('.pause')
const zero = document.querySelector('.zero')

init.addEventListener('click', function () {
  alert('Cliquei no inciar')
})

pause.addEventListener('click', function () {
  alert('Cliquei no pausar')
})

zero.addEventListener('click', function () {
  alert('Cliquei no zerar')
})
