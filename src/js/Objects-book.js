// Crear objeto libro
let libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",

    // Lista de capítulos
    capitulos: [],

    // Método para describir el libro
    describirLibro: function() {
        console.log(
            `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`
        );
    },

    // Método para agregar capítulos
    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo agregado: ${capitulo}`);
    },

    // Método para eliminar capítulos
    eliminarCapitulo: function(capitulo) {
        let indice = this.capitulos.indexOf(capitulo);

        if (indice !== -1) {
            this.capitulos.splice(indice, 1);
            console.log(`Capítulo eliminado: ${capitulo}`);
        } else {
            console.log("El capítulo no existe.");
        }
    }
};

// Usar el método describirLibro
libro.describirLibro();

// Agregar capítulos
libro.agregarCapitulo("Capítulo 1");
libro.agregarCapitulo("Capítulo 2");

// Mostrar capítulos
console.log("Capítulos:", libro.capitulos);

// Eliminar un capítulo
libro.eliminarCapitulo("Capítulo 1");

// Mostrar capítulos actualizados
console.log("Capítulos actualizados:", libro.capitulos);