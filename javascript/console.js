function sendMessage(message){
    let console_menu = document.getElementById("console-menue")
    let consoleElement=document.getElementById("console-container")
    let message_element = document.createElement("p")
    message_element.className="message"
    message_element.textContent=message

    consoleElement.appendChild(message_element)
    scrollToBottom(console_menu)
    document.getElementById("clear-console-btn").style.display="block"

}
function clear_console(){
    document.getElementById('console-container').innerHTML=''
    document.getElementById("clear-console-btn").style.display="none"
}