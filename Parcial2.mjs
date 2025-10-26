
import readline from 'readline' 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
 

// 1. Escriba un programa que solicite al usuario una cadena de texto (palabra o frase)
// utilizando la librería readline, el programa debe de contener una función que permita
// recibir la cadena ingresada y devuelva una cadena con todas sus letras ordenadas
// alfabéticamente.

// const ordenarLetras = (palabra) => {
//     return palabra.toLowerCase().split('').sort().join('');
// };

// rl.question('Escribe una palabra: ', (respuesta) => {
//     let resultado = ordenarLetras(respuesta);
//     console.log('Letras ordenadas:', resultado);
//     rl.close();
// });

// // const ordenarAlfabeticamente = s => s.split('').sort().join('');
// rl.question("Ingrese una palabra o una frase: \n", (cadena) => {
//     const resultado = ordenarAlfabeticamente(cadena);
//     console.log(`La cadena ordenada alfabéticamente es: ${resultado}`);
//     rl.close();
// });

// 2.  Escriba un programa que solicite al usuario una cadena de texto, este programa debe
// de contener una función que reciba la cadena como parámetro y devuelva una nueva
// cadena donde la primera letra de cada palabra esté en mayúsculas


// const ponerMayusculas = (texto) => {
//     return texto
//         .split(' ')
//         .filter(palabra => palabra.length > 0) // Eliminar palabras vacías
//         .map(palabra => palabra[0].toUpperCase() + palabra.slice(1).toLowerCase())
//         .join(' ');
// };

// rl.question('Frase: ', (respuesta) => {
//     console.log('Resultado:', ponerMayusculas(respuesta));
//     rl.close();
// });


// 3. Escriba un programa que solicite al usuario una palabra o cadena de texto, crea una
// función que reciba como parámetro el texto y devuelva la cantidad de caracteres que
// contiene. (2 formas de hacerlo)


// rl.question("Ingrese una palabra o una frase: \n", (cadena) => {
//     const caracteres = cadena.length;
//     console.log(`la Cantidad de caracteres es: ${caracteres}`);
//     rl.close();
// });


// let caracter = (palabra) => {
//     let cadena = palabra.length
//     return cadena
// }

// rl.question("Ingrese una palabra: ", palabra =>{
//     console.log(caracter(palabra))
//     rl.close()
// })

// 4. Escriba un programa que solicite al usuario el precio de tres productos, y cree una
// función que permita calcular la suma total del precio de los tres productos, mostrar
// en consola la suma.


// rl.question("ingrese el primer precio del producto: ", (p1) => {
//     rl.question("Ingrese el segundo precio del producto: ", (p2) => {
//         rl.question("Ingrese el tercer precio del producto: ", (p3) => {
//             let total = Number(p1) + Number(p2) + Number(p3)
//             console.log('Suma total es de: '+ total);
//             rl.close();
//         })
//     })
// })

// 5. Solicite al usuario una cadena y utilice una función que permita devolver el texto en
// mayúsculas. 


// rl.question("Ingrese una frase que quiera convertir a mayusculas: ", (cadena) => {
//     const Mayuscula = cadena.toUpperCase();
//     console.log(Mayuscula);
//     rl.close();
// });

//6.  Solicite al usuario una temperatura en grados celsius y cree una función que permita
// convertir esa temperatura Celsius a Fahrenheit. 

// function CelAFah (celsius) {
//     let farenheit = (celsius * 9/5) + 32;
//     return farenheit
// }

// rl.question("Ingrese su temperatura en grados C: ", (temp) => {
//     let celsius= Number(temp);

//     let farenheit = CelAFah(celsius);

//     console.log(`${celsius}C = ${farenheit}`);
//     rl.close();
// });

// 7. Cree una función que permita calcular el descuento de un producto. Solicite al usuario
// el precio de un producto y el porcentaje de descuento, devuelva el precio final. 

// function precios(p1, p2, p3) {
//     let total = Number(p1) + Number(p2) + Number(p3);
//     if (total > 50){
//         total *= 0.90;
//     }
//     return total;
// }

// rl.question("Ingrese el primer precio del producto: ", (p1) => {
//     rl.question("Ingrese el segundo precio del producto: " , (p2) => {
//         rl.question("Ingrese el tercer precio del  producto: ", (p3) => {
//             const total = precios(p1, p2, p3);
//             console.log(`El total a pagar es: $${total.toFixed(2)}`);
//             rl.close();
//         })
//     })
// })
// 8. Cree un programa que solicite al usuario su salario base, el número de horas extras
// trabajadas y el valor de una hora de trabajo normal. Luego, calcule el salario total,
// considerando que cada hora extra se paga 1.5 del valor de la hora normal. Mostrar el
// resultado en la consola. 

rl.question('Ingrese su Salario base: $', (base) => {
    rl.question(' Ingrese sus Horas extras: ', (horas) => {
        rl.question('Ingrese el Valor hora: $', (valor) => {
            let total = Number(base) + (Number(horas) * (Number(valor) * 1.5));
            console.log('Total: $' + total);
            rl.close();
        });
    });
});






