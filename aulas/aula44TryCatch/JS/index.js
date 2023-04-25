// try {
//   console.log(a)
// } catch (error) {
//   console.log('Variável inexistente.')
//   console.log(error)
// }

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x e y precisam ser números.')
  }
  return x + y
}

try {
  console.log(soma(5, 5))
  console.log(soma('s', 5))
} catch (error) {
  // console.log(error)
  console.log('Insira um valor válido.')
}
