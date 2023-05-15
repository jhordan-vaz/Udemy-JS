/* 
Primitivos - String, number, booblean, undefined, null, (bigint, symbol)  imutável

Referência (mutável) - array, object, function - passados por referencia
*/

/*
            0123
let nome = "Luiz";
nome[0] = "J";
console.log(nome[0], nome);
*/
/*
let a = 'A';
let b = a; //Cópia
console.log(a, b); 

a = "outra coisa";
console;log(a, b);
*/
/*
let a = [1, 2, 3];
let b = [...a];
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push("Jhordan");
console.log(a, c);
*/

const a = {
  nome: "Jhord",
  sobrenome: "Vaz"
};

const b = a;

a.nome = "Jhord"
console.log(b)
