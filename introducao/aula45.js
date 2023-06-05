// Declaração de função (Function hoisting)
 
falaOi();

function falaOi() { // funções são elevadas para o topo do arquivo do JS 
   console.log("Salve");
}

// First-class objects (Objetos de primeira classe) tratar funções como dados.
// Function Expression
const souUmDado = function () {
  console.log("Sou um dado.");
};
souUmDado();

function executaFuncao(funcao) { // passando um parametro para receber funcao
  console.log("Vou executar sua função abaixo:");
  funcao();
}

executaFuncao(souUmDado);

// Arrow function 
const funcaoArrow = () => {
  console.log("Sou uma Arrow function");
};
funcaoArrow();

// Dentro de um objeto 
const obj = {
  falar: function () {
    console.log("Estou falando...");
  }
};
obj.falar();

