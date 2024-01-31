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

// const de1 = new DispositivoEletronico("Smartphone")

// console.log(de1)

// de1.ligar()


// console.log(de1)

// de1.desligar()

// de1.ligar()

// de1.desligar()

// de1.desligar()

// console.log(de1)

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome)
        this.wifi = false;
        this.cor = cor;
    }

    ligarWifi() {
        if (this.wifi) return;
        console.log("Ligando o wi-fi.")
        this.wifi = true;
    }

    desligarWifi() {
        if (!this.wifi) return;
        console.log("Desligado o wi-fi.")
        this.wifi = false;
    }

    falaOi() {
        console.log("Oie")
    }
}

// const s1 = new Smartphone("Motorola", "Preto", "MotoG73")
// s1.ligar()
// console.log(s1)

const t1 = new Tablet("Multilaser", "Prata")

console.log(t1)

t1.ligarWifi()

console.log(t1)

t1.ligar()

t1.falaOi()