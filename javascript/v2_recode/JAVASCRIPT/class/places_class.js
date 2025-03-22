class PLACE{
    constructor(name,description,places,actions){
        this.name = name;
        this.description = description;
        this.places = places;
        this.actions = actions;
    }
    go(){
        player.place_you_in=this
        refresh_place()
    }
}

//do something with bind or call to stock the place to go back
