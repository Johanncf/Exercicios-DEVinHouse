var acesa = false;
var lampStatus;
document.addEventListener("DOMContentLoaded", () => {
    lampStatus = document.getElementById('lamp')
    acesa = JSON.parse(localStorage.getItem("lampStatus"))
    if(!acesa){
        lampStatus.src = "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-apagada.png"
    }else{
        lampStatus.src = "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-acesa.png"
    }
})

function ligaDesliga(){
    if(!acesa){
        lampStatus.src = "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-acesa.png"
        acesa = true;
        localStorage.setItem("lampStatus", JSON.stringify(acesa))
    }else{
        lampStatus.src = "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-apagada.png"
        acesa = false;
        localStorage.setItem("lampStatus", JSON.stringify(acesa))
    }
}