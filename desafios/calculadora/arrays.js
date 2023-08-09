function novoArray(array1, array2) {
  const newArray = [...array1, ...array2];
  return newArray;
}
console.log(novoArray([1,2,3,], [4,5,6]))

// function arrays(arrayOne, arrayTwo){
//   const newArray = arrayOne.concat(arrayTwo)
//   return newArray
// }

// console.log(arrays([1,2,3,], [4,5,6]))