
class NPC {
    constructor(name, dialogueTree) {
        this.name = name;
        this.dialogueTree = dialogueTree; // Root dialogue node
    }
    open_npc_menue(){
        const action_menue=document.querySelector("#actions")
        action_menue.classList.toggle("scrollable-box")
        action_menue.innerHTML=`
            <h1 class="underlined">${this.name}</h1>
            <div id="choices" class="scrollable-box"></div>
        `
        this.dialogueTree.open_dialog()
        
    }
}
//maybe create more type of npc : like :talk npc/ shop npc/ fightable npc ...
/**
 * Text is the text showed when this choice is chosen, choices are the choice further choice you can see + the leave button.
 */
class Dialogue {
    constructor(title,text, choices = []) {
        this.text = text;       // What the NPC says
        this.choices = choices; // Player choices leading to other dialogues : dialogues
        this.title=title
    }
    open_dialog(){
    
        const choices = document.querySelector("#choices")
        choices.innerHTML=""
        for (const choice of this.choices) {
            let choice_element = document.createElement("button")
            choice_element.textContent=choice.title
            choice_element.className="place width-100"
            choice_element.addEventListener("click",()=>{
                choice.open_dialog()
                choice.show_text()
                choice.custom_action()
            })
            choices.appendChild(choice_element)
        }
        let leave_dialogue_btn = document.createElement("button")
            leave_dialogue_btn.className="place width-100"
            leave_dialogue_btn.textContent="Close Dialogue"
            leave_dialogue_btn.addEventListener("click",()=>{
                refresh_place()
            })

            choices.appendChild(leave_dialogue_btn)
    }
    show_text(){
        sendMessage(this.text)
    }
    custom_action(){
        
    }
}

const marchant = new NPC("Marchant",new Dialogue("Useless","I welcome you in my humble shop.",[new Dialogue("Open Shop","What do you sell here?"),new Dialogue("leave","Fuck Off")]))


