class Person {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

const nome = "jhord";
const sobrenome = "vaz";

module.exports = {
  nome, sobrenome, Person
};

exports.Person = Person;

console.log(module.exports);