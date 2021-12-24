do{
    var numero = prompt("Digite um número de 1 a 10:")
}while(numero > 10 || numero < 1)

console.log(typeof(numero))
const container = document.querySelector(".base-container")

for(let i = 0; i < numero; i++){
    container.innerHTML += `<div class='pet-container'><section class='pet' id='dog${i}' style=''></section><section class='pet' id='cat${i}' style=''></section></div>`
    
    basicFetch(i)
}

async function basicFetch(i) {
    try {
        const req = await fetch("https://dog.ceo/api/breeds/image/random");
        const json = await req.json()
        const resultado = json.message;
        const dog = document.getElementById(`dog${i}`);
        dog.style.backgroundImage ="url('"+resultado+"')";
    } catch {
        console.log("Ops... A requisição dos dogs falhou!")
    }
    
    try {
        const req = await fetch("https://api.thecatapi.com/v1/images/search");
        const json = await req.json()
        const resultado = json[0]["url"];
        const cat = document.getElementById(`cat${i}`);
        cat.style.backgroundImage ="url('"+resultado+"')";
    } catch {
        console.log("Ops... A requisição dos miau falhou!")
    }
}