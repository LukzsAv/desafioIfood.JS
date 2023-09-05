function solucao(texto) {
    let palavras = texto.replace(/\s+/g, ' ').trim().split(/[ ,.;:?!]+/);
    console.log(palavras.length)
}