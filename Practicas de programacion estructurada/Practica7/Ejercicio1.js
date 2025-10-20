const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let Personas = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 25 },
    { nombre: "María", edad: 22 },
    { nombre: "Carlos", edad: 30 }
];

let Nombres = Personas.map(p => p.nombre);

console.log("\n--- DETALLE DE LAS PERSONAS ---");
Personas.forEach((p, i) => {
    console.log(`${i + 1}. NOMBRE: ${p.nombre} | EDAD: ${p.edad}`);
});

console.log("\n--- SOLO LOS NOMBRES ---");
Nombres.forEach((n, i) => {
    console.log(`${i + 1}. ${n}`);
});

rl.close()