class validaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, "")
    });
  }

  isSequence() {
    return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
  }

  valida() {
    if(!this.cpfLimpo) return false;
    if(typeof cpfLimpo != "string") return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequence()) return false;
  }
}

const validacpf = new validaCPF("999.999.999-99");
console.log(validaCPF.valida());