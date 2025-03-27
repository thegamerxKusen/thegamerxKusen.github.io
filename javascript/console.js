function sendMessage(message){
    let console_menu = document.getElementById("console-menue")
    let consoleElement=document.getElementById("console-container")
    let message_element = document.createElement("p")
    message_element.className="message"
    addTextLBL(message,message_element,28)
    consoleElement.appendChild(message_element)
    scrollToBottom(console_menu)
    document.getElementById("clear-console-btn").style.display="block"

}
function clear_console(){
    document.getElementById('console-container').innerHTML=''
    document.getElementById("clear-console-btn").style.display="none"
}