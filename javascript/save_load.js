function save_something(json_path,item){
    localStorage.setItem(json_path, JSON.stringify(item))
}

function save_game(){

    save_something("nano_murim_game_data",gameData)
    save_something("nano_murim_inventory",inventory)
    save_something("nano_murim_actions",actions)
    save_something("nano_murim_breathing_manual_inventory",cultivation_manual_inventory)
//places
    reset_places_to_go_back()
    save_something("nano_murim_places",places)
    console.log(Hang_Familly_House_My_Room.go_back_place)
    set_straight_places_to_go_back()
    console.log(Hang_Familly_House_My_Room.go_back_place)

    console.log(JSON.stringify(gameData))
    sendMessage("Game saved!")
}
function load_game(){
    var save_game_data = JSON.parse(localStorage.getItem("nano_murim_game_data"))
    var save_inventory = JSON.parse(localStorage.getItem("nano_murim_inventory"))
    var save_action = JSON.parse(localStorage.getItem("nano_murim_actions"))
    var save_places = JSON.parse(localStorage.getItem("nano_murim_places"))
    var save_breathing_manual_inventory = JSON.parse(localStorage.getItem("nano_murim_breathing_manual_inventory"))
    if (save_game_data != null) {
        console.log(save_game_data)
        gameData = save_game_data
        inventory = save_inventory
        actions = save_action
        places = save_places
        cultivation_manual_inventory = save_breathing_manual_inventory
        sendMessage("Game loaded!")   
    }
    set_straight_places_to_go_back() // Ensure go_back_place properties are correctly set
    stat_update()
    where_can_you_go()
    updateInventory()
}
