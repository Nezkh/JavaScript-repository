// Lista de compra
const compras = ["Harina", "Levadura", "Mozarella", "Tomates", "Albahaca"]
console.log(compras)

// Añadimos Aceite Girasol
compras.push("Aceite de Girasol")
console.log(compras)

// Eliminamos Aceite Girasol
let indice = compras.indexOf("Aceite de Girasol")
compras.splice(indice, 1)
console.log(compras)

const peliculas = [
    {titulo: "Interestelar", director: "Christopher Nolan", fecha: new Date(2014, 11, 06)},
    {titulo: "Prisioner", director: "Denis Villeneuve" , fecha: new Date(2013, 12, 12)},
    {titulo: "White Chicks", director: "Keenen Ivory Wayans", fecha: new Date(2004, 12, 09)},
]

const peliAn = peliculas.filter (a => a.fecha > new Date(2010, 01, 01))
console.log(peliAn)

const directores = peliculas.map(x => x.director)
console.log(directores)

const titulos = peliculas.map(x => x.titulo)
console.log(titulos);

const dirTit = peliculas.map(x => x.director.concat(" - ",x.titulo))
console.log(dirTit);

const dirTitProp = [...peliculas]
console.log(dirTitProp);