
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
}
class WEAPON_ITEM extends ITEM{
    equip(){
        //equip weapon
    }
    selectItem(){
        document.getElementById("selected-item").innerHTML=`
        <h1>${this.name}</h1>
        <h2>${this.description}</h2>
        <button onclick="" class="inv-button">Equip</button>
        `
    
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
        <button onclick="" class="inv-button">Consume</button>
        `
    }
}
const black_dragon_ball = new CONSUMABLE_ITEM("Black Dragon Ball",
    "A medicine ball within the Demonic Cult that was created by the founding clan leader of the Poison Clan named Baek Yu. It wasn't as good as the ones created in the Shaolin Temple in Sorim, but it was still good enough to allow the person who consumed it to gain at most 20 years' worth of internal energy.",
    "assets/item/elixir/Black_Dragon_Ball.webp")
    black_dragon_ball.consume=()=>{
        //need to divide the center in two to put the console 
        //sendMessage("You consume the black dragon ball and manage to get 15 year worht of Qi.")
        
        refresh_stat()
    }

const training_dagger = new WEAPON_ITEM("Training Dagger","A simple wooden dagger used for training.","assets/item/weapon/wooden_dagger.png")


