function partesDecimais(array){
    let arrayN = []

    for(let i = 0; i < array.length; i++){
        arrayN.push((Math.floor(+((Math.round((array[i] + Number.EPSILON)*100)/100) - Math.floor(array[i]))*100))/100)
    }
    return arrayN
}

console.log(partesDecimais([1.5,2.4,3.1,4.2]))

// nao retorba 0,39 do 2,4 :/
// CONSEGUIIIII AAAAA S2