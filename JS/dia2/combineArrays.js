function combineArrays(array1, array2) {

    let maior = array1
    let menor = array2

    if (maior.length < menor.length) {
        maior = array2
        menor = array1
    }

    let arrayC = []


    for (let i = 0; i < maior.length && menor[i] != undefined; i++) {

        arrayC.push(array1[i], array2[i])

    }
    for (let i = menor.length; i < maior.length; i++) {
        arrayC.push(maior[i])
    }

    return arrayC
}

console.log(combineArrays([1, 3, 5], [2, 4, 6, 7, 8, 9, 10]))