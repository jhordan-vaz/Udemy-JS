const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// continue continua para proxima iteração
// break sai do laço

for (let i = 0; i < numeros.length; i++) {
      let numero = numeros[i];

   if ( numero === 2 || numero === 5) {
      console.log("Pulei o número 2 e 5");
      continue;
   }

   if (numero === 7) {
      console.log("7 ENcontrando, saindo...");
      break;
   }

   console.log(numero);
}