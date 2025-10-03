// Ejercicio Uno
const texto = "Bienvenidos a la practica #2";

console.log(":: Ejercicio Uno ::");
console.log(texto.toLowerCase());
console.log(texto.toUpperCase());

// Ejercicio Dos
console.log("\n\n:: Ejercicio Dos ::");
const frase = "   Hola mundo   ";
const fraseLimpia = frase.trim();
console.log(fraseLimpia);

// Ejercicio Tres
console.log("\n\n:: Ejercicio Tres ::");
const palabra = "Hotwheels";
const palabraNueva = palabra.substring(3, 9);
console.log(palabraNueva);

// Ejercicio de tarea
// Contar los caracteres de una cadena ("Su nombre")
// sin contar los espacios (usar .trim() y .replace())
console.log("\n\n:: Ejercicio de tarea ::");
let cadena = "Su nombre";
cadena = cadena.trim();
let cadenaSinEspacios = cadena.replace(/ /g, "");
let cantidad = cadenaSinEspacios.length;
console.log("Cantidad de caracteres:", cantidad);