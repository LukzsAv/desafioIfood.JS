function processData(input) {
    const texto = input.trim().split("\n");
    const senha = texto[0];
    const palavraDigitada = texto[1];
    let senhaIndex = 0
    
    for(let letra of palavraDigitada){
        if(letra === senha[senhaIndex]){
            senhaIndex++
        }
    }
    
    if(senha.length === senhaIndex){
        console.log(`SIM`)
    }else{
        console.log(`NAO`)
    }
}