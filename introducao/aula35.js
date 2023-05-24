// for in --> lê os índices ou chaves do objeto
//                0       1       2
const frutas = ["Pera", "Maçã", "Uva"];

const pessoa = {
   nome: "Jhordan",
   sobrenome: "Vaz",
   idade: 23
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]); // pegar os valores das chave
}

// console.log(pessoa.nome);
// console.log(pessoa["nome"]);

// for (let index in frutas) {
//   console.log(frutas[index]);
// }

  // for (let i = 0; i < frutas.length; i++) {
  //   console.log(frutas[i]);
  // }