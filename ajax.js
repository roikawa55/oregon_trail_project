function load_file(filename){
    var xhttp = new XMLHttpRequest()
    console.log("Loading Intro")
    xhttp.onreadystatechange = function(){
        
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("gameWindow").innerHTML = this.responseText
            fadein_paragraphs()
        }
    }
    
    xhttp.open("GET", `./text/${filename}`, true)
    xhttp.setRequestHeader( 'Access-Control-Allow-Origin', '*')
    xhttp.send();
}

function load_setup(){
    let oxen = parseInt(document.getElementById("input oxen").value)
    let food = parseInt(document.getElementById("input food").value)
    let bullets = parseInt(document.getElementById("input bullets").value)
    let clothes = parseInt(document.getElementById("input clothes").value)
    let supplies = parseInt(document.getElementById("input supplies").value)

    stock_ammo(bullets)
    stock_food(food)
    
    console.log(player)
}
