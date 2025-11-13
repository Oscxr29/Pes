import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// 1-	Crea un programa con un menú de opciones que le permita al usuario elegir una de las 5 opciones:
// •	Sumar
// •	Restar
// •	Multiplicar
// •	Dividir
// •	Salir
// Cada operación debe realizarse dentro de una función distinta (sumar, restar, etc.) y usarse un switch para elegir la operación.

// function sumar(a, b) {
//   return a + b;
// }

// function restar(a, b) {
//   return a - b;
// }

// function multiplicar(a, b) {
//   return a * b;
// }

// function dividir(a, b) {
//   if (b === 0) {
//     return "No se puede dividir entre cero";
//   }
//   return a / b;
// }

// function mostrarMenu() {
//   console.log("\n Menú de opciones:");
//   console.log("1. Sumar");
//   console.log("2. Restar");
//   console.log("3. Multiplicar");
//   console.log("4. Dividir");
//   console.log("5. Salir");

//    rl.question("Elige una opción (1-5): ", opcion => {
//     switch (opcion) {
//       case '1':
//         pedirNumeros('sumar');
//         break;
//       case '2':
//         pedirNumeros('restar');
//         break;
//       case '3':
//         pedirNumeros('multiplicar');
//         break;
//       case '4':
//         pedirNumeros('dividir');
//         break;
//       case '5':
//         console.log("¡Hasta luego!");
//         rl.close();
//         break;
//       default:
//         console.log("Opción inválida. Intenta de nuevo.");
//         mostrarMenu();
//     }
//   });
// };

// function pedirNumeros(operacion) {
//   rl.question("Ingrese el primer número: ", num1 => {
//     rl.question("Ingrese el segundo número: ", num2 => {
//       const a = parseFloat(num1);
//       const b = parseFloat(num2);
//       let resultado;

//       switch (operacion) {
//         case 'sumar':
//           resultado = sumar(a, b);
//           break;
//         case 'restar':
//           resultado = restar(a, b);
//           break;
//         case 'multiplicar':
//           resultado = multiplicar(a, b);
//           break;
//         case 'dividir':
//           resultado = dividir(a, b);
//           break;
//       }
//       console.log(`Resultado: ${resultado}`);
//       mostrarMenu();
//     });
//   });
// }

// mostrarMenu();

// 2-	Crea una función que muestre un saludo según la hora del día en que se encuentre.
// •	6 a 11:00am : Buenos días
// •	12 a 17 pm : Buenas tardes
// •	18 a 23 pm: Buenas noches
// •	0 a 5: a dormir


// const saludarPorHora = () => {
//     const horaActual = new Date().getHours(); // Obtenemos  la hora actual del dia
//     switch (true) { // Usamos true para evaluar condiciones en cada case
//         case (horaActual >= 6 && horaActual <= 11):
//             return "Buenos días";
//         case (horaActual >= 12 && horaActual <= 17):
//             return "Buenas tardes";
//         case (horaActual >= 18 && horaActual <= 23):
//             return "Buenas noches";
//         default: // De 0 a 5
//             return "A dormir";
//     }
// };
// console.log(saludarPorHora());
// esto va funcionar segun el horario en que se ejecute el script en la terminal 

// 3-	Un cine desea automatizar el cálculo del precio de entrada según la edad del cliente.
// Las tarifas son las siguientes:
// •	Niños menores de 12 años: pagan $3.00
// •	Adultos de 12 a 59 años: pagan $5.00
// •	Adultos mayores de 60 años o más: pagan $2.50


// function calcularPrecioEntrada(edad) {
//     switch (true) { // lo usamos true para evaluar las condiciones en cada case 
//         case (edad < 12):
//             return "El precio de la entrada es de $3.00";
//         case (edad >= 12 && edad <= 59):
//             return "El precio de la entrada es de $5.00";
//         case (edad >= 60):
//             return "El precio de la entrada es de $2.50";
//         default:
//             return "Edad inválida"; 
//     }
// };

// rl.question("Ingrese su edad: ", (entrada) => {
//     const edad = parseInt(entrada);
//     console.log(calcularPrecioEntrada(edad));
//     rl.close();
// });

// 4-	Crea un programa que calcule el costo del estacionamiento según las horas que el vehículo estuvo en el parqueo.
// Las tarifas son:
// 1 hora → $2
// De 2 a 4 horas → $5
// Más de 4 horas → $10
// El programa debe pedir al usuario cuántas horas estuvo estacionado y mostrar el total a pagar.
// Si el usuario ingresa un número negativo o no válido, se debe mostrar un mensaje de error.

function calcularCostoEstacionamiento(horas) {
    switch (true) {
        case (horas < 0):
            return "Error: número de horas inválido";
        case (horas === 1):
            return "El costo del estacionamiento es de $2";
            case (horas >= 2 && horas <= 4):
                return "El costo del estacionamiento es de $5";
                case (horas > 4):
                    return "El costo del estacionamiento es de $10";
                    default: // Esto cubre el caso cuando horas es 0
                        return "Error: número de horas inválido";
    }
};

rl.question("Ingrese el numeros de horas que usted estuvo estacionado: ", (entrada) => {
    const horas = parseFloat(entrada);
    console.log(calcularCostoEstacionamiento(horas));
    rl.close();
});









