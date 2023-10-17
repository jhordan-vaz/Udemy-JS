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
    if(this.cleanCPF.lenght !== 11) return false;
    

    return true;
};

ValidCPF.prototype.generateDigit = function(generateID) {
    const idArray = Array.from(generateID);
};

const cpf = new ValidCPF("705.484.450-52");
console.log(cpf.cleanCPF);
console.log(cpf.validate());