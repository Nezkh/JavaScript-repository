const nombre = "Francisco"
const apellido = "Marchant"
const nomApe = {nombre,apellido}

console.log(nomApe)

localStorage.setItem("nombreCompletoLocal", JSON.stringify(nomApe))
sessionStorage.setItem("nombreCompletoSession", JSON.stringify(nomApe))


let date = new Date(new Date().getTime() + 2 * 60 * 1000)

let cookie = ["nombreCookie="+JSON.stringify(nomApe)+";expires="+ date.toUTCString()]
document.cookie = cookie