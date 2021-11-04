var lista = [];
var answer = '';
while(answer.toLowerCase() != 'stop'){
    var answer = window.prompt("You're caught in a loop. If you type the key answer the loop will stop.");
    lista.push(answer);
}

lista.sort().reverse();

lista.forEach(palavra => {
    document.querySelector('body').innerHTML += `<section><h1>${palavra}</h1></section>`
})