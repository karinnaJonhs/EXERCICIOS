function umOuOutro(a, b, c) {

    /*   if (a === b)
           return false
       else {
           return true
       }
   */
    return (a && !b && !c)
        || (!a && b && !c)
        || (!a && !b && c)
}

console.log(umOuOutro(true, true, true))
console.log(umOuOutro(true, true, false))
console.log(umOuOutro(true, false, true))
console.log(umOuOutro(false, true, false))
console.log(umOuOutro(true, false, false))
console.log(umOuOutro(false, false, false))
console.log(umOuOutro(false, true, true))
console.log(umOuOutro(false, false, true))  