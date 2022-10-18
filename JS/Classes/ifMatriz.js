let array = [1, 2, 3, 4]

function eUmaMatriz(valor) {
    if (!Array.isArray(valor)) return false
    for (let i = 0; i < valor.length; i++) {

        if (typeof valor[i].length === "number" && typeof valor[i] !== "string") {
            return true
        }
        // if (Array.isArray(valor[i])) {
        //     return true
        // }

        // if (!valor[i]) continue
        // if (valor[i][i] != undefined) {
        //     return true
        // }
    }


    // return Array.isArray(valor) && valor.some(e => Array.isArray(e))
    return false
}

const m1 = [[[[[[[[[[]]]]]]]]]] //True
const m2 = [[], 3] //True
const m3 = [1, 2, 3] //False
const m4 = "" //False

console.log(
    eUmaMatriz(m1),
    eUmaMatriz(m2),
    eUmaMatriz(m3),
    eUmaMatriz(m4),
)