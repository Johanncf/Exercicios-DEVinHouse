export class Endereco {
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

export function criaCorpoDeTabela(listaDeEnderecos, tbody) {
    listaDeEnderecos.forEach(endereco => {
        let tr = document.createElement("tr")
        for (let atributo of Object.entries(endereco)) {
            let td = document.createElement("td")
            td.innerHTML = atributo[1]
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    })
    return tbody;
}