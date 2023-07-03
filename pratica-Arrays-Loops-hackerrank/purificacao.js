function solucao(stringComrompida) {
    const caracteresEspeciais = /[!@#$%&*()]/g

    return stringComrompida.replace(caracteresEspeciais, '')


}

const fraseConrrompida = '*Canis %lupus )familiaris'

const visualizar = solucao(fraseConrrompida)
console.log(visualizar);
