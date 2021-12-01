import container from './selectors.js'

let cardProduto = (produto) => {
    const $card = document.createElement("div");
    $card.setAttribute("class", "card")
    const $imgProduto = document.createElement("img");
    const $nomeProduto = document.createElement("h1");
    const $valorProduto = document.createElement("h2");
    const $parcelasProduto = document.createElement("select");
    $parcelasProduto.setAttribute('id', 'parcelas');
    for (let i = 0; i < produto.parcelasMax; i++) {
        $parcelasProduto.innerHTML += '<option>' + `${i}x` + '</option>';
    }

    $imgProduto.setAttribute('src', produto.img);
    $nomeProduto.innerHTML = produto.nome;
    $valorProduto.innerHTML = `R$ ${produto.valor},00`;


    $card.append($nomeProduto, $imgProduto, $valorProduto, $parcelasProduto)
    return $card
}

let addCardNaTela = (card) => {
    container.appendChild(card)
}

export {
    cardProduto,
    addCardNaTela
}