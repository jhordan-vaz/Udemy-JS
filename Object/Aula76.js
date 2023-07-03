// Inhertance 
//Product -> increase, descount
// Camisa = cor, Caneca = material

function Product(nome, price) { // Constructor function
  this.nome = nome;
  this.price = price;
}

Product.prototype.increase = function (value) {
  this.price += value;
};

Product.prototype.descount = function (value) {
  this.price -= value;
};

function Camiseta(nome, price, cor) { // Constructor Func
  Product.call(this, nome, price);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Product.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.increase = function(percent) {
  this.price = this.price + (this.price * (percent / 100));
}

function Caneca(nome, price, material, cor, stock) {
  Product.call(this, nome, price)
  this.material = material;
  this.cor = cor;
  this.stock = stock;

  Object.defineProperty(this, "stock", {
    enumerable: true,
    configurable: false,
    get: function() {
      return stock;
    },
    set: function(valor) {
      if(typeof valor !== "number") return; 
        stock = valor;
    }
  });
 }

Caneca.prototype = Object.create(Product.prototype); //link de proto
Caneca.prototype.constructor = Caneca; // retornando proto com nome de "Caneca"

const camiseta = new Camiseta("Blusa", 49.99, "Preta");
const caneca = new Caneca("Caneca", 19.99, "Cerâmica" ,"Roxo", 7);
caneca.stock = 15; // Setter

console.log(caneca);
console.log(caneca.stock); //Getter
console.log(camiseta);


