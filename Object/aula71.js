// defineProperty - defineProperties

// function Product(nome, preco, estoque) {
//   this.nome = nome;
//   this.preco = preco;
//   this.estoque = estoque;

//   Object.defineProperty(this, "estoque", {
//     enumerable: true, // mostra a chave
//     value: estoque, // valor da chave
//     writable: false, // pode alterar ou nao o valor
//     configurable: true // pode reconfigurar a chave ou nao
//   });
// }

const p1 = new Product("Camiseta", 20, 3);
console.log(p1);

for (let chave in p1) {
  console.log(chave);


Object.defineProperties(this, {
  nome: {
    enumerable: true,
    value: estoque,
    writable: false,
    configurable: true
  },
  preco: {
      enumerable: true,
      value: preco,
      writable: false,
      configurable: true,
    },
  });
}