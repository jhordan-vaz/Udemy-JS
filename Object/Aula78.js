// Factory Function + Proto

const falar = {
  falar(){
    console.log(`${this.nome} está falando.`);
  },
}

const vaping = {
  vaping() {
    console.log(`${this.nome} está fumando.`);
  },
}

const jogando = {
  jogando(){
    console.log(`${this.nome} está jogando.`);
  },
}
   const pessoaPrototype = Object.assign({}, falar, vaping, jogando);
// const pessoaPrototype = {...falar, ...vaping};

function criaPessoa(nome, sobrenome,  ) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: {value: sobrenome },
  });
}



const p1 = criaPessoa("Jhordan", "Vaz");
console.log(p1);
p1.falar();