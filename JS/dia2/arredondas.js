function partesDecimais(array) {
    let arrayN = []

    for (let i = 0; i < array.length; i++) {
        arrayN.push((Math.floor(+((Math.round((array[i] + Number.EPSILON) * 100) / 100) - Math.floor(array[i])) * 100)) / 100)
    }
    return arrayN
}

console.log(partesDecimais([2.9, 2.4]))