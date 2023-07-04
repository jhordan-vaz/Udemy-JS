// Polimorfism

// Superclass | Classe mãe | Classe Pai
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    this.verSaldo();
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
 this.saldo += valor;
 this.verSaldo();
};

Conta.prototype.verSaldo = function() {
  console.log(`Ag/c: ${this.agencia}/${this.conta} | ` + `Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
  if(valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.constructor = CP;

CP.prototype.sacar = function(valor) {
  if(valor > this.saldo ) {
    console.log(`Saldo insuficiente: ${this.saldo}`)
    return;
  }
 };
 
// const cc = new ContaCorrente(101, 202, 0, 100);
// cc.sacar(120);

const cp = new CP(101, 203, 0)
 cp.sacar(120);
 cp.sacar(10);
