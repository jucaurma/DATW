// const expresionRegular = /[a-z]+/;
// Definir una expresión regular para buscar números de teléfono en formato (XXX) XXX-XXXX
const expresionRegular = /\(\d{3}\) \d{3}-\d{4}/;
// Definir una cadena de texto para buscar el número de teléfono
const texto = "Mi número de teléfono es (123) 456-7890. Llámame si tienes alguna pregunta.";
// Buscar coincidencias utilizando la expresión regular
const coincidencias = texto.match(expresionRegular);
// Imprimir las coincidencias encontradas
console.log("Coincidencias encontradas:", coincidencias);