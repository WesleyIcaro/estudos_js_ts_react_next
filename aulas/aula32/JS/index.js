let a = 'A' // B
let b = 'B' // C
let c = 'C' // A

const letras = [b, c, a]

;[a, b, c] = letras

// console.log(a, b, c)

// ...rest, ...spread
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900]
const [um, , tres, , cinco, , sete, oito] = numeros

console.log(um, tres, cinco, sete, oito)

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const [, , [, , nove]] = numbers

console.log(nove)
