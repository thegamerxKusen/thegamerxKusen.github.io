const main_game_div=document.getElementsByClassName("main")

var character_creation_var= {
}

const questions = [
    {
        question: "You are born in the ... faction.",
        options: ["orthodox", "unorthodox", "sky demon cult"],
        key: "faction"
    },
    {
        question: "You are a little ...",
        options: ["boy", "girl"],
        key: "sexe"
    }
];

let currentQuestionIndex = 0;
showQuestion()
function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        document.getElementById("main").style.display="flex"
        document.getElementById("character_creation").style.display="none"
        return;
    }
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");

    // Clear previous options
    optionsContainer.innerHTML = "";

    // Update question text
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("div");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = function () {
            character_creation_var[currentQuestion.key] = option;
            currentQuestionIndex++;
            showQuestion();
        };
        optionsContainer.appendChild(button);
    });

}

function putChoiceInGameData(){
    
}