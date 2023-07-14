//promises

function randNumber(min, max){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() *  (max - min) + min);
}

function espera(msg, tempo, cb){
  return new Promise((resolve, reject) => {
    if(typeof msg !== "string") reject("Bad Value");

    setTimeout(() => {
      resolve(msg);
    }, tempo)
  });
}

espera("Frase 1 ", randNumber(1, 3)).then(resposta => {
  console.log(resposta);
  return espera("Frase 2", randNumber(1, 3));
}).then(resposta => {
  console.log(resposta);
  return espera(2222, randNumber(1, 3)); 
}).then(resposta => {
  console.log(resposta)
  return console.log()
}).catch(e => {
  console.log("ERRO:", e);
});
