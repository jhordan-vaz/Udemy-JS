fetch('./assets/pessoas.json') //Fetch API
.then(response => response.json()) // Cria primeira promise recebendo "response", e enviando json
.then(json => loadElePage((json))); // 2º Promise enviando json para minha função

function loadElePage(json) { // Função recebendo json 
  const table = document.createElement("table"); // criando uma table
  for(let pessoa of json) { // iteração do json
    const tr = document.createElement("tr") // criando linha "tr"

    let td1 = document.createElement("td"); // Criando um TD pra cada coluna
    td1.innerHTML = pessoa.nome; // criando elemento de "arquivo.nome"
    tr.appendChild(td1); // herdando/Inserindo as td's

    let td2 = document.createElement("td");
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);  // herdando/Inserindo as td's

    let td3 = document.createElement("td");
    td3.innerHTML = pessoa.salario;
    tr.appendChild(td3);  // herdando/Inserindo as td's na linha

    table.appendChild(tr); // adicionou a linha na tabela.
  }

  const resultado = document.querySelector(".result");
  resultado.appendChild(table);
}

