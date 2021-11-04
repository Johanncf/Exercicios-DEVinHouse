var corDeFundo = ["#000000", "#1A1A1A", "#1A3D4C"];

var corDosElementosSobrepostos = ["#E6E6E6", "#CCCCCC", "#0D2526"];

var corDoTexto = ["white", "black"];

const btn = document.querySelector("#btn");
const body = document.querySelector("body");
const texto = document.querySelector("article p1");
const article = document.querySelector("article");

console.log(texto)


btn.addEventListener("click", () => {
    // console.log(Math.floor(Math.random() * 100));
    const numero = Math.floor(Math.random() * 3);
    body.style.backgroundColor = corDeFundo[numero];
    article.style.backgroundColor = corDosElementosSobrepostos[numero];
    texto.style.color = corDoTexto[Math.floor(Math.random() * 2)];
    console.log(numero); 
  });