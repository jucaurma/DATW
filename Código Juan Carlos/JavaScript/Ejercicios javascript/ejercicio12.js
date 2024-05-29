// Escribe una función que tome una cadena de texto
// como entrada y devuelva una nueva cadena que contenga solo letras y números,
// eliminando cualquier carácter especial.


function limpiarCadena(texto) {
  // Utiliza una expresión regular para eliminar caracteres especiales
  return texto.replace(/[^a-zA-Z0-9]/g, '');
}

// Ejemplo de uso
let cadenaOriginal = "¡H0l@, mUnd0! ¿Cóm0 está$?";
let cadenaLimpia = limpiarCadena(cadenaOriginal);
console.log("Cadena original:", cadenaOriginal);
console.log("Cadena limpia:", cadenaLimpia);
