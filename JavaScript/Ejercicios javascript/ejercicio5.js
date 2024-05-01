// Escribe una función que reciba un array de números y devuelva
// dos arrays separados, uno con los números pares y otro con los números impares.

function separar_pares(array) {
  // Se define la función separar_pares que toma como argumento un array de números

  let longitud = array.length; // Se obtiene la longitud del array de entrada
  let array_pares = []; // Se inicializa un array vacío para almacenar los números pares
  let array_impares = []; // Se inicializa un array vacío para almacenar los números impares

  // Se recorre el array de entrada para separar los números pares e impares
  for (let i = 0; i < longitud; i++) {
    let numero = array[i]; // Se obtiene el número en la posición i del array
    if (numero % 2 == 0) {
      // Si el número es par (su residuo al dividir entre 2 es 0)
      array_pares.push(numero); // Se agrega el número al array de pares
    } else {
      // Si el número es impar
      array_impares.push(numero); // Se agrega el número al array de impares
    }
  }

  // Se devuelve un array que contiene dos arrays: el de números pares y el de impares
  return [array_pares, array_impares];
}





  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let resultado = separar_pares(numeros);
  console.log("Números pares: "+  resultado[0]); // Muestra el primer array obtenido que corresponde a los pares
  console.log("Números impares: " + resultado[1]); // Muestra el segundo array obtenido que corresponde a los impares