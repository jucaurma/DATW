// Escribe una función que tome un array de
// números como entrada y devuelva el número que aparece con más frecuencia en el
// array.

function numeroMasFrecuente(array) {
  var contador = {};
  var numeroMasFrecuente;
  var maxFrecuencia = 0;
  
  array.forEach(function(numero){
    if (contador[numero] === undefined) {
      contador[numero] = 1
    } else {
      contador[numero]++;
    }
    
    if (contador[numero] > maxFrecuencia){
      maxFrecuencia = contador[numero];
      numeroMasFrecuente = numero;
    }
  }
  )
  console.log(contador);
  return numeroMasFrecuente  
  }

  var arrayDeNumeros = [1, 2, 3, 4, 2, 2, 3, 5, 6, 7, 5, 5,5,5,5,5,5];
  var numeroMasFrecuenteEnArray = numeroMasFrecuente(arrayDeNumeros);
  console.log("El número más frecuente es:", numeroMasFrecuenteEnArray);