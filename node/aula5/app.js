const path = require("path");
const filePath =  path.resolve(__dirname, "teste.json");
const escreve = require("./modules/escrever");
const ler = require("./modules/ler");

// caminho aonde quer escrever "filePath"
// criando o arquivo "teste.txt"

// mandando caminho e enviando uma flag pra apagar tudo que contem no arquivo.

// w significa que se o arquivo já existe ele vai apagar tudo que estiver nele e reescrever a frase.
// se por "a" ele dá um append.

const pessoas = [ // criando obj
  {nome: "Jhordan"},
  {nome: "Maria"},
  {nome: "Filipe"},
  {nome: "Amélia"},
  {nome: "Jean"},
  {nome: "Barbara"},
];

// convertendo meu obj pra JSON.
// const json = JSON.stringify(pessoas, "", 2); // a cada espaço "" dê 2 de espaços

// escreve(filePath, json); // recebe caminho e dado de onde eu quero que cria o arquivo.

async function leArquivo(caminho) { 
  const dados = await ler(caminho);
  renderDados(dados);
}

renderDados = (dados) => {
  dados = JSON.parse(dados); // convertendo pra objeto normal.
  dados.forEach( val => console.log(val.nome)); // cada nome tem uma iteração
};

leArquivo(filePath);