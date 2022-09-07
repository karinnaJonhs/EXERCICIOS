

/*class mesa {
    constructor(corpo, pernas) {
        this.tampo = tampo
        this.pernas = pernas
    }
}

new mesa("Madeira", 8)
new mesa("vidro", 8)s
*/
//console.log(mesa1 instanceof Mesa)

//GATOOOOSSSSSSSSSSSSSSSSS
/*

let gato1 = {
    corpo: "laranja",
    pesoEmKg: 3,
    miar: function (miar) {
        miar = "Miaw!"
        return miar
    }
}


console.log(gato1.miar())


class Gato {
    constructor(corDoPelo, pesoEmKg, idade) {
        this.cor = corDoPelo
        this.pesoEmKg = pesoEmKg
        this.idade = idade
        this.pular = (pop) => {
            pop = "boing"
            return pop
        }
    }

    miar() {
        console.log("MIAAAUUU")
    }

    envelhecer() {
        this.idade++
    }
}



let gato2 = new Gato("Laranja", 4.3, 1)
let gato3 = new Gato("Rosa", 5, 2)

gato2.envelhecer()


console.log(gato2.pular())

*/

//LOOOPP INFINITO
/*
function recursao() {
    console.log("oi")
    recursao()
}

recursao()

*/

//LOOPIN COUNT 
/*
function conta(n) {
    console.log(n)
    if (n == 0) {
        return
    }

    conta(n - 1)

}

conta(2)

*/

//FATORIAL
/*
function fatorial(n) {
    if (n === 1) {
        return 1
    }
    return n * fatorial(n - 1)
}

console.log(fatorial(8))

function fatorialCiclo(n){
    let fat
    for (let i = n; i >= 1; i--){
        let = n * i
    }
    return fat
}
console.log(fatorialCiclos(8))

*/

function superDigito(n) {

    //let soma = 0
    //for (let i = 0; i < n.length; i++) {
    //    soma += Number(n[i])
    //}
    while (Number(n) > 9) {
        console.log("Calcular o super digito de: " + n)
        let soma = 0
        for (let i = 0; i < n.length; i++)
            soma += Number(n[i])
    }

    return soma

}

console.log(superDigito(23456))