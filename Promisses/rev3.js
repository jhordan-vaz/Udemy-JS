function getRandom(min, max) {
    min *= 1000;
    max *= 1000;
    Math.floor(Math.random() * (min - max) + min);
}

function await(msg, timer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
        }, timer);
    });
        
}