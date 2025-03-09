let nb_of_msg=1
function sendMessage(text) {
    let consoleElement = document.getElementById("console");
    const message = document.createElement("div");
    
    //show a max of 15 message cause scroll doesnt work
    nb_of_msg+=1
    if(nb_of_msg===15){
        consoleElement.innerHTML=""
        nb_of_msg=1
    }

    message.classList.add("message");
    message.textContent = text;
    consoleElement.appendChild(message);
}