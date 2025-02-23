var gameData = {
    qi_days: 0,
  
    qi_days_per_click: 1,
    
    realm:0,
    
    story_progress:0,

    age:4032,
    lifespan:0,

    max_energy:100,
    energy:10,

    silver_nyang:100,

    breathing_manual_equiped:cultivation_manual.three_power,

    //equipment
    head_gear:null,
    upperboddy_gear:null,
    lowerboddy_gear:null,
    shoes_gear:null,
    weapons_gear:null,
  }
  var constante = {
    week:7,
    month:28,
    year:336,
  }

  function loadingFunc(){
    day_to_cultivate=document.getElementById("day_cultivate")
    where_can_you_go()
    document.getElementById("breathing_manual").innerHTML = gameData.breathing_manual_equiped.name
    document.getElementById("money").innerHTML = gameData.silver_nyang
    document.getElementById("realm").innerHTML = realms[gameData.realm]["realm_name"]
    document.getElementById("age").innerHTML = days_to_year_month_week_day(gameData.age)
    document.getElementById("qi_reserve").innerHTML = days_to_year_month_week_day(gameData.qi_days.toFixed(2))

    
    document.getElementById("stam").innerHTML = gameData.energy
    document.getElementById("max_stam").innerHTML = gameData.max_energy
    
    if (gameData.realm==19){
      document.getElementById("max_qi").innerHTML = Infinity
    }else{
      document.getElementById("max_qi").innerHTML = days_to_year_month_week_day(realms[gameData.realm]["max_qi_days"])
    }
    if(gameData.qi_days==realms[gameData.realm]["max_qi_days"]){
      document.getElementById("Breakthrough").style.display="block"
    }
    else{
      document.getElementById("Breakthrough").style.display="none"
    }
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
    if (gameData.realm==19){
      document.getElementById("max_qi").innerHTML = Infinity
    }else{
      document.getElementById("max_qi").innerHTML = days_to_year_month_week_day(realms[gameData.realm]["max_qi_days"])
    }
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


  function reset(){
    
  }