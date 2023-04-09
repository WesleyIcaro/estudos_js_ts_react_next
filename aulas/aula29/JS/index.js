const data = new Date('1987-8-26 00:00:00')

const weekDay = data.getDay()

let weekDayText

if (weekDay === 0) {
  weekDayText = 'Domingo'
} else if (weekDay === 1) {
  weekDayText = 'Segunda'
} else if (weekDay === 2) {
  weekDayText = 'Terça-feira'
} else if (weekDay === 3) {
  weekDayText = 'Quarta-feira'
} else if (weekDay === 4) {
  weekDayText = 'Quinta-feira'
} else if (weekDay === 5) {
  weekDayText = 'Sexta-feira'
} else {
  weekDayText = 'Sabádo'
}

console.log(weekDay, weekDayText)
