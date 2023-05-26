// try {
//   // É executada quando não há erros
// } catch (e) {
//   // É exetuada quando há erros
// } finally {
//   // Sempre
// }

// try {
//   console.log("Abri um arquivo");
//   console.log("Manipulei o arquiivo e gerou erro");
//   console.log("Fechei o arquivo");
// } catch (e) {
//   console.log("Tratando o erro");
// } finally {
//   console.log("Eu sempre sou executado");
// }

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
}

try { 
const data = new Date("01-01-1970 12:58:32");
const hora = retornaHora(data);
console.log(hora);
} catch(e) {
  // tratar erro
  // console.log(e)
} finally {
  //console.log("Resolvido")
}