function gerar(){
    let top = document.getElementById("top").value
    let bottom = document.getElementById("bottom").value
    let img = document.getElementById("img")

    let select = document.querySelector("select").value

    if(select == "Obama"){
        img.src = `https://apimeme.com/meme?meme=2nd-Term-Obama&top=${top.replace(/ /g, "+")}&bottom=${bottom.replace(/ /g, "+")}`
    } else if(select == "Albert Cagestein"){
        img.src = `https://apimeme.com/meme?meme=Albert-Cagestein&top=${top.replace(/ /g, "+")}&bottom=${bottom.replace(/ /g, "+")}`
    }
}