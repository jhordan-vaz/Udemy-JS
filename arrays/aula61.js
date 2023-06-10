// Dobre os números
//               0  1   2   3  4.....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numDobro = numeros.map(valor => valor * 2);
console.log(numDobro);


// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: "Jhordan", idade: 23},
  { nome: "Gabriel", idade: 22},
  { nome: "Samy", idade: 20},
  { nome: "Filipe", idade: 21},
  { nome: "Maria", idade: 20},
  { nome: "Nadia", idade: 41},
  { nome: "Lucas", idade: 45}
];

const nomeString = pessoas.map(obj => obj.nome);
const idades = pessoas.map(obj => ({ idade: obj.idade}));
const id = pessoas.map(function(obj, indice) {
  const newOBJ = {...obj};
  newOBJ.id = indice + 1;
  return newOBJ;
});
console.log(nomeString);
console.log(idades)
console.log(pessoas);
console.log(id);