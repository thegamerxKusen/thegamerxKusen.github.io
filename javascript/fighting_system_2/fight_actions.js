//-Avoid : Check speed value
//-Block: Check def value
//-Breath: check qi regen value
//-Full power 
var fight_actions=["avoid","block","breath","full_power"]
function avoid(user){

    if(user.base_speed>enemy.base_speed){
        //player avoid
    }
    else{
        //enemy avoid
    }
}
function block(user){
    if(user.base_defence>user.base_defence){
        //player block
    }
    else{
        //enemy block
    }
}
function breath(user){
    if(user.fight_qi+=gameData.breathing_manual_equiped.breath_effect/user.max_fight_qi>user.max_fight_qi){
        user.fight_qi=user.max_fight_qi
    }else{
        user.fight_qi+=gameData.breathing_manual_equiped.breath_effect/user.max_fight_qi
    }
}
function full_power(user,per_cent){
    
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
        current_opponent.chosen_technique = current_opponent.weapon_type.basic_skill[0]
    }
    

    //opponent actions
    //rand btw 0 - 3
    var opponent_actions = Math.floor(Math.random() * 4);
    current_opponent.chosen_actions=fight_actions[opponent_actions]
    

}