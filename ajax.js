function loadFile(filename){
    var xhttp = new XMLHttpRequest()
    console.log("Loading Intro")
    xhttp.onreadystatechange = function(){
        
        if (this.readyState == 4 && this.status == 200){
            document.getElementById("gameWindow").innerHTML = this.responseText
        }
    }
    
    xhttp.open("GET", `text/${filename}`, true)
    xhttp.send();
}
