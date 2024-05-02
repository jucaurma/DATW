// Escribe una función que tome un array como entrada y
// devuelva un nuevo array que contenga solo los elementos únicos del array original,
// eliminando cualquier duplicado.

function no_duplicados(array){
  var nuevo_array = [];
  for(var elemento of array){
    if(!nuevo_array.includes(elemento)){
      nuevo_array.push(elemento);
    }
  }
  return nuevo_array
}

miarray = [1,2,3,4,5,5,5,5,6,76,87,2,2,2,3];
miarray2 = ["naranja", "plátano", "plátano", "plátano", "melón"]
console.log("El array introducido es: "+miarray+"\nY el array sin duplicados es: "+no_duplicados(miarray));
console.log("El array introducido es: "+miarray2+"\nY el array sin duplicados es: "+no_duplicados(miarray2));
