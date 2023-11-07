const request = obj => { // função XML request
  const xhr = new XMLHttpRequest(); // usando construtor do xml
  xhr.open(obj.method, obj.url, true); // passando method, url e se é assincrono
  xhr.send(null); // envio de formulários etc...

  xhr.addEventListener("load", () => { // evento tipo load
    if(xhr.status >= 200 && xhr.status <= 300) { // status code
      obj.success(xhr.responseText); // atrela uma função para resposta 
    } else {
      obj.error(xhr.statusText); // atrela uma função para o erro
    }
  });
};

document.addEventListener("click", e => { // evento tipo click 
  const el = e.target; // elemento recebe evento.alto
  const tag = el.tagName.toLowerCase(); // pega o alvo do elemento e transforma em lowerCase

  if(tag === "a") { // a tag for um link "a"
    e.preventDefault();
    loadPage(el); // carrega pagina "link"
  }
});

function loadPage(el) { // recebe o elemento
  const href = el.getAttribute("href"); // href pega o atributo href do html "a"
  console.log(href); 
  request({ // passando o OBJ da funçao request
    method: "GET", 
    url: href,
    success(respose) {
      loadResponse(respose);
    },
    error(errorText) {
      console.log(errorText);
    }
  });

}


function loadResponse(response) { 
  const load = document.querySelector(".receiver")
  load.innerHTML = response;
};



// function random(min, max) {
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (min - max) - min);
// }

// function awaitSync(msg, time) {
//     new Promise((resolve, reject) => {
//         if(msg !== "string") reject("Bad Value!");
//         setTimeout(() => {
//             resolve(msg);
//         }, time);
//     });
// }

// async function teste() {

//     async function teste("funfou?", random(1, 3));
//     console.log()

// }