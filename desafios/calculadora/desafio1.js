function pares(){
let resultado = document.getElementById('resultado')
  
for(let i=0; i<=1000 ;i++){

 if(i%2==0){
    resultado.innerHTML += `${i}<br>`;
}
}
}