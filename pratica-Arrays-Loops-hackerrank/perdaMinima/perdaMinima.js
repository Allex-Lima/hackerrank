//const precos = [30, 10, 54, 76, 1, 4, 35]
const precos = [5, 10, 3]

function solucao(precos) {
    const index = {}
    let valorMinimoPerdido = Infinity

    for (let i = 0; i < precos.length; i++) {
        index[precos[i]] = i
    }
    console.log(index)

    const precosOrdenado = Object.keys(index).sort((a, b) => a - b)
    console.log(precosOrdenado);

    for (let i = 0; i < precosOrdenado.length; i++) {
        if (index[precosOrdenado[i]] > index[precosOrdenado[i + 1]]) {
            valorMinimoPerdido = Math.min(valorMinimoPerdido, precos[index[precosOrdenado[i + 1]]] - precos[index[precosOrdenado[i]]])
        }

    }
    console.log(valorMinimoPerdido)
}

solucao(precos)