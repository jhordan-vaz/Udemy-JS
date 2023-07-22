const multiplicacao = require("./mod");

console.log(multiplicacao(2,5));

console.log(__filename);
console.log(__dirname);

const path = require("path");
console.timeLog(path.resolve(__dirname, "..", ".."));

// ./arquivo.js

// ../pasta/arquivo
