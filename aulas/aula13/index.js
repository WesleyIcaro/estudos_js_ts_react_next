// let umaString = "um \"texto\"";
//               0123 45678
let umaString = 'um \\texto'

let stringZado = 'O rato roeu a roupa do rei de roma.'

console.log(umaString[6])

console.log(umaString.charAt(0))

console.log(umaString.concat(' em', ' um', ' lindo dia.'))
console.log(umaString + ' em um lindo dia!!!')
console.log(`${umaString} em um lindo dia!`)

console.log(umaString.indexOf('xt', 6))
console.log(umaString.lastIndexOf('xt', 5))

console.log(umaString.match(/[a-z]/g))

console.log(umaString.search(/x/))

console.log(stringZado.replace(/r/g, '#'))

console.log(stringZado.length)

console.log(stringZado.slice(2, 6))

console.log(stringZado.length - 3)
console.log(stringZado.slice(32))
console.log(stringZado.slice(-5))
console.log(stringZado.slice(-5, stringZado.length - 1))
// ^ igual à v
console.log(stringZado.slice(-5, -1))

console.log(stringZado.split(' ', 5))

console.log(stringZado.toUpperCase())
console.log(stringZado.toLowerCase())

// w3.schools.com ou mdn.com ou ECMAscript = mais complicado
