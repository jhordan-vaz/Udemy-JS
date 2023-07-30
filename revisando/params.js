// Argumentos são valores enviados aqui
function funcao(a, b, c) { // parametros são dentro da funcao
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  
  console.log(total, a, b, c)
  
}
funcao(1, 2, 3, 4 , 5);


function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3);

function funcao3({ nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade)
}
// let obj = {nome, sobrenome, idade}
funcao3({nome: "jhord", sobrenome: "Vaz", idade: 24});

function calc(operador, acumulador = 1, ...numeros) {
  for(let numero of numeros) {
    if(operador === "+") acumulador += numero;
    if(operador === "-") acumulador -= numero;
    if(operador === "/") acumulador /= numero;
    if(operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
}

calc("+", 2, 20, 30, 40, 50);