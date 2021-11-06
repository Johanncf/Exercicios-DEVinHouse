var acesa = false;
var lampStatus;
document.addEventListener("DOMContentLoaded", () => {
    lampStatus = document.getElementById('lamp')
    lampStatus.src = "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-apagada.png"
    acesa = false;
})

function ligaDesliga(){
    if(!acesa){
        lampStatus.src = "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-acesa.png"
        acesa = true;
    }else{
        lampStatus.src = "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-apagada.png"
        acesa = false;
    }
}
