const miCumpleaños = new Date(1990, 6, 15); // 15 de julio de 1990
lafecha = ("Mi cumpleaños:" , miCumpleaños); // Si cambiamos el + por una , será un objeto
console.log(typeof lafecha);
console.log(typeof miCumpleaños);

const fecha = new Date();
const año = fecha.getFullYear();
const mes = fecha.getMonth(); // Los meses comienzan desde 0 (enero) hasta 11 (diciembre)
const dia = fecha.getDate(); // Devuelve el día del mes. getDay devuelve el día de la semana de 0 a 6 (siendo domingo=0 y sábado=6)
const hora = fecha.getHours();
const minutos = fecha.getMinutes();
const segundos = fecha.getSeconds();
console.log(fecha);
console.log(año);
console.log(mes);
console.log(dia);
console.log(hora);
console.log(minutos);
console.log(`Fecha actual: ${dia}/${mes + 1}/${año}`);
console.log(`Hora actual: ${hora}:${minutos}:${segundos}`);

const fecha1 = new Date();
const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const fechaFormateada = fecha1.toLocaleDateString('es-ES', opciones);
console.log("Fecha formateada:", fechaFormateada);


const fechaActual = new Date();
const fechaFutura = new Date(fechaActual);
fechaFutura.setDate(fechaActual.getDate() + 7); // Sumar 7 días
console.log("Fecha dentro de una semana:", fechaFutura);
const milisegundosEnUnDia = 24 * 60 * 60 * 1000;
const fechaPasada = new Date(fechaActual.getTime() - milisegundosEnUnDia); // Restar 1 día
console.log("Fecha de ayer:", fechaPasada);