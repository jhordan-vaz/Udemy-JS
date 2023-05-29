function clock() {

function getTimeFromSeconds(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC"
  });
}

const relogio = document.querySelector(".relogio");

let segundos = 0;
let timer;

function startClock() {
   timer = setInterval(function() {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 1000);
}

document.addEventListener("click", function(e) {
  const el = e.target;
  
  if(el.classList.contains("iniciar")) { 
   relogio.classList.remove("pausado");
   clearInterval(timer);
   startClock();
   }

  if(el.classList.contains("zerar")) { 
    clearInterval(timer);
    relogio.classList.remove("pausado");
    relogio.innerHTML = "00:00:00";
    segundos = 0;;
   }


   if(el.classList.contains("pausar")) { 
   clearInterval(timer);
   relogio.classList.add("pausado");
   }
 });
}

clock();
/*
iniciar.addEventListener("click", function(e) {
  relogio.classList.remove("pausado");
  clearInterval(timer);
  startClock();
});

pausar.addEventListener("click", function(e) {
  clearInterval(timer);
  relogio.classList.add("pausado");
});

zerar.addEventListener("click", function(e) {
  clearInterval(timer);
  relogio.innerHTML = "00:00:00";
  segundos = 0;
});

const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

*/