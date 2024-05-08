// Recorrer el array para imprimir nuestro recetario de cócteles en consola mostrando la información de todos los cóctecles (Nombre, ingredientes y preparación)


var cocteles = [
    ["Mojito", ["Ron blanco", "Hojas de menta", "Lima", "Azúcar", "Agua con gas"], "Mezcla en un vaso el azúcar y el jugo de lima. Añade las hojas de menta y machácalas ligeramente. Agrega el ron y el agua con gas. Remueve bien y sirve con hielo. Decora con una ramita de menta y una rodaja de lima."],
    ["Piña Colada", ["Ron blanco", "Crema de coco", "Zumo de piña", "Hielo"], "Mezcla en una licuadora el ron, la crema de coco, el zumo de piña y el hielo. Bate hasta obtener una mezcla suave y homogénea. Sirve en un vaso alto y decora con una rodaja de piña y una cereza en un palillo."],
    ["Daiquiri de Fresa", ["Ron blanco", "Zumo de limón", "Jarabe de fresa", "Fresas frescas", "Hielo"], "Tritura las fresas en una licuadora. Añade el ron, el zumo de limón, el jarabe de fresa y el hielo. Bate hasta obtener una mezcla suave. Sirve en una copa de cóctel y decora con una fresa en el borde del vaso."],
    ["Margarita", ["Tequila", "Triple sec", "Zumo de lima", "Sal", "Hielo"], "Humedece el borde de una copa de cóctel y pásala por sal para escarcharla. En una coctelera, mezcla el tequila, el triple sec, el zumo de lima y el hielo. Agita bien y cuela la mezcla en la copa preparada. Decora con una rodaja de lima en el borde."]
  ];
  
  // Función para recorrer el array de cocteles y mostrar la información en consola
  function imprimirRecetario(cocteles) {
    cocteles.forEach(coctel => {
      // Extraer nombre, ingredientes e instrucciones de cada coctel
      const nombre = coctel[0];
      const ingredientes = coctel[1];
      const instrucciones = coctel[2];
  
      // Imprimir el nombre del coctel
      console.log(`Nombre: ${nombre}.`);
  
      // Imprimir los ingredientes, uniendo el array con guiones y saltos de línea para formateo
      console.log(`Ingredientes: ${ingredientes.join(" - ")}.`);
  
      // Imprimir las instrucciones
      console.log(`Instrucciones: ${instrucciones}`);
      
      // Agregar una línea separadora para mejorar la legibilidad entre recetas
      console.log('----------------------------------------------------');
    });
  }
  
  // Llamada a la función para imprimir el recetario
  imprimirRecetario(cocteles);
  