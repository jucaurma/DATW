// Buscar el número mayor: Escribe una función que reciba un array de números y
// devuelva el número más grande.

// Esto es lo que yo he puesto pero tiene errores porque el array lo procesa como caracteres
// function elMasGrande(array) {
//     longitud = (array.length)-1;
//     console.log(longitud);
//     let ordenado = array.sort();
//     console.log(ordenado);
//     return array[longitud];
// }

function elMasGrande(array) {
    let mayor = array[0];

    for(let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}

let array1 = [1, 1, 1, 1];
let array2 = [1, 2, 3, 4];
let array3 = [20, 45, 99, 1, 555];
let array4 = [-2, -3, -4, 0];

console.log("El valor más alto del array es: " + elMasGrande(array1));
console.log("El valor más alto del array es: " + elMasGrande(array2));
console.log("El valor más alto del array es: " + elMasGrande(array3));
console.log("El valor más alto del array es: " + elMasGrande(array4));