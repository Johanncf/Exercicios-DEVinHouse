// Criar uma função que cria botões
// Fazer com que a função receba outra função 
// Permitir que essa função parametro modifique o botão criado
const _body = get("body")

function _BTN(texto, f) {
    let _button = document.createElement("button")
    _button.innerHTML = texto
    _body.appendChild(_button)
    
    f(_button)
}

_BTN("Botão 1", (btn) => {
    btn.style.backgroundColor = 'black'
    btn.style.color = "white"
})



modificaCSS("button", function(btn){
    btn.style.backgroundColor = "red"
})

addClick("button", function(e){
    _body.style.backgroundColor = "black"
})