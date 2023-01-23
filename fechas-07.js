const hoy = new Date()
const nacimiento = new Date(1993, 11, 05)

const hoyNacimiento = (hoy.getTime() > nacimiento.getTime())
console.log(hoyNacimiento);

const diaNa = nacimiento.getDate
const mesNa = nacimiento.getMonth() + 1;
const anyoNa = nacimiento.getFullYear()