// return

function criaPessoa(nome, sobrenome){
  return { nome, sobrenome };
}

const p1 = criaPessoa("jhord", "Vaz"); // essa var contem um obj
console.log(p1);

/*
  const p1 = {
    nome: "jhord",
    sobrenome: "vaz"
  };
*/

console.log(typeof p1);

function falaComeco(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const fala = falaComeco("Olá"); // chama a funçao "falaComeco";
const resto = fala("mundo!"); // resto chama fala e passa o final da frase.
console.log(resto);

function criaMultiplicador(multiplicador) {
  // multiplicador tá nesse escopo
  return function(n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2) // closure, lembra do escopo "vizinhos"
const triplica = criaMultiplicador(3)
const quadruplica = criaMultiplicador(4)


console.log(duplica(3));
console.log(triplica(2));
console.log(quadruplica(4));