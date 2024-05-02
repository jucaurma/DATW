// Escribe una función que tome una cadena
// de texto como entrada y devuelva un objeto que contenga el recuento de letras
// mayúsculas y minúsculas en la cadena.

function contarLetras(cadena) {
  // Inicializamos un objeto para almacenar el recuento de letras
  var recuento = {
    mayusculas: 0,
    minusculas: 0
  };

  // Iteramos sobre cada carácter de la cadena
  for (var i = 0; i < cadena.length; i++) {
    var caracter = cadena[i];
    // Verificamos si el carácter es una letra mayúscula
    if (caracter >= 'A' && caracter <= 'Z') {
      recuento.mayusculas++;
    }
    // Verificamos si el carácter es una letra minúscula
    else if (caracter >= 'a' && caracter <= 'z') {
      recuento.minusculas++;
    }
    // Ignoramos otros tipos de caracteres y vocales acentuadas
  }

  // Devolvemos el objeto con el recuento de letras
  return recuento;
}

// Ejemplo de uso
var cadena = "Hola, qué tal?";
var recuento = contarLetras(cadena);
console.log(recuento); // Resultado: { mayusculas: 2, minusculas: 8 }
