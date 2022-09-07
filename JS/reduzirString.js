function stringSuperReduzida(str) {
    let reduzida = false
    while (!reduzida) {
        reduzida = true
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i + 1]) {
                str = str.slice(0, i) + str.slice(i + 2)
                reduzida = false
            }
        }
    }
    if (str.length === 0) return "String Vazia"
    return str
}