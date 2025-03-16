var Hang_Familly_House_My_Room={
    name:"Room",
    description:"Your grand and royal bedroom",
    number_of_going_in_options:0,
    places_in :null,
    actions:[
        actions.sleep,
    ],
    numb_actions:1,
    go_back_place: null,
    hide:false

}

var Hang_Familly_House_Bathroom={
    name:"Bathroom",
    description:"Luxurious bathroom",
    number_of_going_in_options:0,
    places_in :null,
    actions:[
        actions.bath,
    ],
    numb_actions:1,
    go_back_place: null,
    hide:false

}

var Hang_Familly_House_PrivateTrainingRoom={
    name:"Private Training Room",
    description:"A room dedicated to your training",
    number_of_going_in_options:0,
    places_in :null,
    actions:[
        actions.dummy_training,
        actions.daily_training,
    ],
    numb_actions:2,
    go_back_place: null,
    hide:false

}

var Hang_Familly_House_library={
    name:"Library",
    description:"A room filled with books of martial arts, breathing techniques and others.",
    number_of_going_in_options:0,
    places_in :null,
    actions:[
        actions.learn_to_read,
        //action, to take class to learn how to read then you gain access to the library
    ],
    numb_actions:1,
    go_back_place: null,
    hide:false

}


var Hang_Familly_House_main = {
    name:"Hang Familly House",
    description:"The Hang Familly House, where the leader keep his hundreds of concubine and their children, a place of power and influence in the Forces of Evil.",
    number_of_going_in_options:4,
    places_in :[
        Hang_Familly_House_My_Room,
        Hang_Familly_House_Bathroom,
        Hang_Familly_House_PrivateTrainingRoom,
        Hang_Familly_House_library,
    ],
    actions:[],
    numb_actions:0,
    go_back_place: null,
    hide:false

}
