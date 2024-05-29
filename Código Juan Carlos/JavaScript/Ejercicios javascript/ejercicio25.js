// Escribe una función que tome un array de números como
// entrada y devuelva el promedio de todos los números en el array.


function promedio(array){
    dividendo = 0;
  for(var numero of array){
    dividendo += numero;
  }
  resultado = dividendo/array.length;
  return resultado
}

miarray = [5,5,5,5,5,5];
miarray2 = [2356,12354,1235,235]
console.log(promedio(miarray));
console.log(promedio(miarray2));