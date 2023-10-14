/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, prop)
...(spread)

Object.keys(retorna chaves)
Object.freeze(congela o obj)
Object.defineProperties ( define varias propriedades)
Object.defineProperty( define uma propriedade)
*/

const product = { nome: "garrafa", preco: 20.0 };
const outraCoisa = Object.assign({}, product, {cor: "Preto", material: "Plástico"});

Object.defineProperty(product, "nome", {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(product, "nome"));
product.nome = "Não muda!";
console.log(product);

// console.log(product);
// console.log(outraCoisa);