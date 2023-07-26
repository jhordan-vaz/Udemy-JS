const form = document.querySelector(".form"); // selecionando a classe
  
const inputName = document.getElementById("#getName"); // selecionando todos o
const inputLastame = document.getElementById("#getLastname");

const inputEmail = document.getElementById("#getEmail");

const inputAge = document.getElementById("#getAge");

const inputPassword = document.getElementById("#password");
const inputPasswordConfirm = document.getElementById("#confirmPassword");

form.addEventListener("submit",  (e) => { // passando uma função pra ouvir o evento
    e.preventDefault(); // previnir restart da pág que é padrão do navegador
    if (inputEmail.value == "") {
      textForm.textContent = "Os campos não podem estar vazios!"
    } else if (isEmail(inputEmail.value) === true) {
      return alert("Funfou!");
    }

    const email = 

    // Envia se todos os campos estiverem corretos e preenchidos. (envia o form).
    form.submit();
});
 
  inputEmail.addEventListener("keyup", () => {
    if(isEmail(inputEmail.value) !== true) {
      textgetEmail.textContent = "o formato está errado!";
    } else {
      textgetEmail.textContent = "";
    }
  });

    //Expressão regular
  function isEmail(email) { 
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email);
  }


    // criar mensagem de erro dinamica
  function createMsg() {
    const cMsg = document.createElement("msg"); // para criar o elemento "msg"
    return cMsg;
  }

  function setValid(msg, isValid) { // validando 
    const valid = document.querySelector(".form");
    valid.innerHTML = " ";

    const createMsg = cMsg(msg); // pegando "msg" de setValid
    
    if(isValid) {
      msg.classList.add("msg-erro");
    } else {
      msg.classList.add("bad result");
    }
  }


















// if(getLastname.value === "" || getName.value != Text) return alert("Sobrenome");
// if(getEmail.value === "" || getName.value != Text) return alert("Email");
// if(getAge.value === "" || getName.value != Text) return alert("Idade");
// if(password.value === "" || getName.value != Text) return alert("Senha");
// if(confirmPassword.value === "" || getName.value != Text) return alert("Confirmar senha");