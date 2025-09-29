// const numeros =[10,20,30,40,50];
// const meses = new Array ('Enero','Febrero', 'Marzo'   
// );
// const deTodo = ['hola',10,null, true,{nombre:"juan", Trabajo:'Programador'},[1,2,3]];
// console.table(deTodo);

// console.log(deTodo[3]);
// console.log(deTodo[4].nombre);
// console.log(deTodo[5][1]);

//modificar variables 

// numeros[1]=80;
// console.log(numeros);

// meses.push('abril');
// console.log(meses);

// meses.pop()
// console.log(meses);

// meses.shift();
// console.log(meses);

// meses.unshift('Enero')
// console.log(meses);


// for(i=0;i<meses.length; i++){
//     console.log(meses[i]);
// };

// numeros.splice(2,0,80);
// console.log(numeros);

//imprimir el primer y el ultimo dia de la semana 

// const Dias = [ "Lunes" , "martes", "miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
// console.log(Dias[0]);
// console.log(Dias[6]); // metodo uno

// console.log(Dias.pop()); // metodo 2

// const carrito = {
//     nombre: "Camiseta",
//     precio: 2.50
// }

// carrito.push(Prodcuto1);
// console.log(carrito);
// const Prodcuto1 ={
//     nombre: "Zapatos",
//     precio: 12.50

// }

// carrito.unshift(Prodcuto1);
// console.log(carrito);

// Ejercicios 
// Solicitar al usuario tres nombres para guardarlos en un array y mostrar cada uno

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// let nombres = [];

// rl.question("Ingrese el primer nombre:",(nombre1)=>{
//     nombres.push(nombre1);
//     rl.question("ingresa el segundo nombre:",(nombre2)=>{
//         nombres.push(nombre2);

//         rl.question("Ingresa el tercer nombre:",(nombre3)=>{
//             nombres.push(nombre3)

//             console.log(nombres);
//             console.log("Primer Nombre:", nombres[0]);
//             console.log("Segundo Nombre:", nombres[1]);
//             console.log("Tercer Nombre:", nombres [2]);
//             rl.close()
//         })

//     })
// // })
// const numeros = [];

// rl.question("Ingrese la primer nota:", (nota1)=>{
//     numeros[0]= parseInt(nota1);

//     rl.question ("Ingrese el segundo numero:", (nota2)=>{
//         numeros[1]= parseInt(nota2);

//          rl.question ("Ingrese el tercer numero:", (nota3)=>{
//         numeros[2] = parseInt(nota3);

//         const Promedio = (numeros[0] + numeros[1] + numeros[2] )/3;

//         console.log(`El Promedio de la nota es: ${Promedio}`);
//         rl.close();

//      })
//         })
// })


const temperatura =[];

rl.question ("Ingrese la temperatura1",(temp1) =>{
    temperatura[0] = parseFloat(temp1);
    rl.question("Ingrese la segunda Temperatura:", (temp2)=>{
        temperatura[1] =parseFloat (temp2);
        rl.question ("Ingrese la tercera Tempratura", (temp3)=>{
            temperatura[2] = parseFloat (temp3);

            let maximo = Math.max(temperatura[0], temperatura[1], temperatura[2]);
            console.log(maximo);
            rl.close

        })

    })


})


