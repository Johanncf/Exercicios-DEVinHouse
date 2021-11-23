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
        if (endereco instanceof Endereco) {
            this.nome = nome;
            this.cpf = cpf;
            this.endereco = [];
            this.endereco.push(endereco);
            this.numCel = numCel;
        }
    }
    
    adicionaEndereco(endereco) {
      if (endereco instanceof Endereco) {
        this.endereco.push(endereco)
      }
    }
}

class Conta { 
    constructor(numConta, saldo, cliente) {
        if (cliente instanceof Cliente) {
            this.numConta = numConta;
            this.saldo = saldo;
            this.Cliente = cliente;
        }
    }
}
