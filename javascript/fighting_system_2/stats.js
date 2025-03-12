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

    defeat_effect:function(){
        add_random_stat(1)
    },
}

//to move up but now it will mess with load order
var figth_stat={
    opponent:training_dummy,
    turn:0,
}

//stat boost = speed,defence,inteligence,strenght
function set_true_stats(){
    //apply affect of items, manual, and other maybe even realm boost?
    player_stats.true_speed=base_stats.base_speed
    player_stats.true_strength=base_stats.base_strength
    player_stats.true_defence=base_stats.base_defence
    player_stats.true_intelligence=base_stats.base_intelligence

    player_stats.true_max_fight_qi=base_stats.max_fight_qi
    player_stats.true_max_health=base_stats.max_health

    //max gi base on realm wth *2 each time

    if(player_equipment.ring_1){
        player_stats.true_speed+=player_equipment.ring_1.stat_boost[0]
        player_stats.true_defence+=player_equipment.ring_1.stat_boost[1]
        player_stats.true_intelligence+=player_equipment.ring_1.stat_boost[2]
        player_stats.true_strength+=player_equipment.ring_1.stat_boost[3]
    }
    if(player_equipment.ring_2){
        player_stats.true_speed+=player_equipment.ring_2.stat_boost[0]
        player_stats.true_defence+=player_equipment.ring_2.stat_boost[1]
        player_stats.true_intelligence+=player_equipment.ring_2.stat_boost[2]
        player_stats.true_strength+=player_equipment.ring_2.stat_boost[3]
    }
    if(player_equipment.head){
        player_stats.true_speed+=player_equipment.head.stat_boost[0]
        player_stats.true_defence+=player_equipment.head.stat_boost[1]
        player_stats.true_intelligence+=player_equipment.head.stat_boost[2]
        player_stats.true_strength+=player_equipment.head.stat_boost[3]
    }
    if(player_equipment.chest){
        player_stats.true_speed+=player_equipment.chest.stat_boost[0]
        player_stats.true_defence+=player_equipment.chest.stat_boost[1]
        player_stats.true_intelligence+=player_equipment.chest.stat_boost[2]
        player_stats.true_strength+=player_equipment.chest.stat_boost[3]
    }
    if(player_equipment.legs){
        player_stats.true_speed+=player_equipment.legs.stat_boost[0]
        player_stats.true_defence+=player_equipment.legs.stat_boost[1]
        player_stats.true_intelligence+=player_equipment.legs.stat_boost[2]
        player_stats.true_strength+=player_equipment.legs.stat_boost[3]
    }
    if(player_equipment.shoes){
        player_stats.true_speed+=player_equipment.shoes.stat_boost[0]
        player_stats.true_defence+=player_equipment.shoes.stat_boost[1]
        player_stats.true_intelligence+=player_equipment.shoes.stat_boost[2]
        player_stats.true_strength+=player_equipment.shoes.stat_boost[3]
    }
    if(player_equipment.weapon){
        player_stats.true_strength+=player_equipment.weapon.damage
    }
    
}

function add_defence(number){
    base_stats.base_defence+=number
    sendMessage("You gained "+number+" defence stat.")
}
function add_speed(number){
    base_stats.base_speed+=number

    sendMessage("You gained "+number+" speed stat.")
}
function add_strenght(number){
    base_stats.base_strength+=number

    sendMessage("You gained "+number+" strenght stat.")
}
function add_intelligence(number){
    base_stats.base_intelligence+=number

    sendMessage("You gained "+number+" intelligence stat.")
}
//doesnt work yet
function add_random_stat(stat_number){
    let stat_name = null
    var random_stats = Math.floor(Math.random() * 4);
    switch(random_stats){
        case 0:
            stat_name = " speed "
            add_speed(stat_number)
            break
        case 1:
            stat_name = " defense "
            add_defence(stat_number)
            break
        case 2:
            stat_name = " intelligence "
            add_intelligence(stat_number)
            break
        case 3:
            stat_name = " strenght "
            add_strenght(stat_number)
            break
        default:
            console.log("Whats this stat?")
            break
    }
}