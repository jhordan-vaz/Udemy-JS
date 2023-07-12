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
      
      for(let errorText of this.formulario.querySelectorAll(".error-text")) {
        errorText.remove();
      }

      for(let field of this.formulario.querySelectorAll(".valid"))  {
        const label = field.previousElementSibling.innerText;
       
        if(!field.value) {
          this.createErro(field, `Campo "${label}" não pode estar em branco.`);
          valid = false;
        }

        if(field.classList.contains('cpf')) {
          if(!this.validCPF(field)) valid = false;
        }

        
        if(field.classList.contains('usuario')) {
          if(!this.validUsuario(field)) valid = false;
        }

      }
    }

    validUsuario(field) {
      const usuario = field.value;
      if(usuario.lenth < 3 ||  usuario.length > 12)
      return true;
    }

    validCPF(field) {
      const cpf = new this.validaCPF(field.value);
    
      if(!cpf.valida()) {
        this.createErro(field, "CPF inválido");
        return false;
      }

      return true;
    }

    createErro(field, msg) {
      const div = document.createElement("div");
      div.innerHTML = msg;
      div.classList.add("error-text");
      field.insertAdjacentElement("afterend", div);
    }
} 

const valida = new ValidaFormulario();