function arrayFromBigInt(n) {
    n = String(n).split("")

    const arrNUm = n.map(str => {
        return Number(str)
    })
    return arrNUm
}

console.log(arrayFromBigInt(1234n))