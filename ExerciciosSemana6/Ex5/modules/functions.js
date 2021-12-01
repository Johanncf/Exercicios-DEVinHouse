import { form, inputs, span } from './selectors.js';

let calcularMedia = (listaNotas) => {
    let soma = listaNotas.reduce((soma, nota) => (soma + nota));
    return (soma/listaNotas.length).toFixed(1)
}

function calculaEmostraNaTela() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let notas = [];
        inputs.forEach(element => {
            notas.push(parseFloat(element.value));
        })

        mostraNaTela(calcularMedia(notas));
    })
}

const mostraNaTela = (media) => {
    span.innerHTML = 'A média é: ' + media;
}

export {
    calculaEmostraNaTela,
    mostraNaTela
}