class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade

        this.nomeIdade()
    }

    nomeIdade() { console.log("Meu nome é ", this.nome, ", e tenho ", this.idade, " anos!") }
}

const pessoa = new Pessoa("Wesley", 25)

// pessoa.teste()