// Escribe una función que tome dos arrays como entrada y devuelva un
// nuevo array que sea la concatenación de los dos arrays originales.

function concatenar(array1, array2){
  nuevo_array = array1.concat(array2);
  return nuevo_array
}

miarray1 = [1,2,3];
miarray2 = [4,5,6];
console.log(concatenar(miarray1,miarray2))