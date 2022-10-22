function horaPorExtenso(data){
    let horaIndex = data.getUTCHours()
    let hora
    let minIndex = data.getUTCMinutes()
    let min
    let horario = ``

    switch(horaIndex){
        case 0: 
        hora = "meia noite"
        break;
        case 1: 
        hora = "uma"
        break;
        case 2: 
        hora = "duas"
        break;
        case 3: 
        hora = "três"
        break;
        case 4: 
        hora = "quatro"
        break;
        case 5:
        hora = "cinco"
        break;
        case 6: 
        hora = "seis"
        break;
        case 7: 
        hora = "sete"
        break;
        case 8: 
        hora = "oito"
        break;
        case 9: 
        hora = "nove"
        break;
        case 10: 
        hora = "dez"
        break;
        case 11: 
        hora = "onze"
        break;
        case 12: 
        hora = "doze"
        break;
        case 13: 
        hora = "treze"
        break;
        case 14: 
        hora = "catorze"
        break;
        case 15: 
        hora = "quinze"
        break;
        case 16: 
        hora = "dezasseis"
        break;
        case 17: 
        hora = "dezassete"
        break;
        case 18: 
        hora = "dezoito"
        break;
        case 19: 
        hora = "dezanove"
        break;
        case 20: 
        hora = "vinte"
        break;
        case 21: 
        hora = "vinte e uma"
        break;
        case 22: 
        hora = "vinte e duas"
        break;
        case 23: 
        hora = "vinte e três"
        break;
        

    }

    switch (minIndex){
        case 0: min= "em ponto"
        break;
        case 1: min= "uma"
        break;
        case 2: min= "duas"
        break;
        case 3: min= "três"
        break;
        case 4: min= "quatro"
        break;
        case 5: min= "cinco"
        break;
        case 6: min= "seis"
        break;
        case 7: min= "sete"
        break;
        case 8: min= "oito"
        break;
        case 9: min= "nove"
        break;
        case 10: min= "dez"
        break;
        case 11: min= "onze"
        break;
        case 12: min= "doze"
        break;
        case 13: min= "treze"
        break;
        case 14: min= "catorze"
        break;
        case 15: min= "quinze"
        break;
        case 16: min= "dezasseis"
        break;
        case 17: min= "dezassete"
        break;
        case 18: min= "dezoito"
        break;
        case 19: min= "dezanove"
        break;
        case 20: min= "vinte"
        break;
        case 21: min= "vinte e um"
        break;
        case 22: min= "vinte e dois"
        break;
        case 23: min= "vinte e trêS"
        break;
        case 24: min= "vinte e quatro"
        break;
        case 25: min= "vinte e cinco"
        break;
        case 26: min= "vinte e seis"
        break;
        case 27: min= "vinte e sete"
        break;
        case 28: min= "vinte e oito"
        break;
        case 29: min= "vinte e nove"
        break;
        case 30: min= "meia"
        break;
        case 31: min= "trinta e uma"
        break;
        case 32: min= "trinta e duas"
        break;
        case 33: min= "trinta e três"
        break;
        case 34: min= "trinta e quatro"
        break;
        case 35: min= "trinta e cinco"
        break;
        case 36: min= "trinta e seis"
        break;
        case 37: min= "trinta e sete"
        break;
        case 38: min= "trinta e oito"
        break;
        case 39: min= "trinta e nove"
        break;
        case 40: min= "quarenta"
        break;
        case 41: min= "quarenta e uma"
        break;
        case 42: min= "quarenta e duas"
        break;
        case 43: min= "quarenta e três"
        break;
        case 44: min= "quarenta e quatro"
        break;
        case 45: min= "três quartos"
        break;
        case 46: min= "quarenta e seis"
        break;
        case 47: min= "quarenta e sete"
        break;
        case 48: min= "quarenta e oito"
        break;
        case 49: min= "quarenta e nove"
        break;
        case 50: min= "cinquenta"
        break;
        case 51: min= "cinquenta e um"
        break;
        case 52: min= "cinquenta e dois"
        break;
        case 53: min= "cinquenta e três"
        break;
        case 54: min= "cinquenta e quatro"
        break;
        case 55: min= "cinquenta e cinco"
        break;
        case 56: min= "cinquenta e seis"
        break;
        case 57: min= "cinquenta e sete"
        break;
        case 58: min= "cinquenta e oito"
        break;
        case 59: min= "cinquenta e nove"
        break;
    }

    if(horaIndex >= 0 && minIndex >0){
        horario = `${hora} e ${min}`
    }
    else if(minIndex == 0){
        horario = `${hora} em ponto`
    }

    return horario
} 

console.log(horaPorExtenso(new Date("2021-05-17 00:12")))