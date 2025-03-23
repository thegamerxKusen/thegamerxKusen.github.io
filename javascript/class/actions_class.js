class ACTION{
    cooldown = 0
    constructor(name,tooltip,do_able,stamina_cost){
        this.name=name
        this.tooltip=tooltip
        this.do_able=do_able
        this.stamina_cost=stamina_cost
    }
    do_action(){
        if((player.stamina - this.stamina_cost)>=0){
            player.stamina -= this.stamina_cost
            this.custom_action()
        }else{
            sendMessage("Not enought stamina.")
        }
    }
    add_cooldomwn(duration){
        //duration in second
        this.do_able = false
        this.cooldown = duration
        refresh_place()
        const interval = setInterval(()=>{
            this.cooldown--
            if(this.cooldown<=0){
                this.do_able = true
                refresh_place()
                clearInterval(interval)
            }
            refresh_place()
        },1000)
    }
    custom_action(){
        console.log("Custom action not set")
    }
    
}

const sleep = new ACTION("Sleep","Rest and regenerate your stamina.",true,0)
sleep.custom_action=()=>{
    sendMessage(`You regained, your stamina.`)
    player.stamina=player.max_stamina
    sleep.add_cooldomwn(6)
    console.log(this.do_able)
}
