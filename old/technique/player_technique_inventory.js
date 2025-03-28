let technique_inventory = [third_rate_weapon_skills.earth_palm_strike,third_rate_weapon_skills.earth_dagger_throw,third_rate_weapon_skills.earth_arrow_shot]
let switch_technique=null

function def_switch_tech(slots){
    player_stats.technique_slots[slots]=switch_technique
    sendMessage(switch_technique.name +" is now in the slot number "+(slots+1)+".")
    prep_go_back()
}

function open_slot_menue(){
    let fight_prep_tab = document.getElementById("techniques")
    fight_prep_tab.style.display="none"

    let slots = document.getElementById("switch_technique")
    slots.style.display="flex"

    player_stats.technique_slots.forEach((item, index) => {
        if(item){
            document.getElementById("switch_technique_slot_"+index).textContent="Replace " + item.name
        }
    });
    

    document.getElementById("prep_go_back").style.display="block"
    //choosen technique
}

function open_technique_inventory(){
    let fight_prep_tab = document.getElementById("techniques")
    fight_prep_tab.style.display="flex"
    fight_prep_tab.innerHTML=""
    document.getElementById("preparation_my_status").style.display="none"
    document.getElementById("switch_technique").style.display="none"
    document.getElementById("switch_technique_button").style.display="none"
    technique_inventory.forEach((item, index) => {
        let techique_div=document.createElement("div")
        techique_div.addEventListener("click",function(){
            switch_technique=item
            open_slot_menue()
        })
        techique_div.className="technique_div"
        let technique_name=document.createElement("h1")
        let technique_element_name=document.createElement("h2")
        let technique_damage=document.createElement("h3")
        let technique_energy_cost=document.createElement("h3")
        //upper part
        technique_name.textContent=item.name
        technique_element_name.textContent=item.element.name
        //lower part
        technique_damage.textContent="Damage : "+item.damage
        technique_energy_cost.textContent="Qi Cost : "+item.energy_cost

        techique_div.appendChild(technique_name)
        techique_div.appendChild(technique_element_name)
        techique_div.appendChild(technique_damage)
        techique_div.appendChild(technique_energy_cost)

        fight_prep_tab.appendChild(techique_div)
    })
    document.getElementById("prep_go_back").style.display="block"
}

function open_status(){
    document.getElementById("preparation_my_status").style.display="none"
    document.getElementById("switch_technique").style.display="none"
    document.getElementById("switch_technique_button").style.display="none"
    let my_status = document.getElementById("my_status")
    my_status.style.display="block"
    my_status.innerHTML=""
    set_true_stats()
    let stats = document.createElement("div")
    let inteligence= document.createElement("h2")
    inteligence.textContent="Intelligence : "+player_stats.true_intelligence
    let strenght = document.createElement("h2")
    strenght.textContent="Strenght : "+player_stats.true_strength
    let speed = document.createElement("h2")
    speed.textContent="Speed : "+player_stats.true_speed
    let defence = document.createElement("h2")
    defence.textContent="Defence : "+player_stats.true_defence
    stats.appendChild(inteligence)
    stats.appendChild(strenght)
    stats.appendChild(speed)
    stats.appendChild(defence)

    my_status.appendChild(stats)

    document.getElementById("prep_go_back").style.display="block"
}

function prep_go_back(){
    document.getElementById("preparation_my_status").style.display="block"
    document.getElementById("switch_technique").style.display="none"
    document.getElementById("switch_technique_button").style.display="block"
    document.getElementById("prep_go_back").style.display="none"

    document.getElementById("techniques").style.display="none"
    
    document.getElementById("my_status").style.display="none"
}