function solucao(tempo, distancia) {
    if (distancia < 5){
        console.log(600)
    } else if(tempo >= 5 && tempo  <= 60){
        let valor = (1 * tempo) + (0.5 * distancia)
        console.log(valor * 100)
    } else if (tempo > 60){
        if (distancia < 100){
            let valor = 2 * distancia
            console.log(valor * 100)
        } else {
            let valor = 1.5 * distancia
            console.log(valor * 100)
        }
    }

}