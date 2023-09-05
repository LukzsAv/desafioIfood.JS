function solucao(precos) {
    let valorTotal = precos.reduce((acumulador, valorAtual)=> acumulador + valorAtual)
    let menorValor = precos.reduce((acumulador, valorAtual)=> {
       if(acumulador > valorAtual){
           acumulador = valorAtual
       }
        return acumulador
    })
    if(precos.length > 2){
      valorTotal -= (menorValor/2)
    }
  console.log(valorTotal)
}