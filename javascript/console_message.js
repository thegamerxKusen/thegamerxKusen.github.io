
function sendMessage(text) {
    const consoleElement = document.getElementById("console");
    const choicesElement = document.getElementById("choices");
    const message = document.createElement("div");
    
    message.classList.add("message");
    message.textContent = text;
    consoleElement.appendChild(message);
    consoleElement.scrollTop = consoleElement.scrollHeight;  // Auto-scroll
}