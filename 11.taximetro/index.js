function solucao(min, km) {
    let somaKm = 0
    let somaMin = 0
    if(km > 10){
        let kmPromo = km - 10
        somaKm = (kmPromo*50)+700
    }else{
        somaKm = km*70
    }
    if(min > 20){
        let minPromo = min - 20
        somaMin = (minPromo*30)+1000
    }else{
        somaMin = min*50
    }
    
    let totalAPagar = somaKm + somaMin
    console.log(totalAPagar)
}