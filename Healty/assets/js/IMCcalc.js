class saberIMC {
  constructor(peso, altura) { // parametro formal
    Object.defineProperty(this, "imc", { // definindo sobre o objeto e globalizando ele
      writable: true, 
      enumerable: true,
      configurable: false, 
    });
  }

  static calcula() {
    const cPeso = saberIMC.peso;
    const cAltura = saberIMC.altura;

    let resultado;

    resultado = peso / (altura * altura);
    return console.log(resultado.toFixed(2)); 
  }

}

// let imc = new saberIMC(80, 1.80);
let imc = new saberIMC(80, 1.80, calcula());