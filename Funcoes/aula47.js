// parametros da funcao

// funcao definida com a palavra "function", tem uma variavel "arguments" que sustenta os argumentos enviados
function funcao() { // argumentos são os valores enviados para argumentos
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
} 

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


function funcao2({nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade);
}
// let obj = {nome: "Jhord", sobrenome: "Vaz", idade: 23};
funcao2({nome: "Jhord", sobrenome: "Vaz", idade: 23});

                                      // rest operator sempre deve ser o ultimo.
const conta = function (operador, acumulador, ...numeros) { 
  for (let numero of numeros) {
  if (operador === "+") acumulador += numero;
  if (operador === "-") acumulador -= numero;
  if (operador === "*") acumulador *= numero;
  if (operador === "/") acumulador /= numero;
 }

 console.log(acumulador);
};

conta("+", 1, 20, 30, 40, 50);
