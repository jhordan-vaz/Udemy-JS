const pessoa ={
    nome: "Jhordan",
    sobrenome: "Vaz"
};

const chave = "nome";

// console.log(pessoa["nome"]);
// console.log(pessoa.sobrenome);

const array = [ 
    { nome: "Jhordan", idade: 24, cidade: "Gama" },
    { nome: "Filipe", idade: 22, cidade: "Brasília" },
    { nome: "Sabrina", idade: 28, cidade: "Goiás" },
]

const getArray = array.map(val => {
    return val.idade;
});

console.log(getArray);