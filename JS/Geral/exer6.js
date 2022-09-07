function mesesDoAno(mes) {

    switch (mes) {
        case "jan":
            return "janeiro"
        case "fev":
            return "Fevereiro"
        case "mar":
            return "Março"
        case "abr":
            return "Abril"
        case "mai":
            return "Maio"
        case "jun":
            return "Junho"
        case "jul":
            return "Julho"
        case "ago":
            return "Agosto"
        case "set":
            return "Setembro"
        case "out":
            return "Outubro"
        case "nov":
            return "Novembro"
        case "dez":
            return "dezembro"
    }
}

console.log(mesesDoAno("jan"))