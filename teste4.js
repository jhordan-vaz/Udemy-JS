// function HealthCare(nome, sobrenome, peso, altura) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;
//   this.peso = peso; 
//   this.altura = altura;
// }

// HealthCare.prototype.isValid = function() {
//   if(typeof this.nome != String || this.nome ) return false;
  
// };

// HealthCare.prototype.imcCalc = function() {
//   const imc = this.peso / (this.altura ** 2)
//   return console.log(imc.toFixed(2));
// };

// HealthCare.prototype.infoCare = function(msg) {
//   msg = `Paciente ${this.nome}, Peso: ${this.peso} e altura: ${this.altura}.`;
//   return console.log(msg);
// };



// const h1 = new HealthCare(1, "vaz", 80, 1.80);
// h1.infoCare();
// h1.imcCalc();


function Teste(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
}

Teste.prototype.testar = function () {
  
  let a = this.a;
  let b = this.b;
  let c = this.c;

  // if(a != Number || a < 1) return console.log("Inválid");
  // if(b !== Number || b === 0) return console.log("Valor inválido"); 
  // if(c !== Number || c === 0) return console.log("Valor inválido"); 
  console.log(typeof a);
  return console.log("Passou sem problema.");
};

Teste.prototype.isValid = function(funcTester) {
  funcTester = testar();
  
};

const t1 = new Teste();
t1.testar();