function calculaSigno(dia, mes){
    if(mes == 1){
        if (dia >= 1 && dia <=20){
            return "Capricórnio"
        }else if(dia >= 21 && dia <= 31){
            return "Aquário"
        }else{
            return "Por favor introduza um dia entre 1 e 31."
        }
            
    }else if(mes == 2){
        if (dia >= 1 && dia <= 18){
            return "Aquário"
        }else if(dia >= 19 && dia <= 28){
            return "Peixes"
        }else{
            return "Por favor introduza um dia entre 1 e 28."
        }
    }else if(mes == 3){
        if (dia >= 1 && dia <= 20){
            return "Peixes"
        }else if(dia >= 21 && dia <= 31){
            return "Carneiro"
        }else{
            return "Por favor introduza um dia entre 1 e 31."
        }
    }else if(mes == 4){
        if (dia >= 1 && dia <= 20){
            return "Carneiro"
        }else if(dia >= 21 && dia <= 30){
            return "Touro"
        }else{
            return "Por favor introduza um dia entre 1 e 30."
        }
    }else if(mes == 5){
        if (dia >= 1 && dia <= 20){
            return "Touro"
        }else if(dia >= 21 && dia <= 31){
            return "Gémeos"
        }else{
            return "Por favor introduza um dia entre 1 e 31."
        }
    }else if(mes == 6){
        if (dia >= 1 && dia <= 20){
            return "Gémeos"
        }else if(dia >= 21 && dia <= 30){
            return "Caranguejo"
        }else{
            return "Por favor introduza um dia entre 1 e 30."
        }
    }else if(mes == 7){
        if (dia >= 1 && dia <= 22){
            return "Caranguejo"
        }else if(dia >= 23 && dia <= 31){
            return "Leão"
        }else{
            return "Por favor introduza um dia entre 1 e 31."
        }
    }else if(mes == 8){
        if (dia >= 1 && dia <= 22){
            return "Leão"
        }else if(dia >= 23 && dia <= 31){
            return "Virgem"
        }else{
            return "Por favor introduza um dia entre 1 e 31."
        }
    }else if(mes == 9){
        if (dia >= 1 && dia <= 22){
            return "Virgem"
        }else if(dia >= 23 && dia <= 30){
            return "Balança"
        }else{
            return "Por favor introduza um dia entre 1 e 30."
        }
    }else if(mes == 10){
        if (dia >= 1 && dia <= 22){
            return "Balança"
        }else if(dia >= 23 && dia <= 31){
            return "Escorpião"
        }else{
            return "Por favor introduza um dia entre 1 e 31."
        }
    }else if(mes == 11){
        if (dia >= 1 && dia <= 21){
            return "Escorpião"
        }else if(dia >= 22 && dia <= 30){
            return "Sagitário"
        }else{
            return "Por favor introduza um dia entre 1 e 30."
        }
    }else if(mes == 12){
        if (dia >= 1 && dia <= 21){
            return "Sagitário"
        }else if(dia >= 22 && dia <= 31){
            return "Capricórnio"
        }else{
            return "Por favor introduza um dia entre 1 e 31."
        }
    }else{
        return "Por favor introduza um mês entre 1 e 12."
    }
}