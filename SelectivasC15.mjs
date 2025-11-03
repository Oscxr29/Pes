import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar al usuario y verificar si esta es correcta o no
// const contra = `penadito@12`;
// let mensaje;

// rl.question(`Ingrese su password: `, (pass) =>{
//     if (contra === pass) {
//         mensaje= `password correcto`;
        
//     } else{
//         mensaje= `Password incorrecto`;
//     }
//     console.log(`${mensaje}`);
//     rl.close();
// })

// Solicitar al usuario un número y determinar si este es un numero positivo o negativo

// const Numero = (num) => {
//     if (num > 0) {
//         return `El número ${num} es positivo`; // 
//     } else if (num < 0) {
//         return `El número ${num} es negativo`;
//     } else {
//         return `El número es cero`;
//     }
// }

// rl.question(`ingrese un numero : `, (num) => {
//     const resultado = Numero(Number(num));
//     console.log(resultado);
//     rl.close();
// });


//  Calcular el descuento según el monto de compra: solicite el monto de la compra y aplique un descuento:
// -          Mayor o igual a 100 -> 10%

// -          Entre 50 y 99 -> 5%

// -          Menor a 50 -> sin descuento


// const CalcuDescuento = (monto) => {
//     if (monto >= 100) {
//         const descuento = monto * 0.10;
//         const total = monto - descuento;
//         return `El monto de la compra es de $${monto}, descuento del 10% ($${descuento}). Total a pagar: $${total}.`;
//     } else if (monto >= 50 && monto < 100) {
//         const descuento = monto * 0.05;
//         const total = monto - descuento;
//         return `El monto de la compra es de $${monto}, con un descuento del 5% ($${descuento}). Total a pagar: $${total}.`;
//     } else {
//         return ` el monto de la compra es de $${monto}, no aplica descuento. total a canecelar: $${monto}.`;
//     }
// }

// rl.question("Ingrese el monto de la compra: \n", (entrada) => {
//   console.log(CalcuDescuento(entrada));
//   rl.close();
// });

// Solicitar un nombre y mostrar si está en el arreglo o no esta

// const nombres = ['Henry', 'Gerardo', 'chepe', 'Pepe', 'Chasis'];
//Version de la Ingeniera

// function existe(nombre) {
//     if (nombres.includes(nombre)) {
//         return `El nombre ${nombre} está en el arreglo`;
//     }
//     else { 
//         return `El nombre ${nombre} no está en el arreglo`;
//     }
    
// }

// rl.question("INgrese un nombre: " , (nombre) => {
//     let resultado = existe(nombre);
//     console.log(resultado);
//     rl.close();
// }) 




// Version de flecha (hecha por mi)
// rl.question("Ingrese un nombre: " , (nombre) => {
//     if (nombres.includes(nombre)) {
//         console.log(`El nombre ${nombre} está en el arreglo`);
//     }
//     else {
//         console.log(`El Nombre ${nombre} no esta en el arreglo`);
//     }
// });


// Solicita la edad al usuario y muestra en qué categoría está
// -          Niñez 0-11

// -          Adolescencia: 12-17

// -          Adultez: 18-59

// -          Vejez: 60+

const edades = (edad) => {
    if (edad >= 0 && edad <= 11) {
        return `La edad de ${edad} corresponde a la categoría de Niñez.`;
    }
    else if (edad >= 12 && edad <= 17){
        return `la edad de ${edad} corresponde a la categoría de Adolescencia.`;
    }
    else if (edad >= 18 && edad <= 59){
        return `la edad de ${edad} corresponde a la categoría de Adultez.`;
    }
    else if (edad >= 60)
        return `la edad de ${edad} corresponde a la categoria vejez`;
}

rl.question("Ingrese su edad: \n", (num) => {
    const entrada = Number(num);
    const resultado = edades(entrada);
    console.log(resultado);
    rl.close();
});


