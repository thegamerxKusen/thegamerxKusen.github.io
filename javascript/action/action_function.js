function canPerformAction(actionName) {
    let action = actionName;
    console.log("can Perform Action : ")
    console.log(actionName)
    if(action.limit==-1){
        return true
    }
    if (action.limit && action.current_uses >= action.limit) {
        return false;
    }
    return true;
}

function incrementAction(actionName) {
    actionName.current_uses+=1;
}
function doAction(action){
    switch (action.name) {
        case "Sleep":
            energy_up(gameData.max_energy)
            aging(1)
            sendMessage("You had a good sleep.")
            incrementAction(actions.sleep)
            break 
        case "Eat":
            energy_up(25)
            sendMessage("You ate a humble but filling meal.")
            incrementAction(actions.eat)
            break 
        case "Bath":
            energy_up(25)
            sendMessage("You took a refreshing bath.")
            incrementAction(actions.bath)
            break 
        case "Talk to guard Jang":
            incrementAction(actions.talk_to_guard)
            sendMessage("You : Hi Guard Jang, you called for me?")
            sendMessage("Guard Jang : Hello Young Master, in a year or so you will join the cut-throat demonic academy. So i will teach you my daggers technique. Here take this training weapon.")
            addItem(wood_dagger)
            
            //testing
            addItem(black_dragon_ball)
            acquire_manual(cultivation_manual.blazing_sun_fist)
            
            where_can_you_go()
            break 
        case "Learn to read":
            
            if(energy_down(70)){
                switch(action.current_uses){
                    case 0:
                        sendMessage("You started to learn how to read.")
                        break
                    case 1:
                        sendMessage("You continued to learn how to read.")
                        break
                    case 2:
                        sendMessage("You learned how to read.")
                        sendMessage("You can now read book in the library.")
                        gameData.can_read = true
                        break
                }
                incrementAction(actions.learn_to_read)
            }else{
                sendMessage("You are too tired to study.")
            }
            
            break
        case "Dummy Training":
            start_fight(training_dummy)
            break
        default:
        console.log("wtf?");
    }
    where_can_you_go()
}