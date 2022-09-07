function minMax(array, n) {
    let minmax = []
    let soma1 = 0
    let soma2 = 0
    array.sort((a, b) => a - b)

    for (let i = 0; i < n; i++) {
        soma1 += array[i]
        soma2 += array[array.length - 1 - i]
    }

    minmax.push(soma1, soma2)

    return minmax

}

console.log(minMax([1, 2, 3, 4, 5], 4))
console.log(minMax([1, 2, 3, 4, 5], 2))