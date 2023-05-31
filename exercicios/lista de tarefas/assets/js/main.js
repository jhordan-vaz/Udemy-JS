const inputTarefa = document.querySelector(".input-tarefa");
const addTarefa = document.querySelector(".add-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() { // esse li é protegido por escopo de função, só dela.
  const li = document.createElement("li"); // função que só vai criar um li.
  return li;
}

inputTarefa.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) { // capturando se alguma tecla específica foi pressionada.
    if (!inputTarefa.value) return; // se diferente do input retorna o valor " "
    criaTarefa(inputTarefa.value);  // se o input tiver algum valor retorna com valor.
  } 
});

function limpaInput() {
  inputTarefa.value = ""; // limpa o valor do input no campo de texto.
  inputTarefa.focus(); // evento de foco no campo selecionado do HTML.
}

function criarBotaoApagar (li) { // recebe li/ul para saber aonde quer adicionar o botão/função.
  li.innerText += " "; // dando um espaço entre o botao e o texto.
  const botaoApagar = document.createElement("button"); // cria o botao.
  botaoApagar.innerText = "apagar"; // adiciona texto dentro do botao.
  botaoApagar.setAttribute("class", "apagar"); // cria classe e seta o valor (apagar) nesse caso.
  botaoApagar.setAttribute("title", "Apagar esta tarefa."); // cria um titulo e se deixar o cursor no botao mostra um texto.
  li.appendChild(botaoApagar); // recebendo heranca/funcao.
  //botaoApagar.classList.add("apagar");
}

function criaTarefa(textoInput) { // função para crir uma "tarefa".
  const li = criaLi(); // esse li tá recebendo dados da outra const li "criarLi".
  li.innerText = textoInput; // passando o texto criado para o parâmetro da função.
  tarefas.appendChild(li); // recebendo uma "criança/classe". enviado a classe para "ul-html"
  limpaInput(); // apos der enter limpa o campo de texto.
  criarBotaoApagar(li);
  salvarTarefas();
}

addTarefa.addEventListener("click", function() { // pega o click do botao.
  if (!inputTarefa.value) return; // se o valor for vazio retorna o texto do campo.
  criaTarefa(inputTarefa.value); // pega o texto que tá no campo e cria a tarefa.
});

document.addEventListener("click", function(e) {
  const el = e.target;

  if(el.classList.contains("apagar")) { // se a lista da classe conter "função/variavel".
    el.parentElement.remove(); // remove pai/mae do elemento selecionado atraves do atributo de cima.
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li"); // selecionando da variável todas as "li/ul"
  const listaDeTarefas = []; // array pra salvar as li

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText; // pegando o texto da variavel tarefa.
    tarefaTexto = tarefaTexto.replace("apagar", "").trim(); // substituindo a palavra "apagar" por nada "".
    listaDeTarefas.push(tarefaTexto); // jogando os textos para o Array.
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas); // JSON que "Stringficou" o array
  localStorage.setItem("tarefas", tarefasJSON); // para salvar local, recupera de tarefas o valor de tarefasJSOn.
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas"); // pegando o item do localstorage.
  const listaDeTarefas = JSON.parse(tarefas); // convertendo o JSON para a lista de tarefas.
  
  for (let tarefa of listaDeTarefas) { // cada coisa na lista ela recria mesmo apos fechar o chrome
    criaTarefa(tarefa); 
  }
}
adicionaTarefasSalvas()