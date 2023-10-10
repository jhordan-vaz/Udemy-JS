const nomes = ["Zero", "Primeiro", "Segundo", "Terceiro", "Quarto", "Quinto"];

const cloneNomes = ["Teste", ...nomes];

const ascendente = nomes.shift();
const removido = nomes.pop();

console.log(nomes);

console.log(ascendente);
console.log(nomes);

console.log(removido);
console.log(nomes);

nomes.unshift("Primeiro da lista com unshift");
console.log(nomes);

nomes.push("ultimo da lista com push");
console.log(nomes);

let novo = nomes.slice(0, -3) /* quero pegar index 1 até o 2 */
console.log(novo);

// convertendo string para array

const nome = "Jhordan Vaz";
const nome2 = "jhordan, Vaz"
const nomes2 = nome.split(" ");
const nomes3 = nome.split(",");
console.log(nomes2);
console.log(nomes3);

// retornando para string d

const nomes4 = ["Jhordan Weverton Silva Vaz"]
const nome3 = nomes4.join(" ");
console.log(nome3);