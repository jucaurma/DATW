// Escribe una función que tome una cadena de texto en
// formato "snake_case" o "kebab-case" y la convierta en "camelCase"

function snakeKebabToCamelCase(cadena) {
  return cadena.replace(/([-_]\w)/g, function(match) {
    return match[1].toUpperCase();
  });
}

// Ejemplo de uso
var snakeCaseString = "mi_variable_de_prueba";
var camelCaseString = snakeKebabToCamelCase(snakeCaseString);
console.log(camelCaseString); // Resultado: "miVariableDePrueba"

var kebabCaseString = "mi-variable-de-prueba";
camelCaseString = snakeKebabToCamelCase(kebabCaseString);
console.log(camelCaseString); // Resultado: "miVariableDePrueba"
