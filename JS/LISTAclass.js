
/*
Implementa as classes  e .

A classe  deve possuir 1 :

insereNoInicio()
O método deve receber um  como argumento, e define esse elemento como início da lista.

Na classe  deve também ser possível aceder ao  elemento da lista, ou seja, o início da lista.

A classe  tem um construtor que recebe, opcionalmente, um elemento. Se o elemento for recebido, passa a ser o  da lista.

A classe  deve ter um construtor, que define os  do elemento, também tem uma propriedade , que é uma referência para o próximo elemento da lista. Deve ser possível  e  os valores do  elemento. Deve ser possível  os  do elemento.

Deve também ser possível verificar se um   da Lista.
*/

class Lista {

    #primeiro
    constructor(elemento){
        this.#primeiro = elemento
    }
    insereNoInicio(elementoDaLista){
        elementoDaLista.proximo = this.#primeiro
        this.#primeiro = elementoDaLista
    }
   
    get primeiro(){
        return this.#primeiro
    }
   }
   
   class ElementoDaLista {
       #dados
       #proximo
       constructor(dados, proximo){
           this.#dados = dados
           this.#proximo = proximo
       }
   
       get dados(){
       return this.#dados
       }
   
       get proximo(){
           return this.#proximo
       }
   
       set proximo(elemento){
           this.#proximo = elemento
       }
   
       get eUltimo(){
           return !this.#proximo
       }
   }