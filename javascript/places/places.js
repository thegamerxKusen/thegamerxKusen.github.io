var places={
    place_you_in:Demon_Palace_main,
    go_to:"go_to_",
    go_to_reset:"go_to_",
    action_:"action_"
}

const going_in_places_div = document.getElementsByClassName("going_in_places")
const action_div = document.getElementsByClassName("actions")

function where_can_you_go(){
    //place part
    if(places.place_you_in==null){
        console.log("You are nowhere, wtf?")
    }else{
        document.getElementById("place_you_in_id").innerHTML = places.place_you_in.name
        document.getElementById("place_desc_id").innerHTML = places.place_you_in.description
    }
    going_in_places_div[0].innerHTML=""
    if(Array.isArray(places.place_you_in.places_in)){
        places.place_you_in.places_in.forEach((item, index) => {

            const go_in_button = document.createElement("button");
            go_in_button.className="go_to"
            go_in_button.style.display="block"
            go_in_button.innerHTML="Enter the "+item.name
            go_in_button.addEventListener("click", function(){
                places_go_to(item)
                
            })
            going_in_places_div[0].appendChild(go_in_button);
        });
    }
    //go back button
    const go_back_button = document.createElement("button");
    go_back_button.className="go_back_to"
    go_back_button.id="go_back"
    go_back_button.textContent="Go back"
    go_back_button.setAttribute("onclick","to_go_back()")
    going_in_places_div[0].appendChild(go_back_button);

    //action part
    
    if(Array.isArray(places.place_you_in.actions)){
        action_div[0].innerHTML=""
        places.place_you_in.actions.forEach((item, index) => {

            const action_button = document.createElement("button");
            action_button.className="go_to"
            if(canPerformAction(item)){
                action_button.style.display="block"
                action_button.innerHTML=item.name
                action_button.addEventListener("click", function(){
                    doAction(item)
                })
                action_div[0].appendChild(action_button);
            }
        });
    }else{
        console.log("not an array bastard")
    }
}

function to_go_back(){
    if(places.place_you_in.go_back_place==null){
        console.log("You can't go back from here")
    }else{
        places.place_you_in=places.place_you_in.go_back_place
    }
    where_can_you_go()
}

function places_go_to(place){
    if(place==null){    
    }else{
        places.place_you_in=place
    }
    places.go_to = "go_to_"; // Reset the go_to variable
    where_can_you_go()
}