
class NPC {
    constructor(name, dialogueTree) {
        this.name = name;
        this.dialogueTree = dialogueTree; // Root dialogue node
    }
    open_npc_menue(){
        const popup = new POPUP_MENUE(this.name,"dialogue")
        popup.open_pop_up()
        this.dialogueTree.open_dialog(popup)
        
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
    open_dialog(popup){
        const dialogue =  document.createElement("div")
        const choices = document.createElement("div")
        choices.id="choices"
        choices.className="scrollable-box"
        choices.innerHTML=""
        for (const choice of this.choices) {
            let choice_element = document.createElement("button")
            choice_element.textContent=choice.title
            choice_element.className="place width-100"
            choice_element.addEventListener("click",()=>{
                choice.open_dialog(popup)

                //choice.show_text() need to redo it, maybe a lower part apart from the choices where there is a console?
                choice.custom_action()
            })
            choices.appendChild(choice_element)
        }
        dialogue.appendChild(choices)
        popup.change_content(dialogue)

    }
    show_text(){
        sendMessage(this.text)
    }
    custom_action(){
        
    }
}

const merchant = new NPC("Merchant", new Dialogue("Greeting", 
    "Ah, a new customer! Welcome to my humble shop. What brings you here?", [
        
        // Buying-related options
        new Dialogue("Browse Items", "I have the finest goods! What interests you?", [
            new Dialogue("Weapons", "Strong blades, sharp daggers... What do you need?"),
            new Dialogue("Armor", "For protection against any foe! What are you looking for?"),
            new Dialogue("Potions", "Healing, strength, speed... Potions for every situation!"),
            new Dialogue("Rare Items", "Ah, you have good taste. But rare goods come at a high price..."),
        ]),
        
        // Haggling
        new Dialogue("Haggle", "Trying to lower my prices, eh? Alright, let's see if you can convince me.", [
            new Dialogue("Charm him", "You flatter me! Alright, I’ll give you a small discount."),
            new Dialogue("Threaten him", "Whoa now, no need for that! I might just raise the price."),
            new Dialogue("Walk away silently", "Hmph, playing hard to get? Alright, I’ll give you a little discount."),
        ]),

        // Asking for recommendations
        new Dialogue("Ask for recommendations", "Looking for something specific?", [
            new Dialogue("Best weapon?", "Ah, you’ll love the Moonlit Blade. Swift and deadly."),
            new Dialogue("Best armor?", "The Shadow Cloak—lightweight and nearly unbreakable."),
            new Dialogue("Best potion?", "Elixir of the Phoenix. Drink it, and even death won’t claim you... once."),
        ]),

        // Listening to stories
        new Dialogue("Ask about his past", "Oh? You’re interested in an old merchant’s stories?", [
            new Dialogue("Tell me your greatest trade", "Ah, once I sold a cursed sword to a prince... The poor fool disappeared days later."),
            new Dialogue("Tell me about dangerous customers", "There was a man with eyes like fire... He bought a dagger and whispered ‘This will do nicely.’"),
            new Dialogue("Tell me about lost treasures", "Legend says a lost city lies beyond the eastern desert... Maybe you’ll find it?"),
        ]),

        // Hidden dialogue (if player asks multiple times)
        new Dialogue("I heard you deal in... other goods.", "Hah, so you’re not just any customer... What exactly are you looking for?", [
            new Dialogue("Black Market Items", "Tsk, tsk... You didn’t hear this from me, but meet me behind the shop at midnight."),
            new Dialogue("Information", "Information is more expensive than gold. But I may know something..."),
        ]),

        // Exit dialogue
        new Dialogue("Leave", "Farewell, traveler. Come back when you have coin!")
    ]
));