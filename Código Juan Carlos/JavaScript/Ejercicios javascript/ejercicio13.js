// Escribe una función que tome una cadena de texto como
// entrada y devuelva una nueva cadena en la que la primera letra de cada palabra esté
// en mayúscula y el resto en minúscula.


function capitalizarPalabras(cadena) {
  // Dividir la cadena en palabras
  var palabras = cadena.split(" ");
  // Iterar sobre cada palabra
  for (var i = 0; i < palabras.length; i++) {
      // Convertir la primera letra a mayúscula y el resto a minúscula
      palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
  }
  // Unir las palabras nuevamente en una cadena
  var nuevaCadena = palabras.join(" ");
  return nuevaCadena;
}

// Ejemplo de uso
var texto = "hola cómo estás";
var textoCapitalizado = capitalizarPalabras(texto);
console.log(textoCapitalizado); // Resultado: "Hola Cómo Estás"
