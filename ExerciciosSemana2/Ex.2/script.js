var idades = []
var numero_part = 0
var numero_satisf = 0

const btn = document.getElementById("btn-infos")

const nPart = document.getElementById("n-part")
const idadeM = document.getElementById("idade-media")
const nSatif = document.getElementById("n-satisfeitos")

console.log(btn)

btn.addEventListener('click', part)

function media(lista){
    var soma = 0
    for (var i = 0; i < lista.length; i++){
        soma += lista[i]
    }
    return soma/lista.length
}

function part(){
    var nome = window.prompt('Digite seu nome')
    numero_part += 1
    nPart.innerHTML = numero_part

    var idade = parseInt(window.prompt('Digite sua idade (somente o número)'))
    idades.push(idade)
    idadeM.innerHTML = media(idades)

    var satisf = window.prompt('Digite um número de 1 a 10 para expressar sua satisfação')
    var confirma = window.confirm('Podemos incluir você na lista de satisfeitos?')
    console.log(confirma)
    if (confirma == true){
        numero_satisf += 1
        nSatif.innerHTML = numero_satisf
    }
    window.alert('Salvo com sucesso')
}