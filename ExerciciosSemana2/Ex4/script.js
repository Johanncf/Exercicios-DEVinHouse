var beck = document.querySelector("#container")

function botao(){
    
    var contadorMenor = 0;
    var contadorMaior = 0;
    var conta100 = 0;

    for(var i = 0; i < 1000; i++){
        
        var numero = Math.floor(Math.random()*1001)
        if (numero < 501){
            contadorMenor++
        }else{
            contadorMaior++
        }

        if (numero == 100){
            conta100++
        }
    }

    if(conta100 == 1){
        beck.style.backgroundColor = 'orange'
    }
    else if (conta100 > 1){
        beck.style.backgroundColor = 'black'
    }
    else{
        if(contadorMaior > contadorMenor){
            beck.style.background = 'url("https://picsum.photos/200/300") no-repeat center top'
            beck.style.backgroundSize = 'contain'
        }
        else{
            beck.style.background = 'url("https://via.placeholder.com/500") no-repeat center top'
            beck.style.backgroundSize = 'contain'
        }
    }
    console.log(contadorMenor)
    console.log(contadorMaior)
    console.log(conta100)  
}

botao()

const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    beck.style.backgroundColor = 'none'
    beck.style.background = 'none'
    botao()

})



