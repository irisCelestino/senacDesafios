function conversor(){


let hora = parseInt(document.getElementById("hora").value)
let converter = hora*3600
let convertido = document.getElementById("convertido")

convertido.innerHTML += `A HORA ${hora} CONVERTIDA PARA SEGUNDOS É : ${converter}`


}