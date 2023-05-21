const elementos = [ 
  {tag: "p", texto: "Qualquer coisa"},
  {tag: "div", texto: "Frase 2"},
  {tag: "footer", texto: "Frase 3"},
  {tag: "section", texto: "Frase 4"},
];

const container = document.querySelector(".container");
const div = document.createElement("div"); // criando a "div"

//a cada iteração do laço ele cria uma tag do "elementos"
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];  // destruturação do "elementos"
    let tagCriada = document.createElement(tag); // var que cria as tags
    tagCriada.innerHTML = texto; // .innerText 
    div.appendChild(tagCriada); // adicionando a tag dentro da "div"
}

container.appendChild(div); // container do HTML