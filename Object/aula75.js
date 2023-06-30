// Prototype

// New object -> Object.prototype

const objA = {
  chaveA: 'A'
  // __proto__: Object.prototype
};

const objB = {
  chaveB: 'B'
  // __proto__: objA
};


const objC = new Object();
objC.chaveC = "C";


Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveB);

// Object.getPrototypeOf(objA);


function Product (nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Product.prototype.descount = function (percent) {
  this.preco = this.preco - (this.preco * (percent / 100));
};

Product.prototype.plus = function (percent) {
  this.preco = this.preco + (this.preco * (percent / 100));
};

const p1 = new Product("graphic card", 499);

const p2 = {
  nome: "Tshirt",
  preco: 49
};
Object.setPrototypeOf(p2, Product.prototype);

p2.descount(50);
console.log(p2);

p1.descount(50);
p1.plus(50);
console.log(p1);

const p3 = Object.create(Product.prototype, {
  Preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value:65
  },
  Nome: {
    writable: false,
    configurable: true,
    enumerable: true,
    value:56
  }
});


console.log(p3);