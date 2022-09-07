let bolo = [2, 4, 6, 7]
let cake = ["1", "2", "3"]


//RECURSÃO

/*function contaPares(array) {
    if (array.length == 0) {
        return 0
    }

    if (array[0] % 2 == 0) {
        return 1 + contaPares(array.slice(1))

    } else {
        return 0 + contaPares(array.slice(1))
    }

    //array[0] % 2 == 0 ? array.slice(1)
    //return array.slice() % 2 == 0 ? count++ : count = count

}

console.log(contaPares(bolo))

*/
/*

function inverteArray(array) {

    if (array.length === 0) {
        return []
    }
    // array.slice(1).concat(array[0])
    return [...inverteArray(array.slice(1)), array[0]]

}
console.log(inverteArray(bolo))
*/


// FUNÇÃO QUE RECEBE FUNÇÃO COM ARGUMENTO
// HIGHORDER

/*
function converter(str) {
    return Number(str)
}

function porSete(a) {
    return a ** 7
}

function aplica(array, fun) {
    if (array.length === 0) {
        return []
    }

    return [fun(array[0])].concat(aplica(array.slice(1), fun))


}

console.log(aplica(cake, converter))

*/

function soma(array) {
    if (array.length === 0) return 0
    return array[0] + soma(array.slice(1))
}

console.log(soma(bolo))


function clone(array) {
    if (!array.length) return []
    return [array[0]].concat(clone(array.slice(1)))
}

console.log(clone(bolo))

