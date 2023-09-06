function processData(input) {
    let texto = input
    
        if(texto.slice(0, 1) == texto.slice(0, 1).toLowerCase() && texto.slice(1) == texto.slice(1).toUpperCase()){
        texto = texto.slice(0, 1).toUpperCase() + texto.slice(1).toLowerCase()
        }else if(texto === texto.toUpperCase()){
        texto = texto.toLowerCase()
        }else(
        texto = input
        )
        
    console.log(texto)
    } 