// retorno das funcoes 
// Retorna um valor
// Termina a funcao

function soma(a, b) {
  return a + b;
}

function soma2(a, b) {
  console.log(a + b);
}

soma2(5, 5);

function criaPessoa(nome, sobrenome) {
   return {nome, sobrenome};
}

const p1 = criaPessoa("Jhord", "Vaz");
const p2 = {
  nome: "João",
  sobrenome: "Oliveira"
};

console.log(typeof p1);
console.log(typeof p2);

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto; // essa função desceu para a var "olaMundo"
}

const fala = falaFrase("Olá"); // olá mundo é uma função
const resto = fala("mundo!");
console.log(resto);

function criaMultiplicador(multiplicador) {
  // multiplicador
  return function (n) { //closure
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));