const _velocidade = Symbol("velocidade")

class Carro {

    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        console.log('Setter')
        if (typeof valor !== "number") return;
        if (valor >= 200 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() {
        console.log('Getter')
        return this[_velocidade]
    }

    acelerar() {
        if (this[_velocidade] >= 200) return;
        this[_velocidade]++;
        // console.log(this[_velocidade])
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
        // console.log(this[_velocidade])
    }
}

const c1 = new Carro("Fox")


for (let i = 0; i <= 220; i++) {
    c1.acelerar()
    // c1.freiar()
}

// c1.velocidade = 1500

c1.velocidade = 85

console.log(c1)


// class Pessoa {

//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }

//     get nomeCompleto() {
//         return this.nome + " " + this.sobrenome
//     }

//     set nomeCompleto(valor) {
//         valor = valor.split(' ')
//         this.nome = valor.shift()
//         this.sobrenome = valor.join(" ")
//     }

//     falar() {
//         console.log(`${this.nome} está falando!`)
//     }

//     comer() {
//         console.log(`${this.nome} está comendo!`)
//     }

//     beber() {
//         console.log(`${this.nome} está bebendo!`)
//     }
// }


// p1 = new Pessoa("Guilherme", "Victor")
// p1.nomeCompleto = "Guilherme Victor Juan"
// console.log(p1.nome)
// console.log(p1.sobrenome)
// console.log(p1.nomeCompleto)
