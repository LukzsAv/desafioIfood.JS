function processData(input) {
    const linhas = input.trim().split("\n");
    const n = parseFloat(linhas[0], 10);
    const coordenadas = [];
    
    for(let i = 1; i < linhas.length; i++){
        const coord = linhas[i].split(" ");
        coordenadas.push({
            x : parseFloat(coord[0], 10),
            y : parseFloat(coord[1], 10)
        })
    }
    
    let maiorDistancia = 0
    for(let c = 0; c < n; c++){
        for (let d = 1; d < n; d++){
            let distancia = Math.sqrt(Math.pow(coordenadas[d].x - coordenadas[c].x, 2) + Math.pow(coordenadas[d].y - coordenadas[c].y, 2))
            if(maiorDistancia < distancia){
                maiorDistancia = distancia
            }
        }
    }
    
    console.log(maiorDistancia)
} 