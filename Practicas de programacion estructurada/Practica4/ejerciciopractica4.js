function formatearMoneda(numero, codigo) {
    return new Intl.NumberFormat("es-ES", {
        style: "currency",
        currency: codigo,
        minimumFractionDigits: 2
    }).format(numero);
}

// Ejemplo de uso
console.log(formatearMoneda(1234567.89, "USD")); // 1.234.567,89 US$
console.log(formatearMoneda(1234567.89, "EUR")); // 1.234.567,89 €
function analizarNumeros(parrafo) {
    const numerosEncontrados = parrafo.match(/\d+/g);
    if (!numerosEncontrados) {
        console.log("No se encontraron números en el texto.");
        return;
    }

    const numeros = numerosEncontrados.map(num => parseInt(num));
    const promedio = numeros.reduce((acc, val) => acc + val, 0) / numeros.length;
    const mayores = numeros.filter(num => num > promedio).length;

    console.log(`Números encontrados: ${numeros}`);
    console.log(`Promedio: ${promedio.toFixed(2)}`);
    console.log(`Cantidad mayores al promedio: ${mayores}`);
}

// Ejemplo de uso
analizarNumeros("Juan tiene 10 manzanas, Pedro 20 y María 30.");

function validarFecha(fechaStr) {
    const partes = fechaStr.split("-");
    if (partes.length !== 3) {
        console.log("Formato inválido. Usa YYYY-MM-DD.");
        return;
    }

    const [anio, mes, dia] = partes.map(num => parseInt(num));

    // Validar rangos básicos
    if (mes < 1 || mes > 12 || dia < 1 || dia > 31) {
        console.log("Fecha inválida.");
        return;
    }

    // Crear objeto fecha y verificar
    const fecha = new Date(fechaStr);
    if (
        fecha.getFullYear() !== anio ||
        fecha.getMonth() + 1 !== mes ||
        fecha.getDate() !== dia
    ) {
        console.log("Fecha inválida.");
        return;
    }

    console.log(`Fecha válida. Timestamp: ${Date.parse(fechaStr)}`);
}

// Ejemplo de uso
validarFecha("2025-09-26"); // Fecha válida
validarFecha("2025-13-10"); // Fecha inválida