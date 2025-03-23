function save_something(json_path,item){
    localStorage.setItem(json_path, JSON.stringify(item))
}
function save_game(){
    save_something("murim_simulator_player",player)
    save_something("murim_simulator_player_stats",player_stats)
    save_something("murim_simulator_player_base_stats",player_base_stats)
    const invData = inventory.map(item=> item.name);
    save_something("murim_simulator_inventory",invData)
    sendMessage("Game saved!")
}
function load_game(){
    let p =JSON.parse(localStorage.getItem("murim_simulator_player"))
    let p_s =JSON.parse(localStorage.getItem("murim_simulator_player_stats"))
    let p_b_s = JSON.parse(localStorage.getItem("murim_simulator_player_base_stats"))
    let i = JSON.parse(localStorage.getItem("murim_simulator_inventory"))
    
    if(p){
        player =p
        player_stats = p_s
        player_base_stats = p_b_s
        inventory = i.map(name => item_master_list[name]) 

        if(document.getElementsByClassName("main-game")[0]){
            document.getElementsByClassName("main-game")[0].remove()
        }
        open_main_game()
        sendMessage("Game loaded!")
        sky_demon_order.go()
        return true
    }
    return false

}