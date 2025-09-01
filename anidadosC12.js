import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// const estudiante = {
//     nombre : "juan",
//     apelido: "perez",
//     edad: 30,
//     direccion: {
//         pais : "El salvador",
//         numCasa: 27
//     }
// }
// // acesso al objeto 
// console.log(estudiante);
// console.log(estudiante.direccion);
// console.log(estudiante.['direccion']);

// estudiante.colorOjos = "marron";
// console.log(estudiante);

// agregando propiedad al objeto anidado
// estudiante.direccion.postal = "503";
// console.log(estudiante);

// Modificar una propiedad
// estudiante.direccion.numCasa = 45;
// console.log(estudiante.direccion);

// elimnar una propiedad del objeto anidado
// delete estudiante.direccion.numCasa;
// console.log(estudiante);



// Una tienda online gestiona la información de sus productos. Cada producto debe tener:
// Detalles (nombre, precio, categoria)
// Inventario (stock, proveedor, ubicacion)
// Historial (fechaIngreso, ultimaVenta, ventasTotales)
// Tareas a realizar:
// Crear el objeto producto.
// Mostrar únicamente los detalles.
// Aumentar el stock en 50 unidades.
// Cambiar la categoría a "Electrónica".
// Extraer el nombre y precio en variables separadas.
// Mostrar el objeto actualizado.

// const producto ={
//     detalles:{
//         nombre: "Smartphone",
//         precio: 699.99,
//         categoria: "Tecnología"
//     },
//     inventario:{
//     stock : 10,
//     proveedor: "Pixel.inc",
//     ubicacion: "Almacen central Univo"},
//     Historial:{
//         fechaIngreso: "2024-12-01",
//         ultimaVenta: "2025-08-31",
//         ventasTotales: 20
//     }

// }
// console.log(producto);

// Crear el objeto producto.
// Mostrar únicamente los detalles.
// console.log(producto.detalles);
// Aumentar el stock en 50 unidades.
// producto.inventario.stock += 50;
// console.log(producto.inventario.stock);
// // Cambiar la categoría a "Electrónica".
// producto.detalles.categoria = "Electrónica";
// console.log(producto.detalles.categoria);
// extraer el nombre y precio en variables separadas.

// const {nombre, precio} = producto.detalles;
// console.log(`Nombre: ${nombre}, Precio: ${precio}`);


// Mostrar el objeto actualizado.
// console.log(producto);

// Una aplicación móvil necesita gestionar los perfiles de sus usuarios. Se requiere crear un objeto anidado que contenga:
// Información personal (nombre, edad, email)
// Preferencias de la aplicación (idioma, notificaciones, tema)
// Estadísticas de uso (fechaRegistro, ultimoAcceso, numeroSesiones).
// Tareas a realizar:
// Crear un objeto perfilUsuario con tres objetos anidados.
// Mostrar cada sección de información por separado.
// Cambiar el idioma de "español" a "inglés".
// Actualizar la fecha de último acceso a la fecha actual.
// Eliminar una preferencia innecesaria.
// Extraer el email y el idioma en variables separadas.
// Mostrar el perfil completo actualizado.

// const perfilUsuario ={
//     informacionPersonal:{
//         nombre: "Henry kevin",
//         edad: 30,
//         email: "tuxitohotman.gmail.com"
//     },
//     PreferenciasApp:{
//         idioma: "español",
//         notificaciones: true,
//         tema: "oscuro"
//     },
//     StastUse: {
//         FechaRegistro: "2023-01-15",
//         UltimoAcceso: "2025-08-31",
//         NumeroSesiones: 150
//     }
// }

// Mostrar cada sección de información por separado.
// console.log(perfilUsuario.informacionPersonal);
// console.log(perfilUsuario.PreferenciasApp);
// console.log(perfilUsuario.StastUse);

// Cambiar el idioma de "español" a "inglés".
// perfilUsuario.PreferenciasApp.idioma = "inglés";
// console.log(perfilUsuario.PreferenciasApp.idioma);

// Actualizar la fecha de último acceso a la fecha actual.
// const fechaActual = new Date()
// perfilUsuario.StastUse.UltimoAcceso = fechaActual
// console.log(perfilUsuario.StastUse.UltimoAcceso );

// Eliminar una preferencia innecesaria.
// delete perfilUsuario.PreferenciasApp.tema;
// console.log(perfilUsuario.PreferenciasApp);
// Extraer el email y el idioma en variables separadas.
// const {email} = perfilUsuario.informacionPersonal;
// const {idioma} = perfilUsuario.PreferenciasApp;
// console.log(`Email: ${email}, Idioma: ${idioma}`);

// Mostrar el perfil completo actualizado.
// console.log(perfilUsuario);


//  Una biblioteca maneja información de sus libros:
// Información (titulo, autor, genero)
// Disponibilidad (copias, prestados, ubicacion)
// Registro (fechaPublicacion, fechaIngreso, ultimaRevision)
// Tareas a realizar:
// Crear el objeto libro.
// Mostrar la información del autor.
// Calcular cuántos ejemplares disponibles quedan (copias - prestados).
// Actualizar la ultimaRevision con la fecha actual.
// Cambiar el género del libro.
// Extraer titulo y ubicacion en variables.
// Mostrar el objeto actualizado.

const libro = {
    informacion:{
        titulo: "50 sombras de grey",
        autor: "E.L. James",
        genero: "Romance"
    },
    disponibilidad:{
        copias: 5,
        prestados: 2,
        ubicacion: "Estante A3"
    },
    Registro: {
        fechaPublicacion: "2011-06-20",
        fechaIngreso: "2011-07-15",
        ultimaRevision: "2025-09-31"
    }
}

// Mostrar la información del autor.
console.log(libro.informacion.autor);
// Calcular cuántos ejemplares disponibles quedan (copias - prestados).
const ejemplaresDisponibles = libro.disponibilidad.copias - libro.disponibilidad.prestados;
console.log(`Ejemplares disponibles: ${ejemplaresDisponibles}`);
// Actualizar la ultimaRevision con la fecha actual.
const fechaActual = new Date();
libro.Registro.ultimaRevision = fechaActual
console.log(libro.Registro.ultimaRevision);

// Cambiar el género del libro.
libro.informacion.genero = "Ficción";
console.log(libro.informacion.genero);
// Extraer titulo y ubicacion en variables.
const {titulo} = libro.informacion;
const {ubicacion} = libro.disponibilidad;
console.log(`Titulo: ${titulo}, Ubicacion: ${ubicacion}`);

// Mostrar el objeto actualizado.
console.log(libro);


