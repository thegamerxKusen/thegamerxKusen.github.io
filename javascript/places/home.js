var Room={
    name:"Room",
    description:"Your bedroom",
    number_of_going_in_options:0,
    places_in :null,
    actions:{
        1:actions.sleep,
    },
    numb_actions:1,
}

var Bathroom={
    name:"Bathroom",
    description:"Take a bath you bitch",
    number_of_going_in_options:0,
    places_in :null,
    actions:{
        1:actions.bath,
    },
    numb_actions:1,
}

var TrainingGround={
    name:"Training Ground",
    description:"Training Ground",
    number_of_going_in_options:0,
    places_in :null,
    actions:{
        1:actions.talk_to_guard,
    },
    numb_actions:1,
}

var Kitchen={
    name:"Kitchen",
    description:"Kitchen",
    number_of_going_in_options:0,
    places_in :null,
    actions:{
        1:actions.eat,
    },
    numb_actions:1,
}

var Home = {
    name:"Home",
    description:"Not too shaby and well maintained palace with multiple building and a training ground.",
    number_of_going_in_options:4,
    places_in :{
        1:Room,
        2:Bathroom,
        3:TrainingGround,
        4:Kitchen,
    },
    actions:null,
    numb_actions:null,
}