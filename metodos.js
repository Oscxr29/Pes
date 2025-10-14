// importar el modulo
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// // realizamos la pregunta al usuario 
// rl.question('¿ingrese una frase ? ', (frase) => {
//   console.log(`La frase ingresada es: ${frase}`);
//   // length
//   const fraseLength = frase.length;
//   console.log(`La longitud de la frase es: ${fraseLength}`);
//     // toUpperCase
//     const fraseUpper = frase.toUpperCase();
//   console.log(`La frase en mayúsculas es: ${fraseUpper}`);

//   // toLowerCase
//   const fraseLower = frase.toLowerCase();
//   console.log(`La frase en minúsculas es: ${fraseLower}`);

//   // trim
//   const fraseTrim = frase.trim();
//   console.log(`La frase sin espacios es: ${fraseTrim}`);

//   // substring
//   const fraseSubstring = frase.substring(0, 5);
//   console.log(`La subcadena de la frase es: ${fraseSubstring}`);

//   //slice
//   const fraseSlice = frase.slice(-5);
//   console.log(`La porción de la frase es: ${fraseSlice}`);

//   // replace
//   const fraseReplace = frase.replace('hola', 'adios');
//   console.log(`La frase con guiones es: ${fraseReplace}`);

//   // replaceall
//   const fraseReplaceAll = frase.replaceAll('hola', 'adios');
//   console.log(`La frase con guiones es: ${fraseReplaceAll}`);

//   //split divide la frase en palabras separandolas por un espacio
//   const fraseSplit = frase.split(' ');
//   console.log(`La frase dividida es: ${fraseSplit}`);

//   // includes
//   const fraseIncludes = frase.includes('hola');
//   console.log(`La frase incluye "hola": ${fraseIncludes}`);

//   // indexOf
//   const fraseIndexOf = frase.indexOf('hola');
//   console.log(`La posición de "hola" en la frase es: ${fraseIndexOf}`);

//   // startsWith
//   const fraseStartsWith = frase.startsWith('hola');
//   console.log(`La frase comienza con "hola": ${fraseStartsWith}`);

//   // endsWith
//   const fraseEndsWith = frase.endsWith('adios');
//   console.log(`La frase termina con "adios": ${fraseEndsWith}`);

//   rl.close();
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ejercicios practica : Un sistema de gestion de pedidos recibe codigos de seguimiento en el formato: PED-2025-00045, se necesita extraer el ano del pedido y el numero de orden usando el metodo el metodo substring
//Requisitos: 
// 1. Extraer el año del pedido (2025)
// 2. Extraer el número de orden (00045)
// rl.question('Ingrese el código del pedido Ej (PED-2025-00045): ', (codigoSm) => {
//   const aPedido = codigoSm.substring(4,8);
//   const nOrden = codigoSm.substring(9);
  
//   console.log(`Año del pedido: ${aPedido}`);
//   console.log(`Número de orden: ${nOrden}`);
//   rl.close();
// });








