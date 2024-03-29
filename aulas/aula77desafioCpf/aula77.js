// 705.484.450-52 070.987.720-03

/*

7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237 

11 - (237 % 11 ) = 5 (Primeiro dígito) OBS: Maior 
que 9 é igual a 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9   8  7  6  5  4  3  2
77 0  45  32 56 24 20 20 0 10

11 - (284 % 11) = 2 (Segundo dígito)

0x 7x 0x 9x 8x 7x 7x 2x 0x
10 9  8  7  6  5  4  3  2
0  63 0  63 48 35 28 6  0

11 - (243 % 11) = 10 (Primeiro dígito) OBS: Maior 
que 9 é igual a 0


0x 7x 0x 9x 8x 7x 7x 2x 0x 0x
11 10 9  8  7  6  5  4  3  2
0  70 0  72 56 42 35 8  0   = 

11 - (283 % 11) = 2 (Segundo dígito)

*/

// console.log(11 - ((70 + 0 + 40 + 28 + 48 + 20 + 16 + 15) % 11));

// console.log(11 - ((77 + 0 + 45 + 32 + 56 + 24 + 20 + 20 + 10) % 11));

// console.log(11 - ((0 + 63 + 0 + 63 + 48 + 35 + 28 + 6 + 0) % 11));

// console.log(11 - ((0 + 70 + 0 + 72 + 56 + 42 + 35 + 8 + 0 + 0) % 11));

let cpf = "705.484.450-52";

// let cpfLimpo = cpf.replace(/\D+/g, "");
// cpfArray = Array.from(cpfLimpo);
// console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0));

function ValidadorCpf(cpf) {
  Object.defineProperty(this, "cpfLimpo", {
    enumerable: true,
    get: function () {
      return cpf.replace(/\D+/g, "");
    },
    // set: function (valor) {},
  });
}

ValidadorCpf.prototype.validar = function () {
  if (typeof this.cpfLimpo === "undefined") return false;

  if (this.cpfLimpo.length !== 11) return false;

  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.substring(0, 9);

  const digito1 = this.criaDigito(cpfParcial);

  const digito2 = this.criaDigito(cpfParcial + digito1);

  const novoCpf = cpfParcial + digito1 + digito2;

  return novoCpf === this.cpfLimpo;
};

ValidadorCpf.prototype.criaDigito = function (cpfParcial) {
  cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;

  const soma = cpfArray.reduce((ac, val) => {
    ac += regressivo * Number(val);
    regressivo--;
    return ac;
  }, 0);

  const primeiroDigito = 11 - (soma % 11);

  return primeiroDigito < 10 ? String(primeiroDigito) : String(0);
};

ValidadorCpf.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
  return (sequencia === this.cpfLimpo);
}

const validador = new ValidadorCpf(cpf);

console.log(validador.validar());
