function solucao(numeros) {
    let valorTotal = numeros.reduce((acumulador, valorAtual)=> acumulador + valorAtual)
    let qJogadores = numeros.length
    
    
    let jogadorSorteado = (valorTotal % qJogadores);

    if (jogadorSorteado === 0) {
        jogadorSorteado = qJogadores;
    }
    
    console.log(jogadorSorteado)
  
}