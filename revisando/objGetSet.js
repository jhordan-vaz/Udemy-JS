const fs = require("fs").promises;
const path = require("path") // requerer o caminho de onde vai o arquivo.
const filePath = path.resolve(__dirname, "..", "teste.txt");



module.exports = (path, file) => { // writter 
  fs.writeFile(filePath, "objjson", { flag: "w" });
};

// async function fileWritter (path, file) { // funcao que vai escrever

// } 

function Product(name, price, stock) {
  this.name = name;
  this.price = price;

  Object.defineProperty(this, "stock", {
    configurable: true,
    value: stock,
    enumerable: true,
    writable: true, 
  });
}

const prod1 = new Product("Xcaixa", 1999, 5);
console.log(prod1);

for(let keys in prod1) {
  console.log(keys);
}

