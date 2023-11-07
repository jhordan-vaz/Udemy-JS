const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send(null);

    xhr.addEventListener("load", () => {
        if(xhr.status >= 200 && xhr.status <= 300) {
            
        }
    });
}
/*
const request = obj => { // função XML request
    const xhr = new XMLHttpRequest(); // usando construtor do xml
    xhr.open(obj.method, obj.url, true); // passando method, url e se é assincrono
    xhr.send(null); // envio de formulários etc...
  
    xhr.addEventListener("load", () => { // evento tipo load
      if(xhr.status >= 200 && xhr.status <= 300) { // status code
        obj.success(xhr.responseText); // atrela uma função para resposta 
      } else {
        obj.error(xhr.statusText); // atrela uma função para o erro
      }
    });
  };
*/