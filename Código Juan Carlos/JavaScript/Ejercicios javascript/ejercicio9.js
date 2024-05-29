// Escribe una función que tome un número como entrada y
// devuelva su factorial.

function factorial(numero) {
  if(numero === 0) {
    return 1;
  }
  return numero * factorial(numero - 1);
}

let minumero = 5;
let minumero1 = 10;
let minumero2 = 0;
let minumero3 = 9;
console.log("El factorial de " + minumero + " es: " + factorial(minumero));
console.log("\nEl factorial de " + minumero1 + " es: " + factorial(minumero1));
console.log("\nEl factorial de " + minumero2 + " es: " + factorial(minumero2));
console.log("\nEl factorial de " + minumero3 + " es: " + factorial(minumero3));