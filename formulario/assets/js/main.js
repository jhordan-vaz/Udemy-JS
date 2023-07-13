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
        const validPassword = this.checkPassword();
    }

    checkPassword(){
      let valid = true;

      const password = this.formulario.querySelector(".senha");
      const repassword = this.formulario.querySelector(".repetir-senha");

      if(password.value !== repassword.value){
        valid = false;
        this.createErro(password, "Os campos de senha tem que ser iguais.");
        this.createErro(repassword, "Os campos de senha tem que ser iguais.");
      }

      if(password.value.length < 6 || password.value.length > 12) {
        valid = false;
        this.createErro(password, "Senha precisa estar entre 6 e 12 caracteres.");
      }

      return valid;
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

      return valid;
    }

    validUsuario(field) {
      const usuario = field.value;
      let valid = true;

      if(usuario.length < 3 ||  usuario.length > 12) {
        this.createErro(field, "Usuário precisa ter entre 3 e 12 caracteres")
        valid = false;
      }

      // if(!usuario.match(/^[a-zA-Z0-9]+$/g)) { // verificar caracteres
      //   this.createErro(field, "Nome de usuário precisa conter apenas letras e/ou números.")
      //   valid = false;
      // }

      return valid;
    }

    validCPF(field) {
      const cpf = new validaCPF(field.value);
  
      if(!cpf.valida()) {
        this.createErro(field, "CPF inválido.");
        return false;
      }
      
      return true;
    }

    createErro(field, msg) {
      const div = document.createElement("div");
      div.innerHTML = msg;
      div.classList.add("error-text");
      field.insertAdjacentElement("afterend", div); // criar um elemento de erro.
    }
} 

const valida = new ValidaFormulario();