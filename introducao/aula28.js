// (condicao) ? "Valor para verdadeiro" : "Valor para falso"

const pontuacaoUsuario = 100;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário nornmal"
console.log(nivelUsuario);

const corUsuario = "Pink";
const corPadrao = corUsuario || "Preta";

console.log(nivelUsuario, corPadrao);

// if (pontuacaoUsuario >= 1000) {
//   console.log("Usuário VIP");
// } else {
//   console.log("Usuário");
// }