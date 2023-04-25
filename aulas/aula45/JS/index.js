// try {
//   // É executado quando não há erros
//   // console.log(a)
//   console.log('Abrir um arquivo')
//   console.log('Manipulei o arquivo e gerou erro')
//   console.log('Fechei o arquivo')

//   try {
//     console.log(b)
//   } catch (e) {
//     console.log('Deu erro.')
//   } finally {
//     console.log('Também sou finally!')
//   }
// } catch (e) {
//   // É executado quando há erros
//   console.log('Tratando o erro.')
// } finally {
//   // Sempre
//   console.log('FINALLY: Eu sempre sou executado.')
// }

function returnHour(date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError('Esperando instância de Date.')
  }
  if (!date) {
    date = new Date()
  }

  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}

try {
  const date = new Date('01-01-1970 12:58:12')
  const hour = returnHour(987)
  console.log(hour)
} catch (error) {
  console.log('errado')
} finally {
  console.log('Sempre no fim!')
}
