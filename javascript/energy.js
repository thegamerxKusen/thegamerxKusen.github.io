function energy_up(up_num){
    if(gameData.energy+up_num>=gameData.max_energy){
        gameData.energy=gameData.max_energy
    }
    else{
        gameData.energy+=up_num
    }   
    document.getElementById("stam").innerHTML = gameData.energy
    document.getElementById("max_stam").innerHTML = gameData.max_energy
}
function energy_down(down_num){
    if(gameData.energy-down_num>=0){
        gameData.energy-=down_num
        document.getElementById("stam").innerHTML = gameData.energy
        document.getElementById("max_stam").innerHTML = gameData.max_energy
    }
    else{
        console.log("Not enough energy")
    }
}