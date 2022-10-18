//criar uma funcao que multiplique todos os arrays antes do numero

//n é o numero/posição do numero!
function vezesAnterioresNArrayApenas(array, n) {
    let mult = 1

    if (n == 0) {
        return 1 //se for n, ira ignorar o resultado
    } else {
        for (let i = n - 1; i >= 0; i--) { // removi o n da lógica
            mult *= array[i]
        }
        return mult
    }
}

console.log(vezesAnterioresNArrayApenas([2, 2, 2, 2], 2))

// criar uma funcao que multiplique todos os numeros depois do numero
function vezesPosterioresNArray(array, n) {
    let mult = 1

    if (array[n + 1] == NaN) {
        return array[n]
    } else {
        for (let i = n + 1; i < array.length; i++) {
            mult *= array[i]
        }
        return mult
    }

}

console.log(vezesPosterioresNArray([2, 2, 2, 2], 3))

function produtoExclusivo(array) {

    let arrayV = []

    for (let i = 0; i < array.length; i++) {
        arrayV.push(vezesAnterioresNArrayApenas(array, i) * vezesPosterioresNArray(array, i))
    }

    return arrayV
}
console.log(produtoExclusivo([3, 4, 5]))

