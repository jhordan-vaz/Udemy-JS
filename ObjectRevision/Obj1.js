const pessoa ={
    nome: "Jhordan",
    sobrenome: "Vaz",
    idade: 24,
};

const chave = "nome";

pessoa.getIdade = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

// console.log(pessoa.getIdade());

// console.log(pessoa["nome"]);
// console.log(pessoa.sobrenome);

// for (let key in pessoa) {
//     console.log(key);
//     console.log(pessoa[key]);
// }

// const array = [ 
//     { nome: "Jhordan", idade: 24, cidade: "Gama" },
//     { nome: "Filipe", idade: 22, cidade: "Brasília" },
//     { nome: "Sabrina", idade: 28, cidade: "Goiás" },
// ]

// const getArray = array.map(val => {
//     return val.idade;
// });

// console.log(getArray);

//Factory

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const gerarPessoas =  criaPessoa("Jhordan", "Vaz");
// console.log(gerarPessoas.nomeCompleto);

// constructor

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
// {} <- this binda a esse objeto -> this retorna esse objeto 
const p1 = new Pessoa("Jhordan", "Vaz");
const p3 = new Pessoa("Isabela", "Vaz");

console.log(p3);

const p2 = {};
p2.nome = "Jhordan";