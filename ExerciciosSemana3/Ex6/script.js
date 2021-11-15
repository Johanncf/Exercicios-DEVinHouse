const field = document.querySelector("fieldset")

function adiciona(){

    var novoCampo = document.createElement("label")
    novoCampo.innerHTML = 'Endereço completo:<br><input type="text" class="endereço">'
    novoCampo.setAttribute("style", "text-align: center")
    field.insertBefore(novoCampo, field.childNodes[field.childNodes.length - 2])
}