const nomes = ["Zero", "Primeiro", "Segundo", "Terceiro", "Quarto", "Quinto"];

const cloneNomes = ["Teste", ...nomes];

const ascendente = nomes.shift();
const removido = nomes.pop();

console.log(nomes);

console.log(ascendente);
console.log(nomes);

console.log(removido);
console.log(nomes);

nomes.push("adicionando ao last index do array");
console.log(nomes);