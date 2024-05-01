function invertirCadena (cadena) {
  let longitudCadena = cadena.length;
  let nueva_cadena = "";
  for (var caracter of cadena){
    nueva_cadena.push(caracter);
  }
  return nueva_cadena;
}

micadena= "Hola";
console.log("La cadena invertida es: " + invertirCadena(micadena));

// function invertirCadena(cadena) {
//   // Dividir la cadena en un array de caracteres, invertir el orden y unir nuevamente en una cadena
//   return cadena.split('').reverse().join('');
// }

// // Ejemplo de uso
// var textoOriginal = "Dábale arroz a la zorra el abad";
// var textoInvertido = invertirCadena(textoOriginal);
// console.log(textoInvertido); // Output: "odnuM aloH"
