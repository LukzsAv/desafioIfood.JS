function solucao(lista) {
    let media = lista.reduce((acumulador, valorAtual, indice) => {
        return (acumulador + valorAtual)
    });
    media = media / lista.length
    console.log(media)
}