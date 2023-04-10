function getDayWeekText(weekDay) {
  switch (weekDay) {
    case 0:
      return (weekDayTextweekDayText = 'Domingo')
    case 1:
      return (weekDayTextweekDayText = 'Segunda')
    case 2:
      return (weekDayText = 'Terça-feira')
    case 3:
      return (weekDayText = 'Quarta-feira')
    case 4:
      return (weekDayText = 'Quinta-feira')
    case 5:
      return (weekDayText = 'Sexta-feira')
    case 6:
      return (weekDayText = 'Sábado')
    default:
      return (weekDayText = 'Dia da semana não encontrado')
  }
}

const data = new Date('2023-04-10 00:00:00')

const weekDay = data.getDay()

let weekDayText

console.log(weekDay, getDayWeekText(weekDay))

// switch (weekDay) {
//   case 0:
//     weekDayText = 'Domingo'
//     break
//   case 1:
//     weekDayText = 'Segunda'
//     break
//   case 2:
//     weekDayText = 'Terça-feira'
//     break
//   case 3:
//     weekDayText = 'Quarta-feira'
//     break
//   case 4:
//     weekDayText = 'Quinta-feira'
//     break
//   case 5:
//     weekDayText = 'Sexta-feira'
//     break
//   case 6:
//     weekDayText = 'Sábado'
//     break
//   default:
//     weekDayText = 'Dia da semana não encontrado'
//     break
// }

// if (weekDay === 0) {
//   weekDayText = 'Domingo'
// } else if (weekDay === 1) {
//   weekDayText = 'Segunda'
// } else if (weekDay === 2) {
//   weekDayText = 'Terça-feira'
// } else if (weekDay === 3) {
//   weekDayText = 'Quarta-feira'
// } else if (weekDay === 4) {
//   weekDayText = 'Quinta-feira'
// } else if (weekDay === 5) {
//   weekDayText = 'Sexta-feira'
// } else if (weekDay === 6) {
//   weekDayText = 'Sabádo'
// } else {
//   weekDayText = 'Dia da semana não encontrado.'
// }
