function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('CAI NO ERRO')
        return // Para a função parar de executar de verdade, pois o reject não travva função.
      }
      resolve(msg.toUpperCase() + ' - Passei na promise')
    }, tempo)
  })
}

// Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//   // 'Primeiro valor',
//   esperaAi(1000, rand(1, 5)),
//   esperaAi('Promise 1', rand(1, 5)),
//   esperaAi('Promise 2', rand(1, 5)),
//   esperaAi('Promise 3', rand(1, 5)),
//   // 'Outro valor'
// ]

// Promise.all(promises) // Resolve todas as promises se não houver erro.
//   .then(function (valor) {
//     console.log(valor)
//   })
//   .catch(function (erro) {
//     console.log(erro)
//   })

// Promise.race(promises) // Resolve a promise que vier primeiro e ingnora o restante.
//   .then(function (valor) {
//     console.log(valor)
//   })
//   .catch(function (erro) {
//     console.log(erro)
//   })

function baixaPagina() {
  const emCache = true

  if (emCache) {
    // return Promise.resolve('Página em cache')
    return Promise.reject('Página em cache') // reject envia direto para o catch e o resolve faz ao contrário
  } else {
    return esperaAi('Baixei a página', 3000)
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina)
  })
  .catch(e => console.log('ERRO:', e))
