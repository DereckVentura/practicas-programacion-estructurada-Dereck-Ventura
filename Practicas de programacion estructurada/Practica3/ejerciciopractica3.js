// Ejercicio 1: Simulación de dos dados
function lanzarDados() {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const total = dado1 + dado2;

    console.log("=== Ejercicio 1: Lanzamiento de dados ===");
    console.log(`Dado 1: ${dado1}`);
    console.log(`Dado 2: ${dado2}`);
    console.log(`Total: ${total}`);
}

// Ejecutar Ejercicio 1
lanzarDados();


// Ejercicio 2: Operaciones con dos números
function operaciones(a, b) {
    console.log("\n=== Ejercicio 2: Operaciones con dos números ===");
    console.log(`Número A: ${a}, Número B: ${b}`);
    console.log(`Suma: ${a + b}`);
    console.log(`Resta: ${a - b}`);
    console.log(`Multiplicación: ${a * b}`);

    if (b !== 0) {
        console.log(`División: ${a / b}`);
    } else {
        console.log("División: No se puede dividir entre 0");
    }
}

// Ejecutar Ejercicio 2 con valores de ejemplo
operaciones(10, 5);