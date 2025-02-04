var sleep = {
    name:"Sleep",
    action_function: function sleep(){
        energy_up(gameData.max_energy)
        aging(1)
    } 
}
var bath = {
    name:"Bath",
    action_function: function bath(){
        energy_up(25)
    }
}

var eat = {
    name:"eat",
    action_function: function eat(){
        energy_up(25)
    }
}
