var colores = ["rojo", "verde", "azul"];
// Crear un array de números
let numeros = [1, 2, 3, 4, 5];
// Acceder a los elementos del array
console.log("Primer elemento:", numeros[0]); // Imprimirá: Primer elemento: 1
console.log("Segundo elemento:", numeros[1]); // Imprimirá: Segundo elemento: 2
// Iterar sobre los elementos del array
console.log("Elementos del array:");
numeros.forEach(function(numero) {
console.log(numero);
});
// Añadir un elemento al final del array
numeros.push(6);
console.log("Array después de añadir un elemento:", numeros); // Imprimirá: Array después de añadir un
elemento: [1, 2, 3, 4, 5, 6]
// Eliminar el último elemento del array
let ultimoElemento = numeros.pop();
console.log("Último elemento eliminado:", ultimoElemento); // Imprimirá: Último elemento eliminado: 6
console.log("Array después de eliminar el último elemento:", numeros); // Imprimirá: Array después de eliminar el último elemento: [1, 2, 3, 4, 5]