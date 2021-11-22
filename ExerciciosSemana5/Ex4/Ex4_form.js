import { Endereco } from "./enderecos.js"

let enderecos = {
    Clientes: [],
    Lojas: [],
    Mercados: [],
}

let storageObj = JSON.parse(localStorage.getItem("enderecos"))
if (storageObj != null) {
    enderecos = storageObj;
}

function atualizaStorage(enderecos) {
    localStorage.setItem("enderecos", JSON.stringify(enderecos))
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            let rua = form.querySelector(".rua").value
            let numero = form.querySelector(".numero").value
            let cidade = form.querySelector(".cidade").value
            let estado = form.querySelector(".estado").value
            let pais = form.querySelector(".pais").value
            let cep = form.querySelector(".cep").value
            if(rua != "" && numero != "" && cidade != "" && estado != "" && pais != "" && cep != ""){
                let novoEndereco = new Endereco(form.querySelector("span").innerHTML, rua, numero, cidade, estado, pais, cep)
                if (novoEndereco.tipo == "Cliente") {
                    enderecos.Clientes.push(novoEndereco);
                } else if (novoEndereco.tipo == "Loja") {
                    enderecos.Lojas.push(novoEndereco);
                } else if (novoEndereco.tipo == "Mercado") {
                    enderecos.Mercados.push(novoEndereco)
                }
                atualizaStorage(enderecos)
                let inputs = form.querySelectorAll('input')
                for (let i = 0; i < inputs.length - 1; i++) {
                    inputs[i].value = '';
                }
            } else {
                alert("Todos os campos devem ser preenchidos.")
            }
        })
    })
})