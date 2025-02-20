var actions ={
    sleep : {
    name:"Sleep",
    action_function: function sleep(){
        energy_up(gameData.max_energy)
        aging(1)
        sendMessage("You had a good sleep.")
    },
    canOnlyBeOnce:false,
},
 bath : {
    name:"Bath",
    action_function: function bath(){
        energy_up(25)
        sendMessage("You took a refreshing bath.")
    },
    canOnlyBeOnce:false,
},

 eat : {
    name:"eat",
    action_function: function eat(){
        energy_up(25)
        sendMessage("You ate a humble but filling meal.")
    },
    canOnlyBeOnce:false,
},

 talk_to_guard : {
    name:"Talk to guard Jang",
    canOnlyBeOnce:true,
    action_function: function talk_to_guard(){

        sendMessage("You : Hi Guard Jang, you called for me?")
        sendMessage("Guard Jang : Hello Young Master, in a year or so you will join the cut-throat demonic academy. So i will teach you my daggers technique. Here take this training weapon.")
        addItem(wood_dagger)
        actions.talk_to_guard.canOnlyBeOnce = "Done"
        TrainingGround={
            name:"Training Ground",
            description:"Training Ground",
            number_of_going_in_options:0,
            places_in :null,
            actions:{
                1:actions.talk_to_guard,
            },
            numb_actions:1,
        }
        Home = {
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

        gameData.story_progress=1
        places_go_to(TrainingGround)
        where_can_you_go()
    },
    
},
}