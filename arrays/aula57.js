// basics of array
// valor por referência

//   0        1         2 
//const nomes = ["jhord", "Maria", "Rafaela"];
// String, Objetos, Funções, Números
// const nomes = new Array("Jhord", "Maria", "Bianca");
// nomes[2] = "Rafael";
// delete nomes[2];
// console.log(nomes);

const nomes = ["jhord", "Maria", "Rafaela", "Rosana", "Vaz"];
const novo = [...nomes];
const removido = nomes.pop();
const removido2 = nomes.shift();
const cortar = nomes.slice(1, -1);

novo.pop();
console.log(nomes);
console.log(novo);
console.log(nomes, removido, removido2);

nomes.unshift("Dante");
nomes.push("Hunt");
console.log(nomes);
console.log(cortar);

const nome2 = "Jhordan Weverton Vaz";
const nomesplit = nome2.split(",");
const nome = nomes.join(", ");
console.log(nome2);
 console.log(nome);
