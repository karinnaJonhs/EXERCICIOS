class Lista {
    #primeiro
    constructor(elementoDaLista) {
        if (elementoDaLista != undefined) {
            this.#primeiro = elementoDaLista
        }
    }

    insereNoInicio(elementoDaLista) {
        elementoDaLista.proximo = this.#primeiro
        this.#primeiro = elementoDaLista
    }


    get primeiro() {
        return this.#primeiro
    }

}

class ElementoDaLista {
    #dados
    #proximo
    constructor(dados) {
        this.#dados = dados
    }

    get dados() {
        return this.#dados
    }

    get proximo() {
        return this.#proximo
    }

    set proximo(novo) {
        this.#proximo = novo

    }

    get eUltimo() {
        return this.proximo == undefined
    }
}