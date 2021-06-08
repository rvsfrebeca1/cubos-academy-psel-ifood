function solucao(produtos) {
    let resposta = {
    totalTop: 0,
    percentual: 0
    }
    
    var valores = [];
    for (let i = 0; i < produtos.length; i++) {
        var itens = produtos[i]
        valores.push(itens.preco)
    }
    for(let i= 0; i < valores.length; i++){
        if (valores[i] >= 10000){
        resposta.totalTop += valores[i]
        }
  
    }

    let soma = 0
    for (let i in valores){
        soma += valores[i]
    }



    resposta = {
        totalTop: resposta.totalTop,
        percentual:resposta.totalTop / soma
    }

    console.log(resposta)
    
    
}