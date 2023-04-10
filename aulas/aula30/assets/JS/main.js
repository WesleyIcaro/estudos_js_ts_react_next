const h1 = document.querySelector('.date h1')

// const date = new Date()

// function getDayWeek(dayWeek) {
//   const diaSemana = [
//     'Domingo',
//     'Segunda-feira',
//     'Terça-feira',
//     'Quarta-feira',
//     'Quinta-feira',
//     'Sexta-feira',
//     'Sábado'
//   ]

//   return diaSemana[dayWeek]
// }

// // function getDayWeek(dayWeek) {
// //   switch (dayWeek) {
// //     case 0:
// //       return (dayWeekText = 'Domingo')
// //     case 1:
// //       return (dayWeekText = 'Segunda-feira')
// //     case 2:
// //       return (dayWeekText = 'Terça-feira')
// //     case 3:
// //       return (dayWeekText = 'Quarta-feira')
// //     case 4:
// //       return (dayWeekText = 'Quinta-feira')
// //     case 5:
// //       return (dayWeekText = 'Sexta-feira')
// //     case 6:
// //       return (dayWeekText = 'Sábado')
// //     default:
// //       return (dayWeekText = 'Dia da semana não encontrado.')
// //   }
// // }

// function getMonth(month) {
//   const meses = [
//     'Janeiro',
//     'Fevereiro',
//     'Março',
//     'Abril',
//     'Maio',
//     'Junho',
//     'Julho',
//     'Agosto',
//     'Setembro',
//     'Outubro',
//     'Novembro',
//     'Dezembro'
//   ]

//   return meses[month]
// }

// // function getMonth(month) {
// //   switch (month) {
// //     case 0:
// //       return (monthText = 'Janeiro')
// //     case 1:
// //       return (monthText = 'Fevereiro')
// //     case 2:
// //       return (monthText = 'Março')
// //     case 3:
// //       return (monthText = 'Abril')
// //     case 4:
// //       return (monthText = 'Maio')
// //     case 5:
// //       return (monthText = 'Junho')
// //     case 6:
// //       return (monthText = 'Julho')
// //     case 7:
// //       return (monthText = 'Agosto')
// //     case 8:
// //       return (monthText = 'Setembro')
// //     case 9:
// //       return (monthText = 'Outubro')
// //     case 10:
// //       return (monthText = 'Novembro')
// //     case 11:
// //       return (monthText = 'Dezembro')
// //     default:
// //       return (monthText = 'Mês não encontrado.')
// //   }
// // }

// function zeroEsquerda(num) {
//   return num < 10 ? `0${num}` : num
// }

// function createDate(date) {
//   const dayWeek = date.getDay()
//   const dayMonth = date.getDate()
//   const month = date.getMonth()
//   const year = date.getFullYear()
//   const hours = date.getHours()
//   const minutes = date.getMinutes()

//   return `${getDayWeek(dayWeek)}, ${dayMonth} de ${getMonth(
//     month
//   )} de ${year} ${hours}:${zeroEsquerda(minutes)}`
// }

// h1.innerHTML = createDate(date)

const date = new Date()
// // const opcoes = {
// //   dateStyle: 'full',
// //   timeStyle: 'short'
// // }

// // h1.innerHTML = date.toLocaleString('pt-BR', opcoes)

h1.innerHTML = date.toLocaleString('pt-BR', {
  dateStyle: 'full',
  timeStyle: 'short'
})
