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