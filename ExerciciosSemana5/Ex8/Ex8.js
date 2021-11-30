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
    constructor(numConta, cliente) {
        this.numConta = numConta;
        this.saldo = 500.00;
        if (cliente instanceof Cliente) {
            this.cliente = cliente;
        }
    }

    depositaNaConta(valor) {
        this.saldo += valor;
    }
}

class Transacao { 
    constructor(conta, valorDaTransacao) {
        if (conta instanceof Conta) {
            this.conta = conta;
            this.valor = valorDaTransacao;
        }
    }

    transferencia() {
        this.conta.saldo -= this.valor;
    }

    deposito() {
        this.conta.saldo += this.valor;
    }
}

let outroCliente = new Cliente("Johann", "184723894", new Endereco('tipo', 'logradouro', 'numero', 'cidade', 'estado', 'pais', 'cep'), '46515616')
let contaJohann = new Conta("123123", outroCliente)
let novaTransa = new Transacao(contaJohann, 100)
novaTransa.deposito()

console.log(contaJohann)