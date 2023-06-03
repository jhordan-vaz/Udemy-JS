// Escreva uma função que recebe um numero e
// retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 4 = retorna o próprio numero
// Chegar se o número é realmente um número 
// Use a função com números de 0 a 100

// tentativa 1

// function getNumber () {
//   let numero = 9;

//   if (numero % 2) {
//      console.log("por 2");
//   } else if (numero % 3) {
//       console.log("Por 3");
//   } else if (numero % 2 && numero / 3) {
//       console.log("Por 2 e 3");
//   }
// }

// let numero;
// getNumber(numero);



function fizzBuzz(n) {
  if (typeof n != "number") return NaN;
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz"  
  if (n % 3 === 0) return "Fizz" // se o resto da divisão por 3 for 0 "Fizz"
  if (n % 5 === 0)  return "Buzz"
  return n;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i))
}