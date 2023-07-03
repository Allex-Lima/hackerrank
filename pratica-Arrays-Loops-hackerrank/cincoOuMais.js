const produtos = [100, 500, 100, 200, 50]

function solucao(produtos) {
    const OrdenaProduto = produtos.sort((a, b) => a - b)
    let valorTotal = 0

    const somaTotal = produtos.reduce((acumulador, anterior) => {
        return acumulador + anterior
    }, 0)

    if (produtos.length >= 5) {
        valorTotal = somaTotal - OrdenaProduto[0]
    }

    console.log(valorTotal)
}

solucao(produtos)