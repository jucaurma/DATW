// Escribe una función que tome una cadena de texto como
// entrada y devuelva la misma cadena pero en orden inverso.

function invertirCadena(cadena) {
  let nueva_cadena = ""; // Inicializamos una cadena vacía para almacenar la cadena invertida
  for (var caracter of cadena) { // Iteramos sobre cada carácter en la cadena de entrada
    nueva_cadena = caracter + nueva_cadena; // Agregamos el carácter actual al inicio de la nueva cadena
  }
  return nueva_cadena; // Devolvemos la cadena invertida
}

micadena = "Hola mundo";
micadena2 = "dabale arroz a la zorra el abad";
micadena3 = "sara baras";
micadena4 = "Esto no es un palíndromo";
console.log("La cadena invertida es: " + invertirCadena(micadena));
console.log("La cadena invertida es: " + invertirCadena(micadena2));
console.log("La cadena invertida es: " + invertirCadena(micadena3));
console.log("La cadena invertida es: " + invertirCadena(micadena4));

