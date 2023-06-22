const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']

// nome.splice(índice, delete, elem1, elem2, elem3)
// pop
const removidos = nomes.splice(-2, Number.MAX_VALUE) // first number = init | second number = number of items for remove
// Na const removidos ficara todos os items deletados
console.log(nomes, removidos)
