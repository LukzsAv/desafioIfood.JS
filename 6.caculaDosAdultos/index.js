function solucao(lista) {
    const valoresMaioresQue18 = lista.filter((valorAtual) => {
        return valorAtual >= 18
    });

    if (valoresMaioresQue18.length === 0) {
        console.log("CRESCA E APARECA");
    } else {
        const jovem = valoresMaioresQue18.reduce((acumulador, valorAtual) => {
             if(valorAtual < acumulador){
                        return valorAtual
                    }else{
                        return acumulador
                    }
            
        });
        console.log(jovem);
    }
}