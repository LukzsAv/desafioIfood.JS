function solucao(min, max, valores) {
    let permitidos = valores.filter((valores) => {
        return valores >= min && valores <= max
    })
  console.log(permitidos)
}