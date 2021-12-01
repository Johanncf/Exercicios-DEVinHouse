import { nome, img, descricao, nomeModelo, imgModelo, descricaoModelo, form } from "./selectors.js"

export default function addEvent(){
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        nomeModelo.innerHTML = nome.value;
        imgModelo.src = img.value;
        descricaoModelo.innerHTML = descricao.value;

        nome.value = "";
        img.value = "";
        descricao.value = ""; 
        form.style.justifyContent = 'none';
    })
}