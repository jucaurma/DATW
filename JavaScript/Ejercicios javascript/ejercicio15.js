// Escribe una función que tome una cadena de texto
// como entrada y devuelva una nueva cadena en la que se hayan eliminado todos los
// espacios en blanco.

function quitar_espacios(cadena){
  var palabras = cadena.split(" ");
  var nueva_cadena = palabras.join("");
  return nueva_cadena
}

var micadena1 = "Esto es un ejemplo";
var micadena2 = "Este ejemplo es diferente";
var micadena3 = "Se me ocurre este otro";

console.log("Esta es la cadena original: "+micadena1+ "\nY esta la cadena sin espacios: "+quitar_espacios(micadena1));
console.log("Esta es la cadena original: "+micadena2+ "\nY esta la cadena sin espacios: "+quitar_espacios(micadena2));
console.log("Esta es la cadena original: "+micadena3+ "\nY esta la cadena sin espacios: "+quitar_espacios(micadena3));