function solucao(texto) {
    let palavras = texto.replace(/\s+/g, ' ').trim().split(/[ ,.;:?!]+/);
        let palavrasFiltradas = palavras.filter((palavra)=>{
        return palavra != ""
    })
    console.log(palavrasFiltradas.length)
}