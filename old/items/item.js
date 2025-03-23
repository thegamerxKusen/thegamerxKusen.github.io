//weapon
const wood_dagger = {
    const_name: "wood_dagger",
    name: "Wooden Dagger",
    desc: "A simple wooden dagger used for training.",
 
    can_consume: false,
    can_equip: true,
    damage: 3,
    icon: "assets/item/weapon/wooden_dagger.png",

    type: martial_technique_types.dagger,
    equipment_type:"weapon",
};

const iron_dagger = {
    const_name:"iron_dagger",
    name:"Iron Dagger",
    desc:"Dagger of poor quality given by Guard Jang",
    crafting_recipe:null,
    can_consume:false,
    can_equip: true,
    
    damage:6,
    icon:"assets/item/weapon/iron_dagger.png",
    type: martial_technique_types.dagger,
    equipment_type:"weapon",
};

const frost_iron_dagger = {
    const_name: "frost_iron_dagger",
    name: "Frost Iron Dagger",
    desc: "A dagger forged with frost iron, giving it a chilling aura.",
 
    can_consume: false,
    can_equip: true,
    
    damage: 9,
    icon: "assets/item/weapon/frost_iron_dagger.webp",
    type: martial_technique_types.dagger,
    equipment_type:"weapon",
};

const meteorite_dagger = {
    const_name: "meteorite_dagger",
    name: "Meteorite Dagger",
    desc: "A dagger made from a fallen star, possessing unparalleled sharpness.",
 
    can_consume: false,
    can_equip: true,
    
    damage: 12,
    icon: "assets/item/weapon/meteorite_dagger.webp",
    type: martial_technique_types.dagger,
    equipment_type:"weapon",
};

const wood_sword = {
    const_name: "wood_sword",
    name: "Wooden Sword",
    desc: "A basic wooden sword for training purposes.",
 
    can_consume: false,
    can_equip: true,
    
    damage: 5,
    icon: "assets/item/weapon/wood_sword.webp",
    type: martial_technique_types.sword,
    equipment_type:"weapon",
};

const iron_sword = {
    const_name: "iron_sword",
    name: "Iron Sword",
    desc: "A standard iron sword used by guards.",
 
    can_consume: false,
    can_equip: true,
    
    damage: 8,
    icon: "assets/item/weapon/iron_sword.png",
    type: martial_technique_types.sword,
    equipment_type:"weapon",
};

const frost_iron_sword = {
    const_name: "frost_iron_sword",
    name: "Frost Iron Sword",
    desc: "A sword infused with frost iron, freezing enemies on impact.",
 
    can_consume: false,
    can_equip: true,
    
    damage: 11,
    icon: "assets/item/weapon/frost_iron_sword.webp",
    type: martial_technique_types.sword,
    equipment_type:"weapon",
};

const meteorite_sword = {
    const_name: "meteorite_sword",
    name: "Meteorite Sword",
    desc: "A sword forged from meteorite ore, cutting through steel with ease.",

    can_consume: false,
    can_equip: true,
    
    damage: 14,
    icon: "assets/item/weapon/meteorite_sword.webp",
    type: martial_technique_types.sword,
    equipment_type:"weapon",
};

const wood_spear = {
    const_name: "wood_spear",
    name: "Wooden Spear",
    desc: "A simple wooden spear, often used for training.",

    can_consume: false,
    can_equip: true,
    
    damage: 4,
    icon: "assets/item/weapon/wood_spear.webp",
    type: martial_technique_types.spear,
    equipment_type:"weapon",
};

const iron_spear = {
    const_name: "iron_spear",
    name: "Iron Spear",
    desc: "A spear crafted from iron, reliable in battle.",

    can_consume: false,
    can_equip: true,
    
    damage: 7,
    icon: "assets/item/weapon/iron_spear.png",
    type: martial_technique_types.spear,
    equipment_type:"weapon",
};

const frost_iron_spear = {
    const_name: "frost_iron_spear",
    name: "Frost Iron Spear",
    desc: "A spear infused with frost iron, slowing enemies with each strike.",

    can_consume: false,
    can_equip: true,
    
    damage: 10,
    icon: "assets/item/weapon/frost_iron_spear.webp",
    type: martial_technique_types.spear,
    equipment_type:"weapon",
};

const meteorite_spear = {
    const_name: "meteorite_spear",
    name: "Meteorite Spear",
    desc: "A spear made from meteorite metal, piercing through armor effortlessly.",

    can_consume: false,
    can_equip: true,
    
    damage: 13,
    icon: "assets/item/weapon/meteorite_spear.webp",
    type: martial_technique_types.spear,
    equipment_type:"weapon",
};


const wood_hidden_weapon = {
    const_name: "wood_hidden_weapon",
    name: "Wooden Hidden Weapon",
    desc: "A training hidden weapon with little lethality.",
    can_equip: true,
    can_consume: false,
    
    damage: 2,
    icon: "assets/item/weapon/wood_hidden_weapon.webp",
    type: martial_technique_types.hidden_weapons,
    equipment_type:"weapon",
};

const iron_hidden_weapon = {
    const_name: "iron_hidden_weapon",
    name: "Iron Hidden Weapon",
    desc: "Sharp iron throwing weapons used by assassins.",
    can_equip: true,
    can_consume: false,
    
    damage: 5,
    icon: "assets/item/weapon/iron_hidden_weapon.png",
    type: martial_technique_types.hidden_weapons,
    equipment_type:"weapon",
};

const frost_iron_hidden_weapon = {
    const_name: "frost_iron_hidden_weapon",
    name: "Frost Iron Hidden Weapon",
    desc: "A hidden weapon with a freezing effect, slowing enemies.",
    can_equip: true,
    can_consume: false,
    
    damage: 8,
    icon: "assets/item/weapon/frost_iron_hidden_weapon.webp",
    type: martial_technique_types.hidden_weapons,
    equipment_type:"weapon",
};

const meteorite_hidden_weapon = {
    const_name: "meteorite_hidden_weapon",
    name: "Meteorite Hidden Weapon",
    desc: "A concealed weapon made from meteorite, striking with deadly precision.",
    can_equip: true,
    can_consume: false,
    
    damage: 11,
    icon: "assets/item/weapon/meteorite_hidden_weapon.webp",
    type: martial_technique_types.hidden_weapons,
    equipment_type:"weapon",
};

const wood_saber = {
    const_name: "wood_saber",
    name: "Wooden Saber",
    desc: "A wooden training saber, lightweight but weak.",
    can_equip: true,
    can_consume: false,
    
    damage: 4,
    icon: "assets/item/weapon/wood_saber.webp",
    type: martial_technique_types.saber,
    equipment_type:"weapon",
};

const iron_saber = {
    const_name: "iron_saber",
    name: "Iron Saber",
    desc: "A well-balanced iron saber used by martial artists.",
    can_equip: true,
    can_consume: false,
    
    damage: 7,
    icon: "assets/item/weapon/iron_saber.webp",
    type: martial_technique_types.saber,
    equipment_type:"weapon",
};

const frost_iron_saber = {
    const_name: "frost_iron_saber",
    name: "Frost Iron Saber",
    desc: "A saber infused with frost iron, delivering chilling strikes.",
    can_equip: true,
    can_consume: false,
    
    damage: 10,
    icon: "assets/item/weapon/frost_iron_saber.webp",
    type: martial_technique_types.saber,
    equipment_type:"weapon",
};

const meteorite_saber = {
    const_name: "meteorite_saber",
    name: "Meteorite Saber",
    desc: "A saber forged from meteorite ore, sharp enough to cut through steel.",
    can_equip: true,
    can_consume: false,
    
    damage: 13,
    icon: "assets/item/weapon/meteorite_saber.webp",
    type: martial_technique_types.saber,
    equipment_type:"weapon",
};
//equipment
//ring
//stat boost = speed,defence,inteligence,strenght
const iron_ring = {
    const_name: "iron_ring",
    name: "Iron Ring",
    desc: "A simple iron ring that slightly enhances strength.",
    
    can_consume: false,
    can_equip: true,
    type: "ring",

    icon: "assets/item/accessory/iron_ring.png",
    
    stat_boost:[1,1,1,1]
};

const frost_iron_ring = {
    const_name: "frost_iron_ring",
    name: "Frost Iron Ring",
    desc: "A ring infused with frost iron, increasing agility.",
    
    can_consume: false,
    can_equip: true,
    type: "ring",

    icon: "assets/item/accessory/frost_iron_ring.png",
    stat_boost:[2,2,2,2]
};

const meteorite_ring = {
    const_name: "meteorite_ring",
    name: "Meteorite Ring",
    desc: "A ring crafted from meteorite, boosting attack power.",
    
    can_consume: false,
    can_equip: true,
    type: "ring",

    icon: "assets/item/accessory/meteorite_ring.png",
    stat_boost:[4,4,4,4]
};

//helmet
const iron_helmet = {
    const_name: "iron_helmet",
    name: "Iron Helmet",
    desc: "A sturdy iron helmet offering decent protection.",
    
    can_consume: false,
    can_equip: true,
    type: "head",
    icon: "assets/item/armor/iron_helmet.png",
    stat_boost:[0,2,1,0]
};

const frost_iron_helmet = {
    const_name: "frost_iron_helmet",
    name: "Frost Iron Helmet",
    desc: "A helmet reinforced with frost iron, offering superior protection.",
    
    can_consume: false,
    can_equip: true,
    type: "head",
    
    icon: "assets/item/armor/frost_iron_helmet.png",
    stat_boost:[0,4,2,0]
};

const meteorite_helmet = {
    const_name: "meteorite_helmet",
    name: "Meteorite Helmet",
    desc: "A helmet forged from meteorite, offering unmatched protection.",
    
    can_consume: false,
    can_equip: true,
    type: "head",
    
    icon: "assets/item/armor/meteorite_helmet.png",
    stat_boost:[0,10,4,0]
};
//chest armor
const iron_chestplate = {
    const_name: "iron_chestplate",
    name: "Iron Chestplate",
    desc: "A durable iron chestplate providing solid protection.",
    
    can_consume: false,
    can_equip: true,
    type: "chest",
    icon: "assets/item/armor/iron_chestplate.png",
    stat_boost:[0,2,0,1]
};

const frost_iron_chestplate = {
    const_name: "frost_iron_chestplate",
    name: "Frost Iron Chestplate",
    desc: "A chestplate reinforced with frost iron, offering better defense.",
    
    can_consume: false,
    can_equip: true,
    type: "chest",
    
    icon: "assets/item/armor/frost_iron_chestplate.png",
    stat_boost:[0,4,0,2]
};

const meteorite_chestplate = {
    const_name: "meteorite_chestplate",
    name: "Meteorite Chestplate",
    desc: "A chestplate made from meteorite, highly resistant to damage.",
    
    can_consume: false,
    can_equip: true,
    type: "chest",
    
    icon: "assets/item/armor/meteorite_chestplate.png",
    stat_boost:[0,10,0,4]
};
//leg
const iron_leggings = {
    const_name: "iron_leggings",
    name: "Iron Leggings",
    desc: "Iron leggings offering basic leg protection.",
    
    can_consume: false,
    can_equip: true,
    type: "legs",
    
    icon: "assets/item/armor/iron_leggings.png",
    stat_boost:[2,1,0,0]
};

const frost_iron_leggings = {
    const_name: "frost_iron_leggings",
    name: "Frost Iron Leggings",
    desc: "Leggings reinforced with frost iron for extra protection.",
    
    can_consume: false,
    can_equip: true,
    type: "legs",
    
    icon: "assets/item/armor/frost_iron_leggings.png",
    stat_boost:[4,2,0,0]
};

const meteorite_leggings = {
    const_name: "meteorite_leggings",
    name: "Meteorite Leggings",
    desc: "Leggings made from meteorite metal, offering excellent protection.",
    
    can_consume: false,
    can_equip: true,
    type: "legs",
    
    icon: "assets/item/armor/meteorite_leggings.png",
    stat_boost:[10,4,0,0]
};
//shoes
const iron_boots = {
    const_name: "iron_boots",
    name: "Iron Boots",
    desc: "Sturdy iron boots that provide moderate protection.",
    
    can_consume: false,
    can_equip: true,
    type: "shoes",
    
    icon: "assets/item/armor/iron_boots.png",
    stat_boost:[4,0,0,0]
};

const frost_iron_boots = {
    const_name: "frost_iron_boots",
    name: "Frost Iron Boots",
    desc: "Boots reinforced with frost iron, increasing movement speed in snow.",
    
    can_consume: false,
    can_equip: true,
    type: "shoes",
    defense: 5,
    
    icon: "assets/item/armor/frost_iron_boots.png",
    stat_boost:[8,0,0,0]
};

const meteorite_boots = {
    const_name: "meteorite_boots",
    name: "Meteorite Boots",
    desc: "Boots made from meteorite metal, boosting speed and defense.",
    
    can_consume: false,
    can_equip: true,
    type: "shoes",
    
    icon: "assets/item/armor/meteorite_boots.png",
    stat_boost:[15,0,0,0]
};


//elixir
const type_elixir = {
}
const black_dragon_ball = {
    const_name: "black_dragon_ball",
    name: "Black Dragon Ball",
    desc: "A medicine ball within the Demonic Cult that was created by the founding clan leader of the Poison Clan named Baek Yu. It wasn't as good as the ones created in the Shaolin Temple in Sorim, but it was still good enough to allow the person who consumed it to gain at most 20 years' worth of internal energy.",
    can_consume: true,
    type: type_elixir,
    icon: "assets/item/elixir/Black_Dragon_Ball.webp",
    consume: function consume_func() {
        sendMessage("You consume the black dragon ball and manage to get 15 year worht of Qi.")
        if(gameData.qi_days+15*constante.year<=realms[gameData.realm]["max_qi_days"]){
            gameData.qi_days += 15*constante.year
        } 
        else{
            gameData.qi_days=realms[gameData.realm]["max_qi_days"]
        }
        aging(1)
        stat_update()
    }
};