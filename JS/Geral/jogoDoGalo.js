
const tabuleiro =
    [
        ["_"], ["_"], ["_"],
        ["_"], ["_"], ["_"],
        ["_"], ["_"], ["_"],
    ]

// array.map(e => (i * i))

// array.push(jogo.tabuleiro[i].join("")) // ["___","___","___"]


function adicionarJogada(jogo, jogador, linha, coluna) {


    let clone = JSON.parse(JSON.stringify(jogo))
    if (!verificarFimDoJogo(jogo) && jogo.tabuleiro[linha][coluna] === "_") {

        clone.tabuleiro[linha][coluna] = jogador
    }
    return clone

}

function obterJogadasPossiveis(jogo) {
    let vazios = []
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (jogo.tabuleiro[i][j] == "_") {
                vazios.push({ linha: i, coluna: j })
            }
        }
    }
    return vazios
}

function verificarVencedor(jogo) {

    if (jogo.tabuleiro[0][0] == jogo.tabuleiro[0][1] && jogo.tabuleiro[0][1] == jogo.tabuleiro[0][2] && jogo.tabuleiro[0][0] !== "_") {
        return jogo.tabuleiro[0][0]

    } else if (jogo.tabuleiro[0][2] == jogo.tabuleiro[1][2] && jogo.tabuleiro[1][2] == jogo.tabuleiro[2][2] && jogo.tabuleiro[0][2] !== "_") {
        return jogo.tabuleiro[0][2]

    } else if (jogo.tabuleiro[1][0] == jogo.tabuleiro[1][1] && jogo.tabuleiro[1][1] == jogo.tabuleiro[1][2] && jogo.tabuleiro[1][0] !== "_") {
        return jogo.tabuleiro[1][0]

    } else if (jogo.tabuleiro[2][0] == jogo.tabuleiro[2][1] && jogo.tabuleiro[2][1] == jogo.tabuleiro[2][2] && jogo.tabuleiro[2][0] !== "_") {
        return jogo.tabuleiro[2][0]

    } else if (jogo.tabuleiro[0][0] == jogo.tabuleiro[1][1] && jogo.tabuleiro[1][1] == jogo.tabuleiro[2][2] && jogo.tabuleiro[0][0] !== "_") {
        return jogo.tabuleiro[0][0]

    } else if (jogo.tabuleiro[0][0] == jogo.tabuleiro[1][1] && jogo.tabuleiro[1][1] == jogo.tabuleiro[0][2] && jogo.tabuleiro[0][0] !== "_") {
        return jogo.tabuleiro[0][0]

    } else if (jogo.tabuleiro[0][0] == jogo.tabuleiro[1][0] && jogo.tabuleiro[1][0] == jogo.tabuleiro[2][0] && jogo.tabuleiro[0][0] !== "_") {
        return jogo.tabuleiro[0][0]

    } else if (jogo.tabuleiro[0][1] == jogo.tabuleiro[1][1] && jogo.tabuleiro[1][1] == jogo.tabuleiro[2][1] && jogo.tabuleiro[0][1] !== "_") {
        return jogo.tabuleiro[0][1]

    }
}


function verificarFimDoJogo(jogo) {
    return (obterJogadasPossiveis(jogo).length === 0 || verificarVencedor(jogo) != undefined)

}