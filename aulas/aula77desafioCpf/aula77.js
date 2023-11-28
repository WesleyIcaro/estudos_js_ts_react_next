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

  const primeiroDigito = this.cpfLimpo.substring(0, 9);

  cpfArray = Array.from(primeiroDigito);

  const soma = cpfArray.reduce((ac, val) => ac + Number(val), 0);

  console.log(soma);

  const formulaCpf = 11 - (soma % 11);

  /*
    11 - (237 % 11 ) = 5 (Primeiro dígito) OBS: Maior 
    que 9 é igual a 0
   */

  return formulaCpf;
};

const validador = new ValidadorCpf(cpf);

console.log(validador.validar());
