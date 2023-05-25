const h1 = document.querySelector(".container h1");
const data = new Date();

function getWeekDay(diaDaSemana) {
  let diaSemanaTexto;

  switch (diaDaSemana) {
  case 0:
    diaSemanaTexto = "Domingo";
    return diaSemanaTexto;
  case 1:
    diaSemanaTexto = "Segunda-feira,";
    return diaSemanaTexto;
  case 2:
    diaSemanaTexto = "Terça-feira,";
    return diaSemanaTexto;
  case 3:
    diaSemanaTexto = "Quarta-feira,";
    return diaSemanaTexto;
  case 4:
    diaSemanaTexto = "Quinta-feira,";
    return diaSemanaTexto;
  case 5:
    diaSemanaTexto = "Sexta-feira,";
    return diaSemanaTexto;
  case 6:
    diaSemanaTexto = "Sábado,";
    return diaSemanaTexto;
  }
}

function getMonthDay(monthDay) {
  let diaDoMesTexto;

  switch (monthDay) {
  case 0:
    diaDoMesTexto = "janeiro";
    return diaDoMesTexto;
  case 1:
    diaDoMesTexto = "fevereiro,";
    return diaDoMesTexto;
  case 2:
    diaDoMesTexto = "março,";
    return diaDoMesTexto;
  case 3:
    diaDoMesTexto = "abril,";
    return diaDoMesTexto;
  case 4:
    diaDoMesTexto = "maio,";
    return diaDoMesTexto;
  case 5:
    diaDoMesTexto = "junho,";
    return diaDoMesTexto;
  case 6:
    diaDoMesTexto = "julho,";
    return diaDoMesTexto;
  case 7:
    diaDoMesTexto = "agosto,";
    return diaDoMesTexto;
  case 8:
    diaDoMesTexto = "setembro,";
    return diaDoMesTexto;
  case 9:
    diaDoMesTexto = "outubro,";
    return diaDoMesTexto;
  case 10:
    diaDoMesTexto = "novembro,";
    return diaDoMesTexto;
  case 11:
    diaDoMesTexto = "dezembro,";
    return diaDoMesTexto;
  }
}

function zeroEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}


function createDate(data) {
  const diaDaSemana = data.getDay();
  const monthDay = data.getMonth();

  const nomeDia = getWeekDay(diaDaSemana);
  const nomeMes = getMonthDay(monthDay);

  return (
    `${nomeDia} ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()} ` +
    `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
  );
}

h1.innerHTML = createDate(data);

/*

const h1 = document.querySelector(".container h1");
const data = new Date();
const opcoes = {
  dataStyle: "full",
  dataStyle: "Short"
};

h1.innerHTML = data.toLocaleDateString("pt-BR", opcoes);
*/

/* comparar depois

const h1 = document.querySelector(".container h1");
const data = new Date();

function getDiaSemana(diaDaSemana) {
  let diaDaSemana;

  switch (diaDaSemana) {
    case 0:
      diaDaSemana = "Domingo";
      return diaDaSemana;
    case 1:
      diaDaSemana = "Segunda-feira,";
      return diaDaSemana;
    case 2:
      diaDaSemana = "Terça-feira,";
      return diaDaSemana;
    case 3:
      diaDaSemana = "Quarta-feira,";
      return diaDaSemana;
    case 4:
      diaDaSemana = "Quinta-feira,";
      return diaDaSemana;
    case 5:
      diaDaSemana = "Sexta-feira,";
      return diaDaSemana;
    case 6:
      diaDaSemana = "Sábado,";
      return diaDaSemana;
  }
}

function getMonthText(monthDay) {
  let monthDay;

  switch (monthDay) {
    case 0:
      monthDay = "janeiro";
      return monthDay;
    case 1:
      monthDay = "fevereiro,";
      return monthDay;
    case 2:
      monthDay = "março,";
      return monthDay;
    case 3:
      monthDay = "abril,";
      return monthDay;
    case 4:
      monthDay = "maio,";
      return monthDay;
    case 5:
      monthDay = "junho,";
      return monthDay;
    case 6:
      monthDay = "julho,";
      return monthDay;
    case 7:
      monthDay = "agosto,";
      return monthDay;
    case 8:
      monthDay = "setembro,";
      return monthDay;
    case 9:
      monthDay = "outubro,";
      return monthDay;
    case 10:
      monthDay = "novembro,";
      return monthDay;
    case 11:
      monthDay = "dezembro,";
      return monthDay;
  }
}

function zeroEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}


function createDate(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();

  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getNomeMes(numeroMes);

  return (
    `${nomeDia}, ${data.getDate()}, ${nomeMes}` +
    `de %{data.getFullYear()} ` +
    `${zeroEsquerda(data.getHours())}: ${zeroEsquerda(data.getMinutes())}`
    );
}

h1.innerHTML = createDate(data);

*/