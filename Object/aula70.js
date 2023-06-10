const pessoa = { 
 nome: "Maria",
 sobrenome: "Clara"
};

const chave = "nome";
console.log(pessoa["nome"]);
console.log(pessoa[chave]);
console.log(pessoa.sobrenome);

const pessoa1 = new Object();
pessoa1.nome = "Jhord";
pessoa1.sobrenome = "Vaz";
pessoa1.idade = 23;
pessoa1.falarNome = function() {
  return(`${this.sobrenome} está falando seu nome`);
}
pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
}

delete pessoa1.nome;
console.log(pessoa1)
pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());


// Factory Function | Constructor Function | Classes

// Factory Function
 
function criaPessoa(nome, sobrenome) {
  return {
    nome, 
    sobrenome,
    nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  };
}

const p1 = criaPessoa("Nadia", "Cecilia");
console.log(p1.nomeCompleto());


// Constructor Function

function Person(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// a palavra new cria um objeto vazio atrela o this e retorna {} <- this binda ao objeto.
const p2 = new Person("Jhordan", "Vaz");
console.log(p2);

