// Escopo léxico

const nome = "Jhordan"; 

function falaNome() {
  const nome = "Jhord";
  console.log(nome);
}
falaNome() 

function usaFalaNome() {
  const nome = "Vaz";
  falaNome();
}
usaFalaNome();

