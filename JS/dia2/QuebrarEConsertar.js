
function QuebrarEConsertar(coisa) {
    let quebra = coisa.split("")
    quebra.sort()
    let conserta = quebra.join("")

    return conserta
}

console.log(QuebrarEConsertar("polo")) // loop
console.log(QuebrarEConsertar("amendoa")) // aademno
console.log(QuebrarEConsertar("love")) // elov
console.log(QuebrarEConsertar("cachorro")) // acchoorr
console.log(QuebrarEConsertar("345635")) //334556