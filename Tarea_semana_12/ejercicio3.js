const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Ingresa la base del triángulo: ', base => {
  readline.question('Ingresa la altura del triángulo: ', altura => {
    let b = parseFloat(base);
    let h = parseFloat(altura);
    let area = (b * h) / 2;
    console.log(`El área del triángulo es: ${area.toFixed(2)}`);
    readline.close();
  });
});
