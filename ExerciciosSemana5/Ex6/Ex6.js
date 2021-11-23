class Endereco {
    constructor(tipo, logradouro, numero, cidade, estado, pais, cep) {
        this.tipo = tipo;
        this.logradouro = logradouro;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
        this.cep = cep;
    }

}

class Cliente { 
    constructor(nome, cpf, endereco, numCel) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = [];
        if (endereco instanceof Endereco) {
            this.endereco.push(endereco);
        }
        this.numCel = numCel;
    }
}

class Conta { 
    constructor(numConta, saldo, cliente) {
        this.numConta = numConta;
        this.saldo = saldo;
        if (cliente instanceof Cliente) {
            this.Cliente = cliente;
        }
    }
}