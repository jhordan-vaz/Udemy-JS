// Factory funtion na calculadora

function createCalculator() {
  return {
   display: document.querySelector(".display"),
   btnClear: document.querySelector(".btn-clear"),
   
   start(){
    this.clickButton();
    this.keyPressedEnter();
   }, 

    keyPressedEnter() {
      this.display.addEventListener("keyup", e => {
        if(e.keyCode === 13) {
          this.doMath();
        }
      });
    },

    clearDisplay() {
      this.display.value = " ";
    },

    doMath() {
      let mathAmount = this.display.value;

      try {
        mathAmount = eval(mathAmount);
        
        if(!mathAmount) {
          alert("Conta inválida!");
          return;
        }

        this.display.value = String(mathAmount);
      } catch(e) {
        alert("Conta inválida!");
        return;
      }
    },

    backspaceNumber() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clickButton() {
      // this -> calculadora
      document.addEventListener("click",function(e) { 
        const el = e.target;
        
        if(el.classList.contains("btn-num")) { // aqui o this é outra coisa, o document que está chamando ela
          this.btnGoToDisplay(el.innerText); // esse this -> virou document.
        }

        if(el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if(el.classList.contains("btn-del")) {
          this.backspaceNumber();
        }

        if(el.classList.contains("btn-eq")) {
          this.doMath();
        }

      }.bind(this)); // invés de usar o "seu" this usa o "meu". Trazendo o this anterior (lockando o this).
    },

    btnGoToDisplay(valor) {
      this.display.value += valor; 
    }

  };
}

const calculator = createCalculator();
calculator.start();