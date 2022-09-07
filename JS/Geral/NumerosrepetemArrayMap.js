function mapaDeOcorrencias(array) {
    return array.reduce((a, curr) => {
        if (!a.has(curr)) {
            return new Map([...a, [curr, 1]])
        } else {
            return new Map([...a, [curr, a.get(curr) + 1]])

        }
    }, new Map())
}