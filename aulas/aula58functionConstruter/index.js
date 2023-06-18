// Function constructer -> objects
// Function factory -> objects
// Constructer -> Pessoa (new)
function Pessoa(nome, sobrenome) {
  // Atributos privados
  const ID = 1254535354

  const metodoInterno = () => {
    console.log('Validador de CPF')
  }

  // Atributos ou métodos públicos
  this.nome = nome
  this.sobrenome = sobrenome

  this.metodo = function () {
    console.log(this.nome + ': Sou um metodo')
  }
}

const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('Maria', 'Oliveira')

p2.metodo()

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
