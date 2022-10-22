
function fatorial(n){
    if (n == 1){
        return 1
    }
    return n * fatorial(n-1)
}

function fatoriaisDoArray(array){
    let arrayF = []

    for(let i = 0; i < array.length; i++){
        arrayF.push(fatorial(array[i]))
    }

    return arrayF
}

console.log(fatorial(2))
