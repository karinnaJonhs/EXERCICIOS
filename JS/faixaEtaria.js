function calculaFaixaEtaria(idade){
    if(idade >=1 && idade <=11){
        return "Criança"
    }else if(idade >= 12 && idade <= 17){
        return "Adolescente"
    }else if(idade >= 18 && idade <= 64){
        return "Adulto"
    }else if(idade >= 65){
        return "Sénior"
    } 
}