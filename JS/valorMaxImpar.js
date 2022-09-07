function valorMaximoImpar(array) {
    return Math.max(...array.filter((n) => n % 2 != 0))
}

console.log(valorMaximoImpar([1, 2, 3, 4, 5]))