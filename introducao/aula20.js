/*const pessoa1 = {
  nome: "Jhord",
  sobrenome: "Vaz",
  idade: 23
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);*/

const criarPessoa = {
    nome: "Jhord",
    sobrenome: "Vaz",
    idade: 25,

    fala() {
      console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },

    incrementaIdade() {
      this.idade++;
    }
  };

criarPessoa.fala();

/*const pessoa1 = criarPessoa("Jhordan", "Vaz", 23);
const pessoa2 = criarPessoa("Rafaela", "Farias", 24);
const pessoa3 = criarPessoa("Maria", "Eduarda", 21);

console.log(pessoa1, pessoa2, pessoa3);
*/