// Filter -> Sempre retornar um array com a mesma quantidade de elementos ou menos.


const numeros = [7, 73, 5, 1, 6, 12, 25, 34, 46, 66, 99, 33, 29];

const numerorDoisDigitos = numeros.filter(valor => valor > 10);
//console.log(numerorDoisDigitos);


const pessoas = [
    { nome: "Jhordan", idade: 24},
    { nome: "Isabela", idade: 23},
    { nome: "Rafael", idade: 27},
    { nome: "Samantha", idade: 21},
    { nome: "Filipe", idade: 22},
    { nome: "Leticia", idade: 20},
]

const pessoasFilterName = pessoas.filter(valor => valor.nome.length >= 7);
const pessoasFilterAge = pessoas.filter(age => age.idade> 23);
const pessoasFilterLetters = pessoas.filter(letter => letter.nome.toLocaleLowerCase().endsWith("a"))
console.log(pessoasFilterName);
console.log(pessoasFilterAge);
console.log(pessoasFilterLetters);

