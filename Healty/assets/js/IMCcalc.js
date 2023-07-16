// class validaIMC {
//   constructor(imc) {
//     Object.defineProperty(this, "imc", {
//       writable: true,
//       enumerable: true,
//       configurable: false,
//     });
//   }


//    calcIMC(height, weight) {
//     let imc = height / (weight * weight);
//   }

// }

// let totalIMC = new validaIMC(1.80, 80);

function CalcIMC(peso, altura){
    this.peso = peso
    this.altura = altura

    this.calcIMC = function() {
      let imc;
      imc = this.peso / ( this.altura * this.altura);
      console.log(imc);
  };
}

const imc1 = new CalcIMC(80, 1.80);
imc1.calcIMC();
