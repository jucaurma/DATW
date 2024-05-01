// Escribe una función que tome una cadena de texto como entrada y
// devuelva true si es un palíndromo (se lee igual de adelante hacia atrás que de atrás
// hacia adelante), y false si no lo es.

function es_palindromo(cadena){
  let cadenaSinEspaciosMinusculas = cadena.toLowerCase().replace(/\s/g, "");
  let cadenaInvertida = cadenaSinEspaciosMinusculas.split("").reverse().join("");
  let resultado = "";
  if (cadenaSinEspaciosMinusculas == cadenaInvertida) {
    resultado = "Es palíndromo";
  } else {
    resultado = "No es palíndromo";
  }
  return resultado
}

let micadena = "Anita lava la tina";
let micadena2 = "Dabale arroz a la zorra el abad";
let micadena3 = "Una frase cualquiera";
console.log("La frase '" + micadena + "' " + es_palindromo(micadena));
console.log("La frase '" + micadena2 + "' " + es_palindromo(micadena2));
console.log("La frase '" + micadena3 + "' " + es_palindromo(micadena3));