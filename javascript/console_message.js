let nb_of_msg=1
function sendMessage(text) {
    let consoleElement = document.getElementById("console");
    const message = document.createElement("div");
    

    message.classList.add("message");
    message.textContent = text;
    
    consoleElement.appendChild(message);
    scrollToBottom(consoleElement)
    document.getElementById("clear_console_btn").style.display="block"
}
function clear_console(){
    document.getElementById('console').innerHTML=''
    document.getElementById("clear_console_btn").style.display="none"
}