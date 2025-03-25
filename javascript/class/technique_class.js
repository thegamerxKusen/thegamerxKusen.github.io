class TECHNIQUE{
    constructor(name,weapon_needed,qi_cost,cooldown_in_turn,damage,passive,description,element){
        this.name = name
        this.weapon_needed = weapon_needed
        this.qi_cost = qi_cost
        this.cooldown_in_turn = cooldown_in_turn
        this.damage = damage
        this.passive = passive
        this.description = description
        this.element = element
    }
}

const basic_weapon_skills = {
    slash: new TECHNIQUE("Slash", null, 0, 0, 10, null, "A slash is a saber technique used to cut.", null),
    thrust: new TECHNIQUE("Thrust", null, 0, 0, 10, null, "A thrust is a spear technique used to thrust.", null),
    stab: new TECHNIQUE("Stab", null, 0, 0, 10, null, "A stab is a sword technique used to stab.", null),
    cut: new TECHNIQUE("Cut", null, 0, 0, 10, null, "A cut is a blade technique used to cut.", null),
    punch: new TECHNIQUE("Punch", null, 0, 0, 10, null, "A punch is a fist technique used to punch.", null),
    palm_strike: new TECHNIQUE("Palm Strike", null, 0, 0, 10, null, "A palm strike is a palm technique used to strike.", null),
    dagger_throw: new TECHNIQUE("Dagger Throw", null, 0, 0, 10, null, "A dagger throw is a dagger technique used to throw a dagger.", null),
    arrow_shot: new TECHNIQUE("Arrow Shot", null, 0, 0, 10, null, "An arrow shot is a bow technique used to shoot an arrow.", null),
    hidden_weapons_throw: new TECHNIQUE("Hidden Weapons Throw", "hidden_weapons", 0, 0, 10, null, "A hidden weapons throw is used to throw hidden weapons smeared with poison.", null),
}