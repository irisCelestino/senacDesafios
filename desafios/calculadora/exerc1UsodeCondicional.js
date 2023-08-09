
function condicional() {
  let numero = parseInt(document.getElementById("numero").value);
  let print = document.getElementById("print");

 if ((numero % 3 === 0) && (numero % 5 === 0)){
  print.innerHTML = "FIZZBUZZ"
console.log("haha")
 } else if ( numero % 3 === 0){

  print.innerHTML = "FIZZ";
  console.log("haha")
 } else if (numero % 5 === 0 ){

  print.innerHTML = "BUZZ"
  console.log("haha")
 } else{
  print.innerHTML = "DEU RUIM"
  console.log("haha")
 }

  // switch(numero) {
  //  case (numero % 3 === 0) && (numero % 5 === 0):
  //    print.innerHTML = "FIZZBUZZ"
  //    break;
  //   case (numero % 3) === 0:
  //     print.innerHTML = "FIZZ"
  //     break;
  //  case (numero % 5) === 0:
  //    print.innerHTML = "BUZZ"
  //     break;
  //   default:
  //     console.log("Fim do Swtich Case")
  // }
}
