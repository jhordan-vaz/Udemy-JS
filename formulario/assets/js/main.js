class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector(".formulario");
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener("submit", e => {
          this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.checkFields();
    }

    checkFields() {
      let valid = true;

      for(let field of this.formulario.querySelectorAll(".valid"))  {
        console.log(field)
      }
    }
}

const valida = new ValidaFormulario();