var listaEnderecoPessoa = []


var listaObjeto = JSON.parse(localStorage.getItem('enderecoPessoa'))

if(listaObjeto.length > 0){
    listaEnderecoPessoa = listaObjeto
}

document.getElementById('totalRegistros').innerHTML = listaObjeto.length


function Gravar() {
    var enderecoPessoa = new Object
    enderecoPessoa.nome = document.getElementById("nomes").value
    enderecoPessoa.endereco = document.getElementById('endereço').value
    enderecoPessoa.tipoEndereco = document.getElementById('residencia').value

    
    
    listaEnderecoPessoa.push(enderecoPessoa)

    addline(enderecoPessoa)

    localStorage.setItem("enderecoPessoa", JSON.stringify(listaEnderecoPessoa))

    var listaObjeto = JSON.parse(localStorage.getItem('enderecoPessoa'))

    document.getElementById('totalRegistros').innerHTML = listaObjeto.length
}

function addline(enderecoPessoa) {
    var tbody = document.getElementById('tbody')
    var novaLinha = document.createElement('tr')

    var td_nome = document.createElement('td')
    td_nome.innerHTML = enderecoPessoa.nome

    var td_endereco = document.createElement('td')
    td_endereco.innerHTML = enderecoPessoa.endereco

    var td_tipoEndereco = document.createElement('td')
    td_tipoEndereco.innerHTML = enderecoPessoa.tipoEndereco

    var td_actions = document.createElement('td')
    td_actions.innerHTML = enderecoPessoa.actions

    novaLinha.appendChild(td_nome)
    novaLinha.appendChild(td_endereco)
    novaLinha.appendChild(td_tipoEndereco)
    novaLinha.appendChild(td_actions)
    
    tbody.appendChild(novaLinha)
}
