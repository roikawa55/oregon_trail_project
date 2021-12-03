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
    let name = document.getElementById("input name").value
    let oxen = parseInt(document.getElementById("input oxen").value)
    let food = parseInt(document.getElementById("input food").value)
    let bullets = parseInt(document.getElementById("input bullets").value)
    let clothes = parseInt(document.getElementById("input clothes").value)
    let supplies = parseInt(document.getElementById("input supplies").value)

    const player1 = {name: name, oxen: oxen, food: food, bullets: bullets, clothes: clothes, supplies: supplies}
    load_player_from_object(player1)
    display_player_stats()
    console.log(player)
}

function display_player_stats(){
    player_status = document.getElementById('player-status')
    player_status.innerHTML += `<h1>Player Status</h1>

    <p>Total Mileage is: </p>
    <p>Food: ${player.supplies.food} </p>
    <p>Bullets:</p>
    <p>Clothing: </p>
    <p>Supplies: </p>
    <p>Cash: </p>
    
    <p>What would you like to do next?</p>
    `
}