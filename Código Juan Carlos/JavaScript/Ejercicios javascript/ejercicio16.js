// Escribe una función que tome una cadena de
// texto y una palabra como entrada, y devuelva el número de veces que aparece la
// palabra en la cadena.

function contar_palabra(cadena, palabra_concreta){
  cadenalower = cadena.toLowerCase();
  var cadena_sin_comas = cadenalower.replace(/,/g,"");
  var palabras = cadena_sin_comas.split(" ");
  console.log(cadena_sin_comas);
  var contador = 0;
  for (var una_palabra of palabras) {
    if (una_palabra == palabra_concreta) {
      contador = contador + 1;
    }
  }
  return contador;
}

var micadena = "Es el amor, mi amor, el amor del enamorado";
var palabra = "amor";
console.log(contar_palabra(micadena, palabra))