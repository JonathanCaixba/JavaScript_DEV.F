// Array para guardar los libros leídos
let librosLeidos = [];

// Función para agregar un libro
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`Libro agregado: ${titulo}`);
}

// Función para mostrar los libros leídos
function mostrarLibrosLeidos() {
    console.log("Libros leídos:");

    for (let i = 0; i < librosLeidos.length; i++) {
        console.log((i + 1) + ". " + librosLeidos[i]);
    }
}

// Agregar libros
agregarLibro("Cien años de soledad");
agregarLibro("El Principito");
agregarLibro("Don Quijote de la Mancha");

// Mostrar libros
mostrarLibrosLeidos();