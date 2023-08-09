function tabuada(){
   let tabuada = document.getElementById('tabuada')
    
    for(let i = 0; i<=10; i++){
        let multdeCinco = 5 * i
        
        tabuada.innerHTML += `5 x ${i} = ${multdeCinco}<br>`



    }

}