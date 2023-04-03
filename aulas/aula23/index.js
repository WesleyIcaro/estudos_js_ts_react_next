/*

&& -> false && true -> false "O valor mesmo"
|| -> 
FALSY
*false
0
''""``
null / underfined
NaN
*/
// console.log('Luiz' && 'Maria')

// function falaOi() {
//   return 'Oi'
// }

// const vaiExecutar = ''

// console.log(vaiExecutar && falaOi())

console.log(0 || false || null || 'Luiz Otávio' || false)

const corUsuario = null
const corPadrao = corUsuario || 'preto'

console.log(corPadrao)
