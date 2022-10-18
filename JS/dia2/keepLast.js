// fazer um for que recebe os argumentos e remove um argumento se e,e for igual ao proximo

//a ordem do array precisa ser a mesma que a original, ou seja, não posso ordenar

//socorro >:C
n h

let array = [1, 0, 2, 2, 3, 4, 5]

let igual = (e1, e2) => { return e1 === e2 }

function removeRepeatedKeepLast(array, compare = igual, extractKey) {
    let arrayL = []

    for (let i = 0; i < array.length; i++) {
        arrayL = arrayL.filter(e => !compare(e, array[i]))
        arrayL.push(array[i])
    }

    return arrayL
    // console.log(array)
    // console.log(arrayL.reverse())
    // return arrayL.reverse()
    // arr.filter(ele => compare(ele, ))
}
console.log(removeRepeatedKeepLast(array, igual))