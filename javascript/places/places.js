var places={
    place_you_in:Home,
    go_to:"go_to_",
    go_to_reset:"go_to_",
    action_:"action_"
}



function where_can_you_go(){
    //place part
    if(places.place_you_in==null){

    }else{
        document.getElementById("place_you_in_id").innerHTML = places.place_you_in.name
        document.getElementById("place_desc_id").innerHTML = places.place_you_in.description
    }
    for (let i = 1; i <= places.place_you_in.number_of_going_in_options; i++) {
        places.go_to+=i
        document.getElementById(places.go_to).style.display="block"
        document.getElementById(places.go_to).innerHTML="Enter the "+places.place_you_in.places_in[i].name
        places.go_to = "go_to_"
    }
    if(places.place_you_in.places_in==null){
        for (let i = 1; i <= 8; i++) {
            places.go_to_reset+=i
            document.getElementById(places.go_to_reset).style.display="none"
            places.go_to_reset = "go_to_"
            }
        }

    //action part
    for (let i = 1; i <= 8; i++) {
        places.action_+=i
        document.getElementById(places.action_).style.display="none"
        places.action_ = "action_"
        }

        
    places.action_ = "action_"
    if(places.place_you_in.actions!=null){
        for (let i = 1; i <= places.place_you_in.numb_actions; i++) {
        places.action_+=i
        if(canPerformAction(places.place_you_in.actions[i])){
            document.getElementById(places.action_).style.display="block"
            document.getElementById(places.action_).innerHTML=places.place_you_in.actions[i].name
        }
        
        places.go_to = "action_"
        }
       }
       places.action_ = "action_"

}

function to_go_back(){
    switch (places.place_you_in.name) {
        case "Kitchen":places_go_to(Home)
            break
        case "Training Ground":places_go_to(Home)
            break
        case "Bathroom":places_go_to(Home)
            break
        case "Room":places_go_to(Home)
            break
        default:
        console.log("Can't get out");
    }
    where_can_you_go()
}

function places_go_to(place){
    if(place==null){    
    }else{
        places.place_you_in=place
    }
    where_can_you_go()
}