// Obj Date

// const data = new Date("2023-04-20 20:20:59.100"); // a , m, d, h, M, s, ms
// console.log("Dia", data.getDate()); 
// console.log("Mês", data.getMonth() + 1); // Mes começa do zero
// console.log("Ano", data.getFullYear());
// console.log("Hora", data.getHours());
// console.log("Min", data.getMinutes());
// console.log("Seg", data.getSeconds());
// console.log("ms", data.getMilliseconds());
// console.log("Dia semana", data.getDay()); // 0 - domingo, 6 - sábado
// console.log(data.toString());
// console.log(Date.now());

function zeroEsquerda (num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroEsquerda(data.getDate());
  const mes = zeroEsquerda(data.getMonth() + 1);
  const ano = zeroEsquerda(data.getFullYear());
  const hora = zeroEsquerda(data.getHours());
  const min = zeroEsquerda(data.getMinutes());
  const seg = zeroEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
