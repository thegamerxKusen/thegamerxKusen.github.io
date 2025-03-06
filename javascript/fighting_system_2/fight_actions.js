//-Avoid : Check speed value
//-Block: Check def value
//-Breath: check qi regen value
//-Full power 
function avoid(enemy){
    if(player_stats.base_speed>enemy.base_speed){
        //player avoid
    }
    else{
        //enemy avoid
    }
}
function block(){
    if(player_stats.base_defence>enemy_stats.base_defence){
        //player block
    }
    else{
        //enemy block
    }
}
function breath(){
    if(player_stats.fight_qi+=gameData.breathing_manual_equiped.breath_effect/player_stats.max_fight_qi>player_stats.max_fight_qi){
        player_stats.fight_qi=player_stats.max_fight_qi
    }else{
        player_stats.fight_qi+=gameData.breathing_manual_equiped.breath_effect/player_stats.max_fight_qi
    }
}
function full_power(){
    player_stats.fight_qi=0
}
