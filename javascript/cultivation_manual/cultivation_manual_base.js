var cultivation_manual_inventory = [cultivation_manual.three_power]

var template_cultivation_manual = {
    name:"",
    rank:"3rd rate/2nd rate/1st rate/human grade/master grade/grand master grade/earth grade/sky grade/heaven grade",
    effect:0,
    mastery:0,
}

function swith_manual(){

}

function acquire_manual(){
    
}

function select_cult_manual(manual){
    const show_manual_div= document.getElementById("selected_manual");
    show_manual_div.innerHTML = ""
    const title=document.createElement("h1")
    title.textContent = manual.name
    const desc=document.createElement("h2")
    desc.textContent = manual.description
    const rank=document.createElement("h2")
    rank.textContent="Rank : "+manual.rank
    const effect=document.createElement("h2")
    effect.textContent="Days worth of qi gained by day of breathing exercise : "+manual.effect

    show_manual_div.appendChild(title)
    show_manual_div.appendChild(desc)
    show_manual_div.appendChild(rank)
    show_manual_div.appendChild(effect)

}

function show_cultivation_manuals() {
    const cultivation_manual_inventory = document.getElementById("breathing_manual_inventory");
    
    // Clear previous display
    cultivation_manual_inventory.innerHTML = "";

    // Display each item in inventory
    cultivation_manual_inventory.forEach((item, index) => {
        const ManualDiv = document.createElement("div");
        ManualDiv.classList.add("manual");

        //ManualDiv.setAttribute('onclick',"select_cult_manual("+item.name+")")
        
        const icon = document.createElement("img")
        icon.setAttribute('src', "assets/item/elixir/martial_arts_manual_base.png");
        icon.setAttribute('alt',item.name)
        cultivation_manual_inventory.appendChild(ManualDiv);
        ManualDiv.appendChild(icon)

    });
}