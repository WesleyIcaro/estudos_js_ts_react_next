class Floresta {

    constructor(arvore, rio) {
        this.arvore = arvore;
        this.rio = rio;

        this.aventura()
    }

    aventura() {
        console.log(`Na floresta tem ${this.arvore} e o ${this.rio}!`)
    }
}

// export const nome = "Wesley"

// export const sobrenome = "Icaro"

// export const idade = 25

// export function soma(x, y) {
//     return x + y
// }

const nome = "Wesley"

const sobrenome = "Icaro"

const idade = 25

function soma(x, y) {
    return x + y
}


// export default function soma(x, y) {
//     return x + y
// }

export default (a, b) => a * b

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}


export { Floresta as Florest }

export { nome, sobrenome, idade, soma }

// export { nome as default, sobrenome, idade, soma }