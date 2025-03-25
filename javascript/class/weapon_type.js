class WEAPON_TYPE {
    constructor(name, desc, basic_skills) {
        this.name = name
        this.desc = desc
        this.basic_skills = basic_skills
    }
}


const sword = new WEAPON_TYPE(
    "Sword",
    "A sword is a weapon that is used to cut and thrust.",
    [basic_weapon_skills.cut, basic_weapon_skills.thrust]
)
const spear = new WEAPON_TYPE(
    "Spear",
    "A spear is a weapon that is used to thrust.",
    [basic_weapon_skills.thrust]
)
const bow = new WEAPON_TYPE(
    "Bow",
    "A bow is a weapon that is used to shoot arrows.",
    [basic_weapon_skills.arrow_shot]
)
const saber = new WEAPON_TYPE(
    "Saber",
    "A saber is a weapon that is used to cut.",
    [basic_weapon_skills.slash]
)
const barehanded = new WEAPON_TYPE(
    "Barehanded",
    "Barehanded or with gloves.",
    [basic_weapon_skills.palm_strike, basic_weapon_skills.punch]
)
const dagger = new WEAPON_TYPE(
    "Dagger",
    "A dagger is a weapon that is used to cut.",
    [basic_weapon_skills.stab, basic_weapon_skills.dagger_throw]
)
const hidden_weapons = new WEAPON_TYPE(
    "Hidden Weapons",
    "Hidden Weapons are weapons that are hidden.",
    [basic_weapon_skills.hidden_weapons_throw]
)
