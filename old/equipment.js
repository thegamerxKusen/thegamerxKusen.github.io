let player_equipment= {
    ring_1:null,
    ring_2:null,

    head:null,
    chest:null,
    legs:null,
    shoes:null,
    weapon:null
}

function equi(equiping){
    switch(equiping.equipment_type){
        case "ring_1":
            player_equipment.ring_1=equiping
            break
        case "ring_2":
            player_equipment.ring_2=equiping
            break
        case "head":
            player_equipment.head=equiping
            break
        case "chest":
            player_equipment.chest=equiping
            break
        case "legs":
            player_equipment.legs=equiping
            break
        case "shoes":
            player_equipment.shoes=equiping
            break
        case "weapon":
            player_equipment.weapon=equiping
            break
    }
    sendMessage(equiping.name+" equiped.")
}