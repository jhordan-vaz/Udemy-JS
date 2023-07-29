function Person(name, lastName, weight, height) {
  this.name = name;
  this.lastName = lastName;
  this.weight = weight;
  this.height = height;
 

  // if(this.name != String) { console.log(`O Valor de nome é inválido!`) };
  // if(this.lastName != String) { console.log("O valor de sobrenome é inválido!") };  
//   try {
//     if(weight || height != Number) {
//   this.getImc = function(weight, height) {
//     let imc;
//     imc = weight / (height * height);
//     console.log(imc.toFixed(2));
//     }
//    }
//  } catch (e) {
//   return console.log("erro")
//  }

}

const imc = function calcIMC(peso, altura) { 
  let result = peso / (altura * altura);
  return console.log(result.toFixed(2));
 
}

let resultado = new Person;
const p1 = new Person("Jhordan", "Vaz", 1.80, 80);
imc(80, 1.80);

// function expression
let fala = function falaOi() { // passando essa funcao para funcao de baixo
  console.log("Salve!");
}

function executaFunction(naoImportaNome) { // no meu param eu recebi uma função
  naoImportaNome(); // chamando a funcao
}
executaFunction(fala);

// Arrow function 

const funcArrow = () => {
  console.log("uma arrow func");
};
funcArrow();

const obj = {
  falar() {
    console.log("Salve");
  }
}

obj.falar();