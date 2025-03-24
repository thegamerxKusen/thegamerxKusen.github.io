function start_fight(enemy){
    if(enemy instanceof ENEMY){

    }else{
        console.log(enemy +"Is not An Enemy")
    }
}
const fight_tabs=["moves-tab","actions-tab"]
function open_fight_tab(index){
    for(let item of fight_tabs){
        document.getElementById(item).style.display="none"
    }
    document.getElementById(fight_tabs[index]).style.display="block"
}

function open_fight_menue(enemy){
    if(document.getElementsByClassName("main-game")[0]){
        document.getElementsByClassName("main-game")[0].remove()
    }
    document.getElementById("body").innerHTML=`
    <div id="fight-menue">
        <div id="enemy-label">
            <h1>${enemy.name}   Realm : ${enemy.realm.name}</h1>
            <h2 id="enemy-health"><progress id="health" value="${enemy.health}" max="${enemy.max_health}"></progress>${enemy.health} / ${enemy.max_health}</h2>
        </div>
        <div id="fight-console">

        </div>
        <div id="player-label">
            <h1>${player.name}   Realm : ${getRealm(player.realm).name}</h1>
            <h2 id="player-health"><progress id="health" value="${player.health}" max="${player.max_health}"></progress>${player.health} / ${player.max_health}</h2>
            <h2 id="player-ki"><progress id="internal" value="${player.qi}" max="${player.max_qi}"></progress>${player.qi} / ${player.max_qi}</h2>

        </div>
        <div id="botom-part">
            <div class="tab-selection">
                <button class="tab-button" onclick="open_fight_tab(0)">Moves</button>
                <button class="tab-button" onclick="open_fight_tab(1)">Actions</button>
                <button class="tab-button" onclick="">Surender</button>
            </div>
            <div id="moves-tab">Moves</div>
            <div id="actions-tab">Actions</div>
        </div>
    </div>
    `
    open_fight_tab(0)
    add_tooltip(document.getElementById("enemy-health"),"Enemy Health")
    add_tooltip(document.getElementById("player-health"),"Player Health")
}

function close_fight_menue(){
    document.getElementById("body").innerHTML=''
    open_main_game()
}