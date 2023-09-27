let alumno = {
    dniAlumno: "12345678R",
    nombre: "Jose Antonio",
    apellidos: ["Gutiérrez", "Marcos"],
    edad: 18,
    sexo: "Hombre",
    instituto: {
        id: "29700412",
        nombre: "IES Portada Alta",
        ciclos: ["SMR", "DAW", "DAM"],
        cp: "29007"
    },
    ciclo: {
        nombre: "DAW",
        curso: 2,
        asignaturas: ["DWES", "DWEC", "DIW", "WCLI", "EINEM"]
    }
}

console.log(Object.keys(alumno));
console.log(Object.values(alumno));