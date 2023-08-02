// defineProperty -> defineProperties

function Product(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  // this.estoque = estoque;  já estou setando em baixo

  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a key
    configurable: false, // pode apagar a key ou editar a key.
    writable: false, // alterar o valor
    value: estoque, // valor da key
  }); 

  // Object.defineProperties(this, {
  //   nome: {
  //     enumerable: true,
  //   },

  //   preco: {
  //     configurable: true,
  //   },

  //   estoque: {
  //     writable: false,
  //   },
  // });

}

const p1 = new Product("Graphic cards", 3999, 10 );
// console.log(p1);
console.log(Object.keys(p1));


for(let key in p1) {
  console.log(key);
}