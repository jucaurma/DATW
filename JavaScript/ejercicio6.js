// Escribe una función que tome un array como entrada y
// devuelva un nuevo array sin ningún elemento duplicado.

function eliminar_duplicados(array) {
  nuevo_array = [];
  for(let i = 0; i < array.length; i++){ //Recorre los elementos del array
    let numero = array[i];
    if (nuevo_array.includes(numero)){ // Si el elemento está ya incluido
      // No hacemos nada
    } else { //Si no está incluido
      nuevo_array.push(numero); // Añade el número al array nuevo
    }

  }
  return nuevo_array;
}

let miarray = [1, 2, 3, 4, 4, 5, 6 ,6, 7];
let miarray2 = [0, 0, 1];

console.log("El array sin elementos duplicados es: " + eliminar_duplicados(miarray));
console.log("El array sin elementos duplicados es: " + eliminar_duplicados(miarray2));