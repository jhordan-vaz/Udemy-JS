function mostrarHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false
  });
}

  console.log(mostrarHora());

function funcDoInterval() {
  console.log(mostrarHora());
}

const timer = setInterval(function () {
   console.log(mostrarHora());
}, 1000);


setTimeout(function() {
  clearInterval(timer);
}, 10);

setTimeout(function() {
  console.log("Olá mundo!");
}, 10)