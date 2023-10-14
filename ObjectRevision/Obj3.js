function Product(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
   
    Object.defineProperty(this, "estoque", {
        //value: estoque,
        //writable: false,
        configurable: false,
        enumerable: true,

        get: function() {
            return estoque;
        },
        set: function(valor) {
           if(typeof valor !== "number") {
            throw new TypeError("Bad Value: Valor de 'estoque' inválido!");
           }
           
           estoque = valor;
        }
    });
}

const p1 = new Product("Monitor", 599.99, 5);

p1.estoque = "500";
console.log(p1.estoque);