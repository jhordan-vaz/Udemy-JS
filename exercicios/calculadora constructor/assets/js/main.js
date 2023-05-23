function Calculadora() { // molde
  this.display = document.querySelector(".display");
  
  this.start = () => {
    this.captureClick();
    this.captureEnter();
  };

  this.captureEnter = () => {
    document.addEventListener("keypress", e => {
      if (e.keyCode === 13) return;
      this.realizaConta();
    });
  };

this.captureClick = () => {
  document.addEventListener("click", e => {
    const el = e.target; 
    if (el.classList.contains("btn-num")) this.addNumber(el);
    if (el.classList.contains("btn-clear")) this.clear();
    if (el.classList.contains("btn-del")) this.del();
    if (el.classList.contains("btn-eq")) this.realizaConta();
  });
};



this.realizaConta = () => {
  try {
    const conta = eval(this.display.value);

   if(!conta) {
      alert("Conta inválida");
      return;
    }

    this.display.value = conta;
  } catch(e) {
    alert("Conta inválida!");
    return;
  }
};

this.addNumber = el => {
  this.display.value += el.innerText;
  this.display.focus();
}

this.del = () => this.display.value = this.display.value.slice(0, -1);
this.clear = () => this.display.value = "";
}

const calculadora = new Calculadora(); //  faz o papel do molde
calculadora.start(); 
  

