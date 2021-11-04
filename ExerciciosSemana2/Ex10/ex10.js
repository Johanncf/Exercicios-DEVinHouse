var textos = [];
var answer = '';
while(answer.toLowerCase() != 'stop'){
    var answer = window.prompt("You're caught in a loop. If you type the key answer the loop will stop.");
    textos.push(answer);
}

var change = true;
while(change == true){
    change = false;
    for(let i = 0; i < textos.length; i++){
        if(i > 0){
            if(textos[i].length < textos[i - 1].length){
                var menor = textos[i];
                textos[i] = textos[i - 1];
                textos[i - 1] = menor;
                change = true;
            }
        }
    }
}

textos.forEach(palavra => {
    document.querySelector('body').innerHTML += `<section><h1>${palavra}</h1></section>`
})