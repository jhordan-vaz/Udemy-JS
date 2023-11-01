// criar uma func de request que vai ter um xhr.

// const req = obj => {
//     const xhr = new XMLHttpRequest(); // utilizar o construtor do xml
//     xhr.open(obj.method, obj.url, true); // mandar o open com o method e url do obj.
//     xhr.send(null);

//     xhr.addEventListener("load", () => {
//        if(xhr.status >= 200 && xhr.status < 300) {
//          obj.success(xhr.responseText);
//        } else {
//         obj.error(xhr.statusText);
//        }
//     });
// };

// document.addEventListener("click", e => { // verifica se o e recebe um click
//     const el = e.target;
//     const tag = el.tagName.toLowerCase(); // verifica se a tagName esta em caixa baixa

//     if(tag === "a") { // se a tag for um "a"/link 
//         e.preventDefault();
//         loadPag(el);
//     }
// });

// function loadPag(el) {
//     const href = el.getAttribute("href"); // pegando do elemento o atributo href
   
//     const objConfig = {
//         method: "GET", // mantando um method "GET" | pegando de const xhr.open(obj.method)
//         url: href, // pegando o parametro de xhr.open
//         success(response) { //callbacks
//            load(response); 
//         },
//         error(errorText) {
//            console.log(errorText);
//         }
//     };
// }



// forma atual 

// const request = obj => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send(null);

//     xhr.addEventListener("load", () => {
//        if(xhr.status >= 200 && xhr.status < 300) {
//          resolve(xhr.responseText);
//        } else {
//          reject(xhr.statusText);
//        }
//     });  
//     })
    
// };

// document.addEventListener("click", e => {
//     const el = e.target;
//     const tag = el.tagName.toLowerCase();
    
//     if(tag === "a") { 
//         e.preventDefault();
//         loadPage(el);
//       }
// });



// async function loadPage(el) {
//     const href = el.getAttribute("href");
   
//     const objConfig = {
//         method: "GET", 
//         url: href, 
//     };
//  try {
//     const response = await request(objConfig);
//       load(response);
//   } catch(e) {
//       console.log(e);
// }
  
    
// }

// function load(response) {
//     const resultado = document.querySelector(".resultado");
//     resultado.innerHTML = response;
// }

