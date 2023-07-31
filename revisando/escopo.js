const nome = "jhord";

function falaNome(){
  const nome = "Jhordan";
  console.log(nome);
}

function falaSobrenome() {
  console.log(nome);
}

const nome2 = "jhordd";

function usaFalaNome() {
  falaNome();
}

falaNome();


function IMC(peso, altura){
  this.peso = peso;
  this.altura = altura;


  function calc() {
    let resultado;

    let peso = this.peso;
    let altura = this.altura;

    resultado = peso / (altura * altura);
    return console.log(resultado.toFixed(2));
  }
}

// function Calc(imc) {
//   let resultado;
  
//   resultado = this.peso / (this.altura * this.altura);
//   return console.log(resultado);
// }

const imc = new IMC(80, 1.80);
console.log(imc);
