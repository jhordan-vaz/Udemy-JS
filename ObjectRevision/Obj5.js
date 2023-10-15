// Prototype

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.falarNome = function () {
    return `${this.nome} ${this.sobrenomenome}`
}

const p1 = Pessoa("Jhordan", "Vaz");
console.log(p1);