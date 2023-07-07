// Criando Classes

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.sobrenome} está falando.`);
  }

  comer() {
    console.log(`${this.sobrenome} está comendo.`);
  }

  jogar() {
    console.log(`${this.sobrenome} está jogando.`);
  }
}


const p1 = new Pessoa("Jhoran", "Vaz");
console.log(p1);

p1.falar();
p1.comer();
p1.jogar();