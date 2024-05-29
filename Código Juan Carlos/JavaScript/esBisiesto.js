// Función para determinar si un año es bisiesto utilizando un switch
var year = 2028;

    switch (true) {
        case year % 400 === 0:
            console.log("Bisiesto1");
            break;
        case year % 100 === 0:
            console.log("No bisiesto2");
            break;
        case year % 4 === 0:
            console.log("Bisiesto3");
            break;
        default:
            console.log("No bisiesto4");
    };
