function retornaFuncao() {
  const nome = "Jhord";
  return function() {
    return nome;
  };
}

const funcao = retornaFuncao();
console.log(funcao);