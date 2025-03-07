var Demon_Palace_My_Room={
    name:"Room",
    description:"Your grand and royal bedroom",
    number_of_going_in_options:0,
    places_in :null,
    actions:[
        actions.sleep,
    ],
    numb_actions:1,
    go_back_place: null,
}

var Demon_Palace_Bathroom={
    name:"Bathroom",
    description:"Luxurious bathroom",
    number_of_going_in_options:0,
    places_in :null,
    actions:[
        actions.bath,
    ],
    numb_actions:1,
    go_back_place: null,
}

var Demon_Palace_PrivateTrainingRoom={
    name:"Private Training Room",
    description:"A room dedicated to your training",
    number_of_going_in_options:0,
    places_in :null,
    actions:[
        actions.dummy_training
    ],
    numb_actions:1,
    go_back_place: null,
}

var Demon_Palace_library={
    name:"Library",
    description:"A room filled with books of martial arts, breathing techniques and others.",
    number_of_going_in_options:0,
    places_in :null,
    actions:[
        actions.learn_to_read,
        //action, to take class to learn how to read then you gain access to the library
    ],
    numb_actions:null,
    go_back_place: null,
}


var Demon_Palace_main = {
    name:"Demon Palace",
    description:"Grand and magnificient palace, the center piece of the Sky Demon Cult, where the Demon Lord and his familly reside.",
    number_of_going_in_options:4,
    places_in :[
        Demon_Palace_My_Room,
        Demon_Palace_Bathroom,
        Demon_Palace_PrivateTrainingRoom,
        Demon_Palace_library,
    ],
    actions:[],
    numb_actions:null,
    go_back_place: null,
}
