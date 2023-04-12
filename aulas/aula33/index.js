const pessoa = {
  nome: 'Wesley',
  sobrenome: 'Icaro',
  idade: 24,
  endereco: {
    rua: 'Jornalista Milton Cury',
    numero: 21
  }
}

// Atribuição via desestruturação
// const { nome: teste = '', sobrenome, idade } = pessoa

// const {
//   endereco: { rua: r = 12345, numero },
//   endereco
// } = pessoa

const { ...rest } = pessoa

console.log(rest)
