class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataques = {
            'mago': 'usou magia',
            'guerreiro': 'usou espada',
            'monge': 'usou artes marciais',
            'ninja': 'usou shuriken'
        };
        console.log(`o ${this.tipo} atacou usando ${ataques[this.tipo]}`);
    }
}

// Exemplo de uso
let heroi = new Heroi('Nome', 25, 'mago');
heroi.atacar();  // Saída: o mago atacou usando usou magia
