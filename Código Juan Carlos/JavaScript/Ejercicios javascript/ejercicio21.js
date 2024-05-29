// Escribe una función que tome un array de números como
// entrada y devuelva un nuevo array con los números ordenados de menor a mayor.

// function ordenar(array){
//   return array.sort()
// }

// var miarray = [1,2,3,4,87,5,23,3];
// console.log("El array introducido es: "+miarray+"\nElarray ordenado es: "+ordenar(miarray));


function ordenar(array){
  return array.sort(function(a, b){
    return a - b
  });
}

var miarray = [1,2,3,4,87,5,23,3,1000, 897, 12345];
console.log("El array introducido es: " + miarray + "\nEl array ordenado es: " + ordenar(miarray).join(", "));
