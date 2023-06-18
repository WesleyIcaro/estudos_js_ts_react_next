// function criaCalculadora() {
//   return {
//     display: document.querySelector('.display'),
//     btnClear: document.querySelector('.btn-clear'),

//     inicia() {
//       this.cliqueBotoes()
//       this.clearDisplay()
//       this.pressionaEnter()
//     },

//     pressionaEnter() {
//       this.display.addEventListener('keyup', e => {
//         if (e.keyCode === 13) {
//           this.realizaConta()
//         }
//       })
//     },

//     clearDisplay() {
//       this.display.value = ''
//     },

//     apagaUm() {
//       this.display.value = this.display.value.slice(0, -1)
//     },

//     realizaConta() {
//       let conta = this.display.value

//       try {
//         conta = eval(conta)

//         if (!conta) {
//           alert('Conta inválida')
//           return
//         }

//         this.display.value = String(conta)
//       } catch (e) {
//         alert('Conta inválida!')
//         return
//       }
//     },

//     cliqueBotoes() {
//       // Utilizando a arrow function para não precisar o .bind(this), dessa forma o this vai ser sempre de quem declara função primeiramente e não vai seguir o escopo.
//       document.addEventListener(
//         'click',
//         e => {
//           const el = e.target

//           if (el.classList.contains('btn-num')) {
//             this.btnParaDisplay(el.innerText)
//           }

//           if (el.classList.contains('btn-clear')) {
//             // this.display.value = ''
//             this.clearDisplay()
//           }

//           if (el.classList.contains('btn-del')) {
//             this.apagaUm()
//           }

//           if (el.classList.contains('btn-eq')) {
//             this.realizaConta()
//           }
//         }
//         // .bind(this)
//       )
//     },

//     btnParaDisplay(valor) {
//       this.display.value += valor
//     }
//   }
// }

// const calculadora = criaCalculadora()
// calculadora.inicia()

function Calculadora() {
  this.display = document.querySelector('.display')
  this.btnClear = document.querySelector('.btn-clear')

  this.iniciar = () => {
    this.pressionaEnter()
    this.clearDisplay()
    this.cliqueBotoes()
  }

  this.pressionaEnter = () => {
    this.display.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.realizaConta()
      }
    })
  }

  this.clearDisplay = () => {
    this.display.value = ''
  }

  this.apagaUm = () => {
    this.display.value = this.display.value.slice(0, -1)
  }

  this.realizaConta = () => {
    let conta = this.display.value

    try {
      conta = eval(conta)

      if (!conta) {
        alert('Conta inválida')
        return
      }

      this.display.value = String(conta)
    } catch (e) {
      alert('Conta inválida!')
      return
    }
  }

  this.cliqueBotoes = () => {
    document.addEventListener('click', e => {
      const el = e.target

      if (el.classList.contains('btn-num')) {
        this.btnParaDisplay(el.innerText)
      }

      if (el.classList.contains('btn-clear')) {
        this.clearDisplay()
      }

      if (el.classList.contains('btn-del')) {
        this.apagaUm()
      }

      if (el.classList.contains('btn-eq')) {
        this.realizaConta()
      }
    })
    this.btnParaDisplay = valor => {
      this.display.value += valor
    }
  }
}

const calculo = new Calculadora()
calculo.iniciar()
