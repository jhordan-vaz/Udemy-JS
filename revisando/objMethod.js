const produto = { nome: "Caneta", preco: 1.8};
const prod = { 
  ...produto,
  cor: "vermelho", 
  material: "Plástico",
  estoque: 5,

  product: function(obj) {
    obj = produto;
    return console.log(obj);
  }

};

const caneca = Object.assign({}, produto, prod, {fragil: "Sim" });

Object.freeze(produto);

console.log(produto);
console.log(prod);

caneca.material = "Argila";
caneca.cor = "Marrom";
caneca.estoque = 5000;
console.log(caneca);



// retornaProd(prod);

// prod.nome = "Alterei aqui";

