let nombre = "Francisco"
let apellido = "Marchant"

let estudiante = nombre.concat(" ",apellido)
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLocaleLowerCase()
console.log(estudianteMinus)

var nroEstudiante = estudiante.length
console.log(nroEstudiante)

console.log(nombre.charAt(0))
let ulApellido = (apellido.length)
console.log(ulApellido)
console.log(apellido.charAt(ulApellido))

console.log(estudiante.trim().length)

console.log(estudiante.includes("Francisco"))