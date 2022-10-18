function calculaMedianaArray(array) {
    array.sort()


    if (array.length % 2) {
        return array[Math.floor((array.length) / 2)]

    } else {
        return (array[Math.floor((array.length - 1) / 2)] + array[Math.floor((array.length) / 2)]) / 2
    }

}