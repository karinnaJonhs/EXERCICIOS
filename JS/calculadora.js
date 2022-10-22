class Calculadora {
    historico
    constructor() {
        this.historico = []
        this.ultimoResultado = 0n
    }

    somar(a, b) {
        a = BigInt(a)
        if (b != undefined) {
            b = BigInt(b)
            this.historico.push(`${a} + ${b} = ${a + b}`)
            this.ultimoResultado = a + b
            return this
        } else {
            this.historico.push(`${this.ultimoResultado} + ${a} = ${this.ultimoResultado + a}`)
            this.ultimoResultado = this.ultimoResultado + a
            return this
        }
    }

    subtrair(a, b) {
        a = BigInt(a)

        if (b != undefined) {
            b = BigInt(b)
            this.historico.push(`${a} - ${b} = ${a - b}`)
            this.ultimoResultado = a - b
            return this
        } else {
            this.historico.push(`${this.ultimoResultado} - ${a} = ${this.ultimoResultado - a}`)
            this.ultimoResultado = this.ultimoResultado - a
            return this
        }
    }

    multiplicar(a, b) {
        a = BigInt(a)

        if (b != undefined) {
            b = BigInt(b)
            this.historico.push(`${a} * ${b} = ${a * b}`)
            this.ultimoResultado = a * b
            return this
        } else {
            this.historico.push(`${this.ultimoResultado} * ${a} = ${this.ultimoResultado * a}`)
            this.ultimoResultado = this.ultimoResultado * a
            return this
        }
    }
    dividir(a, b) {
        a = BigInt(a)

        if (b != undefined) {
            b = BigInt(b)
            this.historico.push(`${a} / ${b} = ${a / b}`)
            this.ultimoResultado = a / b
            return this
        } else {
            this.historico.push(`${this.ultimoResultado} / ${a} = ${this.ultimoResultado / a}`)
            this.ultimoResultado = this.ultimoResultado / a
            return this
        }
    }

    limparHistorico() {
        this.historico = []
        this.ultimoResultado = 0n
        return this
    }

    obterResultado() {
        return this.ultimoResultado
    }

    toJSON() {
        return {
            "historico": this.historico,
            "ultimoResultado": this.ultimoResultado.toString()
        }


    }

    toString() {
        let linhas = ""
        for (let i = 0; i < this.historico.length; i++) {
            linhas += `${i + 1}. ${this.historico[i]}\n`
        }
        if (this.historico.length > 1) {
            return `=== Histórico da Calculadora ===\n${linhas}=== Fim do Histórico ===\nForam realizadas ${this.historico.length} operações\nÚltimo Resultado: ${this.ultimoResultado}`

        } else if (this.historico.length == 1) {
            return `=== Histórico da Calculadora ===\n${linhas}=== Fim do Histórico ===\nFoi realizada ${this.historico.length} operação\nÚltimo Resultado: ${this.ultimoResultado}`
        }

        else {
            return "Calculadora Limpa"
        }

    }


}