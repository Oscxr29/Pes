import readline from 'readline'
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let estudiantes = []

// Función para calcular promedio y estado
function calcularPromedio(notas) {
  let suma = 0
  for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i]
  }
  let promedio = suma / notas.length

  let estado
  if (promedio >= 6) {
    estado = "Aprobado"
  } else {
    estado = "Reprobado"
  }

  return { promedio, estado }
}

// Función para registrar estudiante
function registrarEstudiante() {
  rl.question("Nombre: ", (nombre) => {
    rl.question("Edad: ", (edad) => {
      rl.question("Notas separadas por espacio: ", (entradaNotas) => {
        let notas = entradaNotas.split(' ').map(Number)
        let resultado = calcularPromedio(notas)

        estudiantes.push({
          nombre,
          edad: parseInt(edad),
          notas,
          promedio: resultado.promedio,
          estado: resultado.estado
        })

        console.log(`Estudiante registrado: ${nombre}, Promedio: ${resultado.promedio}, Estado: ${resultado.estado}`)
        menu()
      })
    })
  })
}

function buscarEstudiante() {
  rl.question("Ingresa el nombre a buscar: ", (nombre) => {
    let encontrado = estudiantes.find(e => e.nombre.toLowerCase() === nombre.toLowerCase())
    if (encontrado) {
      console.log(`Nombre: ${encontrado.nombre}, Edad: ${encontrado.edad}, Promedio: ${encontrado.promedio}, Estado: ${encontrado.estado}`)
    } else {
      console.log("Estudiante no encontrado.")
    }
    menu()
  })
}

function listarEstudiantes() {
  console.log("\n--- Listado General ---")
  estudiantes.forEach((e, i) => {
    console.log(`${i + 1}. ${e.nombre} | Edad: ${e.edad} | Promedio: ${e.promedio} | Estado: ${e.estado}`)
  })
  menu()
}

// Menú principal
function menu() {
  console.log("--- Sistema de Gestión de Estudiantes ---")
  console.log("1. Registrar estudiante")
  console.log("2. Buscar estudiante por nombre")
  console.log("3. Listado general")
  console.log("4. Salir")

  rl.question("Elige una opción: ", (opcion) => {
    if (opcion === "1") {
      registrarEstudiante()
    } else if (opcion === "2") {
      buscarEstudiante()
    } else if (opcion === "3") {
      listarEstudiantes()
    } else if (opcion === "4") {
      console.log("Saliendo del sistema...")
      rl.close()
    } else {
      console.log("Opción inválida.")
      menu()
    }
  })
}

menu()
