
function send_fight_message(text){
    let console = document.getElementById("fight_console")
    
    let message = document.createElement("p")
    message.className="fight_message"
    message.textContent=text
    
    console.appendChild(message)
    scrollToBottom(console)
}