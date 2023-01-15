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

let iNombre = nombre.substring(0, 1)
console.log(iNombre)

let fApellido = apellido.substring(apellido.length - 1, apellido.length)
console.log(fApellido)

let estudianteSEspacio  = estudiante.replace(/ /g, "")
console.log(estudianteSEspacio)

console.log(estudiante.includes(nombre))