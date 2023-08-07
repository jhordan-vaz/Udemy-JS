// new Object -> Object.prototype
const objA = {
  chaveA: "A"
  // __proto__: Object.prototype
};

const objB = {
  chaveB: "B"
};

const objC = new Object();
objC.chaveC = "C";

// Procurou chaveA em objB -> Depois em objA e encontrou


  // Configura o Objeto    | passa outro objeto.
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);
console.log(objC.chaveB);
console.log(objC.chaveC);

// Construtor

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;

  // nao criar metodos dentro do obj.
};

// os protos de Produto.

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto("violao", 100);

// Obj literal
const p2 = {
  nome: "caneca",
  preco: 15,
}
Object.setPrototypeOf(p2, Produto.prototype); // passando pra p2 o prototype de Produto

//p1.desconto(100);
//p1.aumento(100);

console.log(p1);

p2.aumento(100);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
  nome: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: "Casa",
  },
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
  tamanho2: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 36,
  }
}); // Construtor de P3 é o construtor de Produto

p3.aumento(100);
console.log(p3);
