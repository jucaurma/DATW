// Escribe una función que tome una cadena de texto como entrada
// y devuelva una nueva cadena en la que el orden de las palabras esté invertido.

function invertir_palabras(cadena){
  var palabras = cadena.split(" ");
  var palabras_invertidas = palabras.reverse();
  var nueva_cadena = palabras_invertidas.join(" ");
  return nueva_cadena;
}

var micadena1 = "Esto es un ejemplo";
var micadena2 = "Este ejemplo es diferente";
var micadena3 = "Se me ocurre este otro";

console.log("Esta es la cadena original: "+micadena1+ "\nY esta la cadena invertida: "+invertir_palabras(micadena1));
console.log("Esta es la cadena original: "+micadena2+ "\nY esta la cadena invertida: "+invertir_palabras(micadena2));
console.log("Esta es la cadena original: "+micadena3+ "\nY esta la cadena invertida: "+invertir_palabras(micadena3));