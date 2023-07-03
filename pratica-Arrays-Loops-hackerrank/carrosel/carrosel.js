function solucao(sequencia) {
	//seu codigo aqui
    let conta = 0
    for (let item of sequencia) {
        console.log(item)
        if (conta === 0 && item === '<') {
            conta = 6
        } else if (item === '>') {
            conta++
            if (conta >= 7) {
                conta = 0
            }
        } else if (item === '<') {
            conta--
        }
    }
    return conta
}

const resultado = solucao('<<<<<<<<<')
console.log(resultado);