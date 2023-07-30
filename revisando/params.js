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

