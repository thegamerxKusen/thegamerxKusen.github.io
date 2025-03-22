function hide_element(document){
    document.style.display="none"
}
function scrollToBottom(element) {
    const box = element
    box.scrollTop = box.scrollHeight; // Scrolls to the bottom
}
function addTextLBL(string,element){
    if(string || element){
        let array = string.split("")
        let delay = 28
        for(let i of array){
            setTimeout(() => {

                element.innerHTML+=i
            }, delay);
            delay+=28
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


