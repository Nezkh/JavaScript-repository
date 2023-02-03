class Estudiante {
    nombre = "Francisco"
    asignaturas = ["Javascript", "HTML", "CSS"]

    getDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const estudiante = new Estudiante()
console.log(estudiante);