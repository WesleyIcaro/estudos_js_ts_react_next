// Criar uma função estática ao invés de criar a função global, pois ela expõe o objeto global do Node
// NÃO FAZER
// function teste() {
//     console.log(this)
// }

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0
    }

    // Método de instância
    aumentarVolume() {
        if (this.volume >= 100) return;
        this.volume++;
        console.log("Aumentando o volume.")
    }

    // Método de instância
    diminuirVolume() {
        if (this.volume <= 0) return;
        this.volume--;
        console.log("Diminuindo o volume.")
    }

    // Método estático
    static soma(x, y) {
        console.log(x + y)
    }

}

const tv1 = new ControleRemoto("LG")

// tv1.aumentarVolume()


// for (let i = 0; i < 15; i++) {
//     tv1.diminuirVolume()
// }

// console.log(tv1)

ControleRemoto.soma(5, 8)

// console.log(ControleRemoto.soma(2, 85))

