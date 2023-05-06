let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A
let HolderA = varA;

varA = varB;
varB = varC;
varC = HolderA;


console.log(varA, varB, varC);