const nomes = ["Jhordan", "Vaz"];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// For clássico - geralmente com iteráveis (arrays ou string)
// For in - retorna o íncide ou chave (string, array, ou objetos)
// For of - retorna o valor em si (iteráveis, array ou strings)

// for (let chave in pessoa) {
//   console.log(chave, pessoa[chave]);
// }

//utilizando a variavel original + o índice
for (let i in nomes) {
  console.log(nomes[i]);
}

// retorna o valor invés do índice 
for (let valor of nomes) { 
  console.log(valor);
}

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});