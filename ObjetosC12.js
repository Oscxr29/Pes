

// const nombre = "Oscar";
// const edad = 18;
// const altura = 1.50;

// const persona = {
//     nombre: "Oscar",
//     edad: 18,
//     altura: 1.50
// };
//imprimir el objeto
// acceder a las propiedades 
// // acceso por punto 
// console.log(persona);


// console.log(persona.nombre);


// // Acceso a corchetes
// console.log(persona["edad"]);

//agregar mas propiedades al objeto
// persona.pais = "El salvador";
// persona.Profesion = "Desarrollador";

// console.log(persona);

// //elimando propiedades al objeto 
// delete persona.altura;
// console.log(persona);

//modificamos el valor de una propiedad o llave
// persona.nombre="kevin";
// persona.edad=20;

// console.log(persona);

//asignado el valor de la propiedad del  objeto a una nuea variable
// const nom= persona.nombre
// console.log(nombre);

//Destructuring 
// const {nombre} = persona;
// console.log(nombre);

// const {pepito} = persona;
// console.log(pepito);

// const {edad} = persona;
// console.log(edad);

// const {nombre,edad} = persona;
// console.log(nombre);
// console.log(edad);

////  ejercicios ///// 

//Declara un objeto animal, con las propiedades raza, tamaño y color muestra el objeto en consola y luego imprime cada propiedad por separado. 
// const gato = {
//     raza: "aguacatero",
//     tamaño: "Mediano",
//     color: "Gris"
// };

// console.log(gato);
// console.log(gato.raza);
// console.log(gato.tamaño);
// console.log(gato.color);

// Al objeto animal agrega una nueva propiedad (la que desees) imprímela en consola y luego elimina la propiedad raza.

// gato.nombre = "Horchata";
// console.log(gato.nombre);
// delete gato.raza;

//Crea un objeto usuario con las propiedades usuario, email y rol, usa destructuring para crear variables con esas propiedades y mostrarlas en consola. 
const usuario = {
    usuario1: "Henry",
    email: "HenryHotRoblox@hotmail.com",
    rol: "Admin"
};

const { usuario1, email, rol } = usuario;
console.log(usuario1);
console.log(email);
console.log(rol);