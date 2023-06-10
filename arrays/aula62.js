// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27, 16];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
  if(valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
  { nome: "Jhordan", idade: 23},
  { nome: "Gabriel", idade: 22},
  { nome: "Samy", idade: 20},
  { nome: "Filipe", idade: 21},
  { nome: "Maria", idade: 20},
  { nome: "Nadia", idade: 41},
  { nome: "Lucas", idade: 45}
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if(acumulador.idade > valor.idade) return acumulador;
  return valor;
});
console.log(maisVelha);