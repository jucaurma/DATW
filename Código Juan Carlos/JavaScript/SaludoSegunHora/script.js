function saludar() {
  let nombre = document.getElementById('nombre').value;
  let saludo;
  let hora = new Date().getHours();

  if (hora < 12) {
    saludo = 'Buenos días';
  } else if (hora < 20) {
    saludo = 'Buenas tardes';
  } else {
    saludo = 'Buenas noches';
  }

  let saludoCompleto = `${saludo}, ${nombre}!`;
  document.getElementById('saludo').textContent = saludoCompleto;

  let horaActual = new Date().toLocaleTimeString('es-ES');
  document.getElementById('hora').textContent = `La hora actual es: ${horaActual}`;
}
