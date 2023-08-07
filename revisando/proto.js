// Construtora -> molde | (class)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
//  this.nomeCompleto = () => " Sobreescreve o de proto" `${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.estouAqui = 'Salve'; // está linkando ao "Pessoa" essa funcao.
Pessoa.prototype.nomeCompleto = function () {
  `${this.nome} ${this.sobrenome}`;
};

// Pessoa.prototype === pessoa1.__proto__

// instancing
const pessoa1 = new Pessoa("Jhordan", "Vaz"); // <- usando o molde e passando os params.
const pessoa2 = new Pessoa("Maria", "Clara"); // <- usando molde e usando os params.
const data = new Date(); // <- Date = função construtora

//console.log(pessoa1);
console.log(pessoa1.nomeCompleto());
//console.log(pessoa2);
console.log(pessoa2.nomeCompleto());
console.log(data);

// pessoa1 -> Pessoa.prototype -> Object.prototype // procura as coisas.