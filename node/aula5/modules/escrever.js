const fs = require("fs").promises;

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados , { flag: "w" }); // substituir w por a cria append
};

