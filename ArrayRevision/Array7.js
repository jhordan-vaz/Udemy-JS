const numeros = [7, 73, 5, 1, 6, 12, 25, 34, 46, 66, 99, 33, 29];

const total = numeros.reduce((ac, val) => {
    ac.push(val * 3);
    // console.log(ac, val)
    return ac;
}, []);

// console.log(total);



// const pessoas = [
//     { nome: "Jhordan", idade: 24},
//     { nome: "Isabela", idade: 23},
//     { nome: "Rafael", idade: 27},
//     { nome: "Samantha", idade: 21},
//     { nome: "Filipe", idade: 22},
//     { nome: "Leticia", idade: 20},
//     { nome: "Gabriel", idade: 37},
//     { nome: "Ana", idade: 54},
//     { nome: "Mateus", idade: 31},
//     { nome: "Jade", idade: 26},
// ]

// const olderPerson = pessoas.reduce((ac, val) => {
//     if(ac.idade > val.idade) return ac;
//     return val; 
// });  

// console.log(olderPerson);



const pessoas = [
    { nome: "Jhordan", idade: 24},
    { nome: "Isabela", idade: 23},
    { nome: "Rafael", idade: 27},
    { nome: "Samantha", idade: 21},
    { nome: "Filipe", idade: 22},
    { nome: "Leticia", idade: 20},
    { nome: "Gabriel", idade: 37},
    { nome: "Ana", idade: 54},
    { nome: "Mateus", idade: 31},
    { nome: "Jade", idade: 26},
    { nome: "Luiz Gustavo", idade: 19},
    { nome: "Roberta", idade: 22},
]

const getAge = pessoas.reduce((ac, val) => {
    if(ac.idade > val.idade) return ac;
    return val;
});

const getLongName = pessoas.reduce((ac, val) => {
    if(ac.nome.length > val.nome.length) return ac;
    return val;
});

console.log(getAge);
console.log(getLongName);