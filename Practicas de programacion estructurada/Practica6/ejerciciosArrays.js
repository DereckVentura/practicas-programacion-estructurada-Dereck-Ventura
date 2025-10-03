// Ejercicio 1
// Crear un array de nombres y mostrar el primero y el último.
let nombres = ["Ana", "Luis", "Carlos", "María", "Pedro"];

console.log("=== Ejercicio 1 ===");
console.log("El primer nombre es: " + nombres[0]);
console.log("El último nombre es: " + nombres[nombres.length - 1]);

// Ejercicio 2
// Agregar y eliminar elementos usando push, pop, unshift, shift.
let frutas = ["manzana", "banana", "cereza"];

console.log("\n=== Ejercicio 2 ===");
console.log("Array inicial:", frutas);

// Agregar al final con push
frutas.push("kiwi");
console.log("Después de push:", frutas);

// Eliminar del final con pop
frutas.pop();
console.log("Después de pop:", frutas);

// Agregar al inicio con unshift
frutas.unshift("uva");
console.log("Después de unshift:", frutas);

// Eliminar del inicio con shift
frutas.shift();
console.log("Después de shift:", frutas);