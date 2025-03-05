var Hang_Familly_House_My_Room={
    name:"Room",
    description:"Your grand and royal bedroom",
    number_of_going_in_options:0,
    places_in :null,
    actions:{
        1:actions.sleep,
    },
    numb_actions:1,
    go_back_place: null,
}

var Hang_Familly_House_Bathroom={
    name:"Bathroom",
    description:"Luxurious bathroom",
    number_of_going_in_options:0,
    places_in :null,
    actions:{
        1:actions.bath,
    },
    numb_actions:1,
    go_back_place: null,
}

var Hang_Familly_House_PrivateTrainingRoom={
    name:"Private Training Room",
    description:"A room dedicated to your training",
    number_of_going_in_options:0,
    places_in :null,
    actions:{
        
    },
    numb_actions:null,
    go_back_place: null,
}

var Hang_Familly_House_library={
    name:"Library",
    description:"A room filled with books of martial arts, breathing techniques and others.",
    number_of_going_in_options:0,
    places_in :null,
    actions:{
        //action, to take class to learn how to read then you gain access to the library
    },
    numb_actions:null,
    go_back_place: null,
}


var Hang_Familly_House_main = {
    name:"Hang Familly House",
    description:"The Hang Familly House, where the leader keep his hundreds of concubine and their children, a place of power and influence in the Forces of Evil.",
    number_of_going_in_options:4,
    places_in :{
        1:Hang_Familly_House_My_Room,
        2:Hang_Familly_House_Bathroom,
        3:Hang_Familly_House_PrivateTrainingRoom,
        4:Hang_Familly_House_library,
    },
    actions:null,
    numb_actions:null,
    go_back_place: null,
}

Hang_Familly_House_Bathroom.go_back_place=Hang_Familly_House_main
Hang_Familly_House_My_Room.go_back_place=Hang_Familly_House_main
Hang_Familly_House_PrivateTrainingRoom.go_back_place=Hang_Familly_House_main
Hang_Familly_House_library.go_back_place=Hang_Familly_House_main