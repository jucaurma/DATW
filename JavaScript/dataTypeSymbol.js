// Crear un símbolo con descripción
const miSimbolo = Symbol('Descripción de mi símbolo');
// Crear un objeto con una propiedad de tipo símbolo
const persona = {
nombre: 'Juan',
edad: 30,
[miSimbolo]: 'Valor secreto'
};
// Acceder a la propiedad de tipo símbolo utilizando la notación de corchetes
console.log(persona[miSimbolo]); // Imprimirá: Valor secreto