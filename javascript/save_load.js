function save_game(){
    localStorage.setItem("nano_murim_save", JSON.stringify(gameData))
    console.log(JSON.stringify(gameData))
}
function load_game(){
    var savegame = JSON.parse(localStorage.getItem("nano_murim_save"))
    console.log(savegame)
    if (savegame != null) {
        gameData = savegame
    }
}
