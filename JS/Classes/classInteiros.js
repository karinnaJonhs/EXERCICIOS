class Inteiro {
    #valor
    constructor(numero) {
        this.#valor = 0
        //Se for um número
        if (!isNaN(numero)) {
            this.#valor = Math.trunc(numero)
            //mantenha apenas a parte inteira
        } else {
            //0
            this.#valor = 0
        }
    }

    get valor() {
        //Devolve o valor
        return this.#valor
    }

    set valor(novoValor) {

        //Se o novoValor for valido
        if (!isNaN(novoValor)) {
            //o valor passa a ser a parte inteira do novo valor
            this.#valor = Math.trunc(novoValor)
        }

    }
}
