function solucao(letra, palavras) {
    const palavraErrada = [];
    
    for (let item of palavras){
        if (item[0] != letra){
            palavraErrada.push(item)
        }
    }
    console.log(palavraErrada.length)
    
}
