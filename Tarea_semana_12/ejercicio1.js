const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa un número para calcular su cuadrado: ', numero => {
  let n = parseFloat(numero); // Convertimos el texto a número
  let cuadrado = n * n; // Calculamos el cuadrado
  console.log(`El cuadrado de ${n} es: ${cuadrado}`);
  readline.close(); // Cerramos la interfaz
});
