do{
    var numero = prompt("Digite um número de 1 a 10:")
}while(numero > 10 || numero < 1)

console.log(typeof(numero))
const container = document.querySelector(".base-container")

for(let i = 0; i < numero; i++){
    /*const containerPets = document.createElement("div")
    const containerPetsClass = document.createAttribute("class")
    containerPetsClass.value = "img-row"
    containerPets.setAttributeNode(containerPetsClass)
    container.appendChild(containerPets)
    console.log(container)*/
    
    /*container.innerHTML = "<section class='pet' id='dog'></section><section class='pet' id='cat'></section>"
    console.log(container)*/

    /*container.innerHTML = "<div class='pet-container'><section class='pet' id='dog" +numero+ "'></section><section class='pet' id='cat" +numero+ "'></section></div>"*/
    container.innerHTML += `<div class='pet-container'><section class='pet' id='dog${i}' style=''></section><section class='pet' id='cat${i}' style=''></section></div>`
    
    fetch("https://dog.ceo/api/breeds/image/random").then(function(data){
            return data.json();
        }).then(function(json){
            var resultado = json.message;
            var dog = document.getElementById(`dog${i}`)
            dog.style.backgroundImage ="url('"+resultado+"')";
    })
    fetch("https://api.thecatapi.com/v1/images/search").then(function(data){
            return data.json();
        }).then(function(json){
            var resultado = json[0]["url"];
            var cat = document.getElementById(`cat${i}`)
            cat.style.backgroundImage ="url('"+resultado+"')";
    })
}




