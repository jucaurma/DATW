// Escribe una función que tome un número
// como entrada y devuelva una tabla de multiplicar para ese número.

// Definimos una función llamada tabla_multiplicar que toma un número como argumento
function tabla_multiplicar(numero) {
  // Iniciamos un bucle for que iterará desde 1 hasta 10
  for (let i = 1; i <= 10; i++) {
    // Dentro del bucle, multiplicamos el número dado por el valor de la iteración actual
    let resultado = i * numero; // Calculamos el resultado de la multiplicación
    // Imprimimos la operación de multiplicación en la consola
    console.log(i + " x " + numero + " = " + resultado); // Concatenamos los elementos para formar la cadena de texto a imprimir
  }
}

// Prueba con la tabla de multiplicar del 5
console.log("Tabla de multiplicar del 5:");
tabla_multiplicar(5);

// Prueba con la tabla de multiplicar del 8
console.log("\nTabla de multiplicar del 8:");
tabla_multiplicar(8);

// Prueba con la tabla de multiplicar del 12
console.log("\nTabla de multiplicar del 12:");
tabla_multiplicar(12);
