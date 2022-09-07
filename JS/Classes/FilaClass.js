/*
Implementa a classe Fila, lembra-te que deve seguir as regras First In, First Out.

A classe deve ter três métodos:

adicionar, recebe um elemento como argumento e insere-o na Fila.
remover, remove o elemento da frente da Fila, caso a Fila esteja vazia, retorna "Fila vazia!"
obterElemento, retorna o elemento que esteja na frente da Fila, caso a Fila esteja vazia, retorna 

*/

class Fila {

    constructor() {
        this.fila = []
    }
    adicionar(elemento) {
        this.fila.push(elemento)
    }

    remover() {
        if (this.fila.length == 0) {
            return "Fila vazia!"
        } else {
            return this.fila.shift()
        }


    }

    obterElemento() {
        if (this.fila.length == 0) {
            return "Fila vazia!"
        } else {
            return this.fila[0]
        }
    }
}