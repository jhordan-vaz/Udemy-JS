class validaIMC {
  constructor(height, weight) {
    Object.defineProperty(this, "imc", {
      writable: true,
      enumerable: true,
      configurable: false,
    });
  }

  getIMC(height, weight) {
    const calcIMC = this.imc;
  }
  
  static calcIMC(height, weight) {
    let imc = height / (weight * weight);
  }

}

let totalIMC = new validaIMC(1.80, 80);

