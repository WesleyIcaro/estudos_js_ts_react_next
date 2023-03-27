const nome = prompt('Digite seu nome completo:')
console.log(nome)

window.document.body.innerHTML += `Meu nome é: <strong>${nome}</strong> <br />`
document.body.innerHTML += `Meu nome tem <strong>${
  nome.length - nome.split(' ').length + 1
}</strong> letras <br />`

document.body.innerHTML += `A segunda letra do meu nome é: "<strong>${nome[1].toUpperCase()}</strong>" <br />`

document.body.innerHTML += `Qual o primeiro índice da letra "A" no meu nome: <strong>${nome.indexOf(
  'a'
)}</strong> <br />`

document.body.innerHTML += `Qual o último índice da letra "A" no meu nome: <strong>${nome.lastIndexOf(
  'a'
)}</strong> <br />`

document.body.innerHTML += `As últimas três letras do meu nome são: "<strong>${nome
  .slice(-3)
  .toUpperCase()}</strong>" <br />`

document.body.innerHTML += `As palavras do meu nome são: "<strong>${nome.split(
  ' '
)}</strong>" <br />`

document.body.innerHTML += `Meu nome com letras maiúsculas: "<strong>${nome.toUpperCase()}</strong>" <br />`

document.body.innerHTML += `Meu nome com letras minúsculas: "<strong>${nome.toLowerCase()}</strong>" <br />`
