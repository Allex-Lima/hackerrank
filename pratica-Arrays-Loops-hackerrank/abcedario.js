

function solucao(letra, palavras) {
    let conta = 0
    const letraminuscula = letra.toLowerCase()

    for (let caracter of palavras) {
        for (let palavra of caracter.palavras) {
            if (letraminuscula !== palavra.toLowerCase().at(0)) {
                conta++
            }
        }
    }
    console.log(conta);
}

solucao(
    'm',
    [
        {
          "letra": "m",
          "palavras": [
            "mamao",
            "maca",
            "melao",
            "melancia",
            "laranja"
          ]
        }
      ]
)