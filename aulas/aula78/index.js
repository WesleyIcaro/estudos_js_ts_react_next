// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: R$ ${this.saldo}`)
        return
    };

    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function () {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$ ${this.saldo.toFixed(2)}`
    )
}

const conta1 = new Conta("2405", "0174988", 10)
// conta1.depositar(11)
// conta1.depositar(10)
// conta1.sacar(30)
// conta1.sacar(0.87)

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > this.saldo + this.limite) {
        console.log(`Saldo insuficiente: R$ ${this.saldo}`)
        return
    };

    this.saldo -= valor
    this.verSaldo()
}

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaCorrente

const conta2 = new ContaPoupanca(12, 33, 0)
conta2.depositar(10)
conta2.sacar(10)
conta2.sacar(1)