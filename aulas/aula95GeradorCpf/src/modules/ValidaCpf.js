export default class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, "cpfLimpo", {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, "")
        })
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCpf.geraDigito(cpfSemDigitos)
        const digito2 = ValidaCpf.geraDigito(cpfSemDigitos + digito1)
        this.cpfCompleto = cpfSemDigitos + digito1 + digito2
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0

        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica)
            reverso--;
        }


        const digito = 11 - (total % 11)

        return digito < 10 ? String(digito) : String(0)
    }

    valida() {
        if (!this.cpfLimpo) return false;

        if (typeof this.cpfLimpo !== "string") return false;

        if (this.cpfLimpo.length !== 11) return false;

        if (this.isSequencia()) return false;

        this.geraNovoCpf()

        return (this.cpfCompleto === this.cpfLimpo)
    }
}

let validaCpf = new ValidaCpf("793.979.860-07")

// if (validaCpf.valida()) {
//     console.log('CPF válido')
// } else {
//     console.log('CPF inválido')
// }

console.log("Cheguei aqui!")