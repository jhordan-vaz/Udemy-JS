const numeros = [7, 73, 5, 1, 6, 12, 25, 34, 46, 66, 99, 33, 29];

const filtrarPar = numeros.filter((val) => {
    if(val % 2 === 0) return val;
});

console.log(filtrarPar);

const filtrarNum = numeros.filter((val) => {
   return val.toPrecision().endsWith(3);
});

console.log(filtrarNum);

const dobrarVal = numeros.map((val) => {
    return val * 2;
});

console.log(dobrarVal);

const somarTudo = numeros.reduce((ac, val) => {
    return ac += val;  
});

console.log(somarTudo);

const todasAsFunc = numeros
   .filter(val =>  val % 2 === 0)
   .map(val => val * 2)
   .reduce((ac, val) => ac + val);

console.log(todasAsFunc);

// par [ 6, 12, 34, 46, 66 ]
// total 436