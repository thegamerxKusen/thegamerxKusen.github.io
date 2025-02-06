function save_game(){
    localStorage.setItem("nano_murim_game_data", JSON.stringify(gameData))
    localStorage.setItem("nano_murim_inventory",JSON.stringify(inventory))
    console.log(JSON.stringify(gameData))
}
function load_game(){
    var save_game_data = JSON.parse(localStorage.getItem("nano_murim_game_data"))
    var save_inventory = JSON.parse(localStorage.getItem("nano_murim_inventory"))
    if (save_game_data != null) {
        gameData = save_game_data
        inventory = save_inventory
    }
}
