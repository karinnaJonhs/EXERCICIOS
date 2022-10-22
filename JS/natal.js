function calculaDiasAteAoNatal(dia, mes){
    if(mes == 1){
        x = 31 - dia
        y = 328 + x
        return `Faltam ${y} dias  até o Natal.`
    }
    if(mes == 2){
        if (dia > 28) 
        return "Por favor introduza um dia entre 1 e 28."
        x = 28 - dia
        y = 300 + x
        return "Faltam " + y + " dias até o Natal."
    }
    if(mes == 3){
     x = 31 - dia
     y = 269 + x
     return "Faltam " + y + " dias até o Natal."
    }
    if(mes == 4){
        if (dia > 30)
        return "Por favor introduza um dia entre 1 e 30."
        x = 30 - dia
        y = 239 + x
        return "Faltam " + y + " dias até o Natal." 
    }
    if(mes == 5 ){
        x = 31 - dia
        y = 208 + x
        return "Faltam " + y + " dias até o Natal."
    }
    if(mes == 6 ){
        if(dia > 30)
        return " Por favor introduza um dia entre 1 e 30.1"
        x = 30 - dia
        y = 178 + x
        return "Faltam " + y + " dias até o Natal."
    }
    if(mes == 7 ){
        x = 31 - dia
        y = 147 + x
        return "Faltam " + y + " dias até o Natal."
    }
    if(mes == 8 ){
        x = 31 - dia
        y = 116 + x
        return "Faltam " + y + " dias até o Natal."
    }
    if(mes == 9 ){
        if(dia > 30) return "Por favor introduza um dia entre 1 e 30."
        x = 30 - dia
        y = 86 + x
        return "Faltam " + y + " dias até o Natal."
    }
    if(mes == 10 ){
        x = 31 - dia
        y = 55 + x
        return "Faltam " + y + " dias até o Natal."
    }
    if(mes == 11 ){
        if (dia > 30){ 
            return "Por favor introduza um dia entre 1 e 30."
            }
        x = 30 - dia
        y = 25 + x
        return "Faltam " + y + " dias até o Natal."
    }
    if(mes == 12 ){
        if (dia == 25){
            return "Hoje é Natal!"
        }else if (dia < 25){
            x = 25 - dia
            return "Faltam " + x + " dias até o Natal."
        }else if (dia > 25){
            x = 31 - dia
            y = 365 + x
            return "Faltam " + y + " dias até o Natal."
        }
    }
}

console.log(calculaDiasAteAoNatal(1, 1))