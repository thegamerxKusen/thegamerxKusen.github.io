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
        open_main_game()

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
        <div class="tabs" id="options_tab">Option Tab</div>
    </div>
    <div id="right" class="body-content"></div></div>
    
    `
    refresh_stat()
    refresh_inventory()
    openTab(1)
    refresh_place()
}

function refresh_stat(){
    //<div></div>
    document.getElementById("left").innerHTML=`<ul class="stats">
    <li>Name : ${player.name}</li>
    <li>Title : ${player.title}</li>
    <li id="stam">Stamina : ${player.stamina} / ${player.max_stamina} </li>
    <li>Silver Nyang : ${player.silver_nyang} </li>
    <li>Martial Art : </li>
    <li>Realm : ${player.realm.name} </li>
    <li>Internal Energy : </li>
    <li>Cultivation Technique : </li>
    <li>${player.breathing_manual_equiped.name} </li>    
    </ul>
    <img src="assets/boy_cultivating.png" class="boy_cultivating" draggable="false"></img>
    `
    add_tooltip(document.getElementById("stam"),"Necessary to interact with the world, regenerate by sleeping, eating ...")
}

function refresh_place(){
    let world = document.getElementById("world_tab")
    world.innerHTML=`
    <div id="place-menue">
        <h1 id="place-title">${player.place_you_in.name}</h1>
        <p id="place-description">${player.place_you_in.description}</p>
        <div id="place-to-go" class="scrollable-box"></div>
        <div id="actions"></div>
    </div>
    `
    
    let place_to_go = document.getElementById("place-to-go")
    for(let _place of player.place_you_in.places){
        let place = document.createElement("button")
        place.textContent=_place.name
        place.className="place"
        add_tooltip(place,_place.description)
        place.addEventListener("click",()=>{
            _place.go().bind(player.place_you_in)
        })
        place_to_go.appendChild(place)
    }

    if(player.last_place[0]){
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


function go_back(){
    
}