// Filter -> sempre retornar um array, com a msm quantidade de ele ou menos.

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter (valor => valor > 10);
// console.log(numerosFiltrados);

const pessoas = [
  { nome: "Jhordan", idade: 23},
  { nome: "Gabriel", idade: 22},
  { nome: "Samy", idade: 20},
  { nome: "Filipe", idade: 21},
  { nome: "Maria", idade: 20},
  { nome: "Nadia", idade: 41},
  { nome: "Lucas", idade: 45}
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 3);
console.log(pessoasComNomeGrande);
const pessoasVelhas = pessoas.filter(old => old.idade >= 22);
console.log(pessoasVelhas);
const nomeTerminaComA = pessoas.filter(letra => letra.nome.toLowerCase().endsWith("a"));
console.log(nomeTerminaComA);