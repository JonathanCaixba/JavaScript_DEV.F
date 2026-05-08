// Declaramos la variable nota
let nota = 75;

// Verificamos que la nota sea mayor o igual a 0
if (nota >= 0) {

    console.log("La nota del alumno es: " + nota);

    // Evaluamos el rango de la nota
    if (nota >= 90 && nota <= 100) {
        console.log("El estudiante aprueba con: Excelente");
    } 
    else if (nota >= 75 && nota <= 89) {
        console.log("El estudiante aprueba con: Bien");
    } 
    else if (nota >= 60 && nota <= 74) {
        console.log("El estudiante aprueba con: Suficiente");
    } 
    else if (nota < 60) {
        console.log("El estudiante no aprueba");
    } 
    else {
        console.log("La nota no es válida");
    }

} else {
    console.log("La nota debe ser mayor o igual a 0");
}