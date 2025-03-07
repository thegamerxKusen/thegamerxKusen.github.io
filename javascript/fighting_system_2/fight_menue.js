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
    player_name.textContent=player_stats.name
    let p_h2_part=document.createElement("div")
    p_h2_part.className="h2_part"
    let player_health=document.createElement("h2")
    player_health.textContent=player_stats.health+" / "+player_stats.max_health
    player_health.id="player_health"
    let player_realm=document.createElement("h2")
    player_realm.textContent=realms[gameData.realm].realm_name
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

function menue_open_technique(){
    let fight_choices = document.getElementById("fight_choices_div")
    fight_choices.innerHTML=""
}

function menue_open_action(){
    let fight_choices = document.getElementById("fight_choices_div")
    fight_choices.innerHTML=""

    let avoid_button = document.createElement("button")
    avoid_button.textContent="Avoid"
    
    avoid_button.addEventListener("click",function(){
        
    });
    let block_button = document.createElement("button")
    block_button.textContent="Block"
    block_button.addEventListener("click",function(){
        
    });
    let breath_button = document.createElement("button")
    breath_button.textContent="Breath"
    breath_button.addEventListener("click",function(){
        
    });
    let fullpower_button = document.createElement("button")
    fullpower_button.textContent="Fullpower"
    fullpower_button.addEventListener("click",function(){

    });
    fight_choices.appendChild(avoid_button)
    fight_choices.appendChild(block_button)
    fight_choices.appendChild(breath_button)
    fight_choices.appendChild(fullpower_button)
}

function menue_finish_turn(){
    //clashing, only after actions and technique is choosen
}
function menue_surrender(){
    hide_fight_menue()
}
