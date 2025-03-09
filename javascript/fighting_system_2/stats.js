var player_stats={
    name:gameData.name,
    max_health:100,
    health:100,

    fight_qi:100,
    max_fight_qi:100,

    base_speed:10,
    base_strength:10,
    base_defence:10,
    base_intelligence:10,

    technique_slots:[third_rate_weapon_skills.fire_punch,third_rate_weapon_skills.fire_palm_strike,third_rate_weapon_skills.electric_punch,null],
    weapon_type: martial_technique_types.barehanded,

    chosen_technique:null,
    chosen_actions:null
}
setInterval(() => {
    console.log("DEBUG: weapon_type dans fight_menue.js", player_stats.weapon_type);
}, 2000);
var opponent_example={
    name:"jacque",
    max_health:100,
    health:100,

    fight_qi:100,
    max_fight_qi:100,

    base_speed:10,
    base_strength:10,
    base_defence:10,
    base_intelligence:10,

    technique_slots:[null,null,null,null],
    weapon_type:martial_technique_types.barehanded,

    chosen_technique:null,
    chosen_actions:null
}

var training_dummy={
    name:"Training Dummy",
    max_health:100000,
    health:100000,

    fight_qi:100,
    max_fight_qi:100,

    base_speed:10,
    base_strength:10,
    base_defence:10,
    base_intelligence:10,

    technique_slots:[null,null,null,null],
    weapon_type:martial_technique_types.barehanded,

    chosen_technique:null,
    chosen_actions:null
}


var figth_stat={
    opponent:training_dummy,
    turn:0,
}