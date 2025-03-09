//-Avoid : Check speed value
//-Block: Check def value
//-Breath: check qi regen value
//-Full power 
var fight_actions=["avoid","block","breath","full_power"]


function inflict_damage(recipient,damage){
    if(recipient.health-damage<=0){
        //die
        recipient.health=0
    }else{
        recipient.health-=damage
    }
    refresh_qi_hp()
}



function clashing(){
    //if the player didnt choose his action and tech doesnt cash
//choose opponent moves
    let current_opponent = figth_stat.opponent
    //opponent tech
    // random from 0 to 3
    var opponent_tech = Math.floor(Math.random() * 4);
    current_opponent.chosen_technique=figth_stat.opponent.technique_slots[opponent_tech];

    if( current_opponent.chosen_technique && current_opponent.fight_qi-current_opponent.chosen_technique.qi_cost>=0){
        //use skill
    }else{
        current_opponent.chosen_technique = current_opponent.weapon_type.basic_skills[0]
    }
    

    //opponent actions
    //rand btw 0 - 3
    var opponent_actions = Math.floor(Math.random() * 4);
    current_opponent.chosen_actions=fight_actions[opponent_actions]
    
    let opponent_damage = (current_opponent.base_strength+current_opponent.chosen_technique.damage)-player_stats.base_defence;
    let player_damage = (player_stats.base_strength+player_stats.chosen_technique.damage)-current_opponent.base_defence;
    if(opponent_damage>player_damage){
        opponent_damage-=player_damage
        inflict_damage(player_stats,opponent_damage)
        send_fight_message(current_opponent.name+"inflicted "+opponent_damage+" on to you with "+player_stats.chosen_technique.name+".")
        //put qi cost
    }
    if(opponent_damage===player_damage){
        send_fight_message("You are both equal in strenght, no damage dealt.")
    }
    if(opponent_damage<player_damage){
        //put qi cost
        player_damage-=opponent_damage
        inflict_damage(current_opponent,player_damage)
        send_fight_message("You inflicted "+player_damage+" on to "+current_opponent.name+" with "+player_stats.chosen_technique.name+".")
    }

    figth_stat.turn+=1
    figth_stat.opponent = current_opponent
}