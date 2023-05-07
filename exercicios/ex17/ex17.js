const numero = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Seu número é ${numero}</p>`;
texto.innerHTML += `Raiz quadrada: <strong>${(numero ** 0.5)}</strong> <br/ >`;
texto.innerHTML += `${numero} é inteiro: <strong>${Number.isInteger(numero)}</strong> <br/ >`;
texto.innerHTML += `É NaN: <strong>${Number.isNaN(numero)} </strong> <br/ >`;
texto.innerHTML += `Arredondado para baixo: <strong>${Math.floor(numero)}</strong> <br/ >`;
texto.innerHTML += `Arredondado para cima: <strong>${Math.ceil(numero)}</strong> <br/ >`;
texto.innerHTML += `Com duas casas decimais: <strong>${numero.toFixed(2)}</strong> <br/ >`;

/*
document.body.innerHTML = `Seu número é: <strong>${numero}</strong> <br/ >`;
document.body.innerHTML += `Raiz quadrada: <strong>${(numero ** 0.5)}</strong> <br/ >`;
document.body.innerHTML += `É número inteiro: <strong>${Number.isInteger(numero)}</strong> <br/ >`;
document.body.innerHTML += `É NaN: <strong>${Number.isNaN(numero)} </strong> <br/ >`;
document.body.innerHTML += `Arredondado para baixo: <strong>${Math.floor(numero)}</strong> <br/ >`;
document.body.innerHTML += `Arredondado para cima: <strong>${Math.ceil(numero)}</strong> <br/ >`;
*/