// function await(msg, timer) {
//     return new Promise((resolve, reject) => {
//         if(typeof msg !== "string") return reject("Bad Value!");
//         setTimeout(() => {
//             resolve(msg);
//         }, timer);
//     });
        
// }

// function getRand(min, max) {
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function randNum(num) {
//     num = getRand(1, 5);
//     return console.log(num);
// }

// randNum();


document.addEventListener("click", e => {
    e.preventDefault();
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === "a") {
        alert("Clicou no link!")
    };
});

