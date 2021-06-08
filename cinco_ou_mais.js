function solucao(precos) {
    let soma = 0
    for (let i in precos){
            soma += precos[i]
           
        }
    if (precos.length >= 5){
        var min = Math.min(...precos)
        console.log(soma-min)
    } else {
       console.log(soma)
    }
    
}