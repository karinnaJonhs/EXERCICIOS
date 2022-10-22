function contaNumeroDeDivisoesPorDois(n){
    let vzs = 0
   
    while(n != 1){
        n = Math.floor(n/2)
        vzs++
    }
        return vzs
    }
    console.log(contaNumeroDeDivisoesPorDois(9))
    