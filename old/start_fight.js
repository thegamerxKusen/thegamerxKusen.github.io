function start_fight(opponent){
    figth_stat.opponent=opponent
    figth_stat.turn=0
    
    set_true_stats()
    show_fight_menue(opponent)

}

function end_fight(){
    hide_fight_menue()
}