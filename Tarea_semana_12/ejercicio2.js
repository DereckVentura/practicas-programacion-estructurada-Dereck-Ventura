const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];

readline.question('Ingresa el primer número: ', n1 => {
  numeros.push(parseFloat(n1));
  readline.question('Ingresa el segundo número: ', n2 => {
    numeros.push(parseFloat(n2));
    readline.question('Ingresa el tercer número: ', n3 => {
      numeros.push(parseFloat(n3));
      let promedio = (numeros[0] + numeros[1] + numeros[2]) / 3;
      console.log(`El promedio de los tres números es: ${promedio.toFixed(2)}`);
      readline.close();
    });
  });
});
