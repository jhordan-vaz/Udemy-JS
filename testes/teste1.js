// let a = 80;
let b = 1.80;
let c = a / (b * b);
let d = c;

c = Number(c.toFixed(2)); 
console.log(c);

if (d <= 18.3) {
    console.log("Abaixo do peso.");
} else if (d >= 18.4 && d <= 24.8) {
    console.log("Peso normal.");
} else if (d >= 24.9 && d <= 29.9) {
    console.log("Sobrepeso.");
} else if (d >= 30 && d <= 34.9 ) {
    console.log("Obesidade 1");
} else if (d >= 35 && d <= 39.9) {
    console.log("Obesidade grau 2");
} else if (d >= 40) {
    console.log("Obesidade grau 3");
}

/*

  if (imc >= 39.9) {
     return nivel[5];
  } 
  
  if (imc => 34.9)  {
     return nivel[4];
  } 

  if (imc => 29.9)  {
     return nivel[3];
  } 

  if (imc => 24.9)  {
     return nivel[2];
  }

  if (imc => 18.5)  {
     return nivel[1];
  }
   
  if (imc < 18.5) {
   return nivel[0];
  }

*/

/*

function getNivelImc (imc) {
  const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso", "Obesidade grau 1",
  "Obesidade grau 2", "Obesidade grau 3"];

  if (imc >= 39.9) {
      return nivel[5]
  } else if (imc => 34.9)  {
    return nivel[4]
  } else if (imc => 29.9)  {
    return nivel[3]
  } else if (imc => 24.9)  {
    return nivel[2]
  } else if (imc => 18.5)  {
    return nivel[1]
  } else if (imc < 18.5) {
    return nivel[0];
  }

*/


 