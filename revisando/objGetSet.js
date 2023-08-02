function Product(name, price, stock) {
  this.name = name;
  this.price = price;

  let privateStock = this.stock; // "privateStock" recebe o valor inicial de "stock"

  Object.defineProperty(this, "stock", {
    configurable: true,
    enumerable: true,
    get: function() {
      return `estoque: ${privateStock}`;
    },
    set: function(valor) {
      if(typeof valor!== "number") {
        throw new TypeError(`Propriedade "estoque" só pode receber números.`);
      }

      privateStock = valor; // privateStock recebe o valor de "valor".
    },
  });
}

const prod1 = new Product("Xcaixa", 1999, 5);
prod1.stock = 4;
console.log(prod1.stock);

// for(let keys in prod1) {
//   console.log(keys);
// }

