class PLACE{
    access=true
    constructor(name,description,places,actions,access){
        this.name = name;
        this.description = description;
        this.places = places;
        this.actions = actions;
        if(access){
            this.access=access
        }else{access=true}
        
    }
    get access(){
        return this.access
    }

    go(){
        player.last_place.push(player.place_you_in)
        player.place_you_in=this
        refresh_place()
    }

    grant_acces(){
        this.access=true
    }
    revoke_acces(){
        this.access=false
    }
}

//do something with bind or call to stock the place to go back
function go_back(){
    if(player.last_place.length>0){
        player.place_you_in=player.last_place.pop()
        refresh_place()
    }
}