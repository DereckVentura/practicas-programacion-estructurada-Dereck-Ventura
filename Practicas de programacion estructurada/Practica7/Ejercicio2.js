const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let NUMEROS = [8, 3, 10, 1, 5, 7, 2];

console.log("\n--- LISTA ORIGINAL ---");
console.log(NUMEROS.join(", "));

NUMEROS.sort((a, b) => a - b);

console.log("\n--- LISTA ORDENADA DE MENOR A MAYOR ---");
console.log(NUMEROS.join(", "));

rl.close();