// Módulos 


const nome = "Jhord";
const sobrenome = "Vaz";

const falaNome = () => {
  console.log(nome, sobrenome);
};

//module.exports.nome = nome;
//module.exports.sobrenome = sobrenome;
//module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

console.log(exports) // está apontando pra exports de cima.

falaNome();