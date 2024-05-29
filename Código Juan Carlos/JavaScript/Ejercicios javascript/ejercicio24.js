// Escribe una función que tome dos matrices como entrada y
// devuelva una nueva matriz que sea la suma de las dos matrices originales

function suma_matrices(matriz1, matriz2) {
  var suma = [];
  
  for (var i = 0; i < matriz1.length; i++){
    suma[i] = [];
    for (var j = 0; j < matriz1[0].length; j++){
      suma[i][j] = matriz1[i][j] + matriz2[i][j];
    }
  }
  return suma
}

var matriz1 = [[1, 2,3], [3, 4,3]];
var matriz2 = [[5, 6,3], [7, 8,3]];
var resultado = suma_matrices(matriz1, matriz2);
console.log(resultado);