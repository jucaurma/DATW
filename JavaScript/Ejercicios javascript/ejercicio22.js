// Escribe una función que tome un array y un elemento como
// entrada, y devuelva true si el elemento está presente en el array, y false si no lo está

function esta(array, elemento){
  return array.includes(elemento);
}

miarray = ["naranja", "platano", "manzana",7,8];
console.log(esta(miarray, "naranja"))