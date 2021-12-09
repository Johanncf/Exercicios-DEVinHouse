const foto = document.querySelector('#foto')
const dragContainer = document.querySelector('.drag-container ')
const inputFile = document.querySelector('#input-file')
const editForm = document.querySelectorAll(".edit")
const editProfileBtn = document.getElementById("profile-edit-btn")
const perfilContainer = document.querySelector(".perfil-container")
const formulario = document.querySelector("#formulario")
const navBtns = document.querySelectorAll('.nav-btn')
const saveBtns = document.querySelectorAll('.salvar')
const sobreHomepage = document.querySelector('#sobre-homepage').querySelector('span')
const novoSobre = document.querySelector('#sobre')
const closeBtn = document.querySelector('#close-btn')

const primeiraFoto = {
    result: 'https://images.pexels.com/photos/10341144/pexels-photo-10341144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
}

const fotosDePerfil = [primeiraFoto]


function dropHandler(ev) {
    // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
    ev.preventDefault();

    if (ev.dataTransfer.files.length && ev.dataTransfer.files[0].type.startsWith('image/')) {
        // Use a interface DataTransferItemList para acessar o (s) arquivo (s)
        const dragReader = new FileReader()
        dragReader.readAsDataURL(ev.dataTransfer.files[0])
        fotosDePerfil.push(dragReader)
        trocaFoto(foto, dragReader)

    }

    dragContainer.style.backgroundColor = ''
    dragContainer.style.borderColor = 'black'
}

function dragOverHandler(ev) {
    // Impedir o comportamento padrão (impedir que o arquivo seja aberto)
    ev.preventDefault();

    dragContainer.style.borderStyle = 'solid'
    dragContainer.style.borderColor = 'rgb(135 91 223)'
    dragContainer.style.backgroundColor = 'rgb(124 54 239 / 25%)'
}

function leaveHandler(ev) {
    dragContainer.style.backgroundColor = ''
    dragContainer.style.borderColor = ''
    dragContainer.style.borderStyle = 'dashed'
}

function showForm(form) {
    editForm.forEach(page => {
        page.style.display = "none";
    })
    document.querySelector(`#${form}`).style.display = "grid";
}

navBtns.forEach(button => {
    button.onclick = function () {
        showForm(this.dataset.edit);
    }
})

editProfileBtn.onclick = function () {
    perfilContainer.style.gridTemplateAreas = '"previa previa formulario formulario"';
    formulario.style.display = "block";
    editProfileBtn.style.display = "none";
}

dragContainer.onclick = function () {
    inputFile.click()
}

inputFile.addEventListener('change', () => {
    
    const inputReader = new FileReader()
    inputReader.readAsDataURL(inputFile.files[0])

    fotosDePerfil.push(inputReader)
    
    if (inputFile.files.length) {
        trocaFoto(foto, inputReader)
    }
})

function trocaFoto(tag, reader) {

    reader.onload = () => {
        tag.src = `${reader.result}`
    }

}

saveBtns.forEach((btn) => {
    btn.onclick = function (e) {
        e.preventDefault()
        if (novoSobre.value) {
            sobreHomepage.innerText = novoSobre.value
        }

        if (fotosDePerfil.length) {
            fotosDePerfil.splice(0, 1)
        }

        perfilContainer.style.gridTemplateAreas = '". previa previa ."';
        formulario.style.display = "none";
        editProfileBtn.style.display = "";

        dragContainer.style.backgroundColor = ''
        dragContainer.style.borderColor = ''
        dragContainer.style.borderStyle = 'dashed'
    }
})

closeBtn.onclick = function () {
    foto.src = fotosDePerfil[0].result

    if (fotosDePerfil.length > 1) {
        fotosDePerfil.pop()
        trocaFoto(foto, fotosDePerfil[0])
    }

    perfilContainer.style.gridTemplateAreas = '". previa previa ."';
    formulario.style.display = "none";
    editProfileBtn.style.display = "";

    dragContainer.style.backgroundColor = ''
    dragContainer.style.borderColor = ''
    dragContainer.style.borderStyle = 'dashed'
}
