/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, "prop")
...(spread)

// Já vi
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {nome: "PC", preco: 2000, material: "Polímero" };
// const placa = Object.assign({}, produto, { materuak: "Polímero" });
Object.defineProperty(produto, "nome", {
  writable: false,
  configurable: false
})
console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
console.log(Object.entries(produto));

for(let entry of Object.entries(produto)) {
  console.log(entry);
}