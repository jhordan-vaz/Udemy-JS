// let cpf = "705.484.450-52"; // variável recebendo meu CPF
// let cleanCPF = cpf.replace(/\D+/g, ""); // regex Limpa os [ .  - ] do CPF 

function ValidCPF(sentID) { 
    Object.defineProperty(this, "cleanCPF", {
        get: () => {
            return sentID.replace(/\D+/g, ""); 
        },
    });
}

ValidCPF.prototype.validate = function() {
    if(typeof this.cleanCPF === "undefined") return false;
    if(this.cleanCPF.length !== 11) return false;
    const generateID = this.cleanCPF.slice(0, -2);
    const digit1 = this.generateDigit(generateID);
    return true;
};

ValidCPF.prototype.generateDigit = function(generateID) {
    const idArray = Array.from(generateID);
    console.log(idArray);
};

// const cpf = new ValidCPF("705.484.450-52");
// console.log(cpf.validate());



function GetIMC(peso, altura) {
  this.peso = peso;
  this.altura = altura;
//   Object.defineProperties(this, "clearIMC",{
//     get: () => {
//         return;
//     }
//   });
}

GetIMC.prototype.validar = () => {
    if(typeof this.peso === 'undefined') return console.log(this.peso);
    if(this.peso <= 0) return false;
    
    if(typeof this.altura === 'undefined') return console.log(this);
    if(this.altura <= 0) return false;
   
    return true;
};

GetIMC.prototype.calc = function(calc) {
    const p = this.peso;
    const a = this.altura;

    const healty = calc;
    const isHealty = this.isHealty(healty);
    
    calc = this.peso / (this.altura * this.altura);
    
    return console.log(isHealty)
};

GetIMC.prototype.isHealty = function(healty) {
 
    // console.log(healty);
    
    // const healtyArray = [
    //     {imc: 18.5,},
    //     {imc: 18.6 }, 
    //     {imc: 24.9 }, 
    //     {imc: 29.9 }, 
    //     {imc: 30.0 }, 
    //     {imc: 34.9 }, 
    //     {imc: 35.5 }, 
    //     {imc: 39.9 }, 
    //     {imc: 40 },
    // ]

    // return healtyArray;
};

const imc = new GetIMC(84, 1.80);
console.log(imc.calc());



