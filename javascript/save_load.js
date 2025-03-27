function save_something(json_path,item){
    localStorage.setItem(json_path, JSON.stringify(item))
}
function save_game(){
    save_something("murim_simulator_player",player)
    save_something("murim_simulator_player_stats",player_stats)
    save_something("murim_simulator_player_base_stats",player_base_stats)
    const invData = inventory.map(item=> item.name)
    const manualData = cultivation_manual_inventory.map(item => item.name)
    save_something("murim_simulator_cultivation_manual_inventory",manualData)
    save_something("murim_simulator_inventory",invData)
    sendMessage("Game saved!")
}
function load_game(){
    let p =JSON.parse(localStorage.getItem("murim_simulator_player"))
    let p_s =JSON.parse(localStorage.getItem("murim_simulator_player_stats"))
    let p_b_s = JSON.parse(localStorage.getItem("murim_simulator_player_base_stats"))
    let i = JSON.parse(localStorage.getItem("murim_simulator_inventory"))
    let c_m_i = JSON.parse(localStorage.getItem("murim_simulator_cultivation_manual_inventory"))
    
    if(p){
        player =p
        player.breathing_manual_equiped=manual_registery[player.breathing_manual_equiped.name]
        if(player.weapons_gear){
            player.weapons_gear=item_master_list[player.weapons_gear.name]
        }
        player.place_you_in=sky_demon_order
        player.last_place=[]
        player_stats = p_s
        player_base_stats = p_b_s
        inventory = i.map(name => item_master_list[name]) 
        cultivation_manual_inventory = c_m_i.map(name=>manual_registery[name])
        if(document.getElementsByClassName("main-game")[0]){
            document.getElementsByClassName("main-game")[0].remove()
        }
        open_main_game()
        sendMessage("Game loaded!")
        return true
    }
    return false

}