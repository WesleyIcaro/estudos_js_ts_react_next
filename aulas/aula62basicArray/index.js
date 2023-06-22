// Strings, Objetos, Funções, Números
// const nomes = new Array('Eduardo', 'Maria', 'Joana')
const nomes = ['Eduardo', 'Maria', 'Juana']
// const novo = nomes // Tudo que for feito em nomes, refletirá em novo.
// const novo = [...nomes] // Copia o array na const novo e nada que fizer nele a partir de agora será refletido em nomes
nomes[2] = 'João' // Substitui o atual item de mesmo indíce
// delete nomes[2] // Remove sem alterar o indíce
// const removidoFinal = novo.pop()
// const removidoInicio = novo.shift()

// console.log(novo, removidoInicio)
// nomes.push('Wesley') // Adciona no final
// nomes.push('Yasmim')
nomes.unshift('Wesley') // Adiciona no início
nomes.unshift('Yasmim') // Não é comum pois realoca todos os itens do array e pode causar queda de perfomance
// console.log(nomes.length)
// console.log(nomes)

const novo = nomes.slice(1, -1)
// console.log(novo)

// const name = 'Wesley Icaro Lima dos Santos'
// const names = name.split(' ')
const names = ['Wesley', 'Icaro', 'Lima', 'dos', 'Santos']
const name = names.join(' ') // Neste caso a função 'join' uni tudo e separa pelo o que fica dentro das aspas, fazendo o contráio do split. Que diferente dela separa e usa o que fica dentro das aspas para separar os itens.

console.log(name)
