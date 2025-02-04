var constant_cultivation_upgrade = {
    level:0,
    cost:7,
    effect:0
  }
function constant_cultivation_upgrade_buy(){   
    constant_cultivation_upgrade.cost=7+constante.week*constant_cultivation_upgrade.level;
    if(gameData.qi_days>=constant_cultivation_upgrade.cost){
      constant_cultivation_upgrade.level+=1
      gameData.qi_days-=constant_cultivation_upgrade.cost
      constant_cultivation_upgrade.cost=7+constante.week*constant_cultivation_upgrade.level;
      constant_cultivation_upgrade.effect+=1
      aging(10)
    }
    document.getElementById("constant_cultivation_cost").innerHTML="Cost : "+constant_cultivation_upgrade.cost
    document.getElementById("constant_cultivation_level").innerHTML= "Level : "+constant_cultivation_upgrade.level
    document.getElementById("constant_cultivation_effect").innerHTML= constant_cultivation_upgrade.effect
}

  var constant_cultivation_upgrade_loop=window.setInterval(function(){
    cultivate(constant_cultivation_upgrade.effect)
},1000)


var meridian_cleansing_upgrade = {
    level:0,
    cost:28,
    effect:1
  }
function meridian_cleansing_upgrade_buy(){
    if(gameData.qi_days>=meridian_cleansing_upgrade.cost){
        meridian_cleansing_upgrade.level+=1
        gameData.qi_days-=meridian_cleansing_upgrade.cost
        meridian_cleansing_upgrade.cost=28+meridian_cleansing_upgrade.level*100;
        meridian_cleansing_upgrade.effect+=1
        gameData.qi_days_per_click=meridian_cleansing_upgrade.effect
        aging(10)
    }
    document.getElementById("meridian_cleansing_cost").innerHTML=meridian_cleansing_upgrade.cost
    document.getElementById("meridian_cleansing_level").innerHTML=meridian_cleansing_upgrade.level
    document.getElementById("meridian_cleansing_effect").innerHTML=meridian_cleansing_upgrade.effect
}
