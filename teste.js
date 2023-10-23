// const pessoas = [
//     { nome: "Jhordan", idade: 24},
//     { nome: "Isabela", idade: 23},
//     { nome: "Rafael", idade: 27},
//     { nome: "Samantha", idade: 21},
//     { nome: "Filipe", idade: 22},
//     { nome: "Leticia", idade: 20},
// ]

// const gerarIDs = pessoas.map(function(obj, index) {
//     let newObj = {...obj};
//     newObj.id = index + 1;
//     return newObj;
// });

// console.log(gerarIDs);

// const pessoas = [
//     { nome: "Jhordan", idade: 24},
//     { nome: "Isabela", idade: 23},
//     { nome: "Rafael", idade: 27},
//     { nome: "Samantha", idade: 21},
//     { nome: "Filipe", idade: 22},
//     { nome: "Leticia", idade: 20},
// ]

// const filtrarNome = pessoas.filter(letra => letra.nome.toLocaleLowerCase().endsWith("n"));
// console.log(filtrarNome);

// const filtrarIdade = pessoas.filter(idade => idade.idade >= 25);
// console.log(filtrarIdade);

// const gerarID = pessoas.map(function(obj, index) {
//     const newObj = {...obj};
//     newObj.id = index + 1; // tem que atribuir anotação de ponto: "newObj = index" está alterando o valor de newObj para index.
//     return newObj;
// });
// console.log(gerarID);

function Testar(valor, valor2) {
    this.valor = valor;
    this.valor2 = valor2;

    Object.defineProperty(this, "valorTotal" ,{
        writable: true,
        enumerable: true,
        configurable: false,
        value: 0
    });
    
    Object.defineProperties(this, valor, valor2 ,{
        writable: false,
        enumerable: true,
        configurable: false,
    });

    get = () => {
        return console.log(typeof valorTotal);
    };

}

Testar.prototype.calc = function() {
    const num1 = this.valor;
}

Testar.prototype.calc2 = function() {
    const num2 = this.valor2;
}

Testar.prototype.calcular = function() {

}

const t1 = new Testar(5, 5);
console.log(t1);