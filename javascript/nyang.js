function money_up(number){
    gameData.silver_nyang+=number
    document.getElementById("money").innerHTML = gameData.silver_nyang
}
function money_down(number){
    gameData.silver_nyang-=number
    document.getElementById("money").innerHTML = gameData.silver_nyang
}