function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
} 

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== "string") {
      reject(false); 
      return;
    }

    setTimeout(() => {
      resolve(msg);
    }, time)
  });
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promises = [
  // "Primeiro valor",
  wait("Promise 1", 3000),
  wait("Promise 2", 500),
  wait("Promise 3", 1000),
  // "Outro valor"
];

Promise.race(promises).then(function(valor){
  console.log(valor);
}).catch(function(erro) {
  console.log(erro);
});

