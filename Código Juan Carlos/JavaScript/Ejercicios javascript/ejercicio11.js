// Escribe una función que tome una cadena de texto como entrada y
// devuelva un objeto que contenga el recuento de cada letra en la cadena.

// function contar_letras(cadena){
//   let cadena_sin_espacios = cadena.split(/\b[a-zA-Z]+\b/g);
//   return cadena_sin_espacios.length;
// }

// let micadena = " . 4";
// let micadena2 = " Dabale arroz   a la zorra, el abad .  ";
// let micadena3 = "Una frase cualquiera";

// // Imprimimos el resultado para cada cadena
// console.log("La cadena '" + micadena + "' " + " tiene " + contar_letras(micadena) + " letras");
// console.log("\nLa cadena '" + micadena2 + "' " + " tiene " + contar_letras(micadena2) + " letras");
// console.log("\nLa cadena '" + micadena3 + "' " + " tiene " + contar_letras(micadena3) + " letras");

function contarLetras(cadena) {
  // Inicializamos un objeto vacío para almacenar los recuentos de cada letra
  let recuentos = {};

  // Convertimos la cadena a minúsculas para ignorar las diferencias entre mayúsculas y minúsculas
  cadena = cadena.toLowerCase();

  // Recorremos cada carácter de la cadena
  for (let caracter of cadena) {
    // Verificamos si el carácter es una letra del alfabeto
    if (/^[a-zA-ZÀ-ÖØ-öø-ÿ]$/.test(caracter)) {
      // Incrementamos el recuento correspondiente en el objeto
      recuentos[caracter] = (recuentos[caracter] || 0) + 1;
    }
  }

  // Devolvemos el objeto con los recuentos de cada letra
  return recuentos;
}

// Ejemplo de uso:
let cadena = "Hola, mundo!";
console.log(contarLetras(cadena));
let cadena1 = "Hola. ¿Qué tal estás? Soy Merche";
console.log(contarLetras(cadena1));

