import { criaCorpoDeTabela } from "./enderecos.js"


const tbody = document.getElementById("body")

let enderecos = new Object

let storageObj = JSON.parse(localStorage.getItem("enderecos"))
if (storageObj != null) {
    enderecos = storageObj;

    if (enderecos.Clientes.length > 0) {
        criaCorpoDeTabela(enderecos.Clientes, tbody);
    } if (enderecos.Lojas.length > 0) {
        criaCorpoDeTabela(enderecos.Lojas, tbody);
    } if (enderecos.Mercados.length > 0) {
        criaCorpoDeTabela(enderecos.Mercados, tbody);
    }
}

window.addEventListener("storage", () => {
    location.reload()
})
