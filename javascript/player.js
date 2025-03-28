let player = {
    sex:"base",
    faction:"base",
    name:"base",

    qi_days: 0,
    
    realm:0,

    title:"title",

    age:9,
    //lifespan:0,


    max_stamina:50,
    stamina:50,

    health:50,
    qi:1,

    max_health:50,
    max_qi:1,
    pasive_qi_regeneration:1,

    additional_cultivation_speed_effect:0,

    isCultivating:false,
    cultivation_progress:0,

    place_you_in:sky_demon_order,
    last_place:[],
    icon_path:"assets/boy_cultivating.png",
    silver_nyang:0,

    breathing_manual_equiped:three_power,

    //equipment
    head_gear:null,
    upperboddy_gear:null,
    lowerboddy_gear:null,
    shoes_gear:null,

    weapons_gear:null,

    can_read:false,
}

let player_base_stats = {
    base_speed:10,
    base_strength:10,
    base_defence:10,
    base_intelligence:10,
}

let player_stats={
    name:null,
    
    
    
    true_speed:10,
    true_strength:10,
    true_defence:10,
    true_intelligence:10,


    technique_slots:[null],
    weapon_type: null,

    chosen_technique:null,
    chosen_actions:null
}

function add_cult_progress(add){
    if(add+player.cultivation_progress>=getRealm(player.realm).bottleneck){
        player.cultivation_progress=getRealm(player.realm).bottleneck
    }else{
        player.cultivation_progress+=add
    }
    refresh_stat()
}