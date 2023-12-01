const { formatDistance } = require('date-fns')

const startDate = new Date(2023, 11, 1); // (Sep 16 2020)
const endDate = new Date(2023, 10, 1); // (Dec 25 2020)
const distanceInWords = formatDistance(startDate, endDate);

console.log(`São ${distanceInWords} dias até o fim do concurso!`);
