/*
Operadores Lógicos

&& -> AND -> E Todas as expressoes precisam ser verdadeira para retornar true
|| -> OR -> OU Só retorna false se todas estiverem iguais, diferentes dao true
! -> NOT -> NÃO
*/

const expressaoAnd = true && true && false && true;
const expressaoOr = true || false;
console.log();

const usuario = "Jhordan"; // form usuario digitou
const senha = "123456"; // form usuario digitou

//                        true               false
const vaiLogar = usuario === "Jhordan" && senha === "123456";
console.log(vaiLogar);

console.log(!false); // negando o valor o false é verdadeiro