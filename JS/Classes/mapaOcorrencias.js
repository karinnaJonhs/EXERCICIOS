function mapaDeOcorrencias(array) {
    const a = new Map()
    console.log(array)
    array.forEach(number => {
        if (!a.has(number)) {
            a.set(number, 1)
        } else {
            a.set(number, a.get(number) + 1)
        }
    }
    )

    // Object.keys(a).map(function (key, value) {
    //     console.log("chave:" + key)
    //     console.log(value)


    // })

    // console.log(JSON.stringify(a))
    return a
}

