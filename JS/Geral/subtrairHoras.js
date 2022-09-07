function subtraiHoras(data, horas) {
    return new Date(data.valueOf() - horas*60*60*1000)
    
}