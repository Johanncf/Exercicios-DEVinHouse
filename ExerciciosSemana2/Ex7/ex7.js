var textos = ['animal','carro','humano','prédio','cadeira','objeto'];

function ordenaEprinta(){
    textos = textos.sort()

    textos.forEach(palavra => {
        document.querySelector('body').innerHTML += `<section><h1>${palavra}</h1></section>`
        
    })
}

ordenaEprinta()