function fadein_paragraphs(){
    let p_element_array = Array.from(document.getElementById("gameWindow").getElementsByTagName('p'))

    p_element_array.forEach((p,i) =>{
        p.style.animationDelay= `${i}s`
    })
}

fadein_paragraphs()