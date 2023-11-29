const nomes = ['Wesley', 'Vicentino', 'Arlindo', 'Jeremias']


// Primeiro parâmetro define de onde começa, segundo parâmetro o número de variáveis que vai ser removido e o terceiro parâmetro remove ou substitui dependendo do segundo parâmetro. Se o segundo parâmetro for 0 adiciona, se for 1 ou mais substitui.
// const removidos = nomes.splice(2, 2, 'Ranieri', 'Felismundo')

// Simular o Pop()
// const excluidos = nomes.splice(-1,1)

// Simular o shift()
// const retirados = nomes.splice(0,1)

// Simular o push()
const adiciona = nomes.splice(nomes.length, 0, 'Ronaldo')

// Simular o unshift()
// const colocar = nomes.splice(0,0,"Reina")

console.log(nomes, adiciona)