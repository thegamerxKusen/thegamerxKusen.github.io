
var tab ={
    1:"world_tab",
    2:"cultivation_tab",
    3:"nano_tab",
    4:"relationship_tab",
    5:"options_tab",
}
function switch_tab(text){
    document.getElementById("world_tab").style.display="none"
    document.getElementById("nano_tab").style.display="none"
    document.getElementById("cultivation_tab").style.display="none"
    document.getElementById("relationship_tab").style.display="none"
    document.getElementById("options_tab").style.display="none"
    document.getElementById(text).style.display="block"
    
}