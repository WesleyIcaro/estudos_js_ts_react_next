class SenhaAleatoria {

    constructor() {
        this.form = document.querySelector("form");
    }

    eventos() {
        this.form.addEventListener("submit", (e) => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        const length = this.form.querySelector("#caracteres").value

    }

    rand(min = 1, max = 9) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    geraNumero() {
        this.senha = 0
        for (let i = 0; i < this.quantidade; i++) {
            this.senha += this.rand()
            console.log(this.senha)
        }
        this.senhas.innerHTML = this.senha
    }

}

const geraSenha = new SenhaAleatoria()

geraSenha.geraNumero()



