function encontrarPrimo(array) {

    return Array.find(ePrimo)
}



function ePrimo(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false
    }
    return true
}