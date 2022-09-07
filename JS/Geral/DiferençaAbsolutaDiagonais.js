function diferencaAbsolutaEntreDiagonais(matrizquadrada) {

    diagD = 0
    diagE = 0


    for (let i = 0; i < matrizquadrada.length; i++) {

        diagD = diagD + matrizquadrada[i][i]
        diagE = diagE + matrizquadrada[i][matrizquadrada.length - 1 - i]

    }
    return Math.abs(diagD - diagE)
}
console.log(map([2, 3, 4], (n) => n * 2)) //[4,9,16]