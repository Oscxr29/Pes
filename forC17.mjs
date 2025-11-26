import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// ejercicios propuestos C17

// ejercicio 1
// Solicita un número al usuario y muestra su tabla de multiplicar del 1 al 10
// rl.question('Ingrese un número para ver su tabla de multiplicar: ', (num) => {
//     const numero = parseInt(num);
//     console.log(`Tabla de multiplicar del ${numero}:`);     
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${numero} x ${i} = ${numero * i}`);
//         rl.close();
//     }  
// });
// aca el usuario ingresa un numero y se muestra su tabla de multiplicar del 1 al 10 con un numero ingresado preferido.

// ejercicio 2
// Mostrar solo números impares entre 1 y 50
// console.log('Números impares entre 1 y 50:');
// for (let i = 1; i <= 50; i++) { // recorre del 1 al 50
//     if (i % 2 !== 0) { // si el número es impar 
//         console.log(i); 
//         rl.close();
//     }
// }

// aca se mostro números impares entre 1 y 50 y solo se imprimieron los impares.

//ejercicio 3
// Mostrar una secuencia de números del 10 al 100 aumentando de 10 en 10
// console.log('Secuencia de números del 10 al 100 aumentando de 10 en 10:');
// for (let i = 10; i <= 100; i += 10) { // recorre del 10 al 100 aumentando de 10 en 10
//     console.log(i);
//     rl.close();
// }

// aca se mostro una secuencia de números del 10 al 100 aumentando de 10 en 10.

// ejercicio 4
// pide al usuario que ingrese 3 nombres separados por espacio. Usa for para mostrarlos uno por uno.
rl.question("Ingrese el nombre de 3 personas separados por un espacio : ", (names) => {
    const nombres = names.split(' '); // dividimos la entrada en un array de nombres
    console.log('Nombres ingresados:');
    for (let i = 0; i < nombres.length; i++) { // recorremos el array de nombres
        console.log(nombres[i]); // mostramos cada nombre
        rl.close();
    }
});  
// aca se pidio al usuario que ingrese 3 nombres separados por espacio y se mostraron uno por uno.

    




