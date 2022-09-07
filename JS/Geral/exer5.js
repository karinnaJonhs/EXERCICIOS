/*function escadaComCardinal(linha) {
    let escada = ""

    for (let i = 0; i <= linha; i++) {
        if (i != 0) {
            escada += "\n"
        }
        for (let k = 0; k < linha - i; k++) {
            escada += " "
            //conta os espaços e logo em seguida posiciona os cardinais de acordo com
            //a quantidade indicada
        }
        for (let j = 0; j < i; j++) {
            escada += "#"
        }
    }
    return escada
}


console.log(escadaComCardinal(25))

*/
function escadaComCardinal(linha) {
    let escada = " "

    for (let i = 0; i <= linha; i++) {
        if (i != 0) {
            escada += "\n"
        }
        for (let j = 0; j < i; j++) {
            escada += "#"
        }
    }
    return escada
}
console.log(escadaComCardinal(2))