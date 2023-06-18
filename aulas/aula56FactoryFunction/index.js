function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter = Just get value and is used like atributte, different of a function
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ')
      this.nome = valor.shift()
      this.sobrenome = valor.join(' ')
      // console.log(valor)
    },

    // fala: function(assunto){}
    fala(assunto) {
      return `${this.nome} está falando ${assunto}.`
    },

    altura: a,
    peso: p,

    // imc: function () {}
    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2
      return indice.toFixed()
    }
  }
}

const p1 = criaPessoa('Wesley Icaro', 'Lima', 1.78, 68)
const p2 = criaPessoa('Yasmim', 'Lima', 1.7, 65)
const p3 = criaPessoa('Edite', 'Salviano', 1.62, 65)
// console.log(p1.imc)
// console.log(p2.imc)
p1.nomeCompleto = 'Raul Procopio'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p2.fala('erroneamente'))
console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)
