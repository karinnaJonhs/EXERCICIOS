function superficieDoCone(raio, altura){
    let s = Math.sqrt(raio * raio + altura * altura);
    let volume = Math.PI * raio * raio * altura / 3;
    console.log("volume = " + volume);
    let area = Math.PI * raio * (raio + s);
    return area
}