function retornaFuncao(nome) {
  return function () {
    return nome
  }
}

const funcao = retornaFuncao('Wesley')
const funcao2 = retornaFuncao('Wesley Icaro')

console.log(funcao(), funcao2())
