const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], "Jhordan");
const a4 = [...a3, "Adicionado dps do rest operator"];

console.log(a3);
console.log(a4);