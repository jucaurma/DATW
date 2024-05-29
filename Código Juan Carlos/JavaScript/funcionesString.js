// 1 **`length`**: Devuelve la longitud de una cadena de texto.
let texto1 = "Hola mundo";
console.log(texto1.length); // Imprime 10


// 2 **`charAt(index)`**: Devuelve el carácter en la posición especificada de una cadena de texto.
let texto2 = "Hola mundo";
console.log(texto2.charAt(0)); // Imprime "H"


// 3 **`substring(startIndex, endIndex)`**: Devuelve una subcadena de la cadena de texto, comenzando
// desde `startIndex` hasta `endIndex` (opcional).
let texto3 = "Hola mundo";
console.log(texto3.substring(0, 4)); // Imprime "Hola"
console.log(texto3.substring(5)); // Imprime desde el 5 hasta el final


// 4 **`indexOf(substring)`**: Devuelve la posición de la primera ocurrencia de `substring` dentro de la
// cadena de texto, o -1 si no se encuentra.
let texto4 = "Hola mundo";
console.log(texto4.indexOf("mundo")); // Imprime 5
console.log(texto4.indexOf("la mu")); // Imprime 2


// 5. **`replace(searchValue, replaceValue)`**: Reemplaza una subcadena de texto (`searchValue`) con otra
// (`replaceValue`).
let texto5 = "Hola mundo";
console.log(texto5.replace("mundo", "amigo")); // Imprime "Hola amigo" pero no modifica el string original
console.log(texto5);
console.log(texto5.replace("Hola", "Maravilloso"));


// 6. **`toUpperCase()` y `toLowerCase()`**: Convierten una cadena de texto a mayúsculas o minúsculas.
let texto6 = "Hola mundo";
console.log(texto6.toUpperCase()); // Imprime "HOLA MUNDO"
35
console.log(texto6.toLowerCase()); // Imprime "hola mundo"


// 7. **`trim()`**: Elimina los espacios en blanco al principio y al final de una cadena de texto.
let texto7 = " Hola mundo ";
console.log(texto7);
console.log(texto7.trim()); // Imprime "Hola mundo"


// 8. **`split(separator)`**: Divide una cadena de texto en un array de subcadenas basadas en un separador
// especificado.
let texto8 = "Hola,mundo,cómo,estás";
let array1 = texto8.split(",");
console.log(array1); // Imprime ["Hola", "mundo", "cómo", "estás"]
let texto8a = "Hola mundo. Cómo estás?";
let array2 = texto8a.split(" ");
console.log(array2);


// 9. **`concat(string1, string2, ...)`**: Combina dos o más cadenas de texto y devuelve una nueva cadena.
let str1 = "Hola";
let str2 = "mundo";
console.log(str1.concat(" ", str2)); // Imprime "Hola mundo"


// 10. **`startsWith(searchString)` y `endsWith(searchString)`**: Comprueban si una cadena de texto
// comienza o termina con una subcadena especificada, respectivamente.
let texto10 = "Hola mundo";
console.log(texto10.startsWith("Hola")); // true
console.log(texto10.endsWith("mundo")); // true


// 11. **`slice(startIndex, endIndex)`**: Extrae una sección de una cadena de texto y devuelve una nueva
// cadena, desde `startIndex` hasta `endIndex` (opcional).
let texto = "Hola mundo";
console.log(texto.slice(0, 4)); // Imprime "Hola"
const str11 = 'JavaScript es genial';
const subStr1 = str11.slice(0, 10); // Extrae desde el índice 0 hasta el 9
console.log(subStr1); // Salida: "JavaScript"
const subStr2 = str11.slice(11); // Extrae desde el índice 11 hasta el final
console.log(subStr2); // Salida: "es genial"
const subStr3 = str11.slice(-6); // Extrae los últimos 6 caracteres
console.log(subStr3); // Salida: "genial"
const subStr4 = str11.slice(4, -3); // Extrae desde el índice 4 hasta el 3 desde el final
console.log(subStr4); // Salida: "Script es ge"


// 12. **`repeat(count)`**: Devuelve una nueva cadena que contiene la cadena original repetida `count` veces.
let str12 = "Hola ";
console.log(str12.repeat(3)); // Imprime "Hola Hola Hola "