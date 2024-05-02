// Escribe una función que tome una cadena de
// texto como entrada y devuelva una nueva cadena en la que se hayan eliminado
// todas las palabras duplicadas.

function palabras_duplicadas(cadena){
  var cadena_lower = cadena.toLowerCase();
  var palabras = cadena_lower.split(" ");
  palabras_sin_duplicados = [];
  for (var palabra of palabras) {
    if (!palabras_sin_duplicados.includes(palabra)){
      palabras_sin_duplicados.push(palabra);
    }
  }
  var cadena_sin_duplicados = palabras_sin_duplicados.join(" ");
  return cadena_sin_duplicados
}

var micadena = "hola cómo estas hola hola hola";
var micadena2 = "hola hola hola hola hola y ya";
var micadena3 = "Esto es un ejemplo de eliminación de palabras duplicadas. Lo es. Lo es. Lo es"
console.log(palabras_duplicadas(micadena));
console.log(palabras_duplicadas(micadena2));
console.log(palabras_duplicadas(micadena3));