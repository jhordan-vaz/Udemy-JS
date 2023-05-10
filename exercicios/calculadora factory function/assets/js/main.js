// Factory funtion na calculadora

function createCalculator() {
  return {
   display: document.querySelector(".display"),
   btnClear: document.querySelector(".btn-clear"),
   
    clearDisplay() {
      this.display.value = " ";
    },

    start(){
     this.clickButton();
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

      }.bind(this)); // invés de usar o "seu" this usa o "meu". Trazendo o this anterior (lockando o this).
    },

    btnGoToDisplay(valor) {
      this.display.value += valor; 
    }

  };
}

const calculator = createCalculator();
calculator.start();