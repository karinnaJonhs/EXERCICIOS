function contaNumeroDeDivisoesPorDois(n) {

    for (let divq = 0; !(n % 2); divq++) {
        n /= 2
    }
    return divq
}

console.log(contaNumeroDeDivisoesPorDois(2))