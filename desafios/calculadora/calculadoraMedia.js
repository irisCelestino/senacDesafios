function calculadoraMedia(){
    let nome = document.getElementById('nome').value
    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota2 = parseFloat(document.getElementById('nota2').value)
    let nota3 = parseFloat(document.getElementById('nota3').value)
    let nota4 = parseFloat(document.getElementById('nota4').value)
    let result = document.getElementById('result')

    let medianota = (nota1+nota2+nota3+nota4)/4

    if( isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        alert("Digite um número válido")
        return;
    }

    if(medianota <= 6){
        result.innerHTML="O "+nome+ " foi reprovado .Com nota : " + medianota
    } else{
    
    result.innerHTML="O "+nome+ " foi aprovado !! Com nota : "+ medianota
    }

}