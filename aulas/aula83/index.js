class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) return;
        console.log(this.nome + " Ligado!")
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) return;

        console.log(this.nome + " Desligado!")
        this.ligado = false;
    }
}

const de1 = new DispositivoEletronico("Celular")

de1.ligar()

de1.desligar()

de1.ligar()

de1.desligar()

de1.desligar()