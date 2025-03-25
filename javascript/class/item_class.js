
class ITEM {
    constructor(name,description,icon){
        this.name = name
        this.description=description
        this.icon=icon
    }
    selectItem(){
        document.getElementById("selected-item").innerHTML=`
        <h1>${this.name}</h1>
        <h2>${this.description}</h2>
        `
    }
    getItem(){

    }

    removeItem(){
        let index = inventory.indexOf(this);
        if (index !== -1) inventory.splice(index, 1);
        document.getElementById("selected-item").innerHTML=""
    }
}
class WEAPON_ITEM extends ITEM{
    constructor(name,description,icon,weapon_type){
        super(name,description,icon)
        this.weapon_type=weapon_type
    }
    equip(){
        sendMessage(this.name+" equiped!")
        player.weapons_gear=this
    }
    selectItem(){
        if(player.weapons_gear ===this){
            document.getElementById("selected-item").innerHTML=`
            <h1>${this.name}</h1>
            <h2>${this.description}</h2>
            <button id="equip" class="inv-button">Unequip</button>`
            document.getElementById("equip").addEventListener("click",()=>{
                document.getElementById("equip").textContent="Equip"
                player.weapons_gear=null
                sendMessage(this.name+" unequiped!")
                this.selectItem()

            })
        }else{
            document.getElementById("selected-item").innerHTML=`
            <h1>${this.name}</h1>
            <h2>${this.description}</h2>
            <button id="equip" class="inv-button">Equip</button>
            `
            document.getElementById("equip").addEventListener("click",()=>{
                document.getElementById("equip").textContent="Unequip"
                this.equip()
                this.selectItem()
            })
        }        
    }
}
class CONSUMABLE_ITEM extends ITEM{
    consume(){
        console.log(this.name+": consume effect not set")
        
    }
    selectItem(){
        document.getElementById("selected-item").innerHTML=`
        <h1>${this.name}</h1>
        <h2>${this.description}</h2>
        <button id="consume-button" class="inv-button">Consume</button>
        `;
        document.getElementById("consume-button").addEventListener("click",()=>{
            this.consume()
        },{once:true})
    }
}





const black_dragon_ball = new CONSUMABLE_ITEM("Black Dragon Ball",
    "A medicine ball within the Demonic Cult that was created by the founding clan leader of the Poison Clan named Baek Yu. It wasn't as good as the ones created in the Shaolin Temple in Sorim, but it was still good enough to allow the person who consumed it to gain at most 20 years' worth of internal energy.",
    "assets/item/elixir/Black_Dragon_Ball.webp")
    black_dragon_ball.consume=()=>{
        sendMessage("You consume the black dragon ball and manage to get some Qi.")
        player.max_qi+=20
        add_cult_progress(1000)
        black_dragon_ball.removeItem()
        refresh_inventory()
        refresh_stat()
    }

const training_dagger = new WEAPON_ITEM("Training Dagger","A simple wooden dagger used for training.","assets/item/weapon/wooden_dagger.png",dagger)

const lowest_healing_pill = new CONSUMABLE_ITEM("Lowest Rank Healing Pill","Pill that regenerate 10 health point upon consumption.","assets/item/elixir/dark_green_pill.png")


const item_master_list={
    "Black Dragon Ball":black_dragon_ball,
    "Training Dagger":training_dagger,
    "Lowest Rank Healing Pill":lowest_healing_pill,
}