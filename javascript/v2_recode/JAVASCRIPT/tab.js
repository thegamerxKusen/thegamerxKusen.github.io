let tabs ={
    1:"world_tab",
    2:"cultivation_tab",
    3:"fight_preparation_tab",
    4:"options_tab",
}
function openTab(index){
    hide_element(document.getElementById("world_tab"))
    hide_element(document.getElementById("cultivation_tab"))
    hide_element(document.getElementById("options_tab"))
    hide_element(document.getElementById("fight_preparation_tab"))
    document.getElementById(tabs[index]).style.display="block"
}