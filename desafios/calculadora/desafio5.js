

function portres(){

let divisivel = document.getElementById("divisivel") 

for(let x =0 ; x<=20; x++){

    if(x%3==0){
        divisivel.innerHTML += ` O número ${x} é divisível por 3 <br>`
    
    }

}

}