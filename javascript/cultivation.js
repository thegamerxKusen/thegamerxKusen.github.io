function breathing_start(){
  let manual_effect = gameData.breathing_manual_equiped.effect
  let day_of_cultivation= parseInt(document.getElementById("days_to_cult").value, 10);
  if(!day_of_cultivation){
    day_of_cultivation=1
  }
  let qi_up=manual_effect

  if(gameData.qi_days+qi_up<=realms[gameData.realm]["max_qi_days"]){
    gameData.qi_days += qi_up*day_of_cultivation
    aging(day_of_cultivation)
  }
  else{
  gameData.qi_days=realms[gameData.realm]["max_qi_days"]
  aging(day_of_cultivation)
  }
  stat_update()
  if(gameData.qi_days==realms[gameData.realm]["max_qi_days"]){
    document.getElementById("Breakthrough").style.display="block"
  }
  else{
    document.getElementById("Breakthrough").style.display="none"
  }
}


  //gere les tab cultivate et train martial art:

function open_cultivation_tab(){
  document.getElementById("go_back_cult_button").style.display="block"
  document.getElementById("ma_tab_button").style.display="none"
  document.getElementById("cult_tab_button").style.display="none"
  document.getElementById("cult_tab").style.display="flex"
  
  document.getElementById("manual_effect").innerHTML=gameData.breathing_manual_equiped.effect
  document.getElementById("cult_room_bonus").innerHTML=0
  //need to find a way to make it refresh when day change
  var cult_tab_loop = window.setInterval(function() {
    let day_of_cultivation = parseInt(document.getElementById("days_to_cult").value, 10);
    if(!day_of_cultivation){
      day_of_cultivation=1
    }
    document.getElementById("days_to_cult_show").innerHTML=day_of_cultivation
    document.getElementById("future_cult_effect").innerHTML=gameData.breathing_manual_equiped.effect*day_of_cultivation
  })
  

}
function open_train_martial_art_tab(){
  document.getElementById("go_back_cult_button").style.display="block"
  document.getElementById("ma_tab_button").style.display="none"
  document.getElementById("cult_tab_button").style.display="none"
  document.getElementById("ma_tab").style.display="block"

  


}
function close_culti_ma_tab(){
  document.getElementById("ma_tab").style.display="none"
  document.getElementById("cult_tab").style.display="none"
  document.getElementById("ma_tab_button").style.display="block"
  document.getElementById("cult_tab_button").style.display="block"
  document.getElementById("go_back_cult_button").style.display="none"
  var cult_tab_loop = null
}





//cultivation manual selected : blabla / Effect: blabla:
//cultivate for []days (manualy set)/ Qi days you will have after/ Age You will have after
//Maybe when player click on cultivate or train MA it open new windows with all this?