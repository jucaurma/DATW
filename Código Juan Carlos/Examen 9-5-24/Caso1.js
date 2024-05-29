
// Escribe un programa en javascript que determine si el número indicado en una constante es par o impar, mostrando el resultado en consola.


// Definimos una constante con el número a verificar
const numero = 9;  

// En la función determinamos que el número es par cuando al ser dividido entre 2 el resto es 0. En caso contrario es impar.
function verificarParidad(num) {
    if (num % 2 === 0) {
        console.log(`El número ${num} es par.`);
    } else {
        console.log(`El número ${num} es impar.`);
    }
}

// Llamada a la función para verificar la paridad del número
verificarParidad(numero);
