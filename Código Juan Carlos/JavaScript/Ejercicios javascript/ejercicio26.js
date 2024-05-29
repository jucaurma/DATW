// Escribe una función que tome un array de números como
// entrada y devuelva un nuevo array que contenga solo los números pares del array
// original.


function solo_pares(array){
  nuevo_array=[];
  for(numero of array){
    if (numero%2 == 0){
      nuevo_array.push(numero);
    }
  }
  return nuevo_array
}

miarray =[1,2,3,4,5,6,7,8];
console.log(solo_pares(miarray));