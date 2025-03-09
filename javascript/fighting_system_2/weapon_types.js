
var martial_technique_types = {
    sword:{
        name:"Sword",
        desc:"A sword is a weapon that is used to cut and thrust.",
        basic_skills:[basic_weapon_skills.cut,basic_weapon_skills.thrust]
    },
    spear:{
        name:"Spear",
        desc:"A spear is a weapon that is used to thrust.",
        basic_skills:[basic_weapon_skills.thrust]
    },
    bow:{
        name:"Bow",
        desc:"A bow is a weapon that is used to shoot arrows.",
        basic_skills:[basic_weapon_skills.arrow_shot]
    },
    saber:{
        name:"Saber",
        desc:"A saber is a weapon that is used to cut.",
        basic_skills:[basic_weapon_skills.slash]
    },
    barehanded:{
        name:"barehanded",
        desc:"Barehanded or with gloves.",
        basic_skills:[basic_weapon_skills.palm_strike,basic_weapon_skills.punch]
    },
    dagger:{
        name:"Dagger",
        desc:"A dagger is a weapon that is used to cut.",
        basic_skills:[basic_weapon_skills.stab,basic_weapon_skills.dagger_throw]
    },
    hidden_weapons:{
        name:"Hidden Weapons",
        desc:"Hidden Weapons are weapons that are hidden.",
        basic_skills:[basic_weapon_skills.hidden_weapons_throw]
    },
}