// Prototypes

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => this.nome + " " + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
  return this.nome + " " + this.sobrenome;
}

// instância
const pessoa1 = new Pessoa("Jhordan", "V."); // <- Pessoa = função construtora
const pessoa2 = new Pessoa("Maria", "A."); // <- Pessoa = função construtora

console.dir(pessoa1);
console.dir(pessoa2);

//  pessoa1 --> Pessoa.prototype -->  Object.prototype