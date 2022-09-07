/*
\n Nova Linha
\tabulação Horizontal
\Caracter nulo
\' Apostrofo Nulo

${ } serve para colocar uma variavel dentro de uma string (interpolação)


function insereLinhaEntre(primeira, segunda) {
    return primeira + "\n" + segunda
    return `$(primeira)
            $(segunda)`
}

console.log(insereLinhaEntre("oi", "linda"))

!!!!!!
a > b ? a : b

se a for maior que b então retorna a, senao, retorna b

*/

function maiorValor(a, b) {
    maior = (String(a) > String(b) ? String(a) : String(b))
    return `O maior entre ${String(a)} e ${String(b)} é ${maior} ` + "\n"
}

console.log(maiorValor("10", "2"))
console.log(maiorValor(12, 2))
