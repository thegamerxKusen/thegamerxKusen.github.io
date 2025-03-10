function refresh_qi_hp(){
    let opponent_health=document.getElementById("opponent_health")
    opponent_health.textContent=figth_stat.opponent.health+" / "+figth_stat.opponent.max_health
    let player_health= document.getElementById("player_health")
    player_health.textContent=player_stats.health+" / "+base_stats.max_health

}


function show_fight_menue(opponent){
    //hide everything
    document.getElementById("main").style.display="none"
    //show the fight menue
    //oponent tag:
    if(document.getElementById("fight_menu")){
        document.getElementById("fight_menu").remove()
    }
    let fight_menue=document.createElement("div")
    fight_menue.id="fight_menue"
    let opponent_div=document.createElement("div")
    opponent_div.id="opponent_tag"
    let opponent_name=document.createElement("h1")
    opponent_name.textContent=opponent.name

    //side by side
    let o_h2_part=document.createElement("div")
    o_h2_part.className="h2_part"
    let opponent_health=document.createElement("h2")
    opponent_health.textContent=opponent.health+" / "+opponent.max_health
    opponent_health.id="opponent_health"
    let opponent_realm=document.createElement("h2")
    opponent_realm.textContent=opponent.realm
    opponent_div.appendChild(opponent_name)
    o_h2_part.appendChild(opponent_health)
    o_h2_part.appendChild(opponent_realm)
    opponent_div.appendChild(o_h2_part)

    //console in the middle to write the fight

    let fight_console=document.createElement("div")
    fight_console.id="fight_console"
    

    //player_stats tag:
    let player_div=document.createElement("div")
    player_div.id="player_tag"
    let player_name=document.createElement("h1")
    player_stats.name=gameData.name
    player_name.textContent=player_stats.name
    let p_h2_part=document.createElement("div")
    p_h2_part.className="h2_part"
    let player_health=document.createElement("h2")
    player_health.textContent=player_stats.health+" / "+base_stats.max_health
    player_health.id="player_health"
    let player_realm=document.createElement("h2")
    player_realm.textContent=realms[gameData.realm].realm_name
    //add qi
    player_div.appendChild(player_name)
    p_h2_part.appendChild(player_health)
    p_h2_part.appendChild(player_realm)
    player_div.appendChild(p_h2_part)




    //action buttons
    let fight_choices_div=document.createElement("div")
    fight_choices_div.id="fight_choices_div"
    

    //push to html
    fight_menue.appendChild(opponent_div)
    fight_menue.appendChild(fight_console)
    fight_menue.appendChild(player_div)
    fight_menue.appendChild(fight_choices_div)
    body.appendChild(fight_menue)
    menue_open_main()
    //technique
    //actions
    //use item
    //surrender
    //if you click technique call playerTurn("technique")
    //if you click actions call playerTurn("actions")
    //if you click use item call playerTurn("finish_turn")
    //if you click surrender call playerTurn("surrender")
}

function hide_fight_menue(){
    document.getElementById("fight_menue").remove()
    document.getElementById("main").style.display="flex"
}

function menue_open_main(){
    let fight_choices = document.getElementById("fight_choices_div")
    fight_choices.innerHTML=""

    let technique_button=document.createElement("button")
    technique_button.textContent="Technique"
    technique_button.addEventListener("click",function(){
        //technique
        menue_open_technique()
    })
    let actions_button=document.createElement("button")
    actions_button.textContent="Actions"
    actions_button.addEventListener("click",function(){
        //actions
        menue_open_action()
    })
    let finish_turn_button=document.createElement("button")
    finish_turn_button.textContent="Finish Turn"
    finish_turn_button.addEventListener("click",function(){
        //finish turn
        menue_finish_turn()
    })
    let surrender_button=document.createElement("button")
    surrender_button.textContent="Surrender"
    surrender_button.addEventListener("click",function(){
        menue_surrender()
        //surrender
    })
    fight_choices.appendChild(technique_button)
    fight_choices.appendChild(actions_button)
    fight_choices.appendChild(finish_turn_button)
    fight_choices.appendChild(surrender_button)
}



function menue_open_action(){
    let fight_choices = document.getElementById("fight_choices_div")
    fight_choices.innerHTML=""

    let avoid_button = document.createElement("button")
    avoid_button.textContent="Avoid"
    
    avoid_button.addEventListener("click",function(){
        player_stats.chosen_actions=fight_actions[0]
        menue_open_main()
        send_fight_message("You are going to avoid.")
    });
    let block_button = document.createElement("button")
    block_button.textContent="Block"
    block_button.addEventListener("click",function(){
        player_stats.chosen_actions=fight_actions[1]
        menue_open_main()
        send_fight_message("You are going to block.")
    });
    let breath_button = document.createElement("button")
    breath_button.textContent="Breath"
    breath_button.addEventListener("click",function(){
        player_stats.chosen_actions=fight_actions[2]
        menue_open_main()
        send_fight_message("You are going to breath.")
    });
    let fullpower_button = document.createElement("button")
    fullpower_button.textContent="Fullpower"
    fullpower_button.addEventListener("click",function(){
        player_stats.chosen_actions=fight_actions[3]
        menue_open_main()
        send_fight_message("You are going to go fullpower.")
    });
    fight_choices.appendChild(avoid_button)
    fight_choices.appendChild(block_button)
    fight_choices.appendChild(breath_button)
    fight_choices.appendChild(fullpower_button)
}

function menue_finish_turn(){
    if(player_stats.chosen_actions ===null){
        send_fight_message("Action not choosed.")
        return;
    }
    if(player_stats.chosen_technique ===null){
        send_fight_message("Technique not choosed.")
        return;
    }

    console.log("Turn finished")
    clashing()
    //clashing, only after actions and technique is choosen
   
}

function menue_surrender(){
    end_fight()
}

function menue_open_technique(){
    let fight_choices = document.getElementById("fight_choices_div")
    fight_choices.innerHTML=""

    player_stats.technique_slots.forEach((item, index) => {
        if(item){
        let technique_slots_button=document.createElement("button")
        technique_slots_button.textContent=item.name
        technique_slots_button.id="tech_button"
        technique_slots_button.addEventListener("click",function(){
            player_stats.chosen_technique=item
            menue_open_main()
            send_fight_message("You are going to use "+item.name + " technique.")
        })
        fight_choices.appendChild(technique_slots_button)
        }
    });
//should work wtf
    let basic_skill=player_stats.weapon_type.basic_skills
    
    basic_skill.forEach((item, index) => {
        let technique_slots_button=document.createElement("button")
        technique_slots_button.textContent=item.name
        technique_slots_button.id="tech_button"
        technique_slots_button.addEventListener("click",function(){
            player_stats.chosen_technique=item
            menue_open_main()
            send_fight_message("You are going to use "+item.name + " technique.")
        })
        fight_choices.appendChild(technique_slots_button)
    });
}
