var cultivation_manual_inventory = [cultivation_manual.three_power]

var template_cultivation_manual = {
    name:"",
    rank:"3rd rate/2nd rate/1st rate/human grade/master grade/grand master grade/earth grade/sky grade/heaven grade",
    effect:0,
    mastery:0,
}

function swith_manual(manual){
    gameData.breathing_manual_equiped=manual
    stat_update()
    const show_manual_div= document.getElementById("selected_manual");

    const cultivation_manual_inv = document.getElementById("cultivation_manual_inventory");
    cultivation_manual_inv.style.display="none"

    show_manual_div.innerHTML = "";
    document.getElementById("manual_effect").innerHTML=gameData.breathing_manual_equiped.effect
}

function acquire_manual(manual){
    cultivation_manual_inventory.push(manual)
    sendMessage("You have acquired the "+manual.rank+" breathing technique "+manual.name+".")
}

function select_cult_manual(manual){
    const show_manual_div= document.getElementById("selected_manual");

    show_manual_div.innerHTML = "";
    
    const title=document.createElement("h1")
    title.textContent = manual.name
    const desc=document.createElement("h2")
    desc.textContent = manual.description
    const rank=document.createElement("h3")
    rank.textContent="Rank : "+manual.rank
    const effect=document.createElement("h3")
    effect.textContent="Days worth of qi gained by day of breathing exercise : "+manual.effect

    const swith_manual_button=document.createElement("button")
    swith_manual_button.textContent= "Switch"
    swith_manual_button.classList.add("switch_cult_manual_button")
    swith_manual_button.addEventListener("click", function() {
        swith_manual(manual)
    });
    show_manual_div.appendChild(title)
    show_manual_div.appendChild(rank)
    show_manual_div.appendChild(desc)
    show_manual_div.appendChild(effect)
    show_manual_div.appendChild(swith_manual_button)

}

function show_cultivation_manuals() {
    const cultivation_manual_inv = document.getElementById("cultivation_manual_inventory");
    cultivation_manual_inv.style.display="block"
    // Clear previous display
    cultivation_manual_inv.innerHTML = "";

    // Display each item in inventory
    cultivation_manual_inventory.forEach((item, index) => {
        const ManualDiv = document.createElement("div");
        ManualDiv.classList.add("manual");


        ManualDiv.addEventListener("click", function() {
            select_cult_manual(item);
        });
        
        const icon = document.createElement("img")
        icon.setAttribute('src', "assets/martial_arts_manual_base.png");
        icon.setAttribute('alt',item.name)
        cultivation_manual_inv.appendChild(ManualDiv);
        ManualDiv.appendChild(icon)

    });
    cultivation_manual_inv.style.display="block"
}

function switch_breathing_manual_func(){
    document.getElementById("ma_tab").style.display="none"
    
    document.getElementById("ma_tab_button").style.display="none"
    document.getElementById("cult_tab_button").style.display="none"
    document.getElementById("go_back_cult_button").style.display="block"
    show_cultivation_manuals()

}