const req = obj => {
  const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send(null);

    xhr.addEventListener("load", () => {
    if(xhr.status )
});
}















// function random(min, max) {
//     min *= 1000;
//     max *= 1000;
//     return Math.floor(Math.random() * (min - max) - min);
// }

// function awaitSync(msg, time) {
//     new Promise((resolve, reject) => {
//         if(msg !== "string") reject("Bad Value!");
//         setTimeout(() => {
//             resolve(msg);
//         }, time);
//     });
// }

// async function teste() {

//     async function teste("funfou?", random(1, 3));
//     console.log()

// }