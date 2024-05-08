// script.js
document.getElementById('btnAnadirFruta').addEventListener('click', function() {
    var fruta = prompt("Introduce la fruta que deseas añadir:");
    if (fruta) {
        var frutasDisponibles = ['fresa', 'plátano', 'manzana', 'naranja', 'kiwi', 'mango', 'sandía', 'melón'];
        if (frutasDisponibles.includes(fruta.toLowerCase())) {
            var lista = document.getElementById('listaDeFrutas');
            var nuevoElemento = document.createElement('li');
            nuevoElemento.textContent = fruta;
            lista.appendChild(nuevoElemento);
        } else {
            alert("Lo siento, esa fruta no está disponible.");
        }
    }
});
