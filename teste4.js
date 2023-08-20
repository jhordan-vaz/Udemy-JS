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
  let holder = true;
  let a = this.a;
  let b = this.b;
  let c = this.c;

  if(typeof a === "string" || a <= 0 || a === undefined) return console.log(`Invalid A`);
  if(typeof b === "string" || b <= 0 || b === undefined) return console.log("Invalid B"); 
  if(typeof c === "string" || c <= 0 || c === undefined) return console.log("Invalid C"); 
  
  return holder;
};

Teste.prototype.isValid = function() {
  let 
  return console.log(`A: ${this.a}, B: ${this.b}, C: ${this.c}`);
};

const t1 = new Teste("a", 2, 3);
t1.testar();
t1.isValid();

// let hora = 11;

// if(hora >= 0 && hora <= 11) {
//   return console.log("Bom dia!");
// } else if (hora >= 12 && hora <= 17)  {
//   return console.log("boa tarde!");
// } else if (hora >= 18 && hora <= 23) {
//   return console.log("Boa noite!");
// } else {
//   console.log("Tenha um bom dia!");
// }