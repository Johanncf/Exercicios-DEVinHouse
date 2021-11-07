var acesa = false;
var lampStatus;
document.addEventListener("DOMContentLoaded", () => {
    lampStatus = document.getElementById('lamp')
    setInterval(() => {
        acendeLampada();
        setTimeout(ligaDesliga, 1000);
    }, 2000);
})

function acendeLampada(){
    lampStatus.src = "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-acesa.png"
    acesa = true;
}



function ligaDesliga(){
    if(!acesa){
        acendeLampada()
    }else{
        lampStatus.src = "https://raw.githubusercontent.com/phmonte/devinhouse/main/Aulas/Javascript/imagens/luz-apagada.png"
        acesa = false;
    }
}