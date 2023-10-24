function getRandom(min, max) {
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
           resolve(msg) 
        }, time);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject

const promisesArray = [
    "Valor 1",
    wait("promise 1", getRandom(1,5)),
    wait("promise 2", 3000),
    wait("promise 3", 2500),
    "Valor 2"
];

Promise.all(promisesArray)
    .then(function(val){
        console.log(val);
    })
    .catch(function(e) {
        console.log(e);
    });

function downloadPage() {
    const inCache = false;

    if(inCache) {
      return Promise.resolve("Pag em cache");
    } else {
      return wait("Baixou a pag", getRandom(1, 3));
    }
}

downloadPage()
    .then(datas => {
        console.log(datas);
    })
    .catch(e => console.log(e));