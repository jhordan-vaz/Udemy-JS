// Retorne a soma do dobre de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numPares = numeros.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor);

// [ 50, 80, 2, 8, 22 ]
// [ 100, 160, 4, 16, 44 ]
// 324

console.log(numPares);
