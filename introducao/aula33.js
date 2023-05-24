const pessoa = {
  //nome: "Jhord",
  sobrenome: "Vaz",
  idade: 23,
  endereco: {
    rua: "Gama",
    numero: 96
  }
};

// Atribuição via desestruturação
const { nome: teste = " ", sobrenome, idade, endereco: {rua, numero }, endereco } = pessoa; // Extrai desse Obj essa chave aqui.
console.log(teste, sobrenome, idade, rua);