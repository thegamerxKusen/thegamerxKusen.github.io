var gameData = {
    //char creation var
    sex:null,
    faction:null,
    name:"",

    qi_days: 0,
    
    realm:0,
    
    story_progress:0,

    age:1008,
    lifespan:0,

    max_energy:100,
    energy:10,

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

  function stat_update(){
    document.getElementById("breathing_manual").innerHTML = gameData.breathing_manual_equiped.name
    document.getElementById("money").innerHTML = gameData.silver_nyang
    document.getElementById("realm").innerHTML = realms[gameData.realm]["realm_name"]
    document.getElementById("age").innerHTML = days_to_year_month_week_day(gameData.age)
    document.getElementById("qi_reserve").innerHTML = days_to_year_month_week_day(gameData.qi_days.toFixed(2))

    if(gameData.qi_days==realms[gameData.realm]["max_qi_days"]){
      document.getElementById("Breakthrough").style.display="block"
    }
    else{
      document.getElementById("Breakthrough").style.display="none"
    }

    document.getElementById("max_qi").innerHTML = days_to_year_month_week_day(realms[gameData.realm]["max_qi_days"])

    document.getElementById("stam").innerHTML = gameData.energy
    document.getElementById("max_stam").innerHTML = gameData.max_energy
  }

  function loadingFunc(){
    //load or new game option new game lead to character creation
    where_can_you_go()
    stat_update()
  }

  //var mainGameLoop = window.setInterval(function() {})


  

  function aging(day){
    gameData.age+=day
    document.getElementById("age").innerHTML = days_to_year_month_week_day(gameData.age)
  }

  function breakthrough(){
    if(gameData.qi_days==realms[gameData.realm]["max_qi_days"] && gameData.realm<19){
      gameData.realm+=1
    }
    document.getElementById("realm").innerHTML = realms[gameData.realm]["realm_name"]
    document.getElementById("qi_reserve").innerHTML = days_to_year_month_week_day(gameData.qi_days)
    document.getElementById("max_qi").innerHTML = days_to_year_month_week_day(realms[gameData.realm]["max_qi_days"])

    if(gameData.qi_days==realms[gameData.realm]["max_qi_days"]){
      document.getElementById("Breakthrough").style.display="block"
    }
    else{
      document.getElementById("Breakthrough").style.display="none"
    }
  }

  function days_to_year_month_week_day(days){
    return(Math.floor(days/constante.year)+" years "+ Math.floor(days/constante.month)%12 + " months "+Math.floor(days/constante.week)%4 + " weeks " + days%constante.week + " days")
  }
