function validaSubsequente(array, subarray) {
    let newArray = []
    for (let i = 0; i < subarray.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] == subarray[i]) {
                newArray.push(array[j])
            }

        }
    }
    return JSON.stringify(newArray)  === JSON.stringify(subarray)
}