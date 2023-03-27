const num1 = Number(prompt('Digite seu número: '))
const numberTitle = document.getElementById('number-title')
const text = document.getElementById('text')

numberTitle.innerHTML = num1

text.innerHTML = `<p>Raiz quadrada ${num1 ** 0.5}</p>`

text.innerHTML += `<p>${num1} é inteiro: ${Number.isInteger(num1)}</p>`

text.innerHTML += `<p>${num1} é NaN: ${Number.isNaN(num1)}</p>`

text.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num1)}</p>`

text.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num1)}</p>`

text.innerHTML += `<p>Com duas casas decimais: ${num1.toFixed(2)}</p>`
