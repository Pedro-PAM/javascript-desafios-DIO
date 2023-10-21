/* desafio escrevendo as classes de um herói */

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        if (this.tipo == "mago") {
                console.log(`o ${this.tipo} atacou usando magia`);
        }
        if (this.tipo == "guerreiro") {
            console.log(`o ${this.tipo} atacou usando espada`);
        }
        if (this.tipo == "monge") {
            console.log(`o ${this.tipo} atacou usando artes marciais`);
        }
        if (this.tipo == "ninja") {
            console.log(`o ${this.tipo} atacou usando shuriken`);
        }
    }    
}

const jonas = new Heroi("jonas",20,"mago");
jonas.atacar();