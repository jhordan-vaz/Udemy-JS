fetch('./assets/pessoas.json')
.then(response => response.json())
.then(json => loadElePage((json)));

function loadElePage(json) {
  for(let pessoa of json) {
    console.log(pessoa.nome);
  }
}