fetch('pagina1.html')
  .then(resposta => {
    if (resposta !== 200) throw new Error('ERRO 404')
    return resposta.text()
  })
  .then(html => console.log(html))
  .catch(e => console.log(e))
