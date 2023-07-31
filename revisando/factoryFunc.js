// Factory function

function criaPessoa(nome, sobrenome, altura, peso) {
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
    },

    speak: function(assunto) {
      return `${nome} está ${assunto}.`;
    },

    altura: altura,
    peso: peso,
    // Getter
    get imc() { // "transforma" em um atributo da classe
      const indice = this.peso / (this.altura ** 2);
      return `Imc: ${indice.toFixed(2)}`;
    }
  };
}

// this se refere a quem está chamando.
// p1.speak() "p1 está chamando this.nome e sobrenome."
// this se refere ao objeto inteiro: 

/* return {
    nome, 
    sobrenome,
    speak: function(assunto) {
      return `${nome} está ${assunto}.`;
    },
  }; 
*/

const p1 = criaPessoa("Jhordan", "Vaz", 1.80, 80);
p1.nomeCompleto = "Jhordan Weverton Vaz";
console.log(p1.nomeCompleto, p1.imc);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.speak("falando de fallout"));