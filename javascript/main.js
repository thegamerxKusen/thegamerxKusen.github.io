var gameData = {
    //char creation var
    sex:null,
    faction:null,
    name:"",

    qi_days: 0,
    
    realm:0,
    title:"Young Master",

    age:1008,
    lifespan:0,

    max_energy:100,
    energy:100,

    silver_nyang:0,

    breathing_manual_equiped:cultivation_manual.three_power,

    //equipment
    head_gear:null,
    upperboddy_gear:null,
    lowerboddy_gear:null,
    shoes_gear:null,
    weapons_gear:null,

    can_read:false,
  }
  var constante = {
    week:7,
    month:28,
    year:336,
  }

function start_character_creation(){
  let char_creation = document.getElementById("character_creation")
  let main =document.getElementById("main")
  hide_element(char_creation)
  main.style.display="flex"

  if(gameData.faction==null){
    showQuestion()
    char_creation.style.display="block"
    hide_element(main)
  }else{
    console.log("You already created your character")
    hide_element(char_creation)
    main.style.display="flex"
  }
}
function stat_update(){
    document.getElementById("title").innerHTML= gameData.title
    document.getElementById("player_name").innerHTML = gameData.name
    document.getElementById("player_faction").innerHTML = gameData.faction

    document.getElementById("breathing_manual").innerHTML = gameData.breathing_manual_equiped.name
    document.getElementById("money").innerHTML = gameData.silver_nyang
    document.getElementById("realm").innerHTML = realms[gameData.realm]["realm_name"]
    document.getElementById("age").innerHTML = days_to_year_month_week_day(gameData.age)
    document.getElementById("qi_reserve").innerHTML = days_to_year_month_week_day(gameData.qi_days.toFixed(2))

    if(gameData.qi_days==realms[gameData.realm]["max_qi_days"]){
      document.getElementById("Breakthrough").style.display="block"
    }
    else{
      hide_element(document.getElementById("Breakthrough"))
    }

    document.getElementById("max_qi").innerHTML = days_to_year_month_week_day(realms[gameData.realm]["max_qi_days"])

    document.getElementById("stam").innerHTML = gameData.energy
    document.getElementById("max_stam").innerHTML = gameData.max_energy
  }

  function loadingFunc(){
    //load or new game option new game lead to character creation
    where_can_you_go()
    stat_update()
    open_main_menu()
    set_straight_places_to_go_back();
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
      start_character_creation()
      hide_element(main_menue_div)
    },{ once: true });

    let load_game_button = document.createElement("button")
    load_game_button.innerHTML="Load Game"
    load_game_button.className="main_menu_load_game_button"
    load_game_button.addEventListener("click",function(){
      hide_element(main_menue_div)
      main_game_div.style.display="flex"
      load_game()
    },{ once: true });

    //push to html page
    body.appendChild(main_menue_div)
    main_menue_div.appendChild(main_menue_title)
    main_menue_div.appendChild(new_game_button)
    main_menue_div.appendChild(load_game_button)
  }
  

  //var mainGameLoop = window.setInterval(function() {})

function can_read(){
  return gameData.can_read
}


  function aging(day){
    gameData.age+=day
    document.getElementById("age").innerHTML = days_to_year_month_week_day(gameData.age)
  }

  function breakthrough(){
    if(gameData.qi_days==realms[gameData.realm]["max_qi_days"] && gameData.realm<19){
      gameData.realm+=1
      base_stats.max_fight_qi*=2
      
      base_stats.base_defence*=1.2
      base_stats.base_intelligence*=1.2
      base_stats.base_speed*=1.2
      base_stats.base_strength*=1.2
    }
    document.getElementById("realm").innerHTML = realms[gameData.realm]["realm_name"]
    document.getElementById("qi_reserve").innerHTML = days_to_year_month_week_day(gameData.qi_days)
    document.getElementById("max_qi").innerHTML = days_to_year_month_week_day(realms[gameData.realm]["max_qi_days"])

    if(gameData.qi_days==realms[gameData.realm]["max_qi_days"]){
      document.getElementById("Breakthrough").style.display="block"
    }
    else{
      hide_element(document.getElementById("Breakthrough"))

    }
  }

  function days_to_year_month_week_day(days){
    return(Math.floor(days/constante.year)+" years "+ Math.floor(days/constante.month)%12 + " months "+Math.floor(days/constante.week)%4 + " weeks " + days%constante.week + " days")
  }
