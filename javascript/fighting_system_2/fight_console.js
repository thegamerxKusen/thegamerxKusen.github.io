let numb_fight_message = 0
function send_fight_message(text){
    let console = document.getElementById("fight_console")

    if(numb_fight_message===2){
        numb_fight_message=0
        console.innerHTML=""
    }
    numb_fight_message+=1
    
    let message = document.createElement("p")
    message.className="fight_message"
    message.textContent=text
    console.appendChild(message)
}