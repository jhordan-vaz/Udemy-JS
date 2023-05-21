// ... rest, ... spread
// indexado     0  1   2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero,  , terceiroNumero, , quintoNumero, ...resto] = numeros;
console.log(primeiroNumero,  terceiroNumero, quintoNumero);
console.log(resto);

//                     0          1          2
//                  0  1  2   0   1  2    0  1  2                     
const numeros2 = [ [1, 2, 3], [4, 5 ,6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros2;
console.log(lista3[2]);
console.log(numeros2[1][2]);

// atribuição via desestruturação.