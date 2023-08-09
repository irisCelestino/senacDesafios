// function numeroDivisivel(number) {
//   while(number != 0){
//     if (number % 3 === 0 && number % 5 === 0) {
//       return "FizzBuzz";
//     } else if (number % 3 === 0) {
//       return "Fizz";
//     } else if (number % 5 === 0) {
//       return "Buzz";
//     } else {
//       return number;
//     }
//   }
// }
// console.log(numeroDivisivel(23))


function numeroDivisivel(number) {
  switch (number) {
    case number % 3 === 0 && number % 5 === 0:
      return "FizzBuzz";
    case number % 3 === 0:
      return "Fizz";
    case number % 5 === 0:
      return "Buzz";
    default:
      return number;
  }
}

console.log(numeroDivisivel(23))