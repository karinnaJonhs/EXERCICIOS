function contaParesEntreDoisValores(valor1, valor2) {
    let pares = 0

    if (valor1 != valor2) {
        for (let i = valor1; i <= valor2; i++) {
            if (i % 2 == 0) {
                pares++
            }

        }
        return pares
    } else {
        return "Por favor introduza dois valores direfentes."
    }

}

console.log(contaParesEntreDoisValores(2, 2))