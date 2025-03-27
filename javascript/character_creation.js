class QUESTIONS {
    constructor (question,options,key,next_question) {
        this.question=question
        this.options=options
        this.key=key
        this.next_question = next_question
    }
    ask(){
        const question_container = document.createElement("div")
        const question_title = document.createElement("h1")
        question_title.textContent=this.question
        const options = document.createElement('ul')
        options.className="dual-choices"
        for(let i of this.options){
        const option = document.createElement("li")
        option.textContent=i
        
        option.addEventListener("click",()=>{
            player[this.key] = i
            question_container.remove()
            if(this.next_question){
                this.next_question.ask()
            }else{
                if(player.sex=="girl"){
                    player.icon_path="assets/girl_teen_cultivating.png"
                    //set the place you go depending of faction 
                }
                chose_name()
            }
        },{once:true})
        option.className="dual-choice"
        options.appendChild(option)
        }
        
        

        question_container.appendChild(question_title)
        question_container.appendChild(options)
        document.getElementsByClassName("character-creation-menue")[0].appendChild(question_container)
    }
}

const second_question = new QUESTIONS(
    "You are a little ..."
    ,["boy", "girl"]
    ,"sex"
)
const first_question = new QUESTIONS(
    "You are born in the ... faction."
    ,["Forces of Justice", "Forces of Evil", "Sky Demon Cult"]
    ,"faction"
    ,second_question
)

function create_character(){
    if(document.getElementsByClassName("main-game")[0]){
        document.getElementsByClassName("main-game")[0].remove()
    }
    create_character_creation_menue()
    
    first_question.ask()
}



function create_character_creation_menue(){
    let character_creation_menue = document.createElement("div")
    character_creation_menue.className="character-creation-menue"
    character_creation_menue.innerHTML=`
    <h1 class="character-creation-title">Character Creation</hi>
    
    
    `
    document.getElementById("body").appendChild(character_creation_menue)
}

function introduction_tale(){
    let menu = document.getElementsByClassName("character-creation-menue")[0]
    let title = document.getElementsByClassName("character-creation-title")[0]
    title.textContent="Introduction"
    let text = document.createElement("p")
    menu.appendChild(text)
    addTextLBL("In this word exist an unknow energy, martial artist call it ki and use it to strengthen their body. These martial artist gathered in faction to protect their interest and fight for their idea.",text,28)
    setTimeout(() => {
        addTextLBL(`\nYou were born as a little ${player.sex} in the ${player.faction}.`,text,28)
        setTimeout(() => {
            switch(player.faction){
                case "Forces of Justice":
                    addTextLBL(`\n You were named ${player.name}, you are part of the grand and noble sword user Namgun Clan part of the 5 great families of Murim.`,text,28)
                break
                case "Forces of Evil":
                    addTextLBL(`\n You were named ${player.name}, you are the son of the leader of a pirate group.`,text,28)
        
                break
                case "Sky Demon Cult":
                    addTextLBL(`\n You were given the name ${player.name}, as a prince of the Sky Demon Cult.`,text,28)
                break
            }
            document.getElementById("body").addEventListener("click",()=>{
                menu.remove()
                open_main_game()
            }, {once:true})
            //here set even listener to finish char creation
        }, 28*`\nYou were born as a little ${player.sex} in the ${player.faction}.`.length+2);
    
        
    }, 28*"In this word exist an unknow energy, martial artist call it ki and use it to strengthen their body. These martial artist gathered in faction to protect their interest and fight for their idea.".length+2);

    
}

function chose_name(){
    let menu = document.getElementsByClassName("character-creation-menue")[0]
    let name_menu = document.createElement("div")
    name_menu.className="name-menue"

    let name_title=document.createElement("h2");
    name_title.textContent="Name : ";
    name_title.className="name-content"

    let name_input=document.createElement("input");
    name_input.setAttribute("type","text")
    name_input.setAttribute("id","name_input")
    name_input.className="name-content"

    name_input.addEventListener("keypress", function (event) {
        if(event.key==="Enter"){
            let name_to_be = name_input.value.trim() 
            if (name_to_be !== "") {
                name_to_be.toLowerCase()
                name_to_be[0].toUpperCase()
                switch(player.faction){
                    case "Forces of Justice":
                        player.name = "Namgung " + name_to_be
                    break
                    case "Forces of Evil":
                        player.name = "Kuang " + name_to_be
                    break
                    case "Sky Demon Cult":
                        player.name ="Chun " + name_to_be
                    break
                }
            }
            name_menu.remove()
            introduction_tale()
        }
    })
    name_menu.appendChild(name_title)
    name_menu.appendChild(name_input)

    menu.appendChild(name_menu)

}