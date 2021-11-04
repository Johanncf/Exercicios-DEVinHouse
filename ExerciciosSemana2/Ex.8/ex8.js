var textos = ['animal','carro','humano','prédio','cadeira','objeto'];
var change = true;
function ordenaEprinta(){
    while(change == true){
        change = false;
        for(let i = 0; i < textos.length; i++){
            if(i > 0){
                if(textos[i].length < textos[i - 1].length){
                    var menor = textos[i];
                    textos[i] = textos[i - 1];
                    textos[i - 1] = menor;
                    change = true;
                }
            }
        }
    }

    textos.forEach(palavra => {
        document.querySelector('body').innerHTML += `<section><h1>${palavra}</h1></section>`
    })
}

document.addEventListener("DOMContentLoaded", ordenaEprinta)