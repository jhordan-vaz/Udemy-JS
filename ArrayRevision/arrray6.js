const numeros = [7, 73, 5, 1, 6, 12, 25, 34, 46, 66, 99, 33, 29];

const doubleNum = numeros.map(valor => valor * 2) 
// console.log(doubleNum);


const pessoas = [
    { nome: "Jhordan", idade: 24},
    { nome: "Isabela", idade: 23},
    { nome: "Rafael", idade: 27},
    { nome: "Samantha", idade: 21},
    { nome: "Filipe", idade: 22},
    { nome: "Leticia", idade: 20},
]

// const retornarString = pessoas.map(nome => nome.nome); 
// console.log(retornarString);
// const retornaIdades = pessoas.map(idades => ({idade: idades.idade}));
// console.log(retornaIdades);
const gerarID = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice + 1;  // tem que atribuir anotação de ponto: "newObj = index" está alterando o valor de newObj para index.
    return newObj
});
console.log(gerarID); 