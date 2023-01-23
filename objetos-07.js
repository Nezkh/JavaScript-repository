const datosPersonales = {
    nombre: "Francisco",
    apellido: "Marchant",
    edad: 29,
    altura: "181 cm",
    isDev: true
}

const edad = datosPersonales.edad

const listaG = [
    {...datosPersonales},
    {
    nombre: "Pedro",
    apellido: "Gonzalez",
    edad: 27,
    altura: "171 cm",
    isDev: false
    },{
    nombre: "Juan",
    apellido: "Perez",
    edad: 28,
    altura: "178 cm",
    isDev: true
    }    
]

const ordenarLista = listaG.sort((a, b) => b.edad - a.edad)
console.log(listaG);