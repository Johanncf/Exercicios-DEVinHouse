var valorOriginal = document.getElementById('valor')
var desconto = document.getElementById('desconto')
var valoresNaTela = document.getElementById('container-valores')

function calcula(){
    let preco = parseFloat(valorOriginal.value)
    let valorDesconto = parseFloat(desconto.value)/100

    var valorDescontado = preco*valorDesconto

    var valorFinal = preco - valorDescontado

    mostraPromo(preco, valorFinal, valorDescontado)
}

function mostraPromo(preco, valorFinal, valorDescontado){
    var linha1 = document.createElement('P')
    linha1.innerHTML = "Valor original: " + preco
    valoresNaTela.appendChild(linha1)

    var linha2 = document.createElement('P')
    linha2.innerHTML = "Valor final: " + valorFinal
    valoresNaTela.appendChild(linha2)

    var linha3 = document.createElement('P')
    linha3.innerHTML = "Valor descontado: " + `-${valorDescontado}`
    linha3.style.color = "red"
    valoresNaTela.appendChild(linha3)
}