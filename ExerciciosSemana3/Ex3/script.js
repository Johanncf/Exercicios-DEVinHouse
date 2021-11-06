var campo = document.getElementById("campo")
var resultado = document.querySelector(".result")

var valorAtual = 0;
function soma(){
    resultado.innerHTML = `${valorAtual}` + " + " + campo.value + " = " 
    valorAtual += parseFloat(campo.value)
    resultado.innerHTML += valorAtual;
    campo.value = "";
}

input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("myBtn").click();
    }
  });

function subtrai(){
    resultado.innerHTML = `${valorAtual}` + " - " + campo.value + " = " 
    valorAtual -= campo.value;
    resultado.innerHTML += valorAtual;
    campo.value = "";
}

function multiplica(){
    resultado.innerHTML = `${valorAtual}` + " x " + campo.value + " = " 
    valorAtual *= campo.value;
    resultado.innerHTML += valorAtual;
    campo.value = "";
}

function divide(){
    resultado.innerHTML = `${valorAtual}` + " ÷ " + campo.value + " = " 
    valorAtual /= campo.value;
    resultado.innerHTML += valorAtual;
    campo.value = "";
}