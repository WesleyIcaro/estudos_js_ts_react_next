class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }

    comer() {
        console.log(`${this.nome} está comendo.`)
    }

    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

const pessoa1 = new Pessoa2("Victor", "Hugo")



const p1 = new Pessoa("Vanderlei", "Salviano")
const p2 = new Pessoa("Rosilene", "Seviana")
const p3 = new Pessoa("Sueli", "Salviano")
const p4 = new Pessoa("Edite", "Salviano")
const p5 = new Pessoa("Daniel", "Salviano")


function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando.`)
}

const pe1 = new Pessoa2("Wesley", "Icaro")
const pe2 = new Pessoa("Wesley", "Icaro")

// pe1.falar()