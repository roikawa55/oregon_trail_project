function typewriter(){
    let game_window = document.getElementById("gameWindow")
    let p_element_object = game_window.getElementsByTagName('p')
    let p_element_array = Array.from(p_element_object)

    p_element_array.forEach((p,i) =>{
        p.style.animationDelay= `${i}s`
    })
}

typewriter()