class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
  
    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
        }
  
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  const mago = new Heroi('Harry', 68, 'mago');
  const guerreiro = new Heroi('Bárbaro', 20, 'guerreiro');
  const monge = new Heroi('Lee Silva', 40, 'monge');
  const ninja = new Heroi('Kakashi', 35, 'ninja');
  
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();
  