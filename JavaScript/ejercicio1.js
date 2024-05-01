// Suma de elementos: Escribe una función que reciba un array de números y
// devuelva la suma de todos los elementos.


function sumaArray(array) {
    let suma = 0;
    for(let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

let miArray = [1, 2, 3, 4, 5];
// let resultado = sumaArray(miArray);
console.log("El sumatorio es igual a: ", sumaArray(miArray));