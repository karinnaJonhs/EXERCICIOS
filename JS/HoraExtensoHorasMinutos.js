function tempoEmPalavras(horas, minutos){

    let hora = null
    let horaIndex = null
    let minuto = null
    let minIndex = null
    let horario = null

    if(minutos > 30)
        horas++

    if(horas === 24)
        horas = 0

    if(horas > 12)
        horaIndex = horas - 12
    else
        horaIndex = horas

    switch(horaIndex){
        case 0:
            hora = "meia noite"
            break
        case 1:
            hora = "uma"
            break
        case 2:
            hora = "duas"
            break
        case 3:
            hora = "três"
            break
        case 4:
            hora = "quatro"
            break
        case 5:
            hora = "cinco"
            break
        case 6:
            hora = "seis"
            break
        case 7:
            hora = "sete"
            break
        case 8:
            hora = "oito"
            break
        case 9:
            hora = "nove"
            break
        case 10:
            hora = "dez"
            break
        case 11:
            hora = "onze"
            break
        case 12:
            hora = "meio dia"
            break
    }

        if(minutos > 30)
            minIndex = 60 - minutos 
        
        else 
            minIndex = minutos

    switch(minIndex){
        case 0:
            minuto = " em ponto"
            break
        case 1:
            minuto = "um"
            break
        case 2:
            minuto = "dois"
            break
        case 3:
            minuto = "três"
            break
        case 4:
            minuto = "quatro"
            break
        case 5:
            minuto = "cinco"
            break
        case 6:
            minuto = "seis"
            break
        case 7:
            minuto = "sete"
            break
        case 8:
            minuto = "oito"
            break
        case 9:
            minuto = "nove"
            break
        case 10:
            minuto = "dez"
            break
        case 11:
            minuto = "onze"
            break
        case 12:
            minuto = "doze"
            break
        case 13:
            minuto = "treze"
            break
        case 14:
            minuto = "catorze"
            break
        case 15:
            minuto = "um quarto"
            break
        case 16:
            minuto = "dezasseis"
            break
        case 17:
            minuto = "dezassete"
            break
        case 18:
            minuto = "dezoito"
            break
        case 19:
            minuto = "dezanove"
            break
        case 20:
            minuto = "vinte"
            break
        case 21:
            minuto = "vinte e um"
            break
        case 22:
            minuto = "vinte e dois"
            break
        case 23:
            minuto = "vinte e três"
            break
        case 24:
            minuto = "vinte e quatro"
            break
        case 25:
            minuto = "vinte e cinco"
            break
        case 26:
            minuto = "vinte e seis"
            break
        case 27:
            minuto = "vinte e sete"
            break
        case 28:
            minuto = "vinte e oito"
            break
        case 29:
            minuto = "vinte e nove"
            break
        case 30:
            minuto = "meia"
            break
    }
        
    if(minutos === 0)
        horario = hora + minuto
    else if(minutos > 0 && minutos <= 30)
        horario = hora + " e " + minuto
    else if(horas === 12)
        horario = minuto + " para o " + hora
    else if(horas === 13 || horas === 1 || horas === 0)
        horario = minuto + " para a " + hora
    else
        horario = minuto + " para as " + hora

    return horario

}