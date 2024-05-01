// Crear un array vacío
let miArray = [];

// Crear un array con elementos
let numeros = [1, 2, 3, 4, 5];
let colores = ["rojo", "verde", "azul"];

// Acceder a elementos de un array (indexados desde 0)
console.log(numeros[0]); // Imprime 1
console.log(colores[1]); // Imprime "verde"

// Modificar elementos de un array
numeros[2] = 10;
console.log(numeros); // Imprime [1, 2, 10, 4, 5]

// Longitud de un array
console.log(colores.length); // Imprime 3

// Iterar sobre un array usando un bucle for
for (let i = 0; i < numeros.length; i++) {
console.log(numeros[i]);
}

// Añadir elementos al final de un array
miArray.push("elemento1");
miArray.push("elemento2");
console.log(miArray); // Imprime ["elemento1", "elemento2"]

// Eliminar el último elemento de un array
miArray.pop();
console.log(miArray); // Imprime ["elemento1"] 36


// Crear un array
let numeros1 = [3, 1, 4, 1, 5, 9];

// Mostrar el array original
console.log("Array original:", numeros1);

// Método push: Añade elementos al final del array
numeros1.push(2);
console.log("Después de push(2):", numeros1);

// Método pop: Elimina el último elemento del array
numeros1.pop();
console.log("Después de pop():", numeros1);

// Método shift: Elimina el primer elemento del array
numeros1.shift();
console.log("Después de shift():", numeros1);

// Método unshift: Añade elementos al principio del array
numeros1.unshift(6, 5);
console.log("Después de unshift(6, 5):", numeros1);

// Método splice: Cambia el contenido de un array eliminando elementos existentes y/o añadiendo nuevos
// elementos
numeros1.splice(2, 1, 8);

// Comienza en el índice 2 del array números, elimina 1 elemento a partir de ese índice.
// Luego, agrega el elemento 8 en la posición del índice 2.
console.log("Después de splice(2, 1, 8):", numeros1);


// Método slice: Devuelve una copia superficial de una porción del array en un nuevo array
let subArray = numeros1.slice(1, 4);
console.log("Resultado de slice(1, 4):", subArray); 37

// Método concat: Combina dos o más arrays
let otrosNumeros = [7, 9, 0];
let numerosConcatenados = numeros1.concat(otrosNumeros);
console.log("Resultado de concat(otrosNumeros):", numerosConcatenados);

// Método join: Une todos los elementos de un array en una cadena
let cadena = numeros1.join("-");
console.log("Resultado de join('-'):", cadena);

// Método reverse: Invierte el orden de los elementos del array
numeros1.reverse();
console.log("Después de reverse():", numeros1);

// Método sort: Ordena los elementos de un array
numeros1.sort();
console.log("Después de sort():", numeros1);

// Método indexOf: Devuelve el primer índice en el que se encuentra un elemento específico en el array
let indice = numeros1.indexOf(5);
console.log("Índice de 5:", indice);

// Método lastIndexOf: Devuelve el último índice en el que se encuentra un elemento específico en el array
let ultimoIndice = numeros1.lastIndexOf(5);
console.log("Último índice de 5:", ultimoIndice);

// Método includes: Determina si un array incluye un determinado elemento
let incluido = numeros1.includes(8);
console.log("¿Está incluido el 8?:", incluido);

// Método forEach: Ejecuta una función proporcionada una vez por cada elemento del array
console.log("Recorriendo el array con forEach():");
numeros1.forEach(function(elemento) {
console.log(elemento);
}); 

// Método map: Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada
// uno de sus elementos
let duplicados = numeros1.map(function(elemento) {
return elemento * 2;
});
console.log("Resultado de map(elemento * 2):", duplicados);

// Método filter: Crea un nuevo array con todos los elementos que pasen la prueba implementada por la
// función proporcionada
let impares = numeros1.filter(function(elemento) {
return elemento % 2 !== 0;
});
console.log("Resultado de filter(elemento % 2 !== 0):", impares);

// Método reduce: Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha)
// para reducirlo a un único valor
let suma = numeros1.reduce(function(acumulador, elemento) {
return acumulador + elemento;
}, 0);
console.log("Resultado de reduce(suma):", suma);