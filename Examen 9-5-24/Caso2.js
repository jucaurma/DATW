// Implemente en JavaScript una función contarVocales que tome una cadena de texto como entrada y cuente el núemro de vocales que contiene.
// Intrucciones: Todas las vocales se cuentan, independientemente de si están en mayúsculas o minúsculas. Luego se recorre la cadena y se cuenta cada vocal ('a','e','i','o','u') y finalmente se devuelve el número total de vocales encontradas.
// En el programa define diferentes cadenas y muestra en consola la cadena y el número de vocales que contiene.
// Véase que no se solicita tratar vocales con tilde, diéresis u otros casos. El enunciado solo contempla las vocales sin signos de puntuación y no se requiere por tanto añadir complejidad innncesaria.


function contarVocales(cadena) {
    // Convertimos la cadena a minúsculas para hacer la cuenta insensible a mayúsculas
    const texto = cadena.toLowerCase();
    
    // Definimos las vocales que vamos a contar
    const vocales = 'aeiou';
    
    // Inicializamos un contador de vocales
    let contador = 0;
    
    // Recorremos cada carácter de la cadena
    for (let i = 0; i < texto.length; i++) {
        // Si el carácter actual está en la cadena de vocales, incrementamos el contador
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    
    // Devolvemos el total de vocales encontradas
    return contador;
}

// Definir diferentes cadenas para probar la función
const cadenas = [
    "Hello World",
    "AEIOU",
    "abcdefghijklmnopqrstuvwxyz",
    "Mi nombre es Juan Carlos",
    "Hola qué tal estás? Soy Merche"
];

// Mostrar en consola la cadena y el número de vocales que contiene
cadenas.forEach(cadena => {
    console.log(`La cadena '${cadena}' contiene ${contarVocales(cadena)} vocales.`);
});
