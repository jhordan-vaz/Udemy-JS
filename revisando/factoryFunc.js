function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome, 
    sobrenome,
    speak: function(assunto) {
      return `${nome} está ${assunto}.`;
    },
    altura: altura,
    peso: peso,
    imc() {
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
console.log(p1);
console.log(p1.imc());