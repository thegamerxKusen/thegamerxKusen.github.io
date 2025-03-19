function canPerformAction(actionName) {
    let action = actionName;
    //console.log("can Perform Action : ")
    //console.log(actionName)
    if(action.hide){
        return false;
    }
    if(action.limit==-1){
        return true;
    }
    if (action.current_uses === action.limit) {
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
            player_stats.health = player_stats.true_max_health
            player_stats.fight_qi = player_stats.true_max_fight_qi
            incrementAction(action)
            break 
        case "Eat":
            energy_up(25)
            sendMessage("You ate a humble but filling meal.")
            incrementAction(action)
            break 
        case "Bath":
            energy_up(25)
            sendMessage("You took a refreshing bath.")
            incrementAction(actions)
            break 
        case "Talk to guard Jang":
            incrementAction(action)
            sendMessage("You : Hi Guard Jang, you called for me?")
            sendMessage("Guard Jang : Hello Young Master, in a year or so you will join the cut-throat demonic academy. So i will teach you my daggers technique. Here take this training weapon.")
            addItem(wood_dagger)
            actions.talk_to_guard.hide=true
            //testing
            addItem(black_dragon_ball)
            acquire_manual(cultivation_manual.blazing_sun_fist)
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
                incrementAction(action)
            }else{
                sendMessage("You are too tired to study.")
            }
            
            break
        case "Dummy Training":
            start_fight(training_dummy)
            break
        case "Physical Training":
            
            let messages =["You holded the horse stance all morning without flinching","Today's training was really hard, you are really tired and can't move a finger.","You didnt do well today in training, you couldn't concentrate and didn't achieve anything","You did toughening training and was hit all day.","You ran lap endlessly.","You spared with the instructor."]
            let message_numb = Math.floor(Math.random()*messages.length)
            sendMessage(messages[message_numb])
            switch (message_numb) {
                case 0:
                    gameData.max_energy+=1
                    sendMessage("You gained 1 stamina")
                    break;
                case 1:
                    add_speed(1)
                    add_strenght(1)
                    break;
                case 3:
                    add_defence(1)
                    break;
                case 4:
                    add_speed(1)
                    gameData.max_energy+=1
                    sendMessage("You gained 1 stamina")
                    break;
                case 5:
                    add_strenght(1)
                    add_intelligence(1)
                    break;
                default:
                    break;
            }
            stat_update()
            aging(1)
            break
        default:
            break
        console.log("wtf?");
        
    }
    where_can_you_go()
}