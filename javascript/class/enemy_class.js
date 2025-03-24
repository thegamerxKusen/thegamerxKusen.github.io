class ENEMY{
    constructor(name,realm,qi,max_qi,strenght,speed,inteligence,defence,moveset,health,max_health){
        this.name = name
        this.realm= getRealm(realm)
        this.qi=qi
        this.max_qi=max_qi
        this.strenght=strenght
        this.speed=speed
        this.inteligence=inteligence
        this.defence=defence
        this.moveset=moveset
        this.health=health
        this.max_health=max_health
    }
}

const dummy = new ENEMY("Dummy",0,0,0,0,0,0,0,[null,null,null,null],10,100)