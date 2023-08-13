// function IdValidation(sentID) {
//   Object.defineProperty(this, "cleanID", { 
//     enumerable: true,
//     get: function() {
//     return sentID.replace(/\D+/g, ""); 
//   }
// });
// }

// IdValidation.prototype.ValidateID = function() {
//   if(typeof this.cleanID === "undefined") return false;
//   if(this.cleanID.length !== 11) return false;
// };

// // IdValidation.prototype.IdCalc() {

// // }

// const id = new IdValidation("071.833.341-12");
// console.log(id.ValidateID());

// if(typeof this.cleanID === "undefined") return false;
//   if(this.cleanID.length !== 11) return false;
//   if(this.isSequence()) return true; 

function ImcCalc(peso, altura) {
  this.peso = peso;
  this.altura = altura;
}

ImcCalc.prototype.calculateIMC = function() {
  if(typeof this.peso != Number) return false;
  if(typeof this.peso.length.Number > 300) return false;
  let resultado = this.peso / (this.altura ** 2);
  return resultado.toFixed(2);
};

ImcCalc.prototype.goodIMC = function() {

};

const imc = new ImcCalc(90, 1.80);
console.log(imc.calculateIMC());
