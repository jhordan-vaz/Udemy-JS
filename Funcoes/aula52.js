// IIFE -> Immediatly Invoked Function Expression 

function qualquerCoisa() {
  console.log(123456789);
}

qualquerCoisa();

(function (idade, peso, altura) {
  
  const sobrenome = "Vaz";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Jhordan"));
  }

  falaNome();
  console.log(idade, peso, altura);
  
})(23, 80, 1.80);

(function() { //IIFE

})();