function Product(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, "estoque", {
        enumerable: true, // mostra a chave
        value: estoque, // valor da chave
        writable: false, // escrever na chave
        configurable: false // pode editar/apagar a chave 
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor da chave
            writable: true, // escrever na chave
            configurable: true // pode editar/apagar a chave 
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor da chave
            writable: true, // escrever na chave
            configurable: true // pode editar/apagar a chave 
        },
    });
}

const p1 = new Product("Regata", 20, 3);
console.log(Object.keys(p1));

for (let key in p1) {
    console.log(key);
}