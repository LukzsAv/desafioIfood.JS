function solucao(jogadores) {
    const jogadasZero = jogadores.filter((jogadas)=>{
        return jogadas.jogada == 0
    })
    const jogadasUm = jogadores.filter((jogadas)=>{
        return jogadas.jogada == 1
    })
    
    
    if(jogadasZero.length == 1){
        console.log(jogadasZero[0].nome);
    }else if(jogadasUm.length == 1){
        console.log(jogadasUm[0].nome);       
    }else{
        console.log("NINGUEM");
    }

}