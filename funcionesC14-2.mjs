//EJERCICIO 1: RESTA
import readline from 'readline' 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function saludar(Nombre){
    console.log(`Hola ${Nombre}, bienavenido a javaScript`);
}

let resta =(n1,n2)=>{
    let res = n1 - n2;

    return res;
}

rl.question("Ingrese su nombre para saludarlo: \n",(nom)=>{
    rl.question("Ingrese el primer numero: \n",(num1)=>{
        rl.question("Ingrese el segundo numero: \n",(num2)=>{

            saludar(nom);
            console.log(`La resta de ambos numeros es: \n`,resta(num1,num2))

            rl.close();
        })
    })
})
// dato repaso extra acerca de la rl question en \n es una secuencia de escape que representa un salto de línea (newline).

//EJERCICIO 2: cArea

// function calcularArea(base,altura){
//     let calculo = parseFloat(base * altura);

//     return calculo;
// }

// rl.question("Ingrese la base del restacgulo: \n", Base=> {
//     rl.question("Ingrese la altura del rectangulo: \n", Altura=>{

//         let result = calcularArea(Base,Altura);
//         console.log(`El area del rectangulo es: ${result}`)
//         // console.log(`El area del rectangulo es: `,calcularArea(Base,Altura));
//         rl.close();
//     })
// })

//EJERCICIO 3: descuento

// function calcularDescuento(precio,descuento){
//     precio = parseFloat(precio);
//     descuento= parseFloat(descuento);

//     let des = precio*descuento;

//     let totalPagar = precio - des;

//     console.log(`El descuento del producto es de $: ${des} \n total a pagar es de $: ${totalPagar}`);
// }

// rl.question("Ingrese el precio del producto: ", precio=>{
//     rl.question("Ingrese el descuento a aplicar, expresado en decimales Ej: 0.20 para el 20%: $", desc=>{

//         calcularDescuento(precio,desc);
//         rl.close();
//     })
// })