// importar el modulo
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1.	Solicita un número al usuario y muestra el cuadrado de ese número y su raíz cuadrada.
// rl.question('Introduce un número: ', (numero) => {
//   const n = Number(numero);
//   console.log(`El cuadrado de ${n} es ${n * n}`);
//   console.log(`La raíz cuadrada de ${n} es ${Math.sqrt(n)}`); // calcula el resultado 
//   rl.close();
// });

// 2.Un programa de sorteos necesita generar un número aleatorio entre 0 y 29 para asignar un premio.
// const premio = Math.floor(Math.random() * 30);
// console.log(`El número premiado es: ${premio}`);

// 3 3.	Una tienda de electrodomésticos necesita encontrar el precio más barato y el más caro de su lista de precios: [30, 52, 35, 1, 12, -3]
// const precios = [30, 52, 35, 1, 12, -3];
// const precioMinimo = Math.min(...precios);
// const precioMaximo = Math.max(...precios);
// console.log(`El precio más barato es: ${precioMinimo}`);
// console.log(`El precio más caro es: ${precioMaximo}`);

// 4.	Un edificio tiene 10 habitaciones por piso. El usuario ingreso el número de habitaciones en el que se encuentra (ejemplo: habitación 25). El programa debe calcular y mostrar en qué piso está. Deberá pedir el número de la habitación, dividir el número de habitaciones entre 10 y redondear hacia arriba y mostrar el piso correspondiente.

rl.question('Introduce el número de habitación: ', (habitacion) => {
  const numHabitacion = Number(habitacion);
  const piso = Math.ceil(numHabitacion / 10);
  console.log(`La habitación ${numHabitacion} está en el piso ${piso}`);
  rl.close();
});

//// anexando compilacion de iformacion de clase


// console.log(`Math.round(${numero}) -> ${Math.round(numero)}`);
// console.log(`Math.floor(${numero}) -> ${Math.floor(numero)}`);
// console.log(`Math.ceil(${numero}) -> ${Math.ceil(numero)}`);
// console.log(`Math.sqrt(${numero}) -> ${Math.sqrt(numero)}`);
// console.log(`Math.pow(${numero},3) -> ${Math.pow(numero,3)}`);
// console.log(`Math.abs(${numero}) -> ${Math.abs(numero)}`);

// console.log(`Math.max(${numero},10,-5) -> ${Math.max(numero,10,-5)}`);
// console.log(`Math.min(${numero},-5,30) -> ${Math.min(numero,-5,30)}`);

// console.log(`Math.random() -> ${Math.random()}`);
// let randomNum = Math.floor(Math.random() * numero) + 1;
// console.log(`Número aleatorio entre 1 y ${numero} -> ${randomNum}`);

// console.log(`toFixed(2): ${numero}`);
// rl.close();

// Math.round(numero): Redondea el número al entero más cercano.
// Math.floor(numero): Redondea el número hacia abajo al entero más cercano.
// Math.ceil(numero): Redondea el número hacia arriba al entero más cercano.
// Math.sqrt(numero): Calcula la raíz cuadrada del número.
// Math.pow(numero, 3): Eleva el número al cubo (potencia de 3).
// Math.abs(numero): Devuelve el valor absoluto del número (sin signo).
// Math.max(numero, 10, -5): Devuelve el valor más grande entre el número, 10 y -5.
// Math.min(numero, -5, 30): Devuelve el valor más pequeño entre el número, -5 y 30.
// Math.random(): Genera un número decimal aleatorio entre 0 (incluido) y 1 (excluido).
// Math.floor(Math.random() * numero) + 1: Genera un número entero aleatorio entre 1 y el valor de numero.
// toFixed(2): Muestra el número con dos decimales.
// rl.close(): Cierra la interfaz de lectura de datos por consola