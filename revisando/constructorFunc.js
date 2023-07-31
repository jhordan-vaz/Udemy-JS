// funcao construtora -> objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome, idade){ // parametros
  // criando chaves.

  const ID = 112233;

  this.nome = nome;       
  this.sobrenome = sobrenome;
  this.idade = idade;

  this.metodo = (ano) => {
    let dobroIdade = this.idade * ano;
    return console.log(`A idade multiplicada é ${dobroIdade}`);
  }
}

// new cria um obj vazio {} e faz o this apontar pro obj "p1" e retorna automatico.

const p1 = new Pessoa("jhordan", "vaz", 24); // não pode esquecer de usar o "new"

p1.metodo(1999);
