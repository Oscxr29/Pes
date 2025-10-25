
import readline from 'readline' 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
 




// Escriba un programa que solicite al usuario una cadena de texto (palabra o frase)
// utilizando la librería readline, el programa debe de contener una función que permita
// recibir la cadena ingresada y devuelva una cadena con todas sus letras ordenadas
// alfabéticamente.


const ordenarAlfabeticamente = s => s.split('').sort().join('');
rl.question("Ingrese una palabra o una frase: \n", (cadena) => {
    const resultado = ordenarAlfabeticamente(cadena);
    console.log(`La cadena ordenada alfabéticamente es: ${resultado}`);
    rl.close();
});



// const ordenarAlfabeticamente = (cadena) => {
//     return cadena.split('').sort((a, b) => a.localeCompare(b)).join('');
// }
//  rl.question("Ingrese una palabra o una frase: \n", (cadena) => {
//     const resultado = ordenarAlfabeticamente(cadena);
//     console.log(`La cadena ordenada alfabéticamente es: ${resultado}`);
//     rl.close();
// });

// Escriba un programa que solicite al usuario una cadena de texto, este programa debe
// de contener una función que reciba la cadena como parámetro y devuelva una nueva
// cadena donde la primera letra de cada palabra esté en mayúsculas


// const PrimerMayuscula = s => s.split(' ').map(w => w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : '').join(' ');
// rl.question("Ingrese una palabra o una frase: \n", (cadena) => {
//     const resultado = PrimerMayuscula(cadena)
//     console.log(`La cadena con la primera letra en mayuscula es: ${resultado}`);
//     rl.close();
// });4


// Escriba un programa que solicite al usuario una palabra o cadena de texto, crea una
// función que reciba como parámetro el texto y devuelva la cantidad de caracteres que
// contiene. 


// rl.question("Ingrese una palabra o una frase: \n", (cadena) => {
//     const caracteres = cadena.length;
//     console.log(`la Cantidad de caracteres es: ${caracteres}`);
//     rl.close();
// });


// Escriba un programa que solicite al usuario el precio de tres productos, y cree una
// función que permita calcular la suma total del precio de los tres productos, mostrar
// en consola la suma.


// const precios = [];

// rl.question("Ingrese el primer precio del producto:", (precio1) => {
//     precios[0] = parseFloat(precio1);
//     rl.question("Ingrese el segundo precio del producto:", (precio2) => {
//     precios[1] = parseFloat(precio2);
//     rl.question("Ingrese el tercer precio del producto:", (precio3) => {
//     precios[2] = parseFloat(precio3);
        
//     let suma = precios[0] + precios[1] + precios[2]
//         console.log("La suma total de los 3 productos es:", suma);
//          rl.close();
//    });
//  });  
// });

// Solicite al usuario una cadena y utilice una función que permita devolver el texto en
// mayúsculas. 


// rl.question("Ingrese una frase que quiera convertir a mayusculas: ", (cadena) => {
//     const Mayuscula = cadena.toUpperCase();
//     console.log(Mayuscula);
//     rl.close();
// });

// Solicite al usuario una temperatura en grados celsius y cree una función que permita
// convertir esa temperatura Celsius a Fahrenheit. 

// const celsiusToFahrenheit = c => (c * 9 / 5) + 32;

// rl.question("Ingrese la temperatura en grados Celsius: \n", (entrada) => {
//     const c = parseFloat(entrada);
//     if (Number.isNaN(c)) {
//         console.log("Entrada no válida. Introduce un número.");
//     } else {
//         const f = celsiusToFahrenheit(c);
//         console.log(`${c}°C son ${f.toFixed(2)}°F`);
//     }
//     rl.close();
// });


// Cree una función que permita calcular el descuento de un producto. Solicite al usuario
// el precio de un producto y el porcentaje de descuento, devuelva el precio final. 

// const precios = [];

// rl.question("Ingrese el primer precio del producto: ", (precio1) => {
//     precios[0] = parseFloat(precio1);
//     rl.question("Ingrese el segundo precio del producto: ", (precio2) => {
//         precios[1] = parseFloat(precio2);
//         rl.question("Ingrese el tercer precio del producto: ", (precio3) => {
//             precios[2] = parseFloat(precio3);

//             let total = precios[0] + precios[1] + precios[2];
//             if (total > 50) {
//                 total *= 0.90; // Aplica 10% de descuento ya descontado 
//             }
//             console.log(`El total a pagar es: $${total.toFixed(2)}`);
//             rl.close();
//         });
//     });
// });

// Cree un programa que solicite al usuario su salario base, el número de horas extras
// trabajadas y el valor de una hora de trabajo normal. Luego, calcule el salario total,
// considerando que cada hora extra se paga 1.5 del valor de la hora normal. Mostrar el
// resultado en la consola. 

const calcularSalarioTotal = (base, horasExtra, valorHora) => base + horasExtra * (valorHora * 1.5);

rl.question("Salario base: \n", b =>
  rl.question("Horas extra: \n", h =>
    rl.question("Valor hora normal: \n", v => {
      const base = parseFloat(b), horas = parseFloat(h), valor = parseFloat(v);
      if ([base, horas, valor].some(Number.isNaN)) {
        console.log("Entrada no válida. Introduce números.");
      } else {
        console.log(`Salario total: $${calcularSalarioTotal(base, horas, valor).toFixed(2)}`);
      }
      rl.close();
    })
  )
);





