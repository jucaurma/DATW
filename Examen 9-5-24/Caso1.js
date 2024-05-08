
// escribe un programa en javascript que determine si el número indicado en una constante es par o impar, mostrando el resultado en consola


// Definir una constante con el número a verificar
const numero = 9;  

// Función para determinar si el número es par o impar
function verificarParidad(num) {
    if (num % 2 === 0) {
        console.log(`El número ${num} es par.`);
    } else {
        console.log(`El número ${num} es impar.`);
    }
}

// Llamada a la función para verificar la paridad del número
verificarParidad(numero);
