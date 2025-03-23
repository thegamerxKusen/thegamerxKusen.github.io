function loadingFunc(){
    
    open_main_menu()
    
}

function open_main_menu(){
    let main_menue_div = document.createElement("div")
    main_menue_div.className="main_menu"
    //title
    let main_menue_title = document.createElement("h1")
    main_menue_title.innerHTML="Murim Simulator"
    main_menue_title.className="main_menu_title"
    
    //button
    let new_game_button = document.createElement("button")
    new_game_button.innerHTML="New Game"
    new_game_button.className="main_menu_new_game_button"
    new_game_button.addEventListener("click",function(){
        create_character()
        main_menue_div.remove()
    },{ once: true });
    //if there is save when you hover the load button there is shown your name and realm on a tooltip
    let load_game_button = document.createElement("button")
    load_game_button.innerHTML="Load Game"
    load_game_button.className="main_menu_load_game_button"
    load_game_button.addEventListener("click",function(){
        //if there is no save : new game
        //temp : 
        if(!load_game()){
            create_character()
        }
    main_menue_div.remove()
    },{ once: true });

    //push to html page
    body.appendChild(main_menue_div)
    main_menue_div.appendChild(main_menue_title)
    main_menue_div.appendChild(new_game_button)
    main_menue_div.appendChild(load_game_button)
}

function open_main_game(){
    document.getElementById("body").innerHTML=`
    <div class="main-game">
    <div id="left" class="body-content"></div>
    <div id="center" class="body-content">
        <div class="tab-selection">
            <button class="tab-button" onclick="openTab(1)">World</button>
            <button class="tab-button" onclick="openTab(2)">Cultivation</button>
            <button class="tab-button" onclick="openTab(3)">Preparation</button>
            <button class="tab-button" onclick="openTab(4)">Option</button>
        </div>
        <div class="tabs" id="world_tab">World Tab</div>
        <div class="tabs" id="cultivation_tab">Cultivation Tab</div>
        <div class="tabs" id="fight_preparation_tab">Fight Preparation Tab </div>
        <div class="tabs" id="options_tab">
        <h1 id="console-title">Options:</h1>
        <div id="load-save-new">
            <button onclick="load_game()">Load Game</button>
            <button onclick="save_game()">Save Game</button>
            <button onclick="create_character()">New Game</button>
        </div>
        <div id="graphics">
        <button id="change-mode" onclick="">Light Mode</button>
        
        </div>
        
        </div>
    </div>
    <div id="right" class="body-content">
        <div id="inventory-menue" class="scrollable-box">
    <h1>Inventory</h1>
    <div id="inventory-container"></div>
    <div id="selected-item"></div>
    </div>

    <div id="console-menue" class="scrollable-box">
    <h1 id="console-title">Console</h1>
    <div id="console-container"></div>
    <button id="clear-console-btn" onclick="clear_console()">Clear Console</button>
    </div>

    </div></div>
    
    `
    //<button id="clear-console-btn">Clear Console</button>
    refresh_stat()
    refresh_inventory()
    openTab(1)
    refresh_place()
}

function refresh_stat(){
    //<div></div>
    document.getElementById("left").innerHTML=`
    <div class="stats">
    <h2 class="underlined">${player.name}</h2>
    <h2 class="stat">Title : ${player.title}</h2>
    <h2 class="stat" id="h"><progress id="health" class="stat" value="${player.health}" max="${player.max_health}">health</progress>${player.health} / ${player.max_health}</h2>
    <h2 class="stat" id="stam"><progress id="stamina" class="stat" value="${player.stamina}" max="${player.max_stamina}">Stamina</progress>${player.stamina} / ${player.max_stamina}</h2>
    <h2 class="stat">Silver Nyang : ${player.silver_nyang} </h2>
    <h2 class="underlined">Martial Art : </h2>
    <h2 class="stat" id="KI"><progress id="internal" class="stat" value="${player.qi}" max="${player.max_qi}">Stamina</progress>${player.qi} / ${player.max_qi}</h2>
    <h2 class="stat">Realm : ${player.realm.name} </h2>
    <h2 class="stat underlined">Cultivation Technique</h2>
    <h2 class="underlined stat">${player.breathing_manual_equiped.name} </h2>    
    <img src="${player.icon_path}" class="self-image" draggable="false"></img>
     </div>
    `
    let hp_bar = document.getElementById("h")
    add_tooltip(hp_bar,"Health, regenerate with or by going to the Medical Hall.")
    let qi_bar = document.getElementById("KI")
    add_tooltip(qi_bar,"Internal Energy, regenerate with pill or by circulating your energy. Increase by cultivating for a long period of time.")
    let stam_bar =document.getElementById("stam")
    add_tooltip(stam_bar,"Stamina, necessary to interact with the world, regenerate by sleeping, eating ...")
}

function refresh_place(){
    let world = document.getElementById("world_tab")
    world.innerHTML=`
    <div id="place-menue">
        <h1 id="place-title">${player.place_you_in.name}</h1>
        <p id="place-description">${player.place_you_in.description}</p>
        <div id="place-to-go" class="scrollable-box"></div>
        <div id="actions" class="scrollable-box"></div>
    </div>
    `
    
    let place_to_go = document.getElementById("place-to-go")
    for(let _place of player.place_you_in.places){
        if(_place.access){
            let place = document.createElement("button")
            place.textContent=_place.name
            place.className="place"
            add_tooltip(place,_place.description)
            place.addEventListener("click",()=>{
                _place.go()
            })
            place_to_go.appendChild(place)
        }
    }
    let action_to_do = document.getElementById("actions")
    for(let action of player.place_you_in.actions){
        if(action.do_able){
            let _action = document.createElement("button")
            _action.textContent=action.name
            _action.className="place"
            add_tooltip(_action,action.tooltip)
            _action.addEventListener("click",()=>{
                action.do_action()
            })
            action_to_do.appendChild(_action)
        }else{
            //make it grey and when hover say on cooldown
            let _action = document.createElement("button")
            _action.textContent=action.name
            _action.className="unusable"
            add_tooltip(_action,"Cooldown : "+action.cooldown+" second")
            _action.addEventListener("click",()=>{
                sendMessage("On cooldown")
            })
            action_to_do.appendChild(_action)
        }
    }

    if(player.last_place.length > 0){
        //create go back btn
        let back = document.createElement("button")
        back.textContent="Go back"
        back.className="place"
        //add_tooltip(place,_place.description)
        back.addEventListener("click",()=>{
            go_back()
        })
        place_to_go.appendChild(back)
    }
}


