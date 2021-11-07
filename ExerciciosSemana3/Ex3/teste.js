var campo = document.getElementById("campo")
var resultado = document.querySelector(".result")

var valorAtual = 0;
var num1;
var num2;
var op;
function soma(){
    if(campo.value == ""){
        num1 = valorAtual
    }else{
        num1 = parseFloat(campo.value)
    }
    op = "+";

    campo.value = "";
}

function subtrai(){
    if(campo.value == ""){
        num1 = valorAtual
    }else{
        num1 = parseFloat(campo.value)
    }

    op = "-";

    campo.value = "";
}

function multiplica(){
    if(campo.value == ""){
        num1 = valorAtual
    }else{
        num1 = parseFloat(campo.value)
    }

    op = "x";

    campo.value = "";
}

function divide(){
    if(campo.value == ""){
        num1 = valorAtual
    }else{
        num1 = parseFloat(campo.value)
    }

    op = "÷";

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

    campo.value = ""
}
