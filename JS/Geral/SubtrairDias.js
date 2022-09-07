function diferencaEmDias(data1, data2) {

    let date1 = data1.valueOf()
    let date2 = data2.valueOf()

    let diferenca = date1 - date2
    diferenca = Math.abs(diferenca)


    return Math.floor(diferenca / (24 * 60 * 60 * 1000))

} 