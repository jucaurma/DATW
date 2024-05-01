// Escribe una función que tome una cadena de texto como entrada y
// devuelva true si es un palíndromo (se lee igual de adelante hacia atrás que de atrás
// hacia adelante), y false si no lo es.

// Esta función verifica si una cadena es un palíndromo o no
function es_palindromo(cadena){
  // Convertimos la cadena a minúsculas y eliminamos los espacios en blanco
  let cadenaSinEspaciosMinusculas = cadena.toLowerCase().replace(/\s/g, "");
  
  // Invertimos la cadena normalizada
  let cadenaInvertida = cadenaSinEspaciosMinusculas.split("").reverse().join("");
  
  // Inicializamos una variable para almacenar el resultado
  let resultado = "";
  
  // Comparamos la cadena normalizada con la cadena invertida para determinar si es un palíndromo
  if (cadenaSinEspaciosMinusculas == cadenaInvertida) {
    resultado = "Es palíndromo";
  } else {
    resultado = "No es palíndromo";
  }
  
  // Devolvemos el resultado
  return resultado;
}

// Ejemplos de cadenas para probar la función
let micadena = "Anita lava la tina";
let micadena2 = "Dabale arroz a la zorra el abad";
let micadena3 = "Una frase cualquiera";

// Imprimimos el resultado para cada cadena
console.log("La frase '" + micadena + "' " + es_palindromo(micadena));
console.log("La frase '" + micadena2 + "' " + es_palindromo(micadena2));
console.log("La frase '" + micadena3 + "' " + es_palindromo(micadena3));
