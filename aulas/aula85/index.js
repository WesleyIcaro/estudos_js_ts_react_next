class ValidadorCpf {

    constructor(cpf) {
        this.cpf = cpf;
        // this.cpfLimpo = cpf
    }

    // get limparCpf() {
    //     console.log(this.cpf)
    //     return this.cpf
    // }

    limparCpf() {
        const cpfLimpo = this.cpf.replace(/\D+/g, "")
        return cpfLimpo
    }

    criaDigito(valor) {
        const cpfArray = Array.from(valor)

        let regressivo = cpfArray.length + 1;

        const soma = cpfArray.reduce((ac, val) => {
            ac += regressivo * Number(val);
            regressivo--;
            return ac;
        }, 0)

        const primeiroDigito = 11 - (soma % 11)

        return primeiroDigito < 10 ? String(primeiroDigito) : String(0)
    }

    sequencia() {
        const valor = this.limparCpf()

        const sequencia = valor[0].repeat(valor.length)

        return (sequencia === this.limparCpf())
    }

    validar() {
        if (typeof this.limparCpf() === "undefined") return false;

        if (this.limparCpf().length !== 11) return false;

        if (this.sequencia()) return false;

        const cpfParcial = this.limparCpf().substring(0, 9)

        const d1 = this.criaDigito(cpfParcial)

        const d2 = this.criaDigito(cpfParcial + d1)

        const novoCpf = cpfParcial + d1 + d2

        return (novoCpf === this.limparCpf())
    }



}

const v1 = new ValidadorCpf("070.987.720-03")

// Classe validadora de CPF corrigida

class ValidaCpf {
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
        // return (cpfCompleto === this.cpfLimpo)
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

        // for (let i = 0; i < cpfSemDigitos.length; i++) {
        //     if (cpfSemDigitos[i] !== "." || cpfSemDigitos[i] !== "-") {
        //         cpfArray += cpfSemDigitos[i]
        //     }
        // }
        // return cpfArray
        // console.log(cpfArray)
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
// validaCpf = new ValidaCpf("999.999.999-99")

// validaCpf.cpfLimpo = 120143

// console.log(validaCpf.cpfLimpo)

if (validaCpf.valida()) {
    console.log('CPF válido')
} else {
    console.log('CPF inválido')
}
