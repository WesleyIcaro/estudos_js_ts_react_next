const nome = 'Wesley Icaro Lima dos Santos'

let anoDeNascimento = 1998

let anoAtual = 2023

let idade = -(anoDeNascimento - anoAtual)

const alturaEmM = 1.78

let peso = 71

let imc = peso / alturaEmM ** 2

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg e`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoDeNascimento}!`)
