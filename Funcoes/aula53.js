// Factory Functions
// Constructor Function 
function criaPessoa(nome, sobrenome,altura, peso) {
  return {
    nome, 
    sobrenome,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
      console.log(valor);
    },
    fala(assunto = "Falando sobre blasphemous") {
      return `${this.nome} está ${assunto}.`; // nesse caso o this vai se referir ao objeto que está chamando ele.
    },
    altura, 
    peso,
    // Getter obter um valor,
    get imc() { // com get ele "finge" se passar por um atributo da classe.
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa("jhordan", "Vaz", 1.80, 80);
const p2 = criaPessoa("Maria", "Clara", 1.58, 55);
const p3 = criaPessoa("Artorias", "Sif", 1.90, 75);

p1.nomeCompleto = "Jhordan Weverton Vaz";
p2.nomeCompleto = "Maria Clara";
p3.nomeCompleto = "Artorias Sif";
 

console.log(p1.nomeCompleto);
console.log(p1.fala());

console.log(p1.nomeCompleto, p1.imc);
console.log(p2.imc);
console.log(p3.imc);x
