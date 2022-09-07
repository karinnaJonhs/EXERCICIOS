/*class Inteiro {
    static eInteiro(n) {
        return n === Math.round(n)
    }

    static nulo = 0
}

console.log(Inteiro.eInteiro(2.8))

*/

class ContadorDeIntancias {
    constructor() {
        ContadorDeIntancias.instancias++
    }
    static instancias = 0
}

console.log(ContadorDeIntancias.instancias)
new ContadorDeIntancias()
new ContadorDeIntancias()
new ContadorDeIntancias()
new ContadorDeIntancias()
new ContadorDeIntancias()
console.log(ContadorDeIntancias.instancias)

function soma(a, b) {
    console.log("estou a somar")

    return a + b

}

class Questao{
    constructor(){
        return "ahgsuiasjhajsa"
    }
}

console.log(new Questao())