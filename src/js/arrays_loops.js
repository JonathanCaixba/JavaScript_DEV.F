// Arreglo de frutas
let frutas = ["manzana", "banana", "manzana", "naranja", "banana", "manzana"];

// Objeto para guardar el conteo
let conteoFrutas = {};

// Recorrer el arreglo con un ciclo for
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    // Si la fruta ya existe en el objeto, aumenta el contador
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        // Si no existe, inicia en 1
        conteoFrutas[fruta] = 1;
    }
}

// Imprimiendo resultados
console.log("Cantidad de cada fruta:");
for (let fruta in conteoFrutas) {
    console.log(fruta + ": " + conteoFrutas[fruta]);
}