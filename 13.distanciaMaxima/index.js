const linhas = input.trim().split("\n")

let distancia = 0
const coordenadas = []
for(let i = 1; i < linhas.length; i++){
    const coord = linhas[i].split(" ");
    coordenadas.push({
        x : parseFloat(coord[0], 10),
        y : parseFloat(coord[1], 10)
    })
}

distancia = Math.sqrt(((coordenadas[0].x - coordenadas[1].x)* 2) + ((coordenadas[0].y - coordenadas[1].y) * 2));
console.log(distancia)

