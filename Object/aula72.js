function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      console.log(valor);
    }
  });
}

function criaProduto(nome) {
  return {
    get nome(){
      return nome;
    },
    set nome(valor){
      nome = valor;
    }
  };
}

// const p1 = new Produto("Camisa", 20, 5);
// p1.estoque = "Valor que eu settar"
// console.log(p1.estoque);
const p2 = criaProduto("Graphic Cards");
console.log(p2.nome)