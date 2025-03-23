class REALM{
    constructor(name,bottleneck){
        this.name=name
        this.bottleneck=bottleneck
    }
    static breakthrough(){
        
    }
}
const civilian = new REALM("Civilian",168)
civilian.breakthrough=()=>{
    if(player.qi_days===this.bottleneck){
        player.realm=third_rate
    }
}
const third_rate = new REALM("Third rate", 5040);
const second_rate = new REALM("Second rate", 10080);
const first_rate = new REALM("First rate", 20160);

const entry_master = new REALM("Entry Master", 25200);
const proficient_master = new REALM("Proficient Master", 30240);
const peak_master = new REALM("Peak Master", 40320);

const entry_super_master = new REALM("Entry Super Master", 47040);
const proficient_super_master = new REALM("Proficient Super Master", 60480);
const peak_super_master = new REALM("Peak Super Master", 80640);

const entry_superior_master = new REALM("Entry Superior master", 150000);
const proficient_superior_master = new REALM("Proficient Superior master", 206000);
const peak_superior_master = new REALM("Peak Superior master", 252000);

const entry_supreme_master = new REALM("Entry Supreme master", 378000);
const proficient_supreme_master = new REALM("Proficient Supreme master", 504000);
const peak_supreme_master = new REALM("Peak Supreme master", 1008000);

const divine_master = new REALM("Divine master", 2016000);
const heavenly_master = new REALM("Heavenly master", 4032000);
const void_master = new REALM("Void master", 8064000);
const willful_master = new REALM("Willful master", 999999999999999);
/** 
example of overriding method for one element

Civilian.breakthrough = ()=>{
    console.log("Changed")
}

*/
