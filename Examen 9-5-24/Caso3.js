// Crea un clase llamada Producto que tenga las siguientes propiedades: nombre (una cadena que representa el nombre del producto), precio (un número que representa el precio del producto) y cantidad (un número que representa la cantidad disponible del producto en inventario). Los métodos son calcularTotal(cantidad): un método que toma un parámetro "cantidad" y devuelve el total a pagar por esa cantidad de producto. actualizarCantidad(nuevaCantidad): un método que toma un parámetro "nuevaCantidad" y actualiza la cantidad disponible del producto en inventario. Instrucciones: Define la clase Producto con las propiedades y métodos mencionados. Implementa el método calculartotal(cantidad) para que calcule el total a pagar multiplicando la cantidad de productos por el precio unitario. Implementar el método actualizarCantidad(nuevaCantidad) para que actualice la cantidad disponible del producto en inventario. Prueba tu clase creando instancias de productos, llamando a sus métodos y mostrando los resultados.


class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;       // Nombre del producto
        this.precio = precio;       // Precio del producto
        this.cantidad = cantidad;   // Cantidad disponible del producto en inventario
    }

    // Método para calcular el total a pagar por una cantidad dada de producto
    calcularTotal(cantidadCompra) {
        return cantidadCompra * this.precio;
    }

    // Método para actualizar la cantidad disponible del producto en inventario
    actualizarCantidad(nuevaCantidad) {
        this.cantidad = nuevaCantidad;
    }
}


// Crear una instancia de Producto
const producto1 = new Producto("Manzana", 0.50, 100);

// Calcular el total a pagar por 10 manzanas
const total = producto1.calcularTotal(10);
console.log(`El total a pagar por 10 manzanas es $${total}.`);

// Actualizar la cantidad de manzanas en el inventario a 90
producto1.actualizarCantidad(90);
console.log(`La nueva cantidad disponible de manzanas es ${producto1.cantidad}.`);
