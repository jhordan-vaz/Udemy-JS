let a = 86;
let b = 1.80;
let imc = a / (b * b);

function calcularIMC () {
  
   imc = a / (b * b)
   imc = Number(imc.toFixed(2)); 

   console.log(imc)

   if (imc <= 18.3) {
    console.log("Abaixo do peso.");
} else if (imc >= 18.4 && imc <= 24.8) {
    console.log("Peso normal.");
} else if (imc >= 24.9 && imc <= 29.9) {
    console.log("Sobrepeso.");
} else if (imc >= 30 && imc <= 34.9 ) {
    console.log("Obesidade 1");
} else if (imc >= 35 && imc <= 39.9) {
    console.log("Obesidade grau 2");
} else if (imc >= 40) {
    console.log("Obesidade grau 3");
}
   
}

calcularIMC();

   



/*
function healtyIMC (peso, altura, imc) {
    imc = a / (b * b);
   

    if (imc <= 18,5) {
        console.log("Abaixo do peso!");
    } else if (imc <= 19,0 && imc >= 24,9 ) {
        console.log("Peso normal!");   
    } else if (imc <= 25 && imc >= 29,9) {
        console.log("Sobrepeso!");
    } else if (imc<= 30,9 && imc >= 34,9) {
        console.log("Obesidade grau 1!");
    } else if (imc <= 35 && imc >= 39,99) {
        console.log("Obesidade grau 2!");
    } else if (imc >= 40) {
        console.log("Obesidade grau 3!");
    } else ("Gordão p krl hein!") 
    
    
    console.log(imc);
  }
  
  healtyIMC();



function healtyIMC() {
    if (c <= 18.5) {
        console.log("Abaixo do peso!");
    } else if (c <= 19.0 && c >= 24.9 ) {
        console.log("Peso normal!");   
    } else if (c <= 25.1 && c >= 29.9) {
        console.log("Sobrepeso!");
    } else if (c<= 30.9 && c >= 34.9) {
        console.log("Obesidade grau 1!");
    } else if (c <= 35 && c >= 39.99) {
        console.log("Obesidade grau 2!");
    } else if (c >= 40) {
        console.log("Obesidade grau 3!");
    } else ("Gordão p krl hein!") 
}

*/