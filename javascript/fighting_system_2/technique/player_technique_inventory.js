var technique_inventory = [third_rate_weapon_skills.earth_palm_strike,third_rate_weapon_skills.earth_dagger_throw,third_rate_weapon_skills.earth_arrow_shot]
var switch_technique=null
function open_switch_technique(){
    document.getElementById("switch_technique").style.display="flex"
    document.getElementById("switch_technique_button").style.display="none"
}

function open_slot_menue(){
    let fight_prep_tab = document.getElementById("technique_div")
    fight_prep_tab.style.display="none"
    let slots = document.getElementById("switch_technique")
    slots.style.display="block"

    player_stats.technique_slots.forEach((item, index) => {
        if(item){
            document.getElementById("switch_technique_slot_"+index).textContent="Replace " + item.name
        }
    });

    

    //choosen technique
}

function open_technique_inventory(){
    let fight_prep_tab = document.getElementById("fight_preparation_tab")
    fight_prep_tab.style.display="flex"
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
}