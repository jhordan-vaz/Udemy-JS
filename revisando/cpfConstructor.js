function ValidID(sentID) { // formal param 
  Object.defineProperty(this, "cleanID", { // referindo ao objeto que vai usar ValidID e nome do obj "cleanID"
    enumerable: true, // mostra o "cleanID"
    get: function() {
      return sentID.replace(/\D+/g, ""); // tudo que não for número em "sentID" vai ser retirado.
    }
  });
}
    // criando methods usando proto pra ValidID

ValidID.prototype.IdValidator = function() {   // Valida se o CPF recebido passa nos checks.
  if(typeof this.cleanID === "undefined") return false;
  if(this.cleanID.length !== 11) return false;
  if(this.isSequence()) return true; 
  
  const IdNumbers = this.cleanID.slice(0, -2); // IdNumbers recebe de cleanID | segurando o valor de cleanID
  const type1 = this.IdVerify(IdNumbers);  // passando pra funcao e minha variavel com o valor de "cleanID"
  const type2 = this.IdVerify(IdNumbers + type1); 
  
  const newID = IdNumbers + type1 + type2;
  
  return newID === this.cleanID;
};

ValidID.prototype.IdVerify = function (IdNumbers){  // Convertendo param pra Array.
  const IdArray = Array.from(IdNumbers);
  let regressive = IdArray.length + 1; // adicionando 1 pra aumentar o array para fazer o calculo.
  let type = IdArray.reduce((ac, val) => { // func pra reduzir 
     ac += (regressive * Number(val)); // acumulador recebe ele mais o valor de regressivo vezes o valor.
     regressive--;
     return ac; // retorna a soma de regressive * val.
  }, 0);

  const aftermath = 11 - (type % 11);
  return aftermath > 9 ? "0" : String(aftermath); // se "aftermath" > que 9 retorna 0 se não ele mesmo.
};


ValidID.prototype.isSequence = function(){ // Checando se os numeros do CPF é igual os de cleanID se for sequencia retorna falso.
  const sequence = this.cleanID[0].repeat(this.cleanID.length); 
  return sequence === this.cleanID; // retornando falso cancela a validação.
};

               // Slice(0,          -2)
const id = new ValidID("071.833.341-12");
// id.valid();
console.log(id.IdValidator());
