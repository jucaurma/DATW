// Escribe una función que tome una cadena de texto, una
// palabra a buscar y una palabra de reemplazo, y devuelva una nueva cadena en la que
// todas las ocurrencias de la palabra a buscar se reemplacen por la palabra de
// reemplazo.


function reemplazar_palabra(cadena, palabra_concreta, nueva_palabra){
  cadenalower = cadena.toLowerCase();
  var nueva_cadena = cadenalower.replace(new RegExp(palabra_concreta, 'g'), nueva_palabra);
  
  return nueva_cadena
}

var micadena = "Es el amor, mi amor, el amor del enamorado";
var palabra = "amor";
var otra_palabra = "jamón";
console.log(reemplazar_palabra(micadena, palabra, otra_palabra));