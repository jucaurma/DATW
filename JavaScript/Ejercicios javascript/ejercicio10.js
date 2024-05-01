// Escribe una función que tome una cadena de texto como entrada y
// devuelva el número de palabras que contiene.

function contarPalabras(cadena) {
  // Utilizamos una expresión regular para dividir la cadena en palabras,
  // teniendo en cuenta los espacios en blanco, los signos de puntuación y los números.
  let palabras = cadena.match(/\b[a-zA-Z]+\b/g);
  
  // Devolvemos la longitud del array de palabras, que representa el número de palabras en la cadena.
  return palabras ? palabras.length : 0; // Manejamos el caso cuando no se encuentran palabras en la cadena.
}

let micadena = " . 4";
let micadena2 = " Dabale arroz   a la zorra, el abad .  ";
let micadena3 = "Una frase cualquiera";

// Imprimimos el resultado para cada cadena
console.log("La frase '" + micadena + "' " + " tiene " + contarPalabras(micadena) + " palabras");
console.log("\nLa frase '" + micadena2 + "' " + " tiene " + contarPalabras(micadena2) + " palabras");
console.log("\nLa frase '" + micadena3 + "' " + " tiene " + contarPalabras(micadena3) + " palabras");
