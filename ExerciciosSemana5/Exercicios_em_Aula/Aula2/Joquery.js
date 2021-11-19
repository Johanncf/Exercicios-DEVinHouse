// Função de obter documentos html, como “function get(“.modais”)”
function get(seletor) {
    const elemento = document.querySelector(seletor)
    if(elemento == null){
        throw new Error(`O seletor "${seletor}" não foi encontrado`)
    } else{
        return document.querySelector(seletor)
    }
} 


function modificaCSS(seletor, callback) {
    const elemento = get(seletor)
    callback(elemento)    
}

function addClick(selector, callback) {
    const elemento = get(selector)
    if(typeof callback == "function"){
        elemento.addEventListener("click", callback)
    }else{
        throw new Error(`"${callback}" não é uma função`)
    }
}