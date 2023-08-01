function IMC(nome, sobrenome, idade, peso, altura, fumante){
  // keys
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.peso = peso;
  this.altura = altura;
  this.fumante = fumante;

  // methods
  this.nomeCompleto = () => {
    return ` Nome: ${nome} ${sobrenome} `;
  };

  this.calcIMC = () => {
    let imc;

    imc = this.peso / (this.altura ** 2);
    return imc.toFixed(2);
  };

};

// function calcIMC() {
//   let resultado;

//   resultado = this.peso / (this.altura ** 2);
//   return resultado.toFixed(2);
// }

const pessoa1 = new IMC("Jhodan", "Vaz", 24, 80, 1.80, "Sim");
console.log(pessoa1.nomeCompleto());


