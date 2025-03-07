const main_game_div=document.getElementById("main")
const character_creation_div = document.getElementById("character_creation")
const body = document.getElementById("body")
var character_creation_var= {
}

const questions = [
    {
        question: "You are born in the ... faction.",
        options: ["Forces of Justice", "Forces of Evil", "Sky Demon Cult"],
        key: "faction"
    },
    {
        question: "You are a little ...",
        options: ["boy", "girl"],
        key: "sexe"
    }
];

//end char creation
function end_character_creation(){
    character_creation_div.style.display="none"
    character_creation_div.innerHTML = ""
    main_game_div.style.display="flex"
    document.getElementById("player_name").innerHTML = gameData.name
    document.getElementById("player_faction").innerHTML = gameData.faction

    switch(gameData.faction){
        case "Forces of Justice":
            acquire_manual(cultivation_manual.holy_light_breathing)
            swith_manual(cultivation_manual.holy_light_breathing)
            places.place_you_in=Namgung_Clan_Main_Residence
            break
        case "Forces of Evil": 
            acquire_manual(cultivation_manual.dark_shadow_breathing)
            swith_manual(cultivation_manual.dark_shadow_breathing)
            places.place_you_in=Hang_Familly_House_main
            break
        case "Sky Demon Cult":
            acquire_manual(cultivation_manual.sword_force_of_the_heavenly_demon)
            swith_manual(cultivation_manual.sword_force_of_the_heavenly_demon)
            places.place_you_in=Demon_Palace_main
            break
        default:
            console.log("Unitended faction")
            break
    }
    where_can_you_go()
}

let currentQuestionIndex = 0;

//char creation phase 2 : name 
function show_name_choice(){
    var name_title=document.createElement("h1");
    name_title.textContent="Name:";
    var name_input=document.createElement("input");
    name_input.setAttribute("type","text")
    name_input.setAttribute("id",name_input)

    name_input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            if (name_input.value.trim() !== "") {
                putChoiceInGameData()
                let tempName = name_input.value.trim()
                gameData.name=tempName
                player_stats.name=tempName
                character_creation_div.innerHTML = ""
                //next text for the story
                var story_intro=document.createElement("p");
                var general_intro=document.createElement("p");
                general_intro.textContent=("In this word exist an unknow energy, martial artist call it ki and use it to strengthen their body. These martial artist gathered in faction to protect their interest and fight for their idea.")
                //Faction presentation?
                character_creation_div.appendChild(general_intro)
                //click to go next
                body.addEventListener("click",function(event){
                    character_creation_div.innerHTML = ""
                    let son ="daughter"
                    if(gameData.sex==="boy"){
                        son = "son"
                    }
                    switch(gameData.faction){
                        case "Forces of Justice":
                            
                            story_intro.textContent=("You were born as a little " + gameData.sex + " named Namgung " + gameData.name + " in the grand and noble Sword User Namgung Family part of the 5 great families of the " + gameData.faction + " faction as the patruarch first" +son+".")
                            gameData.name="Namgung "+tempName
                            break
                        case "Forces of Evil": 
                            story_intro.textContent=("You were born as a little " + gameData.sex + " named Hang " + gameData.name + " in the " + gameData.faction + " faction as the Force of evil leader's first" +son+".")
                            gameData.name="Hang "+tempName
                            break
                        case "Sky Demon Cult":
                            let prince = ""
                            if(gameData.sex==="boy"){
                                prince = "prince"
                            }else{
                                prince = "princess"
                            }
                            story_intro.textContent=("You were born as a little " + gameData.sex + " named Chun " + gameData.name + " in the " + gameData.faction + " faction as the first " +prince+".")
                            gameData.name="Chun "+tempName
                            break
                        default:
                            console.log("Unitended faction")
                            break
                    }
                    character_creation_div.appendChild(story_intro)
                    body.addEventListener("click",end_character_creation,{ once: true });
                },{ once: true });
                
            }
        }
    });

    character_creation_div.appendChild(name_title)
    character_creation_div.appendChild(name_input)

} 
//char creation phase 1 : the question
function showQuestion() {

    if (currentQuestionIndex >= questions.length) {
        document.getElementById("question-container").style.display="none"
        // instead put Go to phase 2 
        show_name_choice()
        return;
    }
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
    gameData.sex=character_creation_var.sexe
    gameData.faction=character_creation_var.faction
    
}

