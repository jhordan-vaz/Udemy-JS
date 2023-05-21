const verdadeira = true;

// let tem escopo de bloco {... bloco }
// var só tem escopo de função

let nome = "jhord"; // criando
var nome2 = "Jhordan"; // criando


if(verdadeira) {
  let nome = "Jhord"; // criando
  var nome2 = "Jhordaan"; // redeclarada
  console.log(nome, nome2);

  if (verdadeira) {
    let nome = "Outra coisa";
  }
}

// var sobrenome = "Jhordan";

function falaOi () {
  var nome = "jHORD";
  console.log(nome);
}

falaOi();
