function getRandom(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") reject("Bad Value");
        
        setTimeout(() => {
            resolve(msg);
        }, time);
    });


    
}

wait("1", getRandom(1, 3))
    .then(response => {
        console.log(response);
        return wait("2", getRandom(1, 3));
    })
    .then(response => {
        console.log(response);
        return wait(222, getRandom(1, 3));
    })
    .then(response => {
        console.log(response)
    })
    .then(() => {
        console.log("Finished");
    })
    .catch(e => {
        console.log("Erro:", e)
    });