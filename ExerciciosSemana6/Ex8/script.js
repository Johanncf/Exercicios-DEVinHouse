function dropHandler(ev) {
    console.log('File(s) dropped');

    // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
        // Use a interface DataTransferItemList para acessar o (s) arquivo (s)
        for (var i = 0; i < ev.dataTransfer.items.length; i++) {
            // Se os itens soltos não forem arquivos, rejeite-os
            if (ev.dataTransfer.items[i].kind === 'file') {
                var file = ev.dataTransfer.items[i].getAsFile();
                console.log('... file[' + i + '].name = ' + file.name);
            }
        }
    } else {
        // Use a interface DataTransfer para acessar o (s) arquivo (s)
        for (var i = 0; i < ev.dataTransfer.files.length; i++) {
            console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
        }
    }

    document.querySelector('.drag-container ').style.backgroundColor = ''
    document.querySelector('.drag-container ').style.borderColor = 'black'
}

function dragOverHandler(ev) {
    console.log('File(s) in drop zone');

    // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
    ev.preventDefault();
    document.querySelector('.drag-container ').style.borderColor = 'rgb(135 91 223)'
    document.querySelector('.drag-container ').style.backgroundColor = 'rgb(124 54 239 / 25%)'
}

function leaveHandler(ev) {
    document.querySelector('.drag-container ').style.backgroundColor = ''
    document.querySelector('.drag-container ').style.borderColor = ''
}

function showForm(form) {
    document.querySelectorAll(".edit").forEach(page => {
        page.style.display = "none";
    })
    document.querySelector(`#${form}`).style.display = "grid";
}

document.querySelectorAll('.nav-btn').forEach(button => {
    button.onclick = function() {
        showForm(this.dataset.edit);
    }
})