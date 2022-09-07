function exclusivo(array1, array2) { //Na verdade é o subsequente
    let i = 0;
    let j = 0;
    let res = []
    let done = false
    while (!done) {
        if (array1[i] !== undefined) {
            res.push(array1[i])
        }
        i++
        if (array2[j] !== undefined) {
            res.push(array2[j])
        }
        j++


        if (!array2[j] && !array1[i]) {
            done = true
        }
    }

    return res
}

console.log(exclusivo([1, 2, 3], [4, 5, 6]))