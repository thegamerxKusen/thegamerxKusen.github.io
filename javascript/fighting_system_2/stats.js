var base_stats={
    base_speed:10,
    base_strength:10,
    base_defence:10,
    base_intelligence:10,

    max_health:100,
    max_fight_qi:100,
}
var player_stats={
    name:gameData.name,
    
    health:100,
    fight_qi:100,
    
    true_speed:10,
    true_strength:10,
    true_defence:10,
    true_intelligence:10,

    true_max_health:100,
    true_max_fight_qi:100,

    technique_slots:[third_rate_weapon_skills.fire_punch,third_rate_weapon_skills.fire_palm_strike,third_rate_weapon_skills.electric_punch,null],
    weapon_type: martial_technique_types.barehanded,

    chosen_technique:null,
    chosen_actions:null
}



//to move to a opponent file
var training_dummy={
    name:"Training Dummy",
    max_health:100,
    health:100,

    fight_qi:100,
    max_fight_qi:100,

    base_speed:10,
    base_strength:10,
    base_defence:10,
    base_intelligence:10,

    technique_slots:[third_rate_weapon_skills.fire_punch,third_rate_weapon_skills.fire_palm_strike,third_rate_weapon_skills.electric_punch,null],
    weapon_type:martial_technique_types.barehanded,
    chosen_technique:null,
    chosen_actions:null,

    defeat_effect:add_random_stat(1)
}

//to move up but now it will mess with load order
var figth_stat={
    opponent:training_dummy,
    turn:0,
}

function set_true_stats(){
    //apply affect of items, manual, and other maybe even realm boost?
    
}

//doesnt work yet
function add_random_stat(stat_number){
    let stat_name = null
    var random_stats = Math.floor(Math.random() * 4);
    switch(random_stats){
        case 0:
            stat_name = " speed "
            base_stats.base_speed+=stat_number
            break
        case 1:
            stat_name = " defence "
            base_stats.base_defence+=stat_number
            break
        case 2:
            stat_name = " intelligence "
            base_stats.base_intelligence+=stat_number
            break
        case 3:
            stat_name = " strenght "
            base_stats.base_strength+=stat_number
            break
    }
    sendMessage("You gained "+stat_number+stat_name+"stat.")
}