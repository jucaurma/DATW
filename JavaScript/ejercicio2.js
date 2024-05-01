// Conteo de vocales: Escribe una función que tome una cadena de texto como
// entrada y devuelva el número de vocales que contiene.

// function contarVocales(frase) {
//     let cadenaMin = frase.toLowerCase();
//     let contador = 0;
//     for(let letra of cadenaMin) {
        
//         switch(letra) {
//             case 'a':
//             case 'á':
//             case 'e':
//             case 'é':
//             case 'i':
//             case 'í':
//             case 'o':
//             case 'ó':
//             case 'u':
//             case 'ú':
//                 contador++;
//                 break;
//             default:
//                 break;
//         }
//     }
//     return contador;
// }

function contarVocales(frase) {
     const vocales = /[aeiouáéíóú]/gi; // Regex para coincidir con vocales 
     return frase.match(vocales)?.length || 0; // Utilizo el método `match` para encontrar todas las vocales y devuelvo su cantidad 
    }
let miFrase1 = "Hola";
let miFrase2 = "Hola qué tal estás me llamo Merche";
let miFrase3 = "hlqtlstsmllmMrc";
let miFrase4 = "ÁÉÍÓÚAEIOUaeiouáéíóú";
console.log("La frase '"+ miFrase1 + "' contiene " + contarVocales(miFrase1) + " vocales");
console.log("La frase '"+ miFrase2 + "' contiene " + contarVocales(miFrase2) + " vocales");
console.log("La frase '"+ miFrase3 + "' contiene " + contarVocales(miFrase3) + " vocales");
console.log("La frase '"+ miFrase4 + "' contiene " + contarVocales(miFrase4) + " vocales");




