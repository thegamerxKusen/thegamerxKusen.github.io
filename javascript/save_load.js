function save_something(json_path,item){
    localStorage.setItem(json_path, JSON.stringify(item))
}

function save_game(){
    save_something("nano_murim_game_data",gameData)
    save_something("nano_murim_inventory",inventory)
    save_something("nano_murim_actions",actions)
    save_something("nano_murim_places",places)
    console.log(JSON.stringify(gameData))
    sendMessage("Game saved!")
}
function load_game(){
    var save_game_data = JSON.parse(localStorage.getItem("nano_murim_game_data"))
    var save_inventory = JSON.parse(localStorage.getItem("nano_murim_inventory"))
    var save_action = JSON.parse(localStorage.getItem("nano_murim_actions"))
    var save_places = JSON.parse(localStorage.getItem("nano_murim_places"))
    if (save_game_data != null) {
        gameData = save_game_data
        inventory = save_inventory
        actions = save_action
        places = save_places
        sendMessage("Game loaded!")   
    }
    where_can_you_go()
    updateInventory()
    
}


