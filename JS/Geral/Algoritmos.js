

function minimo(array, propriedade) {
    return array.reduce((min, v) => v[propriedade] < min[propriedade] ? v : min)
}

console.log(minimo([
    { val: 1, nome: "a" },
    { val: -1, nome: "b" }
], "val", 0))

function soma(array, propriedade, valorInicial) {
    return array.reduce((res, v) => res + v[propriedade], valorInicial)
}

console.log(soma([
    { val: 1, nome: "L" },
    { val: 2, nome: "i" },
    { val: 3, nome: "n" },
    { val: 4, nome: "d" },
    { val: 5, nome: "a" },
], "nome", ""))

function eQuadrada(matriz) {
    return matriz.every(a => a.length === matriz.length)
}

console.log(
    eQuadrada([
        [1, 2],
        [1, 2]
    ])
)

console.log(
    eQuadrada([
        [1, 2, 3],
        [1, 2]
    ])
)




function obtemDiagonal(matriz, linha, coluna) {
    let cont = 0
    let matriz2 = []
    while (matriz[linha + cont][coluna + cont] != undefined) {

        matriz2.push(matriz[linha + cont][coluna + cont])
        cont++
    }


    return matriz2

    //Enquanto estivermos em casa nao vazias
    //Guarda a casa nas coordenadas atuais
    //Incrementa o contador

}

function obtemDiagonalInversa(matriz, linha, coluna) {
    let cont = 0
    let matriz2 = []
    while (matriz[linha + cont][coluna - cont] != undefined) {

        matriz2.push(matriz[linha + cont][coluna - cont])
        cont++
    }
    return matriz2
}

function obtemDiagonais(matriz) {
    return `${obtemDiagonal(matriz, 0, 1)} e ${obtemDiagonalInversa(matriz, 0, 1)}`

}

console.log(
    obtemDiagonal(
        [
            [1, 2, 3],
            [1, 2, 3],
            [1]
        ],
        0, //1   
        1  //2
    )
)



console.log(
    obtemDiagonais([
        [1, 2, 3],
        [1, 2, 3],
        [1]
    ])
)

console.log(
    obtemDiagonais([
        [1, 2, 3],
        [1, 2, 3],
        [1]
    ])
)


