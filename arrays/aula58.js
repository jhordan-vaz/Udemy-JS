//               -5       -4        -3       -2        -1
//                0        1         2        3         4 
const names = ["Maria", "Jhordan", "Filipe", "Samy", "Gabriel"];

// nomes.splice(índice, delete, ele1, ele2);
// pop 
// const removidos = names.splice(3, 2, "Katarina", "Rengar");
// console.log(names, removidos);

// unshift
names.splice(2, 0, "Jhordan", "Vaz");
console.log(names);