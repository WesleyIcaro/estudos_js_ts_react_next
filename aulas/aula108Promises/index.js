function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}


// Metódo antigo com call back
// function esperaAi(msg, tempo, cb) {
//   if (typeof msg !== 'string') reject('BAD VALUE')
//   setTimeout(() => {
//     console.log(msg)
//     if (cb) cb()
//   }, tempo)
// }

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('BAD VALUE')
    setTimeout(() => {
      resolve(msg)
    }, tempo)
  })
}

esperaAi('Frase 1', rand(1, 3))
  .then(resposta => {
    console.log(resposta)
    return esperaAi("Frase 2", rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta + ' vai para outro THEN')
    return esperaAi('Frase 3', rand(1, 3))
  })
  .then(resposta => {
    console.log(resposta)
  })
  .then(() => {
    console.log('Eu serei o último a ser exibido!')
  })
  .catch(e => {
    console.log('Erro:', e)
  })

console.log('Isso será exibido antes de qualquer promisse.')

// esperaAi("1", rand(1, 3), function () {
//   esperaAi("2", rand(1, 3), function () {
//     esperaAi("3", rand(1, 3))
//   })
// })
