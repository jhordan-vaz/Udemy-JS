// Closure

function retornaFuncao() {
  const nome = "Lucas";
  return function () {
    return nome;
  }// esse escopo
} // acesso a esse escopo

const funcao1 = retornaFuncao();
console.dir(funcao);

const funcao2 = retornaFuncao("Jhord");
const funcao3 = retornaFuncao("Vaz");
console.dir(funcao2);
console.dir(funcao3);