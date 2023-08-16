
function Produtos(nome, valor, cor, estoque) { // Molde || Forma 
  Object.defineProperty(this, estoque, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: estoque,
  });

  this.nome = nome;
  this.valor = valor;
  this.cor = cor;
}

Produtos.prototype.raise = function(val = 0) {
  return this.valor += val;
};

Produtos.prototype.descount = function(val = 0) {
  return this.valor += (this.valor * (val / 100));
};

Produtos.prototype.validate = function() {
  if(this.valor !== Number) return console.log("Valor inválido!");
  if(this.valor === "Undefined") return console.log("Valor não pode estar vazio");
};

Produtos.prototype.caller = function() {
  let templateString;
  templateString =  `Nome: ${this.nome}, Valor: ${this.valor}.`
  return console.log(templateString);
};

const p1 = new Produtos("Iphone 14" , 10, "black", 8);
p1.descount(0);
p1.caller();
