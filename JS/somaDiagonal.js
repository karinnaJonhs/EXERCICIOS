function somaDiagonalSecundaria(matrizquadrada) {
    let soma = 0
    for(let i = 0; i < matrizquadrada.length; i++){
        soma = soma + matrizquadrada[i][matrizquadrada.length - 1 - i]
    }
    return soma
}