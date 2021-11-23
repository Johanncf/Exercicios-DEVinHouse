// import { Endereco } from "../Ex4/enderecos.js";

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

let novoEndereco = new Endereco('cliente', 'Miguel Angelo', '600', 'Rio de Janeiro', 'RJ', 'Brasil', '20785225')

let novoCliente = new Cliente('Johann', '17378350702', novoEndereco, '21 991952066')

console.log(novoCliente)