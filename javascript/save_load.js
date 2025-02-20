function save_something(json_path,item){
    localStorage.setItem(json_path, JSON.stringify(item))
}

function save_game(){
    save_something("nano_murim_game_data",gameData)
    save_something("nano_murim_inventory",inventory)
    save_something("nano_murim_actions",actions)
    save_something("nano_murim_place_home",Home)
    save_something("nano_machine_place_home_trainingground",TrainingGround)
    console.log(JSON.stringify(gameData))
    sendMessage("Game saved!")
}
function load_game(){
    var save_game_data = JSON.parse(localStorage.getItem("nano_murim_game_data"))
    var save_inventory = JSON.parse(localStorage.getItem("nano_murim_inventory"))
    var save_action = JSON.parse(localStorage.getItem("nano_murim_actions"))
    var save_place_home_train_ground = JSON.parse(localStorage.getItem("nano_machine_place_home_trainingground"))
    var save_place_home = JSON.parse(localStorage.getItem("nano_murim_place_home"))
    
    if (save_game_data != null) {
        gameData = save_game_data
        inventory = save_inventory
        actions = save_action   
        TrainingGround=save_place_home_train_ground
        Home = save_place_home
        console.log(TrainingGround.actions[1])
        sendMessage("Game loaded!")
    }
    where_can_you_go()
    updateInventory()
}


