const falar = { // se modificar esse metodo aqui ele tambem modifica em prototype
  falar() { 
    console.log(`${this.nome} está falando.`);
  }
};

const cantar = { 
  cantar() {
    console.log(`${this.nome} ${this.sobrenome} está cantando.`)
  }
};

const pessoaPrototype = Object.assign({}, falar, cantar);

// const pessoaPrototype = { ...falar, ...cantar };


function createPerson(nome, sobrenome) { // factory func
  return Object.create(pessoaPrototype, { // criando um objeto usando "pessoaPrototype".
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = createPerson("jhordan", "Vaz"); 
const p2 = createPerson("Leticia", "Vaz"); 
p1.cantar();
p2.falar();