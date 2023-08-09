// Product -> raise and discount
// T-shirt = cor, material
function Products(name, price) { // Molde -> Constructor 
  this.name = name; // Keys from object
  this.price = price;
}

      // Methods from Object -> Products

Products.prototype.raise = function (amaount) {
  this.price += amaount;
};

Products.prototype.descount = function (amaount) {
  this.price -= amaount;
};

Products.prototype.percent = function(percent = 0) {
  this.price = this.price + (this.price * (percent / 100));
};

function Tshirt(name, price, color) { // Molde -> Constructor 
 Products.call(this, name, price, color); // Passando esse objeto e os parametros | herdando
 this.color = color; // adicionando novo metodo
}

    // Obeject.create() passando os prototypes de Products para Objeto Tshirt
Tshirt.prototype = Object.create(Products.prototype);
Tshirt.prototype.constructor = Tshirt;    // Devolvendo o construtor de Tshirt.


function Caneca(name, price, material, estoque) {
  Products.call(this, name, price, material);
  this.material = material;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if(typeof valor !== "Number") return;
      estoque = valor;
    },

  });
}

Caneca.prototype = Object.create(Products.prototype);
Caneca.prototype.constructor = Caneca;

const copo = new Caneca("Caneca", 19.99, "Cerâmica", 7);
const camiseta = new Tshirt("Regata", 26.99, "Preta"); 


console.log(copo);
console.log(copo.estoque);
console.log(camiseta);