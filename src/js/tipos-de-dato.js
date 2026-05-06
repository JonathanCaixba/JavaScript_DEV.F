// Ejemplos básicos
console.log(typeof 42);            // number
console.log(typeof 'Veinticinco'); // string
console.log(typeof -666);          // number
console.log(typeof true);          // boolean
console.log(typeof 0);             // number
console.log(typeof '');            // string
console.log(typeof null);          // object (esto es un bug histórico en JS)
console.log(typeof undefined);     // undefined
console.log(typeof false);         // boolean

// Ejemplos adicionales por Caixba
console.log(typeof 3.14);          // number
console.log(typeof NaN);           // number
console.log(typeof Infinity);      // number

console.log(typeof {});            // object
console.log(typeof []);            // object
console.log(typeof [1, 2, 3]);     // object

console.log(typeof function(){});  // function

let variable;
console.log(typeof variable);      // undefined

const persona = {
  nombre: "Juan",
  edad: 30
};
console.log(typeof persona);       // object