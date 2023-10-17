// Prototype

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.falarNome = () => {
    return `${this.nome} ${this.sobrenome}`;
}

const p1 = new Pessoa("Jhordan", "Vaz");
// console.log(p1);

const objA = {
    keyA: "A"
};

const objB = {
    keyB: "B"
};

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);


const objC = {
    keyC: "C"
};

console.log(objB.keyA);