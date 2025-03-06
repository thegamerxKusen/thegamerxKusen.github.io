var qi_types={
    electric:{
        name:"Electric",
        desc:"Electric Qi is a type of Qi that is used to manipulate electricity.",
        weakness:null,
        strenght:null,
    },
    water:{
        name:"Water",
        desc:"Water Qi is a type of Qi that is used to manipulate water.",
        weakness:null,
        strenght:null,
    },
    fire:{
        name:"Fire",
        desc:"Fire Qi is a type of Qi that is used to manipulate fire.",
        weakness:null,
        strenght:null,
    },
    wood:{
        name:"Wood",
        desc:"Wood Qi is a type of Qi that is used to manipulate wood.",
        weakness:null,
        strenght:null,
    },
    earth:{
        name:"Earth",
        desc:"Earth Qi is a type of Qi that is used to manipulate earth.",
        weakness:null,
        strenght:null,
    },
}

// Electric->water->fire->wood->earth→electric

qi_types.electric.weakness=qi_types.earth
qi_types.water.weakness=qi_types.electric
qi_types.fire.weakness=qi_types.water
qi_types.wood.weakness=qi_types.fire
qi_types.earth.weakness=qi_types.wood

qi_types.electric.strenght=qi_types.water
qi_types.water.strenght=qi_types.fire
qi_types.fire.strenght=qi_types.wood
qi_types.wood.strenght=qi_types.earth
qi_types.earth.strenght=qi_types.electric

function who_get_boosted(qi_type_1,qi_type_2){
    if(qi_type_1.weakness==qi_type_2){
        //boost qi_type_2 damage
        return qi_type_2
    }
    if(qi_type_2.weakness==qi_type_1){
        //boost qi_type_1 damage
        return qi_type_1
    }

    if(qi_type_1.strenght==qi_type_2){
        //boost qi_type_1 damage
        return qi_type_1
    }
    if(qi_type_2.strenght==qi_type_1){
        //boost qi_type_2 damage
        return qi_type_2
    }
    return false
    
    
}