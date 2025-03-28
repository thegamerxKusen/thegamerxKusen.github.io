function hide_element(document){
    document.style.display="none"
}
function show_element(document,display_type){
    document.style.display=display_type
}
function scrollToBottom(element) {
    const box = element
    box.scrollTop = box.scrollHeight; // Scrolls to the bottom
}
function addTextLBL(string,element,delay){
    if(string || element){
        let array = string.split("")
        let temp_delay = delay
        for(let i of array){
            setTimeout(() => {

                element.innerHTML+=i
            }, temp_delay);
            temp_delay+=delay
        }
    }else{
        console.log("addTextLBL func : argument missing")
    }
}

function add_tooltip(element,text){
    const toolTipText=document.createElement("span")
    toolTipText.className="tooltip_text"
    toolTipText.textContent=text
    element.classList.add("tooltip")
    element.appendChild(toolTipText)
}


