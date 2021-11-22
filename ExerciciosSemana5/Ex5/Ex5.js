import { Endereco } from "Ex4/enderecos.js";

class Cliente { 
    constructor(nome, cpf, endereco, numCel) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = [];
        this.endereco.push(endereco);
        this.numCel = numCel;
    }
}

let novoEndereco = Endereco('cliente', 'Miguel Angelo', '600', 'Rio de Janeiro', 'RJ', 'Brasil', '20785225')

let novoCliente = Cliente('Johann', '17378350702', novoEndereco)

console.log(novoCliente)