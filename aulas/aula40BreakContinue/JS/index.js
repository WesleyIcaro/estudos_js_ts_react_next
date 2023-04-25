const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// continue - continua para próxima iteração
// Break - Sai do laço

// for (let numero of numeros)

// for (let i in numeros)

// for (let i = 0; i < numeros.length; i++)

let i = 0

do {
  const numero = numeros[i]

  if (numero === 2 || numero === 3) {
    i++
    continue
  }
  if (numero === 1) {
    i++
    continue
  }
  console.log(numero)
  if (numero === 7) {
    console.log('7 encontrado, saindo...')
    i++
    break
  }
  i++
} while (i < numeros.length)
