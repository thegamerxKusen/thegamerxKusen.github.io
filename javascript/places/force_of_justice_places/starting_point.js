var Namgung_Clan_Main_Residence_My_Room={
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

var Namgung_Clan_Main_Residence_Bathroom={
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

var Namgung_Clan_Main_Residence_PrivateTrainingRoom={
    name:"Private Training Room",
    description:"A room dedicated to your training",
    number_of_going_in_options:0,
    places_in :null,
    actions:[
        actions.dummy_training,
    ],
    numb_actions:null,
    go_back_place: null,
}

var Namgung_Clan_Main_Residence_library={
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


var Namgung_Clan_Main_Residence = {
    name:"Namgung Clan Main Residence",
    description:"Grand and noble reasidence housing the namgung clan's main branch.",
    number_of_going_in_options:4,
    places_in :[
        Namgung_Clan_Main_Residence_My_Room,
        Namgung_Clan_Main_Residence_Bathroom,
        Namgung_Clan_Main_Residence_PrivateTrainingRoom,
        Namgung_Clan_Main_Residence_library,
    ],
    actions:[],
    numb_actions:null,
    go_back_place: null,
}