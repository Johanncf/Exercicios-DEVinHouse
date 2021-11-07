var campo = document.getElementById("campo")
var resultado = document.querySelector(".result")

var valorAtual = 0;
var num1;
var num2;
var op;
function soma(){
    if(campo.value == ""){
        campo.value = '0';
    }
    num1 = parseFloat(campo.value)

    op = "+";

    campo.value = "";

    // resultado.innerHTML = `${valorAtual}` + " + " + campoValor + " = " 
    // valorAtual += parseFloat(campoValor)
    // resultado.innerHTML += valorAtual;
    // campoValor = "";
}

// input.addEventListener("keyup", function(event) {
//     // Number 13 is the "Enter" key on the keyboard
//     if (event.keyCode === 13) {
//       // Cancel the default action, if needed
//       event.preventDefault();
//       // Trigger the button element with a click
//       document.getElementById("myBtn").click();
//     }
//   });

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

function igual(){
    if(campo.value == ""){
        num2 = num1
    }else{
        num2 = parseFloat(campo.value)
    }
    
    if(op == "+"){
        valorAtual = num1 + num2
    }else if(op == "-"){
        valorAtual = num1 - num2
    }else if(op == "x"){
        valorAtual = num1 * num2
    }else if(op == "÷"){
        valorAtual = num1 / num2
    }

    resultado.innerHTML = `${num1}` + `${op}` + `${num2}` + '=' + `${valorAtual}`
}

