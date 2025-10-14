import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// . En un formulario web pides al usuario su nombre completo y quieres
// asegurarte de que no haya espacios al inicio o final, y además quieres  mostrar cuántos caracteres tiene el nombre sin contar los espacios.

// rl.question ('Ingrese su nombre completo:', (nombreCom) => {
//     const nombreTrim = nombreCom.trim();
//     const nombreSinEs = nombreCom.replaceAll(" ", "");
//     const NumCar = nombreSinEs.length;

//     console.log(`Nombre Limpio: ${nombreTrim}`);
//     console.log(`el nombre sin espacios es: ${nombreSinEs}`);
//     console.log(`Cantidad de caracteres sin espacios: ${NumCar}`);
//     rl.close();
// });


// . Un sistema de registro de usuarios necesita guardar todos los correos
// electrónicos en minúsculas para evitar duplicados causados por
// diferencias en mayúsculas y minúsculas. Además, se requiere verificar si
// el correo pertenece al dominio @gmail.com antes de aceptarlo. 

// rl.question('Ingrese su correo electronico:', (correo) => {
//     const correolower = correo.toLowerCase();
//     const verificar = correolower.endsWith('@gmail.com');

//     console.log(`Correo en minusculas: ${correolower}`);
//     console.log(`¿Correo valido?: ${verificar}`);

//    rl.close();
// });


// de un código generado automáticamente solo se requiere mostrar losúltimos 4 caracteres

// rl.question('ingrese un codigo con solo 6 caracteres:', (codigo) =>{
//     const UltimosCuatro = codigo.slice(-4);
//     console.log(`Los últimos 4 caracteres son: ${UltimosCuatro}`);
//     rl.close();
// });

// Un programador quiere saber en qué parte de su mensaje aparece la
// palabra error.

// rl.question('Ingrese un mensaje:', (mensaje) => {
//     const posicionE = mensaje.indexOf('error');
//     console.log(`La palabra "error" aparece en la posición: ${posicionE}`);

//    rl.close();
// });

