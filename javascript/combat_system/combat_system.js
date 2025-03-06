
var base_combat_stats={
    raw_strenght:2,//determine attack power
    raw_speed:2,//determine evasion and attack speed maybe?
    raw_intelligence:2,//
    raw_durability:2,//defense resistance to damage
    //all this multiplied and modified my the breathing manual equiped by the player
    //and also the weapon and armor equiped by the player
}
var player = {
    name: gameData.name,
    //make it so that if name ="Player" then its gameData.name
    health: 100,
    base_combat_stats: base_combat_stats,
    turn:0,//when fight end reset to 0, when you do an action +1

};

function playerTurn(action) {
    switch (action) {
        case "attack":
            attack(player, enemy);
            break;
        case "block":
            block(player);
            break;
        case "use_item":
            useItem(player);
            break;
        case "surrender":
            surrender(player);
            break;
        default:
            console.log("Invalid action");
    }
    if (enemy.health > 0) {
        enemyTurn();
    } else {
        console.log("Enemy defeated!");
    }
}

function enemyTurn() {
    // Implement enemy actions here
    var action = "attack"; // Example action
    switch (action) {
        case "attack":
            attack(enemy, player);
            break;
        case "block":
            block(enemy);
            break;
        default:
            console.log("Invalid action");
    }
    if (player.health <= 0) {
        console.log("Player defeated!");
    }
}

function attack(attacker, defender) {
    var damage = attacker.base_combat_stats.raw_strength * 10; // Example damage calculation
    defender.health -= damage;
    console.log(attacker.name + " attacks " + defender.name + " for " + damage + " damage.");
}

function block(character) {
    console.log(character.name + " is blocking.");
    // Implement block logic here
}

function useItem(character) {
    console.log(character.name + " uses an item.");
    // Implement item usage logic here
}

function surrender(character) {
    console.log(character.name + " surrenders.");
    // Implement surrender logic here
}


function show_fight_menue(opponent){
    //hide everything
    document.getElementById("main").style.display="none"
    //show the fight menue
    //oponent tag:
    let fight_menue=document.createElement("div")
    fight_menue.id="fight_menue"
    let opponent_div=document.createElement("div")
    opponent_div.id="opponent_tag"
    let opponent_name=document.createElement("h1")
    opponent_name.textContent=opponent.name

    //side by side
    let o_h2_part=document.createElement("div")
    o_h2_part.className="h2_part"
    let opponent_health=document.createElement("h2")
    opponent_health.textContent=opponent.health
    opponent_health.id="opponent_health"
    let opponent_realm=document.createElement("h2")
    opponent_realm.textContent=opponent.realm
    opponent_div.appendChild(opponent_name)
    o_h2_part.appendChild(opponent_health)
    o_h2_part.appendChild(opponent_realm)
    opponent_div.appendChild(o_h2_part)

    //console in the middle to write the fight


    //player tag:
    let player_div=document.createElement("div")
    player_div.id="player_tag"
    let player_name=document.createElement("h1")
    player_name.textContent=gameData.name
    let p_h2_part=document.createElement("div")
    p_h2_part.className="h2_part"
    let player_health=document.createElement("h2")
    player_health.textContent=player.health
    player_health.id="player_health"
    let player_realm=document.createElement("h2")
    player_realm.textContent=realms[gameData.realm].realm_name
    player_div.appendChild(player_name)
    p_h2_part.appendChild(player_health)
    p_h2_part.appendChild(player_realm)
    player_div.appendChild(p_h2_part)




    //action buttons
    let action_div=document.createElement("div")
    action_div.id="action_div"
    let attack_button=document.createElement("button")
    attack_button.textContent="Attack"
    attack_button.addEventListener("click",function(){
        playerTurn("attack")
    })
    let block_button=document.createElement("button")
    block_button.textContent="Block"
    block_button.addEventListener("click",function(){
        playerTurn("block")
    })
    let use_item_button=document.createElement("button")
    use_item_button.textContent="Use Item"
    use_item_button.addEventListener("click",function(){
        playerTurn("use_item")
    })
    let surrender_button=document.createElement("button")
    surrender_button.textContent="Surrender"
    surrender_button.addEventListener("click",function(){
        playerTurn("surrender")
    })
    action_div.appendChild(attack_button)
    action_div.appendChild(block_button)
    action_div.appendChild(use_item_button)
    action_div.appendChild(surrender_button)

    //push to html
    fight_menue.appendChild(opponent_div)
    fight_menue.appendChild(player_div)
    fight_menue.appendChild(action_div)
    body.appendChild(fight_menue)
    //attack
    //block
    //use item
    //surrender
    //if you click attack call playerTurn("attack")
    //if you click block call playerTurn("block")
    //if you click use item call playerTurn("use_item")
    //if you click surrender call playerTurn("surrender")
}
