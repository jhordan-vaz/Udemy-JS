// Inhertance with Classes

class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    
    if(this.ligado) {
      console.log(this.nome + " já ligado");
      return;
    }
    this.ligado = true;

  }

  desligar() {
    if(!this.ligado) {
      console.log(this.nome + " já desligado");
      return;
    }

    this.ligado = false;
  }
}

// const d1 = new DispositivoEletronico("Smartphone");
// d1.ligar();
// d1.ligar();
// console.log(d1);

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);

    this.cor = cor;
    this.modelo = modelo;
  }
}

class VideoGame extends DispositivoEletronico {
  constructor(nome, modelo, cor) {
    super(nome)
    this.modelo = modelo;
    this.cor = cor;
  }
  ligar() {
    console.log("Substituiu");
  }
  falaOi() {
    console.log("Salve");
  }
}

const s1 = new Smartphone("Samsung", "Preto", "Galaxy S10");
console.log(s1);

const vG = new VideoGame("PS5", "Slim", "Preto");
console.log(vG);

vG.falaOi();