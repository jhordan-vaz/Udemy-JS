// Constructor Function -> objets
// Factory Function -> create obj
// Constructor -> Pessoa (new) 

function Pessoa(name, lastName) { // the body automatic creates an object.
  // privadas
  const ID = 123456;
  const metodoInterno = function() {

  };

  // atributos ou métodos privados
  this.name = name;
  this.lastName = lastName;

  this.IMC = function (weight, height) {
    let resultado;
    resultado = weight / (height * height);
    console.log(resultado.toFixed(2));
  }
}

let resultado = Pessoa.IMC;
const p1 = new Pessoa("Jhordan", "Vaz");
const p2 = new Pessoa("Maria", "Clara");

console.log(p1);
p1.IMC(80, 1.80);
