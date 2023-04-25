// const fizzBuzz = valuePure => {
//   value = Number(valuePure)
//   if (value) {
//     if (value >= 0 && value <= 100) {
//       if (value % 3 && value % 5 !== 0)
//         return `O número ${value} não é divisível por 3 e 5`
//       if (value % 3 === 0 && value % 5 === 0) return 'fizzBuzz'
//       else {
//         if (value % 3 === 0) return 'Fizz'
//         if (value % 5 === 0) return 'Buzz'
//       }
//     } else return 'Somente números de 1 à 100'
//   } else return 'Somente números.'
// }

const fizzBuzz = value => {
  if (typeof value === 'number') {
    if (value >= 0 && value <= 100) {
      if (value % 3 === 0 && value % 5 === 0) return 'fizzBuzz'
      if (value % 3 === 0) return 'Fizz'
      if (value % 5 === 0) return 'Buzz'
      if (value % 3 && value % 5 !== 0)
        return `O número ${value} não é divisível por 3 e 5`
    } else return 'Somente números de 0 à 100'
  } else return 'Somente números.'
}

console.log(fizzBuzz('183'))
