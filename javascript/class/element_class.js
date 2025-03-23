class ELEMENT{
    weakness=null
    strenght=null
    constructor(name){
        this.name = name
    }
    setWeaknessStrenght(weakness,strenght){
        this.strenght=strenght
        this.weakness=weakness
    }
    isWeak(element){
        //return true if the other element is my weakness
        return element===this.weakness
    }
    isStrong(element){
        //return true if the other element is my strenght
        return element===this.strenght
    }
}

let electric = new ELEMENT("Earth")
let water = new ELEMENT("Water")
let fire = new ELEMENT("Fire")
let wood = new ELEMENT("Wood")
let earth  = new ELEMENT("Earth")


function setElementalsSW(){
    electric.setWeaknessStrenght(earth,water)
    water.setWeaknessStrenght(electric,fire)
    fire.setWeaknessStrenght(water,wood)
    wood.setWeaknessStrenght(wood,earth)
    earth.setWeaknessStrenght(wood,electric)
}

function elementFaceOF(element1,element2){
    //this function return either null, which mean elemental neutrality or the wining element 
    if(element1.isStrong(element2)){
        return element1
    }else if(element2.isStrong(element1)){
        return element2
    }else{
        return null
    }
}