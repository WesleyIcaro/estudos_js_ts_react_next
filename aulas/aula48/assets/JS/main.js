const relogio = document.querySelector('.hour')
// const init = document.querySelector('.init')
// const pause = document.querySelector('.pause')
// const zero = document.querySelector('.zero')
// const buttons = document.querySelector('.buttons')

// date.setHours(0, 0, 0, 0)
function chronometer() {
  const setChronometer = segundos => {
    const date = new Date(segundos * 1000)
    return date.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    })
  }

  let segundos = 0

  let timer

  const initTimer = () => {
    timer = setInterval(function () {
      segundos++
      relogio.innerHTML = setChronometer(segundos)
    }, 1000)
  }

  document.addEventListener('click', function (event) {
    const element = event.target

    if (element.classList.contains('zero')) {
      segundos = 0
      setTimeout(function () {
        clearInterval(timer)
      })
      relogio.innerHTML = '00:00:00'
      relogio.classList.remove('pausado')
    }
    if (element.classList.contains('pause')) {
      setTimeout(function () {
        clearInterval(timer)
      })
      // relogio.style.color = 'red'
      relogio.classList.add('pausado')
      // init.style.visibility = 'visible'
      // buttons.style.marginLeft = '0px'
    }
    if (element.classList.contains('init')) {
      clearInterval(timer)
      initTimer()
      relogio.classList.remove('pausado')
    }
  })

  // init.addEventListener('click', function (event) {
  //   // relogio.style.color = 'black'
  //   // init.style.visibility = 'hidden'
  //   // buttons.style.marginLeft = '-50px'
  // })

  // pause.addEventListener('click', function (event) {})

  // zero.addEventListener('click', function (event) {
  //   // relogio.style.color = 'black'
  //   // init.style.visibility = 'visible'
  //   // buttons.style.marginLeft = '0px'
  // })
}

chronometer()
