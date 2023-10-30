function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// function await(msg, timer) {
//    return new Promise((resolve, reject) => {
//       if(typeof msg !== "string") reject("Bad Value");   

//       setInterval(() => {
//           resolve(msg + " Completo");
//       }, timer);
//    });
// }


// await("Fase 1", rand(1, 3))
//    .then(val => { 
//       console.log(val);
//       return await("Fase 2", rand(0, 3))
//    })
//    .then(qualquercoisa => {
//       console.log(qualquercoisa)
//       return await("Fase 3", rand(1, 3));
//    })
//     .then(fase => {
//         console.log(fase);
//     })
//     .catch(e => console.log(e));

function wait(msg, timer) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") reject("Bad Value");
        setTimeout(() => {
            resolve(msg);    
        }, timer);
    });
}


async function exec() {
 try {
   const getSync1 = await wait("fase 1 ", rand(1, 3))
   console.log(getSync1);

   const getSync2 = await wait("fase 2 ", rand(1, 3))
   console.log(getSync2)

   const getSync3 = await wait("fase 3 ", rand(1, 3))
   console.log(getSync3)

   console.log("Acabaram as sincronizações", getSync3);
 } catch(e) {
    console.log(e)
 }
  
}
exec();
